import mysql from "mysql2/promise";

import config from "./../config.js"

let connection;

const getConnection = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
            /* con config tenemos acceso a las variables*/
            host : config.host,
            database : config.database,
            user : config.user,
            password : config.password
        });
    }
    return connection;
}

export default getConnection;
