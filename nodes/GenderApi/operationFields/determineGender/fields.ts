import { INodeProperties } from "n8n-workflow";
import { countryCodes } from "../../utils/countryCodes";
import { browserLocales } from "../../utils/browserLocales";

export const determineGenderFields: INodeProperties[] = [
    {
        displayName: 'Query by...',
        name: 'queryBy',
        type: 'options',
        options: [
            {
                name: 'First Name',
                value: 'oFirstname',
            },
            {
                name: 'Full Name',
                value: 'oFullname',
            },
            {
                name: 'E-Mail Address',
                value: 'oEmail'
            }
        ],
        default: 'oFirstname',
        description: 'Select the criterion to query by',
        displayOptions: {
            show: {
                resource: ['determineGender'],
                operation: ['query']
            }
        },
    },
    // Query by firstname
    {
        displayName: 'First Names',
        name: 'firstnames',
        type: 'fixedCollection',
        default: [],
        placeholder: 'Add First Name',
        description: 'Add multiple first names with additional fields.',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['determineGender'],
                operation: ['query'],
                queryBy: ['oFirstname']
            },
        },
        options: [
            {
                name: 'firstNameEntries',
                displayName: 'First Name Entries',
                values: [
                    {
                        displayName: 'First Name',
                        name: 'firstname',
                        type: 'string',
                        required: true,
                        default: '',
                        placeholder: 'John',
                        description: 'The first name of the person whose gender is to be determined.',
                    },
                    {
                        displayName: 'Additional Fields',
                        name: 'additionalFields',
                        type: 'collection',
                        placeholder: 'Add Field',
                        default: {},
                        options: [
                            {
                                displayName: 'Country Code',
                                name: 'countryCode',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...countryCodes
                                ],
                                description: 'ISO 3166 ALPHA-2 country code.',
                            },
                            {
                                displayName: 'Locale',
                                name: 'browserLocale',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...browserLocales
                                ],
                                description: 'Browser locale.',
                            },
                            {
                                displayName: 'IP Address',
                                name: 'ip',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Valid IPv4 or IPv6 address.',
                            },
                            {
                                displayName: 'Internal ID',
                                name: 'id',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Unique identifier for this request.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    //Query by fullname
    {
        displayName: 'Full Names',
        name: 'fullnames',
        type: 'fixedCollection',
        default: [],
        placeholder: 'Add Full Name',
        description: 'Add multiple full names with additional fields.',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['determineGender'],
                operation: ['query'],
                queryBy: ['oFullname']
            },
        },
        options: [
            {
                name: 'fullNameEntries',
                displayName: 'Full Name Entries',
                values: [
                    {
                        displayName: 'Full Name',
                        name: 'fullname',
                        type: 'string',
                        required: true,
                        default: '',
                        placeholder: 'John Doe',
                        description: 'The full name of the person whose gender is to be determined.',
                    },
                    {
                        displayName: 'Additional Fields',
                        name: 'additionalFields',
                        type: 'collection',
                        placeholder: 'Add Field',
                        default: {},
                        options: [
                            {
                                displayName: 'Country Code',
                                name: 'countryCode',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...countryCodes
                                ],
                                description: 'ISO 3166 ALPHA-2 country code.',
                            },
                            {
                                displayName: 'Locale',
                                name: 'browserLocale',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...browserLocales
                                ],
                                description: 'Browser locale.',
                            },
                            {
                                displayName: 'IP Address',
                                name: 'ip',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Valid IPv4 or IPv6 address.',
                            },
                            {
                                displayName: 'Internal ID',
                                name: 'id',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Unique identifier for this request.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
    //Query by E-Mail
    {
        displayName: 'E-Mails',
        name: 'emails',
        type: 'fixedCollection',
        default: [],
        placeholder: 'Add E-Mail',
        description: 'Add multiple E-Mail Addresses with additional fields.',
        typeOptions: {
            multipleValues: true,
        },
        displayOptions: {
            show: {
                resource: ['determineGender'],
                operation: ['query'],
                queryBy: ['oEmail']
            },
        },
        options: [
            {
                name: 'emailEntries',
                displayName: 'E-Mail Entries',
                values: [
                    {
                        displayName: 'E-Mail',
                        name: 'email',
                        type: 'string',
                        required: true,
                        default: '',
                        placeholder: 'john.doe@example.com',
                        description: 'The E-Mail of the person whose gender is to be determined.',
                    },
                    {
                        displayName: 'Additional Fields',
                        name: 'additionalFields',
                        type: 'collection',
                        placeholder: 'Add Field',
                        default: {},
                        options: [
                            {
                                displayName: 'Country Code',
                                name: 'countryCode',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...countryCodes
                                ],
                                description: 'ISO 3166 ALPHA-2 country code.',
                            },
                            {
                                displayName: 'Locale',
                                name: 'browserLocale',
                                type: 'options',
                                required: false,
                                default: '',
                                options: [
                                    ...browserLocales
                                ],
                                description: 'Browser locale.',
                            },
                            {
                                displayName: 'IP Address',
                                name: 'ip',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Valid IPv4 or IPv6 address.',
                            },
                            {
                                displayName: 'Internal ID',
                                name: 'id',
                                type: 'string',
                                required: false,
                                default: '',
                                description: 'Unique identifier for this request.',
                            },
                        ],
                    },
                ],
            },
        ],
    },
];