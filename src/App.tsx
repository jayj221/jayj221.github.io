import AboutSection from './sections/AboutSection';
import ArchiveSection from './sections/ArchiveSection';
import AwardsSection from './sections/AwardsSection';
import ExperienceSection from './sections/ExperienceSection';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import MetricsSection from './sections/MetricsSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import VolunteeringSection from './sections/VolunteeringSection';

export default function App() {
  return (
    <main className="bg-[#0C0C0C]" style={{ overflowX: 'clip' }}>
      <HeroSection />
      <MarqueeSection />
      <MetricsSection />
      <AboutSection />
      <ServicesSection />
      <ExperienceSection />
      <ProjectsSection />
      <AwardsSection />
      <VolunteeringSection />
      <ArchiveSection />
    </main>
  );
}
