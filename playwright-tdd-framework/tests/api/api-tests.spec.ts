import { test } from '@playwright/test';
import { APICommons } from '../../commons/api/api-commons';
import testdata from '../../testdata/api/data.json';

test.describe('GitHub repository API validations', () => {

    let api: APICommons;

    //Before each and every test case, create an object of API common methods and also run the `initialize request context` method. 
    test.beforeEach(async () => {
        api = new APICommons();
        await api.intializeRequestContext();
    });

    //Test Case 1: Validate the API request related to creating a duplicate repository within GitHub. 
    test('Create a duplicate repository', async () => {
        const data = testdata.duplicateRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expStatusCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponse('errors[0].message', data.expErrorMessage);
        await api.validateResponseSchema('errors[0].message', data.expErrorMsgType);
    })

    //Test Case 2: Validate the API request related to creating a valid repository within GitHub. 
    test('Create a valid repository', async () => {
        const data = testdata.validRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expStatusCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBody('name', data.expRepoName);
        await api.validateResponseSchema('name', data.expRepoNameType);
    })

    //Test Case 3: Validate the API request related to get a valid repository within GitHub. 
    test('Get a valid repository', async () => {
        const data = testdata.getRepo;
        await api.getResponse(data.requestType, data.endpoint);
        await api.validateStatusCode(data.expStatusCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBody('name', data.expRepoName);
        await api.validateResponseSchema('name', data.expRepoNameType);
    })

    //Test Case 4: Validate the API request related to update a valid repository within GitHub. 
    test('Update a valid repository', async () => {
        const data = testdata.updateRepo;
        await api.getResponse(data.requestType, data.endpoint, data.payload);
        await api.validateStatusCode(data.expStatusCode);
        await api.validateStatusMessage(data.expStatusMessage);
        await api.validateResponseBody('description', data.expRepoDescription);
        await api.validateResponseSchema('description', data.expRepoDescriptionType);
    })

    //Test Case 5: Validate the API request related to delete a valid repository within GitHub. 
    test('Delete a valid repository', async () => {
        const data = testdata.deleteRepo;
        await api.getResponse(data.requestType, data.endpoint);
        await api.validateStatusCode(data.expStatusCode);
        await api.validateStatusMessage(data.expStatusMessage);
    })


});