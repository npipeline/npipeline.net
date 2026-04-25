import { Box, Text } from "@mantine/core";

interface PlaceholderImageProps {
  label: string;
  height?: number | string;
}

export function PlaceholderImage({ label, height = 280 }: PlaceholderImageProps) {
  return (
    <Box
      bg="gray.1"
      style={{
        height,
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed var(--mantine-color-gray-4)",
      }}
    >
      <Text c="dimmed" size="sm">
        {label}
      </Text>
    </Box>
  );
}
