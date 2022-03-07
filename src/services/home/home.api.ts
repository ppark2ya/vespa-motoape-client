import axios from '@utils/axios';
import {
  HomeMainBoardModelsAPIResponse,
  DiscovorModelsAPIResponse,
} from './home.model';

export async function getHomeMainBoardModels() {
  const { data } = await axios.get<HomeMainBoardModelsAPIResponse>(
    '/home/mainBoardModels',
  );
  return data;
}

export async function getDiscovorModels() {
  const { data } = await axios.get<DiscovorModelsAPIResponse>(
    '/home/discoverModels',
  );
  return data;
}
