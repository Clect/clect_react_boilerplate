import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './component/App'
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    )
}
render(App);
// 模块热替换的 API
console.log(module.hot);
if (module.hot) {
    module.hot.accept('./component/App', () => {
        render(App);
    });
}