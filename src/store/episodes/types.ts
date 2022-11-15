import { EpisodeDetailedModel, EpisodeModel } from 'app/models/EpisodesModel';

export interface EpisodesState {
  episodes: EpisodeModel[];
  episodesLoading: boolean;

  currentEpisode?: EpisodeDetailedModel;
  currentEpisodeLoading?: boolean;
}
