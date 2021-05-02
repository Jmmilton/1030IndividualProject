import React, { useState } from "react";
import Nav from "../nav/nav"
import Img from "../images/jay.jpg"
import '../../style.css';

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [content, setContent] = useState("")

    const formSubmit = async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:9000/contact_form/entries', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({name, email, phoneNumber, content})
        })
        const payload = await response.json()
        if (response.status >= 400) {
            alert(`Oops! Error: ${payload.message} for fields: ${payload.invalid.join(",")}`)
        } else {
            console.log(name, email, phoneNumber, content)
            alert(`Congrats! Submission submitted with id: ${payload.id}`)
        }
    }
        return (
                <>
                    <Nav />
                    <section>
                        <h2 className="contact-h2">Contact Me</h2>
                        <form className="myForm" id="myForm" onSubmit={formSubmit}>
                            <label>Name: </label>
                            <input type="text" name="name" id="name" placeholder="Name" required value={name} onChange={e => setName(e.target.value) }/>
                            <br />
                            <label>Phone:</label>
                            <input name="phoneNumber" type="tel" id="phone" placeholder="xxx-xxx-xxxx" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value) }/>
                            <br />
                            <label>Email Address: </label>
                            <input name="email" type="email" id="email" placeholder="email@emailaddress.ca" required value={email} onChange={e => setEmail(e.target.value) }/>
                            <br />
                            <label>Comments or Inquiries: </label>
                            <textarea name="content" rows={3} cols={22} id="comments" required value={content} onChange={e => setContent(e.target.value)}/>
                            <br />
                            <button className="form-btn" id="button" type="submit" defaultValue="Submit">Submit</button>
                        </form>
                        <img className="contact-img" src={Img} width={400} alt="me in Sedona, Arizona" />
                    </section>
                </>
        )
    }

export default Contact;