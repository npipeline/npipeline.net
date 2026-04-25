import { Container, Title, Text, Grid, GridCol, Stack } from "@mantine/core";
import { Parallax } from "@gfazioli/mantine-parallax";

const items = [
  {
    title: "Retry policies",
    description:
      "Transient failures get automatic retries with configurable backoff. Persistent failures trigger node restarts or route items to dead-letter queues.",
  },
  {
    title: "Circuit breakers",
    description:
      "Protect downstream systems from cascading failures. When a dependency is struggling, stop hammering it and give it time to recover.",
  },
  {
    title: "Granular error handling",
    description:
      "Handle errors at the item level or the stream level. One bad record doesn't have to poison your entire batch.",
  },
];

export function ResilienceSection() {
  return (
    <div style={{ background: "#001219", padding: "64px 0" }}>
      <Container size="md">
        <Title
          order={2}
          c="white"
          fz={{ base: 22, md: 28 }}
          ta="center"
          mb="xl"
        >
          Built for the real world, where things fail
        </Title>

        <Parallax perspective={800} initialRotationX={5} initialRotationY={5} lightEffect>
          <div
            style={{
              background:
                "linear-gradient(160deg, #005F73, rgba(0,18,25,0.7))",
              borderRadius: 10,
              border: "1px solid rgba(10,147,150,0.25)",
              padding: "36px 28px",
            }}
          >
            <Grid>
              {items.map((item) => (
                <GridCol key={item.title} span={{ base: 12, md: 4 }}>
                  <Stack gap={4}>
                    <Text fw={600} c="white" fz="md" mb={4}>
                      {item.title}
                    </Text>
                    <Text size="sm" c="#94D2BD" lh={1.5}>
                      {item.description}
                    </Text>
                  </Stack>
                </GridCol>
              ))}
            </Grid>
          </div>
        </Parallax>
      </Container>
    </div>
  );
}