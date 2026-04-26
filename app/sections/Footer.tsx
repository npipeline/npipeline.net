import { Box, Container, Text, Group, Anchor, Stack } from "@mantine/core";

export function Footer() {
  return (
    <Box component="footer" py={20} bg="#001219">
      <Container size="lg">
        <Stack align="center" gap="sm">
          {/* <Text c="dimmed" size="xs" mt="xs">
            &copy; {new Date().getFullYear()} NPipeline
          </Text> */}
        </Stack>
      </Container>
    </Box>
  );
}
