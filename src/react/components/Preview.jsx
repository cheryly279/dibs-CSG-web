import React, { PropTypes } from 'react'

class Preview extends React.Component {
    constructor(props) {
        super(props);
        fetch('http://ec2-54-144-194-47.compute-1.amazonaws.com:8081/topics/all')
            .then(response => {
                return response.json();
            }).then(json => {
                props.topicsLoaded(json);
            });
        props.topicsLoading();
    }
    render() {
        console.log('!!!');
        console.log(this.props.topics);
        return (
            <div>here we go again! loading: {this.props.loading ? 'loading...' : 'loaded!'}</div>
        );
    }
}

Preview.propTypes = {
    loading: React.PropTypes.bool,
    topics: React.PropTypes.array,
    topicsLoading: React.PropTypes.func,
    topicsLoaded: React.PropTypes.func
};

export default Preview
