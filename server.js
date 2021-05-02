import express from 'express'
import cors from 'cors'
import resumeRoutes from './db/routes/resumeRoutes'
import projectRoutes from './db/routes/projectRoutes'
import adminRoute from './db/routes/adminRoutes'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

app.use(express.json())

app.use(resumeRoutes)

app.use(projectRoutes)

app.use(adminRoute)

app.get("*", (req, res, next) => {
    
    let err = new Error("user typed non-existent URL")
    
    next(err)

})



app.listen(PORT, () => console.log(`API server ready on http://localhost:${PORT}`))
