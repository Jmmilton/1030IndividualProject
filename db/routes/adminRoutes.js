import express from 'express'
import * as validation from '../../src/middleware/validationFunctions'
import connection from '../connection'

const adminRoute = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10

// Login Route
adminRoute.post('/auth', (req, res) => {

    const isEmpty = arr => !Array.isArray(arr) || arr.length === 0;

    let registeredUser = {
        userName: req.body.userName,
        password: req.body.password,
    }

    
    // First, query for all users to see if the user exists in the database
    connection.query(
        "SELECT * FROM admin WHERE userName = ?",
        [req.body.userName],
        function (error, results, fields) {

            // Second, send error if user is not found
            if (isEmpty(results)) {
                return res
                .status(400)
                .json( { message: 'There is no user registered with that name' } )     
            }

            // Third check if password from request matches the existing user's password
            bcrypt.compare(req.body.password, results[0].password, function (err, result) {

                if (!result) {
                    return res
                    .status(401)
                    .json( { message: 'That password is incorrect, please try again' } )
                }
        
                else if (result) {
                    let token = jwt.sign(registeredUser, `${process.env.JWT_SECRET}`)
                    return res
                            .status(201)
                            .json( { 
                                token: token,
                                id: results[0].careProviderID
                            } )
                }
            })
        }
    )
})

export default adminRoute;

