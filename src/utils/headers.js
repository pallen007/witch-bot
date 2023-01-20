import {Credentials} from "../../config/credentials.js";
// common headers

export const destinyHeaders = () => {
	return {
		"X-API-Key": `${Credentials.destiny.apiKey}`,
		"User-Agent": `${Credentials.destiny.appName}/${Credentials.destiny.appVersion} AppId/appIdNum (${Credentials.destiny.contactEmail})`,
		"Content-Type": "application/json"
	};
};

export const destinyAuthHeaders = () => {
	return {
		// remember to account for content type in the default headers if it's still there
		"Content-Type": "application/x-www-form-urlencoded",
		...destinyHeaders()
	}
}
