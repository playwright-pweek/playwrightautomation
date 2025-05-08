import { test } from "@playwright/test";
const { login } = require("./manager-site-login.spec.js");
const { createProperty } = require("./api-functions/create-property-api.spec.js");

test("login and create property using api", async ({ page }) => {
  await login({ page }); // Calls the login function
  await createProperty({ page });
});
