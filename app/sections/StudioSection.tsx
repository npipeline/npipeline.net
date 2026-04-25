import { Box, Container, Title, Text, Button, Group, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { PlaceholderImage } from "~/components/PlaceholderImage";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

export function StudioSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="#F8F9FA">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Visual Debugging" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xl" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            NPipeline Studio
          </Title>
        </ScrollReveal>

        <ScrollReveal delay={160}>
          <Box
            bg="white"
            style={{ border: "1px solid #E4EAF0", borderRadius: 8 }}
            p={{ base: 24, md: 40 }}
          >
            <Stack gap="xl">
              <Box>
                <Title order={3} mb="sm">
                  See your pipeline as it runs
                </Title>
                <Text size="lg" c="dimmed" maw={600}>
                  Stop debugging in the dark. NPipeline Studio provides a high-fidelity window into your runtime, allowing you to observe data flow and inspect state as it happens. Bridge the gap between code and execution to build resilient pipelines with total clarity.
                </Text>
              </Box>

              <Box
                component="img"
                src="/npipeline-studio.png"
                alt="NPipeline Studio"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 4,
                  border: "1px solid #E4EAF0",
                }}
              />

              <Group gap="md">
                <Button size="md" rightSection={<IconChevronRight size={18} />} color="teal" radius="sm">
                  Learn more about Studio
                </Button>
                <Button size="md" variant="default" radius="sm">
                  Try the demo
                </Button>
              </Group>
            </Stack>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
