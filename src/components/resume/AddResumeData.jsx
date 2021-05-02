import React, {useState} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../../style.css';


const AddResumeData = (props) => {
    const [newResumeData] = useState({});
    const [resume, setResume] = useState({})

    const data = props.ResumeData
  
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
    

     const handleChange = (event) => {
       console.log(data)
       setResume((prevState) => ({
         ...prevState,
         [event.target.name]: event.target.value,
       }));
     };

     const handleSubmit = (event) => {
        fetch(`http://localhost:4000/resume/add-resume-data`, {
        method: "post",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(resume),
        }).then((response) => response.json());
        toggle();
        // window.location.reload()
    };

    return (
          <div>
            <Button color="danger" className="add-btn" onClick={toggle}>Add New Resume Data</Button>
            <Modal isOpen={modal} toggle={toggle} >
              <ModalHeader toggle={toggle} style={{color: "purple"}}>Add to Resume</ModalHeader>
                <ModalBody>
                    {/* {Object.keys(newResumeData).map(resume => ( */}
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
                            placeholder="Job Title"
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
                    {/* ))} */}
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleSubmit}>Submit</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
      </div>
    );
}

export default AddResumeData;