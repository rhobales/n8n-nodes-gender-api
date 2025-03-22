import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { genderApiRequest } from '../../../GenericFunctions';

export async function handleGetAccount(this: IExecuteFunctions, index: number, qs: IDataObject): Promise<IDataObject> {
    try {
        const credentials = await this.getCredentials('genderApiCredentials');
        const apiBaseUrl = credentials.apiV1BaseUrl as string;
        const apiKey = credentials.apiKey as string;
        const endpoint = 'get-stats';

        const requestQs = { ...qs, key: apiKey };

        return await genderApiRequest.call(this, 'GET', '', {}, requestQs, `${apiBaseUrl}${endpoint}`);
    } catch (error) {
        throw new Error(`Failed to fetch account: ${error.message}`);
    }
}