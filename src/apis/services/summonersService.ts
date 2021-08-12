import { ApiClient } from '../ApiClient';

export const getSummoners = async (summoers: string): Promise<unknown[]> => {
	const apiClient = new ApiClient('api/summoners/search-by-name/');
	try {
		const result = await apiClient.gets(summoers);
		return result as unknown[];
	} catch (e) {
		throw new Error('error');
	}
};
