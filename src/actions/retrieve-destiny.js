import { Credentials } from "../../config/credentials.js";
import fetch from "node-fetch";
import * as _headers from "../utils/headers.js";
import fs from "fs";
import { URLSearchParams } from "url";

export const refreshManifest = async () => {
	try {
		const masterList = await fetch(`${Credentials.destiny.rootPath}/Manifest`, {
			method: "GET",
			headers: { ..._headers.destinyHeaders() },
		})
		const manifestFetch = await fetch(
						`${Credentials.destiny.rootPath}${masterList.jsonWorldContentPaths.en}`,
						{
							method: "GET",
							headers: { ..._headers.destinyHeaders() },
						}
					)

		Promise.resolve(fs.writeFileSync(Credentials.destiny.manifestLocation, manifestFetch))
	} catch {
		(err) => {
			throw new Error(err);
		};
	}
};

export const getVendorItems = async () => {
	try {
		fetch(
			`${Credentials.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
			}
            
		).then((res) => {
			return res.json();
		});
	} catch (err) {
		throw new Error(err);
	}
};

export const getGunsmithItems = async () => {
	try {
		fetch(
			`${Credentials.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
			}
		).then((res) => {
			return res.json();
		});
	} catch (err) {
		throw new Error(err);
	}
};

// not implemented yet. See next method
export const getAuthorization = (state) => {
	try {
		const authorization = await fetch(
			`${Credentials.destiny.oauthUrl}?client_id=${Credentials.destiny.oathClientId}&response_type=code&state=${state}`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
			}
		).then((resp) => Promise.resolve(getAuthToken(resp)))
	}
	catch (err) { throw new Error(err)}
}
// Honestly not gonna use this until more users are using this app, since no UI aside from discord
export const getAuthToken = (code) => {
	try {
		const token = await fetch(
			`${Credentials.destiny.oauthUrl}?client_id=${Credentials.destiny.oathClientId}&response_type=code&state=${state}`,
			{
				method: "POST",
				headers: { 
					..._headers.destinyAuthHeaders() },
				body: new URLSearchParams({
					"grant_type": "authorization_code",
					"code": code,
					"client_id": Credentials.destiny.client_id,
					"client_secret": Credentials.destiny.client_secret
				})
			}
		)
	}
	catch (err) { throw new Error(err)}
}