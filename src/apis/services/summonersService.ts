import type { Summoner } from '../../schema/api/summoners';
import API from '../ApiClient';

export const getSummonerByName = async (name: string): Promise<Summoner> => {
	const { data } = await API.get(name);
	return data as Summoner;
};
