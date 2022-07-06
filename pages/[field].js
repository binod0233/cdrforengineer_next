import React from "react";
import Head from 'next/head'
import { useRouter } from 'next/router'
import ManagerEngineer from "../components/ANZoCode/ManagerEngineer"
import RelativeSponsorShip from "../components/ANZoCode/RelativeSponsorShip";
import SponsorShipOptions from "../components/ANZoCode/SponsorShipOptions";
import VisaOptions from "../components/ANZoCode/VisaOptions";
import Hero from "../components/Hero";
const ANZO = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const  field  = router.query.field
  const allData = {
    engineeringManager: {
      managerEngineer: {
        title:
          "Engineering Manager (ANZSCO - 133211) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/engineering-manager.jpg",
        personnelTitle: "ANZSCO 133211 Engineering Manager",
        personnelDetails: `Engineering Managers are responsible for planning, organizing, directing, controlling, and coordinating the engineering and technical operations 
    of a company or an organization effectively and efficiently.`,
        skillText: "Skill Level :1 ",
        averageTitle: "Average Annual Earnings or Income",
        averageDetails:
          "An Engineering Manager's average annual salary income is $ 121,673 for male employees and $ 122,398 for female employees. Average Age: Males: 51.2 Females: 48.6 Persons:",
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of an Engineering Manager",
        smallTitle1: "UNIT GROUP: Engineering Manager 1332",
        smallTitle1Details: `Engineering Managers are responsible for planning, organizing, directing, controlling, and coordinating the engineering and technical operations 
    of a company or an organization effectively and efficiently.`,
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: `Talking About Australia and New Zealand, the majority of jobs in this UNIT GROUP need a level of skills and expertise equivalent to a Bachelor's 
    Degree or above. A formal qualification may be substituted for at least five years of relevant experience. In addition to the official qualification, 
    appropriate experience and or on-the-job training may be necessary -"ANZSCO Skill Level 1."
    `,
        tasks: [
          `Engineering strategies, policies, and plans must be developed, implemented, and monitored.`,

          `Interpreting plans, drawings, and specifications, as well as advising on engineering processes and procedures to meet construction and 
    production goals.`,

          `Creating project timelines and budgets.`,
          `Assuring compliance with specifications and plans, as well as with laws, regulations, and safety requirements.`,
          `Ensuring that engineering quality, cost, safety, timeliness, and performance criteria are met.`,
          `Managing maintenance requirements to maximize efficiency.`,
          `Coordination of engineering components of the new building and product design with marketing, research, and manufacturing management.`,
          `Feasible to contribute to research and development initiatives.`,
        ],
        specialization: `
    Specialisations
    - Engineering Manager`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: "",
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `Financial capacity
         Applicants living outside Australia: 
         one year of skilled work experience in the past 2 years or 
         alternatively have Australian Qualifications.`,
              `Processing times 
         Offshore applicants: six to eight month 
         Cost of applicatons: Free`,
            ],
            tick1: true,
            NTParagraphs2: [
              `Financial capacity
         Applicants living outside Australia: 
         one year of skilled work exp erience in the past 2 years or 
         alternatively have Australian Qualifications.`,
              `Processing times 
         Offshore applicants: six to eight month
         NT student  / NT resident applications: one month 
         Cost of applicatons: Free`,
              `Postcodes: Entire territory (including Darwin, Palmerston, 
         Alice Springs, Katherine and Nhulunbuy)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR 
      applicants have worked in a skilled occupation in South 
      Australia, OR have eighty points or higher (including state 
      nomination points).
      `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver`,
          `45 years or less`,
          ` Financial capacity`,
          `Proficient English (e.g. IELTS 7.0 in each band) (or Proficient Plus overall)`,
          ` See Exemption considerations for International graduates of South Australia`,
          `Times: 6 - 7 weeks`,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `	Available to South Australian international graduates, OR applicants 
      have worked in a skilled occupation in South Australia, OR have an 
      immediate family member permanently residing in South Australia 
      OR have eighty points or higher (including state nomination points).`,
          `one year of skilled work experience in the past 3 years. See Work experience waiver `,
          `45 years or less`,
          ` Financial capacity`,
          `Proficient English (e.g. IELTS 7.0 in each band) (or Proficient Plus overall)`,
          ` See Exemption considerations for International graduates of South Australia`,
          `Times: 6 - 7 weeks`,
        ],
        SAParagraphsTick2: true,

        WAParagraphs: [],
        VICHeading: true,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Central West" },
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },
          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: true,
        QLDHeadingTick1: false,
        QLDHeadingTick2: false,
        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
            
                Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and`,

              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation`,

              ` Sponsorship Fee: $ 200`,

              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,
            ],
            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,
              `For applicants currently working in Queensland:`,

              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and`,

              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation`,

              `Sponsorship Fee: $ 200`,

              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)`,
            ],
          },
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):`,

              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,

              `Completed Masters Degree or higher within the last two years`,

              `provide evidence of current full time employment with a Queensland employer in your nominated occupation (or a closely related occupation)`,

              `Have a job offer in your skilled occupation (or a closely related occupation)`,

              `Sufficient funds`,

              ` Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.`,

              `Sponsorship Fee: $ 200`,

              `For PhD Graduates in Queensland:`,

              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,

              `Completed within the last two years`,

              `Have a positive decision on thesis`,

              `Sufficient funds`,

              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.`,

              `Sponsorship Fee: $ 200
                `,
            ],
            QLDParagraph2: [
              `For Graduates in Queensland (Master):`,

              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,
              `Completed Masters Degree or higher within the last two years`,

              `provide evidence of current full time employment with a Queensland employer in your nominated occupation (or a closely related occupation)`,

              `Have a job offer in your skilled occupation (or a closely related occupation)`,

              `Sufficient funds`,

              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.`,

              `Sponsorship Fee: $ 200`,

              `For PhD Graduates in Queensland:`,

              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).`,

              `Completed within the last two years`,

              `Have a positive decision on thesis`,

              `Sufficient funds`,

              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.`,

              `Sponsorship Fee: $ 200 
               `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed`,

          `Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).`,

          ` For Overseas Residents:`,

          `Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
            
            `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
            
            `,
          `If you hold, or have previously held a student/temporary graduate visa within the last two years:
            
            `,
          `You must be resident in Canberra for at least 12 months at time of invitation.
            
            `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
            
            
            `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
            
            `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
            
            `,
          `Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
            
            `,
          `Service fee: A$300 (if you are invited to apply)`,
        ],
        TASParagraph1: [
          `
          Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or`,
          `
          The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or`,
          `
          `,
          `For Overseas Applicants:`,
          `
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application and sufficient funds.
          
          `,
          `Processing Time: 20 working days
          
          `,
          `Sponsorship Fee: Nill`,
        ],
        TASParagraph2: [
          `
          Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or`,
          `
          `,
          `have been working in Tasmania for six months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          
          `,
          `or`,
          `
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          skills and recent experience relevant to the researched employment opportunities.
          access to sufficient financial assets
          `,
          `
          or`,
          `
          For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `
          or
          have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `
          or
          Available to small business owners with past business experience and management expertise who have a business plan.
          and sufficient funds.
          `,
          `
          Processing Time: 20 working days
          `,
          `
          Sponsorship Fee: Nill
          `,
          `
          Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    chemicalEngineer: {
      managerEngineer: {
        title:
          "Chemical Engineer (ANZSCO 233111) PR Visa for Immigration to Australia",
        titleDescription: `The CDR Report is crucial in obtaining a PR Visa for Immigration to Australia. While preparing the CDR Report, one must adhere to all of the 
        standards and guidelines of the migration skilled Assessment (MSA) booklet defined by Engineers Australia (EA). CDR Report contains Career 
        episodes, summary statements, and CPD, also known as Continuous Professional Development Report Writing, which must all be written with 
        a high degree of professionalism When drafting your CDR Report, CV-Resume Report, and Career Episode Report, you must guarantee that 
        they are prepared in the same manner as described in the MSA booklet and are free of plagiarism. Keep in mind that original content on your 
        Report has a high probability of receiving 100% approval from Engineers Australia, therefore you must professionally prepare your CDR Report.`,
        image: "/images/ANZSCO/chemical-engineer.jpg",
        personnelTitle: "ANZSCO 233111-CHEMICAL ENGINEER",
        personnelDetails: `Chemical Engineer designs and develops specifications forchemical process systems. Chemical engineer works onbuilding and managingcommercial-scale chemical plants and oversees industrial processing and manufactureof  products  undergoing  physical  and  chemical  changes.  It  is  possible  that  registration  or licensing will be required`,
        skillText: "Skill Level :1 ",
        averageTitle: "Average Annual Earnings or Income",
        averageDetails:
          "A Chemical Engineer’s average annual salary income is $ 103,875 on average. Average Age: Males: Females: Persons: 51.1 [See: Australian Bureau of Statistics 2331 Chemical and materials engineers –Employee Earnings and Hours, Australia, May 2016]",
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of an Engineering Manager",
        smallTitle1: "UNIT GROUP 2331:Chemical and Materials Engineers",
        smallTitle1Details: (
          <div>
            Chemical and Materials Engineers play an essential role in designing
            and preparing specifications for chemical process systems. They are
            also responsible for constructing and operating commercial-scale
            chemical plantsand supervising industrial processing and fabrication
            of products undergoing physical and chemical change.
            <br /> Another function of Chemical and Materials Engineers is to
            explore the characteristics of metals, ceramics, polymers, and other
            materials and evaluate and develop their technical and commercial
            applications
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, most professions in this
            unit need a level of expertise equivalent to a bachelor's degree or
            above.Relevant experience or on-the-job training may be required in
            addition to the formal qualification (ANZSCO Skill Level 1).
            <br />
            Registration or licensing will probablybe required
          </div>
        ),
        tasks: [
          `Chemical engineers designchemical process systems and planning control systems for operations such as removing and separating components, effecting chemical changes, testing and evaluating fuels, transferring heat, and controlling the storage and handling of solids, liquids, and gases.`,
          `Checking equipment operation and maintenance to ensure optimal efficiency under safe operating circumstancesis the responsibility of chemical engineers.`,
          `Chemical engineers ensurethe proper materials and equipment are utilised and meet standards.`,
          `Chemical engineers met the requirement by using appropriate materials and equipment.`,
          `Chemical engineer investigates product use and pollution control issues.`,
          `Examining new product plans and giving material selection suggestions based on design criteria and considerations such as strength, weight, and cost falls under civil engineering.`,
          `It’s the Chemical engineer’s duty to plan and carry out laboratory operations for the development of new materials, as well as fabrication techniques for new materials to meet manufacturing cost and performance criteria.`,
          `Chemical engineers maintain regular communication with material producers, such as metals, ceramics, polymers, cement, and elastomers, throughout the exploration and assessment of materials suited for specific product applications.`,
          `Chemical engineers review product failure data and conducting laboratory testing to determine or rule out potential reasons and providing advice on how to resolve any issues.`,
        ],
        specialization: `Specialisations - Chemical Engineer `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospectsemployment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR 
      applicants have worked in a skilled occupation in South 
      Australia, OR have eighty points or higher (including state 
      nomination points).
      `,
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall); Not available for high points nomination 6/3/19; Not available for chain migration nomination 6/3/19
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks`,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall); Not available for high points nomination 6/3/19; Not available for chain migration nomination 6/3/19
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks`,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
        `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
        
        `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
        `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
        `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,
            WAParagraph2: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
`,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
`,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
`,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
 
`,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation. `,
            ],
            WA2tick: true,
          },
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
          `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
          
          `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
          `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.
          
          `,
            ],
            WA2tick: true,
          },
        ],

        VICHeading: true,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `
              completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Central West" },
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },
          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: true,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              
              `,
              `Sponsorship Fee: $ 200
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `For applicants currently working in Queensland:
              
              
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)`,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200
                `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200
               `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).
          
          For Overseas Residents:
          
          `,
          `Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
          
          `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
          
          `,
          `If you hold, or have previously held a student/temporary graduate visa within the last two years:
          
          `,
          `You must be resident in Canberra for at least 12 months at time of invitation.
          
          `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
          
          
          `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
          
          `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
          
          `,
          `Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
          
          `,
          `Service fee: A$300 (if you are invited to apply)`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application and sufficient funds.
          
          `,
          `Processing Time: 20 working days
          
          `,
          `Sponsorship Fee: Nill`,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for six months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          
          `,
          `or
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          skills and recent experience relevant to the researched employment opportunities.
          `,
          `access to sufficient financial assets
          
          `,
          `or
          `,
          `For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          and sufficient funds.
          
          `,
          `Processing Time: 20 working days
          
          `,
          `Sponsorship Fee: Nill
          
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    materialsEngineer: {
      managerEngineer: {
        title:
          "Material Engineer (ANZSCO 233112) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/material-engineer.jpg",
        personnelTitle: "ANZSCO 233112-Materials Engineer",
        personnelDetails: `Materials Engineer plays an important role to examines the characteristics of metals, ceramics, polymers, and other materials, as well as
        their technical and commercial uses, and evaluates and develops them.You’ll probably need to register or get a license.`,
        skillText: "Skill Level :1 ",
        averageTitle: "Average Annual Earnings or Income",
        averageDetails: `A Material Engineer’s average annual salary income is $ 103,875 per year. Average Age: Males: Females: Persons: 41.5 [See:  Australian Bureau of
            Statistics 2331 Chemical and materials engineers – Employee Earnings and Hours, Australia, May 2016].`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Materials Engineer",
        smallTitle1: "UNIT GROUP 2331:Chemical and Materials Engineers",
        smallTitle1Details: (
          <div>
            Chemical and Materials Engineers play an important role in designing
            and preparing specifications for chemical process systems, as well
            as they, are also responsible for the construction and operation of
            commercial-scale chemical plants, and supervising industrial
            processing and fabrication of products undergoing physical and
            chemical change. Another function of Chemical and Materials
            Engineers is to explore the characteristics of metals, ceramics,
            polymers, and other materials, as well as to evaluate and develop
            their technical and commercial applications.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Designing chemical process systems and planning control systems for operations such as removing and separating components, effecting
          chemical changes, testing and evaluating fuels, transferring heat, and controlling the storage and handling of solids, liquids, and gases.
          `,
          `Checking equipment operation and maintenance to ensure optimal efficiency under safe operating circumstances.
          `,
          `Assuring that the proper materials and equipment are utilized and that they meet standards.
          `,
          `Assuring that appropriate materials and equipment are used and that requirements are met.
          `,
          `Investigating product use and pollution control issues.
          `,
          `Examining new product plans and giving material selection suggestions based on design criteria and considerations such as strength, weight,
          and cost.
          `,
          `Plan and carry out laboratory operations for the development of new materials, as well as fabrication techniques for new materials, to meet
          manufacturing cost and performance criteria.
          `,
          `Having discussions with material producers, such as metals, ceramics, polymers, cement, and elastomers, throughout the exploration and
          assessment of materials suited for specific product applications.
          `,
          `Reviewing product failure data and conducting laboratory testing to determine or rule out potential reasons, as well as providing advice on
          how to resolve any issues.
          `,
        ],
        specialization: `Specialisations - Materials Engineer `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have eighty points or higher (including state nomination points).
`,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
`,
          `45 years or less
`,
          `Financial capacity
`,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
`,
          `See Exemption considerations for International graduates of South Australia
`,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)`,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          ` Available to South Australian international graduates, OR applicants
have worked in a skilled occupation in South Australia, OR have an
immediate family member permanently residing in South Australia OR
have eighty points or higher (including state nomination points).
`,
          `one year of skilled work experience in the past 3 years.
`,
          `See Work experience waiver
`,
          `45 years or less
`,
          `Financial capacity
`,
          `Competent Plus English (e.g. IELTS 6.5 in each band)
(or Proficient overall)
`,
          `See Exemption considerations for International graduates
of South Australia
`,
          `Processing Times: 6 - 7 weeks`,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [
          {
            WAParagraph1: [
              ` Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
`,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
`,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
`,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
`,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.
 `,
            ],
            WA1tick: true,
            WAParagraph2: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
             `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
             `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
             `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
             `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation
            `,
            ],
            WA2tick: true,
          },
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
`,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
`,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
`,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.
            `,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
`,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
`,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
`,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.
          `,
            ],
            WA2tick: true,
          },
        ],

        VICHeading: true,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `
              completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Central West" },
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },
          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: true,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Sponsorship Fee: $ 200
              BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              For applicants currently working in Queensland:
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              `,
              `Sponsorship Fee: $ 200
              Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
            
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              Have a positive decision on thesis
              `,
              `Sufficient funds
              Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              Sponsorship Fee: $ 200
                            
                `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For PhD Graduates in Queensland:
              BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              Have a positive decision on thesis
              `,
              `Sufficient funds
              Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              Sponsorship Fee: $ 200
               `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).
         `,
          ` For Overseas Residents:
          `,
          `Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
          `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
          `,
          `If you hold, or have previously held a student/temporary graduate visa within the last two years:
          `,
          `You must be resident in Canberra for at least 12 months at time of invitation.
          `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
          `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
          `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
          `,
          `Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
          `,
          `Service fee: A$300 (if you are invited to apply)
          
        `,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
         `,
          ` Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
         `,
          `or
         `,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
         `,
          ` or
         `,
          `For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application and sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
         `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
         `,
          `or
          have been working in Tasmania for six months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          skills and recent experience relevant to the researched employment opportunities.
          access to sufficient financial assets
          `,
          `or
          `,
          `For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          and sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
         
        `,
        ],
      },
    },
    civilEngineer: {
      managerEngineer: {
        title:
          "Civil Engineer (ANZSCO 233211) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/civil-engineer.jpg",
        personnelTitle: "ANZSCO 233112-CIVIL ENGINEER",
        personnelDetails: `Civil Engineer is responsible for the planning, designing, organizing, and supervision of dams, bridges, pipelines, gas and water supply
        schemes, sewage systems, airports, and other civil engineering projects. It is possible that registration or licensing will be required.`,
        skillText: "Skill Level :1 ",
        averageTitle: "Average Salary and Income",
        averageDetails: `A Civil Engineering Average Salary in Australia is $ 108,461 for male employees and $ 100,202 for female employees per year. Average Age:
          Males: 39.2 Females: 33.1 Persons: 38.3`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Civil Engineer",
        smallTitle1: "UNIT GROUP 2332:Civil Engineering Professionals",
        smallTitle1Details: (
          <div>
            Civil Engineer Professionals are responsible for the planning,
            designing, organizing, and supervision of dams, bridges, pipelines,
            gas and water supply schemes, sewage systems, airports, and other
            civil engineering projects. In addition to it they are also
            responsible for analyzing the anticipated behavior of soil and rock
            when subjected to pressure from planned structures and creating
            structural foundations; examining the statistical features of all
            sorts of buildings, as well as the behavior and durability of the
            materials employed in their construction; Plan and develop
            transportation networks, as well as estimate and track project
            expenditures.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Choosing construction techniques, materials, and quality standards, as well as writing and interpreting specifications, drawings, plans,
          construction methods, and processes.
          `,
          `Managing and directing on-site workers and the delivery of building supplies, plant, and equipment, as well as developing comprehensive
          strategies for site activity coordination.
          `,
          `Collectin`,
          `g soil or rock samples at various depths throughout sites and testing samples to assess strength, comprehensibility, and other
          parameters that impact the activity of soil and rock when construction is applied, as well as evaluating the soil's safe loading.
          `,
          `Examining architecture and engineering drawings and requirements to determine overall costs, as well as producing thorough cost plans
          and forecasts to aid in budgetary management.
          `,
          `Observing design modifications, determining cost consequences, and quantifying, valuing, and managing design variants.
          `,
          `Static and dynamic load analysis of structural systems.
          Structures must be designed such that they should not implode, flex, twist, or shake in unfavorable ways.
          `,
          `Considering current and future traffic flow mechanisms given population growth and changing requirements.
          `,
          `Creating the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and
          terminals.
          `,
        ],
        specialization: `Specialisations - Civil Engineer-ANZSCO 233211`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have eighty points or higher (including state nomination points).
          one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          ` Available to South Australian international graduates, OR applicants
         have worked in a skilled occupation in South Australia, OR have an
         immediate family member permanently residing in South Australia OR
         have eighty points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years.
         `,
          `See Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band)
         (or Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `a current job offer within a regional area of Victoria.
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)
              `,
            ],
            tick2: true,
          },
          {
            VICParagraphs1: [
              ` For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              ` For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band
              `,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },
          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
             `,
              ` -PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
             `,
              `Sufficient funds
             `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
             `,
              ` Hold valid Queensland and Australian licenses (if applicable)
             `,
              `Sponsorship Fee: $ 200
             `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
             `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
                `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
               `,
            ],
          },
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):
                `,
              `Completed Masters Degree or higher within the last two years
                `,
              `Have a job offer in your skilled occupation (or a closely related occupation).
                `,
              `Sufficient funds
                `,
              `Sponsorship Fee: $ 200
                `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
          
        `,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
          `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For applicants from outside Australia
          (Without Job offer - TSOL):
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          `,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          `,
          `skills and recent experience relevant to the researched employment opportunities.
          `,
          `access to sufficient financial assets
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          ` or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
        `,
        ],
      },
    },
    geotechnicalEngineer: {
      managerEngineer: {
        title:
          "Geotechnical Engineer (ANZSCO 233212) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/geotechnical-engineer.jpg",
        personnelTitle: "ANZSCO 233212-GEOTECHNICAL ENGINEER",
        personnelDetails: `Geotechnical Engineer is responsible for planning, directing, and carrying out a site survey to analyze the expected behavior of soil and rock
        when pressure is applied by proposed structures, as well as designing above and below ground bases.
        It is possible that registration or
        licensing will be required.`,
        skillText: "Skill Level :1 Geotechnical Engineer ",
        averageTitle: "Geotechnical Engineer Average Salary and Income",
        averageDetails: `A Geotechnical Engineer Average Salary in Australia is $ 108,461 for male employees and $ 100,202 for female employees per year. Average
          Age: Males: 39.2 Females: 33.1 Persons: 38.3`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Geotechnical Engineer",
        smallTitle1: "UNIT GROUP 2332:Geotechnical Engineering Professionals",
        smallTitle1Details: (
          <div>
            Geotechnical Engineer Professionals are responsible for the
            planning, designing, organizing, and supervision of dams, bridges,
            pipelines, gas and water supply schemes, sewage systems, airports,
            and other civil engineering projects. In addition to it they are
            also responsible for analyzing the anticipated behavior of soil and
            rock when subjected to pressure from planned structures and creating
            structural foundations; examining the statistical features of all
            sorts of buildings, as well as the behavior and durability of the
            materials employed in their construction; Plan and develop
            transportation networks, as well as estimate and track project
            expenditures.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Choosing construction techniques, materials, and quality standards, as well as writing and interpreting specifications, drawings, plans,
          construction methods, and processes.
          `,
          `Managing and directing on-site workers and the delivery of building supplies, plant, and equipment, as well as developing comprehensive
          strategies for site activity coordination.
          `,
          `Collecting soil or rock samples at various depths throughout sites and testing samples to assess strength, comprehensibility, and other
          parameters that impact the activity of soil and rock when construction is applied, as well as evaluating the soil's safe loading.
          `,
          `Examining architecture and engineering drawings and requirements to determine overall costs, as well as producing thorough cost plans
          and forecasts to aid in budgetary management.
          `,
          `Observing design modifications, determining cost consequences, and quantifying, valuing, and managing design variants.
          `,
          `Static and dynamic load analysis of structural systems.
          `,
          `Structures must be designed such that they should not implode, flex, twist, or shake in unfavorable ways.
          `,
          `Considering current and future traffic flow mechanisms given population growth and changing requirements.
          `,
          `Creating the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and
          terminals.`,
        ],
        specialization: `Specialisations - Geotechnical Engineer-ANZSCO 233212`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have ninety points or higher (including state nomination points).
          one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          ` Available to South Australian international graduates, OR applicants
         have worked in a skilled occupation in South Australia, OR have an
         immediate family member permanently residing in South Australia OR
         have ninety points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years.
         `,
          `See Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band)
         (or Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks(Current at 13/7/2016)
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: true, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
`,
              `Sufficient funds
`,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
`,
              `Hold valid Queensland and Australian licenses (if applicable)
