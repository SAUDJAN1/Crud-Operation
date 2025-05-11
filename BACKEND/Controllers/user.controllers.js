import Post from "../Models/user.model.js";
//create Post
export const Create = async (req, res) => {
  try {
    const { title, author } = req.body;

    const addPost = await Post.create({
      title,
      author,
    });
    return res
      .status(201)
      .json({ success: true, msg: "Post Created Successfully", addPost });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error in Create Controller",
      err: error.message,
    });
  }
};
// Read Post
export const ReadAll = async (req, res) => {
  try {
    const readPost = await Post.find();
    return res.status(200).json(readPost);
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Error in Read All Controller" });
  }
};
export const Update = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Post.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res
      .status(200)
      .json({ success: true, msg: "Post Update Successfully", update });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error in Update Controller",
      err: error.message,
    });
  }
};
export const Delete = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Post.findByIdAndDelete(id);
    return res.status(200).json({
      success: true,
      msg: "User Deleted Successfully",
      del,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, msg: "Error in Delete Controller" });
  }
};
