import { IExecuteFunctions, IDataObject } from "n8n-workflow";
import { handleGetAccount } from "./account/get";
import { handleGenderQuery } from "./determineGender/query";

export async function endpointHandler(
    this: IExecuteFunctions,
    resource: string,
    operation: string,
    index: number,
    qs: IDataObject
): Promise<IDataObject | IDataObject[] | undefined> {
    let responseData: IDataObject | IDataObject[] | undefined;

    switch (resource) {
        case 'account':
            switch (operation) {
                case 'get':
                    responseData = await handleGetAccount.call(this, index, qs);
                    break;
                default:
                    throw new Error(`Operation ${operation} for resource ${resource} is not supported.`);
            }
            break;

        case 'determineGender':
            switch (operation) {
                case 'query':
                    responseData = await handleGenderQuery.call(this, index, qs);
                    break;
                default:
                    throw new Error(`Operation ${operation} for resource ${resource} is not supported.`);
            }
            break;

        default:
            throw new Error(`Resource ${resource} is not supported.`);
    }

    return responseData;
}