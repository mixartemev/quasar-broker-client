export async function req(ctx, p) { // [url:'', method:'GET', no-auth:true, body:{}]
  const opts = {
    method: p[1] ? p[1] : 'GET',
    body: null,
  };
  if (!p[2]) { // auth need
    if (!ctx.getters.whenTokUpd) { // no tok or tok outdated
      await ctx.dispatch('fetchToken');
    }
    opts.headers = { Authorization: `Bearer ${ctx.state.tok.body}` };
  }
  if (p[3]) { // body set
    opts.body = { ...p[3] };
  }
  let res = await fetch(p[0], opts);
  res = await res.json();
  return res;
}
export async function fetchToken(ctx) {
  const res = await ctx.dispatch('req', [`https://oauth.alor.ru/refresh?token=${process.env.VUE_APP_REFRESH_TOKEN}`, 'POST', 1]);
  ctx.commit('refreshToken', res.AccessToken);
}
export async function fetchPortfolios(ctx) {
  const res = await ctx.dispatch('req', ['https://api.alor.ru/client/v1.0/users/P070657/portfolios']);
  ctx.commit('stMarkets', {
    fnd: res['Фондовый рынок'],
    frx: res['Валютный рынок'],
    frt: res['Срочный рынок'],
  });
}
export async function fetchStat(ctx, market) {
  if (!ctx.state.markets) {
    await ctx.dispatch('fetchPortfolios');
  }
  const res = await ctx.dispatch('req', [`https://api.alor.ru/md/stats/${market}/${ctx.state.markets.fnd.p}/finance?amount=50&From=1588316400&To=${Math.ceil(Date.now() / 1000)}`]);
  ctx.commit('refreshFinStat', res);
}
