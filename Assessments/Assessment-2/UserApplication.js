const app = require("express")();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/UserApplication.html");
})

app.listen(2000, () => {
    console.log("UserApplication is  running at port: 2000");
})
