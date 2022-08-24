import React from "react";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";
import { PersistGate } from "redux-persist/integration/react";
import { wrapper, useAppStore } from "../store";
import "moment/locale/pt-br";

import '../styles/globals.css';
import 'antd/dist/antd.less';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const App = ({ Component, pageProps }) => {
  const store = useAppStore();
  return (
    <>
      <Head>
        <title>Template Sistemas</title>
      </Head>
      <PersistGate
        loading={null}
        persistor={"_persistor" in store && store["_persistor"]}
      >
        <Component {...pageProps} />
      </PersistGate>
    </>
  );
};

export default wrapper.withRedux(App);
