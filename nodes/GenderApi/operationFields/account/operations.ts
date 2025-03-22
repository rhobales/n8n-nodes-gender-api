import { INodeProperties } from "n8n-workflow";

export const accountOperations: INodeProperties[] = [
    {
        displayName: 'Account Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['account'],
            },
        },
        options: [
            {
                name: 'Get Account Stats',
                value: 'get',
                action: 'Retrieve account statistics',
                description: 'Use this operation to retrieve statistics and details for your account.'
            },
        ],
        default: 'get',
    },
];