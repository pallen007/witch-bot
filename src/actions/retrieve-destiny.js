import * as config from "../../config/credentials.js";
import fetch from "node-fetch";
import * as _headers from "../utils/headers.js";
import fs from "fs";

export const refreshManifest = async () => {
	try {
		const masterList = await fetch(`${config.destiny.rootPath}/Manifest`, {
			method: "GET",
			headers: { ..._headers.destinyHeaders() },
		})
		const manifestFetch = await fetch(
						`${config.destiny.rootPath}${masterList.jsonWorldContentPaths.en}`,
						{
							method: "GET",
							headers: { ..._headers.destinyHeaders() },
						}
					)

		fs.writeFileSync(config.destiny.manifestLocation, manifestFetch)
	} catch {
		(err) => {
			throw new Error(err);
		};
	}
};

export const getVendorItems = () => {
	try {
		fetch(
			`${config.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
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

export const getGunsmithItems = () => {
	try {
		fetch(
			`${config.destiny.rootPath}/Vendors?components=Vendors,VendorSales`,
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
