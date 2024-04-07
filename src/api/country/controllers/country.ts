/**
 * country controller
 */

import { factories } from "@strapi/strapi";
import axios from "axios";

export default factories.createCoreController(
  "api::country.country",
  ({ strapi }) => ({
    async healthCheck(ctx) {
      try {
        const data = await axios.get("https://restcountries.com/v3.1/all");
        const listCountries = data.data;
        listCountries.forEach(async (country) => {
          await strapi.entityService.create('api::country.country', { data: {name: country.name.common }});
        });
        ctx.body = "ok";
      } catch (err) {
        ctx.body = err;
      }
    },
  })
);
