import * as config from "../../config/credentials.js";
import fetch from "node-fetch";
import * as _headers from "../utils/headers.js";
import fs from "fs";

export const refreshManifest = () => {
	try {
		fetch(`${config.destiny.rootPath}/Manifest`, {
			method: "GET",
			headers: { ..._headers.destinyHeaders() },
		}).then(res => {
				console.log(res.json().destiny.rootPath);
				fetch(
					`${config.destiny.rootPath}${res.jsonWorldContentPaths.en}`,
					{
						method: "GET",
						headers: { ..._headers.destinyHeaders() },
					}
				).then((result) => {
                    fs.writeFileSync(config.destiny.manifestLocation, result.json());
                    console.log("wrote new Manifest");
                    return config.destiny.manifestLocation;
                });
			})
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
