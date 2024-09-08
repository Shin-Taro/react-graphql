import { WithApollo } from "@/apollo/components/WithApollo";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

if (process.env.NODE_ENV === "development") {
  // Adds messages only in a dev environment
  loadDevMessages();
  loadErrorMessages();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WithApollo>
      <Component {...pageProps} />
    </WithApollo>
  );
}
