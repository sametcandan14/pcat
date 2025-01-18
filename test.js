const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//connect db

mongoose.connect("mongodb://localhost/pcat-test-db");

//create Schema

const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model("Photo", PhotoSchema);

//create a Photo

/* Photo.create({
  title: "Photo title 2",
  description: "Photo decription 2",
});
 */

//read a photo

// Photo.find().then((data) => console.log(data));

// update a photo

// const id = "678c274434c9144807475d2a";

/* Photo.findByIdAndUpdate(
  id,
  {
    title: "Photo title 1 updated3",
    description: "Photo description 1 updated3",
  },
  { new: true }
).then((data) => console.log(data)); */

// delete a photo

/* const id = "678c28d4c4672a5d6453c1f2";

Photo.findByIdAndDelete(id).then(() => console.log("photo is removed")); */
