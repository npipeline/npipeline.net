import { Container, Title, Text, Button, Stack } from "@mantine/core";
import { Link } from "react-router";

export default function AboutPage() {
  return (
    <Container size="md" py="xl">
      <Stack align="center" gap="lg">
        <Title order={1}>About NPipeline</Title>
        <Text size="lg" c="dimmed" ta="center">
          NPipeline is a powerful, flexible library designed for constructing
          robust, graph-based streaming data workflows. By combining the type
          safety of C# with a directed acyclic graph (DAG) architecture,
          NPipeline empowers developers to build complex ETL processes,
          real-time data streams, and event-driven architectures that are easy
          to test, debug, and maintain.{" "}
        </Text>
        <Button component={Link} to="/" variant="outline" size="md">
          Back to Home
        </Button>
      </Stack>
    </Container>
  );
}
