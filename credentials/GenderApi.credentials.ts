import {
    ICredentialType,
    INodeProperties,
    IAuthenticateGeneric,
    ICredentialTestRequest,
} from 'n8n-workflow';

export class GenderApi implements ICredentialType {
    name = 'genderApiCredentials';
    displayName = 'Gender API Credentials';
    documentationUrl = 'https://gender-api.com/en/api-docs/v2';

    properties: INodeProperties[] = [
        {
			displayName: 'API base URL',
			name: 'apiBaseUrl',
			type: 'string',
			default: 'https://gender-api.com/v2/',
			placeholder: 'https://gender-api.com/v2/',
		},
        {
            displayName: 'API Key',
            name: 'apiKey',
            type: 'string',
            typeOptions: { password: true },
            default: '',
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                Authorization: '=Bearer {{$credentials.apiKey}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: 'https://gender-api.com/',
            url: 'get-stats',
            method: 'GET',
            qs: {
                key: '={{$credentials.apiKey}}',
            },
        },
        rules: [
            {
                type: 'responseSuccessBody',
                properties: {
                    key: 'errmsg',
                    value: 'invalid or missing key',
                    message: 'Invalid or missing key.'
                }
            },
        ]
    };
}
