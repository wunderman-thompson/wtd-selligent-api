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

export class DataSelectionModel {
    'dataSelection'?: string;
    'content'?: Array<{ [key: string]: object; }>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "dataSelection",
            "baseName": "data_selection",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "Array<{ [key: string]: object; }>"
        }    ];

    static getAttributeTypeMap() {
        return DataSelectionModel.attributeTypeMap;
    }
}
