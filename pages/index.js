import { Fragment } from "react";
import Head from "next/head";
import Header from "../Components/Header";
import Form from "../Components/Form/Form";

export default () => (
  <Fragment>
    <Head>
      <title>Simple React form with validation using Next.js</title>
    </Head>
    <Header />
    <Form />
  </Fragment>
);
