import React, { PropTypes } from 'react'

class Preview extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const preLoadedTopics = this.props.preLoadedTopics;
        let topicMarkup;
        if (preLoadedTopics && preLoadedTopics.length) {
            topicMarkup = preLoadedTopics.map((currTopic, index) => {
                const topicKey = `${currTopic.id}_${index}`;
                const topicDesc = new Buffer(currTopic.description || '');
                return (
                    <div key={topicKey}>
                        <strong>{currTopic.name}</strong>: {topicDesc.toString('utf8')}
                    </div>
                );
            });
        }

        return (
            <div>
                <div>Pending Topics:</div><br />
                {topicMarkup}
            </div>
        );
    }
}

Preview.propTypes = {
    loading: React.PropTypes.bool,
    preLoadedTopics: React.PropTypes.array,
    topics: React.PropTypes.array,
    topicsLoading: React.PropTypes.func,
    topicsLoaded: React.PropTypes.func
};

export default Preview
