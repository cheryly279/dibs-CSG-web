'use strict';

const { combineReducers } = require('redux');
const reducers = {
    topics: require('./topics')
};

module.exports = combineReducers(reducers);
