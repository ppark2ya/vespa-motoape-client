import { useQuery, UseQueryOptions } from 'react-query';
import { AxiosError } from 'axios';
import { getHomeMainBoardModels, getDiscovorModels } from './home.api';
import {
  HomeMainBoardModelsAPIResponse,
  DiscovorModelsAPIResponse,
} from './home.model';

export function useHomeMainBoardModels(
  options:
    | UseQueryOptions<
        HomeMainBoardModelsAPIResponse,
        AxiosError<unknown>,
        HomeMainBoardModelsAPIResponse
      >
    | undefined = {},
) {
  return useQuery<HomeMainBoardModelsAPIResponse, AxiosError>(
    ['/home/mainBoardModels'],
    () => getHomeMainBoardModels(),
    {
      ...options,
    },
  );
}

export function useDiscovorModels(
  options:
    | UseQueryOptions<
        DiscovorModelsAPIResponse,
        AxiosError<unknown>,
        DiscovorModelsAPIResponse
      >
    | undefined = {},
) {
  return useQuery<DiscovorModelsAPIResponse, AxiosError>(
    ['/home/discoverModels'],
    () => getDiscovorModels(),
    {
      ...options,
    },
  );
}
