import {
  Box,
  Container,
  Group,
  Button,
  Anchor,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconExternalLink } from "@tabler/icons-react";

export function Header() {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <>
      <Box
        component="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(8px)",
          backgroundColor: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid rgba(173,194,224,0.3)",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" h={60}>
            <Anchor
              href="/"
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#001219",
                textDecoration: "none",
              }}
            >
              <Group gap="xs">
                <img
                  src="/icon.png"
                  alt="NPipeline"
                  style={{ height: 28, width: 28 }}
                />
                NPipeline
              </Group>
            </Anchor>

            <Group gap="lg" visibleFrom="md">
              <Anchor
                href="#better-way"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Architecture
              </Anchor>
              <Anchor
                href="#performance"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Performance
              </Anchor>
              <Anchor
                href="#resilience"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Resilience
              </Anchor>
              <Anchor
                href="#features"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Use Cases
              </Anchor>
              <Anchor
                href="#extensions"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Extensions
              </Anchor>
              <Anchor
                href="#dx"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                DX
              </Anchor>
              <Anchor
                href="#testing"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                Testing
              </Anchor>
            </Group>

            <Group visibleFrom="md">
              <Anchor
                href="https://github.com/npipeline/npipeline"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: 15,
                  color: "#405C84",
                  textDecoration: "none",
                }}
              >
                <Group gap={4}>
                  GitHub
                  <IconExternalLink size={14} />
                </Group>
              </Anchor>
              <Button
                size="sm"
                color="teal"
                radius="sm"
                component="a"
                href="https://docs.npipeline.net"
              >
                Docs
              </Button>
            </Group>

            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="md"
              size="sm"
            />
          </Group>
        </Container>
      </Box>

      <Drawer opened={opened} onClose={close} size="xs" hiddenFrom="md">
        <Stack gap="md" pt="md">
          <Anchor
            href="#better-way"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Architecture
          </Anchor>
          <Anchor
            href="#performance"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Performance
          </Anchor>
          <Anchor
            href="#resilience"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Resilience
          </Anchor>
          <Anchor
            href="#features"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Use Cases
          </Anchor>
          <Anchor
            href="#extensions"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Extensions
          </Anchor>
          <Anchor
            href="#dx"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            DX
          </Anchor>
          <Anchor
            href="#testing"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            Testing
          </Anchor>
          <Anchor
            href="https://github.com/npipeline/npipeline"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 18, color: "#001219", textDecoration: "none" }}
            onClick={close}
          >
            <Group gap={4}>
              GitHub
              <IconExternalLink size={16} />
            </Group>
          </Anchor>
          <Button
            size="md"
            color="teal"
            radius="sm"
            component="a"
            href="https://docs.npipeline.net/getting-started/"
            onClick={close}
          >
            Get Started
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
