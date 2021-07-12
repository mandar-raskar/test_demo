var user_schema = require("../models/users")


module.exports.getAllUsersData = async (req, res, next) => {
    try {
      let userposts = await user_schema.User.aggregate([
        {
          $group: {
            _id: '$user.uid',
            total_likes: { $sum: '$likes' }
          }
        },
  
      ])
  
      return res.status(200).send({ data: userposts })
    }
    catch (error) {
      return res.status(400).send({ error: error })
    }
  }

module.exports.getSingleUsersData = async (req, res, next) => {
    const uid = req.query.uid
    try {
      let userposts = await user_schema.User.aggregate([
        { $match: { 'user.uid': uid } },
        {
          $group: {
            _id: uid,
            total_likes: { $sum: '$likes' }
          }
        },
  
      ])
      return res.status(200).send({ data: userposts })
    }
    catch (error) {
      return res.status(400).send({ error: error })
    }
  }