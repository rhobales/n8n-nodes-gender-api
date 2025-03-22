import { INodeProperties } from "n8n-workflow";

export const determineGenderOperations: INodeProperties[] = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: {
            show: {
                resource: ['determineGender'],
            },
        },
        options: [
            {
                name: 'Query Gender',
                value: 'query',
                action: 'Retrieve Gender',
                description: 'Use this operation to retrieve the gender based on input data.'
            },
        ],
        default: 'query',
    },
];