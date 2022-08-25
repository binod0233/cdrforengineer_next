import { Col, Container, Row, Ratio } from "react-bootstrap";
import moment from "moment";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

const BlogCard = ({ item }) => {
  return (
    <>
      <div className="col  card-body-hover ">
        <div style={{ height: "100%" }}>
          <Ratio aspectRatio="21x9">
            <img
              src={item?.attributes?.image?.data?.attributes?.url}
              // style={{ width: "100%", height: "100%" }}
            />
          </Ratio>
          <div className=" shadow-sm ">
            <div className="card-body ">
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
                className="card-text random"
                style={{
                  fontFamily: "Century Gothic",
                  fontStyle: "normal",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "25px",
                }}
              >
                {item?.attributes?.title}
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
                Competency Demonstration Report (CDR) is an essential document
                that showcases your engineering skills and Knowledge to meet
                Australian standards. EA is the central authority that examines
                the CDR Report of Engineering Applicants.
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
                  {moment(item?.attributes?.createdAt).fromNow()}
                </small>
                <Link href={`/blogs/${item?.attributes?.slug}`}>
                  <button type="button" className="btn btn-sm shadow-none hide">
                    continue reading <ArrowForwardIcon />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
