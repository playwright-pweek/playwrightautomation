const { request, expect } = require("@playwright/test");
const axios = require("axios"); // Import axios for HTTP requests
const faker = require("faker"); // Import faker for generating random data

async function createProperty({ page }) {
  const cookies = await page.context().cookies();
  const XSRFToken = cookies.find((cookie) => cookie.name === "XSRF-TOKEN")?.value;
  const ManagerCookie = cookies.find((cookie) => cookie.name === "Manager.AspNet.ApplicationCookie")?.value;
  const cookieValue = `Manager.AspNet.ApplicationCookie=${ManagerCookie};XSRF-TOKEN=${XSRFToken}`;
  const propertyDTO = {
    Name: `Property${faker.random.word()}_From_Playwright`,
    OperatingAccountId: 185257,
    Id: 0,
    TypeId: 2,
    SubTypeId: 1,
    NumberUnits: 0,
    OperatingAccountName: "accountName",
    RentalOwnerIds: [],
    PropertyReserve: 0,
    IsActive: true,
    Address: {
      Id: 0,
      CountryId: 244,
      Line1: "675 North Saint Clair Street",
      Line2: "",
      Line3: "",
      City: "Chicago",
      State: "IL",
      PostalCode: "76576",
      Latitude: null,
      Longitude: null,
    },
    Units: [],
    CreatedDateTime: null,
    Description: "A lovely place to live",
    FeatureIds: [],
    Url: null,
    OperatingGLAccountCountryId: 244,
    FiscalYearEndMonth: 12,
    FiscalYearEndDay: 31,
    RentalOwners: [],
    IncludeLiabilitiesOnStatements: true,
  };

  let apiEndpoint = `https://narender2845.buildiumstaging.com/manager/api/properties`; // Full API URL
  const apiRequestConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: apiEndpoint,
    headers: {
      "Content-Type": "application/json",
      "X-XSRF-TOKEN": XSRFToken,
      cookie: cookieValue, // Set the cookie header with the token'
    },
    data: propertyDTO,
  };
  try {
    const apiResponse = await axios.request(apiRequestConfig);
    console.log("API response: ", apiResponse.data);
    await expect(apiResponse.status).toBe(200); // Check if the response status is 200
  } catch (error) {
    console.log(`Error in POST API request - ${error}`);
  }
}

module.exports = { createProperty };
