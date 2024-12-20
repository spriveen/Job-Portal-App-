import express from "express";
import {auth} from "express-openid-connect";
const app = express();

const port =8000;

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:8000',
  clientID: '1b8MODE7sWe55Z0YktHIJ5q9CgTFp9Cc',
  issuerBaseURL: 'https://dev-3jhhkau8xup42nef.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});






app.listen(port,()=>{
    console.log(`Listening port ${8000}`);
});