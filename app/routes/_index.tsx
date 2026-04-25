import { Box } from "@mantine/core";
import { Header } from "~/components/Header";
import { HeroSection } from "~/sections/HeroSection";
import { PainPointsSection } from "~/sections/PainPointsSection";
import { BetterWaySection } from "~/sections/BetterWaySection";
import { StudioSection } from "~/sections/StudioSection";
import { PerformanceSection } from "~/sections/PerformanceSection";
import { FastPathsSection } from "~/sections/FastPathsSection";
import { ResilienceSection } from "~/sections/ResilienceSection";
import { UseCasesSection } from "~/sections/UseCasesSection";
import { ModularSection } from "~/sections/ModularSection";
import { CodeSection } from "~/sections/CodeSection";
import { TestingSection } from "~/sections/TestingSection";
import { CTASection } from "~/sections/CTASection";
import { Footer } from "~/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Box bg="white" style={{ minHeight: "100vh" }}>
        <HeroSection />
        <PainPointsSection />
        <Box id="better-way">
          <BetterWaySection />
        </Box>
        <Box id="studio">
          <StudioSection />
        </Box>
        <PerformanceSection />
        <FastPathsSection />
        <ResilienceSection />
        <Box id="features">
          <UseCasesSection />
        </Box>
        <ModularSection />
        <CodeSection />
        <TestingSection />
        <Box id="getting-started">
          <CTASection />
        </Box>
      </Box>
      <Footer />
    </>
  );
}
