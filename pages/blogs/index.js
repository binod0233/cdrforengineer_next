import React, { useState } from "react";
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from "next/head";
import { Container,  Button } from "react-bootstrap";
import Hero from "../../components/Hero";
import PurpleHeading from "../../components/PurpleHeading";
import SearchBox from "../../components/Samples/SearchBox";
import TextParagraph from "../../components/TextParagraph";
import axios from "axios";

const Blogs = () => {
  const router = useRouter();
  const canonicalUrl = (`https://cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  const [data, setData] = useState([]);
 
  const searchBlogs = () =>{

  }

  const tabItem = [
    "All Blogs",
    "Recent Blogs",
    "Skills Assessment",
    "Australian Migration",
    "CDR Service",
  ];
  const changeTab = async(title) => {
      axios
        .get(
          `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrforengineer?type=${title}`
        )
        .then((res) => setData(res.data.blog));
    };

  return (
    <div>
      
     <Head>
        <title>Blogs | CDR For Engineer</title>
        <meta name='description' content="Articles on and about cdr with cdrforengineer | CDR For Engineer"/>
        <link rel="canonical" href={canonicalUrl} />

      </Head>

      <Hero
        title="Check our Blogs written by
Experienced Bloggers
"
        details="Blogs related to CDR Service, Australia Migration & Skill
Assessment. "
      />
      <PurpleHeading title="Home / Blogs" />
      <Container>
        <div className="d-flex justify-content-start align-items-center">
          <div style={{ flex: "0.8", display: "flex" }}>
            {tabItem.map((t,i) => (
              <div key={i} className="d-flex justify-content-center align-items-center ">
                <div
                  className="blogsTabsTitle"
                  style={{
                    color: "#370C64",
                    fontWeight: "700",
                    fontSize: "18px",
                    minWidth: "fit-content",
                    maxWidth: "200px",
                    padding: "5px 12px",
                  }}
                  onClick={(e) => changeTab(t)}
                >
                  {t}
                </div>
              </div>
            ))}
          </div>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{ flex: "0.2" }}
          >
            <SearchBox
              searchBlogs={searchBlogs}
              place="Search by category or keyword"
            />
          </div>
        </div>
        {/* <Row className="mt-5 ">
          {data.map((a, index) => {
            return (
              <Col key={index} md={6} xs={12} className="px-5 py-3">
                <div
                  className="mb-2"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                  }}
                >
                  <Row className="p-0">
                    <img
                      src={a.image}
                      alt="blog"
                      className=" img-fluid rounded"
                      style={{ height: "250px", width: "650px" }}
                    />
                  </Row>
                  <Row className="px-5 my-2">
                    <Col
                      style={{
                        fontFamily: "Arial",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    ></Col>
                    <Col
                      style={{
                        fontFamily: "Arial",
                        fontSize: "12px",
                        fontWeight: "400",
                      }}
                    >
                      <span style={{ float: "right" }}>
                        <i className="fa-solid fa-calendar-range"></i> 3/14/2022
                      </span>
                    </Col>
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center mb-2 px-3">
                    <h1
                      className="purpleHeading"
                      style={{
                        fontSize: "18px",
                        color: "#370C64",
                        fontFamily: "Cambria",
                        fontWeight: "700",
                      }}
                    >
                      {a.title}
                    </h1>
                    <div
                      style={{
                        height: "40px",
                      }}
                    >
                      <p
                        className="textParagraphP"
                        style={{
                          color: "#666666",
                          fontSize: "15px",
                          fontFamily: "Arial",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                        }}
                      >
                        Competency Demonstration Report (CDR) is an essential
                        document that showcases your engineering skills and
                        .....
                      </p>
                    </div>
                  </Row>
                  <Row className="d-flex justify-content-center align-items-center">
                    <Button
                      className="px-4 mb-4"
                      style={{
                        fontSize: "18px",
                        background: "#FA2545",
                        width: "fit-content",
                        borderRadius: "10px",
                        outline: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                      // onClick={() =>
                      //   navigate(
                      //     `/blogs/${a.title
                      //       .split(" (")[0]
                      //       .toLowerCase()
                      //       .replaceAll(" ", "-")}`,
                      //     {
                      //       state: { blog: a },
                      //     }
                      //   )
                      // }
                    >
                      <Link
                        style={{ textDecoration: "none", color: "white" }}
                        state={a}
                        href={`/blogs/${a.title
                          .split(" (")[0]
                          .toLowerCase()
                          .replaceAll(" ", "-")}`}
                      >
                        Read More
                      </Link>
                    </Button>
                  </Row>
                </div>
              </Col>
            );
          })}
        </Row> */}
      </Container>

      <div className="px-5" style={{ background: "#F8F8F8" }}>
        <PurpleHeading title="Hundreds of our clients have received positive approval! Now is your Time !" />
        <TextParagraph
          content="Our main aim is to see our client’s approval for a well-formed report that adheres to the proper guidelines created for the migrants. 
CDRReportWriters offers high-quality service at an affordable price to ensure complete customer satisfaction"
          family="Arial"
        />
        <div className="d-flex justify-content-center align-items-center">
          <Button
            className="px-4 mb-4"
            style={{
              fontSize: "18px",
              background: "#FA2545",
              width: "fit-content",
              borderRadius: "10px",
              outline: "none",
              border: "none",
            }}
            onClick={() => router.push(`/pricing`)}
          >
            Get Pricing Details Here
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;


export const getStaticProps = async() =>{
  
  const dat = axios.get(
    `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrforengineer`
  )
  
  return {
    props: {dat:[]}
  }
}