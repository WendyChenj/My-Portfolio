import React from 'react';

import ProjectCard from "./ProjectCard";
import { SectionWrapper } from "../utilities/SectionWrapper";

import { Divider } from '@material-ui/core';

import burgerImage from "../../assets/images/allProject/burger-order-homepage.png";
import dashboardImage from "../../assets/images/allProject/admin-homepage.png";
import calculatorImg from "../../assets/images/allProject/calculator.png";
import timerImg from "../../assets/images/allProject/countdown-timer.png";
import todoImg from "../../assets/images/allProject/todo-app.png";
import busImg from "../../assets/images/allProject/bus.png";

import smallBurgerImg from "../../assets/images/allProject/small-burger.png";
import smallDashboardImg from "../../assets/images/allProject/small-admin.png";
import smallCalcImg from "../../assets/images/allProject/small-calculator.png";
import smallTimerImg from "../../assets/images/allProject/small-timer.png";
import smallTodoImg from "../../assets/images/allProject/small-todo.png";
import './Projects.css';
 
const Projects = () => {
  return (
    <SectionWrapper title="Fun Projects" subtitle="FIND MY REAL DEVELOPMENT APPLICATIONS">
      <div className="project-card-container">
        <ProjectCard 
          image={window.innerWidth > 600 ? burgerImage: smallBurgerImg} 
          imgTitle="Burger Order Platform" 
          projectName="Burger Builder E-commerce Application"
          techStack={["React", "Redux", "Material-UI", "react-router", "axios", "Firebase"]}
          intro="The application allows customers to create their own burger by adding or removing ingredients based on their own flavour. 
            The customer information and order data are stored in the database. 
            Users are required to log in to place an order or check their history orders."
          simpleIntro="Customers are required to log in to create their own burger by adding or removing ingredients, place an order and check their history orders.
            The customer information and order data are stored in the database."
          websiteLink="https://react-my-burger-1f18b.web.app/"
          githubLink="https://github.com/WendyChenj/My-Burger-Builder"
        />

        <ProjectCard 
          image={window.innerWidth > 600 ? dashboardImage: smallDashboardImg} 
          imgTitle="Admin Dashboard" 
          projectName="Admin Dashboard"
          techStack={["React", "Redux", "D3.js", "Material-UI", "react-router"]}
          intro="The dashboard allows users to check the sales performance of products and track the progress of team members.
            Users also could add new tasks and delete tasks that have been done. 
            Moreover, there is a monthly timeline to remind users big event and the date when big event happens. 
            Users could edit the date and event according to their own schedule."
          simpleIntro="By visualizing sales data, users are able to check sales performance and track their task progress. 
            The monthly schedule and timeline remind users the date when big event occurs."
          websiteLink="https://nostalgic-brattain-51149d.netlify.app/"
          githubLink="https://github.com/WendyChenj/Admin-Dashboard"
        />

        <ProjectCard 
          image={window.innerWidth > 600 ? calculatorImg: smallCalcImg} 
          imgTitle="JavaScript Calculator" 
          projectName="JavaScript Calculator"
          techStack={["React", "HTML", "CSS", "RegExp", "CSS Grid"]}
          intro="The calculator utilizes immediate logic and output calculation result.
            Any operation (+-*/) and the decimal (.) element are able to work. If 2 or more operators are entered consecutively, 
            the operation performed should be the last operator entered (excluding the negative (-) sign). "
          simpleIntro="The calculator utilizes immediate logic and output calculation result.
            It would be able to perform any operations, and recognize decimals and negative sign."
          websiteLink="https://wendychenj.github.io/javascript-calculator/"
          githubLink="https://github.com/WendyChenj/Admin-Dashboard"
        />

        <ProjectCard 
          image={window.innerWidth > 600 ? timerImg: smallTimerImg} 
          imgTitle="Countdown Timer" 
          projectName="Countdown Timer"
          techStack={["React", "HTML", "CSS"]}
          intro="Click the start button will make the timer running. And the timer can be stopped or resumed counting at any time.
            When a session/ break countdown reaches to zero, a sound will be played indicating that time is up.
            Click the reset button, the session/ break length and timer will be set to the initialized state. 
            The sound will stop playing and be rewound to the beginning."
          simpleIntro="Click the start button makes the timer running and the timer can be stopped or resumed counting at any time.
            A sound will be played indicating time is up when a session/ break countdown reaches 0."
          websiteLink="https://wendychenj.github.io/javascript-clock/"
          githubLink="https://github.com/WendyChenj/javascript-clock"
        />

        <ProjectCard 
          image={window.innerWidth > 600 ? todoImg: smallTodoImg} 
          imgTitle="Task Management Application" 
          projectName="Task Management Application"
          techStack={["TypeScript", "React", "Redux", "Styled-Components", "react-router"]}
          intro="The todo app allows users to check their task lists based on the task state including todo, in progress and done. 
            Also, users can add new tasks and edit tasks according to their progress!"
          simpleIntro="There are three task status including todo, in progress and done. 
            New task can be added and existing tasks can be edited and moved to another status group."
          websiteLink="https://gifted-ptolemy-72f282.netlify.app"
          githubLink="https://github.com/WendyChenj/react-typescript"
        />

        <ProjectCard 
          image={busImg} 
          imgTitle="Bus" 
          projectName="A Predictive Maintenance System for A Hybrid Bus"
          techStack={['Python', 'Flask', 'Flask-SqlAlchemy', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'IoT']}
          intro="This system can monitor real-time sensor activities, store and process real-time data in database 
            and alert warnings when abnormal data occurs. By cooperating with mechanical techinians in STO company and other colleagues from my lab, 
            we successfully built a front-end interface to display bus conditions and notify warnings, and a back-end management system to analyze data and catch execeptions."
          simpleIntro="By working closely with technical experts in STO company and other team members from my lab, we successfully built a predictive maintenance system including 
            frontend and backend and achieved 100% correctness detecting abnormal data."
          githubDisabled = {true}
          buttonName= "see my thesis"
          websiteLink="https://gifted-ptolemy-72f282.netlify.app/todo"
        />
      </div>

      <Divider style={{marginTop: "32px"}} />   
          
    </SectionWrapper>
  );
}

export default Projects;