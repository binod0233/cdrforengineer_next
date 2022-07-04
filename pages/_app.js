import '../styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useRef,useEffect} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Socials from "../components/Socials";
import TakeMeToTop from "../components/TakeMeToTop";
import TagManager from 'react-gtm-module'
import { SSRProvider } from 'react-bootstrap';
import Chatra from "@chatra/chatra";


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
  gtmId: 'GTM-MH9PVKT'
}

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
    TagManager.initialize(tagManagerArgs)

  },[])
  const headScroll = useRef(null);

  const scrollToTop = ()=>{
    headScroll.current.scrollIntoView();
  }
  useEffect(()=>{
    Chatra("init", config);
Chatra("pageView");
  },[])
  return<SSRProvider>
    <div ref={headScroll}></div>
    <Socials />
    <TakeMeToTop scrollToTop={scrollToTop} />
    <Head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="google-site-verification" content="KceQ_VgcoIBknsBsN-hHU5QZSLifvhWogYHgEZQYtzo" />
    </Head>
  <Header scrollToTop={scrollToTop}/>
  <Component {...pageProps} />
  <Footer/>
  </SSRProvider> 
}

export default MyApp
