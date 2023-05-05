const express = require('express');
const app = express();

const { createPool } = require('mysql')

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "test" // Replace with your database name
})

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.get('/getusers', (req, res) => {
  const q = "SELECT * FROM test.users";
  pool.query(q, (err, data) => {
    if(err) return res.json(err)
    return res.json(data)
  });
}) 

app.post('/setusers', (req, res) => {
  const q = "INSERT INTO test.users (userName, fullName, email, password) VALUES (?)";
  const values = [
    req.body.userName,
    req.body.fullName,
    req.body.email,
    req.body.password,
  ];

  pool.query(q, [values], (err, data) => {
    if(err) return res.json(err);
    return res.json("user created");
  });
    

}) 


// Serve static files from the "public" directory



// Handle POST request to /signup
app.post('/signup', (req, res) => {
  console.log("Button does work!")
 
 


  const { username, fullName, email, password } = req.body;



  
  pool.query(
    "INSERT INTO users (userName, fullName, email, password) VALUES (?, ?, ?, ?)",
    [username, fullName, email, password],
    (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send("Error signing up");
        } else {
            console.log(result);
            res.send("Successfully signed up!");
        }
    }
  );
});

app.get('/', (req, res) => {
  res.json('This is the backend');
}) 



app.post('/login', (req, res) => {
  console.log("Button does work!")
  const { email, password } = req.body;
  console.log(email,password)


  pool.query(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send(console.log("Error logging in"));
      } else if (result.length === 0) {
        res.status(401).send(console.log("Invalid email or password"));
      } else {
        console.log(result);
        res.send(console.log("Successfully logged in!"));
      }
    }
  );








});



// Start the server
app.listen(8800, () => {
  console.log('Server listening on port 8800');
});
