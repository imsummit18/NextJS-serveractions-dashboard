import { User } from "./models/userModel";
import { connectToDB } from "./utilis";

export const fetchUsers = async (q: any, page: any) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 1;
  try {
    connectToDB();
    let users;
    if (q.length > 1) {
      users = await User.find({ username: { $regex: regex } })
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
    } else {
      users = await User.find()
        .limit(ITEM_PER_PAGE)
        .skip(ITEM_PER_PAGE * (page - 1));
    }
    if (!users) {
      throw new Error("Users not found");
    }
    console.log("The users are", users);
    return users;
  } catch (err) {
    console.log("The error is", err);
    throw new Error("Faied to fetched users");
  }
};
