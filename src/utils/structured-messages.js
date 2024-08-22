const fs = require("fs");
const path = require("path");

const {
  prefixBot,
  shippingAllowed,
} = require("../settings/necessary-settings");

const pathToStatesJson = path.join(
  __dirname,
  "..",
  "..",
  "data",
  "states.json"
);

const rawData = fs.readFileSync(pathToStatesJson, "utf8");
let rootActions = JSON.parse(rawData);

const structuredMessages = {
  readyMessage:
    rootActions.bot_active == 1
      ? `[Bot]\nEstou online, galera 🤖!\nUse *${prefixBot} help* para ver minhas funcionalidades`
      : "[Bot]\Estou ativo, porém sem permisão para executar minhas funções",
  failureDownloadMessage:
    "infelizmente, não deu pra baixar seu vídeo, querido. Sinto muito :(",
  technicalLimitationsMessage:
    "Por limitações tecnicas, só conseguirei mandar o vídeo no formato documento",
  attemptToDownloadMessage: "Tentarei baixar esse vídeo, um momento",
  successDownloadMessage: "Olha seu vídeo ai!",
  successDownloadPhotoMessage: "Sua foto!",
  YTVideoDurationExceededMessage:
    process.env.videoTimeExceeded ||
    "A duração desse vídeo é maior que 5 minutos, o meu máximo é de vídeo até 5 minutos",
  incompatibleFormat:
    "Por aqui tudo certo, mas o vídeo não tem formato compatível com mp4",
  emptyMessageIstrue:
    process.env.emptyMessageIstrue ||
    "Você não passou nada para eu dizer se é verdade ou não",

  extremePositiveMessage:
    process.env.extremePositiveMessage || "Isso ai é muito verdade mesmo",
  positiveMessage: process.env.positiveMessage || "Com certeza isso é verdade",
  negativeMessage: process.env.negativeMessage || "Não... isso não é verdade",
  doubtMessage: process.env.doubtMessage || "Realmente isso eu não sei",
  acusationMessage:
    process.env.acusationMessage || "Na verdade isso é uma verdade sobre você",

  preMsgAttempTextToAudio:
    process.env.preMsgAttempTextToAudio ||
    "Vou tentar transformar essa mensagem em um áudio",
  mgsErrorTextToAudio:
    "Infelizmente, não foi possível transformar seu texto em áudio",
};

module.exports = {
  structuredMessages,
};
