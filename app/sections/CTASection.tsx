import { Box, Container, Title, Text, Button, Group, Card, Stack } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";
import { CodeHighlight } from "~/components/CodeHighlight";

export function CTASection() {
  return (
    <Box component="section" py={{ base: 45, md: 70 }} bg="#F8F9FA">
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

              <CodeHighlight code="dotnet add package NPipeline" language="bash" />

              <Group gap="md">
                <Button
                  size="lg"
                  rightSection={<IconChevronRight size={18} />}
                  color="teal"
                  radius="sm"
                  component="a"
                  href="https://docs.npipeline.net/getting-started/"
                >
                  Getting Started
                </Button>
                <Button size="lg" variant="default" radius="sm" component="a" href="https://docs.npipeline.net/getting-started/key-concepts">
                  Explore Key Concepts
                </Button>
              </Group>
            </Stack>
          </Card>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
