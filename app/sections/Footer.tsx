import { Box, Container, Text, Group, Anchor, Stack } from "@mantine/core";

export function Footer() {
  return (
    <Box component="footer" py={20} bg="#001219">
      <Container size="lg">
        <Stack align="center" gap="sm">
          <Text c="dimmed" size="sm">
            NPipeline
          </Text>
          <Group gap="lg">
            <Anchor href="/docs" c="dimmed" size="sm" style={{ color: "#94D2BD" }}>
              Docs
            </Anchor>
            <Anchor href="https://github.com/npipeline/npipeline" c="dimmed" size="sm" style={{ color: "#94D2BD" }}>
              GitHub
            </Anchor>
          </Group>
          <Text c="dimmed" size="xs" mt="xs">
            &copy; {new Date().getFullYear()} NPipeline
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
