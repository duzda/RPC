'use strict';

const util = require('./util');
const { ActivityType, StatusDisplayType } = require('./constants');

module.exports = {
  Client: require('./client'),
  register(id) {
    return util.register(`discord-${id}`);
  },
  ActivityType,
  StatusDisplayType,
};
