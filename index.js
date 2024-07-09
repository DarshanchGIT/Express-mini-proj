//first we need to import express sinze express does not come along with js
const express = require("express");
//then we create a instnace {an App basically using express}
const app = express();
//let's use this
// const PORT = 4000;

//for instance
const sum = (n) => {
  var ans = 0;
  for (let i = 0; i <= n; i += 1) {
    ans += i;
  }
  return ans;
};

app.get("/", (req, res) => {
  const n = req.query.n;
  const temp = sum(n);
  res.send(`<h1>Your sum to n: ${temp} </h1>`);
});

app.listen(PORT, () => {
  console.log(`Server listened on port ${PORT}`);
});
// app.listen();
