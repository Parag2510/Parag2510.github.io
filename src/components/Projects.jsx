import React from "react";
import "./portfolio.css";

import Fade from "react-reveal/Fade";
const project = [
  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl28_D_K9FR5LV1xPk6MH-Fz3MTR19fmYn4bizsKMDXuv6H8YElaUI7cc630PJxasgW-4&usqp=CAU",
  cardTitle:"Animoto.com",
  cardText:"Animoto is an online, cloud-based video creation platform. It can be used to create videos, not only from video content, but also from photos.",
  github:"https://github.com/Parag2510/spotless-thumb-400",
  deploy:"https://bucolic-klepon-f3702a.netlify.app/",
  teckStack:"html,css,javascript"},

  {img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-175iK9oRvHsYngk0ZFyhACApfmIKQbvHMWfmAObZJzGkDCObGuWwiyc-K5HXWRsRTxw&usqp=CAU",
  cardTitle:"campaignmonitor.com",
  cardText:"Campaign Monitor is a global technology company that provides an email marketing platform that’s easy to use yet extremely powerful.",
  github:"https://github.com/PriyanshuPatil/native-order-609",
  deploy:"https://incandescent-dusk-dc6fe6.netlify.app/home.html",
  teckStack:"html,css,javascript"},

  {img:"data:image/jpeg;base64,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",
  cardTitle:"Engagebay.com",
  cardText:"This is the world most all in one marketing sales and automation platform.This website mission is help to small busioness grow.",
  github:"https://github.com/Parag2510/able-laborer-3546",
  deploy:"https://legendary-begonia-9165c0.netlify.app/",
  teckStack:"html,css,js,react,chakra-ui"},
];

const Projects = () => {
  return (
    <>
      <div id="project">
        <h1 className="text text-center h1">
          <u>ABOUT PROJECTS</u>
        </h1>
        <div className="container ">
          <div className="row  mx-auto">
            <Fade left>
              {project.map((el)=>(
                <div className=" col-xl-4 col-md-6  my-4  ">
                <div
                  className="card mx-auto"
                  style={{ width: "20rem", height: "35rem" }}
                >
                  <div className="embed-responsive embed-responsive-4by3">
                    <iframe
                      class="embed-responsive-item"
                      src={el.img}
                      style={{width: "100%", height: "100"}}
                    ></iframe>
                  </div>

                  <div className="card-body">
                    <h5 className="card-title">{el.cardTitle}</h5>
                    <p className="card-text text-justify my-0">
                      {el.cardText}
                    </p>
                    
                    <div className="px-2 my-1">
                      <p className="my-0 font-weight-bold">TECH STACK</p>
                      <p className='font-weight-light'> {el.teckStack}</p>
                    </div>
                    <div className="container d-flex justify-content-between containerBox">
                      <button className="btn ">
                        <a href={el.github} target="_blank">
                          <span>Click Me!!</span>
                          <span>code</span>
                        </a>
                      </button>
                      <button className="btn ">
                        <a href={el.deploy} target="_blank">
                          <span>Click Me!!</span>
                          <span>Website</span>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              ))}
            </Fade>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

