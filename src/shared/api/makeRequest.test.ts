import { HttpResponseError, HttpUnknownError } from './errors';
import { makeRequest } from './makeRequest';
import { ApiRequestParams } from './model/api-request-params';

global.fetch = jest.fn();

describe('Make request', () => {
    const url = 'http//test.url';

    beforeEach(() => {
        (fetch as jest.Mock).mockClear();
    });

    it('should fetch with given URL', async () => {
        (fetch as jest.Mock).mockReturnValue({
            ok: true,
            json: () => Promise.resolve({}),
        });
        await makeRequest(url);

        expect(global.fetch).toHaveBeenCalledWith(url);
    });

    it('should fetch with given params', async () => {
        const params: ApiRequestParams = { param: 'value' };

        (fetch as jest.Mock).mockReturnValue({
            ok: true,
            json: () => Promise.resolve({}),
        });

        await makeRequest(url, params);

        expect(global.fetch).toHaveBeenCalledWith('http//test.url?param=value');
    });

    it('should throw if response is not ok', async () => {
        (fetch as jest.Mock).mockReturnValue({ ok: false });

        await expect(makeRequest(url)).rejects.toThrow(HttpResponseError);
    });

    it('should throw if fetch exception occured', async () => {
        (fetch as jest.Mock).mockRejectedValue('some error!');

        await expect(makeRequest(url)).rejects.toThrow(HttpUnknownError);
    });
});
