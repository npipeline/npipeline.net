import {
  Box,
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
} from "@mantine/core";
import { IconRefresh, IconShieldCheck, IconBug } from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

const resilience = [
  {
    icon: IconRefresh,
    title: "Retry policies",
    description:
      "Transient failures get automatic retries with configurable backoff. Persistent failures trigger node restarts or route items to dead-letter queues.",
  },
  {
    icon: IconShieldCheck,
    title: "Circuit breakers",
    description:
      "Protect downstream systems from cascading failures. When a dependency is struggling, stop hammering it and give it time to recover.",
  },
  {
    icon: IconBug,
    title: "Granular error handling",
    description:
      "Handle errors at the item level or the stream level. One bad record doesn't have to poison your entire batch.",
  },
];

export function ResilienceSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="white">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Resilience" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title
            order={2}
            ta="center"
            mb="xs"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Built for the real world, where things fail
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            Production pipelines encounter bad data, network blips, and
            overwhelmed dependencies. NPipeline gives you the tools to handle
            failure gracefully - without bringing down your entire system.
          </Text>
        </ScrollReveal>

        <SimpleGrid
          cols={{ base: 1, sm: 3 }}
          spacing="lg"
          style={{ gridAutoRows: "1fr" }}
        >
          {resilience.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <Card
                padding="xl"
                radius="sm"
                bg="white"
                style={{ border: "1px solid #E4EAF0", height: "100%" }}
              >
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
