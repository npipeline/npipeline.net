import { Container, Text, Badge, Group } from "@mantine/core";

const useCases = [
  { label: "ETL Workflows", bg: "rgba(0,95,115,0.3)", border: "rgba(0,95,115,0.5)", color: "#0A9396" },
  { label: "Real-time Streaming", bg: "rgba(10,147,150,0.3)", border: "rgba(10,147,150,0.5)", color: "#94D2BD" },
  { label: "Data Validation", bg: "rgba(238,155,0,0.2)", border: "rgba(238,155,0,0.4)", color: "#EE9B00" },
  { label: "Batch Processing", bg: "rgba(148,210,189,0.15)", border: "rgba(148,210,189,0.3)", color: "#94D2BD" },
  { label: "Event-driven", bg: "rgba(202,103,2,0.2)", border: "rgba(202,103,2,0.4)", color: "#CA6702" },
  { label: "Microservice Integration", bg: "rgba(187,62,3,0.15)", border: "rgba(187,62,3,0.3)", color: "#BB3E03" },
];

export function UseCasesSection() {
  return (
    <div style={{ background: "#001219", padding: "48px 0" }}>
      <Container size="xl">
        <Text size="xs" tt="uppercase" lts={2} c="#E9D8A6" ta="center" mb="lg">
          Built for these problems
        </Text>
        <Group justify="center" gap="sm" wrap="wrap">
          {useCases.map((uc) => (
            <Badge
              key={uc.label}
              variant="outline"
              size="lg"
              radius="xl"
              style={{
                backgroundColor: uc.bg,
                borderColor: uc.border,
                color: uc.color,
                padding: "8px 20px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              {uc.label}
            </Badge>
          ))}
        </Group>
      </Container>
    </div>
  );
}