import { IExecuteFunctions, IDataObject } from 'n8n-workflow';
import { genderApiRequest } from '../../../GenericFunctions';

export async function handleGetAccount(this: IExecuteFunctions, index: number, qs: IDataObject): Promise<IDataObject> {
    try {
        return await genderApiRequest.call(this, 'POST', 'statistic');
    } catch (error) {
        throw new Error(`Failed to fetch account: ${error.message}`);
    }
}