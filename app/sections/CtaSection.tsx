import { Container, Title, Text, Button, Group } from "@mantine/core";

export function CtaSection() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0A9396 0%, #005F73 60%, #001219 100%)",
        padding: "80px 0",
      }}
    >
      <Container size="sm" ta="center">
        <Title order={2} c="white" fz={{ base: 24, md: 30 }} mb={8}>
          Ready to build better pipelines?
        </Title>
        <Text c="#94D2BD" mb="xl">
          Get started in minutes. Build your first pipeline in 15.
        </Text>
        <div
          style={{
            backgroundColor: "#0d1117",
            borderRadius: 6,
            padding: "10px 28px",
            fontFamily: "monospace",
            fontSize: "14px",
            color: "#0A9396",
            display: "inline-block",
            marginBottom: "20px",
          }}
        >
          dotnet add package NPipeline
        </div>
        <Group justify="center" gap="md" style={{ marginTop: "12px" }}>
          <Button
            size="md"
            bg="#EE9B00"
            c="#001219"
            radius="sm"
            fw={600}
            component="a"
            href="https://www.npipeline.dev/docs/getting-started/quick-start"
          >
            Getting Started
          </Button>
          <Button
            size="md"
            variant="outline"
            c="#94D2BD"
            radius="sm"
            style={{ borderColor: "rgba(148,210,189,0.3)" }}
            component="a"
            href="https://www.npipeline.dev/docs/core-concepts"
          >
            Core Concepts
          </Button>
        </Group>
      </Container>
    </div>
  );
}