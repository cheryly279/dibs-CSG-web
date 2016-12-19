"use strict";

const TopicActionNames = require('../constants/TopicActionNames');
const initialState = {
    loading: false,
    topics: []
};

module.exports = (state = initialState, action = {}) => {
    switch (action.type) {
        case TopicActionNames.TOPICS_LOADING:
            return Object.assign({}, state, {
                loading: true,
                topics: []
            });
        case TopicActionNames.TOPICS_LOAD_FINISHED:
            return Object.assign({}, state, {
                loading: false,
                topics: action.returnedTopics
            });
        default:
            return state;
    }
};
