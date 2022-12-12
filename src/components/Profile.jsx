import React from 'react';
import "./Profile.css";
import Fade from 'react-reveal/Fade';
const Profile = () => {
  return (
    <div id="profile">
     <div className='container-fluid  p-5  '>
         <div className="row  profile m-4 p-2">
         <Fade left>
             <div className="col-md-6  my-5 py-4 " style={{marginBottom:"40%"}}>
             <img src="profile.png" className="img-thumbnail rounded-circle" alt="mypic"/>
             </div>
             </Fade>
             <Fade right>
             <div className="col-md-6  my-5 py-5">
               <h1 className='text text-center font-weight-bold'>Hello, I am Parag👋</h1>
               <div>
                 <p className='text text-center  my-5 h3' >
                 💻Full-Stack web developer with a degree in Bachelor of Science who believes in sharing knowledge, 
                 loves JavaScript and can spare hours talking about it. My experience and learnings in this field have helped me 
                 garner the required skill-set to be a successful web developer.
                 </p>
               </div>
               <a href="./Resume.pdf" target="_blank">
               <button className='btn btn-primary px-5 py-2' style={{marginLeft:"35%"}} >RESUME</button>
               </a>
               
             </div>
             </Fade>
         </div>
      </div>
    </div>
  );
}

export default Profile;
