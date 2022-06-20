const express = require("express");
const app = express();
const db = require("./connect-db");
var cors = require("cors");

app.use(express.urlencoded());
app.use(cors());

app.get("/", function (req, res) {
    res.send("Hello World12345");
});

app.get("/member", async (req, res) => {
    console.log("member get");
    const sql = "SELECT * FROM `address_book`";

    const [rs] = await db.query(sql);

    res.json({ db: rs, data: "a", userLogin: true });
});

app.post("/member", async (req, res) => {
    console.log("member post", req.body);

    const sql = "SELECT * FROM `address_book` WHERE sid = ?";

    const [rs] = await db.query(sql, [req.body.sid]);

    res.json({ db: rs, data: "a", userLogin: true });
});

console.log("server started at: http://localhost:3000");
app.listen(3000);
