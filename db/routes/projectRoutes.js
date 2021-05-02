import express from 'express'
// import * as validation from '../middleware/validationFunctions.js'
import connection from '../connection'

const projectRoutes = express.Router()

projectRoutes.get('/projects', (req,res) => {
  connection.query("SELECT * FROM projects", function (error, results, fields) {
    if (res.status >= 400) {
      alert("Error")
    } else {
      return res.status(201).json(results);
        }
      }
    )
})


projectRoutes.post("/projects/add-projects-data", (req, res) => {
    connection.query("INSERT INTO projects (`projectName`, `description`, `img`, `link`) VALUES (?, ?, ?, ?)", [req.body.projectName, req.body.description, req.body.img, req.body.link], function (error, results, fields) {
        if (error) throw error;
        return res.status(201).send(results);
      });
    });


projectRoutes.put("/projects/edit-projects-data", (req, res) => {
  connection.query(`UPDATE projects SET projectName = ?, description = ?, img = ?, link = ? WHERE id=${req.body.id}`, [req.body.projectName, req.body.description, req.body.img, req.body.link], function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});

projectRoutes.delete("/projects", (req, res) => {
  connection.query(`DELETE FROM projects WHERE id=${req.body.id}`, function (error, results, fields) {
    if (error) throw error;
    return res.status(201).send(results);
  });
});
  


export default projectRoutes