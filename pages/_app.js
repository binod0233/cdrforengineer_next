import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";

import { useRef, useEffect } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import TagManager from "react-gtm-module";
import { SSRProvider } from "react-bootstrap";
import Chatra from "@chatra/chatra";
import Script from "next/script";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

let config = {
  setup: {
    buttonSize: 75,
    colors: {
      buttonText: "#fff",
      buttonBg: "#753CAD",
    },
  },
  ID: "yu7tz9shLi6uZn26p",
};

const tagManagerArgs = {
  gtmId: "GTM-MH9PVKT",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  const headScroll = useRef(null);

  const scrollToTop = () => {
    headScroll.current.scrollIntoView();
  };
  // useEffect(() => {
  //   window.__lc = window.__lc || {};
  //   window.__lc.license = 14286585;
  //   (function (n, t, c) {
  //     function i(n) {
  //       return e._h ? e._h.apply(null, n) : e._q.push(n);
  //     }
  //     var e = {
  //       _q: [],
  //       _h: null,
  //       _v: "2.0",
  //       on: function () {
  //         i(["on", c.call(arguments)]);
  //       },
  //       once: function () {
  //         i(["once", c.call(arguments)]);
  //       },
  //       off: function () {
  //         i(["off", c.call(arguments)]);
  //       },
  //       get: function () {
  //         if (!e._h)
  //           throw new Error(
  //             "[LiveChatWidget] You can't use getters before load."
  //           );
  //         return i(["get", c.call(arguments)]);
  //       },
  //       call: function () {
  //         i(["call", c.call(arguments)]);
  //       },
  //       init: function () {
  //         var n = t.createElement("script");
  //         (n.async = !0),
  //           (n.type = "text/javascript"),
  //           (n.src = "https://cdn.livechatinc.com/tracking.js"),
  //           t.head.appendChild(n);
  //       },
  //     };
  //     !n.__lc.asyncInit && e.init(), (n.LiveChatWidget = n.LiveChatWidget || e);
  //   })(window, document, [].slice);
  //   //     Chatra("init", config);
  //   // Chatra("pageView");
  // }, []);
  return (
    <SSRProvider>
      <div ref={headScroll}></div>
      <Socials />
      <TakeMeToTop scrollToTop={scrollToTop} />
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="google-site-verification"
          content="KceQ_VgcoIBknsBsN-hHU5QZSLifvhWogYHgEZQYtzo"
        />
        <link
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          rel="stylesheet"
        />
      </Head>

      <Header scrollToTop={scrollToTop} />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
