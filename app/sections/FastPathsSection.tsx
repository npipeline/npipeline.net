import { Box, Container, Title, Text, SimpleGrid, Card, Stack } from "@mantine/core";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const fastPaths = [
  {
    tag: "Fast path",
    description: "Synchronous result available? Stack allocation, zero GC pressure.",
  },
  {
    tag: "Slow path",
    description: "I/O required? Seamlessly transitions to true async.",
  },
  {
    tag: "Same code, both paths",
    description: "Write it once. NPipeline handles the optimisation.",
  },
];

export function FastPathsSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="#F8F9FA">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Zero-allocation" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Zero-allocation fast paths for high-throughput scenarios
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            NPipeline uses <code>ValueTask&lt;T&gt;</code> to eliminate heap allocations for synchronous operations. Cache hits, validation checks, simple calculations — they all run without touching the heap.
          </Text>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb="xl" style={{ gridAutoRows: "1fr" }}>
          {[
            {
              title: "100,000 items/second, 90% cache hits",
              body: (
                <>
                  That's <strong>90,000 Task allocations eliminated</strong> per second. Your GC pressure drops by up to 90%. Your P99 latency becomes predictable.
                </>
              ),
            },
            {
              title: "Plan-based execution",
              body: (
                <>
                  NPipeline compiles your pipeline structure once. During execution, there's no reflection, no per-item routing decisions — just direct method dispatch.
                </>
              ),
            },
          ].map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 100}>
          <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0", height: "100%" }}>
                <Title order={4} mb="sm">
                  {card.title}
                </Title>
                <Text size="md" c="dimmed">
                  {card.body}
                </Text>
              </Card>
            </ScrollReveal>
          ))}
        </SimpleGrid>

        <ScrollReveal delay={200}>
          <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0" }}>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
              {fastPaths.map((fp, i) => (
                <ScrollReveal key={fp.tag} delay={i * 100}>
                  <Card padding="lg" radius="sm" bg="#F5F8FC" style={{ height: "100%" }}>
                    <Title order={5} mb="xs" style={{ fontSize: 15 }}>
                      {fp.tag}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {fp.description}
                    </Text>
                  </Card>
                </ScrollReveal>
              ))}
            </SimpleGrid>
          </Card>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
