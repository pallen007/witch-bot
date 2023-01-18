import { Credentials } from "../../config/credentials.js";
// import fetch from "node-fetch";
import * as _headers from "../utils/headers.js";
import * as fs from "fs/promises";
import { URLSearchParams } from "url";

// export const refreshManifest = async () => {
// 	try {
// 		const masterList = await fetch(`${Credentials.destiny.rootPath}/Manifest`, {
// 			method: "GET",
// 			headers: { ..._headers.destinyHeaders() },
// 		})
// 		await fetch(
// 				`${Credentials.destiny.rootPath}${masterList.json().jsonWorldContentPaths.en}`,
// 				{
// 					method: "GET",
// 					headers: { ..._headers.destinyHeaders() },
// 				}
// 			).then((resp) => {
// 				fs.writeFile(Credentials.destiny.manifestLocation, resp.json(), (err) => {
// 					if (err) throw err;
// 					console.log("finished writing data")
// 				})
// 			})
// 	} catch {
// 		(err) => {
// 			console.log(err)
// 		}
// 	}
// };

const fetchMasterIndex = async () => {
	try {
		await fetch(`https://www.bungie.net/Platform/Destiny2/Manifest`, {
			method: "GET",
			headers: { ..._headers.destinyHeaders() },
			credentials: "include"
		}).then( (resp) => {
			if (!Response.ok) {
				throw new Error(`Fetch error: ${response.status}`)
			}
			return resp.json()
		})
	}
	catch {
		(err) => {
			console.log(err)
		}
	}
	}

const fetchJSONManifest = async () => {
	console.log(fetchMasterIndex())
	try {

		const manifest = await fetch(
			`${Credentials.destiny.rootPath}${fetchMasterIndex().jsonWorldContentPaths.en}`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
				credentials: "include"
			}
		)
		const retValue = await manifest.json()
		return retValue
	}
	catch {
		(err) => {
			console.log(err)
		}
	}
	
}


export const refreshManifest = async () => {
	fetchMasterIndex().then((resp) => {
		if (!Response.ok) {
			console.log("Something went wrong with the fetch.")
			console.log(Response.statusText)
			console.log(resp)
		}
		else console.log(Response.body)
	})
	// await fetchJSONManifest().then((resp) => {
	// 	fs.writeFile(Credentials.destiny.manifestLocation, resp, (err) => {
	// 		if (err) throw err;
	// 		console.log("finished writing data")
	// 	})
	// })
}

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
export const getAuthorization = async(state) => {
	try {
		const authorization = await fetch(
			`${Credentials.destiny.oauthUrl}?client_id=${Credentials.destiny.oathClientId}&response_type=code&state=${state}`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
			}
		)
		return getAuthToken(authorization)
	}
	catch (err) { throw new Error(err)}
}
// Honestly not gonna use this until more users are using this app, since no UI aside from discord
export const getAuthToken = async(code) => {
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
		return token
	}
	catch (err) { throw new Error(err)}
}