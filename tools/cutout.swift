// Background removal using the macOS Vision subject-lifting model —
// the same engine behind "Remove Background" in Preview and Photos.
//
//   swiftc -O tools/cutout.swift -o tools/cutout
//   ./tools/cutout <input-image> <output.png>

import AppKit
import CoreImage
import Foundation
import Vision

func fail(_ message: String) -> Never {
    FileHandle.standardError.write(Data("error: \(message)\n".utf8))
    exit(1)
}

let args = CommandLine.arguments
guard args.count == 3 else {
    fail("usage: cutout <input-image> <output.png>")
}

let inputURL = URL(fileURLWithPath: args[1])
let outputURL = URL(fileURLWithPath: args[2])

guard let source = CIImage(contentsOf: inputURL) else {
    fail("could not read image at \(inputURL.path)")
}

let handler = VNImageRequestHandler(ciImage: source, options: [:])
let request = VNGenerateForegroundInstanceMaskRequest()

do {
    try handler.perform([request])
} catch {
    fail("vision request failed: \(error.localizedDescription)")
}

guard let observation = request.results?.first else {
    fail("no foreground subject detected in \(inputURL.lastPathComponent)")
}

let instances = observation.allInstances
guard !instances.isEmpty else {
    fail("subject mask was empty")
}

let masked: CVPixelBuffer
do {
    masked = try observation.generateMaskedImage(
        ofInstances: instances,
        from: handler,
        croppedToInstancesExtent: false
    )
} catch {
    fail("could not generate masked image: \(error.localizedDescription)")
}

let output = CIImage(cvPixelBuffer: masked)
let context = CIContext()

guard let colorSpace = CGColorSpace(name: CGColorSpace.sRGB) else {
    fail("could not create sRGB color space")
}

do {
    try context.writePNGRepresentation(
        of: output,
        to: outputURL,
        format: .RGBA8,
        colorSpace: colorSpace
    )
} catch {
    fail("could not write PNG: \(error.localizedDescription)")
}

let w = Int(output.extent.width)
let h = Int(output.extent.height)
print("cut out \(instances.count) subject(s) → \(outputURL.path) (\(w)x\(h))")
