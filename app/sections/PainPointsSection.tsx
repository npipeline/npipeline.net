import { Box, Container, Title, Text, SimpleGrid, Card, Group } from "@mantine/core";
import { IconBrain, IconSettings, IconExclamationCircle } from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const painPoints = [
  {
    icon: IconBrain,
    title: "Memory nightmares",
    description:
      "Your pipeline loads everything into memory, then crashes at 2 AM when someone uploads a file that's slightly larger than usual. You've added more RAM twice this year.",
  },
  {
    icon: IconSettings,
    title: "Spaghetti transforms",
    description:
      "Your data processing logic started simple. Now it's 2,000 lines of nested loops and conditional statements that nobody wants to touch - or test.",
  },
  {
    icon: IconExclamationCircle,
    title: "Silent failures",
    description:
      "One malformed record takes down your entire batch. You've wrapped everything in try-catch blocks, but errors still slip through to production.",
  },
];

export function PainPointsSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="#F8F9FA">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="The Problem" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xl" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Data processing in .NET shouldn't feel like this
          </Title>
        </ScrollReveal>

        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing="lg" mt="xl" style={{ gridAutoRows: "1fr" }}>
          {painPoints.map((item, i) => (
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
