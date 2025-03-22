import {
    INodeType,
    INodeTypeDescription,
    NodeConnectionType,
    INodeExecutionData,
    IDataObject,
    IExecuteFunctions
} from 'n8n-workflow';
import { endpointHandler } from './endpoints/handler';
import { accountOperations } from './operationFields/account/operations';
import { accountFields } from './operationFields/account/fields';
import { determineGenderOperations } from './operationFields/determineGender/operations';
import { determineGenderFields } from './operationFields/determineGender/fields';

export class GenderApi implements INodeType {
    description: INodeTypeDescription = {
        displayName: 'Gender API',
        name: 'genderApi',
        icon: 'file:/assets/genderApi.svg',
        group: ['transform'],
        version: 1,
        subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
        description: 'Provides integration with the Gender API to analyze and determine gender predictions',
        defaults: {
            name: 'genderApi',
        },
        inputs: [NodeConnectionType.Main],
        outputs: [NodeConnectionType.Main],
        credentials: [
            {
                name: 'genderApiCredentials',
                required: true,
            },
        ],
        properties: [
            {
                displayName: 'Resource',
                name: 'resource',
                noDataExpression: true,
                type: 'options',
                options: [
                    {
                        name: 'Account',
                        value: 'account'
                    },
                    {
                        name: 'Determine gender',
                        value: 'determineGender'
                    },
                ],
                default: 'determineGender',
            },
            ...accountOperations,
            ...accountFields,
            ...determineGenderOperations,
            ...determineGenderFields
        ]
    };

    async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
        const items = this.getInputData();
        const length = items.length as number;
        const returnData: IDataObject[] = [];

        const resource = this.getNodeParameter('resource', 0) as string;
        const operation = this.getNodeParameter('operation', 0) as string;

        for (let i = 0; i < length; i++) {
            const qs: IDataObject = {};
            let responseData: IDataObject | IDataObject[] | undefined;

            try {
                responseData = await endpointHandler.call(this, resource, operation, i, qs);

                if (Array.isArray(responseData)) {
                    returnData.push(...responseData);
                } else if (responseData !== undefined) {
                    returnData.push(responseData);
                }
            } catch (error) {
                throw error;
            }
        }

        return [this.helpers.returnJsonArray(returnData)];
    }
}