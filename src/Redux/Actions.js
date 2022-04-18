import * as CONSTANTS from "./Constants";

export const setDownloadedYokis = items => ({
  type: CONSTANTS.SET_YOKIS,
  payload: items
});
