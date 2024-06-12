import mongooes from "mongoose";

const userSchema = new mongooes.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongooes.model.User || mongooes.model("User", userSchema);
export default User;
