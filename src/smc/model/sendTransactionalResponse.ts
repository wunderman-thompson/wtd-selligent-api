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

import { RequestFile } from '../api';
import { ErrorModel } from './errorModel';
import { TransactionalSendResponseData } from './transactionalSendResponseData';
import { TransactionalSendResponseDataMessage } from './transactionalSendResponseDataMessage';

export class SendTransactionalResponse {
    'resultCode'?: SendTransactionalResponse.ResultCodeEnum;
    'errors'?: Array<ErrorModel>;
    'responseData'?: Array<TransactionalSendResponseData>;
    'messages'?: Array<TransactionalSendResponseDataMessage>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "resultCode",
            "baseName": "result_code",
            "type": "SendTransactionalResponse.ResultCodeEnum"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorModel>"
        },
        {
            "name": "responseData",
            "baseName": "response_data",
            "type": "Array<TransactionalSendResponseData>"
        },
        {
            "name": "messages",
            "baseName": "messages",
            "type": "Array<TransactionalSendResponseDataMessage>"
        }    ];

    static getAttributeTypeMap() {
        return SendTransactionalResponse.attributeTypeMap;
    }
}

export namespace SendTransactionalResponse {
    export enum ResultCodeEnum {
        Failed = <any> 'Failed',
        Succeeded = <any> 'Succeeded',
        PartiallySucceeded = <any> 'PartiallySucceeded',
        ValidationFailed = <any> 'ValidationFailed',
        NotFound = <any> 'NotFound',
        ServiceUnavailable = <any> 'ServiceUnavailable',
        InternalServerError = <any> 'InternalServerError'
    }
}