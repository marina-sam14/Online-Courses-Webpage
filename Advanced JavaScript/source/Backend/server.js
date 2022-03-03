
const express = require("express");
const app = express();
const path = require('path');

const port = process.env.port || 3000;


app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get("/", (req, res) => {
    res.render('index')
});

app.get("/register", (req, res) => {
    res.render('register')
});

app.post('/register', async (req, res) => {
    

    // try {
    //     const password = req.body.password;
    //     const cpassword = req.body.conf_password;

    //     if (password === cpassword) {
    //         const registerUser = new Register({
    //             name=req.body.name,
    //             surname=req.body.surname,
    //             phone=req.body.phone,
    //             address=req.body.address,
    //             country=req.body.country,
    //             email=req.body.email,
    //             username=req.body.username,
    //             password=password,
    //             conf_password=conf_password
    //         })

    //         const registered = await registerUser.save();
    //         res.status(201).render("index");
    //     } 
    //     else {
    //         res.send("Password don't match.");
    //     }

    // }
    // catch (error) {
    //     res.status(400).send(error);
    // }


})

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});

