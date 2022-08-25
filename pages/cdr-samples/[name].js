import React from "react";
import Head from "next/head";
import Steps from "../../components/CDRWriting/Steps";
import CDRSample from "../../components/SpecificSample/CDRSample";
import ReportSamples from "../../components/SpecificSample/ReportSamples";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import OurFeatures from "../../components/SpecificSample/OurFeatures";
import Hero from "../../components/Hero";
import { useRouter } from "next/router";
import CheckIcon from "@mui/icons-material/Check";
import parse from "html-react-parser";
import Seo from "../../components/Seo";
const SpecificSample = ({ sampleData }) => {
  const router = useRouter();
  const name = router.query.name;
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // const { content, seo, title1, title2, paragraph, steps, fancySteps } =
  //   sampleData?.data?.attributes;

  const allSamples = {
    engineeringManager: {
      title: `CDR Report Sample for Engineering Manager`,

      titleDetails: `We CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short timeand at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website are  previously presented  and  approved  by  Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it`,
      image: `/images/SpecificSample/engineering-Manager.jpg`,
      secondTitle: `CDR Sample for Engineering Manager`,
      secondTitleSecond: `Engineering Manager: ANZSCO CODE 13321`,
      secondTitleSecondDetails: `CDR  Report Sample for  Engineering  Manager  covers  all  required  reports, including  All Three  Career Episodes Report, Continuing Professional Development(CPD) Report, Summary Statement Report, and a Curriculum Vitae Report.`,
      steps: [
        {
          title: `CVor Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The   author's   Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 300 words in length.`,
        },
        {
          title: `Engineering Manager Career Episode Sample 1`,
          description: `Covers 1700 words in length regarding "Planning and Project Control at Damavand Combined Cycle Power Plant."`,
        },
        {
          title: `Engineering Manager Career Episode Sample 2`,
          description: `Covers 1770 words in length regarding “Tehran Cement Power Plant Project”.`,
        },
        {
          title: `Engineering Manager Career Episode Sample3`,
          description: `Covers 1520 words in length regarding “PARAND Power Plant Development”.`,
        },
        {
          title: `Engineering  Manager  Summary  Statement  Sample`,
          description: `A clear  description  of  each  competence element in 1040 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> Planning and Project Control at
              Damavand Combined Cycle Power Plant
              <br />
              <br />
              Over the first career episode Report, the author explains a
              project he worked on as a Planning and Project Control Engineer
              for the IFC (Issued for Construction) package stage of the company{" "}
              <strong>“Damavand Combined Cycle Power Plant”.</strong>
              <strong>
                “Planning and Project Control at Damavand Combined Cycle Power
                Plant"
              </strong>{" "}
              was the title of the project. The author's responsibilities
              Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              Organizing meetings with the departments involved.
              <br />
              <CheckIcon className="me-2" />
              Assessing the project plan and budget.
              <br />
              <CheckIcon className="me-2" />
              Updating on the project status.
              <br />
              <CheckIcon className="me-2" />
              Drafting notes on the project's progress to be delivered to the
              supervisors.
              <br />
              <CheckIcon className="me-2" />
              Controlling the project's process and documentation to satisfy the
              criteria, as well as making efficient use of the project's
              resources.
              <br />
              <CheckIcon className="me-2" />
              Creating a project implementation plan to describe the work that
              needs to be done.
              <br />
              <CheckIcon className="me-2" />
              Submitting the most recent and complete project progress data to
              the company's online platform.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong> Tehran Cement Power Plant Project
              Damavand Combined Cycle Power Plant
              <br />
              Over the Second career episode Report, the author outlines the
              Engineering skills he utilized in a year-long project as an
              industrial engineer. The Author’s Duties Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              Examining project documentation, process flow diagrams, and
              flowcharts.
              <br />
              <CheckIcon className="me-2" />
              Thoroughly examining the organization's operations.
              <br />
              <CheckIcon className="me-2" />
              Eradicating any delays in daily operations.
              <br />
              <CheckIcon className="me-2" />
              Assessing the operation's existing environmental requirements.
              <br />
              <CheckIcon className="me-2" />
              Creating the project's budget and time allocations.
              <br />
              <CheckIcon className="me-2" />
              Regularly checking the project's development and providing any
              form of a proposal for the same.
              <br />
              <CheckIcon className="me-2" />
              Building a unique workflow for the project to optimize the usage
              of equipment and resources for cost and process optimization.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> Conception, Design and Efficiency
              Audit of Mechanical Processes for the Separation of Algae from
              Animal Tank Waters on a Technical Scale
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills she used to complete the project during the
              fulfilment of her Master’s degree thesis. The project is called
              <strong>
                “Conception, Design and Efficiency Audit of Mechanical Processes
                for the Separation of Algae from Animal Tank Waters on a
                Technical Scale”.
              </strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To develop the optimal solution for a mechanically based water
              treatment plan.
              <br />
              <CheckIcon className="me-2" />
              To determine the best operating parameters (centrifugation-Number
              and centrifugation-duration) during centrifugation.
              <br />
              <CheckIcon className="me-2" />
              To perform separation of the solid components and minimise the
              bacteria with the help of the low-pressure ultra-filtration
              method.
              <br />
              <CheckIcon className="me-2" />
              To develop the disc separator.
              <br />
              <CheckIcon className="me-2" />
              To determine the cost analysis data report.
              <br />
              <CheckIcon className="me-2" />
              <CheckIcon className="me-2" />
              To determine the cost analysis data report.
              <br />
              <br />
            </div>
          ),
        },
      ],
    },
    chemicalEngineer: {
      title: `CDR Report Sample for chemical Engineer `,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects mayrely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website are  previouslypresented  and  approved  by  EngineersAustralia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/chemical-engineer.jpg`,
      secondTitle: `CDR Sample for chemical Engineer`,
      secondTitleSecond: `Chemical Engineer: ANZSCO CODE 233111`,
      secondTitleSecondDetails: `CDR Report Sample for chemical Engineers cover all required reports, including All Three Career Episodes Report,   Continuing   Professional   Development   (CPD)   Report,   Summary   Statement   Report,   and   a Curriculum Vitae Report`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The   author's   Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `chemical  Engineer  Career  Episode  Sample  Report  1`,
          description: `Covers  1500  words  in  length  regarding  "Designing and Modelling of Horizontal Coalescer."`,
        },
        {
          title: `Chemical  Engineer  Career  Episode  Sample  Report  2`,
          description: `Covers 2000  words  in  length  regarding “Reusing Lubricant Oil after Purification”.`,
        },
        {
          title: `Chemical Engineer Career Episode Sample 3`,
          description: `Covers 1400 words in length regarding “Developing Tabulation of Additive Consumption in the Extruder Section and Optimising it”.`,
        },
        {
          title: `Chemical Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 2050 words in length`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> Designing and Modelling of
              Horizontal Coalescer
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project "Designing and Modelling of Horizontal Coalescer." He
              worked on this project while studying for his Bachelor of
              Technology degree in ChemicalEngineer.
              <strong>
                “Designing and Modelling of Horizontal Coalescer”.
              </strong>
              was the title of the project. The author's Tasks Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              evaluating conventional systems and determining the primary design
              criteria
              <br />
              <CheckIcon className="me-2" />
              Choosing the proper size of the suggested separator.
              <br />
              <CheckIcon className="me-2" />
              Completing the dimensions and physical design of the
              separatorandcomponent selection.
              <br />
              <CheckIcon className="me-2" />
              Locating and applying chemical and biological design treatment.
              <br />
              <CheckIcon className="me-2" />
              Analysing costs and determining a technique for system development
              and optimisation.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong> Reusing Lubricant Oil after
              Purification
              <br />
              Over the Second career episode Report, the author outlines a
              project he did as part of his undergraduate degree called "Reusing
              Lubricant Oil After Purification”. The project focuses on
              purifying and reusing previously used lubricating oil.
              <br />
              <br />
              <strong>The Author's Duties and Resposibilities Include:</strong>
              <CheckIcon className="me-2" />
              Analyse to determine the optimum way of purification of spent
              lubricating oilfrom the different available procedures.
              <br />
              <CheckIcon className="me-2" />
              Examine the feasibility method by evaluating the economics of a
              used lubricating oil purification facility.
              <br />
              <CheckIcon className="me-2" />
              Endeavour to purify leftover lubricating oil collected from a
              variety of Automobiles.
              <br />
              <CheckIcon className="me-2" />
              Put the new machinery in place and commission them.
              <br />
              <CheckIcon className="me-2" />
              Design a schematic illustration of a lubricating oil purification
              process.
              <br />
              <CheckIcon className="me-2" />
              Perform physical and chemical tests on purified lubricating oil
              and analyse the outcomes of previously utilised lubricant oil.
              <br />
              <CheckIcon className="me-2" />
              In lubricating oil, combine the necessary elements.
              <br />
              <CheckIcon className="me-2" />
              Examine the economy andthe cost of setting up a purification
              plant.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Developing Tabulation of Additive
              Consumption in the Extruder Section and Optimising it”
              <br />
              Over the Third career episode Report, the author outlines a
              project he did as part of his Master’s degree study called
              <strong>
                “Developing Tabulation of Additive Consumption in the Extruder
                Section and Optimising it.”
              </strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To explore the various procedures used in an oil refinery
              <br />
              <CheckIcon className="me-2" />
              . To Study petrochemical materials and their manufacturing
              techniques.
              <br />
              <CheckIcon className="me-2" />
              To examine the refinery's naphtha cracker as well as other
              methods.
              <br />
              <CheckIcon className="me-2" />
              To explore the combination of a refinery anda naphtha complex.
              <br />
              <CheckIcon className="me-2" />
              To learn more about the chemical compounds used in refineries.
              <br />
            </div>
          ),
        },
      ],
    },
    materialsEngineer: {
      title: `CDR Report Sample for Materials Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a shorttime and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects mayrely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website  are  previously  presented  and  approved  by  EngineersAustralia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/materials-engineer.jpg`,
      secondTitle: `CDR Sample for Materials Engineer`,
      secondTitleSecond: `Materials Engineer: ANZSCO CODE 233112`,
      secondTitleSecondDetails: `CDR Report Sample for Materials Engineer covers all required reports, including All Three Career Episodes Report,   Continuing   Professional   Development   (CPD)   Report,   Summary   Statement   Report,   and   a Curriculum Vitae Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The   author's   Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Materials  Engineer  Career  Episode  Sample  Report  1`,
          description: `Covers 2100 words  in  length  regarding  " Study of Electrochemical Reduction of Titanium Dioxide (TiO2) for the extraction of Titanium."•Materials Engineer Episode Sample Report 2:  `,
        },
        {
          title: `Materials Engineer Episode Sample Report 2`,
          description: `Covers 1890 words in length regarding “Production of Nanoparticlesand study their magnetic properties”.`,
        },
        {
          title: `Materials  Engineer  Career  Episode  Sample  Report  3`,
          description: `Covers 2300  words  in  length  regarding “Fabrication and Analysis of Al 2219-Si Metal Matrix Composite”.`,
        },
        {
          title: `Materials  Engineer  Summary  Statement  Sample`,
          description: `A  clear  description  of  each  competence element in 3200 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> “Study of Electrochemical Reduction
              of Titanium Dioxide (TiO2) for the extraction of Titanium
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong>
                {" "}
                “Study of Electrochemical Reduction of Titanium Dioxide (TiO2)
                for the extraction of Titanium.”.
              </strong>
              He worked on this project while studying for his Bachelor of
              Metallurgical Engineering in his final year.
              <strong>
                “Study of Electrochemical Reduction of Titanium Dioxide (TiO2)
                for the extraction of Titanium
              </strong>
              was the title of the project. The author's Tasks Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              Examine Titanium's physical and chemical characteristics
              <br />
              <CheckIcon className="me-2" />
              Study the different ways of Titanium reduction.
              <br />
              <CheckIcon className="me-2" />
              Create an operational plan for performing TiO2 electrochemical
              reduction. <br />
              <CheckIcon className="me-2" />
              Undertake studies on the Titanium extraction procedure by
              electrochemical reduction of Titanium <br />
              <CheckIcon className="me-2" />
              Dioxide that is being carried out at DMRL. <br />
              <CheckIcon className="me-2" />
              Keep track of the criticalparameters at all times during
              experiments. <br />
              <CheckIcon className="me-2" />
              Compute the material balance for the production of one kilogram of
              Titanium <br />
              <CheckIcon className="me-2" />
              Compute the potential DC needed for producing 1kg of Titanium.{" "}
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Production of Nanoparticlesand
              study of their magnetic properties”
              <br />
              Over the Second career episode Report, the author outlines the
              engineering skills he used in the projectas part of his
              undergraduate degreein Metallurgical Engineering in his final
              year.The project is called <br />
              <strong>
                "Production of Nanoparticlesand study their magnetic
                properties”.
              </strong>
              <br />
              <strong>The Author's Duties and Resposibilities Include:</strong>
              <CheckIcon className="me-2" />
              Evaluate several nanoparticle production processes and choose the
              most viable one. <br />
              <CheckIcon className="me-2" />
              Apply thermal decomposition to conduct the chemical synthesis of
              nanoparticles.
              <br />
              <CheckIcon className="me-2" />
              Through the use of XRD equipment, identify the phases of
              nanoparticles.
              <br />
              <CheckIcon className="me-2" />
              To estimate the size of nanoparticles, do a scanning electron
              microscopy (SEM) analysis.
              <br />
              <CheckIcon className="me-2" />
              Measure the magnetic characteristics of produced
              nanoparticlesUsing the Vibrating Sample Magnetometer (VSM)
              technique. <br />
              <CheckIcon className="me-2" />
              Determine the composition and purity of Nanomaterials to conduct
              energy-dispersive X-ray spectroscopy (EDX) experiment. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Fabrication and Analysis of Al
              2219-Si Metal Matrix Composite “
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills he used to complete a project during his
              bachelor’s degree in Metallurgical Engineering. The projectis
              called
              <strong>
                “Fabrication and Analysis of Al 2219-Si Metal Matrix Composite.”
              </strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Present a literature review about metal matrix composites,
              focusing on their manufacturing process and physical and
              mechanical behaviour. <br />
              <CheckIcon className="me-2" />
              Choose materials for the composite’sfabrication.
              <br />
              <CheckIcon className="me-2" />
              Fabricate the composites using selected materials.
              <br />
              <CheckIcon className="me-2" />
              Evaluate the mechanical and physical characteristics of the
              manufactured composites.
              <br />
              <CheckIcon className="me-2" />
              Carry out a detailed analysisof the test results.
              <br />
            </div>
          ),
        },
      ],
    },
    civilEngineer: {
      title: `CDR Report Sample for Civil Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a shorttimeand at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website  are  previously  presented  and  approved  by  Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/civil-engineer.jpg`,
      secondTitle: `CDR Sample for Civil Engineer `,
      secondTitleSecond: `Civil Engineer: ANZSCO CODE 233211`,
      secondTitleSecondDetails: `CDR  Report  Sample  for civil  Engineers cover  all  required  reports,  including  All  Three  Career  Episodes Report,   Continuing   Professional   Development   (CPD)   Report,   Summary   Statement   Report,   and   a Curriculum Vitae-CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The   author's   Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Civil  Engineer  Career  Episode  Sample Report  1`,
          description: `Covers 1500  words  in  length  regarding  "Structural Analysis of G+3 and G+4 Storey Building".`,
        },
        {
          title: `Civil  Engineer  Career  Episode  Sample  2`,
          description: `Covers 1600words in length regarding “Relative Investigation of Dia-Grid Structural and Conventional Structural System”.`,
        },
        {
          title: `Civil  Engineer  Career  Episode  Sample  3`,
          description: `Covers  2000 words in length regarding “Analysis  of Elevated Square Water Tank with Different Staging System”.`,
        },
        {
          title: `Materials  Engineer  Summary  Statement  Sample`,
          description: `A clear description of each competence element in 2500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> “Structural Analysis of G+3 and G+4
              Storey Building”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong>
                {" "}
                “Structural Analysis of G+3 and G+4 Storey Building"
              </strong>
              He worked on this project while studying for his Bachelor of Civil
              Engineering in his final year.
              <strong>
                Structural Analysis of G+3 and G+4 Storey Building "
              </strong>
              was the title of the project. The author's Tasks Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              Design and construction of the G+3 and G+4 storey buildings.
              <br />
              <CheckIcon className="me-2" />
              Structural evaluation of the designed building.
              <br />
              <CheckIcon className="me-2" />
              Identifying and analysing pushover hinges on constructing models.{" "}
              <br />
              <CheckIcon className="me-2" />
              Undertake studies on the Titanium extraction procedure by
              electrochemical reduction of Titanium <br />
              <CheckIcon className="me-2" />
              Analysis of the building’s mass irregularities.
              <br />
              <CheckIcon className="me-2" />
              Evaluation of movement and functionality. <br />
              <CheckIcon className="me-2" />
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Relative Investigation of Dia-Grid
              Structural and Conventional Structural System”
              <br />
              Over the Second career episode Report, the author outlines the
              engineering skills he used in the project as part of his Master’s
              degree in Civil Engineering. The project is called <br />
              <strong>
                "Relative Investigation of Dia-Grid Structural and Conventional
                Structural System”.
              </strong>
              <br />
              <strong>The Author's Duties and Resposibilities Include:</strong>
              <CheckIcon className="me-2" />
              Understand and Analysis the structure using ETBAS software. <br />
              <CheckIcon className="me-2" />
              Structural study of the system using various techniques.
              <br />
              <CheckIcon className="me-2" />
              Evaluation of the structure's wind forces.
              <br />
              <CheckIcon className="me-2" />
              Ensure that the ETABS software is authentic and accurate.
              <br />
              <CheckIcon className="me-2" />
              Use ETABS software to analyse the diagrid and conventional framed
              buildings beneath seismic and wind Force. <br />
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Analysis of Elevated Square Water
              Tank with Different Staging System “
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills needed to complete a project during his
              undergraduate program. The project is called{" "}
              <strong>
                “Analysis of Elevated Square Water Tank with Different Staging
                System.”
              </strong>
              <br />
              <br />
              <strong>Writer’s Activities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Use and interpretation of the methodology in SAP 2000.
              <br />
              <CheckIcon className="me-2" />
              Grid definition and modification, diagonal bracing, and inverted V
              bracing.
              <br />
              <CheckIcon className="me-2" />
              Water tank design and Analysis.
              <br />
              <CheckIcon className="me-2" />
              Construct a Water Tank that is both affordable and secure.
              <br />
              <CheckIcon className="me-2" />
              Carry out a detailed analysisof the test results.
              <br />
              <CheckIcon className="me-2" />
              An examination of the behaviour of several staging systems.
            </div>
          ),
        },
      ],
    },
    geotechnicalEngineer: {
      title: `CDR Report Sample for Geotechnical Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/geotechnical-engineer.jpg`,
      secondTitle: `CDR Sample for Geotechnical Engineer`,
      secondTitleSecond: `Geotechnical Engineer: ANZSCO CODE 233212`,
      secondTitleSecondDetails: `CDR Report Sample for Geotechnical Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `	Geotechnical Engineer Career Episode Sample Report 1`,
          description: `Covers 1660 words in length regarding " Mineral Process Modeling and Interpretation Project ".`,
        },
        {
          title: `	Geotechnical Engineer Career Episode Sample Report 2`,
          description: `Covers 1500 words in length regarding “Ajax Project”.`,
        },
        {
          title: `Geotechnical Engineer Career Episode Sample  3`,
          description: `Covers 2035 words in length regarding “Monitoring of water relations of Odra River”.`,
        },
        {
          title: `Geotechnical Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 2985 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> “Mineral Process Modeling and
              Interpretation Project”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong>
                {" "}
                “Mineral Process Modeling and Interpretation Project”
              </strong>
              He worked on this project to partially complete the Department of
              Geoengineering, Mining and Geology requirements.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Calculating the value of the number of ore handled by the plant
              per year.
              <br />
              <CheckIcon className="me-2" />
              Analyze the plant's results for solid concentrations, average
              bubble size, frontal depth, etc.
              <br />
              <CheckIcon className="me-2" />
              Calculate the base case numeric value through the add-in Solver in
              Excel. <br />
              <CheckIcon className="me-2" />
              Calculate the gangue entertainment value and the surface runoff in
              the concentrate and feed. <br />
              <CheckIcon className="me-2" />
              Change the settings of sir recovery, air velocity, and other
              variables to see how they affect the grade rover curve.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Ajax Project”
              <br />
              Over the Second career episode Report, the author outlines the
              engineering skills he used in the project. He worked as an intern
              at KGHM Polska MiedS.A. for two months. The project is called the{" "}
              <strong>" Ajax Project”.</strong>
              <br />
              <strong>The Author's Duties and Resposibilities Include:</strong>
              <CheckIcon className="me-2" />
              Use industry standards for geological information assembly. <br />
              <CheckIcon className="me-2" />
              Assess the Cost model, Block model, and System mass balance.
              <br />
              <CheckIcon className="me-2" />
              Meet the test pattern compaction timetable only with the
              assistance of heavy machinery.
              <br />
              <CheckIcon className="me-2" />
              Explore log core using the DH Logger software. <br />
              <CheckIcon className="me-2" />
              Applying GPS to collect water samples. <br />
              <CheckIcon className="me-2" />
              Perform solid cutting with the support of a Geotechnician. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Monitoring of water relations of
              Odra River “
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills to complete a project during an internship at
              Integrated Management Services Ltd. in Wroclaw, Poland. The
              project is called{" "}
              <strong>“Monitoring of water relations of Odra River”.</strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Discover the characteristics of the research region and examine
              the geology and soil conditions on the bank of the river.
              <br />
              <CheckIcon className="me-2" />
              Examine the hydrological parameters of the selected location and
              evaluate the construction of the current dam.
              <br />
              <CheckIcon className="me-2" />
              Carry out constant moisture in the soil measurements in specified
              soil profiles and document and assess the results.
              <br />
              <CheckIcon className="me-2" />
              Evaluate soil moisture variations and the mechanisms of moisture
              changes using a meteorological analysis of the region.
              <br />
              <CheckIcon className="me-2" />
              Examine the impact of damming the Malcyzce River on the soil
              characteristics in the vicinity.
              <br />
            </div>
          ),
        },
      ],
    },
    transportEngineer: {
      title: `CDR Report Sample for Transport Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/transport-engineer.jpg`,
      secondTitle: `CDR Sample for Transport Engineer`,
      secondTitleSecond: `Transport Engineer: ANZSCO CODE 233215`,
      secondTitleSecondDetails: `CDR Report Sample for Transport Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 1`,
          description: `Covers 1850 words in length regarding " Application of Multi-Hazard Seismic-Blast Detailing for Highway Bridges ".`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 2`,
          description: `Covers 1700 words in length regarding “Vertical Transport Evacuation Modelling”.`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 3:  `,
          description: `Covers 2100 words in length regarding “Increased Span Length for the MGS Long-Span Guardrail System”.`,
        },
        {
          title: `Transport Engineer Summary Statement Sample Report`,
          description: `A clear description of each competence element in 1500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Application of Multi-Hazard
              Seismic-Blast Detailing for Highway Bridges”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong>
                {" "}
                “Application of Multi-Hazard Seismic-Blast Detailing for Highway
                Bridges”.
              </strong>
              The author outlines a project he worked on while pursuing a
              Bachelor’s degree in Transport Engineering.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Evaluate the impact of blast loads on a typical highway bridge in
              the United States.
              <br />
              <CheckIcon className="me-2" />
              Determine frequent factors that cause bridge element destruction.
              <br />
              <CheckIcon className="me-2" />
              Examine the link between seismic design with blast load effects.{" "}
              <br />
              <CheckIcon className="me-2" />
              Examine blast-induced failure processes to show a hypothetical
              bridge target subjected to various levels of seismic loads. <br />
              <CheckIcon className="me-2" />
              Explore the use of seismic design for blast-induced bridge
              structures.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Vertical Transport Evacuation
              Modelling”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilised in a 5-month project he worked
              on as a final-year student. The project is called{" "}
              <strong>"Vertical Transport Evacuation Modelling”.</strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              Evaluate the impact of blast loads on a typical highway bridge in
              the United States. <br />
              <CheckIcon className="me-2" />
              Determine frequent factors that cause bridge element destruction.
              <br />
              <CheckIcon className="me-2" />
              Examine the link between seismic design with blast load effects.
              <br />
              <CheckIcon className="me-2" />
              Examine blast-induced failure processes to show a hypothetical
              bridge target subjected to various levels of seismic loads. <br />
              <CheckIcon className="me-2" />
              Explore the use of seismic design for blast-induced bridge
              structures. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Increased Span Length for the MGS
              Long-Span Guardrail System “
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills needed to complete a project during his
              university study. The project is called{" "}
              <strong>
                “Increased Span Length for the MGS Long-Span Guardrail System”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Conduct a complete analysis of the MGS long-span guardrail system
              using LS-DYNA's finite element software tool.
              <br />
              <CheckIcon className="me-2" />
              Construct and assess the structural capabilities of the MGS
              long-span guardrail system when spanning lengths are extended.
              <br />
              <CheckIcon className="me-2" />
              Obtain the maximum unstable size for the existing long-span
              layout.
              <br />
              <CheckIcon className="me-2" />
              Assess future changes that might result in much extended
              unsupported spans. Fulfil the American Association of State
              Highway and Transportation Officials (AASHTO) Test Level 3 (TL-3)
              safety requirements in their Manual for Assessing Safety Hardware
              (MASH).
              <br />
            </div>
          ),
        },
      ],
    },
    electricalEngineer: {
      title: `CDR Sample for Electrical Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects mayrely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website  are  previously  presented  and  approved  by  EngineersAustralia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/electrical-engineer.jpg`,
      secondTitle: `CDR Sample for Electrical Engineer`,
      secondTitleSecond: `Electrical Engineer: ANZSCO CODE 233311`,
      secondTitleSecondDetails: `CDR Report Sample for Electrical Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 1`,
          description: `Covers 1985 words in length regarding " Mathematical Modelling and Design of IGC".`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 2`,
          description: `Covers 2000 words in length regarding “Design of hybrid PV and Wind Generation system”.`,
        },
        {
          title: `Transport Engineer Career Episode Sample Report 3:  `,
          description: `Covers 1700 words in length regarding “Wireless Pick and Place Robotic Arm”.`,
        },
        {
          title: `Transport Engineer Summary Statement Sample Report`,
          description: `A clear description of each competence element in 1120 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Mathematical Modelling and Design
              of IGC”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong> “Mathematical Modelling and Design of IGC”.</strong>
              The author outlines a project he worked on while pursuing a
              Bachelor’s degree in Electrical and Electronics Engineering.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Choose the appropriate components for the IGC system
              <br />
              <CheckIcon className="me-2" />
              Create the functional block diagram for the system.
              <br />
              <CheckIcon className="me-2" />
              Assemble the multiple aspects by the block diagram. <br />
              <CheckIcon className="me-2" />
              Evaluate the lab-built IGC system with available commercially IGC
              systems. <br />
              <CheckIcon className="me-2" />
              Assess the performance of the fabricated IGC system.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design of hybrid PV and Wind
              Generation system”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilised in a project he completed for
              the award of Masters in Power System and its Automation. The
              project is called the{" "}
              <strong>
                " Design of hybrid PV and Wind Generation system”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              Gather together various hardware and software components for the
              project's design and simulation. <br />
              <CheckIcon className="me-2" />
              Create a model and test a PV system.
              <br />
              <CheckIcon className="me-2" />
              Design and modelling a wind turbine system.
              <br />
              <CheckIcon className="me-2" />
              Utilise and manage a cell for energy storage.
              <br />
              <CheckIcon className="me-2" />
              Create a PV system with a Control scheme. <br />
              <CheckIcon className="me-2" />
              Create a prototype model and evaluate the performance of the
              constructed hybrid model. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> "Wireless Pick and Place Robotic
              Arm "
              <br />
              Over the Third career episode Report, the author outlines the
              Engineering skills needed to complete a project as a senior
              student. The project is called{" "}
              <strong>“Wireless Pick and Place Robotic Arm”.</strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Perform research on the parts used for the robotic arm and the
              programming methods.
              <br />
              <CheckIcon className="me-2" />
              Effectively code in Visual C#, which was the core of the project's
              programming.
              <br />
              <CheckIcon className="me-2" />
              Construct a suitable microcontroller circuit for connecting with
              the RF unit and PC.
              <br />
              <CheckIcon className="me-2" />
              Design and build the project's mechanical component. <br />
              <CheckIcon className="me-2" />
              Perform cost analysis of the project's aspects and expenses.
              <br />
            </div>
          ),
        },
      ],
    },
    electronicsEngineer: {
      title: `CDR Report Sample for Electronics Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects mayrely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All  the  CDR  Sample  Available  on  our  website  are  previously  presented  and  approved  by  EngineersAustralia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/electronics-engineer.jpg`,
      secondTitle: `CDR Sample for Electronics Engineer`,
      secondTitleSecond: `Electronics Engineer: ANZSCO CODE 233411`,
      secondTitleSecondDetails: `CDR Report Sample for Electronics Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 290 words in length.`,
        },
        {
          title: `Electronics Engineer Career Episode Sample Report 1`,
          description: `Covers 1985 words in length regarding " Mathematical Modelling and Design of IGC".`,
        },
        {
          title: `Electronics Engineer Career Episode Sample Report 2`,
          description: `Covers 1630 words in length regarding “Design of hybrid PV and Wind Generation system”.`,
        },
        {
          title: `Electronics Engineer Career Episode Sample Report 3:  `,
          description: `Covers 1515 words in length regarding “Wireless Pick and Place Robotic Arm”.`,
        },
        {
          title: `Electronics Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 1120 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Mathematical Modelling and Design
              of IGC”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong> “Mathematical Modelling and Design of IGC”. </strong>
              The author outlines a project he worked on while pursuing a
              Bachelor’s degree in Electrical and Electronics Engineering.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Choose the appropriate components for the IGC system <br />
              <CheckIcon className="me-2" />
              Create the functional block diagram for the system. <br />
              <CheckIcon className="me-2" />
              Assemble the multiple aspects by the block diagram.
              <br />
              <CheckIcon className="me-2" />
              Evaluate the lab-built IGC system with available commercially IGC
              systems. <br />
              <CheckIcon className="me-2" />
              Assess the performance of the fabricated IGC system.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design of hybrid PV and Wind
              Generation system”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilised in a project he completed for
              the award of Masters in Power System and its Automation. The
              project is called the{" "}
              <strong>
                " Design of hybrid PV and Wind Generation system”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              Gather together various hardware and software components for the
              project's design and simulation. <br />
              <CheckIcon className="me-2" />
              Create a model and test a PV system.
              <br />
              <CheckIcon className="me-2" />
              Design and modelling a wind turbine system.
              <br />
              <CheckIcon className="me-2" />
              Utilise and manage a cell for energy storage.
              <br />
              <CheckIcon className="me-2" />
              Create a PV system with a Control scheme. <br />
              <CheckIcon className="me-2" />
              Create a prototype model and evaluate the performance of the
              constructed hybrid model. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> "Wireless Pick and Place Robotic
              Arm "
              <br />
              Over the Third career episode Report, the author outlines the
              Engineering skills needed to complete a project as a senior
              student. The project is called{" "}
              <strong>“Wireless Pick and Place Robotic Arm”.</strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Perform research on the parts used for the robotic arm and the
              programming methods.
              <br />
              <CheckIcon className="me-2" />
              Effectively code in Visual C#, which was the core of the project's
              programming.
              <br />
              <CheckIcon className="me-2" />
              Construct a suitable microcontroller circuit for connecting with
              the RF unit and PC.
              <br />
              <CheckIcon className="me-2" />
              Design and build the project's mechanical component. <br />
              <CheckIcon className="me-2" />
              Perform cost analysis of the project's aspects and expenses.
              <br />
            </div>
          ),
        },
      ],
    },
    structuralEngineer: {
      title: `CDR Report Sample for Structural Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/structural-engineer.jpg`,
      secondTitle: `CDR Sample for Structural Engineer`,
      secondTitleSecond: `Structural Engineer: ANZSCO CODE 233214`,
      secondTitleSecondDetails: `CDR Report Sample for Structural Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Structural Engineer Career Episode Sample Report 1: `,
          description: `Covers 1775 words in length regarding " Construction of 4 Lane High Level 31.18 m long Bridge".`,
        },
        {
          title: `Structural Engineer Career Episode Sample Report 2:  `,
          description: `Covers 1675 words in length regarding “Analysis of Structural Characteristics of Beam-Column Joints”.`,
        },
        {
          title: `Structural Engineer Career Episode Sample Report 3:   `,
          description: `Covers 1575 words in length regarding “Construction of (2*270) MW Thermal Power Station”.`,
        },
        {
          title: `Structural Engineer Summary Statement Sample: `,
          description: `A clear description of each competence element in 2085 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Construction of 4 Lane High Level
              31.18 m long Bridge”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project
              <strong>
                {" "}
                “Construction of 4 Lane High Level 31.18 m long Bridge”.{" "}
              </strong>
              He worked on this project to partially complete his Bachelor’s
              degree in civil engineering.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Establish the bridge's framework. <br />
              <CheckIcon className="me-2" />
              Perform research studies and enhance the structure. <br />
              <CheckIcon className="me-2" />
              Calculate the loading condition.
              <br />
              <CheckIcon className="me-2" />
              Create a structural design concept.
              <br />
              <CheckIcon className="me-2" />
              Assess the impact of the System.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>: “Analysis of Structural
              Characteristics of Beam-Column Joints”
              <br />
              Over the Second career episode Report, this thesis was written in
              the successful partial completion of the Master of Engineering in
              Civil Engineering program. The project is called the
              <strong>
                "Analysis of Structural Characteristics of Beam-Column Joints”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              Analyse and undertake a comprehensive understanding of the overall
              project and identify the most significant project components.
              Assess the Cost model, Block model, and System mass balance.{" "}
              <br />
              <CheckIcon className="me-2" />
              Conduct critical testing for the experiments. Explore log core
              using the DH Logger software.
              <br />
              <CheckIcon className="me-2" />
              Focus on the fibre specification requirements and test results.
              <br />
              <CheckIcon className="me-2" />
              Check the samples to their maximum load using a hydraulic jack.
              <br />
              <CheckIcon className="me-2" />
              Carry out the test system and explore techniques for calculating
              curvature, deflection, fracture width, ductility factor, and other
              parameters. <br />
              <CheckIcon className="me-2" />
              Examine the entire project and assess the success. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> “Construction of (2*270) MW Thermal
              Power Station “
              <br />
              OOver the Third career episode Report, the author outlines the
              technical skills needed to complete a project during a working
              tenure at a company. The project is called
              <strong>
                “Construction of (2*270) MW Thermal Power Station”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Assess the structure's static and other qualities.
              <br />
              <CheckIcon className="me-2" />
              Study the properties of the materials utilised.
              <br />
              <CheckIcon className="me-2" />
              Construct long-lasting materials.
              <br />
              <CheckIcon className="me-2" />
              Examine and oversee the employees on-site for structural and
              finishing work. <br />
              <CheckIcon className="me-2" />
              Examine and verify the plant's long-term viability.
              <br />
            </div>
          ),
        },
      ],
    },
    industrialEngineer: {
      title: `CDR Report Sample for Industrial Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.`,
      image: `/images/SpecificSample/industrial-engineer.jpg`,
      secondTitle: `CDR Sample for Industrial Engineer`,
      secondTitleSecond: `Industrial Engineer: ANZSCO CODE 233511`,
      secondTitleSecondDetails: `CDR Report Sample for Industrial Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 200 words in length.`,
        },
        {
          title: `Industrial Engineer Career Episode Sample Report 1 `,
          description: `Covers 1700 words in length regarding " Facility design to accommodate production using VIP-PLANOPT".`,
        },
        {
          title: `	Industrial Engineer Career Episode Sample Report 2 `,
          description: `Covers 1600 words in length regarding “Project Life Cycle Trajectories Prediction”.`,
        },
        {
          title: `	Industrial Engineer Career Episode Sample Report 3   `,
          description: `Covers 2600 words in length regarding “Statistical Forecasting and Time Series”.`,
        },
        {
          title: `Industrial Engineer Summary Statement Sample  `,
          description: ` A clear description of each competence element in 2500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Facility design to accommodate
              production using VIP-PLANOPT”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                {" "}
                “Facility design to accommodate production using VIP-PLANOPT”.
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Produce an optimal layout based on total flow cost and choose a
              suitable approach. <br />
              <CheckIcon className="me-2" />
              Analysis layout that you selected by computing the pairwise
              distance and corresponding flow costs <br />
              <CheckIcon className="me-2" />
              Compare the family-based and process-based approaches by keeping
              pros and cons in mind.
              <br />
              <CheckIcon className="me-2" />
              Compute material monitoring devices number.
              <br />
              <CheckIcon className="me-2" />
              Optimise the function cost of the new facility.
              <br />
              <CheckIcon className="me-2" />
              Implement strategies to maximise the efficiency of a new intended
              facility.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>:“Project Life Cycle Trajectories
              Prediction”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilised in a project during his
              bachelor’s studies. The project is called the
              <strong>“Project Life Cycle Trajectories Prediction”.</strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              Complete and good project Review.
              <br />
              <CheckIcon className="me-2" />
              With the Clustering methodology, non-parametric time series
              modelling of the data.
              <br />
              <CheckIcon className="me-2" />
              Using Descriptive aspects effectively analyse the data.
              <br />
              <CheckIcon className="me-2" />
              Choosing the similar characteristics of each cluster.
              <br />
              <CheckIcon className="me-2" />
              Formulate guidelines regarding sales trends with the help of the
              decision tree approach. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Statistical Forecasting and Time
              Series “
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>“Statistical Forecasting and Time Series “.</strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To depict the sales data of diesel and gasoline.
              <br />
              <CheckIcon className="me-2" />
              To analyse the general sales aspect.
              <br />
              <CheckIcon className="me-2" />
              To observe the data using forecasting with different regression
              methods.
              <br />
              <CheckIcon className="me-2" />
              To Execute various strategies by writing R code. <br />
              <CheckIcon className="me-2" />
              To depict graphs for various analysis models.
              <br />
              <CheckIcon className="me-2" />
              To compare the monitoring model and select the best model.
              <br />
            </div>
          ),
        },
      ],
    },
    mechanicalEngineer: {
      title: `CDR Report Sample for Mechanical Engineer`,

      titleDetails: `We CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 
      CDR For Engineer offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      `,
      image: `/images/SpecificSample/mechanical-engineer.jpg`,
      secondTitle: `CDR Sample for Mechanical Engineer`,
      secondTitleSecond: `Mechanical Engineer: ANZSCO CODE 233512`,
      secondTitleSecondDetails: `CDR Report Sample for Mechanical Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 645 words in length.`,
        },
        {
          title: `Mechanical Engineer Career Episode Sample Report 1`,
          description: `Covers 1950 words in length regarding " Design and comparison of Automatic, conventional and conformal cooling channels for injection moulding plastic lid in Autodesk mould flow Insight".".`,
        },
        {
          title: `Mechanical Engineer Career Episode Sample Report 2`,
          description: `Covers 1870 words in length regarding “Determination of a relative equation to find wettability of the material through water contact angle”.`,
        },
        {
          title: `Mechanical Engineer Career Episode Sample 3 `,
          description: `Covers 1641 words in length regarding “Improvement of productivity in shot Blasting Machine”.`,
        },
        {
          title: `Mechanical Engineer Summary Statement Sample `,
          description: `A clear description of each competence element in 3477 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design and comparison of Automatic,
              conventional and conformal cooling channels for injection moulding
              plastic lid in Autodesk mould flow Insight".”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                {" "}
                “Design and comparison of Automatic, conventional and conformal
                cooling channels for injection moulding plastic lid in Autodesk
                mould flow Insight".
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To implement designing injection-moulded plastic elements,
              specifically dustbin lids. <br />
              <CheckIcon className="me-2" />
              To choose Materials for the process of fabrication. <br />
              <CheckIcon className="me-2" />
              To perform analysing, simulating and validating for finding
              different aspects under three other cooling mediums.
              <br />
              <CheckIcon className="me-2" />
              To compute the outcome attained from the simulation method of the
              designed elements. <br />
              <CheckIcon className="me-2" />
              To develop conclusions based on analysed design results. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>:“Project Life Cycle Trajectories
              Prediction”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilised in a project during his master
              of engineering science(Advanced Manufacturing company). The
              project entitled
              <strong>
                “Determination of a relative equation to find wettability of the
                material through water contact angle”
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To explore the factors that influence the contact angle and its
              wettability on numerous materials such as glass
              <br />
              <CheckIcon className="me-2" />
              To examine various methods of measuring the contact angle
              <br />
              <CheckIcon className="me-2" />
              To choose the substance and fluid used in the testing pha
              <br />
              <CheckIcon className="me-2" />
              To possess all the measurement processes to determine the
              droplet's surface area
              <br />
              <CheckIcon className="me-2" />
              To generate a seamless curve trend line from which the polynomial
              equation was obtained <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Improvement of productivity in shot
              Blasting Machine”
              <br />
              Over the Third career episode Report, the author outlines the
              engineering skills to complete the projectas a mandatory task he
              was involved in during his undergraduate program. The project is
              called
              <strong>
                “Improvement of productivity in shot Blasting Machine”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To learn more about shot blasting machines. Its procedure and
              functioning
              <br />
              <CheckIcon className="me-2" />
              To define the project's scope, find out the cause, and propose a
              solution.
              <br />
              <CheckIcon className="me-2" />
              To determine ball wheel patience and quantify execution duration
              and wheel loss
              <br />
            </div>
          ),
        },
      ],
    },
    productionEngineer: {
      title: `CDR Report Sample for production or plant Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 
      CDR For Engineer offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      
      `,
      image: `/images/SpecificSample/production-engineer.jpg`,
      secondTitle: `CDR Sample for production or plant Engineer`,
      secondTitleSecond: `Production of Plant Engineer: ANZSCO CODE 233513`,
      secondTitleSecondDetails: `CDR Report Sample for production or plant Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 500 words in length.`,
        },
        {
          title: `Production or Plant Engineer Career Episode Sample 1`,
          description: `Covers 2070 words in length regarding " Setup of a new manufacturing line called ‘Autoline’ ".`,
        },
        {
          title: `Production or Plant Engineer Career Episode Sample 2`,
          description: `Covers 2075 words in length regarding “Improvement of the process capability Cpk of the Resistance welding of Lean six sigma Green Belt project”.`,
        },
        {
          title: `Production or Plant Engineer Career Episode Sample 3`,
          description: `Covers 2050 words in length regarding “Process design of the cystoscopy ureteral stent Removal device”.`,
        },
        {
          title: `Production or Plant Engineer Summary Statement Sample `,
          description: `Covers a clear description of each competence element in 3370 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>Covers a clear description of each
              competence element in 3370 words in length.
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Setup of a new manufacturing line called ‘Autoline’ ".
              </strong>
              The author outlines a project he worked on while working for a
              Technological Company.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To Take relevant courses and conduct them based on the literature
              reviews for the project. <br />
              <CheckIcon className="me-2" />
              To manage the project of forming a new Autoline from dying to trim
              appropriate methodology for DSO packages. <br />
              <CheckIcon className="me-2" />
              To oversee the end-of-line (EOL) process, including moulding,
              tie-bar cutting, and laser marking.
              <br />
              <CheckIcon className="me-2" />
              To contribute to the line's long-term viability and advancement.{" "}
              <br />
              <CheckIcon className="me-2" />
              To boost the machine's overall performance. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Improvement of the process
              capability Cpk of the Resistance welding of Lean six sigma Green
              Belt project
              <br />
              In the Second career episode Report, the writer describes the
              project in detail while being a production engineer in a medical
              company. The project is called
              <strong>
                “Improvement of the process capability Cpk of the Resistance
                welding of Lean six sigma Green Belt project”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To Identify the scope and purpose of the designated project by
              referring to some of the relevant project works.
              <br />
              <CheckIcon className="me-2" />
              To collect benchmark data about current continuous improvement and
              evaluate it for trending activities.
              <br />
              <CheckIcon className="me-2" />
              To help make sure the product’s stability and predictability.
              <br />
              <CheckIcon className="me-2" />
              To instruct the group on using the Design of Experiment (DOE)
              technique to comply with the requirements.
              <br />
              <CheckIcon className="me-2" />
              To collaborate with outsourcing companies to establish a new
              fixture for the advancement procedure.
              <br />
              <CheckIcon className="me-2" />
              To carry out a comprehensive validation including IQ, OQ, and PQ
              following the protocol.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Process design of the cystoscopy
              ureteral stent Removal device
              <br />
              Over the Third career episode Report, the author outlines the
              project he worked on as a process development (PD) project
              Engineer. The project is called
              <strong>
                “Improvement of productivity in shot Blasting Machine”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To introduce jigs and fixtures to ensure consistency in the
              process.
              <br />
              <CheckIcon className="me-2" />
              To create and implement Transformed Automated Tensioning and
              Crimping.
              <br />
              <CheckIcon className="me-2" />
              Introduce and implement a customised Automated Vision System for
              raw material and finish quality control.
              <br />
              <CheckIcon className="me-2" />
              Participate in product prototyping for process development.
              <br />
              <CheckIcon className="me-2" />
              To assist with creating required documents such as validation
              protocols and other intrinsic documentation.
              <br />
            </div>
          ),
        },
      ],
    },
    miningEngineer: {
      title: `CDR Report Sample for Mining Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineer offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      
      
      `,
      image: `/images/SpecificSample/mining-engineer.jpg`,
      secondTitle: `CDR Sample for Mining Engineer`,
      secondTitleSecond: `Mining Engineer: ANZSCO CODE 233611`,
      secondTitleSecondDetails: `CDR Report Sample for Mining Engineer
      covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 277 words in length.`,
        },
        {
          title: `Mining Engineer Career Episode Sample 1`,
          description: `Covers 2070 words in length regarding " Setup of a new manufacturing line called ‘Autoline’ ".`,
        },
        {
          title: `Mining Engineer Career Episode Sample 2`,
          description: `Covers 1647 words in length regarding “Detail study on central west project and MacArthur River Mine”.`,
        },
        {
          title: `Mining Engineer Career Episode Sample 3`,
          description: `Covers 1619 words in length regarding “Foundations of Mine planning”.`,
        },
        {
          title: `Mining Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 2050 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Modelling an open-pit Limit using
              Excel and VBA”.
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Modelling an open-pit Limit using Excel and VBA”.
              </strong>
              The author outlines a project he worked on as partial fulfilment
              of the Department of Petroleum Engineering for over a week.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To analyse the critical aspects for block values and put the
              formulas to compute these values. <br />
              <CheckIcon className="me-2" />
              To Develop a Model in MS-Excel and VBA Applications to give input.{" "}
              <br />
              <CheckIcon className="me-2" />
              To construct the modelling factors for block values functioning
              and pit modelling calculations.
              <br />
              <CheckIcon className="me-2" />
              To compute and model the final pit online in MS-Excel Application
              and get the ultimate output.
              <br />
              <CheckIcon className="me-2" />
              Authenticate the processed model by crosschecking the layout and
              design with other software methods. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Detail study on the central west
              project and MacArthur River Mine
              <br />
              Over the Second career episode Report, the writer describes the
              project he contributed to under MacArthur River Mine (MRM). The
              project is called the
              <strong>
                “Detail study on the central west project and MacArthur River
                Mine”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To formulate cone for safety and fluent process of the mine.
              <br />
              <CheckIcon className="me-2" />
              To keep updated infrastructure data by maintaining the data of
              each process close to the site.
              <br />
              <CheckIcon className="me-2" />
              To upkeep failure aspects in the geo-tech domain.
              <br />
              <CheckIcon className="me-2" />
              To inspect ore in the geology field.
              <br />
              <CheckIcon className="me-2" />
              To perform quality inspection and QA tasks in the project
              Engineering field.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Foundations of Mine planning
              <br />
              Over the Third career episode Report, the author outlines the
              engineering skills to complete the project as a mandatory task he
              was involved in during his undergraduate program. The project is
              called
              <strong>“Foundations of Mine planning”.</strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To Explore 3D model designs
              <br />
              <CheckIcon className="me-2" />
              To investigate the excellent pre-strip removal without
              compromising coal with certain strip layback angles and widths.
              <br />
              <CheckIcon className="me-2" />
              To analyse the appropriate dragline aspects to use in the
              scenario.
              <br />
              <CheckIcon className="me-2" />
              To Evaluate the best mining elements capabilities to be
              implemented in the design.
              <br />
              <CheckIcon className="me-2" />
              To analyse and evaluate economic achievement or loss.
              <br />
              <CheckIcon className="me-2" />
              To Explain the geology and geotechnical factors of the mine.
              <br />
              <br />
              <CheckIcon className="me-2" />
              To prepare a spreadsheet of NPV computations with cost methods in
              FOB prices.
              <br />
            </div>
          ),
        },
      ],
    },
    petroleumEngineer: {
      title: `
      CDR Report Sample for Petroleum Engineer
      `,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineer offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      `,
      image: `/images/SpecificSample/petroleum-engineer.jpg`,
      secondTitle: `CDR Sample for Petroleum Engineer`,
      secondTitleSecond: `Petroleum Engineer: ANZSCO CODE 233612`,
      secondTitleSecondDetails: `CDR Report Sample for Petroleum Engineer
      covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample under 265 words in length.`,
        },
        {
          title: `Petroleum Engineer Career Episode Sample 1`,
          description: `Covers 2030 words in length regarding “Density control, compressive strength and cost control for cement slurry “.`,
        },
        {
          title: `Petroleum Engineer Career Episode Sample 2`,
          description: `Covers 2020 words in length regarding “Comparative study on the absorbed gas potential for different material”.`,
        },
        {
          title: `Petroleum Engineer Career Episode Sample 3`,
          description: `Covers 1945 words in length regarding “WiMAX process instrumentation and control”.`,
        },
        {
          title: `•	Petroleum Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 2050 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong> Designing and Modelling of
              Horizontal Coalescer
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project "Designing and Modelling of Horizontal Coalescer." He
              worked on this project while studying for his Bachelor of
              Technology degree in ChemicalEngineer.
              <strong>
                “Designing and Modelling of Horizontal Coalescer”.
              </strong>
              was the title of the project. The author's Tasks Includes:
              <br />
              <br />
              <CheckIcon className="me-2" />
              evaluating conventional systems and determining the primary design
              criteria
              <br />
              <CheckIcon className="me-2" />
              Choosing the proper size of the suggested separator.
              <br />
              <CheckIcon className="me-2" />
              Completing the dimensions and physical design of the
              separatorandcomponent selection.
              <br />
              <CheckIcon className="me-2" />
              Locating and applying chemical and biological design treatment.
              <br />
              <CheckIcon className="me-2" />
              Analysing costs and determining a technique for system development
              and optimisation.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong> Reusing Lubricant Oil after
              Purification
              <br />
              Over the Second career episode Report, the author outlines a
              project he did as part of his undergraduate degree called "Reusing
              Lubricant Oil After Purification”. The project focuses on
              purifying and reusing previously used lubricating oil.
              <br />
              <br />
              <strong>The Author's Duties and Resposibilities Include:</strong>
              <CheckIcon className="me-2" />
              Analyse to determine the optimum way of purification of spent
              lubricating oilfrom the different available procedures.
              <br />
              <CheckIcon className="me-2" />
              Examine the feasibility method by evaluating the economics of a
              used lubricating oil purification facility.
              <br />
              <CheckIcon className="me-2" />
              Endeavour to purify leftover lubricating oil collected from a
              variety of Automobiles.
              <br />
              <CheckIcon className="me-2" />
              Put the new machinery in place and commission them.
              <br />
              <CheckIcon className="me-2" />
              Design a schematic illustration of a lubricating oil purification
              process.
              <br />
              <CheckIcon className="me-2" />
              Perform physical and chemical tests on purified lubricating oil
              and analyse the outcomes of previously utilised lubricant oil.
              <br />
              <CheckIcon className="me-2" />
              In lubricating oil, combine the necessary elements.
              <br />
              <CheckIcon className="me-2" />
              Examine the economy andthe cost of setting up a purification
              plant.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong> WiMAX process instrumentation and
              control
              <br />
              Over the Third career episode Report, the author outlines the
              engineering skills to complete the project as a mandatory task he
              was involved in during his undergraduate program. The project is
              called
              <strong>“WiMAX process instrumentation and control”.</strong>
              <br />
              <br />
              <strong>Writer’s Key Responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To select the effective term in amalgamation with the proportional
              element for offering an excellent response to the system changes.
              <br />
              <CheckIcon className="me-2" />
              To obtain and explore the procedure of the PCT 51 and the
              involvement of various elements.
              <br />
              <CheckIcon className="me-2" />
              To test for the on/off control flow or the closed-loop.
              <br />
              <CheckIcon className="me-2" />
              To test the proportional control flow utilising a closed-loop with
              P only and P+I.
              <br />
              <CheckIcon className="me-2" />
              To obtain the graph outcomes and complete the system stability
              with the help of various disturbances.
              <br />
            </div>
          ),
        },
      ],
    },
    aeronauticalEngineer: {
      title: `CDR Report Sample for Aeronautical Engineer`,

      titleDetails: `WE CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineer offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa, so Kindly use the example solely as a guideline but do not copy-paste it.
      
      
      `,
      image: `/images/SpecificSample/aeronautical-engineer.jpg`,
      secondTitle: `CDR Sample for Aeronautical Engineer`,
      secondTitleSecond: `Aeronautical Engineer: ANZSCO CODE 233911`,
      secondTitleSecondDetails: `Aeronautical Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 360 words in length.`,
        },
        {
          title: `Aeronautical Engineer Career Episode Sample 1`,
          description: `Covers 2630 words in length regarding “Designing of landing gear and its linear static Analysis “.`,
        },
        {
          title: `Aeronautical Engineer Career Episode Sample 2`,
          description: `Covers 2500 words in length regarding “Designing of flapping wing mechanism for the use in hovering Vehicles”.`,
        },
        {
          title: `Aeronautical Engineer Career Episode Sample 3`,
          description: `Covers 2535 words in length regarding “Developing Method to design small scale unnamed aircraft”.`,
        },
        {
          title: `Aeronautical Engineer Summary Statement Sample`,
          description: `A description of each competence element in 2225 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>Designing of landing gear and its
              linear static Analysis
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Designing of landing gear and its linear static Analysis”.
              </strong>
              The author outlines a project he worked on when he was a
              third-year student and the first part of his Bachelor’s degree.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To prepare aircraft design calculations. <br />
              <CheckIcon className="me-2" />
              To calculate the height-clearance from the floor of the propeller
              engine is required.
              <br />
              <CheckIcon className="me-2" />
              To compute the permission attachment of gear needed to the
              fuselages and the wings.
              <br />
              <CheckIcon className="me-2" />
              To compute the Nose gear land and main gear load.
              <br />
              <CheckIcon className="me-2" />
              To calculate the shock absorber dimension. <br />
              <CheckIcon className="me-2" />
              To design the landing gear in software.
              <br />
              <CheckIcon className="me-2" />
              To calculate the size of the hole. <br />
              <CheckIcon className="me-2" />
              To prepare the lug design. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Designing of flapping wing mechanism
              for the use in hovering Vehicles
              <br />
              Over the Second career episode Report, the writer describes the
              engineering skills he contributed to complete the project for
              partial fulfilment of the third year and second part of his
              Bachelor’s degree. The project is called the
              <strong>
                “Designing of flapping wing mechanism for the use in hovering
                Vehicles”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To perform designing model using AUTOCAD software.
              <br />
              <CheckIcon className="me-2" />
              To analyse the functioning process in Detail.
              <br />
              <CheckIcon className="me-2" />
              To prepare a dynamical simulation of the flapping system.
              <br />
              <CheckIcon className="me-2" />
              To compare the theoretical data using experimental data obtained
              from the prototype.
              <br />
              <CheckIcon className="me-2" />
              To assume theoretical lift.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Developing Method to design small
              scale unnamed aircraft
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in the internship program during his
              studies. The project is called
              <strong>
                “Developing Method to design small scale unnamed aircraft”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To select different factors in aircraft out of various possible
              outcomes.
              <br />
              <CheckIcon className="me-2" />
              To develop a set of necessities for constructing an outline of the
              design.
              <br />
              <CheckIcon className="me-2" />
              To search out the aircraft configuration.
              <br />
              <CheckIcon className="me-2" />
              To build a conceptual design.
              <br />
              <CheckIcon className="me-2" />
              To outline 3D and AutoCAD in SOLIDWORKS.
              <br />
              <CheckIcon className="me-2" />
              To concentrate on the fabricating process design.
              <br />
              <br />
              <CheckIcon className="me-2" />
              To experiment with the flight from the ultimately gathered
              prototype.
              <br />
            </div>
          ),
        },
      ],
    },
    biomedicalEngineer: {
      title: `CDR Report Sample for Aeronautical Engineer`,

      titleDetails: `We CDR For Engineer is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineer' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineer guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineer offers CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      
      
      `,
      image: `/images/SpecificSample/biomedical-engineer.jpg`,
      secondTitle: `CDR Sample for Biomedical Engineer`,
      secondTitleSecond: `Biomedical Engineer: ANZSCO CODE 233913`,
      secondTitleSecondDetails: `Biomedical Engineer Covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Biomedical Engineer Career Episode Sample 1`,
          description: `Covers 1600 words in length regarding " practicability of intelligent wheelchairs using speech recognition technique”.`,
        },
        {
          title: `Biomedical Engineer Career Episode Sample 2`,
          description: `Covers 1670 words in length regarding “Dealing with the Biomedical signals”.`,
        },
        {
          title: `Biomedical Engineer Career Episode Sample 3`,
          description: `Covers 1700 words in length regarding “Development of an ECG amplifier channel”.`,
        },
        {
          title: `Biomedical Engineer Summary Statement Sample `,
          description: `A clear description of each competence element in 2700 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“practicability of intelligent
              wheelchairs using speech recognition technique”.
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “practicability of intelligent wheelchairs using speech
                recognition technique”.
              </strong>
              The author outlines a project he worked on as partial fulfilment
              of a master of Engineering in Biomedical Engineering.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To carry out research and analysis of relevant literature on the
              project. <br />
              <CheckIcon className="me-2" />
              To organise project tasks.
              <br />
              <CheckIcon className="me-2" />
              To create a voice-controlled system for commercial use in existing
              wheelchairs.
              <br />
              <CheckIcon className="me-2" />
              To create a noise-filtering speech recognition unit.
              <br />
              <CheckIcon className="me-2" />
              To minimise the error interference using a bandpass filter.
              <br />
              <CheckIcon className="me-2" />
              To make use of high-quality microphones and voice sensors.
              <br />
              <CheckIcon className="me-2" />
              To put the designed system into the experiment. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Dealing with the Biomedical signals
              <br />
              Over the Second career episode Report, the writer describes the
              project he contributed to under partial fulfilment of the master’s
              degree in Biomedical Engineering. The project is called{" "}
              <strong>“Dealing with the Biomedical signals”.</strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To amass a valuable and valuable data set for the project. <br />
              <CheckIcon className="me-2" />
              To keep updated infrastructure data by maintaining the data of
              each process close to the site. <br />
              <CheckIcon className="me-2" />
              To perform Temporary Fourier Assessment and Sustained Wavelet
              Transform. <br />
              <CheckIcon className="me-2" />
              To analyse Signals in various motions. <br />
              <CheckIcon className="me-2" />
              To create a DWT filter. <br />
              <CheckIcon className="me-2" />
              To create a DWT filter. <br /> <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Development of an ECG amplifier
              channel
              <br />
              Over the Third career episode Report, the author outlines the
              project he conducted during the fulfilment of his Biomedical
              Engineering. The project is called
              <strong>“Development of an ECG amplifier channel”.</strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To ascertain the standard requirement for the ECG amplifier
              stream. <br />
              <CheckIcon className="me-2" />
              To configure design specifications, perform operations and choose
              the elements for the design. <br />
              <CheckIcon className="me-2" />
              To create additional level shifting characteristics and a suitable
              leg drive circuit. <br />
              <CheckIcon className="me-2" />
              To put the strategy into action and make an ECG amplifier. <br />
              <CheckIcon className="me-2" />
              To put the system through its paces and collect data on its
              effects. <br />
            </div>
          ),
        },
      ],
    },
    engineeringTechnologist: {
      title: `CDR Report Sample for Engineering Technologists`,

      titleDetails: `WE CDR For Engineers is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineers' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineers guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineers offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. So, kindly use the example solely as a guideline but not copy-paste it.
      
      `,
      image: `/images/SpecificSample/engineering-technologist.jpg`,
      secondTitle: `CDR Sample for Engineering Technologists`,
      secondTitleSecond: `Biomedical Engineer: ANZSCO CODE 233913`,
      secondTitleSecondDetails: `Engineering Technologists cover all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Engineering Technologists Career Episode Sample 1`,
          description: `Covers 1890 words in length regarding "Wave Tank-Design and Dimensioning”.`,
        },
        {
          title: `Engineering Technologists Career Episode Sample 2`,
          description: `Covers 2230 words in length regarding “Robotic Exploration of Extreme Environments (ROBEX)”.`,
        },
        {
          title: `Engineering Technologists Career Episode Sample 3`,
          description: `Covers 2790 words in length regarding “Conception, Design and Efficiency Audit of Mechanical Processes for the Separation of Algae from Animal Tank Waters on a Technical Scale”.`,
        },
        {
          title: `Engineering Technologists Summary Statement Sample`,
          description: `A clear description of each competence element in 2700 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>Wave Tank-Design and Dimensioning
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>“Wave Tank-Design and Dimensioning”.</strong>
              The author outlines a project she worked on during her four-year
              Bachelor’s degree in Maritime Technology.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To prepare a Gantt chart and plant for the start and end period of
              the task.
              <br />
              <CheckIcon className="me-2" />
              To develop the water tank for the simulation purpose.
              <br />
              <CheckIcon className="me-2" />
              To develop the water tank for the simulation purpose.
              <br />
              <CheckIcon className="me-2" />
              Develop the tank foundation plate to make the plate surface smooth
              and effective.
              <br />
              <CheckIcon className="me-2" />
              To measure different parameters of the wave with the help of
              sensors.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Robotic Exploration of Extreme
              Environments (ROBEX
              <br />
              Over the Second career episode Report, the writer describes the
              Engineering skills she used in the project during her internship
              program. The project is called
              <strong>
                “Robotic Exploration of Extreme Environments (ROBEX)”..
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To Explore the influence on inductive energy of saltwater and
              lunar regolith at positioning tolerances. <br />
              <CheckIcon className="me-2" />
              To Evaluate the probability of using induction of power with the
              help of coils to transfer the energy in the extreme <br />
              <CheckIcon className="me-2" />
              To manage the experiment to deal with the condition by varying
              various situations, including the channel of functioning and the
              distance between the coils used to make the magnetic field. <br />
              <CheckIcon className="me-2" />
              To observe the drawbacks in the inductivity level with various
              materials varied on the surrounding. <br />
              <CheckIcon className="me-2" />
              To perform a survey regarding power sources practised when
              operating in extreme environmental conditions. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Development of an ECG amplifier
              channel
              <br />
              Over the Third career episode Report, the author outlines the
              project he conducted during the fulfilment of his Biomedical
              Engineering. The project is called
              <strong>“Development of an ECG amplifier channel”.</strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To ascertain the standard requirement for the ECG amplifier
              stream. <br />
              <CheckIcon className="me-2" />
              To configure design specifications, perform operations and choose
              the elements for the design. <br />
              <CheckIcon className="me-2" />
              To create additional level shifting characteristics and a suitable
              leg drive circuit. <br />
              <CheckIcon className="me-2" />
              To put the strategy into action and make an ECG amplifier. <br />
              <CheckIcon className="me-2" />
              To put the system through its paces and collect data on its
              effects. <br />
            </div>
          ),
        },
      ],
    },
    environmentalEngineer: {
      title: `CDR Report Sample for Environmental Engineers`,

      titleDetails: `WE CDR For Engineers is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineers' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineers guarantees that you will receive 100% approval from Engineers Australia. 

      CDR For Engineers offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. So, kindly use the example solely as a guideline but not copy-paste it.
      `,
      image: `/images/SpecificSample/environment-engineer.jpg`,
      secondTitle: `CDR Sample for Environmental Engineers`,
      secondTitleSecond: `Environmental Engineers: ANZSCO CODE 233915`,
      secondTitleSecondDetails: `Environmental Engineers cover all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Environmental Engineers Career Episode Sample 1`,
          description: `Covers 1850 words in length regarding " Hydraulic conductivity, infiltration, and Runoff from No-till and Tilled Cropland”.`,
        },
        {
          title: `Environmental Engineers Career Episode Sample 2`,
          description: `Covers 1700 words in length regarding “Finding Robust solutions against Environmental changes”.`,
        },
        {
          title: `Environmental Engineers Career Episode Sample 3:  `,
          description: `Covers 2100 words in length regarding “Environmentally Friendly pultrusion”.`,
        },
        {
          title: `Environmental Engineers Summary Statement Sample: `,
          description: `A clear description of each competence element in 1500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>Hydraulic conductivity,
              infiltration, and Runoff from No-till and Tilled Cropland
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                ““Hydraulic conductivity, infiltration, and Runoff from No-till
                and Tilled Cropland”.{" "}
              </strong>
              The author outlines a project he worked on for the partial
              fulfilment of his Master of Science degree.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To determine the drawback of slot, ridge and disk planting on the
              satiated hydraulic conductivity in a furrow irrigated domain and
              calculate satiated hydraulic conductivity on dryland tilled and
              no-till plots.
              <br />
              <CheckIcon className="me-2" />
              To perform factors investigation to maximise the satiated
              hydraulic conductivity and minimise runoff.
              <br />
              <CheckIcon className="me-2" />
              Explore centre pivot irrigated tilled and no-till fields to
              determine the limitation of no-till planting on infiltration and
              runoff.
              <br />
              <CheckIcon className="me-2" />
              To investigate four pedotransfer operations methods: crust
              aspects, ROSETTA, an equation mainly used in the water Erosion
              prediction project (WEPP) and soil water features tool (SWC) to
              choose which equation most accurately Explains satiated hydraulic
              conductivity when both tilled and no-till fields are considered.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Finding Robust solutions against
              Environmental changes
              <br />
              Over the Second career episode Report, the writer describes the
              Engineering skills he used in the project during his internship
              program. The project is called
              <strong>
                “Finding Robust solutions against Environmental changes”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To explain ROOT problems and solutions to ROOT. <br />
              <CheckIcon className="me-2" />
              To offer two benchmarks obtained for ROOT.
              <br />
              <CheckIcon className="me-2" />
              To propose a novel algorithm procedure especially for solving
              ROOT.
              <br />
              <CheckIcon className="me-2" />
              To showcase the benefits of the proposed procedure by comparing a
              representative TMO method with an instantiation of the proposed
              framework. <br />
              <CheckIcon className="me-2" />
              To perform a dynamic handling strategy. <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>Environmentally Friendly pultrusion
              <br />
              Over the Third career episode Report, the author outlines the
              technical skills he used to complete the project during the
              fulfilment of his Bachelor’s degree. The project is called
              <strong>“Environmentally Friendly pultrusion”.</strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To construct an environmentally-friendly pultrusion method for
              fibre-reinforced composites production. <br />
              <CheckIcon className="me-2" />
              To determine the composites' physical, thermo-mechanical and
              mechanical properties pultruded.
              <br />
              <CheckIcon className="me-2" />
              To perform and evaluate resin impregnators to make the clean
              pultrusion technique. <br />
              <CheckIcon className="me-2" />
              To design and determine a rig for the lateral spreading of the
              rovings. <br />
              <CheckIcon className="me-2" />
              To showcase the clean extrusion innovation in the laboratory and
              under industrial aspects. <br />
              <CheckIcon className="me-2" />
              To compare the features of the composites obtained with the help
              of clean and conventional extrusion processes.
              <br />
              <CheckIcon className="me-2" />
              To perform an LCA on the clean and conventional pultrusion
              procedure.
              <br />
              <CheckIcon className="me-2" />
              To obtain the best solution for a mechanically based water
              treatment strategy. <br />
              <CheckIcon className="me-2" />
              To determine the best functional aspects (centrifugation number
              and duration) during centrifugation. <br />
              <CheckIcon className="me-2" />
              To distinguish the solid components and reduce the bacteria
              following a low-pressure ultrafiltration process.
              <br />
              <CheckIcon className="me-2" />
              To develop the disc separator.
              <br />
              <CheckIcon className="me-2" />
              To develop the disc separator.
              <br />
            </div>
          ),
        },
      ],
    },
    engineeringProfessionals: {
      title: `CDR Report Sample for Engineering professionals (NEC)`,

      titleDetails: `WE CDR For Engineers is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee. CDR For Engineers' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. CDR For Engineers guarantees that you will receive 100% approval from Engineers Australia. 

CDR For Engineers offers free CDR Report samples on various Engineering occupations that provide a quick reference to understand the rules and requirements of EA while drafting a Perfect CDR Report. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. So, kindly use the example solely as a guideline but not copy-paste it.
`,
      image: `/images/SpecificSample/engineering-professionals.jpg`,
      secondTitle: `CDR Sample for Engineering professionals (NEC)`,
      secondTitleSecond: `Engineering professionals (NEC): ANZSCO CODE 233999`,
      secondTitleSecondDetails: `Engineering professionals (NEC) cover all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Engineering professionals (NEC) Career Episode Sample 1`,
          description: `Covers 2500 words in length regarding "characterisation of casting defects in DC cast magnesium alloys”.`,
        },
        {
          title: `Engineering professionals (NEC) Career Episode Sample 2`,
          description: `Covers 3000 words in length regarding “Development of High Strength A1-Mg2simg Based Alloy for High-Pressure Diecasting process”.`,
        },
        {
          title: `Engineering professionals (NEC) Career Episode Sample 3`,
          description: `Covers 2050 words in length regarding “A cost-effective, mobile platform-based, photogrammetric approach for continuous structural deformation monitoring”.`,
        },
        {
          title: `Engineering professionals (NEC) Summary Statement Sample`,
          description: `It covers a clear description of each competence element in 2500 words.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>Characterisation of casting defects
              in DC cast magnesium alloys
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “characterisation of casting defects in DC cast magnesium
                alloys”.
              </strong>
              The author outlines a project he worked on during his Doctor of
              Engineering and physical sciences degree.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To activate the original production of best quality magnesium
              alloy forging feedstock by Dc casting without incurring extra
              costs.
              <br />
              <CheckIcon className="me-2" />
              To develop a reliable inspection method to benefit the demands of
              the industry.
              <br />
              <CheckIcon className="me-2" />
              To Determine a plan and strategies to minimise the occurrence of
              minor-si defects during production by DC casting.
              <br />
              <CheckIcon className="me-2" />
              To Determine a plan and strategies to minimise the occurrence of
              minor-si defects during production by DC casting.
              <br />
              <CheckIcon className="me-2" />
              To know the ability of the ultrasonic equipment to locate defects
              and offer an assessment of the billet quality.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>Development of High Strength
              A1-Mg2simg Based Alloy for High-Pressure Diecasting process
              <br />
              Over the Second career episode Report, the writer describes the
              Engineering skills he used in the project. The project is called
              <strong>
                “Development of High Strength A1-Mg2simg Based Alloy for
                High-Pressure Diecasting process”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To Explore the limitations of excess Mg additions on the
              microstructure and mechanical aspects of A1-Mg2si alloys and to
              know the relationship between microstructure, solidification, and
              resultant automatic features. <br />
              <CheckIcon className="me-2" />
              To Maximise the composition of a1-Mg2si-mg alloys capable of
              offering high strength with reasonable flexibility. <br />
              <CheckIcon className="me-2" />
              To explore the limitation of manganese addition in the A1-mg2si-mg
              alloy, which can maximise the strength of the alloy without
              minimising the ductility. <br />
              <CheckIcon className="me-2" />
              To explore the limitation of manganese addition in the A1-mg2si-mg
              alloy, which can maximise the strength of the alloy without
              minimising the ductility. <br />
              <CheckIcon className="me-2" />
              To Explore the drawback of impure elements, Fe in particular, on
              the microstructure and mechanical aspects and to know the alloy's
              solidification system and microstructural evolution at various
              stages of impurity and optimise the tolerable level for the
              impurity components. <br />
              <CheckIcon className="me-2" />
              To Explore the effect of heat treatment on the mechanical aspects
              of the alloy. The solution and aging treatment results in the
              microstructure and mechanical elements being considered.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>A cost-effective, mobile
              platform-based, photogrammetric approach for continuous structural
              deformation monitoring”.
              <br />
              Over the Third career episode Report, the author explains the
              project he was involved in and completed for the degree of Doctor
              of Philosophy. The project is called
              <strong>
                “A cost-effective, mobile platform-based, photogrammetric
                approach for continuous structural deformation monitoring.”
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To know the most recently used structural upkeeping measurements
              in civil engineering and determine the specifications for a
              photogrammetric system that could be deployed as a long-term
              structural upkeeping solution. <br />
              <CheckIcon className="me-2" />
              To propose a reasonable cost, in situ photogrammetric upkeeping
              system based on innovative off-the-shelf technology to meet the
              specifications of different structural monitoring software. <br />
              <CheckIcon className="me-2" />
              To implement and experiment with the essential requirements and
              operations proposed in objective two on a mobile platform. <br />
              <CheckIcon className="me-2" />
              To prove the capability of the mobile photogrammetric solution to
              make sure the system’s performance is capable of long-term
              structural upkeeping purposes. <br />
              <CheckIcon className="me-2" />
              To construct an effective SHM system with low-budgeted spending.{" "}
              <br />
            </div>
          ),
        },
      ],
    },
    computerEngineer: {
      title: `CDR sample for Computer Network and Systems Engineer`,

      titleDetails: `WE CDR For Engineers is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDR For Engineers' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA).Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. 
     CDR For Engineers guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
     `,
      image: `/images/SpecificSample/computer-engineer.jpg`,
      secondTitle: `CDR Sample for Computer Network and Systems Engineer`,
      secondTitleSecond: `Computer Network and Systems Engineer: ANZSCO CODE 263111`,
      secondTitleSecondDetails: `CDR Report Sample for Computer Network and Systems Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.`,
        },
        {
          title: `Computer Network and Systems Engineer Career Episode Sample Report 1`,
          description: `Covers 2500 words in length regarding " Peer-to-peer Data Integration Based on Schema ".`,
        },
        {
          title: `Computer Network and Systems Engineer Career Episode Sample Report 2`,
          description: `Covers 3000 words in length regarding “Simulation versus Coding”.`,
        },
        {
          title: `Computer Network and Systems Engineer Career Episode Sample Report 3`,
          description: `Covers 2050 words in length regarding “Extension to MAC 802.11 for Performance Enhancement in MANET”.`,
        },
        {
          title: `Computer Network and Systems Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 2500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Peer-to-peer Data Integration Based
              on Schema”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                : “Peer-to-peer Data Integration Based on Schema”.
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Design, develop and analyze the system
              <br />
              <CheckIcon className="me-2" />
              To analyze the response from various protocol on the model
              provided.
              <br />
              <CheckIcon className="me-2" />
              To explain the implementation of an API that utilizes the AutoMed
              infrastructure for providing capabilities to build systems of this
              nature.
              <br />
              <CheckIcon className="me-2" />
              To extend the AutoMed API to support P2PDI.
              <br />
              <CheckIcon className="me-2" />
              To display working system using API.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Simulation versus Coding”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>“Simulation versus Coding”.</strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To clarify, explain the routes created by a certain routing
              protocol. <br />
              <CheckIcon className="me-2" />
              Understand and denote the routing table convergence implications
              and implicating it. <br />
              <CheckIcon className="me-2" />
              Writing a program to simulate a routing protocol using OPNET
              Modeler.
              <br />
              <CheckIcon className="me-2" />
              To compare round-tip packet delay time for both TCP and UDP
              protocols. <br />
              <CheckIcon className="me-2" />
              To analyze the routing protocol convergence time
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Extension to MAC 802.11 for
              Performance Enhancement in MANET “
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>
                ““Extension to MAC 802.11 for Performance Enhancement in MANET
                “.{" "}
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Improve the amount of data transferred reducing routing overhead
              using the ns-2 network simulator. <br />
              <CheckIcon className="me-2" />
              To improve the communication between MAC 802.11 protocol and
              Dynamic Source Routing (DSR) protocol <br />
              <CheckIcon className="me-2" />
              To use request-for-request-to-send (RRTS) packet for achieving
              synchronization. <br />
              <CheckIcon className="me-2" />
              To implement tracing features to trace the signals received from
              neighboring nodes.
              <br />
              <CheckIcon className="me-2" />
              Perform simulations in both static and mobile scenario with two
              transport protocols (TCP and UDP) for checking the adaptability of
              project in various contexts. <br />
            </div>
          ),
        },
      ],
    },
    telecommunicationsNetworkEngineer: {
      title: `CDR sample for Telecommunications Network Engineer`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results.
      CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      . All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
     `,
      image: `/images/SpecificSample/telecommunications-network-engineer.jpg`,
      secondTitle: `CDR Sample for Telecommunications Network Engineer `,
      secondTitleSecond: `Telecommunications   Network   Engineer: ANZSCO CODE 263311`,
      secondTitleSecondDetails: `CDR Report Sample for Telecommunications Network Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 350 words in length.`,
        },
        {
          title: `Telecommunications Network Engineer Career Episode Sample Report 1`,
          description: `Covers 2308 words in length regarding "Design of Network".`,
        },
        {
          title: `Telecommunications Network Engineer Career Episode Sample Report 2`,
          description: `Covers 2184 words in length regarding “Design and construction of hybrid wireless mesh network”.
          `,
        },
        {
          title: `Telecommunications Network Engineer Career Episode Sample Report 3`,
          description: `Covers 1787 words in length regarding “Long Term Evolution Technology”.`,
        },
        {
          title: `Telecommunications Network Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 1960 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design of Network”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>“Design of Network”.</strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To perform textual review of older projects on network design.
              <br />
              <CheckIcon className="me-2" />
              To select required equipment from objective palette in the
              riverbed software.
              <br />
              <CheckIcon className="me-2" />
              To design and develop three sites; the main site, external far
              site and external near site.
              <br />
              <CheckIcon className="me-2" />
              To determine error before verifying the network.
              <br />
              <CheckIcon className="me-2" />
              To collect results and analyze the output of the project.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design and construction of hybrid
              wireless mesh network”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>
                {" "}
                “Design and construction of hybrid wireless mesh network”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To start task from literature survey from different resources for
              gathering required information. <br />
              <CheckIcon className="me-2" />
              Preparation of AODV protocol for designing simulation network
              model. <br />
              <CheckIcon className="me-2" />
              To design and develop hybrid network protocol for the same network
              in order to compare it with AODV for designing simulation
              protocol.
              <br />
              <CheckIcon className="me-2" />
              To monitor and analyze packet delivery fraction and amount of data
              transferred of the network based on the increasing nodes. <br />
              <CheckIcon className="me-2" />
              To observe and analyze the PDF of simulation model based on
              transmission rates and constant position mobility etc. for both
              HWMP and AODV.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Long Term Evolution Technology “
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called “Long Term Evolution Technology “.
              <strong>
                “Extension to MAC 802.11 for Performance Enhancement in MANET “.{" "}
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To collect information and data about LTE technology and develop a
              draw outline for designing.
              <br />
              <CheckIcon className="me-2" />
              To design antenna with various sections to achieve minimum
              downstream data rate of 10Mbps. <br />
              <CheckIcon className="me-2" />
              To design the antenna without sectoring with a minimum downstream
              data rate of 12 Mbps.
              <br />
              <CheckIcon className="me-2" />
              Using cell planner to design the LTE network to obtain projects
              specification.
              <br />
              <CheckIcon className="me-2" />
              To improve the performance of LTE networks by identifying problems
              by using Dump analysis.
              <br />
              <CheckIcon className="me-2" />
              To test the performance of LTE network by trail and test method.
              <br />
              <CheckIcon className="me-2" />
              To perform various trial and tests to evaluate the performance of
              LTE Networks.
              <br />
            </div>
          ),
        },
      ],
    },
    civilEngineeringDraftsperson: {
      title: `CDR sample for Civil Engineering Draftsperson`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering draftsperson who wants to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results.
      CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
       `,
      image: `/images/SpecificSample/civil-engineering-draftsperson.jpg`,
      secondTitle: `CDR Sample for Civil Engineering Draftsperson`,
      secondTitleSecond: `Civil Engineering Draftsperson: ANZSCO CODE 312211`,
      secondTitleSecondDetails: `CDR Report Sample for Civil Engineering Draftsperson covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering draftsperson Knowledge is clearly outlined in this CPD Report Sample, which would be 150 words in length.`,
        },
        {
          title: `Civil Engineering Draftsperson’s Career Episode Sample Report 1`,
          description: `Covers 1990 words in length regarding "Preparing design and drawings of sanitary drainage and storm-water system pipework".
          `,
        },
        {
          title: `Civil Engineering Draftsperson Career Episode Sample Report 2`,
          description: `Covers 1805 words in length regarding “Preparing plan, section, and details drawings of concrete frame structures of a residential building”.
          `,
        },
        {
          title: `Civil Engineering Draftsperson Career Episode Sample Report 3`,
          description: `Covers 1830 words in length regarding “Drawings and design of plumbing work of a residential building in Tehran, Iran”.`,
        },
        {
          title: `Civil Engineering Draftsperson Summary Statement Sample`,
          description: `A clear description of each competence element in 1730 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Preparing design and drawings of
              sanitary drainage and storm-water system pipework”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>“Peer-to-peer Data Integration Based on Schema”</strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              Using architectural drawing to initiate the setting up of
              background drawings for the sanitary work’s entire layout
              <br />
              <CheckIcon className="me-2" />
              Using AutoCAD to prepare plan layout of different levels of
              sanitary drainage and storm water.
              <br />
              <CheckIcon className="me-2" />
              To develop the sizing of roof, storm water and drains and its
              offsets.
              <br />
              <CheckIcon className="me-2" />
              To organize and manage the size of sanitary and vent riser pipes
              of drainage system.
              <br />
              <CheckIcon className="me-2" />
              Preparation of detailed mapping of oil inceptor, cleanout
              connections and traps of the system.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong> “Preparing plan, section, and
              details drawings of concrete frame structures of a residential
              building”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering draftsperson’s abilities, he utilized in a project
              during his studies. The project is called the
              <strong>
                {" "}
                “Preparing plan, section, and details drawings of concrete frame
                structures of a residential building”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To perform the identification of the perfect positioning and size
              of reinforcement bars <br />
              <CheckIcon className="me-2" />
              To prepare plan and diagram of different slabs and steal bars to
              use in AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To prepare a diagram of foundation plan and present it in section
              diagrams in AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To prepare a well-presented diagram of column section in AutoCAD.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Drawings and design of plumbing
              work of a residential building in Tehran, Iran “
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is
              <strong>
                “Drawings and design of plumbing work of a residential building
                in Tehran, Iran “.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To prepare well mapped layouts of domestic water plumbing using
              architectural plan drawings in AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To prepare mapped layouts of hot and cold water flow using
              AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To prepare mapped layouts of domestic water outlets in AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To identify the size of pipes for hot, cold, domestic water return
              and present in AutoCAD.
              <br />
              <CheckIcon className="me-2" />
              To test the performance of LTE network by trail and test method.
              <br />
              <CheckIcon className="me-2" />
              To perform various trial and tests to evaluate the performance of
              LTE Networks.
              <br />
            </div>
          ),
        },
      ],
    },
    civilEngineeringTechnician: {
      title: `CDR sample for Civil Engineering Technician`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results.
      CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      `,
      image: `/images/SpecificSample/civil-engineering-technician.jpg`,
      secondTitle: `CDR Sample for Civil Engineering Technician`,
      secondTitleSecond: `Civil Engineering Technician: ANZSCO CODE 312212`,
      secondTitleSecondDetails: `CDR Report Sample for Civil Engineering Technician covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.
      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 350 words in length.`,
        },
        {
          title: `Civil Engineering Technician Career Episode Sample Report 1`,
          description: `Covers 2000 words in length regarding "Optical Design and Operation of Wastewater Treatment Plants".
          `,
        },
        {
          title: `Civil Engineering Technician Career Episode Sample Report 2`,
          description: `Covers 1750 words in length regarding “Construction of a solid 3D model of geology in Sardinia using GIS methods”.
          `,
        },
        {
          title: `Civil Engineering Technician Career Episode Sample Report 3`,
          description: `Covers 1620 words in length regarding “Construction of a solid 3D model of geology in Sardinia using GIS methods”.`,
        },
        {
          title: `Civil Engineering Technician Summary Statement Sample`,
          description: `A clear description of each competence element in 1240 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>: “Appropriate Design and Operation
              of Wastewater Treatment Plants”.
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Appropriate Design and Operation of Wastewater Treatment
                Plants”.
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To design operational framework and maintain low cost through
              steady state concept.
              <br />
              <CheckIcon className="me-2" />
              To maintain minimum costing throughout the project using single
              objective function and steady state models.
              <br />
              <CheckIcon className="me-2" />
              To prepare digital operational methodology including connections
              of every process.
              <br />
              <CheckIcon className="me-2" />
              To prepare single objective function with budget, operational cost
              and maintenance cost.
              <br />
              <CheckIcon className="me-2" />
              To select and design perfect peripheries of operation so that the
              operation is effective and cost friendly.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong> : “Construction of a solid 3D model
              of geology in Sardinia using GIS methods”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>
                {" "}
                :“Construction of a solid 3D model of geology in Sardinia using
                GIS methods”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
              To use selective procedures while building in-order to save
              energy. <br />
              <CheckIcon className="me-2" />
              To design building parts with passive house concept to reduce
              energy consumption.
              <br />
              <CheckIcon className="me-2" />
              To design construction compositions into two energy standards for
              selective systems.
              <br />
              <CheckIcon className="me-2" />
              To investigate and evaluate the planned operation and compare it.
              <br />
              <CheckIcon className="me-2" />
              To investigate and evaluate the planned operation and compare it.
              <br />
              <CheckIcon className="me-2" />
              To prepare and provide the passive housing pricing and display the
              energy conservation done.
              <br />
              <CheckIcon className="me-2" />
              To prepare a proposal for the project with time of work and
              detailed costing.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Construction of a solid 3D model of
              geology in Sardinia using GIS methods”.
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>
                “Construction of a solid 3D model of geology in Sardinia using
                GIS methods”.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To perform visual study of the area to be researched
              <br />
              <CheckIcon className="me-2" />
              To present the sample data and how it is scattered in various
              areas so that it supports the result.
              <br />
              <CheckIcon className="me-2" />
              To use GIS and software’s like surfer and voxler so that data
              modification is easier.
              <br />
              <CheckIcon className="me-2" />
              To collect concentrated data for studying geology and mineralogy
              of the area.
              <br />
              <CheckIcon className="me-2" />
              To collect concentrated data for studying geology and mineralogy
              of the area.
              <br />
              <CheckIcon className="me-2" />
              To monitor and direct day to day activities of the project.
              <br />
            </div>
          ),
        },
      ],
    },
    electricalEngineeringTechnician: {
      title: `CDR sample for Electrical Engineering Technician`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results.
      CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
      `,
      image: `/images/SpecificSample/electrical-engineering-technician.jpg`,
      secondTitle: `CDR Sample for Electrical Engineering Technician `,
      secondTitleSecond: `Electrical Engineering Technician: ANZSCO CODE 312312`,
      secondTitleSecondDetails: `CDR Report Sample for Electrical Engineering Technician covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.

      `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 1000 words in length.
          `,
        },
        {
          title: `Electrical Engineering Technician Career Episode Sample Report 1`,
          description: ` Covers 2100 words in length regarding " Optimal Allocation of Static and Dynamic Reactive Power Support for Enhancing Power System Security ".
          `,
        },
        {
          title: `Electrical Engineering Technician Career Episode Sample Report 2`,
          description: `Covers 1850 words in length regarding “Evaluation of Microwave Microscopy for Dielectric Characterization”.
          `,
        },
        {
          title: `Electrical Engineering Technician Career Episode Sample Report 3`,
          description: `Covers 2047 words in length regarding “Integrating Plug-In Electric Vehicles into the Electric Power System”.`,
        },
        {
          title: `Electrical Engineering Technician Summary Statement Sample`,
          description: `A clear description of each competence element in 2500 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>: “Optimal Allocation of Static and
              Dynamic Reactive Power Support for Enhancing Power System
              Security”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Optimal Allocation of Static and Dynamic Reactive Power Support
                for Enhancing Power System Security”
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To determine the degree and nature of voltage problems
              <br />
              <CheckIcon className="me-2" />
              To identify contingencies and vulnerable connections to maintain
              power supply
              <br />
              <CheckIcon className="me-2" />
              To develop a method to determine perfect locations with reduced
              complexity.
              <br />
              <CheckIcon className="me-2" />
              To develop methods for ideal allocation of static and dynamic VAR
              sources for single contingency.
              <br />
              <CheckIcon className="me-2" />
              To develop a method to reduce complexity and ideal allocation of
              static and dynamic VAR source for multiple severe contingencies
              considered simultaneously
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Evaluation of Microwave Microscopy
              for Dielectric Characterization”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>
                {" "}
                “Evaluation of Microwave Microscopy for Dielectric
                Characterization”.
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
               To develop calculations and measurements of standard samples.
              <br />
              <CheckIcon className="me-2" />
              To implement the process of measurement of dielectric samples.
              <br />
              <CheckIcon className="me-2" />
               To check coupling coefficient and its effects.
              <br />
              <CheckIcon className="me-2" />
               To show the uncertainty in measurement of the permittivity of
              bulk samples.
              <br />
              <CheckIcon className="me-2" />
              To show the limitations of image charge model for the project
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Construction of a solid 3D model of
              geology in Sardinia using GIS methods”.
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>
                “Integrating Plug-In Electric Vehicles into the Electric Power
                System “.
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
               To study and predict electric energy and power consumption by
              electric vehicles or PEVs.
              <br />
              <CheckIcon className="me-2" />
               To study in detail about the technologies used for grid-to-grid
              vehicle power transfer.
              <br />
              <CheckIcon className="me-2" />
               To prepare working structure for routine and distribution of
              electric power by PEVS.
              <br />
              <CheckIcon className="me-2" />
               To study the impact of distribution system from electric vehicles
              under aggregator control.
              <br />
              <CheckIcon className="me-2" />
               To study the power distribution pricing and how it impacts the
              electric vehicle owners.
              <br />
              <CheckIcon className="me-2" />
              To design and develop low capacity PEVs for long life and national
              distributing plans.
              <br />
              <CheckIcon className="me-2" />
              To monitor and direct day to day activities of the project.
              <br />
            </div>
          ),
        },
      ],
    },
    telecommunicationsFieldEngineer: {
      title: `CDR sample for Telecommunications Field Engineer`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. 
     CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
     `,
      image: `/images/SpecificSample/telecommunications-field-engineeer.jpg`,
      secondTitle: `CDR Sample for Telecommunications Field Engineer`,
      secondTitleSecond: `Telecommunications Field Engineer: ANZSCO CODE 263111`,
      secondTitleSecondDetails: `CDR Report Sample for Telecommunications Field Engineer covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report. `,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 320 words in length.
          `,
        },
        {
          title: `Telecommunications Field Engineer Career Episode Sample Report 1`,
          description: ` Covers 2150 words in length regarding "DSLAM - CEN migration, network design, implementation, configuration and integration of IP network".".
          `,
        },
        {
          title: `Telecommunications Field Engineer Career Episode Sample Report 2`,
          description: `Covers 1900 words in length regarding “Mobile network setup, site planning, hardware installation planning”.
          `,
        },
        {
          title: `Telecommunications Field Engineer Career Episode Sample Report 3`,
          description: `Covers 2070 words in length regarding “Banking project: operation and network maintenance support, hardware support, configuration management and migration support”.`,
        },
        {
          title: `Telecommunications Field Engineer Summary Statement Sample`,
          description: `A clear description of each competence element in 1190 words in length.`,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>: : “DSLAM - CEN migration, network
              design, implementation, configuration and integration of IP
              network”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “DSLAM - CEN migration, network design, implementation,
                configuration and integration of IP network”
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To analysis and collect required information of CEN for devices
              with LTE services.
              <br />
              <CheckIcon className="me-2" />
              To distribute resources like IP address and bandwidth, priorities
              DSLAM customers.
              <br />
              <CheckIcon className="me-2" />
              To perform configuration of new components.
              <br />
              <CheckIcon className="me-2" />
              To perform configuration of hardware’s, analyze them so that it
              contributes in the networking.
              <br />
              <CheckIcon className="me-2" />
              To perform test of customer traffic after migration and network
              performance.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Mobile network setup, site
              planning, hardware installation planning”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>
                {" "}
                “Mobile network setup, site planning, hardware installation
                planning”
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
               To prepare and implement project management method to perform
              effectively.
              <br />
              <CheckIcon className="me-2" />
              To prepare detailed network diagram and define associated sites.
              <br />
              <CheckIcon className="me-2" />
               To distribute resources to sites as per the requirement of
              network architecture.
              <br />
              <CheckIcon className="me-2" />
               To perform IP configuration while installation of hardware with
              cooperation with field team.
              <br />
              <CheckIcon className="me-2" />
              To perform the day-to-day update of daily project report and
              maintain activities.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Banking project: operation and
              network maintenance support, hardware support, configuration
              management and migration support “
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>
                “Banking project: operation and network maintenance support,
                hardware support, configuration management and migration support
                “
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To perform work for maximum network performance by solving network
              problems.
              <br />
              <CheckIcon className="me-2" />
              To perform maintenance of information, data and package to operate
              in specific bandwidth range.
              <br />
              <CheckIcon className="me-2" />
              To perform support for remote on-site engineers during
              installation.
              <br />
              <CheckIcon className="me-2" />
              To provide 24-7 on-call support with customers through various
              medium.
              <br />
              <CheckIcon className="me-2" />
              To perform meeting among group and figure out work progress by
              preparing reports.
              <br />
            </div>
          ),
        },
      ],
    },
    electricalEngineeringDraftsperson: {
      title: ` sample for Electrical Engineering Draftsperson`,

      titleDetails: `WE CDRXperts is also renowned as Australia's top CDR writing service provider. Our skilled writers with engineering backgrounds prepare your high-quality CDR Report in a short time and at a very reasonable fee.
      CDRXperts' professional writers are familiar with the guidelines and criteria outlined in the Migration Skill Assessment (MSA) booklet by Engineers Australia (EA). Engineering applicants who want to relocate to Australia for better employment prospects may rely on us since we are a CDR writing service provider that delivers results. 
     CDRXperts guarantees that you will receive 100% approval from Engineers Australia. All the CDR Sample Available on our website are previously presented and approved by Engineers Australia for a Skilled Migration Visa. Kindly use the example solely as a guideline but do not copy-paste it.
     `,
      image: `/images/SpecificSample/electrical-engineering-draftsperson.jpg`,
      secondTitle: `CDR Sample for Electrical Engineering Draftsperson`,
      secondTitleSecond: ` Electrical Engineering Draftsperson: ANZSCO CODE 312311`,
      secondTitleSecondDetails: `CDR Report Sample for Electrical Engineering Draftsperson covers all required reports, including All Three Career Episodes Report, Continuing Professional Development (CPD) Report, Summary Statement Report, and a Curriculum Vitae- CV Report.`,
      steps: [
        {
          title: `CV or Curriculum Vitae`,
          description: `Resume preparation relies on the professional format.`,
        },
        {
          title: `Continuing   Professional Development   (CPD)   Sample   Report`,
          description: `The author's Engineering Knowledge is clearly outlined in this CPD Report Sample, which would be 400 words in length. `,
        },
        {
          title: `Electrical Engineering Draftsperson Career Episode Sample Report 1`,
          description: `: Covers 1850 words in length regarding "Emissions Detector for Pinpointing the Urban Environment for Energized Objects".
          `,
        },
        {
          title: `Electrical Engineering Draftsperson Career Episode Sample Report 2`,
          description: `Covers 1780 words in length regarding “Determination of framework for the reliability of Nano-Scale Semiconductor Device (MOS)”.
          `,
        },
        {
          title: `Electrical Engineering Draftsperson Career Episode Sample Report 3`,
          description: `:  Covers 2200 words in length regarding “Design, Manufacture, and Assembly of a Flexible Thermoelectric Device”.`,
        },
        {
          title: `Electrical Engineering Draftsperson Summary Statement Sample`,
          description: `A clear description of each competence element in 1360 words in length.
          `,
        },
      ],
      fancySteps: [
        {
          title: `CDR Sample 1`,
          details: (
            <div>
              <strong>Project Name:</strong>“Emissions Detector for Pinpointing
              the Urban Environment for Energized Objects”
              <br />
              <br />
              Over the first career episode Report, the author explains the
              project:
              <strong>
                “Emissions Detector for Pinpointing the Urban Environment for
                Energized Objects”
              </strong>
              The author outlines a project he worked on while completing his
              undergraduate coursework.{" "}
              <strong>The author's responsibilities Includes:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To prepare future analysis of location and potential problems.
              <br />
              <CheckIcon className="me-2" />
              To use advanced technology for creating more capable and
              production ready systems.
              <br />
              <CheckIcon className="me-2" />
              To predict the saving from contact voltage detector by using
              various project variables.
              <br />
              <CheckIcon className="me-2" />
              To determine the supplier of energy present within a fixed radius.
              <br />
              <CheckIcon className="me-2" />
              To design the handheld detector to detect two conditions: arcing,
              and false positives created by an electric source like switch-mode
              power supplies for neon signs.
              <br />
              <CheckIcon className="me-2" />
              To design and develop handheld electricity/power detectors and
              specialize in two conditions i.e., arcing and false positives.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 2`,
          details: (
            <div>
              <strong>Project Name:</strong>“Determination of framework for the
              reliability of Nano-Scale Semiconductor Device (MOS)”
              <br />
              Over the Second career episode Report, the writer describes the
              engineering abilities he utilized in a project during his
              bachelor’s studies. The project is called the
              <strong>
                “Determination of framework for the reliability of Nano-Scale
                Semiconductor Device (MOS)”
              </strong>
              <br />
              <strong>The Author’s Duties and Responsibilities Include:</strong>
              <CheckIcon className="me-2" />
               To design and develop operating framework for small scale
              dielectric companies using Metallic Oxide Semiconductor (MOS)
              devices.
              <br />
              <CheckIcon className="me-2" />
              To create a model and explaining reliability of currently
              developed gate dielectrics of Si-MOS devices.
              <br />
              <CheckIcon className="me-2" />
              To evaluate and determine the failure of high-k gates based on SI
              Stress.
              <br />
              <CheckIcon className="me-2" />
              To develop similar 3D failure to record data similar to actual
              failure.
              <br />
            </div>
          ),
        },
        {
          title: `CDR Sample 3`,
          details: (
            <div>
              <strong>Project Name:</strong>“Design, Manufacture, and Assembly
              of a Flexible Thermoelectric Device”
              <br />
              Over the Third career episode Report, the author outlines the
              project he was involved in during his undergraduate program. The
              project is called
              <strong>
                “Design, Manufacture, and Assembly of a Flexible Thermoelectric
                Device”
              </strong>
              <br />
              <br />
              <strong>Writer’s Duties and Responsibilities Include:</strong>
              <br />
              <br />
              <CheckIcon className="me-2" />
              To design and develop flexible and warble thermoelectric device
              (TED) that cha changes up to 150 F temperature in 10 seconds with
              proper section between human and device.
              <br />
              <CheckIcon className="me-2" />
              To design and develop visual heat transfer model to insure
              performance.
              <br />
              <CheckIcon className="me-2" />
              To assemble components of thermoelectric manually.
              <br />
              <CheckIcon className="me-2" />
              To design and develop big scale device to monitor thermoelectric
              behavior.
              <br />
              <CheckIcon className="me-2" />
              Using thermoelectric devices to investigate the difference in
              input of heat from small and large area of body.
              <br />
            </div>
          ),
        },
      ],
    },
  };
  const resSampleData = sampleData?.data;
  // console.log("sameple", sampleData);

  return (
    <div>
      {router.isFallback || resSampleData === null ? (
        <>
          {" "}
          <>
            {name === "engineering-manager" && (
              <Head>
                <title>
                  CDR Sample For Engineering Manager | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Sample For Engineering Manager | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "chemical-engineer" && (
              <Head>
                <title>
                  CDR Sample for Chemical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Sample for Chemical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "material-engineer" && (
              <Head>
                <title>
                  CDR Samples For Material Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Material Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "civil-engineer" && (
              <Head>
                <title>CDR Samples For Civil Engineer | CDR For Engineer</title>
                <meta
                  name="description"
                  content="CDR Samples For Civil Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "geotechnical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Geotechnical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Geotechnical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "structural-engineer" && (
              <Head>
                <title>
                  CDR Samples For Structural Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Structural Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "transport-engnieer" && (
              <Head>
                <title>
                  CDR Samples For Transport Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Transport Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "electrical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Electrical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electrical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "electronics-engineer" && (
              <Head>
                <title>
                  CDR Samples For Electronics Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electronics Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "industrial-engineer" && (
              <Head>
                <title>
                  CDR Samples For Industrial Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Industrial Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "mechanical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Mechanical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Mechanical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "production-engineer" && (
              <Head>
                <title>
                  CDR Samples For Production or Plant Engineer | CDR For
                  Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Production or Plant Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "mining-engineer" && (
              <Head>
                <title>
                  CDR Samples For Mining Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Mining Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "petroleum-engineer" && (
              <Head>
                <title>
                  CDR Samples For Petroleum Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Petroleum Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "aeronautical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Aeronautical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Aeronautical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "biomedical-engineer" && (
              <Head>
                <title>
                  CDR Samples For Biomedical Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Biomedical Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "engineering-technologist" && (
              <Head>
                <title>
                  CDR Samples For Engineering Techonologist | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Engineering Techonologist | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "environmental-engineer" && (
              <Head>
                <title>
                  CDR Samples For Environmental Engineer | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Environmental Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "engineering-professionals" && (
              <Head>
                <title>
                  CDR Samples For Engineering Professionals | CDR For Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Engineering Professionals | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "computer-network-and-system-engineer" && (
              <Head>
                <title>
                  CDR Samples For Computer Network and System Engineer | CDR For
                  Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Computer Network and System Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "telecommunication-engineer" && (
              <Head>
                <title>
                  CDR Samples For Telecommuninication Field Engineer | CDR For
                  Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Telecommuninication Field Engineer | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}

            {name === "electrical-engineering" && (
              <Head>
                <title>
                  CDR Samples For Electrical Engineering Draftsperson | CDR For
                  Engineer
                </title>
                <meta
                  name="description"
                  content="CDR Samples For Electrical Engineering Draftsperson | CDR For Engineer"
                />
                <link rel="canonical" href={canonicalUrl} />
              </Head>
            )}
          </>
          <Hero
            title="Engineers Australia approved 
CDR samples for Engineers."
            details="Your professional assistance for CDR report in Migration Skills 
Assessment from Engineers Australia. Speak with our experts 
to avoid possible rejections."
          />
          <>
            {name === "engineering-manager" && (
              <>
                <CDRSample
                  title={allSamples.engineeringManager.title}
                  titleDetails={allSamples.engineeringManager.titleDetails}
                  image={allSamples.engineeringManager.image}
                  secondTitle={allSamples.engineeringManager.secondTitle}
                  secondTitleSecond={
                    allSamples.engineeringManager.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.engineeringManager.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.engineeringManager.steps} />
                <ReportSamples
                  fancySteps={allSamples.engineeringManager.fancySteps}
                />
              </>
            )}

            {name === "chemical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.chemicalEngineer?.title}
                  titleDetails={allSamples.chemicalEngineer?.titleDetails}
                  image={allSamples.chemicalEngineer?.image}
                  secondTitle={allSamples.chemicalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.chemicalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.chemicalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.chemicalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.chemicalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "material-engineer" && (
              <>
                <CDRSample
                  title={allSamples.materialsEngineer?.title}
                  titleDetails={allSamples.materialsEngineer?.titleDetails}
                  image={allSamples.materialsEngineer?.image}
                  secondTitle={allSamples.materialsEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.materialsEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.materialsEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.materialsEngineer.steps} />
                <ReportSamples
                  fancySteps={allSamples.materialsEngineer.fancySteps}
                />
              </>
            )}

            {name === "civil-engineer" && (
              <>
                <CDRSample
                  title={allSamples.civilEngineer?.title}
                  titleDetails={allSamples.civilEngineer?.titleDetails}
                  image={allSamples.civilEngineer?.image}
                  secondTitle={allSamples.civilEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.civilEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.civilEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.civilEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.civilEngineer?.fancySteps}
                />
              </>
            )}

            {name === "geotechnical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.geotechnicalEngineer?.title}
                  titleDetails={allSamples.geotechnicalEngineer?.titleDetails}
                  image={allSamples.geotechnicalEngineer?.image}
                  secondTitle={allSamples.geotechnicalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.geotechnicalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.geotechnicalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.geotechnicalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.geotechnicalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "structural-engineer" && (
              <>
                <CDRSample
                  title={allSamples.structuralEngineer?.title}
                  titleDetails={allSamples.structuralEngineer?.titleDetails}
                  image={allSamples.structuralEngineer?.image}
                  secondTitle={allSamples.structuralEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.structuralEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.structuralEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.structuralEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.structuralEngineer?.fancySteps}
                />
              </>
            )}

            {name === "transport-engnieer" && (
              <>
                <CDRSample
                  title={allSamples.transportEngineer?.title}
                  titleDetails={allSamples.transportEngineer?.titleDetails}
                  image={allSamples.transportEngineer?.image}
                  secondTitle={allSamples.transportEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.transportEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.transportEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.transportEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.transportEngineer?.fancySteps}
                />
              </>
            )}

            {name === "electrical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.electricalEngineer?.title}
                  titleDetails={allSamples.electricalEngineer?.titleDetails}
                  image={allSamples.electricalEngineer?.image}
                  secondTitle={allSamples.electricalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.electricalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.electricalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.electricalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.electricalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "electronics-engineer" && (
              <>
                <CDRSample
                  title={allSamples.electronicsEngineer?.title}
                  titleDetails={allSamples.electronicsEngineer?.titleDetails}
                  image={allSamples.electronicsEngineer?.image}
                  secondTitle={allSamples.electronicsEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.electronicsEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.electronicsEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.electronicsEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.electronicsEngineer?.fancySteps}
                />
              </>
            )}

            {name === "industrial-engineer" && (
              <>
                <CDRSample
                  title={allSamples.industrialEngineer?.title}
                  titleDetails={allSamples.industrialEngineer?.titleDetails}
                  image={allSamples.industrialEngineer?.image}
                  secondTitle={allSamples.industrialEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.industrialEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.industrialEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.industrialEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.industrialEngineer?.fancySteps}
                />
              </>
            )}

            {name === "mechanical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.mechanicalEngineer?.title}
                  titleDetails={allSamples.mechanicalEngineer?.titleDetails}
                  image={allSamples.mechanicalEngineer?.image}
                  secondTitle={allSamples.mechanicalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.mechanicalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.mechanicalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.mechanicalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.mechanicalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "production-or-plant-engineer" && (
              <>
                <CDRSample
                  title={allSamples.productionEngineer?.title}
                  titleDetails={allSamples.productionEngineer?.titleDetails}
                  image={allSamples.productionEngineer?.image}
                  secondTitle={allSamples.productionEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.productionEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.productionEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.productionEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.productionEngineer?.fancySteps}
                />
              </>
            )}

            {name === "mining-engineer" && (
              <>
                <CDRSample
                  title={allSamples.miningEngineer?.title}
                  titleDetails={allSamples.miningEngineer?.titleDetails}
                  image={allSamples.miningEngineer?.image}
                  secondTitle={allSamples.miningEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.miningEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.miningEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.miningEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.miningEngineer?.fancySteps}
                />
              </>
            )}

            {name === "petroleum-engineer" && (
              <>
                <CDRSample
                  title={allSamples.petroleumEngineer?.title}
                  titleDetails={allSamples.petroleumEngineer?.titleDetails}
                  image={allSamples.petroleumEngineer?.image}
                  secondTitle={allSamples.petroleumEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.petroleumEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.petroleumEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.petroleumEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.petroleumEngineer?.fancySteps}
                />
              </>
            )}

            {name === "aeronautical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.aeronauticalEngineer?.title}
                  titleDetails={allSamples.aeronauticalEngineer?.titleDetails}
                  image={allSamples.aeronauticalEngineer?.image}
                  secondTitle={allSamples.aeronauticalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.aeronauticalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.aeronauticalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.aeronauticalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.aeronauticalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "biomedical-engineer" && (
              <>
                <CDRSample
                  title={allSamples.biomedicalEngineer?.title}
                  titleDetails={allSamples.biomedicalEngineer?.titleDetails}
                  image={allSamples.biomedicalEngineer?.image}
                  secondTitle={allSamples.biomedicalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.biomedicalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.biomedicalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.biomedicalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.biomedicalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "engineering-technologist" && (
              <>
                <CDRSample
                  title={allSamples.engineeringTechnologist?.title}
                  titleDetails={
                    allSamples.engineeringTechnologist?.titleDetails
                  }
                  image={allSamples.engineeringTechnologist?.image}
                  secondTitle={allSamples.engineeringTechnologist?.secondTitle}
                  secondTitleSecond={
                    allSamples.engineeringTechnologist?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.engineeringTechnologist?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.engineeringTechnologist?.steps} />
                <ReportSamples
                  fancySteps={allSamples.engineeringTechnologist?.fancySteps}
                />
              </>
            )}

            {name === "environmental-engineer" && (
              <>
                <CDRSample
                  title={allSamples.environmentalEngineer?.title}
                  titleDetails={allSamples.environmentalEngineer?.titleDetails}
                  image={allSamples.environmentalEngineer?.image}
                  secondTitle={allSamples.environmentalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.environmentalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.environmentalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.environmentalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.environmentalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "engineering-professionals" && (
              <>
                <CDRSample
                  title={allSamples.engineeringProfessionals?.title}
                  titleDetails={
                    allSamples.engineeringProfessionals?.titleDetails
                  }
                  image={allSamples.engineeringProfessionals?.image}
                  secondTitle={allSamples.engineeringProfessionals?.secondTitle}
                  secondTitleSecond={
                    allSamples.engineeringProfessionals?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.engineeringProfessionals
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.engineeringProfessionals?.steps} />
                <ReportSamples
                  fancySteps={allSamples.engineeringProfessionals?.fancySteps}
                />
              </>
            )}

            {name === "computer-network-and-system-engineer" && (
              <>
                <CDRSample
                  title={allSamples.computerEngineer?.title}
                  titleDetails={allSamples.computerEngineer?.titleDetails}
                  image={allSamples.computerEngineer?.image}
                  secondTitle={allSamples.computerEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.computerEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.computerEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.computerEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.computerEngineer?.fancySteps}
                />
              </>
            )}

            {name === "telecommunication-engineer" && (
              <>
                <CDRSample
                  title={allSamples.telecommunicationEngineer?.title}
                  titleDetails={
                    allSamples.telecommunicationEngineer?.titleDetails
                  }
                  image={allSamples.telecommunicationEngineer?.image}
                  secondTitle={
                    allSamples.telecommunicationEngineer?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.telecommunicationEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.telecommunicationEngineer
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.telecommuniactionEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.telecommunicationEngineer?.fancySteps}
                />
              </>
            )}

            {name === "electrical-engineering" && (
              <>
                <CDRSample
                  title={allSamples.electricalEngineer?.title}
                  titleDetails={allSamples.electricalEngineer?.titleDetails}
                  image={allSamples.electricalEngineer?.image}
                  secondTitle={allSamples.electricalEngineer?.secondTitle}
                  secondTitleSecond={
                    allSamples.electricalEngineer?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.electricalEngineer?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.electricalEngineer?.steps} />
                <ReportSamples
                  fancySteps={allSamples.electricalEngineer?.fancySteps}
                />
              </>
            )}

            {name === "telecommunications-network-engineer" && (
              <>
                <CDRSample
                  title={allSamples.telecommunicationsNetworkEngineer?.title}
                  titleDetails={
                    allSamples.telecommunicationsNetworkEngineer?.titleDetails
                  }
                  image={allSamples.telecommunicationsNetworkEngineer?.image}
                  secondTitle={
                    allSamples.telecommunicationsNetworkEngineer?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.telecommunicationsNetworkEngineer
                      ?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.telecommunicationsNetworkEngineer
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps
                  tabItem={allSamples.telecommunicationsNetworkEngineer?.steps}
                />
                <ReportSamples
                  fancySteps={
                    allSamples.telecommunicationsNetworkEngineer?.fancySteps
                  }
                />
              </>
            )}
            {name === "electrical-engineering-technician" && (
              <>
                <CDRSample
                  title={allSamples.electricalEngineeringTechnician?.title}
                  titleDetails={
                    allSamples.electricalEngineeringTechnician?.titleDetails
                  }
                  image={allSamples.electricalEngineeringTechnician?.image}
                  secondTitle={
                    allSamples.electricalEngineeringTechnician?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.electricalEngineeringTechnician
                      ?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.electricalEngineeringTechnician
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps
                  tabItem={allSamples.electricalEngineeringTechnician?.steps}
                />
                <ReportSamples
                  fancySteps={
                    allSamples.electricalEngineeringTechnician?.fancySteps
                  }
                />
              </>
            )}

            {name === "civil-engineering-technician" && (
              <>
                <CDRSample
                  title={allSamples.civilEngineeringTechnician?.title}
                  titleDetails={
                    allSamples.civilEngineeringTechnician?.titleDetails
                  }
                  image={allSamples.civilEngineeringTechnician?.image}
                  secondTitle={
                    allSamples.civilEngineeringTechnician?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.civilEngineeringTechnician?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.civilEngineeringTechnician
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps tabItem={allSamples.civilEngineeringTechnician?.steps} />
                <ReportSamples
                  fancySteps={allSamples.civilEngineeringTechnician?.fancySteps}
                />
              </>
            )}

            {name === "civil-engineering-draftsperson" && (
              <>
                <CDRSample
                  title={allSamples.civilEngineeringDraftsperson?.title}
                  titleDetails={
                    allSamples.civilEngineeringDraftsperson?.titleDetails
                  }
                  image={allSamples.civilEngineeringDraftsperson?.image}
                  secondTitle={
                    allSamples.civilEngineeringDraftsperson?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.civilEngineeringDraftsperson?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.civilEngineeringDraftsperson
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps
                  tabItem={allSamples.civilEngineeringDraftsperson?.steps}
                />
                <ReportSamples
                  fancySteps={
                    allSamples.civilEngineeringDraftsperson?.fancySteps
                  }
                />
              </>
            )}
            {name === "telecommunications-field-engineer" && (
              <>
                <CDRSample
                  title={allSamples.telecommunicationsFieldEngineer?.title}
                  titleDetails={
                    allSamples.telecommunicationsFieldEngineer?.titleDetails
                  }
                  image={allSamples.telecommunicationsFieldEngineer?.image}
                  secondTitle={
                    allSamples.telecommunicationsFieldEngineer?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.telecommunicationsFieldEngineer
                      ?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.telecommunicationsFieldEngineer
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps
                  tabItem={allSamples.telecommunicationsFieldEngineer?.steps}
                />
                <ReportSamples
                  fancySteps={
                    allSamples.telecommunicationsFieldEngineer?.fancySteps
                  }
                />
              </>
            )}
            {name === "electrical-engineer-draftsperson" && (
              <>
                <CDRSample
                  title={allSamples.electricalEngineeringDraftsperson?.title}
                  titleDetails={
                    allSamples.electricalEngineeringDraftsperson?.titleDetails
                  }
                  image={allSamples.electricalEngineeringDraftsperson?.image}
                  secondTitle={
                    allSamples.electricalEngineeringDraftsperson?.secondTitle
                  }
                  secondTitleSecond={
                    allSamples.electricalEngineeringDraftsperson
                      ?.secondTitleSecond
                  }
                  secondTitleSecondDetails={
                    allSamples.electricalEngineeringDraftsperson
                      ?.secondTitleSecondDetails
                  }
                />
                <Steps
                  tabItem={allSamples.electricalEngineeringDraftsperson?.steps}
                />
                <ReportSamples
                  fancySteps={
                    allSamples.electricalEngineeringDraftsperson?.fancySteps
                  }
                />
              </>
            )}
          </>
          <CDRReportAccepted
            title="We are always here to assist you!
        Feel free to contact our friendly team of writers with any questions you have.
        "
            buttonName="Get and Agent to Consult"
            daata="We are always here to assist you!
        Feel free to contact our friendly team of writers with any questions you have.
        "
          />
          <OurFeatures />
        </>
      ) : (
        <>
          <Seo seo={sampleData?.data?.attributes?.seo} />
          <CDRSample
            title={sampleData?.data?.attributes?.content?.title}
            titleDetails={
              sampleData?.data?.attributes?.content?.paragraph &&
              parse(sampleData.data.attributes.content.paragraph)
            }
            image={
              sampleData?.data?.attributes?.content?.image?.data?.attributes
                ?.url
            }
            secondTitle={sampleData?.data?.attributes?.title1}
            secondTitleSecond={sampleData?.data?.attributes?.title2}
            secondTitleSecondDetails={
              sampleData?.data?.attributes?.paragraph &&
              parse(sampleData.data.attributes.paragraph)
            }
          />
          <Steps data={sampleData?.data?.attributes?.steps} />
          <ReportSamples data={sampleData?.data?.attributes?.fancySteps} />
          <CDRReportAccepted
            title="We are always here to assist you!
        Feel free to contact our friendly team of writers with any questions you have.
        "
            buttonName="Get and Agent to Consult"
            daata="We are always here to assist you!
        Feel free to contact our friendly team of writers with any questions you have.
        "
          />
          <OurFeatures />
        </>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const { NEXT_STRAPI_API_URL } = process.env;

  const samples = await fetch(NEXT_STRAPI_API_URL + "cdrsamples?populate=deep");
  const allSamples = await samples.json();
  return {
    paths: allSamples.data.map((sample) => ({
      params: {
        name: sample.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { NEXT_STRAPI_API_URL } = process.env;

  const sample = await fetch(
    NEXT_STRAPI_API_URL + `cdrsamples/${params.name}?populate=deep`
  );
  const sampleData = await sample.json();

  return {
    props: { sampleData: sampleData || "" },
    revalidate: 1,
  };
}

export default SpecificSample;
