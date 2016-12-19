'use strict';

const TopicActionNames = require('../constants/TopicActionNames');

const topicActionCreators = {
    topicsLoading() {
        return { type: TopicActionNames.TOPICS_LOADING };
    },
    topicsLoadFinished(returnedTopics) {
        return { type: TopicActionNames.TOPICS_LOAD_FINISHED, returnedTopics };
    }
};

module.exports = topicActionCreators;
