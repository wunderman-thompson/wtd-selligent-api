/**
 * Selligent Marketing Cloud API
 * Click the endpoint to see details. In the Parameters-section, we show an example of how the data you send along with the api-call looks like.
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import localVarRequest = require('request');
import http = require('http');

/* tslint:disable:no-unused-locals */
import { ContentDetailsResponseModel } from '../model/contentDetailsResponseModel';
import { CreateEmailMessageContentFailedResponse } from '../model/createEmailMessageContentFailedResponse';
import { CreateEmailMessageContentSuccessResponse } from '../model/createEmailMessageContentSuccessResponse';
import { CreateEmailMessageModel } from '../model/createEmailMessageModel';
import { CreateMobileMessageContentFailedResponse } from '../model/createMobileMessageContentFailedResponse';
import { CreateMobileMessageContentSuccessResponse } from '../model/createMobileMessageContentSuccessResponse';
import { CreateMobileMessageModel } from '../model/createMobileMessageModel';
import { CreatePageContentFailedResponse } from '../model/createPageContentFailedResponse';
import { CreatePageContentSuccessResponse } from '../model/createPageContentSuccessResponse';
import { CreatePageModel } from '../model/createPageModel';
import { CreateSmsContentFailedResponse } from '../model/createSmsContentFailedResponse';
import { CreateSmsContentSuccessResponse } from '../model/createSmsContentSuccessResponse';
import { CreateSmsModel } from '../model/createSmsModel';
import { DeleteContentSuccessResponse } from '../model/deleteContentSuccessResponse';

import { ObjectSerializer, Authentication, VoidAuth, Interceptor } from '../model/models';

import { HttpError, RequestFile } from './apis';

let defaultBasePath = 'http://localhost/Portal/Api';

// ===============================================
// This file is autogenerated - Please do not edit
// ===============================================

export enum ContentApiApiKeys {
}

export class ContentApi {
    protected _basePath = defaultBasePath;
    protected _defaultHeaders : any = {};
    protected _useQuerystring : boolean = false;

    protected authentications = {
        'default': <Authentication>new VoidAuth(),
    }

    protected interceptors: Interceptor[] = [];

