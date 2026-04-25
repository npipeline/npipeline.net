import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import { MantineProvider } from "@mantine/core";
import { theme } from "~/styles/mantine-theme";

import "@mantine/core/styles.css";
import "@gfazioli/mantine-parallax/styles.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body style={{ backgroundColor: "#001219", color: "#94D2BD" }}>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Outlet />
    </MantineProvider>
  );
}