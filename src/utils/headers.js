import * as credentials from "../../config/credentials.js";
// common headers

export const destinyHeaders = () => {
	return {
		"X-API-Key": `${credentials.destiny.apiKey}`,
		"User-Agent": `${credentials.destiny.appName}/${credentials.destiny.appVersion} AppId/appIdNum (${credentials.destiny.contactEmail})`,
	};
};
