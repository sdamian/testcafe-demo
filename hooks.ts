import { RequestHook } from "testcafe";

export class AddCookieHook extends RequestHook {
    constructor() {
        super();
    }
    async onRequest(event) {
        event.requestOptions.headers['Cookie'] = `username=%22BC%22; usemsecstub=true; smsession=%7B%22user%22%3A%22BC400014459%22%2C%22userClass%22%3A%22BC%22%2C%22tasks%22%3A%5B5687%2C164%2C5349%2C5350%2C5351%2C306%5D%2C%22contracts%22%3A%5B%22400014459%22%5D%2C%22authorizedUsers%22%3A%5B%5D%7D`;
    }
    async onResponse(event) {
        // Anything you need to add when you have the response 
    }
}

export class FixUrlsHook extends RequestHook {
    constructor() {
        super();
    }
    async onRequest(requestEvent: any) {
        try {
            if (!requestEvent.isAjax && !requestEvent.requestOptions.isXhr) {
                const path = requestEvent.requestOptions.path;
                requestEvent.requestOptions.path = path.replace("overzicht/", "")
            }
        }
        catch (error) {
            console.log("Error:", error);            
        }
    }
    async onResponse(responseEvent: any) {
    }
}