import { Box, Container, Title, Text, SimpleGrid, Card, Stack, Group } from "@mantine/core";
import {
  IconDatabaseImport,
  IconTransform,
  IconDatabaseExport,
  IconGitPullRequest,
} from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const architecture = [
  {
    icon: IconDatabaseImport,
    title: "Sources",
    description:
      "Where data enters your pipeline. Read from files, databases, APIs, or message queues. Sources produce streams of typed items that flow downstream.",
  },
  {
    icon: IconTransform,
    title: "Transforms",
    description:
      "Where data gets processed. Validate, enrich, filter, aggregate, or reshape your data. Each transform is a focused, single-responsibility component.",
  },
  {
    icon: IconDatabaseExport,
    title: "Sinks",
    description:
      "Where data lands. Write to databases, send to APIs, or stream to files. Sinks consume the processed data and handle final delivery.",
  },
  {
    icon: IconGitPullRequest,
    title: "The Graph",
    description:
      "Connect nodes to form a directed acyclic graph. See exactly how data flows through your system. Debug by tracing the path, not by hunting through nested loops.",
  },
];

export function BetterWaySection() {
  return (
    <Box component="section" id="better-way" py={{ base: 30, md: 60 }} bg="#FBFDFF">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Architecture" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            A better way to process data
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            NPipeline gives you a graph-based architecture where data flows through discrete, testable nodes. Each piece does one thing well. Complexity emerges from composition, not accumulation.
          </Text>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
          {architecture.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0", height: "100%" }}>
                <Stack gap="sm">
                  <Group gap="sm" align="center">
                    <item.icon size={32} color="#005F73" stroke={1.5} />
                    <Title order={4}>{item.title}</Title>
                  </Group>
                  <Text size="md" c="dimmed">
                    {item.description}
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
