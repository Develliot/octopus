import { camelCaseToCaptilalisedCase } from '../StringUtils';

describe('camelCaseToCaptilalisedCase', () => {
    it('converts cammel case string to sentence case strings correcty', () => {
        expect(camelCaseToCaptilalisedCase('ThisIsACamelCaseString')).toEqual(
            'This Is A Camel Case String'
        );
        expect(camelCaseToCaptilalisedCase('thisIsACamelCaseString')).toEqual(
            'This Is A Camel Case String'
        );
        expect(camelCaseToCaptilalisedCase('this')).toEqual('This');
    });
});
