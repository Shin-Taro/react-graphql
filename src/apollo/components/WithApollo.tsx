import { ApolloProvider } from "@apollo/client";
import { client } from "../../apollo/client";
import { PropsWithChildren } from "react";

export const WithApollo = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
