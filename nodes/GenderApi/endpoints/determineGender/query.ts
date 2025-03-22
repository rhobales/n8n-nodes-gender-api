import { IExecuteFunctions, IDataObject } from "n8n-workflow";
import { genderApiRequest } from "../../../GenericFunctions";

export async function handleGenderQuery(this: IExecuteFunctions, index: number, qs: IDataObject): Promise<IDataObject> {
    try {
        const queryBy = this.getNodeParameter('queryBy', index) as string;
        let payload: IDataObject[] = [];

        if (queryBy === 'oFirstname') {
            const firstnames = this.getNodeParameter('firstnames', index) as IDataObject;
            const firstNameEntries = firstnames?.firstNameEntries as IDataObject[];

            if (!firstNameEntries || firstNameEntries.length === 0) {
                throw new Error('At least one first name must be provided.');
            }

            payload = firstNameEntries.map(entry => {
                const firstname = entry.firstname as string;
                const additionalFields = entry.additionalFields as IDataObject || {};

                return {
                    first_name: firstname,
                    country: additionalFields.countryCode || undefined,
                    locale: additionalFields.browserLocale || undefined,
                    ip: additionalFields.ip || undefined,
                    id: additionalFields.id || undefined,
                };
            });
        }

        return await genderApiRequest.call(this, 'POST', 'gender', payload);
    } catch (error) {
        throw new Error(`Failed to process gender query: ${error.message}`);
    }
}