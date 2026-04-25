import { Box, Container, Title, Text, Button, Group, Pill } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { PlaceholderImage } from "~/components/PlaceholderImage";
import { ScrollReveal } from "~/components/ScrollReveal";

export function HeroSection() {
  return (
    <Box component="section" pt={75} pb={25} style={{ position: "relative", overflow: "hidden" }}>
      <Container size="lg" style={{ position: "relative", zIndex: 2 }}>
        <ScrollReveal delay={0}>
          <Pill
            size="lg"
            style={{
              backgroundColor: "#F5F8FC",
              color: "#005F73",
              border: "1px solid #E4EAF0",
              marginBottom: 24,
            }}
          >
            High-Performance, Type-Safe, Streaming Data Pipelines in .NET
          </Pill>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <Title
            order={1}
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              lineHeight: 1.15,
              maxWidth: 760,
            }}
            mb="lg"
          >
            NPipeline is a powerful, flexible library designed for constructing robust, graph-based streaming data workflows.
          </Title>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <Text size="lg" c="dimmed" maw={560} mb="xl">
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
            <Button size="lg" variant="default" radius="sm" component="a" href="#getting-started">
              Quick Start
            </Button>
          </Group>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <Group gap="xs">
            <Pill size="sm" style={{ backgroundColor: "#F5F8FC", border: "1px solid #E4EAF0", color: "#005F73" }}>
              Streaming-first
            </Pill>
            <Pill size="sm" style={{ backgroundColor: "#F5F8FC", border: "1px solid #E4EAF0", color: "#005F73" }}>
              Type-safe
            </Pill>
            <Pill size="sm" style={{ backgroundColor: "#F5F8FC", border: "1px solid #E4EAF0", color: "#005F73" }}>
              Zero-allocation fast paths
            </Pill>
          </Group>
        </ScrollReveal>
      </Container>

      <Container size="lg" mt={60}>
        <ScrollReveal delay={400}>
          <PlaceholderImage label="Hero visual / pipeline diagram" height={420} />
        </ScrollReveal>
      </Container>
    </Box>
  );
}
