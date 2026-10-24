import db from "../db/queries.js";

const deleteMessage = async (req, res) => {
  const messageId = req.params.messageId;
  await db.deleteMessage(messageId);
  res.redirect("/");
};

export default deleteMessage;
