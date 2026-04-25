import { Box, Container, Group, Text } from "@mantine/core";

interface SectionHeaderProps {
  label: string;
}

export function SectionHeader({ label }: SectionHeaderProps) {
  return (
    <Group justify="center" gap="sm" mb="lg">
      <Box w={60} h="1px" bg="#ADC2E0" style={{ borderTop: "1px dashed #ADC2E0" }} />
      <Text
        size="sm"
        fw={600}
        style={{
          color: "#005F73",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </Text>
      <Box w={60} h="1px" bg="#ADC2E0" style={{ borderTop: "1px dashed #ADC2E0" }} />
    </Group>
  );
}
