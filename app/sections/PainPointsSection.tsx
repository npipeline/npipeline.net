import { Container, Text, Grid, Stack } from "@mantine/core";

const painPoints = [
  {
    border: "#9B2226",
    title: "Memory nightmares",
    description:
      "Your pipeline loads everything into memory, then crashes at 2 AM when someone uploads a file that's slightly larger than usual.",
  },
  {
    border: "#CA6702",
    title: "Spaghetti transforms",
    description:
      "Your data processing logic started simple. Now it's 2,000 lines of nested loops and conditional statements that nobody wants to touch — or test.",
  },
  {
    border: "#EE9B00",
    title: "Silent failures",
    description:
      "One malformed record takes down your entire batch. You've wrapped everything in try-catch blocks, but errors still slip through to production.",
  },
];

export function PainPointsSection() {
  return (
    <div style={{ background: "#001219", padding: "64px 0" }}>
      <Container size="xl">
        <Text
          size="xs"
          tt="uppercase"
          lts={2}
          c="#AE2012"
          mb="xl"
          fw={600}
        >
          Data processing in .NET shouldn't feel like this
        </Text>
        <Grid gap="xl">
          {painPoints.map((p) => (
            <Grid.Col key={p.title} span={{ base: 12, md: 4 }}>
              <Stack gap={4} style={{ borderLeft: `3px solid ${p.border}`, paddingLeft: 16 }}>
                <Text size="lg" fw={600} c={p.border}>
                  {p.title}
                </Text>
                <Text size="sm" c="#94D2BD" lh={1.6} style={{ opacity: 0.8 }}>
                  {p.description}
                </Text>
              </Stack>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </div>
  );
}