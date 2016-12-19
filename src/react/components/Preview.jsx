import React, { PropTypes } from 'react'

class Preview extends React.Component {
    constructor(props) {
        super(props);
        // fetch('http://ec2-54-144-194-47.compute-1.amazonaws.com:8081/topics/all')
        //     .then(response => {
        //         return response.json();
        //     }).then(json => {
        //         props.topicsLoaded(json);
        //     });
        // props.topicsLoading();
    }
    render() {
        console.log(this.props.preLoadedTopics);
        return (
            <div>here we go again! topic_count: {this.props.preLoadedTopics.length}</div>
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
