import Chatra from "@chatra/chatra";
import React, { useState } from "react";
import { Container, Row,Col,Button } from "react-bootstrap";
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { useRouter } from "next/router";

const FeaturesPricing = () => {
  const [firstActive, setFirstActive] = useState(false);
  const [secondActive, setSecondActive] = useState(false);
  const [thirdActive, setThirdActive] = useState(false);
  const [fourthActive, setFourthActive] = useState(false);

  const router = useRouter()
  return (
    <Container className="mb-5">
       <Row className='displayDesktopScreen'>
         <Col md={3} xs={6} className="p-3">
          <div style={{display:'flex',flexDirection:"column",border:"1px solid #FFAD05", height: firstActive ? "fit-content" : "380px" ,paddingBottom:"10px", borderRadius: "20px 20px 0 0"}}>
            <div style={{height:'150px',background:'#FFAD05',borderRadius: "20px 20px 0 0"}} className="d-flex flex-column justify-content-center">
              <div>
              <img src="/images/titanium.png" alt='' style={{height:'100px',width:'100px',margin:'20px 0 0 75px'}}/>
                </div>
              <p style={{color:'white',
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:''}}>GOLD</p>
            </div>
            <div style={{height:"160px"}} className=" pt-5 d-flex flex-column justify-content-center">
              <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>439</span> </div>  </div>
              <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 14 Days</p>

            </div>
            <div             onClick={()=>$crisp.push(['do', 'chat:open'])
} className='d-flex justify-content-center align-items-center' style={{height:'15%',background:'#FFAD05',marginBottom:'-20px'}}>
              <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p>
            </div>
           

          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#F9C967",fontWeight:"400",border:"#fff",width:'100%',marginTop:'-50px',padding:'0'}}>
            View Features<ExpandMoreRoundedIcon/>

          </Button>
         </Col>
         <Col md={3} xs={6} className="p-3">
          <div style={{display:'flex',flexDirection:"column",border:"1px solid #3D9AA1", height: firstActive ? "fit-content" : "380px" ,paddingBottom:"10px", borderRadius: "20px 20px 0 0"}}>
            <div style={{height:'150px',background:'#3D9AA1',borderRadius: "20px 20px 0 0"}} className="d-flex flex-column justify-content-center">
              <div>
              <img src="/images/diamond.png" alt='' style={{height:'100px',width:'100px',margin:'20px 0 0 75px'}}/>
                </div>
              <p style={{color:'white',
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:''}}>PLATINIUM</p>
            </div>
            <div style={{height:"160px"}} className=" pt-5 d-flex flex-column justify-content-center">
              <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>639</span> </div>  </div>
              <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 10 Days</p>

            </div>
            <div             onClick={()=>$crisp.push(['do', 'chat:open'])}
 className='d-flex justify-content-center align-items-center' style={{height:'15%',background:'#3D9AA1',marginBottom:'-20px'}}>
              <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p>
            </div>
           

          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#76D3DA",fontWeight:"400",border:"#fff",width:'100%',marginTop:'-50px',padding:'0'}}>
            View Features<ExpandMoreRoundedIcon/>

          </Button>
         </Col>
         <Col md={3} xs={6} className="p-3">
          <div style={{display:'flex',flexDirection:"column",border:"1px solid #FFAD05", height: firstActive ? "fit-content" : "380px" ,paddingBottom:"10px", borderRadius: "20px 20px 0 0"}}>
            <div style={{height:'150px',background:'#D63E3E',borderRadius: "20px 20px 0 0"}} className="d-flex flex-column justify-content-center">
              <div>
              <img src="/images/platinium.png" alt='' style={{height:'100px',width:'100px',margin:'20px 0 0 75px'}}/>
                </div>
              <p style={{color:'white',
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:''}}>DIAMOND</p>
            </div>
            <div style={{height:"160px"}} className=" pt-5 d-flex flex-column justify-content-center">
              <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>939</span> </div>  </div>
              <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 7 Days</p>

            </div>
            <div             onClick={()=>$crisp.push(['do', 'chat:open'])}
 className='d-flex justify-content-center align-items-center' style={{height:'15%',background:'#D63E3E',marginBottom:'-20px'}}>
              <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p>
            </div>
           

          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#EB6D6D",fontWeight:"400",border:"#fff",width:'100%',marginTop:'-50px',padding:'0'}}>
            View Features<ExpandMoreRoundedIcon/>

          </Button>
         </Col>
         <Col md={3} xs={6} className="p-3">
          <div style={{display:'flex',flexDirection:"column",border:"1px solid #40116F", height: firstActive ? "fit-content" : "380px" ,paddingBottom:"10px", borderRadius: "20px 20px 0 0"}}>
            <div style={{height:'150px',background:'#40116F',borderRadius: "20px 20px 0 0"}} className="d-flex flex-column justify-content-center">
              <div>
              <img src="/images/gold.png" alt='' style={{height:'100px',width:'100px',margin:'20px 0 0 75px'}}/>
                </div>
              <p style={{color:'white',
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:''}}>TITANIUM</p>
            </div>
            <div style={{height:"160px"}} className=" pt-5 d-flex flex-column justify-content-center">
              <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className="py-2"><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>1239</span> </div>  </div>
              <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 5 Days</p>

            </div>
            <div             onClick={()=>$crisp.push(['do', 'chat:open'])}
 className='d-flex justify-content-center align-items-center' style={{height:'15%',background:'#40116F',marginBottom:'-20px'}}>
              <p style={{color:'white',fontSize:"20px",fontWeight:'700'}}>Order Now</p>
            </div>
           

          </div>
          <Button 
          onClick={()=>setFirstActive("")}
          style={{color:"#fff",outline:"none",background:"#6A2DA7",fontWeight:"400",border:"#fff",width:'100%',marginTop:'-50px',padding:'0'}}>
            View Features<ExpandMoreRoundedIcon/>

          </Button>
         </Col>
         </Row>

      <div className='displayMobieScreen '>
      <Row className="mt-md-5">
        <Col xs={12} className="p-4 my-3">
          <div
            className=""
            style={{ height: firstActive ? "fit-content" : 0 ,paddingBottom:"10px"}}
          >
            <div className='py-2 px-3'  style={{background:"#FFAD05",borderRadius:'5px'}}>
            <div
              className="pe-3 d-flex justify-content-between pricingFirst"
              style={{
                borderRadius: "5px",
              }}
              onClick={() => setFirstActive(!firstActive)}
            >
             
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:'23px'
                }}
              >
                GOLD
              </div>
              <div>
              <img
                src="/images/titanium.png"
                alt="basic pricing"
                className="img-fluid"
                style={{ height: "70px", width: "70px",marginRight:'20px' }}
              />
              <span className="text-white fs-2" style={{marginTop:'14px'}}>
                {firstActive ? (
                  <ExpandLessRoundedIcon/>
                ) : (
                  <ExpandMoreRoundedIcon/>
                )}
              </span>
              </div>
             
            </div>
            </div>
            
            <Row
              className="frequentlyAskedRow"
              style={{ display: firstActive ? "block" : "none" }}
            >
              <Row>
                <Col>
                <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className=""><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>439</span> </div>  </div>

                </Col>
                <Col>
                <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 14 Days</p>

                </Col>
              </Row>
              <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Career Episode

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Summary Statement

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             CPD

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Delivery Date

              </Col>
              <Col>
              15 Working Days

              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Quality Assured

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Plagiarism Free Reports

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>

            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Professional Writers

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              File Status Update

              </Col>
              <Col>
          Once a week via
