import { EpisodeDetailedModel, EpisodeModel } from 'app/models/EpisodesModel';
import { AxiosPromise } from 'axios';

export interface GetEpisodesParams {
  series: string;
}

export interface GetEpisodes {
  (params?: GetEpisodesParams): AxiosPromise<EpisodeModel[]>;
}

export interface GetEpisodeById {
  (id: number): AxiosPromise<EpisodeDetailedModel[]>;
}
