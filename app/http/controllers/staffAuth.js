const User = require('../../models/staff')
const bcrypt = require('bcrypt')
const passport = require('passport')

function authController() {
    const _getRedirectUrl = (req) => {
        return req.user.role === 'staff' ? '/staffHome' : '/'
    }
    
    return {
        login(req, res) {
            res.render('staffLogin')
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
            res.render('staffRegister')
        },
        async postRegister(req, res) {
         const { name, email, password }   = req.body
         // Validate request 
         if(!name || !email || !password) {
            return res.redirect('/staffRegister')
         }

         // Check if email exists 
         User.exists({ email: email }, (err, result) => {
             if(result) {
                return res.redirect('/staffRegister')
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
            return res.redirect('/staffLogin')
         }).catch(err => {
                return res.redirect('/staffRegister')
         })
        },
        logout(req, res) {
          req.logout()
          return res.redirect('/staffLogin')  
        }
    }
}

module.exports = authController