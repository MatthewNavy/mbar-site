import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

import coinbase from "../images/cb.svg"
import Skill from "../components/skill"
import School from "../components/school"

const langs = ["Java", "Python", "Scala", "JavaScript", "Golang", "C++", "PostreSQL", "Haskell"]
const tech = ["Git", "React", "Bootstrap", "REST APIs", "gRPC", "Docker", "Flutter", "Protocol Buffers"]
const ideas = ["Web Development", "Machine Learning", "Agile", "Databases", "Game Theory", "Object Orientation", "Data Structures", "Algorithms"]

const Resume = () => (
  <Layout>
    <Seo title="Resume" />
      <section className="py-5 container">
        <h2>Experience</h2>
        <div className="row">
          <div className="col-lg-4">
            <div className="card">
              <a href="https://coinbase.com">
                <img src={coinbase} alt="Coinbase Logo" width="407" height="410"></img>
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  Software Engineer Intern 🚀
                </h5>
                <p className="card-text">
                  Developed platform for internal tool frontends with custom OAuth 2.0 flow and CLI.
                </p>
                <div className="card-header">
                  May - August 2021
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Golang</li>
                  <li className="list-group-item">GraphQL</li>
                  <li className="list-group-item">Docker</li>
                </ul>
              </div>  
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <a href="https://trinity.edu">
                <StaticImage
                  src="../images/trinity.jpg"
                  width={410}
                  height={410}
                  formats={["AUTO", "WEBP"]}
                  alt="Trinity University Logo"
                  className="img-fluid"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  Head ACM Tutor ✏
                </h5>
                <p className="card-text">
                  Helping other Trinity CS students with class material and assignments. Managing and promoting tutoring program.
                </p>
                <div className="card-header">
                  August 2019 - Now
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Scala</li>
                  <li className="list-group-item">C/C++</li>
                  <li className="list-group-item">Leadership</li>
                </ul>
              </div> 
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <a href="https://srcinc.com">
                <StaticImage
                  src="../images/src.png"
                  width={410}
                  height={410}
                  formats={["AUTO", "WEBP"]}
                  alt="SRC Logo"
                  className="img-fluid"
                />
              </a>
              <div className="card-body">
                <h5 className="card-title">
                  Software Engineer Intern ⚔
                </h5>
                <p className="card-text">
                  Maintained large-scale military application. Conducted feasibility study.
                </p>
               <div className="card-header">
                  May - August 2020
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Java</li>
                  <li className="list-group-item">Eclipse</li>
                  <li className="list-group-item">Research</li>
                </ul>
              </div> 
            </div>
          </div>
        </div>
        <br></br>
        <h2>Skills</h2>
        <div className="row">
          <div className="col">
            <Skill title="Languages 💬" list={langs}></Skill>
          </div>
          <div className="col">
            <Skill title="Technologies 💻" list={tech}></Skill>
          </div>
          <div className="col">
            <Skill title="Concepts 💡" list={ideas}></Skill>
          </div>
        </div>
        <br></br>
        <h2>Education</h2>
        <School></School>
      </section>
  </Layout>
)

export default Resume