`,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
`,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
`,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
`,
              `Sufficient funds
`,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
`,
              `Hold valid Queensland and Australian licenses (if applicable)
`,
              `Sponsorship Fee: $ 200
`,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
`,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
`,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
`,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
`,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
`,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):
                `,
              `Completed Masters Degree or higher within the last two years
                `,
              `Have a job offer in your skilled occupation (or a closely related occupation).
                `,
              `Sufficient funds
                `,
              `Sponsorship Fee: $ 200
                `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
        `,
        ],
        TASParagraph1: [
          `
         `,
          ` Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For applicants from outside Australia
(Without Job offer - TSOL):
`,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
`,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
`,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
`,
          `skills and recent experience relevant to the researched employment opportunities.
`,
          `access to sufficient financial assets
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
        `,
        ],
      },
    },
    structuralEngineer: {
      managerEngineer: {
        title:
          "Structural Engineer (ANZSCO 233214) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/structural-engineer.jpg",
        personnelTitle: "ANZSCO 233214-STRUCTURAL ENGINEER",
        personnelDetails: `STRUCTURAL ENGINEER is responsible for Evaluating the statistical aspects of all structures, examining the behavior and longevity of
        materials used during their construction, as well as plans and overseeing the building of all structures registration or licensing may be required.`,
        skillText: "Skill Level :1 Structural Engineer",
        averageTitle: "Structural Engineer Average Salary and Income",
        averageDetails: `A Structural Engineer Average Salary in Australia is $ 108,461 for male employees and $ 100,202 for female employees per year. Average
          Age: Males: 39.2 Females: 33.1 Persons: 38.3`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Structural Engineer",
        smallTitle1: "UNIT GROUP 2332: Structural Engineering Professionals",
        smallTitle1Details: (
          <div>
            Strucutural Engineer Professionals are responsible for the planning,
            designing, organizing, and supervision of dams, bridges, pipelines,
            gas and water supply schemes, sewage systems, airports, and other
            civil engineering projects. In addition to it they are also
            responsible for analyzing the anticipated behavior of soil and rock
            when subjected to pressure from planned structures and creating
            structural foundations; examining the statistical features of all
            sorts of buildings, as well as the behavior and durability of the
            materials employed in their construction; Plan and develop
            transportation networks, as well as estimate and track project
            expenditures.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Choosing construction techniques, materials, and quality standards, as well as writing and interpreting specifications, drawings, plans,
          construction methods, and processes.
          `,
          `Managing and directing on-site workers and the delivery of building supplies, plant, and equipment, as well as developing comprehensive
          strategies for site activity coordination.
          `,
          `Collecting soil or rock samples at various depths throughout sites and testing samples to assess strength, comprehensibility, and other
          parameters that impact the activity of soil and rock when construction is applied, as well as evaluating the soil's safe loading.
          `,
          `Examining architecture and engineering drawings and requirements to determine overall costs, as well as producing thorough cost plans
          and forecasts to aid in budgetary management.
          `,
          `Observing design modifications, determining cost consequences, and quantifying, valuing, and managing design variants.
          `,
          `Static and dynamic load analysis of structural systems.
          `,
          `Structures must be designed such that they should not implode, flex, twist, or shake in unfavorable ways.
          `,
          `Considering current and future traffic flow mechanisms given population growth and changing requirements.
          `,
          `Creating the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and
          terminals.`,
        ],
        specialization: `Specialisations - Geotechnical Engineer-ANZSCO 233212`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
        `,
          ` one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016) 
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: true, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
             `,
              ` - PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Sponsorship Fee: $ 200
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):
                `,
              `Completed Masters Degree or higher within the last two years
                `,
              `Have a job offer in your skilled occupation (or a closely related occupation).
                `,
              `Sufficient funds
                `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.],
        `,
        ],
        TASParagraph1: [
          `
         `,
          `Nomination Criteria:
         `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
         `,
          `or
         `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
         `,
          `or
         `,
          `For Overseas Applicants:
         `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
         `,
          `Future Changes:
         `,
          `Two year study requirement (from 1 January 2018)
         `,
          `and
         `,
          `sufficient funds.
         `,
          `Processing Time: 20 working days
         `,
          `Sponsorship Fee: Nill
         
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For applicants from outside Australia
          `,
          `(Without Job offer - TSOL):
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          skills and recent experience relevant to the researched employment opportunities.
          access to sufficient financial assets
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
        `,
        ],
      },
    },
    transportEngineer: {
      managerEngineer: {
        title:
          "Transport Engineer (ANZSCO 233215) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/transport-engineer.jpg",
        personnelTitle: "ANZSCO 233215-TRANSPORT ENGINEER",
        personnelDetails: `TRANSPORT ENGINEER is responsible for the Planning and development of transportation systems to increase infrastructural efficiency
        and the cost-effectiveness of carrying goods and people. It is possible that registration or licensing will be required.`,
        skillText: "Skill Level :1 Transport Engineer",
        specialization: "Roading Engineer(NZ)",
        averageTitle: "Transport Engineer Average Salary and Income",
        averageDetails: `A Transport Engineer Average Salary in Australia is $ 108,461 for male employees and $ 100,202 for female employees per year. Average Age:
          Males: 39.2 Females: 33.1 Persons: 38.3`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Transport Engineer",
        smallTitle1: "UNIT GROUP 2332: Civil Engineering Professionals",
        smallTitle1Details: (
          <div>
            Transport Engineer Professionals are responsible for the planning,
            designing, organizing, and supervision of dams, bridges, pipelines,
            gas and water supply schemes, sewage systems, airports, and other
            civil engineering projects. In addition to it they are also
            responsible for analyzing the anticipated behavior of soil and rock
            when subjected to pressure from planned structures and creating
            structural foundations; examining the statistical features of all
            sorts of buildings, as well as the behavior and durability of the
            materials employed in their construction; Plan and develop
            transportation networks, as well as estimate and track project
            expenditures.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Choosing construction techniques, materials, and quality standards, as well as writing and interpreting specifications, drawings, plans,
          construction methods, and processes.
          `,
          `Managing and directing on-site workers and the delivery of building supplies, plant, and equipment, as well as developing comprehensive
          strategies for site activity coordination.
          `,
          `Collecting soil or rock samples at various depths throughout sites and testing samples to assess strength, comprehensibility, and other
          parameters that impact the activity of soil and rock when construction is applied, as well as evaluating the soil's safe loading.
          `,
          `Examining architecture and engineering drawings and requirements to determine overall costs, as well as producing thorough cost plans
          and forecasts to aid in budgetary management.
          `,
          `Observing design modifications, determining cost consequences, and quantifying, valuing, and managing design variants.
          `,
          `Static and dynamic load analysis of structural systems.
          `,
          `Structures must be designed such that they should not implode, flex, twist, or shake in unfavorable ways.
          `,
          `Considering current and future traffic flow mechanisms given population growth and changing requirements.
          `,
          `Creating the physical features of transport networks such as highways, railways, urban transit, air travel, logistics delivery systems, and
          terminals.`,
        ],
        // specialization: `Specialisations - Transport Engineer-ANZSCO`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
             `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
             
             `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
             `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
             `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
             `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
             
             `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
             `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
              
             `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation. `,
            ],
            WA2tick: true,
          },
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA2tick: true,
          },
        ],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Central West" },
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
             `,
              ` Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Sponsorship Fee: $ 200
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `For applicants currently working in Queensland:
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200`,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).
          `,
          `For Overseas Residents:
          `,
          `Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
          `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
          `,
          `If you hold, or have previously held a student/temporary graduate visa within the last two years:
          `,
          `You must be resident in Canberra for at least 12 months at time of invitation.
          `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
          `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
          `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
          `,
          `Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
          `,
          `Service fee: A$300 (if you are invited to apply)`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
         
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill`,
        ],
      },
    },
    electricalEngineer: {
      managerEngineer: {
        title:
          "Electrical Engineer (ANZSCO 233311) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/electrical-engineer.jpg",
        personnelTitle: "ANZSCO 233311-ELECTRICAL ENGINEER",
        personnelDetails: ` ELECTRICAL ENGINEER is responsible for the Designing, constructing, and managing the manufacture, deployment, operation, and maintenance
        of the equipment, machinery, and systems used in the generation, transmission, utilization, and monitoring of electric power. It is possible that
        registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization:
          "Electrical Design Engineer Railway Signalling Engineer Signalling and Communications Engineer",
        averageTitle: "Electric Engineer Average Salary and Income",
        averageDetails: `An Electrical Engineer Average Salary in Australia is $ 123,233 per year for male employees and $ 104,929 for female employees Average
          Age: Males: 44.9 Females: 34.8 Persons: 42.9`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Electical Engineer",
        smallTitle1: "UNIT GROUP 2333: Electrical Engineer",
        smallTitle1Details: (
          <div>
            Electrical Engineers are responsible for the Designing,
            constructing, and managing the manufacture, deployment, operation,
            and maintenance of the equipment, machinery, and systems used in the
            generation, transmission, utilization, and monitoring of electric
            power.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Plan and design power stations and equipment for power generation.
          `,
          `Identifying the types and placements of circuits, transformers, circuit breakers, transmission lines, and other electrical equipment.
          `,
          `Develop electric motors, components, equipment, and appliances, among many other things.
          `,
          `Analyse specifications, drawings, standards, and rules about the usage of electric power equipment.
          `,
          `Handling and arranging the resources employed in the delivery of electronic systems, machinery, appliances, and equipment.
          `,
          `Setting deployment dates for machines, switchgear, cables, and fittings. managing the administration and upkeep of power plants,
          transmission and distribution networks, and industrial plants.
          `,
          `Control and signaling equipment for road, rail, and air traffic must be designed and installed.
          `,
          `Research in sectors like power production and transmission systems, transformers, switchgear and electric motors, telemetry, and
          control systems.
        `,
        ],
        // specialization: `Specialisations - Electrical Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `a current job offer within a regional area of Victoria.
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)
              `,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: true, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: true, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              ` have two years work experience;
`,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
`,
              `Sufficient funds
`,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
`,
              `Hold valid Queensland and Australian licenses (if applicable)
`,
              `Sponsorship Fee: $ 200
`,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
`,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
`,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              Completed within the last two years
              Have a positive decision on thesis
              Sufficient funds
              Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking
          `,
          `and 7 overall; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 August 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
      `,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
`,
          `or
`,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `Future Changes:
`,
          `Two year study requirement (from 1 January 2018)
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
         
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For applicants from outside Australia (Without Job offer - TSOL):
`,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
`,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
`,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
`,
          `skills and recent experience relevant to the researched employment opportunities.
`,
          `access to sufficient financial assets
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
`,
        ],
      },
    },
    electronicEngineer: {
      managerEngineer: {
        title:
          "Electronic Engineer (ANZSCO 233411) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/electronics-engineer.jpg",
        personnelTitle: "ANZSCO 233411-ELECTRONIC ENGINEER",
        personnelDetails: ` ELECTRONIC ENGINEER is responsible for Designing, creating, adapting, installing, testing, and maintaining electrical parts, circuits, and
        systems used in computer systems, communication systems, entertainment systems, transportation systems, and other industrial applications.
        It is possible that registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization:
          "Electrical Design Engineer Railway Signalling Engineer Signalling and Communications Engineer",
        averageTitle: "Electronic Engineer Average Salary and Income",
        averageDetails: `An Electronic Engineer’s Average Salary in Australia is $ 93,439 per year Average Age: Males: Females: Persons: 40.4
          `,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Electronic Engineer",
        smallTitle1: "UNIT GROUP 2334: Electronic Engineer",
        smallTitle1Details: (
          <div>
            Electronic Engineers are responsibly responsible for Designing,
            creating, adapting, installing, testing, and maintaining electrical
            parts, circuits, and systems used in computer systems, communication
            systems, entertainment systems, transportation systems, and other
            industrial applications.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Create electrical components, circuits, and systems for computer, communication, and control systems, as well as other industrial
          applications.
          `,
          `Design software, particularly embedded software, for use in such systems.
          `,
          `Create equipment and techniques for testing electronic components, circuits, and systems.
          `,
          `Directing computer, communication, and control system installation and commissioning, as well as assuring suitable protection and control
          measures.
          `,
          `Developing and measuring results and safety criteria and processes for such systems' operation, modification, maintenance, and repair.
          `,
          `Creating communication carriers using wired, optical fiber, and wireless communication mediums.
          `,
          `Evaluate traffic flows and service level, as well as for deciding on the kind of installation, location, layout, and transmission medium for
          communication systems.
          `,
          `Design and develop signal processing algorithms, then execute them using suitable hardware and software. 
  
        `,
        ],
        // specialization: `Specialisations - Electronic Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking
          `,
          `and 7 overall; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 August 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
       `,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
         `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
         
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
         `,
          ` Available to small business owners with past business experience and management expertise who have a business plan.
         `,
          ` and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
`,
        ],
      },
    },
    industrialEngineer: {
      managerEngineer: {
        title:
          "Industrial Engineer (ANZSCO 233511) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/industrial-engineer.jpg",
        personnelTitle: "ANZSCO 233511-INDUSTRIAL ENGINEER",
        personnelDetails: ` Industrial Engineer is responsible for Investigating and assessing the use of personnel, facilities, equipment, and resources, as well as existing
        operational procedures and established practices, to suggest improvements in the efficiency of operations in a range of commercial, industrial,
        and manufacturing settings. It is possible that registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization: "Process Engineer (Industrial)",
        averageTitle: "Industrial Engineer Average Salary and Income",
        averageDetails: `An Industrial Engineer Average Salary in Australia is $ 127,939 for male employees and $ 111,545 for female employees per year. Average Age:
          Males: 36.7 Females: 31.0 Persons: 35.9.
          `,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Industrial Engineer",
        smallTitle1:
          "UNIT GROUP 2335: Industrial Engineer, Mechanical Engineers and Production Engineers",
        smallTitle1Details: (
          <div>
            Industrial Engineers and Production Engineers are responsible for
            designing, arranging, and supervising the construction, operation,
            and upkeep of mechanical and processing plants and installations,
            establishing programs for the coordination of manufacturing
            processes and ensuring cost- effective resource use.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Examining operational statements, organizational charts, and project data to identify worker and workgroup duties and responsibilities
          and to point out areas of overlap.
          `,
          `Developing labor utilization standards by developing work measurement programs and assessing work samples.
          `,
          `To evaluate optimum worker and equipment efficiency, examine labor utilization, facility architecture, operational data, and production
          schedules and prices.
          `,
          `Create mechanical equipment, machinery, components, manufacturing products, and plant and system designs.
          `,
          `Create manufacturing specifications, as well as materials, equipment, pipes, material flows, capacities, and plant and system structure.
          `,
          `Organize and oversee project labor and also material, plant, and equipment shipments.
          `,
          `Establish installation, modification, quality control, testing, inspecting, and maintenance standards and policies understanding of engineering
          considerations and safety laws.
          `,
          `Examine the plant to ensure that it is operating at peak efficiency.
          `,
          `Directing the upkeep of plant structures and equipment, as well as managing the demand for new designs, inspections, and maintenance
          schedules.
  
        `,
        ],
        // specialization: `Specialisations - Industrial Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
          applicants have worked in a skilled occupation in South
          Australia, OR have an immediate family member
          permanently residing in South Australia OR have ninety
          points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See
          `,
          `Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
          Proficient overall)
          `,
          `See Exemption considerations for International graduates
          of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking
          `,
          `and 7 overall; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 August 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
       `,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
         `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
                    
          `,
        ],
      },
    },
    mechanicalEngineer: {
      managerEngineer: {
        title:
          "Mechanical Engineer (ANZSCO 233512) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/mechanical-engineer.jpg",
        personnelTitle: "ANZSCO 233512-MECHANICAL ENGINEER",
        personnelDetails: `Mechanical Engineer is responsible for Planning, organizing, and supervising the assembly, erection, commissioning, operation, and upkeep
        of mechanical and process plants and installations.
        It is possible that registration or licensing will be required.`,
        skillText: "Skill Level :1 ",
        averageTitle: "MECHANICAL ENGINEER Average Salary and Income",
        averageDetails: `Mechanical Engineer Average Salary in Australia is $ 127,939 for male employees and $ 111,545 for female employees per year. Average Age:
          Males: 36.7 Females: 31.0 Persons: 35.9.`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Mechanical Engineer",
        smallTitle1:
          "UNIT GROUP 2335:Industrial Engineers, Mechanical Engineers, Production Engineers",
        smallTitle1Details: (
          <div>
            Mechanical Engineers and Production Engineers are responsible for
            designing, arranging, and supervising the construction, operation,
            and upkeep of mechanical and processing plants and installations,
            establishing programs for the coordination of manufacturing
            processes and ensuring cost-effective resource use.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Examining operational statements, organizational charts, and project data to identify worker and workgroup duties and responsibilities
          and to point out areas of overlap.
         `,
          ` Developing labor utilization standards by developing work measurement programs and assessing work samples.
          `,
          `To evaluate optimum worker and equipment efficiency, examine labor utilization, facility architecture, operational data, and production
          schedules and prices.
          `,
          `Create mechanical equipment, machinery, components, manufacturing products, and plant and system designs.
          `,
          `Create manufacturing specifications, as well as materials, equipment, pipes, material flows, capacities, and plant and system structure.
          `,
          `Organize and oversee project labor and also material, plant, and equipment shipments.
          `,
          `Establish installation, modification, quality control, testing, inspecting, and maintenance standards and policies understanding of engineering
          considerations and safety laws.
          `,
          `Examine the plant to ensure that it is operating at peak efficiency.
          `,
          `Directing the upkeep of plant structures and equipment, as well as managing the demand for new designs, inspections, and maintenance
          schedules.`,
        ],
        specialization: `Specialisations - Mechanical Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `Financial capacity
              `,
              `Applicants living outside Australia:
              one year of skilled work experience in the past 2 years or
              alternatively have Australian qualifications.
              `,
            ],
            tick1: true,
            NTParagraphs2: [
              `
              For applicants
`,
              `who are able to provide evidence of positive employment
`,
              `Financial capacity
`,
              `Applicants living outside Australia:
`,
              `one year of skilled work experience in the past 2 years or
`,
              `alternatively have Australian qualifications.
`,
              `Postcodes: Entire territory (including Darwin, Palmerston,
`,
              `Alice Springs, Katherine and Nhulunbuy)
              `,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          ` Available to South Australian international graduates, OR applicants
         have worked in a skilled occupation in South Australia, OR have an
         immediate family member permanently residing in South Australia OR
         have ninety points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years.
         `,
          `See Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band)
         (or Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks(Current at 13/7/2016)
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              a current job offer within a regional area of Victoria.
              Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)`,
            ],
            tick2: true,
          },
          {
            VICParagraphs1: [
              `For Graduates in Victoria
              completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria
              completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: true, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: true, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `have two years work experience;
              `,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Sponsorship Fee: $ 200
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `For applicants currently working in Queensland:
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `For Graduates in Queensland (Master):
              `,
              `Completed Masters Degree or higher within the last two years
              `,
              `Have a job offer in your skilled occupation (or a closely related occupation).
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
              `Closed
              `,
              `BSMQ has temporarily suspended the acceptance of Mechanical Engineer from 27 February 2018 until further notice.
              `,
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking
          `,
          `and 7 overall; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 August 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.        `,
        ],
        TASParagraph1: [
          `
          `,
          `Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          `,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          `,
          `skills and recent experience relevant to the researched employment opportunities.
          `,
          `access to sufficient financial assets
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
        `,
        ],
      },
    },
    productionEngineer: {
      managerEngineer: {
        title:
          "Production or Plant Engineer (ANZSCO 233513) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/production-engineer.jpg",
        personnelTitle: "ANZSCO 233513-PRODUCTION OR PLANT ENGINEER",
        personnelDetails: ` Production or Plant Engineer plays an important role in planning, directing, and supervising the design, construction, alteration, ongoing operation,
        and upkeep of industrial plant equipment and machinery, as well as the planning and management of manufacturing and services. It is possible that
        registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization: "Process Engineer (Industrial)",
        averageTitle: "PRODUCTION OR PLANT Engineer Average Salary and Income:",
        averageDetails: `Production or Plant Engineer Average Salary in Australia is $ 127,939 for male employees and $ 111,545 for female employees per year. Average
          Age: Males: 36.7 Females: 31.0 Persons: 35.9.
          `,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Production or Plant Engineer",
        smallTitle1:
          "UNIT GROUP 2335: Industrial Engineer, Mechanical Engineers and Production Engineers",
        smallTitle1Details: (
          <div>
            Production or Plant Engineers, Mechanical Engineers and Production
            Engineers are responsible for Designing, organizing, and managing
            the development, operation, and support of mechanical and process
            plants and establishments, creating programs for the coordination of
            assembly processes and ensuring the utilization of assets in a
            financially viable manner.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Examining operational statements, organizational charts, and project data to identify worker and workgroup duties and responsibilities and
          to point out areas of overlap.
          `,
          `Developing labor utilization standards by developing work measurement programs and assessing work samples.
          `,
          `To evaluate optimum worker and equipment efficiency, examine labor utilization, facility architecture, operational data, and production schedules
          and prices.
          `,
          `Create mechanical equipment, machinery, components, manufacturing products, and plant and system designs.
          `,
          `Create manufacturing specifications, as well as materials, equipment, pipes, material flows, capacities, and plant and system structure.
          `,
          `Organize and oversee project labor and also material, plant, and equipment shipments.
          `,
          `Establish installation, modification, quality control, testing, inspecting, and maintenance standards and policies understanding of engineering
          considerations and safety laws.
          `,
          `Examine the plant to ensure that it is operating at peak efficiency.
          `,
          `Directing the upkeep of plant structures and equipment, as well as managing the demand for new designs, inspections, and maintenance
          schedules.
  
        `,
        ],
        // specialization: `Specialisations - Production or Plant Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
          applicants have worked in a skilled occupation in South
          Australia, OR have an immediate family member
          permanently residing in South Australia OR have ninety
          points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See
          `,
          `Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
          Proficient overall)
          `,
          `See Exemption considerations for International graduates
          of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
