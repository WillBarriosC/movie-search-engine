import { createTheme, NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }) {
  const darkTheme = createTheme({
    type: "dark",
    theme: {
      colors: {},
    },
  });
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
