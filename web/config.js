import config from "./config.json" assert { type: 'json' };
export const environment = "qa"; // qa | prod
const data = config[environment];
export const appPassword = data.appPassword;
