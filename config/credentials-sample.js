class Credentials {
    discord = {
        // discord values all taken from bot's application page in discord developer portal
        botToken: "",
        appId: "",
        publicKey: "",
        clientId: "",
        //ID for discord server, replace with ID for clan once testing completed
        testGuildId: "",
        wbwGuildId: ""
    };
    destiny = {
        appName: "wbw-bot",
        apiKey: "", // Generate this with your Bungie account
        oauthUrl: "https://www.bungie.net/en/OAuth/Authorize",
        oathClientId: "", // this and the next field are taken from Bungie account
        oathClientSecret: "",
        suggestedHeaders:{
            "User-Agent": "AppName/Version AppId/appIdNum (+webUrl;contactEmail)"
        },
        contactEmail: "", // your email
        appVersion: "1.0.0",
        rootPath: "https://www.bungie.net/Platform/Destiny2",
        bungieMembershipType: 254, // Bungie account is always type 254
        destinyMembershipType: 1, // xbox live account. 1 for xbox, 2 for ps, 3 for battle.net
        membershipId: "", // connected to user profile, used Postman to get this value from the Destiny API directly
        displayName: "", // xbox display
        bungieGlobalDisplayName: "", // Bungie display name w/o numbers
        bungieGlobalDisplayNameCode: 0000, // numbers after bungie display name
        manifestLocation: "" // save location for downloaded manifest file from Destiny API. This is a GIANT json object
    };
}

module.exports = new Credentials();
