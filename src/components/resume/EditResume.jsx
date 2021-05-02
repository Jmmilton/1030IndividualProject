import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../style.css';


const EditResume = (props) => {

    const { className, jobExp } = props;
    const [resume, setResume] = useState(jobExp);
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const handleChange = (event) => {
        console.log([event.target.name], event.target.value)
        setResume((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
      };

     const handleSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:4000/resume/edit-resume-data`, {
          method: "put",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resume),
        }).then((response) => response.json());
        toggle();
        // window.location.reload()
      };

      const deleteResumeSection = async event => {

        let id = resume.id
        console.log(id)
        
        event.preventDefault()
        const deleteRow = async () => {
            const response = await fetch(`http://localhost:4000/resume`, {
                method: 'DELETE',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(resume),         
            }).then((response) => response.json());
            alert("Resume Section Deleted")
        }
        deleteRow()
        toggle()
        // window.location.reload()
    }

    return (
          <div>
            <Button onClick={toggle} className="edit-btn" style={{color: "purple"}}>Edit Resume</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle} style={{color: "purple"}}>Edit Resume</ModalHeader>
                    <ModalBody>
                        <div key={resume.id}>
                            <input
                                type="text"
                                name="job"
                                value={resume.job}
                                onChange={handleChange}
                                placeholder=" Job"
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="jobTitle"
                                value={resume.jobTitle}
                                onChange={handleChange}
                                placeholder={resume.value}
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="date"
                                value={resume.date}
                                onChange={handleChange}
                                placeholder=" Date"
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="note1"
                                value={resume.note1}
                                onChange={handleChange}
                                placeholder="Note 1"
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="note2"
                                value={resume.note2}
                                onChange={handleChange}
                                placeholder="Note 2"
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="note3"
                                value={resume.note3}
                                onChange={handleChange}
                                placeholder="Note 3"
                                id="inputID"
                                />
                            <input
                                type="text"
                                name="note4"
                                value={resume.note4}
                                onChange={handleChange}
                                placeholder="Note 4"
                                id="inputID"
                                />
                        </div>
                    </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>{' '}
                    <Button color="danger" className="edit-btn" onClick={deleteResumeSection}>Delete Section</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
}

export default EditResume;