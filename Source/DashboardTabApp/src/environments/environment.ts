export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemotesting.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://presales-bot-bot.azurewebsites.net/api/Request/",
        tenantId: "b39138ca-3cee-4b4a-a4d6-cd83d9dd62f0",
        clientId: "b516f2c5-3004-412b-80b2-ebc399254195",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
