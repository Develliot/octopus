import { camelCaseToCapitalisedCase } from '../StringUtils';

describe('camelCaseToCapitalisedCase', () => {
    it('converts camel case string to sentence case strings correctly', () => {
        expect(camelCaseToCapitalisedCase('ThisIsACamelCaseString')).toEqual(
            'This Is A Camel Case String'
        );
        expect(camelCaseToCapitalisedCase('thisIsACamelCaseString')).toEqual(
            'This Is A Camel Case String'
        );
        expect(camelCaseToCapitalisedCase('this')).toEqual('This');
    });
});
