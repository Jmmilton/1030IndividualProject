import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../style.css';


const EditProject = (props) => {

    const { className, projectEntry } = props;
    const [project, setProject] = useState(projectEntry);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        console.log([event.target.name], event.target.value)
        setProject((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

     const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/projects/edit-projects-data`, {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(project),
        }).then((response) => response.json());
        toggle();
        // window.location.reload()
      };

      const deleteProject = async event => {

        let id = project.id
        console.log(id)
        
        event.preventDefault()
        const deleteRow = async () => {
            const response = await fetch(`http://localhost:4000/projects`, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(project),         
            }).then((response) => response.json());
            alert("Project Deleted")
        }
        deleteRow()
        toggle()
        // window.location.reload()
    }

    return (
          <div>
            <Button onClick={toggle} className="edit-btn" style={{color: "purple"}}>Edit Project</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle} style={{color: "purple"}}>Edit Project</ModalHeader>
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
                                placeholder={"Description"}
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="img"
                                value={project.img}
                                onChange={handleChange}
                                placeholder="Project Image"
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
                    <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
                    <Button color="danger" className="edit-btn" onClick={deleteProject}>Delete Project</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
}

export default EditProject;