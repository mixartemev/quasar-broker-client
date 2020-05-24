export function whenTokUpd(state) {
  return state.tok.refreshed && (Date.now() - state.tok.refreshed) / 60000 < 60
    ? `updated: ${new Date(state.tok.refreshed).toLocaleTimeString('ru').slice(0, -3)}`
    : null;
}
export function getStat(state/* , getters, rootState, rootGetters */) {
  return state.stat;
}
