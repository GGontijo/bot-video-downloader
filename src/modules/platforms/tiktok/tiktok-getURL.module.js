const axios = require("axios");
const TikChan = require("tikchan");
const logger = require("../../../logger");

const getTiktokURL = async ({ url: rawURL }) => {
  try {
    if (rawURL.includes("vm")) {
      await axios.get(rawURL).then((res) => {
        rawURL = res.request.res.responseUrl;
      });
    }

    const URL = await TikChan.download(rawURL);
    const condition = URL.no_wm;

    if (condition) {
      return URL.no_wm;
    }

    if (condition == false) {
      throw new Error(
        "problema no retorno do link da api TikChan. Talvez o link de entrada esteja incorreto ou inválido"
      );
    }
  } catch (e) {
    logger.error(e.Error);
    return false;
  }
};

module.exports = {
  getTiktokURL,
};
