import { getParamsString } from './getParamsString';
import { ApiRequestParams } from './model/api-request-params';

describe('Get params string', () => {
    it('should return empty params string when params object is empty', () => {
        const params: ApiRequestParams = {};

        const result = getParamsString(params);

        expect(result).toBe('');
    });

    it('should params string for single param', () => {
        const params: ApiRequestParams = { param: 'param-value' };

        const result = getParamsString(params);

        expect(result).toBe('?param=param-value');
    });

    it('should params string for multiple params', () => {
        const params: ApiRequestParams = {
            param1: 'value1',
            param2: 'value2',
            param3: 'value3',
        };

        const result = getParamsString(params);

        expect(result).toBe('?param1=value1&param2=value2&param3=value3');
    });
});
