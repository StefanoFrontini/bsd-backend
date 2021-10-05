"use strict";
const axios = require("axios");
const url = "https://api.telegram.org/bot";
const telegramToken = process.env.telegramToken;
const telegramChatId = process.env.telegramChatId;

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
        ${data.testoGac ? data.testoGac : ""}
        ${data.da[0].nome} ${data.da[0].cognome} ${data.da[0].professione}
        `;

        try {
          await axios.post(`${url}${telegramToken}/sendMessage`, {
            chat_id: telegramChatId,
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
        ${data.stelline} stellina/e!
        ${data.testoReview ? data.testoReview : ""}
        ${data.da[0].nome} ${data.da[0].cognome} ${data.da[0].professione}

        `;

        try {
          await axios.post(`${url}${telegramToken}/sendMessage`, {
            chat_id: telegramChatId,
            text: message,
          });
        } catch (err) {
          console.log(err);
        }
      }
    },
  },
};
