import { Fragment } from "react";
import Head from "next/head";
import Header from "./Components/Header";
import Jumbo from "./Components/Jumbo";
import Form from "./Components/Form";

export default () => (
  <Fragment>
    <Head>
      <title>Simple React form with validation using Next.js</title>
    </Head>
    <Header />
    <Jumbo />
    <Form />
  </Fragment>
);
