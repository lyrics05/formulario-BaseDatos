import {Sequelize} from "sequelize"
import dotenv from "dotenv"
dotenv.config()
const {DB_DATA}= process.env
const db = new Sequelize(DB_DATA,{
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

export default db
