import Head from "next/head";
import { Navbar, Text } from "@nextui-org/react";
import { Logo } from "../layouts/Logo";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Search Movies App</title>
        <meta name="author" content="Wilman Barrios" />
        <meta name="description" content="Search Movies" />
      </Head>

      <Navbar isCompact isBordered maxWidth="fluid" variant="floating">
        <Navbar.Brand>
          <Logo/>
          <Text b color="inherit" hideIn="xs">
            Search Movies App
          </Text>
        </Navbar.Brand>
      </Navbar>

      <main>{children}</main>
    </>
  );
}
