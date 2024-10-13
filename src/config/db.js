const {pg} = ("pg")
const { Sequelize } = require("sequelize");
const dotenv = require("dotenv")
dotenv.config()

// const db = new Sequelize(`${process.env.POSTGRES_DATABASE}`,`${process.env.POSTGRES_USER}`,`${process.env.POSTGRES_PASSWORD}`,{
//     dialect: "postgres",
//     port : 5432,
//     dialectModule : pg
// })

const db = new Sequelize("postgres://default:GK4RkjD3YJrp@ep-dark-thunder-a4ezpc2c.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require", {
    dialect : 'postgres',
    dialectModule : pg
})

module.exports = db
