# React-Redux

React Redux is the official React binding for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update data.

## Installation

React Redux 7.1 requires React 16.8.3 or later.

To use React Redux with your React app:

```bash
npm install react-redux
```
You'll also need to install Redux and set up a Redux store in your app.


## Provider
React Redux provides <Provider />, which makes the Redux store available to the rest of your app:


```react
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## connect()
React Redux provides a connect function for you to connect your component to the store.

Normally, you’ll call 'connect' in this way:
```react
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
```