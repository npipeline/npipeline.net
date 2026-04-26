import { Box, Container, Title, Text, SimpleGrid, Card, Stack, Group } from "@mantine/core";
import {
  IconComponents,
  IconPlug,
  IconLink,
  IconRoute,
  IconCpu,
  IconTestPipe,
  IconSearch,
  IconPackages,
} from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const modules = [
  { icon: IconComponents, title: "Composition", description: "Create hierarchical, modular pipelines by treating entire pipelines as reusable transform nodes." },
  { icon: IconPlug, title: "Connectors", description: "Pre-built sources and sinks for common targets. CSV files, storage providers, and more." },
  { icon: IconLink, title: "Dependency Injection", description: "Seamlessly integrate with your favourite DI container. Constructor injection in nodes." },
  { icon: IconRoute, title: "Lineage", description: "Comprehensive data lineage tracking and provenance capabilities. Track the complete journey of each data item." },
  { icon: IconPackages, title: "Nodes", description: "Pre-built, production-ready nodes for string, numeric, and datetime cleansing, validation, filtering, and conversion." },
  { icon: IconSearch, title: "Observability", description: "Comprehensive metrics collection and monitoring. Track throughput, memory usage, retries, and errors." },
  { icon: IconCpu, title: "Parallelism", description: "Execute pipeline nodes in parallel. Configurable concurrency limits, queue policies, and ordering behaviour." },
  { icon: IconTestPipe, title: "Testing", description: "Comprehensive utilities and helpers for writing efficient tests. In-memory sources, sinks, and assertion helpers." },
];

export function ExtensionsSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="white">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Extensions" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Modular by design
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={560} mx="auto" mb="xl" c="dimmed">
            Start with the core library. Add extensions as you need them.
          </Text>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
          {modules.map((m, i) => (
            <ScrollReveal key={m.title} delay={i * 80}>
              <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0", height: "100%" }}>
                <Stack gap="sm">
                  <Group gap="sm" align="center">
                    <m.icon size={32} color="#005F73" stroke={1.5} />
                    <Title order={4}>{m.title}</Title>
                  </Group>
                  <Text size="md" c="dimmed">
                    {m.description}
                  </Text>
                </Stack>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
