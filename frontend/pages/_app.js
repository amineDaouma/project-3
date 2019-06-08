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
            <link rel="stylesheet" href="/static/nprogress.css" />
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
                height: 100vh;
              }
              body {
                background: #cbd2d9;
                padding-top: 0.01px;
              }
            `}
          </style>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(MyApp);
