import { Box, Container, Title, Text, SimpleGrid, Card, Stack } from "@mantine/core";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const stats = [
  {
    title: "1M records, 500 bytes each",
    lines: [
      "Eager loading: ~500 MB peak memory",
      "NPipeline streaming: ~1-2 MB peak memory",
    ],
  },
  {
    title: "Sub-millisecond first item",
    description:
      "Start processing immediately. Don't wait for your entire dataset to load before seeing results.",
  },
  {
    title: "Predictable GC behaviour",
    description:
      "No surprise pauses. Memory usage scales with your pipeline's complexity, not your data volume.",
  },
];

export function PerformanceSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="white">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Streaming-first" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Process more data than fits in memory
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            NPipeline is streaming-first. Data flows through your pipeline item by item, so memory usage stays constant regardless of dataset size. Process a million records or a billion — your memory footprint stays the same.
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0" }}>
            <Title order={3} mb="lg">
              Real numbers, real impact
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
              {stats.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 100}>
                  <Card padding="lg" radius="sm" bg="#F5F8FC" style={{ height: "100%" }}>
                    <Title order={5} mb="xs" style={{ fontSize: 15 }}>
                      {s.title}
                    </Title>
                    {"lines" in s ? (
                      <Stack gap={4}>
                        {s.lines.map((line) => (
                          <Text key={line} size="sm" c="dimmed">
                            {line}
                          </Text>
                        ))}
                      </Stack>
                    ) : (
                      <Text size="sm" c="dimmed">
                        {s.description}
                      </Text>
                    )}
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