call/message
              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Handling Unlimited Contents From EA

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
           
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Review Of Clients Projects

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             EA Portal Upload

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Documentstion Guideline Help

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any CE upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any project upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>          
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Reports Inclusive

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Place your Order

              </Col>
              <Col
             
            >
              <div
            className="d-flex justify-content-center align-items-center text-center colBottom1 text-white"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              flex: "0.2",
            }}
            onClick={()=>$crisp.push(['do', 'chat:open'])}

          >
            Order Now
          </div>
            </Col>
            </Row>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}  className="p-4 my-3 ">
          <div
            className=""
            style={{ height: secondActive ? "fit-content" : 0 ,paddingBottom:"10px"}}
          >
           <div className='py-2 px-3'  style={{background:"#3D9AA1",borderRadius:'5px'}}>
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                borderRadius: "5px",
              }}
              onClick={() => setSecondActive(!secondActive)}
            >
             
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:'23px'
                }}
              >
                PLATINIUM
              </div>
              <div>
              <img
                src="/images/diamond.png"
                alt="basic pricing"
                className="img-fluid"
                style={{ height: "70px", width: "70px",marginRight:'20px' }}
              />
              <span className="text-white fs-2" style={{marginTop:'14px'}}>
                {secondActive ? (
                  <ExpandLessRoundedIcon/>
                ) : (
                  <ExpandMoreRoundedIcon/>
                )}
              </span>
              </div>
            </div>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: secondActive ? "block" : "none" }}
            >
              <Row>
                <Col>
                <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className=""><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>639</span> </div>  </div>

                </Col>
                <Col>
                <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 10 Days</p>

                </Col>
              </Row>
              <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Career Episode

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Summary Statement

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             CPD

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Delivery Date

              </Col>
              <Col>
              10 Working Days

              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Quality Assured

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Plagiarism Free Reports

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>

            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Professional Writers

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              File Status Update

              </Col>
              <Col>
              Twice  a week via
