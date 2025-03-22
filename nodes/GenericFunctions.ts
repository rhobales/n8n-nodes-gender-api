import { IExecuteFunctions, IExecuteSingleFunctions, ILoadOptionsFunctions, IHttpRequestMethods, IDataObject, IRequestOptions, NodeApiError } from "n8n-workflow";

export async function genderApiRequest(
    this: IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
    method: IHttpRequestMethods,
    endpoint: string,
    body: any = {},
    qs: IDataObject = {},
    uri?: string,
    option: IDataObject = {}
): Promise<any> {

    const credentials = await this.getCredentials('genderApiCredentials');
    const apiBaseUrl = credentials.apiBaseUrl as string;
    const apiKey = credentials.apiKey as string;

    let options: IRequestOptions = {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
        },
        method,
        body,
        qs,
        uri: uri || `${apiBaseUrl}${endpoint}`,
        json: true,
    };

    options = Object.assign({}, options, option);

    if (Object.keys(body).length === 0) {
        delete options.body;
    }

    let responseData: IDataObject | undefined;
    
    try {
        responseData = await this.helpers.request(options);

    } catch (error) {
        throw new NodeApiError(this.getNode(), error);
    }

    if (Object.keys(responseData as IDataObject).length !== 0) {
        return responseData;
    } else {
        return { 'success': true };
    }
}