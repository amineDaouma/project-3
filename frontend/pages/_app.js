import App, { Container } from "next/app";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import Head from "next/head";

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Head>
            <link
              href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <Component {...pageProps} />
          <style jsx global>
            {`
              *,
              *:before,
              *:after {
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
              }
              html,
              body {
                font-family: "Lato", sans-serif;
                margin: 0px;
                padding: 0px;
              }
              body {
                background: #e4e7eb;
              }
            `}
          </style>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
