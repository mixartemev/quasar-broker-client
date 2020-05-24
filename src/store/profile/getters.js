export function getTok(state) {
  return state.tok.body;
}
export function whenTokUpd(state) {
  return state.tok.refreshed
    ? new Date(state.tok.refreshed).toLocaleTimeString('ru')
    : null;
}
