import { Container, Text, Grid, GridCol } from "@mantine/core";

const features = [
  { title: "Composition", description: "Create hierarchical, modular pipelines by treating entire pipelines as reusable transform nodes." },
  { title: "Connectors", description: "Pre-built sources and sinks for common targets. CSV files, storage providers, and more." },
  { title: "Dependency Injection", description: "Seamlessly integrate with your favorite DI container. Constructor injection in nodes." },
  { title: "Lineage", description: "Track the complete journey of each data item from source to destination for governance and debugging." },
  { title: "Nodes", description: "Pre-built, production-ready nodes for common data processing operations like cleansing and validation." },
  { title: "Observability", description: "Comprehensive metrics collection. Track node and pipeline performance, throughput, and errors." },
  { title: "Parallelism", description: "Execute pipeline nodes in parallel with configurable concurrency limits and ordering behavior." },
  { title: "Testing", description: "In-memory source and sink nodes, pipeline builder extensions, and assertion helpers for efficient tests." },
];

export function FeaturesSection() {
  return (
    <div style={{ background: "#0a0f14", padding: "64px 0" }}>
      <Container size="xl">
        <Text size="xs" tt="uppercase" lts={2} c="#0A9396" ta="center" mb={4}>
          Modular by design
        </Text>
        <Text c="rgba(148,210,189,0.5)" ta="center" mb="xl">
          Start with the core library. Add extensions as you need them.
        </Text>
        <Grid>
          {features.map((f) => (
            <GridCol key={f.title} span={{ base: 12, md: 6 }}>
              <div style={{ padding: "16px 0", borderBottom: "1px solid rgba(0,95,115,0.15)" }}>
                <Text fw={600} c="white" fz="md" mb={4}>
                  {f.title}
                </Text>
                <Text size="sm" c="rgba(148,210,189,0.5)" lh={1.5}>
                  {f.description}
                </Text>
              </div>
            </GridCol>
          ))}
        </Grid>
      </Container>
    </div>
  );
}