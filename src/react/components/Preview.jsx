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
                let urlMarkup;

                if (currTopic.url) {
                    urlMarkup = (
                            <div>
                                url: <a href={currTopic.url}>{currTopic.url}</a>
                            </div>
                    );
                }

                return (
                    <div key={topicKey}>
                        <div><strong>{currTopic.name}</strong>: {topicDesc.toString('utf8')}</div>
                        {urlMarkup}
                        <br />
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
