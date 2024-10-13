const express = require("express")
const dotenv = require("dotenv");
const db = require("./src/config/db");
const route = require("./src/routes");
const cors = require("cors");
// const cloudinaryConfig = require("./src/config/cloudinary");
// const transaksi = require("./src/models/transaksi");
// const promotion = require("./src/models/promotions");
// const products = require("./src/models/product");
// const users = require("./src/models/users");

dotenv.config()

const app = express()

const port = process.env.PORT;
app.use(cors({
    origin: ["http://localhost:3000", "*"]
}))


// products.sync().then(() => {
//     console.log(`DB connected`);
// }).catch(err => {
//     console.log(err);

// })

// users.sync().then(() => {
//     console.log(`DB connected`);
// }).catch(err => {
//     console.log(err);

// })

// transaksi.sync().then(() => {
//     console.log(`DB connected`);
// }).catch(err => {
//     console.log(err);

// })

// promotion.sync().then(() => {
//     console.log(`DB connected`);
// }).catch(err => {
//     console.log(err);

// })

// transaksi.sync().then(() => console.log(`succes syncrone transaksi`)).catch((err) => console.log(err));
// promotion.sync().then(() => console.log(`succes syncrone promotion`)).catch((err) => console.log(err));
// products.sync().then(() => console.log(`succes syncrone products`)).catch((err) => console.log(err));
// users.sync().then(() => console.log(`succes syncrone users`)).catch((err) => console.log(err));


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(cloudinaryConfig)
app.use(route)

app.use(express.static(__dirname));

db.authenticate()
    .then(() => {
        console.log(`DB connected`);
    })
    .catch((err) => {
        console.log(`Error: ${err}`);
    });



app.get("/", (req, res) => {
    res.status(200).send("Welcome to my simple API");
});


app.get("/ping", (req, res) => {
    res.json({ msg: "pong" });
});

app.listen(port, () => {
    console.log(`APP is running on PORT ${port}`);
});