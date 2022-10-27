export interface EpisodeModel {
  episode_id: number;
  title: string;
  season: string;
  air_date: string;
  characters: string[];
  episode: string;
  series: string;
}

export interface EpisodeDetailedModel {
  episode_id: number;
  title: string;
  season: number;
  episode: number;
  air_date: string;
  characters: string[];
}
