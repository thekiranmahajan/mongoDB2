var express = require("express");
var router = express.Router();

const userModel = require("./users");

router.get("/", function (req, res) {
  res.render("index");
});
//Intermediate mongoDB:

// router.get("/createuser", async function (req, res) {
//   const userData = await userModel.create({
//     username: "theRayOP",
//     fullName: "Ray Mahajan",
//     description:
//       "A cool Minecraft player who likes to explore virtual world of possibilities",
//     categories: ["diamond", "lapiz", "trustworthy"],
//   });
//   res.send(userData);
// });

// router.get("/createuser", async function (req, res) {
//   const userData = await userModel.create({
//     username: "theRayOPPP",
//     fullName: "Kiran Mahajan",
//     description: "A programmer who likes to code in javascript",
//     categories: ["javascript", "react", "diamond"],
//   });

//   res.send(userData);
// });
// router.get("/createuser", async function (req, res) {
//   const userData = await userModel.create({
//     username: "kiranMahajan",
//     fullName: "Mahajan kiran",
//     description: "likes to code in javascript",
//     categories: ["tailwindCSS", "html", "javascript"],
//   });

//   res.send(userData);
// });
// router.get("/createuser", async function (req, res) {
//   const userData = await userModel.create({
//     username: "Rayyy",
//     fullName: "RayMahajan",
//     description: "Wit's Friend",
//     categories: ["caring", "smart", "trustworthy"],
//   });

//   res.send(userData);
// });

// router.get("/find", async function (req, res) {
//   let regex = new RegExp("^rAY$", "i");
//   const userFound = await userModel.find({ username: regex });
//   res.send(userFound);
// });

// router.get("/find", async function (req, res) {
//   const userFound = await userModel.find({
//     categories: { $all: ["diamond", "lapiz"] },
//   });
//   res.send(userFound);
// });

// router.get("/find", async function (req, res) {
//   let dateOne = new Date("2023-12-09");
//   let dateTwo = new Date("2023-12-11");
//   const users = await userModel.find({
//     dateCreated: { $gte: dateOne, $lte: dateTwo },
//   });
//   res.send(users);
// });

// router.get("/find", async function (req, res) {
//   let userContainsField = await userModel.find({
//     categories: { $exists: true },
//   });
//   res.send(userContainsField);
// });

router.get("/find", async function (req, res) {
  let user = await userModel.find({
    $expr: {
      $and: [
        { $gte: [{ $strLenCP: "$description" }, 28] },
        { $lte: [{ $strLenCP: "$description" }, 100] },
      ],
    },
  });
  res.send(user);
});

//connect-flash:

// router.get("/createdata", function (req, res) {
//   req.flash("name", "Ray");
//   req.flash("age", 22);
//   res.send("data is created using flash");
// });
// router.get("/checkdata", function (req, res) {
//   console.log(req.flash("name"), req.flash("age"));
//   res.send("check the terminal");
// });

module.exports = router;
