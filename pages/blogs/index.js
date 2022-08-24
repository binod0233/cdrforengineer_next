import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { Container, Button, Row, Col } from "react-bootstrap";
import Hero from "../../components/Hero";
import PurpleHeading from "../../components/PurpleHeading";
import SearchBox from "../../components/Samples/SearchBox";
import TextParagraph from "../../components/TextParagraph";
import axios from "axios";

const Blogs = () => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const [data, setData] = useState([]);

  const searchBlogs = () => {};

  const tabItem = [
    "All Blogs",
    "Recent Blogs",
    "Skills Assessment",
    "Australian Migration",
    "CDR Service",
  ];
  const changeTab = async (title) => {
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
        <meta
          name="description"
          content="Articles on and about cdr with cdrforengineer | CDR For Engineer"
        />
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
            {tabItem.map((t, i) => (
              <div
                key={i}
                className="d-flex justify-content-center align-items-center "
              >
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
          <div className="p-2 ">
            <Button
              bsPrefix="btn btn2"
              type="checkbox"
              value={"3"}
              className={checked == 3 ? styles.btn2 : styles.btn}
              onClick={(e) => setChecked(e.currentTarget.value)}
            >
              Skill Assessment
            </Button>
          </div>
          <div className="p-2 ">
            <Button
              bsPrefix="btn btn2"
              type="checkbox"
              value={"4"}
              className={checked == 4 ? styles.btn2 : styles.btn}
              onClick={(e) => setChecked(e.currentTarget.value)}
            >
              Australia Migration
            </Button>
          </div>
          {/* <div className="p-2 bd-highlight ">
            <Button variant="customColor" className={styles.customColor}>
              Recent Blogs
            </Button>
          </div>
          <div className="p-2 bd-highlight">
            <ToggleButton
              id="t2"
              type="checkbox"
              value={"two"}
              className={checked == "two" ? styles.btn : styles.btn2}
              onChange={(e) => setChecked(e.currentTarget.value)}
              // checked={checked === 2}
            >
              All Blogs
            </ToggleButton>
          </div>
          <div className="p-2 bd-highlight">
            <ToggleButton
              id="t3"
              type="checkbox"
              value="3"
              className={styles.btn}
              onChange={(e) => setChecked(e.currentTarget.value)}
              checked={checked === 3}
            >
              All Blogsss
            </ToggleButton>
          </div>
          <div className="p-2 bd-highlight"></div> */}

          <div className="ms-auto p-2 bd-highlight">
            <Button
              size="lg"
              style={{
                color: "#370C64",
                backgroundColor: "white",
                border: "none",
              }}
              href="/blogs/searchblogs"
            >
              <SearchIcon style={{ color: "#370C64" }} className="" />
            </Button>
          </div>
        </div>
        <Row className="mt-5 ">
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
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>
                <Figure className="">
                  <Figure.Image
                    width={118}
                    height={110}
                    alt="171x180"
                    src="images/blog/BLOgs-10.png"
                    className="float-sm-start p-md-2"
                  />
                  <Figure.Caption className="">
                    <p
                      className="card-text "
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
                    >
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>{" "}
                <Figure className="">
                  <Figure.Image
                    width={118}
                    height={110}
                    alt="171x180"
                    src="images/blog/BLOgs-10.png"
                    className="float-sm-start p-md-2"
                  />
                  <Figure.Caption className="">
                    <p
                      className="card-text "
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      Australia Migration
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                        color: "#370C64",
                      }}
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
        </Row>
      </Container>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 ">
            {status === "success" &&
              data.data.map((item, index) => {
                {
                  /* setTitle(item.attributes.title); */
                }
                return (
                  <>
                    <div key={item.id}>
                      <BlogCard item={item} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      {/* <Container className="p-1 mb-5">
        <Stack
          direction="horizontal"
          gap={3}
          className="col-md-5 mx-auto position-relative"
        >
          <div className="position-absolute  top-50 start-50 translate-middle">
            <Pagination style={{ color: "red" }} className="link-hover">
              <Button
                onClick={() => setpData(pData - 1)}
                disabled={pData === 1}
                style={{}}
              >
              </Button>
              {items}
              <Pagination.Next
                variant="link"
                className={styles.red}
                onClick={() => setpData(pData + 1)}
                disabled={pData === 4}
              >
                next
              </Pagination.Next>
            </Pagination>
          </div>
        </Stack>
      </Container> */}

      <div
        style={{
          background:
            "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
        }}
      >
        <Row style={{ color: "white" }}>
          <div className="m-5 p-4 col">
            <h5>World-class articles, delivered weekly.</h5>
          </div>
          <Row className="col-md p-5">
            <Form.Control className="col" placeholder="Add your item here..." />
            <Button variant="danger " className="col-4">
              Suscribe
            </Button>
            <div className="p-0 my-1">
              Subscription implies consent to our privacy policy
            </div>
          </Row>
        </Row>
      </div>

      <div className="album py-5 ">
        <div className="container">
          <h2 className="pb-5">Most-read Articles</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {status === "success" &&
              data.data.map((item, index) => {
                {
                  /* setTitle(item.attributes.title); */
                }
                return (
                  <>
                    <div key={item.id}>
                      {index < 3 && <BlogCard item={item} />}
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    "https://cdrforengineer.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=0&pagination[limit]=20&populate=deep"
  );
  const resdata = await res.json();
  return { props: { rdata: resdata } };
}

export default Blogs;

export const getStaticProps = async () => {
  const dat = axios.get(
    `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrforengineer`
  );

  return {
    props: { dat: [] },
  };
};
