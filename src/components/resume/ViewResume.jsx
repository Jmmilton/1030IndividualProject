import React, { useState, useEffect } from "react";
import Nav from "../nav/nav"
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddResumeData from "./AddResumeData";
import EditResume from './EditResume'
import { withRouter, useHistory } from 'react-router-dom'
import { Button } from 'reactstrap'


const ViewResume = (props) => {

  const [resumeData, setResumeData] = useState([]);

  let history = useHistory()

  useEffect(() => {

    async function fetchData() {
      const res = await fetch(`http://localhost:4000/resume`);
      res.json().then((res) => setResumeData(res));
    
    }
    fetchData();
  });

  const isAdminPath = props.match.url.includes('admin');

  const BacktoAdmin = () => {
    history.push(`/admin`)
  }

  return (
    <div>
      <Nav />
        <h2 className="work-h2">My Work Experience</h2>
        {isAdminPath && <AddResumeData />}
        {isAdminPath && <Button className="logout-btn" onClick={BacktoAdmin}>Go Back to Admin Panel</Button>}
          <section className="resume">
            {resumeData.map((data) =>
              <div className="work-div">
                  <h3>{data.job}</h3>
                  <h4>{data.jobTitle}</h4>
                  <h5>{data.date}</h5>
                  {isAdminPath && <EditResume jobExp={data} />}
                  <ul>
                      <li>{data.note1}</li>
                      <li>{data.note2}</li>
                      <li>{data.note3}</li>
                      <li>{data.note4}</li>
                  </ul>
                  <hr className="work-seperation" />
              </div>
            )}
          </section>
    </div>
  );
};

export default withRouter(ViewResume);
