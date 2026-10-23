import { Client } from "pg";
import config from "../config/config.json" with {type: "json"};
import {top10_horror_movies} from "../queries/queries.ts";

export class DBCommons {

    async getData(query: string) {
        
        //Create a configuration to connect with the database. 
        const dbConfig = new Client({
            host: config.db.host,
            port: config.db.port,
            user: config.db.username,
            password: config.db.password,
            database: config.db.database
        });

        //Connect with the database by using the above configuration. 
        await dbConfig.connect();

        //Execute the query and store the database results in one of the variables. 
        const data = await dbConfig.query(query);

        //Close the database connection. 
        await dbConfig.end();

        //Return the records received from the database in the form of an array of objects. 
        return data.rows;
    }
}

let obj = new DBCommons();
let data = await obj.getData(top10_horror_movies);
console.log(data[1]["actor_name"]);