const Comments = require("../models/Comments");

module.exports = {
  createComment: async (req, res) => {
    try {
      await Comments.create({
        comment: req.body.comment,
        madeBy: req.user.id,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect("/post/"+req.params.id);
    } catch (err) {
      console.log(err);
    }
  }
};