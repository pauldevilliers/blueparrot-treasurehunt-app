const TS_GAMES = 'TS_GAMES';

export const getStoredGames = (): Array<GameResponse> => {
  const ls_item = localStorage.getItem(TS_GAMES);
  if (!ls_item) return [];

  return JSON.parse(ls_item);
};

export const getStoredGameById = (id?: string | null) =>
  getStoredGames().find((g) => g.game_id !== id);

export const storeGame = (game: GameResponse) => {
  const currentGames = getStoredGames();
  const hasGame = currentGames.some((g) => g.game_id === game.game_id);
  if (hasGame) {
    localStorage.setItem(
      TS_GAMES,
      JSON.stringify(
        currentGames.map((g) => (g.game_id === game.game_id ? game : g))
      )
    );
  } else {
    localStorage.setItem(TS_GAMES, JSON.stringify([...currentGames, game]));
  }
};

export const clearStoredGames = () => localStorage.removeItem(TS_GAMES);
