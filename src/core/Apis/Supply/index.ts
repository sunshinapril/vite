export const GET_TRADE_BY_IND = '/get_trade_by_ind/';
export type GET_TRADE_BY_IND = typeof GET_TRADE_BY_IND;
import http from '../../request';

export default {
  getTradeByInd: function (params: string) {
    return http.get(`${GET_TRADE_BY_IND}${params}`, '');
  }
};
