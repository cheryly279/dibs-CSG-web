import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer.js'
import PreviewContainer from './react/containers/PreviewContainer'

const store = createStore(rootReducer);

fetch('http://ec2-54-144-194-47.compute-1.amazonaws.com:8081/topics/all')
    .then(response => {
        return response.json();
    }).then(json => {
        render(
            <Provider store={store}>
                <PreviewContainer preLoadedTopics={json} />
            </Provider>,
            document.getElementById('dibs-csg-web')
        );
    });
