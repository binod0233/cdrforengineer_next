import Head from 'next/head'
import OurReports from '../components/Home/OurReports'
import CDRReport from '../components/Home/CDRReport'
import EngineersTakeHelp from '../components/Home/EngineersTakeHelp'
import FrequentlyAsked from '../components/Home/FrequentlyAsked'
import GetYourCDR from '../components/Home/GetYourCDR'
import Hero from "../components/Hero"
import {useRouter} from 'next/router'



export default function Home() {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  return (
    <div >
      <Head>
        <title>CDR For Engineer</title>
        <meta name="description" content="A CDR For Engineer website" />
        <link rel="canonical" href={canonicalUrl} />

      </Head>

      <Hero
        title="Develop a flawless CDR report for guaranteed
        assessment from Engineers Australia."
        details="CDR report prepared by professional writers with years of experience in CDR writing has a high chance 
        of approval by Engineers Australia. We guarantee high-quality CDR reports with original and 
        plagiarism-free content."
      />
     <OurReports />
      <CDRReport />
      <EngineersTakeHelp />

      <FrequentlyAsked />
      <GetYourCDR />
      
    </div>
  )
}