call/message
              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Handling Unlimited Contents From EA

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
           
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Review Of Clients Projects

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             EA Portal Upload

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Documentstion Guideline Help

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any CE upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any project upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>          
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Reports Inclusive

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Place your Order

              </Col>
              <Col
              
            >
               <div
            className="d-flex justify-content-center align-items-center text-center colBottom2 text-white"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              flex: "0.2",
            }}
            onClick={()=>$crisp.push(['do', 'chat:open'])}

          >
            Order Now
          </div>

            </Col>
            </Row>
            </Row>
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col xs={12}  className="p-4 my-3 ">
          <div
            className=""
            style={{ height: thirdActive ? "fit-content" : 0,paddingBottom:"10px" }}
          >
             <div className='py-2 px-3'  style={{background:"#D63E3E",borderRadius:'5px'}}>
            <div
              className="pe-3 d-flex justify-content-between"
              style={{
                borderRadius: "5px",
              }}
              onClick={() => setThirdActive(!thirdActive)}
            >
             
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  marginTop:'23px'
                }}
              >
                DIAMOND
              </div>
              <div>
              <img
                src="/images/platinium.png"
                alt="basic pricing"
                className="img-fluid"
                style={{ height: "70px", width: "70px",marginRight:'20px' }}
              />
              <span className="text-white fs-2" style={{marginTop:'14px'}}>
                {firstActive ? (
                  <ExpandLessRoundedIcon/>
                ) : (
                  <ExpandMoreRoundedIcon/>
                )}
              </span>
              </div>

             
            </div>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: thirdActive ? "block" : "none" }}
            >
              <Row>
                <Col>
                <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className=""><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>939</span> </div>  </div>

                </Col>
                <Col>
                <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 7 Days</p>

                </Col>
              </Row>
              <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Career Episode

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Summary Statement

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             CPD

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Delivery Date

              </Col>
              <Col>
              7 Working Days

              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Quality Assured

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Plagiarism Free Reports

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>

            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Professional Writers

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              File Status Update

              </Col>
              <Col>
              Daily in a week via
