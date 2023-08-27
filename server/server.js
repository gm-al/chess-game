import express from 'express';
import { config } from 'dotenv';
import { connectDB } from './db/connect.js';
import authorizeMiddleWare from './error/middleware.js';
import session from 'express-session';
import GitHubAuth from './log/github.js';
import GoogleAuth from './log/google.js';
import passport from 'passport';
import routes from './routes/routes.js';
import { StatusCodes } from 'http-status-codes';
import loginProdiver from './routes/loginProviders.js';
import cors from 'cors';
config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/**
 * A middleware to support persistent login from users
*/

app.use(session({
    secret: process.env.SECRET_SESSION,
    resave: true,
    saveUninitialized: true,
}));

/**
 * .initialize() Initialize Passport on the app instance.
 * .session() Enables persistent login with passport.JS on app.
*/

app.use(passport.initialize());
app.use(passport.session());

/**
 * Configure session middleware for passport to use GitHub and Google middlewares.
*/

passport.use(GitHubAuth);
passport.use(GoogleAuth);


/**
 * Save user info in a session to be obtained later.
*/

passport.serializeUser(function(user, done) {
    return done(null, user.id);
});

passport.deserializeUser(function(user, done) {
    console.log(req.session.passport.user);
    return done(null, user);
});


/**
 * App Routes for JWT and login provider auth. 
*/

app.use('/auth', loginProdiver);
app.use('/auth/41v', routes);
app.use('/page/41v', routes, authorizeMiddleWare);

/**
 * Sign-out route
*/

app.post('/logout', function(req, res, next) {

    req.logout(function(error) {
    
        if (error) { 

            return next(error); 
        }

        res.redirect('/');
    });
});


const start = async () => {
    
    try {
    
        await connectDB(process.env.CLOUD_URI);
        app.listen(port);
    
    } catch (error) {

        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(
            { 
                mes: `internal error: ${error}`
            }
        );
    }
}

start();