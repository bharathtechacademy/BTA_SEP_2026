import { expect, request } from '@playwright/test';
import config from '../../config/config.json';

export class APICommons {

    private requestContext: any; //to hold the context of API requests, like base URL, headers, etc. 
    private response: any; //to hold the response received from API requests.
  
    //Common method to create the API request context 
    async intializeRequestContext() {
        this.requestContext = await request.newContext({
            baseURL: config.api.base_url,
            extraHTTPHeaders: {
                'Accept': 'application/vnd.github+json',
                'Authorization': config.api.token,
                'X-GitHub-Api-Version': '2026-03-10'
            }
        });
    }

    //Common method to send the API request to get the response 
    async getResponse(requestType: string, endPoint: string, requestBody?: any) {

        switch (requestType.toLowerCase()) {

            case 'get':
                this.response = await this.requestContext.get(endPoint);
                break;

            case 'post':
                this.response = await this.requestContext.post(endPoint, { data: requestBody });
                break;

            case 'put':
                this.response = await this.requestContext.put(endPoint, { data: requestBody });
                break;

            case 'patch':
                this.response = await this.requestContext.patch(endPoint, { data: requestBody });
                break;

            case 'delete':
                this.response = await this.requestContext.delete(endPoint);
                break;

            default:
                throw new Error(`Unsupported request type: ${requestType}`);

        }

        //Wait for 2 seconds and print the response body within the console. 
        await new Promise(resolve => setTimeout(resolve,4000));
        if(requestType!=='delete'){
            console.log(await this.response.json());
        }
    }

    //Common method to validate the response status code 
    async validateStatusCode(expStatusCode: number) {
        const actualStatusCode = this.response.status();
        expect(actualStatusCode).toBe(expStatusCode);
    }

    //Common method to validate the status message 
    async validateStatusMessage(expStatusMessage: string) {
        const actualStatusMessage = this.response.statusText();
        expect(actualStatusMessage).toContain(expStatusMessage);
    }

    //Common method to validate the key and expected value within the response body 
    async validateResponseBody(key: string, expectedValue: string) {
        const responseBody = await this.response.json();
        const actualValue = await responseBody[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Common method to validate the key and expected value within the response body 
    async validateResponse(key: string, expectedValue: string) {
        const responseBody = await this.response.json();
        //handle nested properties like errors[0].message
        if(key.includes('[')){
            const [arrayKey, indexAndProperty] = key.split('['); //errors, 0].message
            const [index, property] = indexAndProperty.split('].'); // 0, message
            const actualValue = responseBody[arrayKey][Number(index)][property]; //arrayKey=errors , index=0, property=message
            expect(actualValue).toBe(expectedValue);
            return;
        }

        const actualValue = await responseBody[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Common method to validate the response headers 
    async validateResponseHeaders(key: string, expectedValue: string) {
        const responseHeaders = await this.response.headers();
        const actualValue = await responseHeaders[key];
        expect(actualValue).toBe(expectedValue);
    }

    //Common method to validate the schema
    async validateResponseSchema(key: string, expectedDatatype: string) {
        const responseBody = await this.response.json();
        if(key.includes('[')){
            const [arrayKey, indexAndProperty] = key.split('['); //errors, 0].message
            const [index, property] = indexAndProperty.split('].'); // 0, message
            const actualValue = responseBody[arrayKey][Number(index)][property]; //arrayKey=errors , index=0, property=message
            expect(typeof actualValue).toBe(expectedDatatype);
            return;
        }else{
            const actualValue = await responseBody[key];
            expect(typeof actualValue).toBe(expectedDatatype);
        }
    }

}