`,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
`,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
`,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
`,
          `Service fee: A$300
`,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.
`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
`,
          `or
`,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `Future Changes:
`,
          `Two year study requirement (from 1 January 2018)
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
          `,
        ],
      },
    },
    miningEngineer: {
      managerEngineer: {
        title:
          "Mining Engineer ANZSCO 233611(Excluding Petroleum) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/mining-engineer.jpg",
        personnelTitle: "ANZSCO 233611-MINING ENGINEER",
        personnelDetails: ` Mining Engineer is responsible for Planning and coordinating the engineering elements of mineral exploration and extraction from the Earth. It
        is possible that registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization: "Process Engineer (Industrial)",
        averageTitle: "MINING ENGINEER Average Salary and Income:",
        averageDetails: `Mining Engineer ANZSCO 233611 (Excluding Petroleum) Average Salary in Australia $ 179,021 for male employees and $ 133,068 for female
          employees per year. Average Age: Males: 38.2 Females: 33.2 Persons: 37.3.
          `,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Mining Engineer(Excluding Petroleum)",
        smallTitle1: "UNIT GROUP 2336: MINING ENGINEER",
        smallTitle1Details: (
          <div>
            MINING ENGINEERS are responsible for planning and directing the
            engineering elements of identifying and extracting minerals,
            petroleum, and natural gas from the surface.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Perform preliminary surveys of mineral, petroleum, and natural gas reserves with prospectors, geologists, geophysicists, other mineral
          researchers, including engineers to evaluate the resources available, the viability of collecting the reserves, and the design and implementation
          of the extraction process.
          `,
          `Creating operational and projects estimated costs and production plans, as well as tracking progress, productivity, and cost concerning the
          budget.
          `,
          `Identify the most acceptable ways of ore extraction taking consideration of all such criteria as the depth of overburden, and attitudinal and
          physical properties of deposits and adjacent stratum
          `,
          `Creating blueprints for tunnels and chambers, locating and building mine shafts, laying out mine development, and employing suitable mining
          procedures, frequently with the use of computer simulations.
          `,
          `Evaluate the environmental, technological, economic, and security hazards involved with the development project, construction, and operation
          phases.
          `,
          `Evaluate the security of procedures, the sequence of extraction, and the security of mine walls, assessing the danger of slippage and advising
          on slippage and rockfall prevention.
          `,
          `Plan and coordinate labor and equipment used by efficient objectives, legislation, safety requirements, and environmental circumstances.
          `,
          `Plan and perform research, as well as provide engineering guidance on petroleum and natural gas exploration, localization, and extraction
          activities.
          `,
          `Choose a spot for drilling.
          `,
          `Choosing on types of derricks and equipment including seabed platforms.
          `,
          `Creating technologies to regulate the supply of gas through wells.
                    
        `,
        ],
        // specialization: `Specialisations - Mining Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
    },
    petroleumEngineer: {
      managerEngineer: {
        title:
          "Petroleum Engineer (ANZSCO 233612) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/petroleum-engineer.jpg",
        personnelTitle: "ANZSCO 233612-PETROLEUM ENGINEER",
        personnelDetails: ` Petroleum Engineer is responsible for planning and controlling the engineering aspects in obtaining petroleum or natural gas from the earth.
        It is possible that registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        specialization: "Mud Engineer Petrophysical Engineer",
        averageTitle: "PETROLEUM ENGINEER Average Salary and Income:",
        averageDetails: `Petroleum Engineering Average Salary in Australia is $ 179,021 for male employees and $ 133,068 for female employees per year. Average Age:
          Males: 38.2 Females: 33.2 Persons: 37.3 CDR which is also known as the Competency Demonstration Report plays an important role to get 100 %
          Approval from Engineers Australia (EA). Only High-Quality CDR Report is Given priority by the Engineers of Australia. All the Engineering Applicants
          desiring to be assessed as a Petroleum Engineer required a High-Quality CDR Report.
          It should be noted that Petroleum Engineer is Removed from the SOL list in July 2016.
          `,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Petroleum Engineer",
        smallTitle1: "UNIT GROUP 2336: PETROLEUM ENGINEER",
        smallTitle1Details: (
          <div>
            Petroleum engineers are responsible for planning and controlling the
            engineering aspects in obtaining petroleum or natural gas from the
            earth.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Perform preliminary surveys of mineral, petroleum, and natural gas reserves with prospectors, geologists, geophysicists, other mineral
          researchers, including engineers to evaluate the resources available, the viability of collecting the reserves, and the design and implementation
          of the extraction process.
          `,
          `Creating operational and projects estimated costs and production plans, as well as tracking progress, productivity, and cost concerning the
          budget.
          `,
          `Identify the most acceptable ways of ore extraction taking consideration of all such criteria as the depth of overburden, and attitudinal and
          physical properties of deposits and adjacent stratum
          `,
          `Creating blueprints for tunnels and chambers, locating and building mine shafts, laying out mine development, and employing suitable mining
          procedures, frequently with the use of computer simulations.
          `,
          `Evaluate the environmental, technological, economic, and security hazards involved with the development project, construction, and operation
          phases.
          `,
          `Evaluate the security of procedures, the sequence of extraction, and the security of mine walls, assessing the danger of slippage and advising
          on slippage and rockfall prevention.
          `,
          `Plan and coordinate labor and equipment used by efficient objectives, legislation, safety requirements, and environmental circumstances.
          `,
          `Plan and perform research, as well as provide engineering guidance on petroleum and natural gas exploration, localization, and extraction
          activities.
          `,
          `Choose a spot for drilling.
          `,
          `Choosing on types of derricks and equipment including seabed platforms.
          `,
          `Creating technologies to regulate the supply of gas through wells.         
        `,
        ],
        // specialization: `Specialisations - Petroleum Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
    },
    aeronauticalEngineer: {
      managerEngineer: {
        title:
          "Aeronautical Engineer (ANZSCO 233911) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/aeronautical-engineer.jpg",
        personnelTitle: "ANZSCO 233911- AERONAUTICAL ENGINEER",
        personnelDetails: `Aeronautical Engineer is responsible for conducting and monitoring engineering tasks related to the design, development, manufacturing,
        upkeep, and modification of aircraft for flight. It is possible that registration or licensing would be required. Engineering work involving the
        design, development, construction, maintenance, and modification of aircraft for flight is performed and supervised.
        It is possible that registration or licensing will be required.`,
        skillText: "Skill Level :1",
        //         specializationList:[`
        //         Aeronautical Engineering Officer (Navy) Aerospace Engineer Aerospace Engineer Officer
        // `,`Aeronautical (Air Force) Aerospace Engineer Officer
        // `,`Armament (Air Force) Aerospace Engineer Officer
        // `,`Electronics (Air Force) Avionics Systems Engineer Weapons Aeronautical Engineering Officer (Navy)
        //         `],

        averageTitle: "AERONAUTICAL ENGINEER Average Salary and Income",
        averageDetails: `Aeronautical Engineer Average Salary in Australia is $ 101,490 per year for male employees and $ 121,339 per year for female employees. Average
          Age: Males: 40.4 Females: 37.3 Persons: 40.0
          CDR which is also known as the Competency Demonstration Report plays an important role to get
          100 % Approval from Engineers Australia (EA). Only High-Quality CDR Report is Given priority by the Engineers of Australia. All the Engineering
          Applicants desiring to be assessed as Aeronautical Engineer required a High-Quality CDR Report.`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Aeronautical Engineer",
        smallTitle1: "UNIT GROUP 2339: Other Engineering Professionals",
        smallTitle1Details: (
          <div>
            It includes Engineering Professionals who are not else categorized.
            It comprises Aeronautical Engineers, Biomedical Engineers,
            Agricultural Engineers, Environmental Engineers, Engineering
            Technologists, and Naval Architects (Aus) or Marine Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Prepare design ideas for Aeronautical engineering processes and going to plan control mechanisms for mechanisms such as removing
          and separating components, effecting Aeronautical adjustments, testing and evaluating fuels, transferring heat, and controlling the storing
          and dealing of solids, liquids, and gases tracking the operation and maintenance of the equipment to achieve higher performance under safe
          working circumstances.
          `,
          `Verifying that the proper materials and equipment are utilized and that it adheres to requirements troubleshooting failures in Aeronautical plants
          and implementing corrective measures researching product usage and pollution prevention issues.
          `,
          `Analyze new product plans and offer material selection suggestions based on design parameters and considerations such as strength, weight,
          and cost.`,
        ],
        specialization: `Specialisations - Geotechnical Engineer-ANZSCO 233212`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
        `,
          ` one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016) 
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: true, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
             `,
              ` - PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
              `,
              `Sufficient funds
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              `,
              `Sponsorship Fee: $ 200
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
              `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):
                `,
              `Completed Masters Degree or higher within the last two years
                `,
              `Have a job offer in your skilled occupation (or a closely related occupation).
                `,
              `Sufficient funds
                `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          `,
          `Service fee: A$300
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
                    
         
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          `,
          `For applicants from outside Australia
          `,
          `(Without Job offer - TSOL):
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          `,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          `,
          `skills and recent experience relevant to the researched employment opportunities.
          `,
          `access to sufficient financial assets
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)]`,
        ],
      },
    },
    agriculturalEngineer: {
      managerEngineer: {
        title:
          "Agricultural Engineer (ANZSCO 233912) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/agricultural-engineer.jpg",
        personnelTitle: "ANZSCO 233912- AGRICULTURAL ENGINEER",
        personnelDetails: `Agricultural Engineer is responsible for doing and overseeing engineering work relating to the usage and development of agricultural land, structures,
        machinery, and equipment. It is possible that registration or licensing will be required.
        Registration or licensing will probably be required.`,
        skillText: "Skill Level :1",

        averageTitle: "AGRICULTURAL ENGINEER Average Salary and Income",
        averageDetails: `Agricultural Engineer Average Salary in Australia is $ 101,490 per year for male employees and $ 121,339 per year for female employees. Average
          Age: Males: 40.4 Females: 37.3 Persons: 40.0
          CDR which is also known as the Competency Demonstration Report plays an important role to get 100 % Approval from Engineers Australia (EA).
          Only High-Quality CDR Report is Given priority by the Engineers of Australia. All the Engineering Applicants desiring to be assessed as Agricultural
          Engineers required a High-Quality CDR Report`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of Agricultural Engineer",
        smallTitle1: "UNIT GROUP 2339: Other Engineering Professionals",
        smallTitle1Details: (
          <div>
            Agricultural Engineers are responsible for conducting and monitoring
            engineering tasks related to the design, development, manufacturing,
            upkeep, and modification of aircraft for flight. It is possible that
            registration or licensing would be required. Engineering work
            involving the design, development, construction, maintenance, and
            modification of aircraft for flight is performed and supervised.
            UNIT GROUP 2339: OTHER ENGINEERING PROFESSIONALS includes
            Engineering Professionals who are not else categorized. It comprises
            Aeronautical Engineers, Biomedical Engineers, Agricultural
            Engineers, Environmental Engineers, Engineering Technologists, and
            Naval Architects (Aus) or Marine Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Plan and build the rural electric and thermal power distribution infrastructure. Additional systems comprise irrigation, flood mitigation system, 
          drainage, distribution networks, and water sources. 
          `,
          `Design and develop agricultural mechanical equipment, as well as manage its production.
          `,
          `Plan and oversee the building of the farm structure, equipment, agricultural processing plant, animal system, animal-based systems, and so on.
          `,
          `Create, transmit, record, and measure the devices and equipment needed to investigate these concerns. The analysis of numerous environmental 
          facts such as humidity, temperature, pressure, light, animals, plants, or the use of various pesticides.
          `,
          `Layout and oversee the placement of numerous pieces of equipment as well as instruments required to process and analyze diverse farm goods.
          
        `,
        ],
        specialization: `Specialisations - Agricultural Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
        `,
          ` one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or 
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016) 
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
               
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation. `,
            ],
            WA2tick: true,
          },
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
               `,
              `IELTS score of at least 7 in all bands or OET score of at least 7 in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
               
               `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
               `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
               `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
               
               `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
               `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA2tick: true,
          },
        ],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              
              `,
              `Sponsorship Fee: $ 200
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `For applicants currently working in Queensland:
              
              
              `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
              
              `,
              `Sponsorship Fee: $ 200
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For PhD Graduates in Queensland:
              `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).
          
         `,
          ` For Overseas Residents:
          
         `,
          ` Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
          
          
          `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
          
         `,
          ` If you hold, or have previously held a student/temporary graduate visa within the last two years:
          
         `,
          ` You must be resident in Canberra for at least 12 months at time of invitation.
          `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
          
          `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
          
          `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
          Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
                     
          `,
          `Service fee: A$300 (if you are invited to apply)`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          `,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application.
          `,
          `and
          
         `,
          ` sufficient funds.
          
          `,
          `Processing Time: 20 working days
          
         `,
          ` Sponsorship Fee: Nill
                    
         
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          `,
          `have been working in Tasmania for six months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          
          `,
          `or
          `,
          `For Overseas Applicants:
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          
          `,
          `or
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          
          `,
          `sufficient funds.
          
         `,
          ` Processing Time: 20 working days
          
          `,
          `Sponsorship Fee: Nill
          
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    biomedicalEngineer: {
      managerEngineer: {
        title:
          "Biomedical Engineer (ANZSCO 233214) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/biomedical-engineer.jpg",
        personnelTitle: "ANZSCO 233913-BIOMEDICAL ENGINEER",
        personnelDetails: `Biomedical Engineer is responsible for Integrating physics, engineering, maths, computers, physical chemistry, and materials science 
        understanding and techniques to biological issues as well as the prevention and treatment of human disease. Registration or licensing 
        will probably be required.
        `,
        skillText: "Skill Level :1",
        averageTitle: "BIOMEDICAL ENGINEER Engineer Average Salary and Income",
        averageDetails: `BIOMEDICAL ENGINEER Average Salary in Australia is $ 101,490 per year for male employees and $ 121,339 per year for female employees. 
          Average Age: Males: 40.4 Females: 37.3 Persons: 40.0`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of BIOMEDICAL ENGINEER",
        smallTitle1: "UNIT GROUP 2339: OTHER Engineering Professionals",
        smallTitle1Details: (
          <div>
            Biomedical Engineer is responsible for Integrating physics,
            engineering, maths, computers, physical chemistry, and materials
            science understanding and techniques to biological issues as well as
            the prevention and treatment of human disease. UNIT GROUP 2339:
            OTHER ENGINEERING PROFESSIONALS includes Engineering Professionals
            who are not else categorized. It comprises Aeronautical Engineers,
            Biomedical Engineers, Agricultural Engineers, Environmental
            Engineers, Engineering Technologists, and Naval Architects (Aus) or
            Marine Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of professions
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience and/or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1). Registration or licensing will probably be
            required.
          </div>
        ),
        tasks: [
          `Create innovative medical instruments or gadgets, such as sensors and therapeutic or diagnostic devices. 
          `,
          `A solid understanding of biomechanics is required for studying the human musculoskeletal system and constructing supporting gadgets to 
          aid in medical recovery.
          `,
          `Counseling and implementation of different medical instruments for measuring bodily patterns impacting sufferers, particularly those from the 
          critical care unit or having surgery.
          `,
          `Discovering and creating a variety of medicinal purposes for electromagnetic and ultrasonic radiation.
          `,
          `Examining bio-electrical investigation of the brain and heart.
          `,
          `Creating artificial organs and innovative implantable materials.
          `,
        ],
        specialization: `Specialisations - Biomedical Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
        `,
          ` one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016) 
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `completed a PhD in Victoria within the past five years.
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `completed a PhD in Victoria within the past five years.
`,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
              `,
              `Sufficient funds
              
             `,
              ` Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
              `,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
              
              `,
              `Sufficient funds
              
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              
              `,
              `Sponsorship Fee: $ 200
              
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              
              `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone),
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Sponsorship Fee: $ 200
              
              
             `,
              ` Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone) `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `
          `,
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
         `,
          ` IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
         `,
          `Nomination Criteria:
         `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
         `,
          `or
         `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
         `,
          `or
         `,
          `For Overseas Applicants:
         `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
         `,
          `Future Changes:
         `,
          `Two year study requirement (from 1 January 2018)
         `,
          `and
         `,
          `sufficient funds.
         `,
          `Processing Time: 20 working days
         `,
          `Sponsorship Fee: Nill
         
     
        `,
        ],
        TASParagraph2: [
          `Nomination Criteria:
         `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    engineeringTechnologist: {
      managerEngineer: {
        title:
          "Engineering Technologist(ANZSCO 233914) PR Visa for Immigration to Australia",
        titleDescription: "",
        image: "/images/ANZSCO/engineering-technologist.jpg",
        personnelTitle: "ANZSCO 233914-ENGINEERING TECHNOLOGIST",
        personnelDetails: ` Engineering Technologist is responsible for Evaluating and adapting new and updated engineering methods used in the engineering testing phase 
        and execution. Registration or licensing will probably be required.
        `,
        skillText: "Skill Level : 1",

        averageTitle: "ENGINEERING TECHNOLOGIST Average Salary and Income",
        averageDetails: `ENGINEERING TECHNOLOGIST Average Salary in Australia is $ 101,490 per year for male employees and $ 121,339 per year for female employees. 
          Average Age: Males: 40.4 Females: 37.3 Persons: 40.0`,
        jobDescription:
          "Job description, Education, Duties, and Responsibilities of ENGINEERING TECHNOLOGIST",
        smallTitle1: "UNIT GROUP 2339: OTHER ENGINEERING PROFESSIONALS",
        smallTitle1Details: (
          <div>
            Other Engineering Professionals are responsible for Evaluating and
            adapting new and updated engineering methods used in the engineering
            testing phase and execution. UNIT GROUP 2339: OTHER ENGINEERING
            PROFESSIONALS includes Engineering Professionals who are not else
            categorized. It comprises Aeronautical Engineers, Biomedical
            Engineers, Agricultural Engineers, Environmental Engineers,
            Engineering Technologists, and Naval Architects (Aus) or Marine
            Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            The majority of occupations in UNIT GROUP 2339 require a level of
            expertise equivalent to a bachelor's degree or better. For the
            formal qualification, at least 5 years of relevant work experience
            or appropriate vendor certifications might well be substituted. In
            certain cases, in terms of formal qualification, professional
            experience and/or on-the-job training may be necessary (ANZSCO Skill
            Level 1). Some Other Engineering Professionals’ skills and Expertise
            include: i) IELTS requires a minimum of 6 (L, R, W), 7 in speaking,
            and 7 overall Scores. ii) OET score with at least a B in all
            sections. iii) TOEFL iBT with a score of at least (L:12 R:13 W:21
            S:23 total L93); iv) PTE Academic requires a minimum score of 50 (L,
            R, W), 65 in speaking, & 65 total. Talking About Australia and New
            Zealand, the majority of Occupations in this unit category need a
            level of expertise equivalent to a bachelor's degree or above.
            Relevant experience and/or on-the-job training may be required in
            addition to the formal qualification (ANZSCO Skill Level 1).
            Registration or licensing will probably be required.
          </div>
        ),
        tasks: [
          `Set guidelines and rules for the industry's set up, intake, assessment, modification, creation, assurance, control, monitoring, upkeep, and 
          inspections.
         `,
          ` Examine the plans to ensure that they are performing optimally.
          `,
          `Provide through the help of any structure and equipment strategies for collaborating with management needs in designing new surveys, items, 
          and planned upkeep.
          `,
          `Establish the contractors and pre-specification for the policy's construction and facility acquisitions. 
          `,
          `The engineering technologists are in charge of scheduling the pans and describing the production processes.
          
        `,
        ],
        specialization: `Specialisations- ENGINEERING PROFESSIONALS`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `Only work experience in the civil or mechanical engineering disciplines is eligible
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `a current job offer within a regional area of Victoria.
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)
              `,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `ELTS 6.0 in each band
             `,
              ` Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
             `,
              ` and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 6.0 in each band
              `,
              `Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
              `,
              `and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          Service fee: A$300
          
          Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          
          `,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          
          `,
          `skills and recent experience relevant to the researched employment opportunities.
          
          `,
          `access to sufficient financial assets
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
`,
        ],
      },
    },
    environmentalEngineer: {
      managerEngineer: {
        title:
          "Environmental(ANZSCO 233914) PR Visa for Immigration to Australia",
        titleDescription:
          "Competency Demonstration Report, CDR,plays a vitalrole to get 100 % Approval from Engineers Australia (EA). Engineers Australia priorities high-quality CDR reports. All the Engineering Applicants desiring to be assessed as Environmental Engineers required a High-Quality CDR Report.",
        image: "/images/ANZSCO/environmental-engineering.jpg",
        personnelTitle: "ANZSCO 233915–ENVIRONMENTAL ENGINEER",
        personnelDetails: ` ENVIRONMENTAL ENGINEER is responsible  for analysing  engineering  activities'  influence upon the  air, water,  soil,  and  sound  levels  in  the  surrounding  area. Environmental  engineer develops  and  designs equipment and methods for such treatment & secure disposal of solid waste material and determine what creates long-term ecological concerns. Registration or licensing will probably be required
        `,
        skillText: "Skill Level : 1",
        averageTitle: "ENVIRONMENTAL ENGINEER Average Salary and Income:",
        averageDetails: `Environmental  Engineer AverageSalary  in  Australia  is  $  101,490  per  year  for  male  employees  and$ 121,339 per year for female employees. Average Age: Males: 40.4 Females: 37.3 Persons: 40.0`,
        jobDescription:
          "Job description, Education, Roles, and Responsibilities of ENVIRONMENTAL ENGINEER",
        smallTitle1: "UNIT GROUP 2339:  OTHER ENGINEERING PROFESSIONALS",
        smallTitle1Details: (
          <div>
            Other Engineering Professionals are responsible for Evaluating and
            adapting new and updated engineering methods used in the engineering
            testing phase and execution. UNIT GROUP 2339: OTHER ENGINEERING
            PROFESSIONALS includes Engineering Professionals who are not else
            categorized. It comprises Aeronautical Engineers, Biomedical
            Engineers, Agricultural Engineers, Environmental Engineers,
            Engineering Technologists, and Naval Architects (Aus) or Marine
            Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            The majority of occupations in UNIT GROUP 2339 require a level of
            expertise equivalent to a bachelor's degree or better. At least five
            years of relevant work experience or appropriate vendor
            certifications might substitutethe formal qualification. In some
            instances, professional experience andon-the-job training may be
            necessary (ANZSCO Skill Level 1).Talking About Australia and New
            Zealand, mostoccupations in this unit category need a level of
            expertise equivalent to a bachelor's degree or above. Relevant
            experience or on-the-job training may be required in addition to the
            formal qualification (ANZSCO Skill Level 1). Registration or
            licensing will probably be required
          </div>
        ),

        tasks: [
          `Environmental  engineers  generate,  examine,  and  revise  environmental research  documents  and information.`,
          `Environmental engineers always focus on acquiring, updating, and managing plans and permits of standard operating procedures.`,
          `Develop  activities  that  safeguard  the  environment,  including  pollution  control,  hazardous  waste disposal, etc. `,
          `Evaluate factual information and conduct quality and relevant control tests. `,
          `Imparting technical assistance for projects that are eco-friendly as well as remedial.6)Measuring and maintaining track of the progress of projects intended to enhance the ecosystem.`,
          `Examining industrial and municipal facilities to preserve a healthy atmosphere and surroundings.`,
          `Working on environmental issues with researchers, scientists, and other professionals.`,
          `Environmental engineer consults and informs the government on the methods and tactics utilised to conserve the environment.
        `,
        ],
        specialization: `Specialisations- ENVIRONMENTAL ENGINEER`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `ELTS 6.0 in each band
             `,
              ` Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
             `,
              ` and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 6.0 in each band
              `,
              `Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
              `,
              `and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
            `,
              `Sufficient funds
            
           `,
              ` Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
            
            `,
              `Hold valid Queensland and Australian licenses (if applicable)
            
            `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
            
            `,
              `Sponsorship Fee: $ 200
          `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
            `,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
            
            `,
              `Sufficient funds
            
            `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
            
            `,
              `Hold valid Queensland and Australian licenses (if applicable)
            
            `,
              `Sponsorship Fee: $ 200
            
            `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
            
            `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone),
          `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
            `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
            `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
            `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
            `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
            `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
            
            `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
            
            `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
            
            `,
              `Sponsorship Fee: $ 200
            
            
            `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone) `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
            `,
              `Completed within the last two years
            
            `,
              `Have a positive decision on thesis
            
            `,
              `Sufficient funds
            
            `,
              `Sponsorship Fee: $ 200
          `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
         `,
          ` IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          NNomination Criteria:
         `,
          ` Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
         `,
          ` or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
         `,
          ` or
          
         `,
          ` For Overseas Applicants:
          
         `,
          ` have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
         `,
          ` sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
`,
        ],
      },
    },
    computerEngineer: {
      managerEngineer: {
        title: `Computer Network and Systems Engineer (ANZSCO 263111) PR Visa for Immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/computer-network.jpg",
        personnelTitle: "Computer Network and Systems Engineer (ANZSCO 263111)",
        personnelDetails: ` A high-quality  CDR  Report  is  essential  for  all  Engineering Applicants  who  want  to  be Computer  Network  and  Systems  Engineers.  Competency  Demonstration  Report, CDR Report, is crucial in obtaining Engineers Australia (EA) 100 %approval. Engineers Australia prioritises high-quality CDR reports.
        `,
        skillText: "Skill Level : 1",
        averageTitle:
          "Computer Network and Systems Engineer Average Salary and Income:",
        averageDetails: `Computer  Network  and  Systems  Engineer’ saverage salary  in  Australia  is $  104,705  for male employees per year and $ 116,846 for female employees per year.Average age of male employees: 40.7, Female employees: 46.7`,
        jobDescription:
          "Job description, Education, Roles, and Responsibilities of Computer Network and Systems Engineer.",
        smallTitle1: "UNIT GROUP 2631:  COMPUTER NETWORK PROFESSIONALS.",
        smallTitle1Details: (
          <div>
            Computer network professionals are in charge of exploring,
            analysing, and suggesting network topology. Computer Network and
            Systems Engineer develop strategy and implement it to
            manage,maintain and configure network hardware and software.
            Computer network professionals are good at tracking and optimising
            performance, debugging, and offering technical assistance.
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Most occupations in this unit group have a skill level commensurate
            with a bachelor’s degree or higher qualification. In some
            instances,relevant experience andon-the-job training may be required
            in addition to the formal qualification (ANZSCO Skill Level 1).
          </div>
        ),

        tasks: [
          `Analyse,   generate,   understand,   and   review   complex   system   structural   and development  requirements data  models and  diagrams  in  creating,  configuring, and integrating computer systems.`,
          `Internet   infrastructure   research,   analysis,   evaluation,   and   supervision,   ensure connections to run at peak performance.`,
          `Evaluate and suggest network functions and integrated hardware, application, communication, and software products. `,
          `Offer specialised help and debugging for connection problems and emergencies. `,
          `Install, set up, verify, and manage new and updated networks, software database applications, servers, and workstations.`,
          `Offer network programming in response to particular business demands and needs.7)Create and monitor network inventory processes and documentation and capture network problem diagnostics and resolution, upgrades and alterations, and maintenance instructions.`,
          `Check network traffic, activity, capacity, and consumption guaranteesnetwork integrity and efficiency.`,
        ],
        specialization: `specializations: Computer Network and Systems Engineer`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to all applicants including South Australian international graduates.
         `,
          ` Special Conditions (from 19/07/2017 ): Available to international graduates in South Australia, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have 85 points or higher (including state nomination points).
          
          `,
          `Special Conditions Apply
          
         `,
          ` Proficient English (e.g. IELTS 7.0 in each band) (or Proficient Plus overall); Offshore applicants Provisional 489 visa only; 70 points required; See additional instructions
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)       
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to all applicants including South Australian international graduates.
         `,
          ` Special Conditions (from 19/07/2017 ): Available to international graduates in South Australia, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have 85 points or higher (including state nomination points).
          
          `,
          `Special Conditions Apply
          
          `,
          `Proficient English (e.g. IELTS 7.0 in each band) (or Proficient Plus overall); Offshore applicants Provisional 489 visa only; 70 points required; See additional instructions
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
          
          `,
          `Eligible Postcodes: Entire territory (including Adelaide, Mount Gambier, Whyalla, Gawler, Port Pirie, Bridgewater, Port Augusta, Murray Bridge, Port Lincoln, Mount Barker, Victor Harbor and Aldinga Beach)        
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Three years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              
              `,
              `[The Victorian Government will review and select the top ranking ICT candidates from SkillSelect, who have indicated Victoria as their preferred state.]`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
             `,
              ` Work experience: Three years(No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `[The Victorian Government will review and select the top ranking ICT candidates from SkillSelect, who have indicated Victoria as their preferred state.]
              
             `,
              ` a current job offer within a regional area of Victoria.
              
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)`,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
             `,
              ` IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: true, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: true, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Closed
            `,
              `BSMQ has temporarily suspended the acceptance of Computer Network and Systems Engineer from 27 February 2018 until further notice.
            
            `,
              `For applicants currently working in Queensland:
            
            `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
            
            `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
            
            `,
              `Applicants must have five years experience post qualification in their nominated occupation and a job offer for a full time position in their nominated occupation. Queensland is seeking specific ICT skills in relation to cyber security, data scientist, data and business analytics and ICT development and architecture. (The 2017-18 QSOL will also place a specific Queensland ceiling of 200 on nominations for ICT occupations across onshore, alumni and offshore programs).
            
            `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: false,
            QLD2Tick: false,
            QLDParagraph2: [
              `Closed
            `,
              `BSMQ has temporarily suspended the acceptance of Computer Network and Systems Engineer from 27 February 2018 until further notice.
            
            `,
              `For applicants currently working in Queensland:
            
           `,
              ` Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
            
           `,
              ` Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
            
           `,
              ` Applicants must have five years experience post qualification in their nominated occupation and a job offer for a full time position in their nominated occupation. Queensland is seeking specific ICT skills in relation to cyber security, data scientist, data and business analytics and ICT development and architecture. (The 2017-18 QSOL will also place a specific Queensland ceiling of 200 on nominations for ICT occupations across onshore, alumni and offshore programs).
            
            `,
              `Sponsorship Fee: $ 200
            
          `,
              `  Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)`,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
            `,
              `Completed within the last two years
            
            `,
              `Have a positive decision on thesis
            
            `,
              `Sufficient funds
            
            `,
              `Sponsorship Fee: $ 200
          `,
            ],
            QLD1Tick: false,
            QLD2Tick: "",

            QLDParagraph2: [
              `
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
`,
          `or
`,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `Future Changes:
`,
          `Two year study requirement (from 1 January 2018)
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    engineeringProfessionals: {
      managerEngineer: {
        title: `Engineering Professionals (NEC) (ANZSCO 233999) PR Visa for Immigration to Australia.`,
        titleDescription:
          "A high-quality  CDR  Report  is  essential  for  all  Engineering  Applicants  who  want  to  be Engineering  Professionals  (NEC).  Competency  Demonstration  Report, CDR  Report, is crucial  in  obtaining  Engineers  Australia’s  (EA)  100  %Approval.  Engineers  Australia prioritises only high-quality CDR reports",
        image: "/images/ANZSCO/engineering-professional.jpg",
        personnelTitle: "ANZSCO 233999–Engineering Professionals (NEC)",
        personnelDetails: (
          <div>
            {" "}
            Engineering Professionalsoccupation group covers Engineering
            Professionals not elsewhere classified.Engineering professionals
            specialises as following.
            <br />
            •Acoustic Engineer.
            <br />
            •Calibration Engineer.
            <br />
            •Fire Safety Engineer.
            <br />
            •Product Design Engineer.
            <br />
            •Mechatronics Engineer.
            <br />
            •Corrosion Engineer. <br />
            •Packaging Technologist
          </div>
        ),
        skillText: "Skill Level : 1",
        averageTitle:
          "Average Salary and Income of Engineering Professionals (NEC):",
        averageDetails: `In Australia,  Engineering Professional’s average salary is  $  101,490  per  year  for  male employees  and  $  121,339  per  year  for  female  employees.  Average  Age:  Males:  40.4 Females: 37.3`,
        jobDescription:
          "Job description, Education, Roles, and Responsibilities of Engineering Professionals (NEC)",
        smallTitle1: "UNIT GROUP 2339:  ENGINEERING PROFESSIONALS (NEC)",
        smallTitle1Details: (
          <div>
            UNIT GROUP 2339 includes Engineering Professionals who are not
            elsewhere categorised. It comprises Aeronautical Engineers,
            Biomedical Engineers, Agricultural Engineers, Environmental
            Engineers, Engineering Technologists, and Naval Architects (AUS) or
            Marine Designers (NZ).
          </div>
        ),
        smallTitle2: "Indicative Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Most occupations in this unit group have a level of skill
            commensurate with a bachelor degree or higher qualification. In some
            instances relevant experience and/or on-the-job training may be
            required in addition to the formal qualification (ANZSCO Skill Level
            1).
          </div>
        ),

        tasks: [
          `Engineering  professionals create,  construct, fabricate,  and  carry out engineering tasks. `,
          `Managing, Regulating, and controlling all the resources is the responsibility of Engineering Professionals.`,
          `Engineering Professionals are responsible for job allocation to subordinates and task inspection.`,
          `Engineering   Professionals   take immediate steps whilethere   is   a   delay   in implementation. `,
          `Give progress updates to the management staff. `,
          `Provide updates and reports regularly.`,
        ],
        specialization: `specializations: Engineering Professionals`,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subc lass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `Only work experience in the civil or mechanical engineering disciplines is eligible
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `a current job offer within a regional area of Victoria.
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)
              `,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `ELTS 6.0 in each band
             `,
              ` Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
             `,
              ` and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 6.0 in each band
              `,
              `Must have either:
              
              `,
              `a PhD qualification in your skilled occupation;
              
              `,
              `and/or
              `,
              `an offer of employment in your skilled occupation and evidence of acceptance.`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          Service fee: A$300
          
          Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          
          `,
          `For applicants from outside Australia (Without Job offer - TSOL):
          
          `,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
          
          `,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
          
          `,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
          
          `,
          `skills and recent experience relevant to the researched employment opportunities.
          
          `,
          `access to sufficient financial assets
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          
          `,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)
