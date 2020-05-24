export function refreshToken(state, token) {
  state.tok = { body: token, refreshed: Date.now() };
}
export function stMarkets(state, m) {
  state.markets = {
    fnd: {
      p: m.fnd[0].portfolio,
      ts: [
        m.fnd[0].tradeServersInfo[0].tradeServerCode,
        m.fnd[0].tradeServersInfo[1].tradeServerCode,
      ],
    },
    frx: {
      p: m.frx[0].portfolio,
      ts: [m.frx[0].tradeServersInfo[0].tradeServerCode],
    },
    frt: {
      p: m.frt[0].portfolio,
      ts: [
        m.frt[0].tradeServersInfo[0].tradeServerCode,
        m.frt[0].tradeServersInfo[1].tradeServerCode,
      ],
    },
  };
}
export function refreshFinStat(state, stat) {
  state.stat = stat;
}
