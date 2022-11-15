const User = require('../../models/student')
const bcrypt = require('bcrypt')
const passport = require('passport')

function authController() {
    const _getRedirectUrl = (req) => {
        return req.user.role === 'student' ? '/studentHome' : '/'
    }
    
    return {
        login(req, res) {
            res.render('studentLogin')
        },
        postLogin(req, res, next) {
            const { email, password }   = req.body
           // Validate request 
            if(!email || !password) {
                return res.redirect('/staffLogin')
            }
            passport.authenticate('local', (err, user, info) => {
                if(err) {
                    return next(err)
                }
                if(!user) {
                    return res.redirect('/staffLogin')
                }
                req.logIn(user, (err) => {
                    if(err) { 
                        return next(err)
                    }

                    return res.redirect(_getRedirectUrl(req))
                })
            })(req, res, next)
        },
        register(req, res) {
            res.render('studentRegister')
        },
        async postRegister(req, res) {
         const { name, email, password }   = req.body
         // Validate request 
         if(!name || !email || !password) {
            return res.redirect('/studentRegister')
         }

         // Check if email exists 
         User.exists({ email: email }, (err, result) => {
             if(result) {
                return res.redirect('/studentRegister')
             }
         })

         // Hash password 
         const hashedPassword = await bcrypt.hash(password, 10)
         // Create a user 
         const user = new User({
             name,
             email,
             password: hashedPassword
         })

         user.save().then((user) => {
            // Login
            return res.redirect('/studentLogin')
         }).catch(err => {
                return res.redirect('/studentRegister')
         })
        },
        logout(req, res) {
          req.logout()
          return res.redirect('/studentLogin')  
        }
    }
}

module.exports = authController