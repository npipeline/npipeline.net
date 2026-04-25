import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Grid,
  GridCol,
} from "@mantine/core";
import { Parallax } from "@gfazioli/mantine-parallax";

function CodeBlock() {
  return (
    <div
      style={{
        backgroundColor: "#0d1117",
        border: "1px solid rgba(10,147,150,0.2)",
        borderRadius: 8,
        padding: "24px",
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        fontSize: 13,
        lineHeight: 1.7,
        overflowX: "auto",
      }}
    >
      <div>
        <span style={{ color: "#0A9396" }}>var</span>{" "}
        <span style={{ color: "#E9D8A6" }}>source</span>{" "}
        <span style={{ color: "#94D2BD" }}>=</span>{" "}
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>AddSource</span>
        <span style={{ color: "#94D2BD" }}>&lt;</span>
        <span style={{ color: "#94D2BD" }}>OrderSource</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>Order</span>
        <span style={{ color: "#94D2BD" }}>&gt;</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div>
        <span style={{ color: "#0A9396" }}>var</span>{" "}
        <span style={{ color: "#E9D8A6" }}>validate</span>{" "}
        <span style={{ color: "#94D2BD" }}>=</span>{" "}
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>AddTransform</span>
        <span style={{ color: "#94D2BD" }}>&lt;</span>
        <span style={{ color: "#94D2BD" }}>ValidateOrder</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>Order</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>Order</span>
        <span style={{ color: "#94D2BD" }}>&gt;</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div>
        <span style={{ color: "#0A9396" }}>var</span>{" "}
        <span style={{ color: "#E9D8A6" }}>enrich</span>{" "}
        <span style={{ color: "#94D2BD" }}>=</span>{" "}
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>AddTransform</span>
        <span style={{ color: "#94D2BD" }}>&lt;</span>
        <span style={{ color: "#94D2BD" }}>EnrichWithCustomer</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>Order</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>EnrichedOrder</span>
        <span style={{ color: "#94D2BD" }}>&gt;</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div>
        <span style={{ color: "#0A9396" }}>var</span>{" "}
        <span style={{ color: "#E9D8A6" }}>sink</span>{" "}
        <span style={{ color: "#94D2BD" }}>=</span>{" "}
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>AddSink</span>
        <span style={{ color: "#94D2BD" }}>&lt;</span>
        <span style={{ color: "#94D2BD" }}>DatabaseSink</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#94D2BD" }}>EnrichedOrder</span>
        <span style={{ color: "#94D2BD" }}>&gt;</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div style={{ height: 8 }} />
      <div>
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>Connect</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#E9D8A6" }}>source</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#E9D8A6" }}>validate</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div>
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>Connect</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#E9D8A6" }}>validate</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#E9D8A6" }}>enrich</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
      <div>
        <span style={{ color: "#E9D8A6" }}>builder</span>
        <span style={{ color: "#EE9B00" }}>.</span>
        <span style={{ color: "#EE9B00" }}>Connect</span>
        <span style={{ color: "#94D2BD" }}>(</span>
        <span style={{ color: "#E9D8A6" }}>enrich</span>
        <span style={{ color: "#94D2BD" }}>, </span>
        <span style={{ color: "#E9D8A6" }}>sink</span>
        <span style={{ color: "#94D2BD" }}>)</span>
        <span style={{ color: "#94D2BD" }}>;</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(160deg, #001219 0%, #005F73 50%, #0A9396 100%)",
        padding: "80px 0 60px",
      }}
    >
      <Container size="xl">
        <Parallax
          perspective={800}
          initialRotationX={5}
          initialRotationY={5}
          lightEffect
        >
          <Grid gap="xl" align="center">
            <GridCol span={{ base: 12, md: 7 }}>
              <Text
                size="xs"
                tt="uppercase"
                lts={3}
                c="#94D2BD"
                mb="md"
              >
                High-Performance · Type-Safe · Streaming
              </Text>
              <Title
                fz={{ base: 30, md: 38 }}
                fw={700}
                c="white"
              >
                Data Pipelines{" "}
                <Text
                  component="span"
                  inherit
                  c="#E9D8A6"
                >
                  That Don&apos;t Break
                </Text>
              </Title>
              <Text
                c="#94D2BD"
                mt="md"
                maw={480}
                lh={1.6}
              >
                Build robust, graph-based streaming data workflows in C#. 
                NPipeline gives you type-safe connectors, back-pressure handling, 
                and composable transforms — so your pipelines run reliably at scale.
              </Text>
              <Group mt="xl">
                <Button
                  size="md"
                  bg="#EE9B00"
                  c="#001219"
                >
                  Quick Start
                </Button>
                <Button
                  size="md"
                  variant="outline"
                  c="#94D2BD"
                  style={{ borderColor: "#94D2BD" }}
                >
                  View Docs
                </Button>
              </Group>
            </GridCol>
            <GridCol
              span={{ base: 12, md: 5 }}
              mt={{ base: "xl", md: 0 }}
            >
              <CodeBlock />
            </GridCol>
          </Grid>
        </Parallax>
      </Container>
    </div>
  );
}