`,
        ],
      },
    },
    telnetworkEngineer: {
      managerEngineer: {
        title: `Telecommunications Network Engineer(ANZSCO 263312)PR Visa for Immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/telecommunication-network.jpg",
        personnelTitle: "ANZSCO 263312–Telecommunications Network Engineer.",
        personnelDetails: ` Telecommunications Network Engineer plans and designs complex telecommunication networks. Telecommunications  Network  Engineer  is  responsible  to  plan  and  monitor network associated broadcasting equipment. It is possible that registration or licensing will be required.`,
        skillText: "Skill Level : 1",
        averageTitle:
          "Telecommunications Network Engineer’s average salary and Income:",
        averageDetails: `A Telecommunications Engineering Professionals’ saverage salary in Australia is $ 127,939 for male employees and $ 111,545 for female employees per year. Average Age: Males: 36.7 Females: 31.0 Persons: 35.9.`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Telecommunications Network Engineer.",
        smallTitle1:
          "UNIT GROUP 2663:  Telecommunications Engineering Professionals",
        smallTitle1Details: (
          <div>
            Telecommunications Engineering Professionals plan and design complex
            telecommunication networks.Telecommunications Engineering
            Professionals areresponsible to plan and monitor network associated
            broadcasting equipment. Telecommunications Engineering Professionals
            design, construct, install, service and support telecommunications
            equipment, systems and facilities.
          </div>
        ),
        smallTitle2:
          "Indicative Skill and Expertise Level Telecommunications Network Engineer:",
        smallTitle2Details: (
          <div>
            Most occupations in this unit group have a skill level equivalent
            toa bachelor’s degree or higher qualification. In some instances,
            relevant experience and on-the-job training may be required in
            addition tothe formal qualification (ANZSCO Skill Level 1).
          </div>
        ),

        tasks: [
          `Telecommunications network engineer study the problems in present-day, and design networksto eliminate the problem in future.`,
          `Telecommunications network engineers stay within the boundaries of laws, policies, responsibilities and procedures as a telecommunication network engineer`,
          `Telecommunications Engineering Professionals are the ones who determine the elements of the network like circuits and transmission lines.`,
          `Telecommunications network engineers are responsible to prepare and present the specification and use of telecommunication equipment. `,
          `Telecommunications Engineering Professionalsare responsible for trackingthe performance of telecommunicating devices/systems and maintaining it if required.•`,
          `Telecommunications network engineersare responsible for finding out the best way to manage telecommunication networks and software for desired requirements.
        `,
        ],
        specialization: `specializations: Telecommunications network engineer `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          `,
          `45 years or less
          `,
          `Financial capacity
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          `,
          `See Exemption considerations for International graduates of South Australia
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                  
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR
         applicants have worked in a skilled occupation in South
         Australia, OR have an immediate family member
         permanently residing in South Australia OR have ninety
         points or higher (including state nomination points).
         `,
          `one year of skilled work experience in the past 3 years. See
         `,
          `Work experience waiver
         `,
          `45 years or less
         `,
          `Financial capacity
         `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or
         Proficient overall)
         `,
          `See Exemption considerations for International graduates
         of South Australia
         `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
                   
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Bachelor and other higher degree graduates (ie Bachelor Honours Degree, Graduate Certificate or Graduate Diploma) in Western Australia
              `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
              
              `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
              `,
              `one year of Australian work experience within the last 10 years; or 3 years of overseas work experience within the last ten years
               
              `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation. `,
            ],
            WA2tick: true,
          },
          {
            WAParagraph1: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
               `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
               
               `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
               `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA1tick: true,

            WAParagraph2: [
              `Avaliable to applicants who have completed a Masters Degree or PhD in Western Australia
               `,
              `IELTS score of at least 7 in all bands or OET score of at least B in all bands or TOEFL-iBT (24 in all bands) or PTE Academic (65 in all bands) or Cambridge English Advanced (CEA) (185 in all skills)
               
               `,
              `IELTS exemption: citizens of UK, Ireland, USA, Canada and New Zealand.
               `,
              `Have an employment contract for full-time employment for at least 12 months in Western Australia in the nominated (or closely related) occupation.`,
            ],
            WA2tick: true,
          },
        ],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band
              `,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },
          { tick: false, location: "Northern Rivers" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
          `,
              ` Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
           `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
           
           `,
              `Sponsorship Fee: $ 200
           `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
           
           `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
           `,
              `For applicants currently working in Queensland:
           
           
           `,
              `Currently working in regional Queensland in the nominated or closely related occupation for the previous 4 months at time of lodging the Expression of Interest; and
          `,
              ` Have an offer to continue your employment and the same employer for 12 months in regional Queensland in your nominated or closely related occupation
           
           `,
              `Sponsorship Fee: $ 200
           `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
           `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
       `,
              `BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
       `,
              `Completed within the last two years
       `,
              `Have a positive decision on thesis
       `,
              `Sufficient funds
       `,
              `Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
       `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For PhD Graduates in Queensland:
      `,
              ` BSMQ Temporarily Suspends QUEENSLAND SKILLED VISA NOMINATION for Subclass 190 & 489; BSMQ will re-open the State Nomination Program in the new financial year (July 2019).
      `,
              ` Completed within the last two years
      `,
              ` Have a positive decision on thesis
      `,
              ` Sufficient funds
      `,
              ` Applicants must be ONSHORE only. Once this quota has been filled the program will close again until July 2019.
      `,
              ` Sponsorship Fee: $ 200`,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: true,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants must demonstrate a ‘Proficient’ level of English as defined by Home Affairs (ie IELTS result with a minimum score of 7 (L, R, W, S) or or PTE Academic with a minimum score of 65 (L, R, W, S) or be eligible for ACT 190 Streamlined PhD nomination).
          
          `,
          `For Overseas Residents:
          
         `,
          ` Their skills and at least 12 months experience in the nominated occupation must be relevant to the ACT economy. Experience in heavy industry, manufacturing, production, mining; shipping, gas and oil, head office banking and railways are not generally considered relevant industries given the structure of the ACT economy which is primarily knowledge-based
          
          
          `,
          `For Canberra residents: When you lodge your expression of interest, you must be working in Canberra for the last three months. While the employment does not have to be fulltime or permanent, you must be working a minimum 20 hours per week. You may also work for more than one ACT employer or be self-employed on an ABN. If you are employed by a NSW employer in the ‘ACT Region’, you must demonstrate that your work activity is located in the ACT.
          
          `,
          `If you hold, or have previously held a student/temporary graduate visa within the last two years:
          
          `,
          `You must be resident in Canberra for at least 12 months at time of invitation.
          `,
          `If you express your interest after 1 July 2019, the minimum ACT residence criteria for student/temporary graduate visa holders will increase to two years
          
          
          `,
          `You are not eligible for ACT 190 nomination if you or any dependents are living or working in another Australian state or territory.
          
          
          `,
          `To apply, you must formally express an interest in applying for ACT 190 nomination by completing a score-based Canberra Matrix where you are allocated points against demonstrated economic contribution or benefit and/or a genuine commitment to be part of the ACT community.
          `,
          `Different criteria may apply to ACT 190 Streamlined PhD nomination pathway.
          
          
          
          
          `,
          `Service fee: A$300 (if you are invited to apply)
          `,
        ],
        TASParagraph1: [
          `
         `,
          `Nomination Criteria:
`,
          `Available to Tasmanian international graduates who enrolled in a Tasmanian tertiary institution prior to 31 July 2017, have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
`,
          `or
`,
          `The applicant must have been working in Tasmania for six months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `Applicants who enrolled in a Tasmanian tertiary institution after 31 July 2017 must meet the Australian study requirement through study in Tasmania. So they must complete a two year study in Tasmania and Have lived in the state during your period of study. The applicant and their dependants must be in Tasmania at time of application.
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
        `,
          `  Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for six months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan.
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    telecommunicationEngineer: {
      managerEngineer: {
        title: `Telecommunications Engineer(ANZSCO 263311) PR visa for immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/telecommunications-engineer.jpg",
        personnelTitle: "ANZSCO 263311 – Telecommunications Engineer.",
        personnelDetails: ` Telecommunication Engineer designs   and   develops   telecommunications   systems, devices   and   products. Telecommunication   Engineer   professionals   perform   regular monetary and development of telecommunication devices and networks.`,
        skillText: "Skill Level : 1",
        averageTitle: "Telecommunication Engineer’s average salary and Income:",
        averageDetails: `The average salary for a Telecommunications Engineer is $ 118,652 for male employees and $ 112,077 for female employees per year. The average age for Male is 43.5 and for femalesis 43.3`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Telecommunication Engineer",
        smallTitle1:
          "UNIT GROUP 2633:Telecommunications Engineering Professionals.",
        smallTitle1Details: (
          <div>
            Telecommunication Engineer designs and develops telecommunications
            systems, devices and products. Telecommunication Engineer
            professionals design, construct, install, serve and support
            telecommunication systems, equipment and facilities.
          </div>
        ),
        smallTitle2: "TelecommunicationEngineer’s Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of Occupations
            in this unit category need a level of expertise equivalent to a
            bachelor's degree or above. Relevant experience or on-the-job
            training may be required in addition to the formal qualification
            (ANZSCO Skill Level 1).
          </div>
        ),

        tasks: [
          `Telecommunication engineer professionals plan, design, develop, and maintain telecommunication devices and networks like radio, microwave, satellite, digital data systems, etc.`,
          `Telecommunication engineers perform market research for new production and service.`,
          `Telecommunication engineers professional sstay within the boundaries of laws, policies, responsibilities and procedures as a telecommunication engineer.`,
          `Telecommunication engineers select and develop new telecommunication sites by locating sites, filing them and approving them.`,
          `Telecommunication engineers are responsible for finding the best way to manage telecommunication hardware and software for desired requirements.`,
          `Telecommunication engineer professionals are the ones who determine the elements of the hardware like circuits, transformers, transmission lines. `,
          `Telecommunication engineers study the problems in the present day and design hardware or software to eliminate the problemin future.`,
          `Telecommunication engineers research communication issues and help improve thecommunication sector.`,
          `Telecommunication engineers are responsible for preparing and presentingthe specification and use of telecommunication equipment.`,
          `Telecommunication engineers are responsible for tracing the telecommunicating devices/systems performance and maintainingit if required.  `,
        ],
        specialization: `specializations: Telecommunications engineer `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `A mandatory licensing or registration requirement
              `,
              `Financial capacity
              
              `,
              `Applicants living outside Australia:
              `,
              `one year of skilled work experience in the past 2 years or alternatively have Australian qualifications.`,
            ],
            tick1: true,
            NTParagraphs2: [
              `A mandatory licensing or registration requirement
              `,
              `Financial capacity
              
              `,
              `Applicants living outside Australia:
              `,
              `one year of skilled work experience in the past 2 years or alternatively have Australian qualifications.
              
              `,
              `Postcode: Entire territory (including Darwin, Palmerston, Alice Springs, Katherine and Nhulunbuy)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
         `,
          ` one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)       
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)        
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: true, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
           `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
           
           `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
           
           `,
              `Applicants must have five years experience post qualification in their nominated occupation and a job offer for a full time position in their nominated occupation. Queensland is seeking specific ICT skills in relation to cyber security, data scientist, data and business analytics and ICT development and architecture. (The 2017-18 QSOL will also place a specific Queensland ceiling of 200 on nominations for ICT occupations across onshore, alumni and offshore programs).
           
           `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: false,
            QLD2Tick: false,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
           `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
           
           `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
           
          `,
              ` Applicants must have five years experience post qualification in their nominated occupation and a job offer for a full time position in their nominated occupation. Queensland is seeking specific ICT skills in relation to cyber security, data scientist, data and business analytics and ICT development and architecture. (The 2017-18 QSOL will also place a specific Queensland ceiling of 200 on nominations for ICT occupations across onshore, alumni and offshore programs).
           
          `,
              ` Sponsorship Fee: $ 200
           
          `,
              ` Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone)
          `,
            ],
          },

          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
           `,
              `Completed within the last two years
           
           `,
              `Have a positive decision on thesis
           
           `,
              `Sufficient funds
           
           `,
              `Sponsorship Fee: $ 200
         `,
            ],
            QLD1Tick: false,
            QLD2Tick: "",

            QLDParagraph2: [
              `
             `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
         `,
          ` Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
     
        `,
        ],
        TASParagraph2: [
          `
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
         `,
          ` or
          
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          
         `,
          ` For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          `,
          `or
          
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan
          and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill
          
         `,
          ` Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    civilDraftsperson: {
      managerEngineer: {
        title: `Civil Engineering Draftsperson(ANZSCO 312211)PR Visa for Immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/civil-draftsperson.jpg",
        personnelTitle: "ANZSCO 312211–Civil Engineering Draftsperson.",
        personnelDetails: ` In   the   assistance   of   civil   engineering   professionals,   Civil   Engineering   Draftsperson prepares precise drawings and blueprints for civil engineering projects. Civil Engineering draftspersons assist in civil engineering research and design.It is possible that registration or licensing will be required.`,

        skillText: "Skill Level : 2",
        averageTitle:
          "Civil  Engineering  Draftsperson’s average salary  and Income",
        averageDetails: `A Civil Engineering Draftsperson’s average salary in Australia is $ 136,816 for male employees and $ 324,499 for female employees per year. Average Age: Males: 36.7 Females: 31.0 Persons: 35.9.`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Civil Engineering Draftsperson",
        smallTitle1:
          "UNIT GROUP 3122:  Civil Engineering Draftspersons and Technicians.",
        smallTitle1Details: (
          <div>
            Civil engineering draftsperson and technicians help and assist civil
            engineers in analyzing, designing, developing, and operating
            engineering projects. Civil engineering draftspersons and
            technicians prepare a detailed plan, support engineers in the field
            of work. Civil Engineering draftspersons and technicians assist in
            civil engineering research, design and construction.
          </div>
        ),
        smallTitle2:
          "Indicative Skill and Expertise of Civil Engineering Draftsperson:",
        smallTitle2Details: (
          <div>
            Most occupations in this unit group have a skill level equivalent
            toAQF Associate Degree, Advanced Diploma or Diploma (ANZSCO Skill
            Level2).At least three years of relevant experience may substitute
            for the formal qualifications.In some instances, relevant experience
            and on-the-job training may be required in addition to the formal
            qualification.It is possible that registration or licensing will be
            required.
          </div>
        ),

        tasks: [
          `Civil  Engineering  draftsperson interpret  work  assignment  instructions, applies appropriate procedures and selects equipment`,
          `Civil  Engineering draftsperson collecting  and  analysing  data,  and  carrying  out computations`,
          `Civil Engineering draftsperson estimates material costs and ensures finished works are within specifications, regulations and contract provisions.`,
          `Civil Engineering draftsperson are responsible to conductfield and laboratory tests of construction materials and soils and collecting data for traffic surveys.`,
          `Civil  Engineering   draftsperson are   responsible   for performing   and   directing fieldwork and laboratory testing.`,
          `Civil  Engineering  draftsperson inspects civil  engineering  works in organising  and supervising maintenance.`,
        ],
        specialization: `specializations: Civil Engineering Draftsperson `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to all applicants including South Australian international graduates
          `,
          `Special Conditions (from 9/08/2017 ):
          `,
          `Available to international graduates in South Australia, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have 85 points or higher (including state nomination points).
          
          `,
          `Special Conditions Apply
          
          `,
          `Competent English (e.g. IELTS 6.0 in each band); Offshore applicants Provisional 489 visa only
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
         `,
          ` Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to all applicants including South Australian international graduates
          `,
          `Special Conditions (from 9/08/2017 ):
          `,
          `Available to international graduates in South Australia, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have 85 points or higher (including state nomination points).
          
         `,
          ` Special Conditions Apply
          
          `,
          `Competent English (e.g. IELTS 6.0 in each band); Offshore applicants Provisional 489 visa only
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
          
          `,
          `Eligible Postcodes: Entire territory (including Adelaide, Mount Gambier, Whyalla, Gawler, Port Pirie, Bridgewater, Port Augusta, Murray Bridge, Port Lincoln, Mount Barker, Victor Harbor and Aldinga Beach)        
        `,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `Only work experience in the civil or mechanical engineering disciplines is eligible
              `,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              `,
              `Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              `,
              `a current job offer within a regional area of Victoria.
              `,
              `Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)
              `,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
              `,
              `Completed within the last two years
              `,
              `Have a positive decision on thesis
              `,
              `Sufficient funds
              `,
              `Sponsorship Fee: $ 200
              `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
         `,
          ` Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
        `,
          `  Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination`,
        ],
        TASParagraph1: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
