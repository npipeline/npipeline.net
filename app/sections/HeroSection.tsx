import { Box, Container, Title, Text, Button, Group, Pill } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { PlaceholderImage } from "~/components/PlaceholderImage";
import { ScrollReveal } from "~/components/ScrollReveal";

export function HeroSection() {
  return (
    <Box component="section" pt={75} pb={25} style={{ position: "relative", overflow: "hidden" }}>
      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <ScrollReveal delay={80}>
          <Title
            order={1}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: 1.1,
              maxWidth: 900,
              background: "linear-gradient(90deg, #005F73, #0A9396)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: 900,
            }}
            mb="lg"
          >
            High-Performance, Type-Safe, Streaming Data Pipelines in .NET
          </Title>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <Text size="xl" fw={500} mb="md" maw={800} style={{ color: "#001219" }}>
            NPipeline is a powerful, flexible library designed for constructing robust, graph-based streaming data workflows.
          </Text>
          <Text size="lg" c="dimmed" maw={600} mb="xl">
            By combining the type safety of C# with a directed acyclic graph (DAG) architecture, NPipeline empowers developers to build complex ETL processes, real-time data streams, and event-driven architectures that are easy to test, debug, and maintain.
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Group gap="md" mb="xl">
            <Button
              size="lg"
              rightSection={<IconChevronRight size={18} />}
              color="teal"
              radius="sm"
              component="a"
              href="#better-way"
            >
              Why NPipeline?
            </Button>
            <Button size="lg" variant="default" radius="sm" component="a" href="https://docs.npipeline.net/getting-started/quick-start">
              Quick Start
            </Button>
          </Group>
        </ScrollReveal>
      </Container>

    </Box>
  );
}
