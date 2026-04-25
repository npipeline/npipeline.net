import { Box, Container, Title, Text, Card } from "@mantine/core";
import { SectionHeader } from "~/components/SectionHeader";
import { ScrollReveal } from "~/components/ScrollReveal";
import { CodeHighlight } from "~/components/CodeHighlight";

const codeBlock = `public void Define(PipelineBuilder builder, PipelineContext context)
{
    // Define your nodes
    var source = builder.AddSource<OrderSource, Order>();
    var validate = builder.AddTransform<ValidateOrder, Order, Order>();
    var enrich = builder.AddTransform<EnrichWithCustomer, Order, EnrichedOrder>();
    var sink = builder.AddSink<DatabaseSink, EnrichedOrder>();

    // Connect the graph — types must match
    builder.Connect(source, validate);
    builder.Connect(validate, enrich);
    builder.Connect(enrich, sink);

    // Add resilience
    builder.WithRetryOptions(new PipelineRetryOptions(
        MaxItemRetries: 3,
        MaxNodeRestartAttempts: 2
    ));
}`;

export function CodeSection() {
  return (
    <Box component="section" py={{ base: 30, md: 60 }} bg="#F8F9FA">
      <Container size="lg">
        <ScrollReveal>
          <SectionHeader label="Developer Experience" />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <Title order={2} ta="center" mb="xs" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
            Code that reads like a diagram
          </Title>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <Text ta="center" maw={640} mx="auto" mb="xl" c="dimmed">
            NPipeline's fluent API makes your pipeline structure visible in your code. The compiler enforces type safety between nodes — if it compiles, it connects.
          </Text>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <Card
            padding="xl"
            radius="sm"
            bg="white"
            style={{ border: "1px solid #E4EAF0", overflow: "hidden" }}
          >
            <CodeHighlight code={codeBlock} language="csharp" />
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={320}>
          <Text ta="center" mt="lg" c="dimmed">
            Each node is a single class with a single responsibility. Test them in isolation. Compose them into complex workflows.
          </Text>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
