import {
  Box,
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
} from "@mantine/core";
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
          <Title
            order={2}
            ta="center"
            //mb="xl"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            NPipeline Studio
          </Title>
          <Title order={3} ta="center" c="dimmed" mb="xl" maw={600} mx="auto">
            Coming soon
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
                  Visual debugging for NPipeline
                </Title>
                <Text size="lg" c="dimmed" maw={600}>
                  NPipeline Studio is a local real-time pipeline monitoring and
                  debugging tool. Developers building complex workflows with
                  NPipeline get immediate insight into what's happening, where
                  bottlenecks occur, and why things fail.
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

              {/* <Group gap="md">
                <Button
                  size="md"
                  rightSection={<IconChevronRight size={18} />}
                  color="teal"
                  radius="sm"
                >
                  Learn more about Studio
                </Button>
                <Button size="md" variant="default" radius="sm">
                  Try the demo
                </Button>
              </Group> */}
            </Stack>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
