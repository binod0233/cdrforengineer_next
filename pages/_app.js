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
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "c4a45080-23cc-4284-aece-4734b2308d77";
  
    (function() {
      var d = document;
      var s = d.createElement("script"); 
  
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
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
