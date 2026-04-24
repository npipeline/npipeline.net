import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="lg">
        <Title order={1}>About NPipeline</Title>
        <Text size="lg" c="dimmed" ta="center">
          NPipeline is a next-generation pipeline management platform.
        </Text>
        <Button component={Link} to="/" variant="outline" size="md">
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}
