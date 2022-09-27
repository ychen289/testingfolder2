const express = require("express");
const app = express();
const volleyball = require("volleyball");

// app.use ("*", (req, res, next) => {
//     console.log("MIDDLEWARE HIT")
//     next()
// })

app.use(volleyball); /*basically just some middleware we got off the internet
                      that we using instead of the custom one we wrote above. 
                      Not sure why its not working  */
/*LEFT OFF AT LECTURE 9 TIMESTAMP W/ 31.58 LEFT. TALKING ABOUT EXPRESS.STATIC */

const path = require("path");
const static = express.static(path.join(__dirname, "photos"));
app.use(static);

app.get("/", (req, res, next) => {
  console.log("ENDPOINT IS HIT");
  res.send(`<h1>HELLO WORLD WE HIT</h1>
            <img src="pastel green.png"/>`);
});

const users = require("./userData/user"); //MUST DO THE ./ IF ADJACENT

app.get("/users", (req, res, next) => {
  res.send(users);
});

app.get("/users/:index", (req, res, next) => {
  const userIndex = req.params.index;
  const displayedUser = users[userIndex];
  res.send(displayedUser);
});

// app.get("/users/:index/name", (req, res, next) => {
//   const userIndex = req.params.index;
//   const displayedUser = users[userIndex];
//   res.send(displayedUser.name);
// });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`CONNECTED ON PORT ${PORT}`);
});

/*LECTURE 12 TIMESTAMP WHERE HE TALKS ABOUT THE STACK*/
