import { Credentials } from "../../config/credentials.js";
import * as _headers from "../utils/headers.js";
import * as fs from "fs";
import { URLSearchParams } from "url";
import { Readable } from "stream";

export const downloadFile = async (url, options, path)=> {
	Readable.fromWeb((await fetch(url, options)).body).pipe(fs.createWriteStream(path))
}

// Not used. DownloadFile is used from database-ops instead. Better performance and I don't want to rewrite this method yet again
export const refreshManifest = async () => {
	try {

		const getManifest = await fetch(
			`${Credentials.destiny.rootPath}${Credentials.destiny.apiManifestPath}`,
			{
				method: "GET",
				headers: { ..._headers.destinyHeaders() },
				credentials: "include"
			}
		)
		if (getManifest.json() == null) {
			console.log("No results from fetch")
			throw new Error("request failed")
		} else {
			fs.writeFile(Credentials.destiny.aggregateManifest, JSON.stringify(getManifest.json()), (err) => {
					if (err) throw err;
				}).then(()=> {return true})
		}
		Promise.resolve()
	}
	catch {
		(err) => {
			console.log(err)
		}
	}
	
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