call/message
              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Handling Unlimited Contents From EA

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
           
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Review Of Clients Projects

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             EA Portal Upload

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Documentation Guideline Help

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any CE upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any project upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>          
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Reports Inclusive

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#FA2545",
                background: "#F9F9F9",
              }}
            >
              <CloseIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Place your Order

              </Col>
              <Col
              
            >
              <div
            className="d-flex justify-content-center align-items-center text-center colBottom3 text-white"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              flex: "0.2",
            }}
            onClick={()=>$crisp.push(['do', 'chat:open'])}

          >
            Order Now
          </div>
            </Col>
            </Row>
            </Row>
          </div>
        </Col>
      </Row> 
      <Row className="mt-4 ">
        <Col xs={12}  className="p-4 my-3 ">
          <div
            className=""
            style={{ height: fourthActive ? "fit-content" : 0 ,paddingBottom:"10px"}}
          >
             <div className='py-2 px-3'  style={{background:"#40116F",borderRadius:'5px'}}>
            <div
              className="pe-3 d-flex justify-content-between "
              style={{
                borderRadius: "5px",
              }}
              onClick={() => setFourthActive(!fourthActive)}
            >
             <div className="d-flex flex-column justify-content-center align-items-center">
             <img
                src="/crown.png"
                alt="basic pricing"
                className="img-fluid"
                style={{ height: "20px", width: "25px",marginRight:'20px' }}
              />
              <div
                style={{
                  color: "white",
                  fontWeight: "700",
                  textAlign: "center",
                  fontFamily:'Century Gothic',
                  
                }}
              >
                TITANIUM
              </div>
             </div>
              
              <div>
              <img
                src="/images/gold.png"
                alt="basic pricing"
                className="img-fluid"
                style={{ height: "70px", width: "70px",marginRight:'20px' }}
              />
              <span className="text-white fs-2" style={{marginTop:'14px'}}>
                {fourthActive ? (
                  <ExpandLessRoundedIcon/>
                ) : (
                  <ExpandMoreRoundedIcon/>
                )}
              </span>
              </div>

             
            </div>
            </div>
            <Row
              className="frequentlyAskedRow"
              style={{ display: fourthActive ? "block" : "none" }}
            >
              <Row>
                <Col>
                <div className='d-flex mt-4  justify-content-center'><div style={{color:"#2D2046",fontWeight:"700",textAlign:"center",display:'flex'}} className=""><div style={{fontSize:'18px'}}>$</div ><span style={{fontSize:'45px'}}>1239</span> </div>  </div>

                </Col>
                <Col>
                <p style={{color:"#787878",fontWeight:"700",textAlign:"center",paddingBottom:'50px',fontSize:'18px'}}>Delivered within 5 Days</p>

                </Col>
              </Row>
              <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Career Episode

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Summary Statement

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             CPD

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Delivery Date

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Quality Assured

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Plagiarism Free Reports

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>

            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Professional Writers

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              File Status Update

              </Col>
              <Col>
              Daily in a week via
call/message
              </Col>
              
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Handling Unlimited Contents From EA

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
           
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Review Of Clients Projects

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
             EA Portal Upload

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Documentstion Guideline Help

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any CE upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Rewrite any project upon EA comment

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>          
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              3 Reports Inclusive

              </Col>
              <Col
              className="d-flex justify-content-center align-items-center text-center px-3"
              style={{
                fontSize: "20px",
                fontWeight: "700",
                height: "50px",
                color: "#0EAF00",
                background: "#F9F9F9",
              }}
            >
              <CheckIcon/>
            </Col>
            </Row>
            <Row
              className="d-flex align-items-center "
              style={{
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                height: "50px",
                background: "#F9F9F9",
              }}
            >
              <Col>
              Place your Order

              </Col>
              <Col
             
            >
               <div
            className="d-flex justify-content-center align-items-center text-center colBottom4 text-white"
            style={{
              fontFamily: "sans-serif",
              fontWeight: "600",
              cursor: "pointer",
              flex: "0.2",
            }}
            onClick={()=>$crisp.push(['do', 'chat:open'])}
          >
            Order Now
          </div>
            </Col>
            </Row>
            </Row>
          </div>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default FeaturesPricing;
