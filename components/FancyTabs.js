import { useState } from "react";
import { Row } from "react-bootstrap";
const FancyTabs = ({ data }) => {
  const [activeTitle, setActiveTitle] = useState(data[0].title);
  return (
    <Row
      className="ps-0  bg-white my-5"
      style={{ fontSize: "18px", fontFamily: "Arial", fontWeight: "400" }}
    >
      <div
        className="fancyTabsContainer"
        style={{
          display: "flex",
          justifyContent: "start",
          marginTop: "-20px",
          marginBottom: "40px",
          marginLeft: "-20px",
        }}
      >
        {data.map((d, index) => (
          <div key={index}
            className="p-2 mx-2 tabContainer"
            style={{
              background:
                activeTitle === data[index].title ? "white" : "#390D66",
              color: activeTitle === data[index].title ? "#390D66" : "white",
              borderRadius: "10px",
            }}
            onClick={(e) => setActiveTitle(d.title)}
          >
            {d.title}
          </div>
        ))}
      </div>

      <p className="mb-5 ps-5 fancyTabsData">
        {activeTitle === data[0].title && data[0].details}
        {activeTitle === data[1].title && data[1].details}
        {activeTitle === data[2].title && data[2].details}
        {activeTitle === data[3]?.title && data[3]?.details}
        {activeTitle === data[4]?.title && data[4]?.details}
      </p>
    </Row>
  );
};

export default FancyTabs;
