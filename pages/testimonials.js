import React, { useState } from "react";
import Head from 'next/head'
import { Col, Row, Card, Pagination, Container } from "react-bootstrap";
import PrupleHeading from "../components/PurpleHeading";
import {useRouter} from 'next/router'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const Testimonials = () => {
  const router = useRouter()
  const canonicalUrl = (`https://www.cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];

  const testimoniallist = [
    {name:`Tanya Arora
    `,image:"/images/Testimonials/tanya.png",country:"India",description:`Highly Recommended! Thank you so much 
    for your effort, guidance and everything you 
    spent drafting my complete CDR report. `},
    {name:"Fathima",image:"/images/Testimonials/fathima.png",country:"Srilanka",description:`Thank you for providing me Error-Free 
    complete CDR Report. I will love to 
    recommend your services if anyone needs 
    CDR writing and skill assessment assistance.`},
    {name:"Simran Dhakal",image:"/images/Testimonials/simran.png",country:"Nepal",description:`Awesome service! Best Assistance! Expert 
    Writers. The Complete CDR document was 
    drafted very well and satisfactory. I love to 
    grab your services again when in need.`},
   
    {name:"Rashid",image:"/images/Testimonials/rashid.png",country:"UAE",description:`The CDR writers at CDRforengineer are 
    very cooperative and understanding. They 
    understand my requirements with full of 
    dedication and positive attitudes. I have 
    had the best experience drafting my 
    document here.`},
  
    {name:"John",image:"/images/Testimonials/john.png",country:"Australia",description:`Excellent service and Trustworthy. Thank 
    you, ‘CDRforengineer’, for drafting my 
    complete CDR document to make it more 
    worthy and impressive. I will love to refer 
    my friends to get help with their flawless 
    CDR reports.`},
    {name:"Sadia",image:"/images/Testimonials/sadia.png",country:"Bangladesh",description:`Thank you, CDRforengineer, for helping me 
    complete my CDR report on time. It was 
    challenging and Complex, and I never thought 
    I would be able to submit my document to 
    Engineers Australia at the effective deadline. 
    Your team of expert writers are very helpful.`},
    {name:"Sadami",image:"/images/Testimonials/sadami.png",country:"Srilanka",description:`Thank you, CDRforengineer, for assisting me 
    with a High-Quality CDR report before the 
    deadline. I especially liked how you asked 
    me about my requirements before drafting 
    my CDR documents. I am delighted with your 
    services and determination to provide my 
    error-free report.`},
    {name:"Reem",image:"/images/Testimonials/reem.png",country:"UAE",description:`Satisfied with the service. The best thing was 
    that the professional writers had full command 
    of Australian English and Engineers Australia’s 
    guidelines. I got my CDR document done here 
    and successfully obtained a skilled migration 
    visa to Australia.`},
    {name:"Nikita Poudel",image:"/images/Testimonials/nikita.png",country:"Nepal",description:`Thank you, CDRforengineer, for the Awesome 
    services and guidance. I am impressed with 
    your Team member’s skill in presenting my 
    professional competencies concisely. I want 
    to recommend your services to my friends who 
    are willing to relocate to Australia through the 
    CDR pathway.`},
    {name:"Faizan ",image:"/images/Testimonials/faizan.png",country:"UAE",description:`Too much to say. A perfect place to draft 
    your CDR document. CDR writers are from 
    an engineering background and have several 
    years of Experience in the CDR writing domain. 
    I am happy to get my CDR report done at an 
    affordable price. I recommend my friends to 
    grab their Top-Notch services.`},
    {name:"Ahmed Khan",image:"/images/Testimonials/ahmed.png",country:"Pakistan",description:`I have to say that the Team members at 
    CDRforengineer are highly educated and 
    familiar with Engineers Australia requirements. 
    I am impressed with their support and guidance. 
    Thank you for providing the best Help with a 
    plagiarism-free CDR report to obtain a skilled 
    immigration visa to Australia.`},
    {name:"Abdul Ali",image:"/images/Testimonials/abdul.png",country:"Pakistan",description:`Best CDR writing services! I want to 
    recommend all of my friends who are willing 
    to migrate to Australia through CDR pathways. 
    They can offer you CDR Three Career Episode, 
    Summary, CPD, and CV-Resume Report with 
    24/7 best assistance. Thanks for the Best 
    service will grab your help again in need.`},
    {name:"Sangeeta Shrestha",image:"/images/Testimonials/sangeeta.png",country:"Nepal",description:`I am an Aeronautical engineer. I am happily 
    working in Australia as an engineer because 
    of CDRforengineer. I drafted my complete 
    competency demonstration report (CDR) from 
    here and got my PR visa to Australia on the 
    first try. I just loved their service, and thanks 
    to the Expert writers who have helped me 
    make my dream comes true.`},
    {name:"Richard",image:"/images/Testimonials/richard.png",country:"Australia",description:`Very satisfied with the support and guidance 
    of the CDRforengineer. I successfully drafted 
    my complete CDR report and obtained a 
    positive result from Engineers Australia. 
    Thanks to professional writers, I appreciate 
    all your Hardwork and efforts you put in while 
    completing my documents. It was beyond my 
    expectations. Keep up your excellent work.`},
    {name:"Bhagya",image:"/images/Testimonials/bhagya.png",country:"Srilanka",description:`I am writing this review to acknowledge the 
    fantastic job that your expert writers have done. 
    I got a positive assessment from Engineers 
    Australia, and I qualified as an Aeronautical 
    Engineer. Your team members are experts in 
    writing a CDR document.  I am impressed with 
    your complete services and want to recommend 
    all the engineers to rely on your services.`},
    {name:"Aisha",image:"/images/Testimonials/aisha.png",country:"Pakistan",description:`I have just got a positive result from Engineers 
    Australia, and I have qualified as an Electrical 
    Engineer. I am sharing my happiness with 
    you because your team member has done 
    a fantastic job and has made this happen. 
    Your team members are highly knowledgeable 
    and have mastered drafting a complete CDR 
    report. I am satisfied with the assistance they 
    have provided to me.`},
    {name:"David",image:"/images/Testimonials/david.png",country:"Australia",description:`I took help from CDRforengineer to write my 
    complete CDR report for Engineers Australia. 
    Earlier I was confused about whom to trust 
    to write my document. This one phone call 
    helped me to choose the best consultant. The 
    Assistance that I spoke to at CDRforengineer 
    was very supportive and knowledgeable. 
    Thanks to the Expert writers and the support 
    team for helping me obtain a 100% Approval 
    result from Engineers Australia. It is always 
    recommended! `},
    {name:"Rohit Shekhawat",image:"/images/Testimonials/rohit.png",country:"India",description:`I have availed of writing my Complete CDR 
    report from CDRforengineer and got 100% 
    Approval from Engineers Australia. I was 
    confused earlier and searching for the best 
    CDR writing services to complete my CDR 
    report for EA. I got to know about 
    CDRforengineer from my colleagues. I decided 
    to grab their Top-Notch services without delay, 
    and I am happy with my own decision today. I 
    recommend all the engineering students get 
    their CDR report done at CDRforengineer.  `},
    {name:"Sonia",image:"/images/Testimonials/sonia.png",country:"Bangladesh",description:`I was searching for the best consultant to 
    write my CDR Report. One of my friends told 
    me about the services of CDRforengineer. I 
    decided to rely on their professional writers for 
    writing my CDR Report. They have helped me 
    build my complete document with CDR 
    Assessment Guidance. The Complete report 
    I got for the CDR assessment is the best, Error
    -Free, and very high quality. I am delighted with 
    their work and effort.so I recommend all the 
    engineers who are struggling to get support 
    from them.`},
    {name:"Vijayalakshmi",image:"/images/Testimonials/vijayalaxmi.png",country:"India",description:`I am writing to provide feedback and express 
    my appreciation for your excellent and highly 
    professional service. I am super happy today 
    because I finally got a positive assessment 
    from Engineers Australia on the first try. I 
    highly recommend all to get their complete 
    CDR done at CDRforengineer. They provide 
    Top-notch CDR writing and reviewing services 
    at an affordable price. The CDR writers are 
    from an engineering background with several 
    years of experience in the CDR writing domain. 
    I am also impressed by their 24/7 customer 
    support service.`},
    {name:"Munem Wasif",image:"/images/Testimonials/munem.png",country:"Bangladesh",description:`CDRforengineer is the perfect solution for any 
    engineers seeking the best Consultant to draft 
    their complete CDR document at an effective 
    deadline. I am a novice writer and was seeking 
    the best consultant to write my comprehensive 
    CDR report at affordable prices. One of my 
    friends, who had already grabbed CDR service 
    and got an EA positive assessment, suggested 
    that I rely on CDRforengineer Top-Notch 
    services to get my Unique document. Today I 
    am happy because I got a positive result from 
    EA. I want to recommend all engineers avail 
    of CDR writing services from CDRforengineer.`},

  ];
  // const pageSize = 6;
  // const numberOfPages = testimoniallist.length / pageSize;
  // const [list, setList] = useState(testimoniallist.slice(0, 6));
  // const [active, setActive] = useState(1);
  // const onPageChange = (pageNumber) => {
  //   setActive(pageNumber);
  //   setList(
  //     testimoniallist.slice((pageNumber - 1) * pageSize, pageSize * pageNumber)
  //   );
  // };
  // let items = [];
  // for (let number = 1; number <= numberOfPages; number++) {
  //   items.push(
  //     <Pagination.Item
  //       style={{
  //         borderColor: "#370C64 !important",
  //         color: "#370C64 !important",
  //       }}
  //       key={number}
  //       active={number === active}
  //       onClick={() => onPageChange(number)}
  //     >
  //       {number}
  //     </Pagination.Item>
  //   );
  // }
  return (
    <div>
    
      <Head>
        <title>Testimonials | CDR For Engineer</title>
        <meta name="description" content="Testimonials | CDR For Engineer"/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div
        style={{
          background: `linear-gradient(
        90deg,
        #60269e 0%,
        #4c1980 35.73%,
        #360b62 100%
      )`,
          minHeight: "6rem",
        }}
      >
        <div className="container px-3 px-md-5">
          <Row>
            <Col md={6} xs={12} className="text-white mt-md-5 pt-md-5 mb-5">
              <h1 className="text-center text-md-start my-4">
                Home &gt; <strong>Testimonials</strong>
              </h1>
            </Col>

            <Col className="mt-5" md={6} xs={12}></Col>
          </Row>
        </div>
      </div>
      <Container>
        <PrupleHeading title="Testimonials" />
        <Row className="mt-5">
          {testimoniallist.slice(0,3).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'120px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          {testimoniallist.slice(3,6).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'145px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          {testimoniallist.slice(6,9).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'155px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          {testimoniallist.slice(9,12).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'190px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          {testimoniallist.slice(12,15).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'220px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <Row className="mt-5">
          {testimoniallist.slice(15,18).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'270px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        <Row className="mt-5">
          {testimoniallist.slice(18,21).map((a, index) => {
            return (
              <Col key={index} md={4} xs={6} className="my-4 px-3">
                <div
                  className="mb-2 position-relative"
                  style={{
                    background: "#FAFAFA",
                    boxShadow: "0.5px 0.5px 30px rgba(0, 0, 0, 0.3)",
                    borderRadius: "10px",
                    zIndex: "-1",
                    
                  }}
                >
                  <div style={{border:'3px solid #370C64',width:'40%'}}></div>
                  <FormatQuoteIcon  className="fa-solid fa-quote-right position-absolute"
                    style={{ fontSize: "100px", top: "-50px", right: "20px",color:'#370C64' }}/>
                  
                  <div
                    className="p-2"
                    style={{
                      color: "#FA2545",
                      margin: "10px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarIcon style={{ marginTop: "10px" }}/>
                    <StarOutlineIcon style={{ marginTop: "10px" }}/>

                
                  </div>
                  <Row className="ps-4  mb-3">
                    <p
                      style={{
                        fontFamily: "Century Gothic",
                        fontWeight: "400",
                        fontSize: "17px",
                        height:'310px'
                      }}
                    >
                     {a.description}
                    </p>
                  </Row>
                  <div
                    className=" mb-2"
                    style={{ background: "#370C64" }}
                  >
                    <Row>
                      <Col xs={2} className=''>
                        <div className="mr-3">
                        <img
                          src={a.image}
                          alt="agent avatar"
                          className="='img-fluid"
                          style={{
                            height: "50px",
                            borderRadius: "100%",
                            margin: "10px",
                          }}
                        />
                        </div>

                       
                      </Col>
                      <Col xs={8} className="text-white pt-2 ">
                        <div>
                        <strong>{a.name}</strong>
                        <br />
                        <p>{a.country}</p>
                        </div>
                       
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
        {/* <div className="d-flex justify-content-center">
          <Pagination>{items}</Pagination>
        </div> */}
      </Container>
    </div>
  );
};

export default Testimonials;
