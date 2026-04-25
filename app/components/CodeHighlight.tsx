import { Box } from "@mantine/core";

interface CodeHighlightProps {
  code: string;
  language: "csharp" | "bash";
}

export function CodeHighlight({ code, language }: CodeHighlightProps) {
  const highlight = (text: string, lang: string) => {
    // Escape HTML first
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    // Palette provided:
    // #001219, #005F73, #0A9396, #94D2BD, #E9D8A6, #EE9B00, #CA6702, #BB3E03, #AE2012, #9B2226

    if (lang === "csharp") {
      return html
        .replace(/(\/\/.*)/g, '<span style="color: #005F73">$1</span>') // Comments (Deep Blue-Teal)
        .replace(/\b(public|void|var|new|class|using|namespace|return)\b/g, '<span style="color: #94D2BD">$1</span>') // Keywords (Bright Aqua/Blue)
        .replace(/\b(builder|context|source|validate|enrich|sink)\b/g, '<span style="color: #f8fafc">$1</span>') // Variables (Off-white for contrast)
        .replace(/&quot;(.*?)&quot;/g, '<span style="color: #E9D8A6">&quot;$1&quot;</span>') // Strings (Sand - subtle warm accent)
        .replace(/\b(PipelineBuilder|PipelineContext|OrderSource|Order|ValidateOrder|EnrichWithCustomer|EnrichedOrder|DatabaseSink|PipelineRetryOptions)\b/g, '<span style="color: #0A9396">$1</span>') // Types (Solid Teal)
        .replace(/\b(\d+)\b/g, '<span style="color: #EE9B00">$1</span>'); // Numbers (Orange - small accent)
    }

    if (lang === "bash") {
      return html
        .replace(/\b(dotnet|add|package)\b/g, '<span style="color: #94D2BD">$1</span>') // Commands (Bright Aqua)
        .replace(/\b(NPipeline)\b/g, '<span style="color: #0A9396">$1</span>'); // Package (Teal)
    }

    return html;
  };

  return (
    <Box
      component="pre"
      style={{
        backgroundColor: "#001219", // Darkest palette blue
        color: "#f8fafc",
        padding: "16px 24px",
        borderRadius: 8,
        fontSize: 13,
        overflowX: "auto",
        fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      <code dangerouslySetInnerHTML={{ __html: highlight(code, language) }} />
    </Box>
  );
}
