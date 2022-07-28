import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import {
  Container,
  Button,
  Row,
  Col,
  Stack,
  Pagination,
  Form,
  Nav,
  ToggleButton,
  Figure,
} from "react-bootstrap";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import moment from "moment";
import BlogCard from "../../components/Blog/BlogCard";
import SearchIcon from "@mui/icons-material/Search";

const getBlogs = async (key) => {
  const keyValue = key.queryKey[1].titleSlug;
  if (keyValue) {
    keyValue === 1 ? keyValue : keyValue * 3;
    const res = await fetch(
      `https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=${keyValue}&pagination[limit]=3&populate=deep`
    );
    const data = await res.json();
    console.log();
    return data;
  }
  const res = await fetch(
    "https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=0&pagination[limit]=3&populate=deep"
  );
  const data = await res.json();
  console.log();
  return data;
};

const Blogs = ({ rdata }) => {
  const [checked, setChecked] = useState(false);
  const [pData, setpData] = useState(1);
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const queryClient = useQueryClient();
  const { data, status } = useQuery(["blogs", { titleSlug: pData }], getBlogs, {
    initialData: rdata,
    keepPreviousData: true,
  });
  console.log();
  let active = pData;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setpData(number)}
        className=" mx-1 rounded-circle"
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div>
      <>
        {/* <Head>
          <title>Blogs | CDR For Engineer</title>
          <meta
            name="description"
            content="Articles on and about cdr with cdrforengineer | CDR For Engineer"
          />
          <link rel="canonical" href={canonicalUrl} />
        </Head> */}
      </>

      <div
        style={{
          background:
            "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
        }}
      >
        <Container>
          <Stack gap={1} style={{ color: "white" }}>
            <div>
              <h1 className="my-5 "> CDRforengineer Blogs</h1>
            </div>
            <div className="pb-5">Home/blog</div>
          </Stack>
        </Container>
      </div>

      <Container>
        <hr className="bg-white border-2 border-top border-danger" />
        <div className="d-flex bd-highlight mb-3 flex-wrap">
          <div className="p-2 bd-highlight allblog">
            <Button
              style={{
                color: "#370C64",
                backgroundColor: "white",
                border: "none",
              }}
            >
              All Blogs
            </Button>
          </div>
          <div className="p-2 bd-highlight ">
            <Button
              style={{
                color: "#370C64",
                backgroundColor: "white",
                border: "none",
              }}
            >
              Recent Blogs
            </Button>
          </div>
          <div className="p-2 bd-highlight">Flex item</div>
          <div className="p-2 bd-highlight">Flex item</div>
          <div className="p-2 bd-highlight">Flex item</div>

          <div className="ms-auto p-2 bd-highlight">
            <Button
              size="lg"
              style={{
                color: "#370C64",
                backgroundColor: "white",
                border: "none",
              }}
              active
            >
              <SearchIcon style={{ color: "#370C64" }} className="" />
            </Button>
          </div>
        </div>

        <hr className="bg-white border-2 border-top border-danger" />
        <Row>
          <Col lg={true}>
            <BlogCard item={data.data[1]} />
          </Col>
          <Col>
            <Stack gap={3}>
              <div className="">
                <h6 style={{ color: "#370C64" }}>Send us a Mail</h6>{" "}
                <Form.Control
                  className="float-sm-start"
                  placeholder="Enter your mail..."
                  style={{ width: "70%" }}
                />
                <Button style={{ backgroundColor: "#370C64" }}>
                  contact us
                </Button>
              </div>
              <div className="">
                <h6 style={{ color: "#370C64" }}>Most Popular</h6>{" "}
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
                      Best CDR writing services for engineers Australia{" "}
                    </p>
                  </Figure.Caption>
                </Figure>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>

      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {status === "success" &&
              data.data.map((item, index) => {
                {
                  /* setTitle(item.attributes.title); */
                }
                return (
                  <>
                    <div key={item.id}>
                      <BlogCard item={item} />
                      <br />

                      <BlogCard item={item} />
                      <br />

                      <BlogCard item={item} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>

      <Container className="p-1 mb-5">
        <Stack
          direction="horizontal"
          gap={3}
          className="col-md-5 mx-auto position-relative"
        >
          <div className="position-absolute  top-50 start-50 translate-middle">
            <Pagination style={{ color: "red" }} className="link-hover">
              <Pagination.Prev
                className=" mx-5  "
                onClick={() => setpData(pData - 1)}
                disabled={pData === 1}
              >
                previous
              </Pagination.Prev>
              {items}
              <Pagination.Next
                className=" mx-5 "
                onClick={() => setpData(pData + 1)}
                disabled={pData === 4}
              >
                next
              </Pagination.Next>
            </Pagination>
          </div>
        </Stack>
      </Container>

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
                      <BlogCard item={item} />
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <p>custom d</p>
      <style jsx>{``}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://cdrskill.herokuapp.com/api/blogs?sort[0]=id&pagination[start]=0&pagination[limit]=3&populate=deep"
  );
  const resdata = await res.json();
  return { props: { rdata: resdata } };
}

export default Blogs;

// export const getStaticProps = async () => {
//   const dat = axios.get(
//     `https://cdrdashboardbackend.herokuapp.com/api/blogs/blog-list/cdrforengineer`
//   );

//   return {
//     props: { dat: [] },
//   };
// };
