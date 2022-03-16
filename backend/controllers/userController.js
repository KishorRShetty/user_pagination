const userModel = require("../models/userModel");

exports.registerUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    // we can also use const us = new userModel(user) and await us.save()
    //get data from the body
    //I think we can also send createdAt from here. But here it's included in the model.
    // passing the user and email from here
    //201 created
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "data Error",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "data Error",
    });
  }
};
