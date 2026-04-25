import { Container, Text } from "@mantine/core";

function CodeLine({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function K({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#0A9396" }}>{children}</span>;
}

function I({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#E9D8A6" }}>{children}</span>;
}

function M({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#EE9B00" }}>{children}</span>;
}

function T({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#94D2BD" }}>{children}</span>;
}

function C({ children }: { children: React.ReactNode }) {
  return <span style={{ color: "#005F73" }}>{children}</span>;
}

export function CodeSection() {
  return (
    <div style={{ background: "#0a0f14", padding: "64px 0" }}>
      <Container size="xl">
        <Text size="xs" tt="uppercase" lts={2} c="#0A9396" ta="center" mb={4}>
          Code that reads like a diagram
        </Text>
        <Text c="rgba(148,210,189,0.5)" ta="center" mb="xl">
          The compiler enforces type safety — if it compiles, it connects
        </Text>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#0d1117",
              borderRadius: 8,
              padding: "24px",
              fontFamily: "'SF Mono', 'Fira Code', monospace",
              fontSize: "13px",
              lineHeight: 1.9,
              border: "1px solid rgba(0,95,115,0.15)",
            }}
          >
            <CodeLine>
              <K>var</K>{" "}<I>source</I>{" "}<T>=</T>{" "}<I>builder</I><M>.</M><M>AddSource</M><T>&lt;</T><T>OrderSource</T><T>,&nbsp;</T><T>Order</T><T>&gt;</T><T>(</T><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <K>var</K>{" "}<I>validate</I>{" "}<T>=</T>{" "}<I>builder</I><M>.</M><M>AddTransform</M><T>&lt;</T><T>ValidateOrder</T><T>,&nbsp;</T><T>Order</T><T>,&nbsp;</T><T>Order</T><T>&gt;</T><T>(</T><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <K>var</K>{" "}<I>enrich</I>{" "}<T>=</T>{" "}<I>builder</I><M>.</M><M>AddTransform</M><T>&lt;</T><T>EnrichWithCustomer</T><T>,&nbsp;</T><T>Order</T><T>,&nbsp;</T><T>EnrichedOrder</T><T>&gt;</T><T>(</T><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <K>var</K>{" "}<I>sink</I>{" "}<T>=</T>{" "}<I>builder</I><M>.</M><M>AddSink</M><T>&lt;</T><T>DatabaseSink</T><T>,&nbsp;</T><T>EnrichedOrder</T><T>&gt;</T><T>(</T><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <div style={{ height: 8 }} />
            </CodeLine>
            <CodeLine>
              <C>// Types must match — compiler enforced</C>
            </CodeLine>
            <CodeLine>
              <I>builder</I><M>.</M><M>Connect</M><T>(</T><I>source</I><T>,&nbsp;</T><I>validate</I><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <I>builder</I><M>.</M><M>Connect</M><T>(</T><I>validate</I><T>,&nbsp;</T><I>enrich</I><T>)</T><T>;</T>
            </CodeLine>
            <CodeLine>
              <I>builder</I><M>.</M><M>Connect</M><T>(</T><I>enrich</I><T>,&nbsp;</T><I>sink</I><T>)</T><T>;</T>
            </CodeLine>
          </div>
        </div>
      </Container>
    </div>
  );
}