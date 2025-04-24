import {config} from "dotenv"

config ();

export default {
    /* para hacer referencia a las variable*/
    host : process.env.HOST,
    database : process.env.DATABASE,
    user : process.env.USER,
    password : process.env.PASSWORD
}