    constructor(basePath?: string);
    constructor(basePathOrUsername: string, password?: string, basePath?: string) {
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        } else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername
            }
        }
    }

    set useQuerystring(value: boolean) {
        this._useQuerystring = value;
    }

    set basePath(basePath: string) {
        this._basePath = basePath;
    }

    set defaultHeaders(defaultHeaders: any) {
        this._defaultHeaders = defaultHeaders;
    }

    get defaultHeaders() {
        return this._defaultHeaders;
    }

    get basePath() {
        return this._basePath;
    }

    public setDefaultAuthentication(auth: Authentication) {
        this.authentications.default = auth;
    }

    public setApiKey(key: ContentApiApiKeys, value: string) {
        (this.authentications as any)[ContentApiApiKeys[key]].apiKey = value;
    }

    public addInterceptor(interceptor: Interceptor) {
        this.interceptors.push(interceptor);
    }

    /**
     * 
     * @summary API to create simple (only html) single language message of email.
     * @param organization 
     * @param model This CreateEmailMessageModel model have information related to email message
     * @param publish Parameter indicating whether the content should be published. [Default: false]
     */
    public async contentCreateEmailContent (organization: string, model: CreateEmailMessageModel, publish?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateEmailMessageContentSuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/email'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message', 'errors', ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentCreateEmailContent.');
        }

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling contentCreateEmailContent.');
        }

        if (publish !== undefined) {
            localVarQueryParameters['publish'] = ObjectSerializer.serialize(publish, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "CreateEmailMessageModel")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateEmailMessageContentSuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateEmailMessageContentSuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary API to create Mobile push message for creating content.
     * @param organization 
     * @param model This CreateMobileMessageModel model have information related to Mobile push content
     * @param publish Parameter indicating whether the content should be published. [Default: false]
     */
    public async contentCreateMobileContent (organization: string, model: CreateMobileMessageModel, publish?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateMobileMessageContentSuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/mobile'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message', 'errors', ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentCreateMobileContent.');
        }

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling contentCreateMobileContent.');
        }

        if (publish !== undefined) {
            localVarQueryParameters['publish'] = ObjectSerializer.serialize(publish, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "CreateMobileMessageModel")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateMobileMessageContentSuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateMobileMessageContentSuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary API to create simple (only html) single language page content.
     * @param organization 
     * @param model This CreatePageModel model have information related to Mobile push content
     * @param publish Parameter indicating whether the content should be published. [Default: false]
     */
    public async contentCreatePageContent (organization: string, model: CreatePageModel, publish?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreatePageContentSuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/page'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message', 'errors', ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentCreatePageContent.');
        }

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling contentCreatePageContent.');
        }

        if (publish !== undefined) {
            localVarQueryParameters['publish'] = ObjectSerializer.serialize(publish, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "CreatePageModel")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreatePageContentSuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreatePageContentSuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary API to create a SMS Content
     * @param organization 
     * @param model This CreateSMSModel model have information related to SMS content
     * @param publish Parameter indicating whether the content should be published. [Default: false]
     */
    public async contentCreateSMSContent (organization: string, model: CreateSmsModel, publish?: boolean, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: CreateSmsContentSuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/sms'
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message', 'errors', ];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentCreateSMSContent.');
        }

        // verify required parameter 'model' is not null or undefined
        if (model === null || model === undefined) {
            throw new Error('Required parameter model was null or undefined when calling contentCreateSMSContent.');
        }

        if (publish !== undefined) {
            localVarQueryParameters['publish'] = ObjectSerializer.serialize(publish, "boolean");
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(model, "CreateSmsModel")
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: CreateSmsContentSuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "CreateSmsContentSuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary API to delete existing content.
     * @param apiName Parameter represents API name of the content.
     * @param organization 
     */
    public async contentDelete (apiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: DeleteContentSuccessResponse;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/{api_name}'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'result_code', 'message'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling contentDelete.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentDelete.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: DeleteContentSuccessResponse;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "DeleteContentSuccessResponse");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
    /**
     * 
     * @summary API to check whether content already exists.
     * @param apiName Parameter represents API name of the content.
     * @param organization 
     */
    public async contentGetContent (apiName: string, organization: string, options: {headers: {[name: string]: string}} = {headers: {}}) : Promise<{ response: http.IncomingMessage; body: ContentDetailsResponseModel;  }> {
        const localVarPath = this.basePath + '/organizations/{organization}/content/{api_name}'
            .replace('{' + 'api_name' + '}', encodeURIComponent(String(apiName)))
            .replace('{' + 'organization' + '}', encodeURIComponent(String(organization)));
        let localVarQueryParameters: any = {};
        let localVarHeaderParams: any = (<any>Object).assign({}, this._defaultHeaders);
        const produces = ['application/json', 'text/json', 'name', 'description', 'api_name', 'tags', 'type'];
        // give precedence to 'application/json'
        if (produces.indexOf('application/json') >= 0) {
            localVarHeaderParams.Accept = 'application/json';
        } else {
            localVarHeaderParams.Accept = produces.join(',');
        }
        let localVarFormParams: any = {};

        // verify required parameter 'apiName' is not null or undefined
        if (apiName === null || apiName === undefined) {
            throw new Error('Required parameter apiName was null or undefined when calling contentGetContent.');
        }

        // verify required parameter 'organization' is not null or undefined
        if (organization === null || organization === undefined) {
            throw new Error('Required parameter organization was null or undefined when calling contentGetContent.');
        }

        (<any>Object).assign(localVarHeaderParams, options.headers);

        let localVarUseFormData = false;

        let localVarRequestOptions: localVarRequest.Options = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };

        let authenticationPromise = Promise.resolve();
        authenticationPromise = authenticationPromise.then(() => this.authentications.default.applyToRequest(localVarRequestOptions));

        let interceptorPromise = authenticationPromise;
        for (const interceptor of this.interceptors) {
            interceptorPromise = interceptorPromise.then(() => interceptor(localVarRequestOptions));
        }

        return interceptorPromise.then(() => {
            if (Object.keys(localVarFormParams).length) {
                if (localVarUseFormData) {
                    (<any>localVarRequestOptions).formData = localVarFormParams;
                } else {
                    localVarRequestOptions.form = localVarFormParams;
                }
            }
            return new Promise<{ response: http.IncomingMessage; body: ContentDetailsResponseModel;  }>((resolve, reject) => {
                localVarRequest(localVarRequestOptions, (error, response, body) => {
                    if (error) {
                        reject(error);
                    } else {
                        body = ObjectSerializer.deserialize(body, "ContentDetailsResponseModel");
                        if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                            resolve({ response: response, body: body });
                        } else {
                            reject(new HttpError(response, body, response.statusCode));
                        }
                    }
                });
            });
        });
    }
}