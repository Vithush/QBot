export const environment = {
    production: false,
    apiBaseUrl: "https://presalesbot.azurewebsites.net/api/Request/",
    
    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "b39138ca-3cee-4b4a-a4d6-cd83d9dd62f0",
        clientId: "22f82f6e-5e86-422d-be63-d1c09ce0a8d5",
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
