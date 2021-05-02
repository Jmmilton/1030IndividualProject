import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../style.css';


const AddProject = (props) => {
    // const [newResumeData] = useState({});
    const [project, setProject] = useState({})
    const data = props.ProjectData
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

     const handleChange = (event) => {
       console.log(data)
       setProject((prevState) => ({
         ...prevState,
         [event.target.name]: event.target.value,
       }));
     };

     const handleSubmit = (event) => {
        fetch(`http://localhost:4000/projects/add-projects-data`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(project),
        }).then((response) => response.json());
        toggle();
        // window.location.reload()
    };

    return (
          <div>
            <Button color="danger" className="add-btn" onClick={toggle}>Add New Project</Button>
            <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle} style={{color: "purple"}}>Add New Project</ModalHeader>
                <ModalBody>
                    <div key={project.id}>
                        <input
                            type="text"
                            name="projectName"
                            value={project.projectName}
                            onChange={handleChange}
                            placeholder="Project Name"
                            id="inputID"
                            />
                        <input
                            type="text"
                            name="description"
                            value={project.description}
                            onChange={handleChange}
                            placeholder="Project Description"
                            id="inputID"
                            />
                        <input
                            type="text"
                            name="img"
                            value={project.img}
                            onChange={handleChange}
                            placeholder="Paste Image Link Here"
                            id="inputID"
                            />
                        <input
                            type="text"
                            name="link"
                            value={project.link}
                            onChange={handleChange}
                            placeholder="Link to Project Site"
                            id="inputID"
                            />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
}

export default AddProject;