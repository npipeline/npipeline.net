import { AppShell } from "@mantine/core";
import { Header } from "./Header";
import { HeroSection } from "~/sections/HeroSection";
import { PainPointsSection } from "~/sections/PainPointsSection";
import { PipelineFlowSection } from "~/sections/PipelineFlowSection";
import { PerformanceSection } from "~/sections/PerformanceSection";
import { ResilienceSection } from "~/sections/ResilienceSection";
import { UseCasesSection } from "~/sections/UseCasesSection";
import { FeaturesSection } from "~/sections/FeaturesSection";
import { CodeSection } from "~/sections/CodeSection";
import { CtaSection } from "~/sections/CtaSection";

export function HomePage() {
  return (
    <AppShell header={{ height: 60 }} padding={0}>
      <AppShell.Header
        style={{
          backgroundColor: "rgba(0, 18, 25, 0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(0, 95, 115, 0.2)",
        }}
      >
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <HeroSection />
        <PainPointsSection />
        <PipelineFlowSection />
        <PerformanceSection />
        <ResilienceSection />
        <UseCasesSection />
        <FeaturesSection />
        <CodeSection />
        <CtaSection />
      </AppShell.Main>
    </AppShell>
  );
}