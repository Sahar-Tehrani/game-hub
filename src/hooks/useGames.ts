import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Games {
    id: number;
    name: string;
    background_image: string;
    platform: { platform: Platform }[];
    metacritic: number;
}

const useGames = (gameQuery: GameQuery) => 
    useData<Games>('/games', { 
        params: { 
            genres: gameQuery.genre?.id, 
            parent_platforms: gameQuery.platform?.id, 
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }}, 
        [gameQuery]);
export default useGames;