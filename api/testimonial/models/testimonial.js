"use strict";
const axios = require("axios");
const url = "https://api.telegram.org/bot";
const telegramToken = process.env.telegramToken;
const telegram_chat_id = process.env.telegram_chat_id;

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async afterCreate(data) {
      if (data.generosita) {
        const message = `Un applauso a ${data.a[0].nome} ${data.a[0].cognome}!
        Ha aiutato ${data.da[0].nome} ${data.da[0].cognome} a fatturare ${
          data.generosita
        }€!
        Messaggio di ${data.da[0].nome}: ${data.testoGac ? data.testoGac : ""}`;

        try {
          await axios.post(`${url}${telegramToken}/sendMessage`, {
            telegram_chat_id,
            text: message,
          });
        } catch (err) {
          console.log(err);
        }
      }

      if (data.stelline) {
        const message = `${data.da[0].nome} ${
          data.da[0].cognome
        } ha fatto una recensione per ${data.a[0].nome} ${data.a[0].cognome}!
        Valutazione: ${data.stelline} stellina/e
        Messaggio di ${data.da[0].nome}: ${
          data.testoReview ? data.testoReview : ""
        }`;

        try {
          await axios.post(`${url}${telegramToken}/sendMessage`, {
            chat_id,
            text: message,
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
