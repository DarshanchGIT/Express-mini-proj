const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

// Meta data
var user = [
  {
    name: "darshan",
    kidneyStat: [
      {
        healthy: true,
      },
    ],
    //user[0]
  },
  {
    name: "rahul",
    kidneyStat: [
      {
        healthy: false,
      },
    ],
  },
  {
    name: "madhav",
    kidneyStat: [
      {
        healthy: false,
      },
    ],
  },
  {
    name: "gaurav",
    kidneyStat: [
      {
        healthy: true,
      },
    ],
  },
];

// Add Kidney method
const addKidney = () => {
  user.push(...user);
};

//Check if its unhealthy
function isUnhealthy(donor) {
  return donor.kidneyStat[0].healthy == true;
}

// 1. GET method

app.get("/get", (req, res) => {
  //basically displays user
  res.json({
    "All listed users are": user,
  });
});

//Extra GET method

app.get("/get2", (req, res) => {
  //this router is just there to tell the kidney status nothing much
  const darshanData = user[0];
  res.json(`Darshan kidney status : ${darshanData.kidneyStat[0].healthy}`);
});

// 2. POST method

app.post("/post", (req, res) => {
  //adding a new kidney
  const total2 = 2 * user.length;
  addKidney();
  res.json({
    "Users successfully added ": user,
  });
});

//3.PUT method

app.put("/put", (req, res) => {
  //let's replace darshan kidney as healthy to unhealthy
  const darshanData = user[0];
  darshanData.kidneyStat[0].healthy = false;
  res.send("Darshan kidney status successfully updated !! ");
});

//4. DELETE method

app.delete("/delete", (req, res) => {
  // This route deletes unhealthy donors
  user = user.filter((donor) => isUnhealthy(donor));

  // Assuming you want to send back some response indicating success
  res.json({
    message: "Unhealthy donors successfully removed",
    updatedUser: user,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
