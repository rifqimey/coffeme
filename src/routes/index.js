const authRouter  = require("./auth")
const productRouter = require("./product")

const route = require("express").Router()

route.use("/product", productRouter)
route.use('/auth', authRouter)

module.exports = route