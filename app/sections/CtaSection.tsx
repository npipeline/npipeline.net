import { Box, Container, Title, Text, Button, Group, Card, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";

export function CTASection() {
  return (
    <Box component="section" py={{ base: 45, md: 70 }}>
      <Container size="lg">
        <ScrollReveal>
          <Card padding="xl" radius="sm" bg="white" style={{ border: "1px solid #E4EAF0" }} ta="center">
            <Stack align="center" gap="lg">
              <SectionHeader label="Ready?" />
              <Title order={2} style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Ready to build better pipelines?
              </Title>
              <Text maw={560} c="dimmed">
                Get started in minutes. Build your first pipeline in 15.
              </Text>

              <Box
                component="pre"
                style={{
                  backgroundColor: "#0D1117",
                  color: "#C9D1D9",
                  padding: "12px 20px",
                  borderRadius: 8,
                  fontSize: 14,
                  overflowX: "auto",
                  fontFamily:
                    'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
                }}
              >
                <code>dotnet add package NPipeline</code>
              </Box>

              <Group gap="md">
                <Button
                  size="lg"
                  rightSection={<IconChevronRight size={18} />}
                  color="teal"
                  radius="sm"
                  component="a"
                  href="#getting-started"
                >
                  Getting Started
                </Button>
                <Button size="lg" variant="default" radius="sm" component="a" href="#core-concepts">
                  Explore Core Concepts
                </Button>
              </Group>
            </Stack>
          </Card>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
