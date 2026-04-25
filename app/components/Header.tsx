import { Box, Container, Group, Button, Anchor, Burger, Drawer, Stack } from "@mantine/core";
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
            <Anchor href="/" style={{ fontWeight: 700, fontSize: 18, color: "#001219", textDecoration: "none" }}>
              <Group gap="xs">
                <img src="/icon.png" alt="NPipeline" style={{ height: 28, width: 28 }} />
                NPipeline
              </Group>
            </Anchor>

            <Group gap="lg" visibleFrom="md">
              <Anchor href="#better-way" style={{ fontSize: 15, color: "#405C84", textDecoration: "none" }}>
                Why NPipeline
              </Anchor>
              <Anchor href="#features" style={{ fontSize: 15, color: "#405C84", textDecoration: "none" }}>
                Features
              </Anchor>
              <Anchor href="#studio" style={{ fontSize: 15, color: "#405C84", textDecoration: "none" }}>
                Studio
              </Anchor>
            </Group>

            <Group visibleFrom="md">
              <Anchor
                href="https://github.com/npipeline/npipeline"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 15, color: "#405C84", textDecoration: "none" }}
              >
                <Group gap={4}>
                  GitHub
                  <IconExternalLink size={14} />
                </Group>
              </Anchor>
              <Button size="sm" color="teal" radius="sm" component="a" href="https://docs.npipeline.net">
                Docs
              </Button>
            </Group>

            <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
          </Group>
        </Container>
      </Box>

      <Drawer opened={opened} onClose={close} size="xs" hiddenFrom="md">
        <Stack gap="md" pt="md">
          <Anchor href="#better-way" style={{ fontSize: 18, color: "#001219", textDecoration: "none" }} onClick={close}>
            Why NPipeline
          </Anchor>
          <Anchor href="#features" style={{ fontSize: 18, color: "#001219", textDecoration: "none" }} onClick={close}>
            Features
          </Anchor>
          <Anchor href="#studio" style={{ fontSize: 18, color: "#001219", textDecoration: "none" }} onClick={close}>
            Studio
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
          <Button size="md" color="teal" radius="sm" component="a" href="#getting-started" onClick={close}>
            Get Started
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
