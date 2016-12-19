import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer.js'
import PreviewContainer from './react/containers/PreviewContainer'

const store = createStore(rootReducer);

render(
    <Provider store={store}>
        <PreviewContainer />
    </Provider>,
    document.getElementById('dibs-csg-web')
);
