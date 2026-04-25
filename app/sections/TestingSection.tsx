import { Box, Container, Title, Text, SimpleGrid, Card, Group } from "@mantine/core";
import { IconBox, IconServer, IconTestPipe } from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const testing = [
  {
    icon: IconBox,
    title: "Isolated nodes",
    description:
      "Test each node independently. Pass in test data, assert on outputs. No pipeline ceremony required.",
  },
  {
    icon: IconServer,
    title: "In-memory testing",
    description:
      "Use the testing extensions to run entire pipelines in memory. Verify end-to-end behaviour without external dependencies.",
  },
  {
    icon: IconTestPipe,
    title: "Assertion libraries",
    description:
      "First-class support for FluentAssertions and AwesomeAssertions. Write expressive tests that read like specifications.",
  },
];

export function TestingSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="white">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Testing" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Designed for testing from day one
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            Every node is a standalone class. Test your transforms with simple unit tests — no mocking of pipeline infrastructure required.
          </Text>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" style={{ gridAutoRows: "1fr" }}>
          {testing.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
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
