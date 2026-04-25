import { Container, Group, Text, Button, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Performance", href: "#performance" },
  { label: "Code", href: "#code" },
  { label: "Docs", href: "https://www.npipeline.dev/docs" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Container size="xl" h="100%">
      <Group justify="space-between" h="100%">
        <Text
          fw={700}
          size="lg"
          c="#0A9396"
          lh="1"
          style={{ letterSpacing: "1px" }}
        >
          NPipeline
        </Text>

        <Group visibleFrom="sm" gap="md">
          {NAV_LINKS.map((link) => (
            <Text
              key={link.label}
              component="a"
              href={link.href}
              c="#94D2BD"
              size="xs"
              tt="uppercase"
              style={{ letterSpacing: "1px", textDecoration: "none" }}
            >
              {link.label}
            </Text>
          ))}
        </Group>

        <Group>
          <Button
            component="a"
            href="https://www.npipeline.dev/docs/getting-started/quick-start"
            bg="#0A9396"
            c="white"
            radius="sm"
            size="xs"
            visibleFrom="sm"
          >
            Get Started
          </Button>

          <Burger
            opened={opened}
            onClick={toggle}
            color="#94D2BD"
            hiddenFrom="sm"
          />
        </Group>
      </Group>
    </Container>
  );
}