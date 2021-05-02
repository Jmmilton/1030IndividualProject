import React, { useState, useEffect } from "react";
import Nav from "../nav/nav"
import '../../style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddProject from "./AddProjectData";
import EditProject from "./EditProject"
import { withRouter, useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const ViewProject = (props) => {

    const [projectData, setProjectData] = useState([]);

    let history = useHistory()
    
    const data = {
      data: projectData
  }

  useEffect(() => {

    async function fetchData() {
      const res = await fetch(`http://localhost:4000/projects`);
      res.json().then((res) => setProjectData(res));
    
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
        <h2 className="work-h2">My Projects</h2>
        {isAdminPath && <AddProject data={projectData} />}
        {isAdminPath && <Button className="logout-btn" onClick={BacktoAdmin}>Go Back to Admin Panel</Button>}
        <section className="resume">
            {projectData.map((data) =>
                <div className="work-div">
                    <h3>{data.projectName}</h3>
                    <h5>{data.description}</h5>
                    {isAdminPath && <EditProject projectEntry={data} />}
                    <img src={data.img} alt={data.projectName} width="300" height="200" />
                    <a href={data.link}  target="blank">Click Here to See</a>
                    <hr className="work-seperation" />
                </div>
            )}
        </section>
    </div>
  );
};

export default withRouter(ViewProject);
