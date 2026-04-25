import { Container, Title, Text, Group } from "@mantine/core";
import { Parallax } from "@gfazioli/mantine-parallax";

const cards = [
  {
    label: "✦ Parallax",
    labelColor: "#0A9396",
    title: "Sources",
    description: "Where data enters your pipeline. Files, databases, APIs, message queues.",
    gradient: "linear-gradient(160deg, #005F73, rgba(0,18,25,0.5))",
    border: "1px solid rgba(10,147,150,0.3)",
    titleColor: "white",
    descColor: "#94D2BD",
  },
  {
    label: "✦ Parallax",
    labelColor: "#94D2BD",
    title: "Transforms",
    description: "Validate, enrich, filter, aggregate. Single-responsibility components.",
    gradient: "linear-gradient(160deg, #0A9396, rgba(0,95,115,0.5))",
    border: "1px solid rgba(148,210,189,0.2)",
    titleColor: "white",
    descColor: "#94D2BD",
  },
  {
    label: "✦ Parallax",
    labelColor: "rgba(0,18,25,0.5)",
    title: "Sinks",
    description: "Where data lands. Write to databases, send to APIs, stream to files.",
    gradient: "linear-gradient(160deg, #EE9B00, #CA6702)",
    border: undefined,
    titleColor: "#001219",
    descColor: "rgba(0,18,25,0.9)",
  },
];

export function PipelineFlowSection() {
  return (
    <div
      style={{
        background: "linear-gradient(180deg, #001219, #001a24)",
        padding: "64px 0",
      }}
    >
      <Container size="xl">
        <Text
          size="xs"
          tt="uppercase"
          lts={2}
          c="#0A9396"
          ta="center"
          mb={4}
        >
          A better way
        </Text>
        <Title
          order={2}
          ta="center"
          c="white"
          fz={{ base: 22, md: 28 }}
          mb={6}
        >
          Data flows through discrete, testable nodes
        </Title>
        <Text
          c="#94D2BD"
          ta="center"
          mb="xl"
          maw={500}
          mx="auto"
        >
          Graph-based architecture where complexity emerges from composition,
          not accumulation.
        </Text>

        <Group justify="center" gap="md" wrap="nowrap">
          {cards.map((card, i) => (
            <Group gap="md" key={card.title} wrap="nowrap">
              <Parallax perspective={800} initialRotationX={5} initialRotationY={5} lightEffect>
                <div
                  style={{
                    background: card.gradient,
                    border: card.border,
                    borderRadius: 10,
                    padding: "28px 20px",
                    textAlign: "center",
                    minHeight: 160,
                  }}
                >
                  <Text
                    size="xs"
                    tt="uppercase"
                    lts={2}
                    c={card.labelColor}
                    mb={8}
                  >
                    {card.label}
                  </Text>
                  <Text
                    fz={{ base: 18, md: 22 }}
                    fw={700}
                    c={card.titleColor}
                    mb={6}
                  >
                    {card.title}
                  </Text>
                  <Text size="sm" c={card.descColor} lh={1.5}>
                    {card.description}
                  </Text>
                </div>
              </Parallax>
              {i < cards.length - 1 && (
                <Text
                  c="#EE9B00"
                  fz={24}
                  fw={700}
                  style={{ flexShrink: 0 }}
                >
                  →
                </Text>
              )}
            </Group>
          ))}
        </Group>
      </Container>
    </div>
  );
}