import express from "express";
import session from 'express-session';
import path from "path";
//import routes from "./routes/index.js";
import { fileURLToPath } from "url";
import jopqueRouter from "./routes/index.js";
import bodyParser from 'body-parser';


const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.set("port", process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));  //views 디렉토리
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
//app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/jopque', jopqueRouter);   //공통적인 utl pattern

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
  })
);


app.get('/', (req, res) => {
  res.redirect('/jopque/login');
});


export default app;