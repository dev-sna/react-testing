import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import App from './containers/App/App'
import thunk from 'redux-thunk';
import './index.css'

const store = createStore(reducers, applyMiddleware(thunk));

class Main extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <p className='heading'>ToDo App</p>
        <App/>
      </Provider>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))
