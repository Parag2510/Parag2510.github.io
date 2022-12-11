import React from 'react';
import './portfolio.css'
import Swing from 'react-reveal/Swing';

const Skills = () => {
  return (
    <>
       <div id="skills">
       <h1 className="text text-center h1 m-5"> <u>SKILLS</u></h1>
       <Swing >
       <div className="box">
         <div>
         <img src="html.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="css.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="js.jpg" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="react.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="TypeSrcipt.png" className="img-fluid" alt="Responsive"/>
         </div>
         <div>
         <img src="nextjs.png" className="img-fluid" alt="Responsive image"/>
         </div>
         <div>
         <img src="Bootstarp.png" className="img-fluid" alt="Responsive image"/>
         </div>
       </div>
       </Swing>
       </div>
    </>
  );
}

export default Skills;
