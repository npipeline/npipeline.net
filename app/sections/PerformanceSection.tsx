import { Container, Text, Group, Stack } from "@mantine/core";

const stats = [
  {
    value: "~2MB",
    valueColor: "#0A9396",
    label: "Streaming peak memory",
    note: "vs 500MB eager loading",
    noteColor: "#9B2226",
  },
  {
    value: "<1ms",
    valueColor: "#EE9B00",
    label: "Time to first item",
    note: "No waiting for full dataset",
    noteColor: "rgba(148,210,189,0.5)",
  },
  {
    value: "90%",
    valueColor: "#94D2BD",
    label: "Less GC pressure",
    note: "ValueTask fast paths",
    noteColor: "rgba(148,210,189,0.5)",
  },
];

export function PerformanceSection() {
  return (
    <div style={{ background: "#001a24", padding: "64px 0" }}>
      <Container size="xl">
        <Text
          size="xs"
          tt="uppercase"
          lts={2}
          c="#0A9396"
          ta="center"
          mb={48}
        >
          Process more data than fits in memory
        </Text>
        <Group justify="center" gap={64} wrap="wrap">
          {stats.map((s) => (
            <Stack key={s.value} align="center" gap={4}>
              <Text
                fz={{ base: 36, md: 48 }}
                fw={800}
                lh={1}
                c={s.valueColor}
              >
                {s.value}
              </Text>
              <Text size="sm" c="#94D2BD" mt={8}>
                {s.label}
              </Text>
              <Text size="xs" c={s.noteColor}>
                {s.note}
              </Text>
            </Stack>
          ))}
        </Group>
      </Container>
    </div>
  );
}