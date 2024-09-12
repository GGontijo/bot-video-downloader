const { stringToGroup } = require("../../settings/necessary-settings");
const { client } = require("../../settings/settings");

module.exports.mentionAll = async function ({ message }) {
  const chat = await client.getChatById(stringToGroup);
  const participants = chat.participants;

  let clearMessage = `${message.replace(/@todos/g, "").trim()}\n\n`;

  const messageWithUsers = participants.map((user) => {
    clearMessage += `@${user.id.user} `;
  });

  const getUsersForMentions = participants.map(
    (user) => user.id.user + "@c.us"
  );

  return await client.sendMessage(stringToGroup, `${clearMessage}`, {
    mentions: getUsersForMentions,
  });
};