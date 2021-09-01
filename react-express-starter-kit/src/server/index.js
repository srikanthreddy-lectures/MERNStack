import express from "express";
import morgan from "morgan";

const app = express();
const DEBUG = process.env.NODE_ENV !== 'production';
const PORT = DEBUG ? '3000' : process.env.PORT;

app.use(express.static(__dirname + '/../../public'));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const server = app.listen(PORT, function () {
    console.log('Express listening on port %s', PORT);
});
