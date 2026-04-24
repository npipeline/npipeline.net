import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { Link } from "react-router";

export default function HomePage() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="lg">
        <Title order={1}>Welcome to NPipeline</Title>
        <Text size="lg" c="dimmed" ta="center">
          High-Performance, Type-Safe, Streaming Data Pipelines in .NET{" "}
        </Text>
        <Button component={Link} to="/about" size="md">
          Learn More
        </Button>
      </Stack>
    </Container>
  );
}
