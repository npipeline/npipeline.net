import { Box, Container, Title, Text, SimpleGrid, Card, Group } from "@mantine/core";
import {
  IconTruckDelivery,
  IconLiveView,
  IconFileCheck,
  IconPackages,
  IconBolt,
  IconApi,
} from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const useCases = [
  {
    icon: IconTruckDelivery,
    title: "ETL workflows",
    description:
      "Extract from databases, APIs, and files. Transform with validation and enrichment. Load to your destination. All with clear, testable code.",
  },
  {
    icon: IconLiveView,
    title: "Real-time streaming",
    description:
      "Process data as it arrives from message queues, webhooks, or IoT devices. Sub-millisecond latency to first item processed.",
  },
  {
    icon: IconFileCheck,
    title: "Data validation",
    description:
      "Implement complex validation rules as discrete, testable transforms. Route invalid items to review queues without stopping the pipeline.",
  },
  {
    icon: IconPackages,
    title: "Batch processing",
    description:
      "Process millions of historical records without running out of memory. Streaming architecture means predictable resource usage.",
  },
  {
    icon: IconBolt,
    title: "Event-driven systems",
    description:
      "React to events with complex processing logic. Fan out to multiple sinks. Handle backpressure gracefully.",
  },
  {
    icon: IconApi,
    title: "Microservice integration",
    description:
      "Transform data between services with different schemas. Enrich with data from multiple sources. Maintain type safety across boundaries.",
  },
];

export function UseCasesSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }}>
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Use Cases" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xl" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Built for these problems
          </Title>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
          {useCases.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 80}>
              <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0", height: "100%" }}>
                <Group gap="sm" align="center" mb="sm">
                  <item.icon size={32} color="#005F73" stroke={1.5} />
                  <Title order={4}>{item.title}</Title>
                </Group>
                <Text size="md" c="dimmed">
                  {item.description}
                </Text>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
