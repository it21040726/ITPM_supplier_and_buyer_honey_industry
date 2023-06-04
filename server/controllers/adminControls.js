import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const signup = (req, res) => {
    User.findOne({email: req.body.email})
    .exec( async (error, user) => {
        if(user) return res.status(400).json({
            message: 'Admin already registerd!'
        })

        const {
            firstName,
            lastName,
            email,
            password
        } = req.body

        const hash_pass = await bcrypt.hash(password, 10);

        const _user = new User({
            firstName,
            lastName,
            email,
            hashPass: hash_pass,
            username: Math.random().toString(),
            role: "admin"
        })
        _user.save((error, userData) => {
            if(error){
                return res.status(400).json({
                    message: 'Somesthing went wrong'
                })
            }
            if(userData){
                return res.status(201).json({
                    message: "Admin Registration Success"
                })
            }
        })
    })
}
const signin = async (req, res) => {
    User.findOne({email: req.body.email})
    .exec((error, user) => {
        if(error){
            return res.status(400).json({Error: "User Not Found!!!"})
        }
        if(user){
            if(user.authenticate(req.body.password) && user.role === 'admin'){
                const token = jwt.sign({_id: user._id, role: user.role}, process.env.JWT_SECRET, {expiresIn:'5h'})
                const {
                    _id,
                    firstName,
                    lastName,
                    email,
                    role,
                    fullName
                } = user
                res.cookie('token', token, { expiresIn: '5h' })
                res.status(200).json({
                    token,
                    user: {
                        _id,
                        firstName,
                        lastName,
                        email,
                        role,
                        fullName 
                    }
                })
            }
            else{
                return res.status(400).json({
                    message: "Invalid Password"
                })
            }
        }
        else{
            return res.status(400).json({messege: "Something Went Wrong!!!"})
        }
    })
}

const signout = (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: "Signout successfully :)"  })
}

export { signin, signup, signout }
