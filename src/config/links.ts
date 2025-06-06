export default {
  game: { path: '/game/:gameId', name: 'Game' },
  instruction: { path: '/game/:gameId/instruction', name: 'Instruction' },
  clues: { path: '/game/:gameId/clues', name: 'Clues' },
  clueDetails: { path: '/game/:gameId/clues/:clueId', name: 'Clues' },
  complete: { path: '/game/:gameId/complete', name: 'Clues' },
};
