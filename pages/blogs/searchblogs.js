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
import Hero from "../../components/Hero";
import PurpleHeading from "../../components/PurpleHeading";
import SearchBox from "../../components/Samples/SearchBox";
import TextParagraph from "../../components/TextParagraph";
import axios from "axios";
import { jsx } from "@emotion/react";
import Image from "next/image";
import Select from "react-select";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import SearchIcon from "@mui/icons-material/Search";
import moment from "moment";

const getBlogs = async (key) => {
  console.log("getBlogs", key);
  const { titleSlug, searchData } = key.queryKey[1];
  if (titleSlug) {
    //   titleSlug === 1 ? titleSlug : titleSlug * 3;
    const res = await fetch(
      `https://cdrskill.herokuapp.com/api/blogs?filters[title][$containsi]=${titleSlug}&pagination[start]=0&pagination[limit]=5`
    );
    const data = await res.json();
    console.log("consssssssss", titleSlug);
    return data;
  }
  if (searchData) {
    //   titleSlug === 1 ? titleSlug : titleSlug * 3;
    const res = await fetch(
      `https://cdrskill.herokuapp.com/api/blogs?filters[title][$eq]=${searchData}`
    );
    const data = await res.json();
    console.log("searchData", searchData);
    return data;
  }

  //   const res = await fetch(
  //     "https://cdrskill.herokuapp.com/api/blogs?populate=deep"
  //   );
  //   const data = await res.json();
  //   console.log()
  //   return data;
  return null;
};

const SearchBlogs = ({ rdata }) => {
  const [title, setTitle] = useState(null);
  const [searchData, setSearchData] = useState(null);

  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const queryClient = useQueryClient();
  const { data, status, isLoading } = useQuery(
    ["blogs", { titleSlug: title, searchData }],
    getBlogs,
    {
      keepPreviousData: true,
    }
  );

  console.log("title data", status);
  console.log();

  return (
    <div>
      <>
        {/* <Head>
          <title>SearchBlogs | CDR For Engineer</title>
          <meta
            name="description"
            content="Articles on and about cdr with cdrforengineer | CDR For Engineer"
          />
          <link rel="canonical" href={canonicalUrl} />
        </Head> */}
      </>

      <div className="album py-5 ">
        <div className="container">
          <Select
            getOptionLabel={(option) => option.attributes.title}
            getOptionValue={(option) => option.attributes.title}
            options={data?.data}
            isLoading={isLoading}
            instanceId="custom-select"
            placeholder={
              <>
                <SearchIcon style={{ color: "#370C64" }} className="" />
                What are you looking for ?
              </>
            }
            // components={{ DropdownIndicator }}
            onInputChange={(newValue) => setTitle(newValue)}
            onChange={(newValue) => setSearchData(newValue?.attributes?.title)}
          />
          <br />
          <br />

          {status === "loading" && <p>Loading...</p>}
          {status === "error" && <p>Error!</p>}
          {status === "success" && (
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    {data?.data[0]?.attributes?.title}
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
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">
                      {" "}
                      {moment(data?.data[0]?.attributes.createdAt).fromNow()}
                    </small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <h1>Most Searched Blogs</h1>

          <Stack gap={3}>
            <div className="">
              <div className="row">
                <img
                  src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                  // lalyout="fill"
                  // width={20}
                  // height={20}
                  // src="../../public/images/blog/BLOgs3.png"
                  className="col-1"
                  style={{ width: "20%", height: "160px" }}
                />
                <div className=" shadow-sm col">
                  <div className="card-body">
                    <p
                      className="card-text"
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
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#666666",
                      }}
                    >
                      Competency Demonstration Report (CDR) is an essential
                      document that showcases your engineering skills and
                      Knowledge to meet Australian standards. EA is the central
                      authority that examines the CDR Report of Engineering
                      Applicants.
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      <small className="text-muted">9 mins</small>
                      <button type="button" className="btn btn-sm bg-white">
                        continue reading --&gt;
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
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
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
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
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col-1"
                style={{ width: "20%", height: "160px" }}
              />
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
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
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className=" shadow-sm col">
                <div className="card-body">
                  <p
                    className="card-text"
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
                  <p
                    className="card-text"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#666666",
                    }}
                  >
                    Competency Demonstration Report (CDR) is an essential
                    document that showcases your engineering skills and
                    Knowledge to meet Australian standards. EA is the central
                    authority that examines the CDR Report of Engineering
                    Applicants.
                  </p>
                  <div
                    className="d-flex justify-content-between align-items-center"
                    style={{
                      fontFamily: "Arial",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "15px",
                      lineHeight: "17px",
                      color: "#370C64",
                    }}
                  >
                    <small className="text-muted">9 mins</small>
                    <button type="button" className="btn btn-sm bg-white">
                      continue reading --&gt;
                    </button>
                  </div>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/copenned/image/upload/v1658463629/BLOgs3_w1rhg4.png"
                // lalyout="fill"
                // width={20}
                // height={20}
                // src="../../public/images/blog/BLOgs3.png"
                className="col"
                style={{ width: "20%", height: "260px" }}
              />
            </div> */}
          </Stack>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    "https://cdrskill.herokuapp.com/api/blogs?populate=deep"
  );
  const resdata = await res.json();
  return { props: { rdata: resdata } };
}

export default SearchBlogs;
