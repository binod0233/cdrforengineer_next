import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import SampleCard from "./SampleCard";
import SearchBox from "./SearchBox";

const HighQualityCDRSamples = () => {
  const samples = [
    {
      image: "/images/Samples/engineering-manager.jpg",
      code: "ANZSCO 133211",
      field: "Engineering Manager",
      link: "/cdr-samples/engineering-manager",
    },
    {
      image: "/images/Samples/chemical-engineer.jpg",
      code: "ANZSCO 233111",
      field: "Chemical Engineer",
      link: "/cdr-samples/chemical-engineer",
    },
    {
      image: "/images/Samples/material-engineer.jpg",
      code: "ANZSCO 233112",
      field: "Materials Engineer",
      link: "/cdr-samples/material-engineer",
    },
    {
      image: "/images/Samples/civil-engineer.png",
      code: "ANZSCO 233211",
      field: "Civil Engineer",
      link: "/cdr-samples/civil-engineer",
    },
    {
      image: "/images/Samples/geotechnical-engineer.png",
      code: "ANZSCO 233212",
      field: "Geotechnical Engineer",
      link: "/cdr-samples/geotechnical-engineer",
    },
    {
      image: "/images/Samples/structural-engineer.png",
      code: "ANZSCO 233511",
      field: "Structural Engineer",
      link: "/cdr-samples/structural-engineer",
    },
    {
      image: "/images/Samples/transport-engineer.png",
      code: "ANZSCO 233215",
      field: "Transport Engineer",
      link: "/cdr-samples/transport-engineer",
    },
    {
      image: "/images/Samples/electrical-engineer.png",
      code: "ANZSCO 233311",
      field: "Electrical Engineer",
      link: "/cdr-samples/electrical-engineer",
    },
    {
      image: "/images/Samples/electronics-engineer.png",
      code: "ANZSCO 233411",
      field: "Electronics Engineer",
      link: "/cdr-samples/electronics-engineer",
    },
    {
      image: "/images/Samples/industrial-engineer.png",
      code: "ANZSCO 233511",
      field: "Industrial Engineer",
      link: "/cdr-samples/industrial-engineer",
    },
    {
      image: "/images/Samples/mechanical-engineer.png",
      code: "ANZSCO 233512",
      field: "Mechanical Engineer",
      link: "/cdr-samples/mechanical-engineer",
    },
    {
      image: "/images/Samples/production-or-plant-engineer.png",
      code: "ANZSCO 233513",
      field: "Production or Plant Engineer",
      link: "/cdr-samples/production-or-plant-engineer",
    },
    {
      image: "/images/Samples/mining-engineer.png",
      code: "ANZSCO 233611",
      field: "Mining Engineer",
      link: "/cdr-samples/mining-engineer",
    },
    {
      image: "/images/Samples/petroleum-engineer.png",
      code: "ANZSCO 233612",
      field: "Petroleum Engineer",
      link: "/cdr-samples/petroleum-engineer",
    },
    {
      image: "/images/Samples/aeronautical-engineer.png",
      code: "ANZSCO 233911",
      field: "Aeronautical Engineer",
      link: "/cdr-samples/aeronautical-engineer",
    },
    {
      image: "/images/Samples/biomedical-engineer.png",
      code: "ANZSCO 233913",
      field: "Biomedical Engineer",
      link: "/cdr-samples/biomedical-engineer",
    },
    {
      image: "/images/Samples/engineering-technologist.png",
      code: "ANZSCO 233914",
      field: "Engineering Technologist",
      link: "/cdr-samples/engineering-technologist",
    },
    {
      image: "/images/Samples/environmental-engineer.png",
      code: "ANZSCO 233915",
      field: "Environmental Engineer",
      link: "/cdr-samples/environmental-engineer",
    },
    {
      image: "/images/Samples/professional-engineer.png",
      code: "ANZSCO 233999",
      field: "Engineering Professionals",
      link: "/cdr-samples/engineering-professionals",
    },
    {
      image: "/images/Samples/computer-network.png",
      code: "ANZSCO 263111",
      field: "Computer Network and System Engineer",
      link: "/cdr-samples/computer-network-and-system-engineer",
    },
    {
      image: "/images/Samples/telecommunications-network.png",
      code: "ANZSCO 263312",
      field: "Telecommunications Network Engineer",
      link: "/cdr-samples/telecommunications-network-engineer",
    },
    {
      image: "/images/Samples/civil-draftsperson.png",
      code: "ANZSCO 312211",
      field: "Civil Engineering Draftsperson",
      link: "/cdr-samples/civil-engineering-draftsperson",
    },
    {
      image: "/images/Samples/civil-technician.png",
      code: "ANZSCO 312212",
      field: "Civil Engineering Technician",
      link: "/cdr-samples/civil-engineering-technician",
    },
    {
      image: "/images/Samples/electrical-technician.png",
      code: "ANZSCO 312312",
      field: "Electrical Engineering Technician",
      link: "/cdr-samples/electrical-engineering-technician",
    },
    {
      image: "/images/Samples/telecommunications-field.png",
      code: "ANZSCO 313212",
      field: "Telecommunications Field Engineer",
      link: "/cdr-samples/telecommunications-field-engineer",
    },
    {
      image: "/images/Samples/electrical-draftsperson.png",
      code: "ANZSCO 312311",
      field: "Electrical Engineering Draftsperson",
      link: "/cdr-samples/electrical-engineer-draftsperson",
    },
  ];
  const [sampleList, setSampleList] = React.useState(samples);
  const searchSample = (keyword) => {
    let tempSample = samples.filter((s) => s.field.includes(keyword));
    setSampleList(tempSample);
  };
  return (
    <div>
      <Container>
        <PurpleHeading title="High Quality CDR Report Samples for Engineers Australia (EA)" />
        <SearchBox searchSample={searchSample} />
        <Row>
          {sampleList?.map((s, index) => (
            <Col key={index} md={6} className="py-md-3 px-md-4 py-3 px-3">
              <SampleCard
                image={s.image}
                code={s.code}
                field={s.field}
                link={s.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityCDRSamples;