`,
          `or
`,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `Future Changes:
`,
          `Two year study requirement (from 1 January 2018)
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
        `,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For applicants from outside Australia
(Without Job offer - TSOL):
`,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
`,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
`,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
`,
          `skills and recent experience relevant to the researched employment opportunities.
`,
          `access to sufficient financial assets
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    electricalDraftsperson: {
      managerEngineer: {
        title: `Electrical Engineer Draftsperson(ANZSCO  312311) PR visa for immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/electrical-draftsperson.jpg",
        personnelTitle: "ANZSCO  312311–Electrical Engineer Draftsperson.",
        personnelDetails: ` Electrical engineer draftsperson helps electrical engineers in the field. Draftsperson assist electrical engineers in research, production, assembling, operating and design making activities. Draftspersons are responsible to coordinate with electrical engineers in order to retain the equipment’s and providing right data and equipment’s.`,

        skillText: "Skill Level : 2",
        averageTitle:
          "Electrical Engineer Draftsperson’saverage salary and Income:",
        averageDetails: `A Civil Engineering Draftsperson’saverage salary in Australia is $ 136,816for male employees and $ 324,499for female employees per year. Average Age: Males: 36.7 Females: 31.0 Persons: 35.9.`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Electrical Engineer Draftsperson",
        smallTitle1: "UNIT GROUP 3123: Electrical Engineer Draftsperson.",
        smallTitle1Details: (
          <div>
            Electrical Engineer Draftsperson assist electrical engineers in
            analyzing, designing, developing, building, operating and
            maintenance. Electrical engineer draftspersonsare responsible for
            performing calculations that are required in the field.
          </div>
        ),
        smallTitle2:
          "Electrical Engineer Draftsperson’s Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of Occupations
            in this unit category need experience in the field for three years.
            Relevant on-the-job training may be required in addition to the
            formal qualification (ANZSCO Skill Level 2).
          </div>
        ),

        tasks: [
          `
               Electrical engineer draftsperson prepares drawings and plans of electronics installation and circuitry.`,
          `Electrical engineers are responsible to assist electrical engineers and electrical technicians to plan and perform installation and circuit mapping.
`,
          `Electrical engineer draftsperson collect data, performs test and calculations in order to show the results through charts and tabulation. `,
          `Draftspersons are responsible to estimate the quantity and cost of materials required.`,
          `Electrical engineer draftsperson performs specification and regulation cheque on finished products. `,
          `Regulation and safety requirement are constantly monitored in every step till finalization by the electric engineer draftsperson, `,
          `Electrical engineer draftsperson assists engineers with research and experimental activities.`,
        ],
        specialization: `specializations: Electrical engineer draftsperson `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)`,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
             `,
              ` Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)`,
            ],
            tick1: true,
            VICParagraphs2: [
              `IELTS 7.0 in each band (Ambiguity: Minimum 6.0 in each band for PhD graduates)
              Work experience: Five years (No work exprience is required for PhD graduates who have completed a doctorate within the past five years)
              
              a current job offer within a regional area of Victoria.
              
              Postcodes: 3211 to 3334, 3340 to 3424, 3430 to 3649, 3658 to 3749, 3753, 3756, 3758, 3762, 3764, 3778 to 3781, 3783, 3797, 3799, 3810 to 3909, 3921 to 3925, 3945 to 3974, 3979, 3981 to 3996 (Anywhere except the Melbourne metropolitan area; including Geelong, Ballarat, Bendigo, Shepparton, Mildura and Warrnambool)`,
            ],
            tick2: true,
          },

          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: true, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: true, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: true, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `Two years work experience post qualification (PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation can have their studies counted towards BSMQ's work experience requirements)
  
              `,
              `Sufficient funds
              
             `,
              ` Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: true,

            QLDParagraph2: [
              `have two years work experience;
  
              `,
              `- PhD graduates who have completed a doctorate from an Australian or international education institution in a specialised field relating to their nominated occupation are able to have their studies counted towards BSMQ's work experience requirements.
              
              `,
              `Sufficient funds
              
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Hold valid Queensland and Australian licenses (if applicable)
              
              `,
              `Sponsorship Fee: $ 200
              
              `,
              `Interstate applicants must meet the Working in Queensland or Alumni pathway criteria. So they should move to Queensland and meet any working requirements before submitting an Expression of Interest to BSMQ.
              
              `,
              `Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275 , 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899. (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone),
            `,
            ],
          },
          {
            QLDParagraph1: [
              `For applicants currently working in Queensland:
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              `,
              `Sponsorship Fee: $ 200`,
            ],
            QLD1Tick: true,
            QLD2Tick: true,
            QLDParagraph2: [
              `For applicants currently working in Queensland:
  
              `,
              `Currently working in Queensland in the nominated or closely related occupation for the previous 6 months at time of lodging the Expression of Interest; and
              
              `,
              `Have an offer to continue your employment and the same employer for 12 months in your nominated or closely related occupation
              
              `,
              `Engineers – applicants must have registration with the Board of Engineers Queensland (BPEQ) unless working under the supervision of a BPEQ registered engineer.
              
              `,
              `Sponsorship Fee: $ 200
              
              
              `,
              `Eligible Postcodes: 4124 to 4125, 4133, 4211, 4270 to 4272, 4275, 4280, 4285, 4287, 4307 to 4499, 4515, 4517 to 4519, 4522 to 4899 (Anywhere except the greater Brisbane area and the Gold Coast; including Sunshine Coast, Townsville, Cairns, Toowoomba, Rockhampton, Mackay, Bundaberg, Hervey Bay, Pacific Pines, Carrara, Nerang and Gladstone) `,
            ],
          },
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
  
              `,
              `Completed within the last two years
              
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Open
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking
          and 7 overall; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
          `,
          `Effective 23 August 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
         `,
          ` Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill`,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For applicants from outside Australia (Without Job offer - TSOL):
`,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
`,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
`,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
`,
          `skills and recent experience relevant to the researched employment opportunities.
`,
          `access to sufficient financial assets
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    electricalTechnician: {
      managerEngineer: {
        title: `Electrical Engineer Technician (ANZSCO  312312) PR visa for immigration to Australia.`,
        titleDescription: "",
        image: "/images/ANZSCO/electrical-technician.jpg",
        personnelTitle: "ANZSCO  312312–Electrical Engineer Technician",
        personnelDetails: ` Electrical engineer Technician provides assistance to electrical engineers in the field. Technicians assistant electrical engineers in implementation of plan and design. Electrical engineer technician provides technical support to electrical engineers.`,
        skillText: "Skill Level : 2",
        averageTitle:
          "Electrical Engineer technician’s average salary and Income:",
        averageDetails: `The average salary for an Electrical Engineering TechnicianisAU$65, 000forboth male and female.`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Electrical Engineer Technician",
        smallTitle1: "UNIT GROUP 3123:Electrical Engineer Technician.",
        smallTitle1Details: (
          <div>
            Electrical Engineer Technicianassist electrical engineers in
            implementation of plans, designs and regulations. Technicians are
            responsible to perform test of electric system. They prepare charts
            and tabulations in order to estimate costing.
          </div>
        ),
        smallTitle2:
          "Electrical Engineer Technician’s Skill and Expertise Level",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of Occupations
            in this unit category need experience in the field for three
            years.Relevant on-the-job training may be required in addition to
            the formal qualification (ANZSCO Skill Level 2).
          </div>
        ),

        tasks: [
          `
               Electrical engineer technicians prepare drawings and plans of electronics installation and circuitry.`,
          `Electrical engineer technician irresponsible to assist electrical engineers and electrical technicians to plan and perform installation and circuit mapping.`,
          `Electrical engineer technician collect data, performs test and calculations in order to show the results through charts and tabulation. `,
          `Technicians are responsible to estimate the quantity and cost of materials required.`,
          `Electrical engineer technician performs specification and regulation cheque on finished products. 
`,
          `Regulation and safety requirement are constantly monitored in every step till finalization by the electric engineer technician.`,
          `Electrical engineer technician assists engineers with research and experimental activities`,
        ],
        specialization: `specializations: Electrical engineer technician `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)`,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For PhD Graduates in Queensland:
  
              `,
              `Completed within the last two years
              
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
         `,
          ` Service fee: A$300
          
          `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
         `,
          ` Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
          `,
          `or
          
          `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
          `,
          `or
          
          `,
          `For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
          
          `,
          `Future Changes:
          `,
          `Two year study requirement (from 1 January 2018)
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
          `,
          `Sponsorship Fee: Nill`,
        ],
        TASParagraph2: [
          `
          Nomination Criteria:
`,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
`,
          `or
`,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
`,
          `or
`,
          `For applicants from outside Australia (Without Job offer - TSOL):
`,
          `The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months.
`,
          `have at least ‘Proficient English' (ie IELTS 7 in all bands) or hold a passport of the UK, Ireland, the USA, Canada or New Zealand
`,
          `researched the Tasmanian labour market and provide evidence that there are sufficient employment opportunities
`,
          `skills and recent experience relevant to the researched employment opportunities.
`,
          `access to sufficient financial assets
`,
          `or
`,
          `For Overseas Applicants:
`,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
`,
          `or
`,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
`,
          `or
`,
          `Available to small business owners with past business experience and management expertise who have a business plan
`,
          `and
`,
          `sufficient funds.
`,
          `Processing Time: 20 working days
`,
          `Sponsorship Fee: Nill
`,
          `Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
    telfieldEngineer: {
      managerEngineer: {
        title: `Telecommunication Field Engineer (ANZSCO 313212) PR visa for immigration to Australia.`,
        titleDescription:
          "Telecommunication field engineers plan, designs, coordinates and evaluates telecommunications networks and used hardware’s. Telecommunication field engineers provide information about the network or hardware and solve complications.",
        image: "/images/ANZSCO/telecommunication-field.png",
        personnelTitle: "ANZSCO 313212–Telecommunication Field Engineer.",
        personnelDetails: ` Electrical engineer Technician provides assistance to electrical engineers in the field. Technicians assistant electrical engineers in implementation of plan and design. Electrical engineer technician provides technical support to electrical engineers.`,
        skillText: "Skill Level : 2",
        averageTitle:
          "Telecommunication Field Engineer’s average salary and Income:",
        averageDetails: `The average salary for a Telecommunications Field Engineer is $74,880 for male and $58,115 for female per. The average age of male engineers is 36.4 and female engineers is 38.9.`,
        jobDescription:
          "Job description, Education, Duties, Roles, and Responsibilities of Telecommunication Field Engineer",
        smallTitle1: "UNIT GROUP 3132:Telecommunication Field Engineer.",
        smallTitle1Details: (
          <div>
            Telecommunication field engineers perform complex telecommunication
            networking. Telecommunication field engineers solve complex problems
            and provide users with proper instruction and features of the
            network system.
          </div>
        ),
        smallTitle2:
          "Telecommunication Field Engineer’s Skill and Expertise Level:",
        smallTitle2Details: (
          <div>
            Talking About Australia and New Zealand, the majority of Occupations
            in this unit category need diploma, advanced diploma or AQF
            associated degree and three years of experience in the field. On the
            job training may be needed for the qualification.
          </div>
        ),

        tasks: [
          `
               Telecommunication field engineers are responsible for installation, maintenance and detailed study of telecommunication systems.`,
          `Telecommunication field engineers are responsible to integrate and coordinate telecommunication technology with the computer systems.`,
          `Telecommunication field engineers keep detailed record about the network system.`,
          `Telecommunication field engineers provides advice and details based on the evaluation.`,
          `Telecommunication field engineers are responsible to create aninterface through which users can interact. `,
          `Telecommunication field engineers should be able to create good relationship with resource providers.`,
          `Telecommunication field engineers are responsible to provide ideas and solve problems in the ongoing telecommunication activity. 
`,
          `Telecommunication field engineers are responsible for tracing the telecommunicating devices/system's performance and maintaining it if required.`,
        ],
        specialization: `specializations: Telecommunication Field Engineer `,
        specializationList: [
          "482 TSS Visa Regional Occupation List",
          "189 Skilled Independent and Family Sponsored 489 Occupations List and 485 Graduate Work Stream",
          "190 State/Territory Sponsored",
          "186 ENS Visa Occupations List",
          "491 – Skilled Work Regional (provisional) visa (subclass 491) Occupation List",
          "494 – Skilled Employer Sponsored Regional (provisional) (subclass 494) – Employer sponsored stream",
        ],
      },
      sponsorShipData: {
        NTHeading: true,
        NTTick1: false,
        NTTick2: false,
        NTParagraphs: [
          {
            NTParagraphs1: [
              `For applicants who are able to provide evidence of positive 
              employment prospects`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who are able to provide evidence of positive employment 
              prospects employment prospects`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [`For Graduates in the NT`],
            tick1: true,
            NTParagraphs2: [`For Graduates in the NT`],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who have strong family connections`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who have strong family connections`,
            ],
            tick2: true,
          },
          {
            NTParagraphs1: [
              `For applicants who meet the NT residency and work 
              requirements (including 485, 417, 462 and 457 visas Holders)	`,
            ],
            tick1: true,
            NTParagraphs2: [
              `For applicants who meet the NT residency and work requirements 
              (including 485, 417, 462 and 457 visas Holders)`,
            ],
            tick2: true,
          },
        ],
        SATick1: false,
        SATick2: false,
        SAParagraphs1: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)
        `,
        ],
        SAParagraphsTick1: true,
        SAParagraphs2: [
          `Available to South Australian international graduates, OR applicants have worked in a skilled occupation in South Australia, OR have an immediate family member permanently residing in South Australia OR have ninety points or higher (including state nomination points).
          `,
          `one year of skilled work experience in the past 3 years. See Work experience waiver
          
          `,
          `45 years or less
          
          `,
          `Financial capacity
          
          `,
          `Competent Plus English (e.g. IELTS 6.5 in each band) (or Proficient overall)
          
          `,
          `See Exemption considerations for International graduates of South Australia
          
          `,
          `Processing Times: 6 - 7 weeks (Current at: 13/7/2016)`,
        ],
        SAParagraphsTick2: true,

        WAParagraph: [],

        VICHeading: false,
        VICParagraphs: [
          {
            VICParagraphs1: [
              `For Graduates in Victoria:
              `,
              `completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick1: true,
            VICParagraphs2: [
              `For Graduates in Victoria:
             `,
              ` completed a PhD in Victoria within the past five years.
              
              `,
              `IELTS: Minimum 6.0 in each band`,
            ],
            tick2: true,
          },
        ],
        NSWHeading: true,
        NSWParagraph2: [
          { tick: false, location: "Far South Coast" },
          { tick: false, location: "Mid North Coast" },
          { tick: false, location: "Murray" },
          { tick: false, location: "Northern Inland" },

          { tick: false, location: "Orana" },
          { tick: false, location: "Riverina" },
          { tick: false, location: "Southern Inland" },
        ],
        QLDHeading: false,

        QLDParagraphs: [
          {
            QLDParagraph1: [
              `For Graduates in Queensland (Master):
              `,
              `Completed Masters Degree or higher within the last two years
              
             `,
              ` Have a job offer in your skilled occupation (or a closely related occupation).
              
              `,
              `Sufficient funds
              
              `,
              `Sponsorship Fee: $ 200
              
              `,
              `For PhD Graduates in Queensland:
              
              `,
              `Completed within the last two years
              
              `,
              `Have a positive decision on thesis
              
              `,
              `Sufficient funds
              
              `,
              `Sponsorship Fee: $ 200
            `,
            ],
            QLD1Tick: true,
            QLD2Tick: "",

            QLDParagraph2: [
              `
                `,
            ],
          },
        ],
        ACTTick1: true,
        ACTTick2: false,
        ACTParagraph1: [
          `Closed
          `,
          `Applicants working in Canberra are eligible to apply. Overseas applicants with an ACT job offer, close family member living in Canberra OR they have completed a PhD at an ACT university may be eligible to apply.
          
          `,
          `IELTS result with a minimum score of 6 (L, R, W), 7 in speaking and 7 overal; or OET result with a minimum grade B in all sections; or TOEFL iBT with a minimum score (L:12 R:13 W:21 S:23 overallL93); or PTE Academic with a minimum score of 50 (L, R, W), 65 in speaking and 65 overal; (For overseas residents)
          
          `,
          `Passport Holders of the following countries are exempt from submitting IELTS or OET: UK; Canada; New Zealand; US; or Ireland
          
          `,
          `Service fee: A$300
          
          
        `,
          `Effective 23 Agust 2017, applications for ACT nomination from overseas residents will not be accepted. The program reopens in July 2018. This action does not affect Canberra based applicants or overseas applicants with close ties in Canberra (either family or genuine job offer) in Canberra; OR they have completed a PhD at an ACT university, they are still eligible to apply for ACT nomination.`,
        ],
        TASParagraph1: [
          `
         `,
          ` Nomination Criteria:
         `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO); The applicant must currently be in Tasmania;
        `,
          ` or
         
         `,
          `The applicant must have been working in Tasmania for three months immediately prior to the application for state nomination in an occupation in-line with applicant's skills assessment (for a minimum of 35 hours per week); A genuine need for the position should be satisfied.
         `,
          `or
         
         `,
          `For Overseas Applicants:
         
         `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the position should be met.
         
         `,
          `Future Changes:
         `,
          `Two year study requirement (from 1 January 2018)
         `,
          `and
         `,
          `sufficient funds.
         `,
          `Processing Time: 20 working days
         `,
          `Sponsorship Fee: Nill`,
        ],
        TASParagraph2: [
          `
          `,
          `Nomination Criteria:
          `,
          `Available to Tasmanian international graduates who have been living in the state for at least 12 months and have studied for a minimum of one academic year (40 weeks) in Tasmania; The course undertaken must be full time and be either a bachelor or any higher degree, a diploma, an advanced diploma, or a trade qualification (minimum Cert III level for a skilled occupation in Major Group 3 in ANZSCO);
          `,
          `or
          
          `,
          `have been working in Tasmania for three months immediately prior to the application in any fields (for a minimum of 35 hours per week); Evidence proving no local person has been able to fill the position Should be provided.
          `,
          `or
          
         `,
          ` For Overseas Applicants:
          
          `,
          `have formal job offer for a job that is based in Tasmania and in-line with applicant's skills assessment; The applicant and his/her dependants have not lived in another Australian state or territory within the last 12 months. A genuine need for the nominated position must be met.
          `,
          `or
          
          `,
          `have an immediate family member (parent, child, sibling, aunt, uncle, first cousin, or grandparent) permanently residing in Tasmania;
          `,
          `or
          
          `,
          `Available to small business owners with past business experience and management expertise who have a business plan.
          `,
          `and
          `,
          `sufficient funds.
          `,
          `Processing Time: 20 working days
         `,
          ` Sponsorship Fee: Nill
          
          Eligible Postcodes: Entire territory (including Hobart, Launceston, Devonpor, Burnie, Kingston, Ulverstone, Wynyard, George Town and Sorell)`,
        ],
      },
    },
  };

  return (
    <>
      {field === "engineering-manager-anzsco-133211" && (
       
        <Head>
      <title>Engineering Manager | Unit Group 1332 | ANZSCO 133211</title>
      <meta name='description' content='Engineering Manager | Unit Group 1332 | ANZSCO 133211'/>
      <link rel="canonical" href={canonicalUrl} />

    </Head>
      )}

      {field === "chemical-engineer-anzsco-233111" && (
         <Head>
         <title>Chemical Engineer | Unit Group 2331 | ANZSCO 233111</title>
         <meta name='description' content='Chemical Engineer | Unit Group 2331 | ANZSCO 233111'/>
         <link rel="canonical" href={canonicalUrl} />

       </Head>
        
      )}

      {field === "materials-engineer-anzsco-233112" && (
       
        <Head>
        <title>Material Engineer | Unit Group 2331 | ANZSCO 233112 | CDRXperets</title>
        <meta name='descripion' content='Material Engineer | Unit Group 2331 | ANZSCO 233112 | CDRXperets'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      )}

      {field === "civil-engineer-anzsco-233211" && (
        <Head>
        <title>Civil Engineer | Unit Group 2332 | ANZSCO 233211 | CDR For Engineer</title>
        <meta name='description' content='Civil Engineer | Unit Group 2332 | ANZSCO 233211 | CDR For Engineer'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      
      )}

      {field === "geo-technical-engineer-anzsco-233212" && (
       
        <Head>
        <title>Geotechnical Engineer | Unit Group 2332 | ANZSCO 233212</title>
        <meta name='description' content='Geotechnical Engineer | Unit Group 2332 | ANZSCO 233212'/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>
      )}

      {field === "structural-engineer-anzsco-233214" && (

<Head>
<title>Structural Engineer | Unit Group 2332 | Anzsco 233214 | CDR For Engineer</title>
<meta name='description' content='Structural Engineer | Unit Group 2332 | Anzsco 233214 | CDR For Engineer'/>
<link rel="canonical" href={canonicalUrl} />

</Head>

      )}

      {field === "transport-engineer-anzsco-233215" && (
        <Head>
        <title>Transport Engineer | Unit Group 2332 | Anzsco 233215</title>
        <meta name='description' content='Transport Engineer | Unit Group 2332 | Anzsco 233215'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
        
      )}

      {field === "electrical-engineer-anzsco-233311" && (
         <Head>
         <title>Electrical Engineer | Unit Group 2333 | Anzsco 233311</title>
         <meta name='description' content='Electrical Engineer | Unit Group 2333 | Anzsco 233311'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>

      )}

      {field === "electronics-engineer-anzsco-233411" && (
        <Head>
        <title>Electronics Engineer | Unit Group 2334 | Anzsco 233411</title>
        <meta name='description' content='Electronics Engineer | Unit Group 2334 | Anzsco 233411'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}

      {field === "industrial-engineer-anzsco-233511" && (
         <Head>
         <title>Industrial Engineer | Unit Group 2335 | ANZSCO 233511</title>
         <meta name='description' content='Industrial Engineer | Unit Group 2335 | ANZSCO 233511'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
       
      )}

      {field === "mechanical-engineer-anzsco-233512" && (
         <Head>
         <title>Mechanical Engineer | Unit Group 2335 | ANZSCO 233512</title>
         <meta name='description' content='Mechanical Engineer | Unit Group 2335 | ANZSCO 233512'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
      
      )}

      {field === "production-or-plant-engineer-anzsco-233513" && (
        <Head>
        <title>Production or Plant Engineer | Unit Group 2325 | ANZSCO 233513</title>
        <meta name='description' content='Production or Plant Engineer | Unit Group 2325 | ANZSCO 233513'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}

      {field === "mining-engineer-anzsco-233611" && (
        <Head>
        <title>Mining Engineer | Unit Group 2336 | ANZSCO 233611</title>
        <meta name='description' content='Mining Engineer | Unit Group 2336 | ANZSCO 233611'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
      
      )}

      {field === "petroleum-engineer-anzsco-233612" && (
         <Head>
         <title>Petroleum Engineer | Unit Group 2336 | ANZSCO 233612</title>
         <meta name='description' content='Petroleum Engineer | Unit Group 2336 | ANZSCO 233612'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
       
      )}

      {field === "aeronautical-engineer-anzsco-233911" && (
           <Head>
           <title>Aernautical Engineer | Unit Group 2339 | ANZSCO 233911</title>
           <meta name='description' content='Aernautical Engineer | Unit Group 2339 | ANZSCO 233911'/>
           <link rel="canonical" href={canonicalUrl} />

           </Head>

      )}

      {field === "agricultural-engineer-anzsco-233912" && (
         <Head>
         <title>Agricultural Engineer | Unit Group 2339 | ANZSCO 233912</title>
         <meta name='description' content='Agricultural Engineer | Unit Group 2339 | ANZSCO 233912'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
        
      )}

      {field === "biomedical-engineer-anzsco-233913" && (
        <Head>
        <title>Biomedical Engineer | Unit Group 2339 | ANZSCO 233913</title>
        <meta name='description' content='Biomedical Engineer | Unit Group 2339 | ANZSCO 233913'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}

      {field === "engineering-technologist-anzsco-233914" && (
        <Head>
        <title>Engineering Technologist | Unit Group 2339 | ANZSCO 233914</title>
        <meta name='description' content='Engineering Technologist | Unit Group 2339 | ANZSCO 233914'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}

      {field === "environmental-engineer-anzsco-233915" && (
        <Head>
        <title>Environmental Engineer | Unit Group 2339 | ANZSCO 233915</title>
        <meta name='description' content='Environmental Engineer | Unit Group 2339 | ANZSCO 233915'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}

      {field === "engineering-professionals-nec-anzsco-233999" && (
       
        <Head>
        <title>Engineering Professionals | Unit Group 2339 | ANZSCO 233999</title>
        <meta name='description' content='Engineering Professionals | Unit Group 2339 | ANZSCO 233999'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
      )}
      {field === "computer-networks-and-system-engineers-anzsco-263111" && (
         <Head>
         <title>Computer Ntwork and System Engineer | Unit Group 2631 | ANZSCO 263111</title>
         <meta name='description' content='Computer Ntwork and System Engineer | Unit Group 2631 | ANZSCO 263111'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
      
      )}

      {field === "telecommunication-engineers-anzsco-263311" && (
         <Head>
         <title>Telecommunications Engineer | Unit Group 2633 | ANZSCO 263311</title>
         <meta name='description' content='Telecommunications Engineer | Unit Group 2633 | ANZSCO 263311'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
      )}

      {field === " telecommunication-network-engineers-anzsco-263312" && (
        <Head>
        <title>Telecommunications Network Engineer | Unit Group 2633 | ANZSCO 263312</title>
        <meta name='description' content='Telecommunications Network Engineer | Unit Group 2633 | ANZSCO 263312'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
        
      )}

      {field === "civil-engineering-technician-anzsco-312212" && (
        <Head>
        <title>Civil Engineering Technician | Unit Group 3122 | ANZSCO 312212</title>
        <meta name='description' content='Civil Engineering Technician | Unit Group 3122 | ANZSCO 312212'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
        
      )}

      {field === "electrical-engineering-draftsperson-anzsco-312311" && (
         <Head>
         <title>Electrical Engineer Draftsperson | Unit Group 3123 | ANZSCO 312311</title>
         <meta name='description' content='Electrical Engineer Draftsperson | Unit Group 3123 | ANZSCO 312311'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
       
      )}

      {field === "electrical-engineering-technician-anzsco-312312" && (
      
        <Head>
         <title>Electrical Engineering Technician | Unit Group 3123 | ANZSCO 312312</title>
         <meta name='description' content='Electrical Engineering Technician | Unit Group 3123 | ANZSCO 312312'/>
         <link rel="canonical" href={canonicalUrl} />

         </Head>
      )}

      {field === "civil-engineering-draftsperson-anzsco-312211" && (
        <Head>
        <title>Civil Engineering Draftsperson | Unit Group 3122 | ANZSCO 312211</title>
        <meta name='description' content='Civil Engineering Draftsperson | Unit Group 3122 | ANZSCO 312211'/>
        <link rel="canonical" href={canonicalUrl} />

        </Head>
       
      )}
      <Hero
        title="Having Trouble Writing your CDR Report?"
        details="Get Approval from EA for your High-Quality CDR Report. Take 
help From a Licensed professional CDR Writers for your CDR  
report writing."
      />

      {field === "engineering-manager-anzsco-133211" && (
        <>
          <ManagerEngineer
            title={allData.engineeringManager.managerEngineer.title}
            titleDescription={
              allData.engineeringManager.managerEngineer.titleDescription
            }
            image={allData.engineeringManager.managerEngineer.image}
            s
            personnelTitle={
              allData.engineeringManager.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.engineeringManager.managerEngineer.personnelDetails
            }
            skillText={allData.engineeringManager.managerEngineer.skillText}
            averageTitle={
              allData.engineeringManager.managerEngineer.averageTitle
            }
            averageDetails={
              allData.engineeringManager.managerEngineer.averageDetails
            }
            jobDescription={
              allData.engineeringManager.managerEngineer.jobDescription
            }
            smallTitle1={allData.engineeringManager.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.engineeringManager.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.engineeringManager.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.engineeringManager.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.engineeringManager.managerEngineer.smallTitle3}
            tasks={allData.engineeringManager.managerEngineer.tasks}
            specialization={
              allData.engineeringManager.managerEngineer.specialization
            }
            specializationList={
              allData.engineeringManager.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.engineeringManager.sponsorShipData.NTHeading}
            NTTick1={allData.engineeringManager.sponsorShipData.NTTick1}
            NTTick2={allData.engineeringManager.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.engineeringManager.sponsorShipData.NTParagraphs
            }
            SAParagraphs1={
              allData.engineeringManager.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.engineeringManager.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.engineeringManager.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.engineeringManager.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.engineeringManager.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.engineeringManager.sponsorShipData.VICParagraphs
            }
            WAParagraphs={
              allData.engineeringManager.sponsorShipData.WAParagraphs
            }
            NSWParagraph2={
              allData.engineeringManager.sponsorShipData.NSWParagraph2
            }
            NSWHeading={allData.engineeringManager.sponsorShipData.NSWHeading}
            QLDHeading={allData.engineeringManager.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.engineeringManager.sponsorShipData.QLDParagraphs
            }
            ACTParagraph1={
              allData.engineeringManager.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.engineeringManager.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.engineeringManager.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "chemical-engineer-anzsco-233111" && (
        <>
          <ManagerEngineer
            title={allData.chemicalEngineer.managerEngineer.title}
            titleDescription={
              allData.chemicalEngineer.managerEngineer.titleDescription
            }
            image={allData.chemicalEngineer.managerEngineer.image}
            personnelTitle={
              allData.chemicalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.chemicalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.chemicalEngineer.managerEngineer.skillText}
            averageTitle={allData.chemicalEngineer.managerEngineer.averageTitle}
            averageDetails={
              allData.chemicalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.chemicalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.chemicalEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.chemicalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.chemicalEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.chemicalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.chemicalEngineer.managerEngineer.smallTitle3}
            tasks={allData.chemicalEngineer.managerEngineer.tasks}
            specialization={
              allData.chemicalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.chemicalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.chemicalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.chemicalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.chemicalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={allData.chemicalEngineer.sponsorShipData.NTParagraphs}
            SATick1={allData.chemicalEngineer.sponsorShipData.SATick1}
            SATick2={allData.chemicalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.chemicalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.chemicalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.chemicalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.chemicalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.chemicalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.chemicalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.chemicalEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.chemicalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.chemicalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.chemicalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.chemicalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.chemicalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.chemicalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.chemicalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.chemicalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.chemicalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "materials-engineer-anzsco-233112" && (
        <>
          <ManagerEngineer
            title={allData.materialsEngineer.managerEngineer.title}
            titleDescription={
              allData.materialsEngineer.managerEngineer.titleDescription
            }
            image={allData.materialsEngineer.managerEngineer.image}
            personnelTitle={
              allData.materialsEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.materialsEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.materialsEngineer.managerEngineer.skillText}
            averageTitle={
              allData.materialsEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.materialsEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.materialsEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.materialsEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.materialsEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.materialsEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.materialsEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.materialsEngineer.managerEngineer.smallTitle3}
            tasks={allData.materialsEngineer.managerEngineer.tasks}
            specialization={
              allData.materialsEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.materialsEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.materialsEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.materialsEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.materialsEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.materialsEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.materialsEngineer.sponsorShipData.SATick1}
            SATick2={allData.materialsEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.materialsEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.materialsEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.materialsEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.materialsEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.materialsEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.materialsEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.materialsEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.materialsEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.materialsEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.materialsEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.materialsEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.materialsEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.materialsEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.materialsEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.materialsEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.materialsEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "civil-engineer-anzsco-233211" && (
        <>
          <ManagerEngineer
            title={allData.civilEngineer.managerEngineer.title}
            titleDescription={
              allData.civilEngineer.managerEngineer.titleDescription
            }
            image={allData.civilEngineer.managerEngineer.image}
            personnelTitle={
              allData.civilEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.civilEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.civilEngineer.managerEngineer.skillText}
            averageTitle={allData.civilEngineer.managerEngineer.averageTitle}
            averageDetails={
              allData.civilEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.civilEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.civilEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.civilEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.civilEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.civilEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.civilEngineer.managerEngineer.smallTitle3}
            tasks={allData.civilEngineer.managerEngineer.tasks}
            specialization={
              allData.civilEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.civilEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.civilEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.civilEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.civilEngineer.sponsorShipData.NTTick2}
            NTParagraphs={allData.civilEngineer.sponsorShipData.NTParagraphs}
            SATick1={allData.civilEngineer.sponsorShipData.SATick1}
            SATick2={allData.civilEngineer.sponsorShipData.SATick2}
            SAParagraphs1={allData.civilEngineer.sponsorShipData.SAParagraphs1}
            SAParagraphs2={allData.civilEngineer.sponsorShipData.SAParagraphs2}
            SAParagraphsTick1={
              allData.civilEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.civilEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.civilEngineer.sponsorShipData.VICHeading}
            VICParagraphs={allData.civilEngineer.sponsorShipData.VICParagraphs}
            WAParagraph={allData.civilEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.civilEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={allData.civilEngineer.sponsorShipData.NSWParagraph2}
            QLDHeading={allData.civilEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={allData.civilEngineer.sponsorShipData.QLDParagraphs}
            ACTTick1={allData.civilEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.civilEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={allData.civilEngineer.sponsorShipData.ACTParagraph1}
            TASParagraph1={allData.civilEngineer.sponsorShipData.TASParagraph1}
            TASParagraph2={allData.civilEngineer.sponsorShipData.TASParagraph2}
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "geo-technical-engineer-anzsco-233212" && (
        <>
          <ManagerEngineer
            title={allData.geotechnicalEngineer.managerEngineer.title}
            titleDescription={
              allData.geotechnicalEngineer.managerEngineer.titleDescription
            }
            image={allData.geotechnicalEngineer.managerEngineer.image}
            personnelTitle={
              allData.geotechnicalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.geotechnicalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.geotechnicalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.geotechnicalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.geotechnicalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.geotechnicalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.geotechnicalEngineer.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.geotechnicalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.geotechnicalEngineer.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.geotechnicalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.geotechnicalEngineer.managerEngineer.smallTitle3
            }
            tasks={allData.geotechnicalEngineer.managerEngineer.tasks}
            specialization={
              allData.geotechnicalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.geotechnicalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.geotechnicalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.geotechnicalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.geotechnicalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.geotechnicalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.geotechnicalEngineer.sponsorShipData.SATick1}
            SATick2={allData.geotechnicalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.geotechnicalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.geotechnicalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.geotechnicalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.geotechnicalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.geotechnicalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.geotechnicalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.geotechnicalEngineer.sponsorShipData.WAParagraph
            }
            NSWHeading={allData.geotechnicalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.geotechnicalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.geotechnicalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.geotechnicalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.geotechnicalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.geotechnicalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.geotechnicalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.geotechnicalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.geotechnicalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "structural-engineer-anzsco-233214" && (
        <>
          <ManagerEngineer
            title={allData.structuralEngineer.managerEngineer.title}
            titleDescription={
              allData.structuralEngineer.managerEngineer.titleDescription
            }
            image={allData.structuralEngineer.managerEngineer.image}
            personnelTitle={
              allData.structuralEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.structuralEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.structuralEngineer.managerEngineer.skillText}
            averageTitle={
              allData.structuralEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.structuralEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.structuralEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.structuralEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.structuralEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.structuralEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.structuralEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.structuralEngineer.managerEngineer.smallTitle3}
            tasks={allData.structuralEngineer.managerEngineer.tasks}
            specialization={
              allData.structuralEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.structuralEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.structuralEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.structuralEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.structuralEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.structuralEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.structuralEngineer.sponsorShipData.SATick1}
            SATick2={allData.structuralEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.structuralEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.structuralEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.structuralEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.structuralEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.structuralEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.structuralEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.structuralEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.structuralEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.structuralEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.structuralEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.structuralEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.structuralEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.structuralEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.structuralEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.structuralEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.structuralEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "transport-engineer-anzsco-233215" && (
        <>
          <ManagerEngineer
            title={allData.transportEngineer.managerEngineer.title}
            titleDescription={
              allData.transportEngineer.managerEngineer.titleDescription
            }
            image={allData.transportEngineer.managerEngineer.image}
            personnelTitle={
              allData.transportEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.transportEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.transportEngineer.managerEngineer.skillText}
            averageTitle={
              allData.transportEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.transportEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.transportEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.transportEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.transportEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.transportEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.transportEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.transportEngineer.managerEngineer.smallTitle3}
            tasks={allData.transportEngineer.managerEngineer.tasks}
            specialization={
              allData.transportEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.transportEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading
            NTParagraphs={
              allData.transportEngineer.sponsorShipData.NTParagraphs
            }
            SAParagraphs1={
              allData.transportEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.transportEngineer.sponsorShipData.SAParagraphs2
            }
            VICHeading={allData.transportEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.transportEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.transportEngineer.sponsorShipData.WAParagraph}
            NSWParagraph2={
              allData.transportEngineer.sponsorShipData.NSWParagraph2
            }
            QLDParagraphs={
              allData.transportEngineer.sponsorShipData.QLDParagraphs
            }
            ACTParagraph1={
              allData.transportEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.transportEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.transportEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "electrical-engineer-anzsco-233311" && (
        <>
          <ManagerEngineer
            title={allData.electricalEngineer.managerEngineer.title}
            titleDescription={
              allData.electricalEngineer.managerEngineer.titleDescription
            }
            image={allData.electricalEngineer.managerEngineer.image}
            personnelTitle={
              allData.electricalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.electricalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.electricalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.electricalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.electricalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.electricalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.electricalEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.electricalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.electricalEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.electricalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.electricalEngineer.managerEngineer.smallTitle3}
            tasks={allData.electricalEngineer.managerEngineer.tasks}
            specialization={
              allData.electricalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.electricalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.electricalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.electricalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.electricalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.electricalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.electricalEngineer.sponsorShipData.SATick1}
            SATick2={allData.electricalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.electricalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.electricalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.electricalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.electricalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.electricalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.electricalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.electricalEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.electricalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.electricalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.electricalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.electricalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.electricalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.electricalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.electricalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.electricalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.electricalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "electronics-engineer-anzsco-233411" && (
        <>
          <ManagerEngineer
            title={allData.electronicEngineer.managerEngineer.title}
            titleDescription={
              allData.electronicEngineer.managerEngineer.titleDescription
            }
            image={allData.electronicEngineer.managerEngineer.image}
            personnelTitle={
              allData.electronicEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.electronicEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.electronicEngineer.managerEngineer.skillText}
            averageTitle={
              allData.electronicEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.electronicEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.electronicEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.electronicEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.electronicEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.electronicEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.electronicEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.electronicEngineer.managerEngineer.smallTitle3}
            tasks={allData.electronicEngineer.managerEngineer.tasks}
            specialization={
              allData.electronicEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.electronicEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.electronicEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.electronicEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.electronicEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.electronicEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.electronicEngineer.sponsorShipData.SATick1}
            SATick2={allData.electronicEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.electronicEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.electronicEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.electronicEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.electronicEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.electronicEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.electronicEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.electronicEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.electronicEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.electronicEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.electronicEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.electronicEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.electronicEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.electronicEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.electronicEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.electronicEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.electronicEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "industrial-engineer-anzsco-233511" && (
        <>
          <ManagerEngineer
            title={allData.industrialEngineer.managerEngineer.title}
            titleDescription={
              allData.industrialEngineer.managerEngineer.titleDescription
            }
            image={allData.industrialEngineer.managerEngineer.image}
            personnelTitle={
              allData.industrialEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.industrialEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.industrialEngineer.managerEngineer.skillText}
            averageTitle={
              allData.industrialEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.industrialEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.industrialEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.industrialEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.industrialEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.industrialEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.industrialEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.industrialEngineer.managerEngineer.smallTitle3}
            tasks={allData.industrialEngineer.managerEngineer.tasks}
            specialization={
              allData.industrialEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.industrialEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.industrialEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.industrialEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.industrialEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.industrialEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.industrialEngineer.sponsorShipData.SATick1}
            SATick2={allData.industrialEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.industrialEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.industrialEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.industrialEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.industrialEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.industrialEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.industrialEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.industrialEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.industrialEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.industrialEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.industrialEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.industrialEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.industrialEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.industrialEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.industrialEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.industrialEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.industrialEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "mechanical-engineer-anzsco-233512" && (
        <>
          <ManagerEngineer
            title={allData.mechanicalEngineer.managerEngineer.title}
            titleDescription={
              allData.mechanicalEngineer.managerEngineer.titleDescription
            }
            image={allData.mechanicalEngineer.managerEngineer.image}
            personnelTitle={
              allData.mechanicalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.mechanicalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.mechanicalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.mechanicalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.mechanicalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.mechanicalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.mechanicalEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.mechanicalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.mechanicalEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.mechanicalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.mechanicalEngineer.managerEngineer.smallTitle3}
            tasks={allData.mechanicalEngineer.managerEngineer.tasks}
            specialization={
              allData.mechanicalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.mechanicalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.mechanicalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.mechanicalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.mechanicalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.mechanicalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.mechanicalEngineer.sponsorShipData.SATick1}
            SATick2={allData.mechanicalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.mechanicalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.mechanicalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.mechanicalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.mechanicalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.mechanicalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.mechanicalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.mechanicalEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.mechanicalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.mechanicalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.mechanicalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.mechanicalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.mechanicalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.mechanicalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.mechanicalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.mechanicalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.mechanicalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "production-or-plant-engineer-anzsco-233513" && (
        <>
          <ManagerEngineer
            title={allData.productionEngineer.managerEngineer.title}
            titleDescription={
              allData.productionEngineer.managerEngineer.titleDescription
            }
            image={allData.productionEngineer.managerEngineer.image}
            personnelTitle={
              allData.productionEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.productionEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.productionEngineer.managerEngineer.skillText}
            averageTitle={
              allData.productionEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.productionEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.productionEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.productionEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.productionEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.productionEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.productionEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.productionEngineer.managerEngineer.smallTitle3}
            tasks={allData.productionEngineer.managerEngineer.tasks}
            specialization={
              allData.productionEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.productionEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.productionEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.productionEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.productionEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.productionEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.productionEngineer.sponsorShipData.SATick1}
            SATick2={allData.productionEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.productionEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.productionEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.productionEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.productionEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.productionEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.productionEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.productionEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.productionEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.productionEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.productionEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.productionEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.productionEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.productionEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.productionEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.productionEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.productionEngineer.sponsorShipData.TASParagraph2
            }
          />

          <RelativeSponsorShip />
        </>
      )}

      {field === "mining-engineer-anzsco-233611" && (
        <>
          <ManagerEngineer
            title={allData.miningEngineer.managerEngineer.title}
            titleDescription={
              allData.miningEngineer.managerEngineer.titleDescription
            }
            image={allData.miningEngineer.managerEngineer.image}
            personnelTitle={
              allData.miningEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.miningEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.miningEngineer.managerEngineer.skillText}
            averageTitle={allData.miningEngineer.managerEngineer.averageTitle}
            averageDetails={
              allData.miningEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.miningEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.miningEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.miningEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.miningEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.miningEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.miningEngineer.managerEngineer.smallTitle3}
            tasks={allData.miningEngineer.managerEngineer.tasks}
            specialization={
              allData.miningEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.miningEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />

          <RelativeSponsorShip />
        </>
      )}

      {field === "petroleum-engineer-anzsco-233612" && (
        <>
          <ManagerEngineer
            title={allData.petroleumEngineer.managerEngineer.title}
            titleDescription={
              allData.petroleumEngineer.managerEngineer.titleDescription
            }
            image={allData.petroleumEngineer.managerEngineer.image}
            personnelTitle={
              allData.petroleumEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.petroleumEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.petroleumEngineer.managerEngineer.skillText}
            averageTitle={
              allData.petroleumEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.petroleumEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.petroleumEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.petroleumEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.petroleumEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.petroleumEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.petroleumEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.petroleumEngineer.managerEngineer.smallTitle3}
            tasks={allData.petroleumEngineer.managerEngineer.tasks}
            specialization={
              allData.petroleumEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.petroleumEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />

          <RelativeSponsorShip />
        </>
      )}
      {field === "aeronautical-engineer-anzsco-233911" && (
        <>
          <ManagerEngineer
            title={allData.aeronauticalEngineer.managerEngineer.title}
            titleDescription={
              allData.aeronauticalEngineer.managerEngineer.titleDescription
            }
            image={allData.aeronauticalEngineer.managerEngineer.image}
            personnelTitle={
              allData.aeronauticalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.aeronauticalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.aeronauticalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.aeronauticalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.aeronauticalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.aeronauticalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.aeronauticalEngineer.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.aeronauticalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.aeronauticalEngineer.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.aeronauticalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.aeronauticalEngineer.managerEngineer.smallTitle3
            }
            tasks={allData.aeronauticalEngineer.managerEngineer.tasks}
            specialization={
              allData.aeronauticalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.aeronauticalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.aeronauticalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.aeronauticalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.aeronauticalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.aeronauticalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.aeronauticalEngineer.sponsorShipData.SATick1}
            SATick2={allData.aeronauticalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.aeronauticalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.aeronauticalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.aeronauticalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.aeronauticalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.aeronauticalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.aeronauticalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.aeronauticalEngineer.sponsorShipData.WAParagraph
            }
            NSWHeading={allData.aeronauticalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.aeronauticalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.aeronauticalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.aeronauticalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.aeronauticalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.aeronauticalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.aeronauticalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.aeronauticalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.aeronauticalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "agricultural-engineer-anzsco-233912" && (
        <>
          <ManagerEngineer
            title={allData.agriculturalEngineer.managerEngineer.title}
            titleDescription={
              allData.agriculturalEngineer.managerEngineer.titleDescription
            }
            image={allData.agriculturalEngineer.managerEngineer.image}
            personnelTitle={
              allData.agriculturalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.agriculturalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.agriculturalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.agriculturalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.agriculturalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.agriculturalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.agriculturalEngineer.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.agriculturalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.agriculturalEngineer.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.agriculturalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.agriculturalEngineer.managerEngineer.smallTitle3
            }
            tasks={allData.agriculturalEngineer.managerEngineer.tasks}
            specialization={
              allData.agriculturalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.agriculturalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.agriculturalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.agriculturalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.agriculturalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.agriculturalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.agriculturalEngineer.sponsorShipData.SATick1}
            SATick2={allData.agriculturalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.agriculturalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.agriculturalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.agriculturalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.agriculturalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.agriculturalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.agriculturalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.agriculturalEngineer.sponsorShipData.WAParagraph
            }
            NSWHeading={allData.agriculturalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.agriculturalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.agriculturalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.agriculturalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.agriculturalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.agriculturalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.agriculturalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.agriculturalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.agriculturalEngineer.sponsorShipData.TASParagraph2
            }
          />

          <RelativeSponsorShip />
        </>
      )}
      {field === "biomedical-engineer-anzsco-233913" && (
        <>
          <ManagerEngineer
            title={allData.biomedicalEngineer.managerEngineer.title}
            titleDescription={
              allData.biomedicalEngineer.managerEngineer.titleDescription
            }
            image={allData.biomedicalEngineer.managerEngineer.image}
            personnelTitle={
              allData.biomedicalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.biomedicalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.biomedicalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.biomedicalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.biomedicalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.biomedicalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.biomedicalEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.biomedicalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.biomedicalEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.biomedicalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.biomedicalEngineer.managerEngineer.smallTitle3}
            tasks={allData.biomedicalEngineer.managerEngineer.tasks}
            specialization={
              allData.biomedicalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.biomedicalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.biomedicalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.biomedicalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.biomedicalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.biomedicalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.biomedicalEngineer.sponsorShipData.SATick1}
            SATick2={allData.biomedicalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.biomedicalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.biomedicalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.biomedicalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.biomedicalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.biomedicalEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.biomedicalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.biomedicalEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.biomedicalEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.biomedicalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.biomedicalEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.biomedicalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.biomedicalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.biomedicalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.biomedicalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.biomedicalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.biomedicalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
      {field === "engineering-technologist-anzsco-233914" && (
        <>
          <ManagerEngineer
            title={allData.engineeringTechnologist.managerEngineer.title}
            titleDescription={
              allData.engineeringTechnologist.managerEngineer.titleDescription
            }
            image={allData.engineeringTechnologist.managerEngineer.image}
            personnelTitle={
              allData.engineeringTechnologist.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.engineeringTechnologist.managerEngineer.personnelDetails
            }
            skillText={
              allData.engineeringTechnologist.managerEngineer.skillText
            }
            averageTitle={
              allData.engineeringTechnologist.managerEngineer.averageTitle
            }
            averageDetails={
              allData.engineeringTechnologist.managerEngineer.averageDetails
            }
            jobDescription={
              allData.engineeringTechnologist.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.engineeringTechnologist.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.engineeringTechnologist.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.engineeringTechnologist.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.engineeringTechnologist.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.engineeringTechnologist.managerEngineer.smallTitle3
            }
            tasks={allData.engineeringTechnologist.managerEngineer.tasks}
            specialization={
              allData.engineeringTechnologist.managerEngineer.specialization
            }
            specializationList={
              allData.engineeringTechnologist.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={
              allData.engineeringTechnologist.sponsorShipData.NTHeading
            }
            NTTick1={allData.engineeringTechnologist.sponsorShipData.NTTick1}
            NTTick2={allData.engineeringTechnologist.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.engineeringTechnologist.sponsorShipData.NTParagraphs
            }
            SATick1={allData.engineeringTechnologist.sponsorShipData.SATick1}
            SATick2={allData.engineeringTechnologist.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.engineeringTechnologist.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.engineeringTechnologist.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.engineeringTechnologist.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.engineeringTechnologist.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={
              allData.engineeringTechnologist.sponsorShipData.VICHeading
            }
            VICParagraphs={
              allData.engineeringTechnologist.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.engineeringTechnologist.sponsorShipData.WAParagraph
            }
            NSWHeading={
              allData.engineeringTechnologist.sponsorShipData.NSWHeading
            }
            NSWParagraph2={
              allData.engineeringTechnologist.sponsorShipData.NSWParagraph2
            }
            QLDHeading={
              allData.engineeringTechnologist.sponsorShipData.QLDHeading
            }
            QLDParagraphs={
              allData.engineeringTechnologist.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.engineeringTechnologist.sponsorShipData.ACTTick1}
            ACTTick2={allData.engineeringTechnologist.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.engineeringTechnologist.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.engineeringTechnologist.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.engineeringTechnologist.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "environmental-engineer-anzsco-233915" && (
        <>
          <ManagerEngineer
            title={allData.environmentalEngineer.managerEngineer.title}
            titleDescription={
              allData.environmentalEngineer.managerEngineer.titleDescription
            }
            image={allData.environmentalEngineer.managerEngineer.image}
            personnelTitle={
              allData.environmentalEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.environmentalEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.environmentalEngineer.managerEngineer.skillText}
            averageTitle={
              allData.environmentalEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.environmentalEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.environmentalEngineer.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.environmentalEngineer.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.environmentalEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.environmentalEngineer.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.environmentalEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.environmentalEngineer.managerEngineer.smallTitle3
            }
            tasks={allData.environmentalEngineer.managerEngineer.tasks}
            specialization={
              allData.environmentalEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.environmentalEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.environmentalEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.environmentalEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.environmentalEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.environmentalEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.environmentalEngineer.sponsorShipData.SATick1}
            SATick2={allData.environmentalEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.environmentalEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.environmentalEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.environmentalEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.environmentalEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={
              allData.environmentalEngineer.sponsorShipData.VICHeading
            }
            VICParagraphs={
              allData.environmentalEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.environmentalEngineer.sponsorShipData.WAParagraph
            }
            NSWHeading={
              allData.environmentalEngineer.sponsorShipData.NSWHeading
            }
            NSWParagraph2={
              allData.environmentalEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={
              allData.environmentalEngineer.sponsorShipData.QLDHeading
            }
            QLDParagraphs={
              allData.environmentalEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.environmentalEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.environmentalEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.environmentalEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.environmentalEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.environmentalEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "engineering-professionals-nec-anzsco-233999" && (
        <>
          <ManagerEngineer
            title={allData.engineeringProfessionals.managerEngineer.title}
            titleDescription={
              allData.engineeringProfessionals.managerEngineer.titleDescription
            }
            image={allData.engineeringProfessionals.managerEngineer.image}
            personnelTitle={
              allData.engineeringProfessionals.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.engineeringProfessionals.managerEngineer.personnelDetails
            }
            skillText={
              allData.engineeringProfessionals.managerEngineer.skillText
            }
            averageTitle={
              allData.engineeringProfessionals.managerEngineer.averageTitle
            }
            averageDetails={
              allData.engineeringProfessionals.managerEngineer.averageDetails
            }
            jobDescription={
              allData.engineeringProfessionals.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.engineeringProfessionals.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.engineeringProfessionals.managerEngineer
                .smallTitle1Details
            }
            smallTitle2={
              allData.engineeringProfessionals.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.engineeringProfessionals.managerEngineer
                .smallTitle2Details
            }
            smallTitle3={
              allData.engineeringProfessionals.managerEngineer.smallTitle3
            }
            tasks={allData.engineeringProfessionals.managerEngineer.tasks}
            specialization={
              allData.engineeringProfessionals.managerEngineer.specialization
            }
            specializationList={
              allData.engineeringProfessionals.managerEngineer
                .specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={
              allData.engineeringProfessionals.sponsorShipData.NTHeading
            }
            NTTick1={allData.engineeringProfessionals.sponsorShipData.NTTick1}
            NTTick2={allData.engineeringProfessionals.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.engineeringProfessionals.sponsorShipData.NTParagraphs
            }
            SATick1={allData.engineeringProfessionals.sponsorShipData.SATick1}
            SATick2={allData.engineeringProfessionals.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.engineeringProfessionals.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.engineeringProfessionals.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.engineeringProfessionals.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.engineeringProfessionals.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={
              allData.engineeringProfessionals.sponsorShipData.VICHeading
            }
            VICParagraphs={
              allData.engineeringProfessionals.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.engineeringProfessionals.sponsorShipData.WAParagraph
            }
            NSWHeading={
              allData.engineeringProfessionals.sponsorShipData.NSWHeading
            }
            NSWParagraph2={
              allData.engineeringProfessionals.sponsorShipData.NSWParagraph2
            }
            QLDHeading={
              allData.engineeringProfessionals.sponsorShipData.QLDHeading
            }
            QLDParagraphs={
              allData.engineeringProfessionals.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.engineeringProfessionals.sponsorShipData.ACTTick1}
            ACTTick2={allData.engineeringProfessionals.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.engineeringProfessionals.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.engineeringProfessionals.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.engineeringProfessionals.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "telecommunication-network-engineers-anzsco-263312" && (
        <>
          <ManagerEngineer
            title={allData.telnetworkEngineer.managerEngineer.title}
            titleDescription={
              allData.telnetworkEngineer.managerEngineer.titleDescription
            }
            image={allData.telnetworkEngineer.managerEngineer.image}
            personnelTitle={
              allData.telnetworkEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.telnetworkEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.telnetworkEngineer.managerEngineer.skillText}
            averageTitle={
              allData.telnetworkEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.telnetworkEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.telnetworkEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.telnetworkEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.telnetworkEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.telnetworkEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.telnetworkEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.telnetworkEngineer.managerEngineer.smallTitle3}
            tasks={allData.telnetworkEngineer.managerEngineer.tasks}
            specialization={
              allData.telnetworkEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.telnetworkEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.telnetworkEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.telnetworkEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.telnetworkEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.telnetworkEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.telnetworkEngineer.sponsorShipData.SATick1}
            SATick2={allData.telnetworkEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.telnetworkEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.telnetworkEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.telnetworkEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.telnetworkEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.telnetworkEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.telnetworkEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.telnetworkEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.telnetworkEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.telnetworkEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.telnetworkEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.telnetworkEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.telnetworkEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.telnetworkEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.telnetworkEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.telnetworkEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.telnetworkEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "computer-networks-and-system-engineers-anzsco-263111" && (
        <>
          <ManagerEngineer
            title={allData.computerEngineer.managerEngineer.title}
            titleDescription={
              allData.computerEngineer.managerEngineer.titleDescription
            }
            image={allData.computerEngineer.managerEngineer.image}
            personnelTitle={
              allData.computerEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.computerEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.computerEngineer.managerEngineer.skillText}
            averageTitle={allData.computerEngineer.managerEngineer.averageTitle}
            averageDetails={
              allData.computerEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.computerEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.computerEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.computerEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.computerEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.computerEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.computerEngineer.managerEngineer.smallTitle3}
            tasks={allData.computerEngineer.managerEngineer.tasks}
            specialization={
              allData.computerEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.computerEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.computerEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.computerEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.computerEngineer.sponsorShipData.NTTick2}
            NTParagraphs={allData.computerEngineer.sponsorShipData.NTParagraphs}
            SATick1={allData.computerEngineer.sponsorShipData.SATick1}
            SATick2={allData.computerEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.computerEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.computerEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.computerEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.computerEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.computerEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.computerEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.computerEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.computerEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.computerEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.computerEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.computerEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.computerEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.computerEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.computerEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.computerEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.computerEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "telecommunication-engineers-anzsco-263311" && (
        <>
          <ManagerEngineer
            title={allData.telecommunicationsEngineer.managerEngineer.title}
            titleDescription={
              allData.telecommunicationsEngineer.managerEngineer
                .titleDescription
            }
            image={allData.telecommunicationsEngineer.managerEngineer.image}
            personnelTitle={
              allData.telecommunicationsEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.telecommunicationsEngineer.managerEngineer
                .personnelDetails
            }
            skillText={
              allData.telecommunicationsEngineer.managerEngineer.skillText
            }
            averageTitle={
              allData.telecommunicationsEngineer.managerEngineer.averageTitle
            }
            averageDetails={
              allData.telecommunicationsEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.telecommunicationsEngineer.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.telecommunicationsEngineer.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.telecommunicationsEngineer.managerEngineer
                .smallTitle1Details
            }
            smallTitle2={
              allData.telecommunicationsEngineer.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.telecommunicationsEngineer.managerEngineer
                .smallTitle2Details
            }
            smallTitle3={
              allData.telecommunicationsEngineer.managerEngineer.smallTitle3
            }
            tasks={allData.telecommunicationsEngineer.managerEngineer.tasks}
            specialization={
              allData.telecommunicationsEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.telecommunicationsEngineer.managerEngineer
                .specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={
              allData.telecommunicationsEngineer.sponsorShipData.NTHeading
            }
            NTTick1={allData.telecommunicationsEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.telecommunicationsEngineer.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.telecommunicationsEngineer.sponsorShipData.NTParagraphs
            }
            SATick1={allData.telecommunicationsEngineer.sponsorShipData.SATick1}
            SATick2={allData.telecommunicationsEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.telecommunicationsEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.telecommunicationsEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.telecommunicationsEngineer.sponsorShipData
                .SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.telecommunicationsEngineer.sponsorShipData
                .SAParagraphsTick2
            }
            VICHeading={
              allData.telecommunicationsEngineer.sponsorShipData.VICHeading
            }
            VICParagraphs={
              allData.telecommunicationsEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.telecommunicationsEngineer.sponsorShipData.WAParagraph
            }
            NSWHeading={
              allData.telecommunicationsEngineer.sponsorShipData.NSWHeading
            }
            NSWParagraph2={
              allData.telecommunicationsEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={
              allData.telecommunicationsEngineer.sponsorShipData.QLDHeading
            }
            QLDParagraphs={
              allData.telecommunicationsEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={
              allData.telecommunicationsEngineer.sponsorShipData.ACTTick1
            }
            ACTTick2={
              allData.telecommunicationsEngineer.sponsorShipData.ACTTick2
            }
            ACTParagraph1={
              allData.telecommunicationsEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.telecommunicationsEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.telecommunicationsEngineer.sponsorShipData.TASParagraph2
            }
          />

          <RelativeSponsorShip />
        </>
      )}

      {field === "civil-engineering-draftsperson-anzsco-312211" && (
        <>
          <ManagerEngineer
            title={allData.civilDraftsperson.managerEngineer.title}
            titleDescription={
              allData.civilDraftsperson.managerEngineer.titleDescription
            }
            image={allData.civilDraftsperson.managerEngineer.image}
            personnelTitle={
              allData.civilDraftsperson.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.civilDraftsperson.managerEngineer.personnelDetails
            }
            skillText={allData.civilDraftsperson.managerEngineer.skillText}
            averageTitle={
              allData.civilDraftsperson.managerEngineer.averageTitle
            }
            averageDetails={
              allData.civilDraftsperson.managerEngineer.averageDetails
            }
            jobDescription={
              allData.civilDraftsperson.managerEngineer.jobDescription
            }
            smallTitle1={allData.civilDraftsperson.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.civilDraftsperson.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.civilDraftsperson.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.civilDraftsperson.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.civilDraftsperson.managerEngineer.smallTitle3}
            tasks={allData.civilDraftsperson.managerEngineer.tasks}
            specialization={
              allData.civilDraftsperson.managerEngineer.specialization
            }
            specializationList={
              allData.civilDraftsperson.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.civilDraftsperson.sponsorShipData.NTHeading}
            NTTick1={allData.civilDraftsperson.sponsorShipData.NTTick1}
            NTTick2={allData.civilDraftsperson.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.civilDraftsperson.sponsorShipData.NTParagraphs
            }
            SATick1={allData.civilDraftsperson.sponsorShipData.SATick1}
            SATick2={allData.civilDraftsperson.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.civilDraftsperson.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.civilDraftsperson.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.civilDraftsperson.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.civilDraftsperson.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.civilDraftsperson.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.civilDraftsperson.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.civilDraftsperson.sponsorShipData.WAParagraph}
            NSWHeading={allData.civilDraftsperson.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.civilDraftsperson.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.civilDraftsperson.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.civilDraftsperson.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.civilDraftsperson.sponsorShipData.ACTTick1}
            ACTTick2={allData.civilDraftsperson.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.civilDraftsperson.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.civilDraftsperson.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.civilDraftsperson.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "electrical-engineering-draftsperson-anzsco-312311" && (
        <>
          <ManagerEngineer
            title={allData.electricalDraftsperson.managerEngineer.title}
            titleDescription={
              allData.electricalDraftsperson.managerEngineer.titleDescription
            }
            image={allData.electricalDraftsperson.managerEngineer.image}
            personnelTitle={
              allData.electricalDraftsperson.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.electricalDraftsperson.managerEngineer.personnelDetails
            }
            skillText={allData.electricalDraftsperson.managerEngineer.skillText}
            averageTitle={
              allData.electricalDraftsperson.managerEngineer.averageTitle
            }
            averageDetails={
              allData.electricalDraftsperson.managerEngineer.averageDetails
            }
            jobDescription={
              allData.electricalDraftsperson.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.electricalDraftsperson.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.electricalDraftsperson.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.electricalDraftsperson.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.electricalDraftsperson.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.electricalDraftsperson.managerEngineer.smallTitle3
            }
            tasks={allData.electricalDraftsperson.managerEngineer.tasks}
            specialization={
              allData.electricalDraftsperson.managerEngineer.specialization
            }
            specializationList={
              allData.electricalDraftsperson.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.electricalDraftsperson.sponsorShipData.NTHeading}
            NTTick1={allData.electricalDraftsperson.sponsorShipData.NTTick1}
            NTTick2={allData.electricalDraftsperson.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.electricalDraftsperson.sponsorShipData.NTParagraphs
            }
            SATick1={allData.electricalDraftsperson.sponsorShipData.SATick1}
            SATick2={allData.electricalDraftsperson.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.electricalDraftsperson.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.electricalDraftsperson.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.electricalDraftsperson.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.electricalDraftsperson.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={
              allData.electricalDraftsperson.sponsorShipData.VICHeading
            }
            VICParagraphs={
              allData.electricalDraftsperson.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.electricalDraftsperson.sponsorShipData.WAParagraph
            }
            NSWHeading={
              allData.electricalDraftsperson.sponsorShipData.NSWHeading
            }
            NSWParagraph2={
              allData.electricalDraftsperson.sponsorShipData.NSWParagraph2
            }
            QLDHeading={
              allData.electricalDraftsperson.sponsorShipData.QLDHeading
            }
            QLDParagraphs={
              allData.electricalDraftsperson.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.electricalDraftsperson.sponsorShipData.ACTTick1}
            ACTTick2={allData.electricalDraftsperson.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.electricalDraftsperson.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.electricalDraftsperson.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.electricalDraftsperson.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "electrical-engineering-technician-anzsco-312312" && (
        <>
          <ManagerEngineer
            title={allData.electricalTechnician.managerEngineer.title}
            titleDescription={
              allData.electricalTechnician.managerEngineer.titleDescription
            }
            image={allData.electricalTechnician.managerEngineer.image}
            personnelTitle={
              allData.electricalTechnician.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.electricalTechnician.managerEngineer.personnelDetails
            }
            skillText={allData.electricalTechnician.managerEngineer.skillText}
            averageTitle={
              allData.electricalTechnician.managerEngineer.averageTitle
            }
            averageDetails={
              allData.electricalTechnician.managerEngineer.averageDetails
            }
            jobDescription={
              allData.electricalTechnician.managerEngineer.jobDescription
            }
            smallTitle1={
              allData.electricalTechnician.managerEngineer.smallTitle1
            }
            smallTitle1Details={
              allData.electricalTechnician.managerEngineer.smallTitle1Details
            }
            smallTitle2={
              allData.electricalTechnician.managerEngineer.smallTitle2
            }
            smallTitle2Details={
              allData.electricalTechnician.managerEngineer.smallTitle2Details
            }
            smallTitle3={
              allData.electricalTechnician.managerEngineer.smallTitle3
            }
            tasks={allData.electricalTechnician.managerEngineer.tasks}
            specialization={
              allData.electricalTechnician.managerEngineer.specialization
            }
            specializationList={
              allData.electricalTechnician.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.electricalTechnician.sponsorShipData.NTHeading}
            NTTick1={allData.electricalTechnician.sponsorShipData.NTTick1}
            NTTick2={allData.electricalTechnician.sponsorShipData.NTTick2}
            NTParagraphs={
              allData.electricalTechnician.sponsorShipData.NTParagraphs
            }
            SATick1={allData.electricalTechnician.sponsorShipData.SATick1}
            SATick2={allData.electricalTechnician.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.electricalTechnician.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.electricalTechnician.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.electricalTechnician.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.electricalTechnician.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.electricalTechnician.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.electricalTechnician.sponsorShipData.VICParagraphs
            }
            WAParagraph={
              allData.electricalTechnician.sponsorShipData.WAParagraph
            }
            NSWHeading={allData.electricalTechnician.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.electricalTechnician.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.electricalTechnician.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.electricalTechnician.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.electricalTechnician.sponsorShipData.ACTTick1}
            ACTTick2={allData.electricalTechnician.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.electricalTechnician.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.electricalTechnician.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.electricalTechnician.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}

      {field === "telecommunication-field-engineer-anzsco-313212" && (
        <>
          <ManagerEngineer
            title={allData.telfieldEngineer.managerEngineer.title}
            titleDescription={
              allData.telfieldEngineer.managerEngineer.titleDescription
            }
            image={allData.telfieldEngineer.managerEngineer.image}
            personnelTitle={
              allData.telfieldEngineer.managerEngineer.personnelTitle
            }
            personnelDetails={
              allData.telfieldEngineer.managerEngineer.personnelDetails
            }
            skillText={allData.telfieldEngineer.managerEngineer.skillText}
            averageTitle={allData.telfieldEngineer.managerEngineer.averageTitle}
            averageDetails={
              allData.telfieldEngineer.managerEngineer.averageDetails
            }
            jobDescription={
              allData.telfieldEngineer.managerEngineer.jobDescription
            }
            smallTitle1={allData.telfieldEngineer.managerEngineer.smallTitle1}
            smallTitle1Details={
              allData.telfieldEngineer.managerEngineer.smallTitle1Details
            }
            smallTitle2={allData.telfieldEngineer.managerEngineer.smallTitle2}
            smallTitle2Details={
              allData.telfieldEngineer.managerEngineer.smallTitle2Details
            }
            smallTitle3={allData.telfieldEngineer.managerEngineer.smallTitle3}
            tasks={allData.telfieldEngineer.managerEngineer.tasks}
            specialization={
              allData.telfieldEngineer.managerEngineer.specialization
            }
            specializationList={
              allData.telfieldEngineer.managerEngineer.specializationList
            }
          />
          <VisaOptions />
          <SponsorShipOptions
            NTHeading={allData.telfieldEngineer.sponsorShipData.NTHeading}
            NTTick1={allData.telfieldEngineer.sponsorShipData.NTTick1}
            NTTick2={allData.telfieldEngineer.sponsorShipData.NTTick2}
            NTParagraphs={allData.telfieldEngineer.sponsorShipData.NTParagraphs}
            SATick1={allData.telfieldEngineer.sponsorShipData.SATick1}
            SATick2={allData.telfieldEngineer.sponsorShipData.SATick2}
            SAParagraphs1={
              allData.telfieldEngineer.sponsorShipData.SAParagraphs1
            }
            SAParagraphs2={
              allData.telfieldEngineer.sponsorShipData.SAParagraphs2
            }
            SAParagraphsTick1={
              allData.telfieldEngineer.sponsorShipData.SAParagraphsTick1
            }
            SAParagraphsTick2={
              allData.telfieldEngineer.sponsorShipData.SAParagraphsTick2
            }
            VICHeading={allData.telfieldEngineer.sponsorShipData.VICHeading}
            VICParagraphs={
              allData.telfieldEngineer.sponsorShipData.VICParagraphs
            }
            WAParagraph={allData.telfieldEngineer.sponsorShipData.WAParagraph}
            NSWHeading={allData.telfieldEngineer.sponsorShipData.NSWHeading}
            NSWParagraph2={
              allData.telfieldEngineer.sponsorShipData.NSWParagraph2
            }
            QLDHeading={allData.telfieldEngineer.sponsorShipData.QLDHeading}
            QLDParagraphs={
              allData.telfieldEngineer.sponsorShipData.QLDParagraphs
            }
            ACTTick1={allData.telfieldEngineer.sponsorShipData.ACTTick1}
            ACTTick2={allData.telfieldEngineer.sponsorShipData.ACTTick2}
            ACTParagraph1={
              allData.telfieldEngineer.sponsorShipData.ACTParagraph1
            }
            TASParagraph1={
              allData.telfieldEngineer.sponsorShipData.TASParagraph1
            }
            TASParagraph2={
              allData.telfieldEngineer.sponsorShipData.TASParagraph2
            }
          />
          <RelativeSponsorShip />
        </>
      )}
    </>
  );
};
export default ANZO;
