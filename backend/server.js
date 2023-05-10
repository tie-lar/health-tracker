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



app.post('/setusers', (req, res) => {
  console.log("Button does work!")

  const { userName, fullName, email, password } = req.body;


  pool.query(
    "INSERT INTO test.users (userName, fullName, email, password) VALUES (?, ?, ?, ?)",
    [userName, fullName, email, password],
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


})


app.post('/getusers', (req, res) => {
  console.log("Button does work!")
  const { email, password } = req.body;
  console.log(email, password)


  pool.query(
    "SELECT * FROM test.users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        console.error(err);

        res.status(500).send(console.log("Error logging in"));
      } else if (result.length === 0) {
        res.status(401).send(console.log("Invalid email or password"));
      } else {
        console.log(result[0]);
        //res.send(console.log("Successfully logged in!"));
        res.send(result[0]);
      }
    }
  );


})






  // pool.query(
  //   "SELECT * FROM test.users WHERE email = ? AND password = ?",
  //   [email, password],
  //   (err, result) => {
  //     if (err) {
  //       console.error(err);
  //       res.status(500).send(console.log("Error logging in"));
  //     } else if (result.length === 0) {
  //       res.status(401).send(console.log("Invalid email or password"));
  //     } else {
  //       console.log(result[0]);
  //       //res.send(console.log("Successfully logged in!"));
  //       res.send(result[0]);
  //     }
  //   }
  // );



app.post('/addprofile', (req, res) => {
  console.log("this button works!")
});

// Serve static files from the "public" directory


app.get('/getmeals', (req, res) => {
  pool.query(
    "SELECT * FROM test.meals",
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        //res.send(console.log("Successfully logged in!"));
        res.send(result);
      }
    }
  );
})

app.get('/exercises', (req, res) => {
  pool.query(
    "SELECT * FROM test.exercises",
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        //res.send(console.log("Successfully logged in!"));
        res.send(result);
      }
    }
  );
})


app.get('/getuserbyid', (req, res) => {
  const { id } = req.query;
  pool.query(
    "SELECT * FROM test.users WHERE iduser = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
      } else {
        //console.log(result);
        res.send(result[0]);
        
      }
      //res.end();
    }
  );
})

app.post('/postMealHistory', (req, res) => {
  console.log(req.body);
  var iduser = req.body.params.iduser;
  var idmeal = req.body.params.idmeal;
  
  //const { iduser, idmeal } = req.query;
  pool.query(
    "INSERT INTO test.mealHistory (iduser, idmeal) VALUES (?, ?)",
    [iduser, idmeal],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error adding meal");
      } else {
        console.log(result);
        res.send(result);

      }
    }
  );
})


app.post('/postExerciseHistory', (req, res) => {
  console.log(req.body);
  var iduser = req.body.params.iduser;
  var idexercise = req.body.params.idexercise;
  
  //const { iduser, idmeal } = req.query;
  pool.query(
    "INSERT INTO test.exerciseHistory (iduser, idexercise) VALUES (?, ?)",
    [iduser, idexercise],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error adding exercise");
      } else {
        console.log(result);
        res.send(result);

      }
    }
  );
})

// app.get('/getmealhistory', (req, res) => {
//   const { id } = req.query;
//   pool.query(
//     "SELECT * FROM test.mealHistory WHERE iduser = ?",
//     [id],
//     (err, result) => {
//       if (err) {
//         console.error(err);
//       } else {
//         //console.log(result);
//         res.send(result);
//       }
//       //res.end();
//     }
//   );
// })

app.get('/getmealhistory', (req, res) => {
  const { id } = req.query;
  pool.query(
    "SELECT meals.*, mealHistory.* FROM test.mealHistory JOIN test.meals ON meals.idmeal = mealHistory.idmeal WHERE iduser = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving meal history");
      } else {
        //console.log(result);
        res.send(result);
      }
    }
  );
});

app.get('/getexercisehistory', (req, res) => {
  const { id } = req.query;
  pool.query(
    "SELECT exercises.*, exerciseHistory.* FROM test.exerciseHistory JOIN test.exercises ON exercises.idexercise = exerciseHistory.idexercise WHERE iduser = ?",
    [id],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error retrieving exercise history");
      } else {
        //console.log(result);
        res.send(result);
      }
    }
  );
});




app.get('/', (req, res) => {
  res.json('This is the backend');
})







// Start the server
app.listen(8800, () => {
  console.log('Server listening on port 8800');
});