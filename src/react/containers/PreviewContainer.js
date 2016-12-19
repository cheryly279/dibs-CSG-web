import { connect } from 'react-redux'
import topicActionCreators from '../../actionCreators/topicActionCreators'
import Preview from '../components/Preview'

const mapStateToProps = (state) => {
    const { topics } = state;
    return {
        loading: topics.loading,
        topics: topics.topics
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        topicsLoading: () => {
            dispatch(topicActionCreators.topicsLoading());
        },
        topicsLoaded: (topicsResponse) => {
            dispatch(topicActionCreators.topicsLoadFinished(topicsResponse));
        }
    }
};

const PreviewContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Preview);

export default PreviewContainer
