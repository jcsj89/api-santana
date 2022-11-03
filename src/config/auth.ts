import config from '.';

const secret = config.env === 'production' ? config.token : config.tokenTest;

export default {
  JWT: {
    secret: secret || 'e38828d2-dc50-4c70-91f7-01e9b01b74bd',
    expiresIn: '1h',
  },
};
