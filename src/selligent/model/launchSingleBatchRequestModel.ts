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
import { SchedulingDTO } from './schedulingDTO';

export class LaunchSingleBatchRequestModel {
    'launchState'?: LaunchSingleBatchRequestModel.LaunchStateEnum;
    'scheduling'?: SchedulingDTO;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "launchState",
            "baseName": "launch_state",
            "type": "LaunchSingleBatchRequestModel.LaunchStateEnum"
        },
        {
            "name": "scheduling",
            "baseName": "scheduling",
            "type": "SchedulingDTO"
        }    ];

    static getAttributeTypeMap() {
        return LaunchSingleBatchRequestModel.attributeTypeMap;
    }
}

export namespace LaunchSingleBatchRequestModel {
    export enum LaunchStateEnum {
        None = <any> 'none',
        Launch = <any> 'launch',
        Schedule = <any> 'schedule'
    }
}