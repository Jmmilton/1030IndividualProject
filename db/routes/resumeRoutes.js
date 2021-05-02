import express from 'express'
// import * as validation from '../middleware/validationFunctions.js'
import connection from '../connection'

const resumeRoutes = express.Router()

resumeRoutes.get('/resume', (req,res) => {
  connection.query("SELECT * FROM resume", function (error, results, fields) {
    if (res.status >= 400) {
      alert("Error")
    } else {
      return res.status(201).json(results);
        }
      }
    )
})


resumeRoutes.post("/resume/add-resume-data", (req, res) => {
    connection.query("INSERT INTO resume (job, jobTitle, date, note1, note2, note3, note4) VALUES (?, ?, ?, ?, ?, ?, ?)", [req.body.job, req.body.jobTitle, req.body.date, req.body.note1, req.body.note2, req.body.note3, req.body.note4], function (error, results, fields) {
      if (error) {

        console.log('Error, must fill all required input fields')
      } else {
        return res.status(201).json(results);
          }
        }
      )
  })


resumeRoutes.put("/resume/edit-resume-data", (req, res) => {
  connection.query(`UPDATE resume SET job = ?, jobTitle = ?, date = ?, note1 = ?, note2 = ?, note3 = ?, note4 = ? WHERE id=${req.body.id}`, [req.body.job, req.body.jobTitle, req.body.date, req.body.note1, req.body.note2, req.body.note3, req.body.note4], function (error, results, fields) {
    if (res.status >= 400) {
      throw error
    } else {
      return res.status(201).json(results);
        }
      }
    )
})

resumeRoutes.delete("/resume", (req, res) => {
  connection.query(`DELETE FROM resume WHERE id=${req.body.id}`, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});
  


export default resumeRoutes