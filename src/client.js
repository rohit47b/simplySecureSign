import 'core-js/es/map';
import 'core-js/es/set';
import React from 'react'
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider"
import { createMuiTheme } from "@material-ui/core/styles"
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, autoRehydrate } from "redux-persist"
import thunk from "redux-thunk"
import { Provider } from 'react-redux'
import reducers from './reducers'
import { } from 'babel-polyfill'
import { Router } from 'react-router-dom'
import history from 'customHistory'
import Main from './routes'


import { AppContainer } from 'react-hot-loader'


const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
});
export const store = createStore(
  reducers,
  applyMiddleware(thunk),
  compose(autoRehydrate()),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)

export const persistingStore = persistStore(store, { blacklist: ["routing"] })

/**
 * Method used for check token is valid ot not
 */
export const requireAuth = async (nextState, replace) => {
  return true
}


/**
 * Persist the store, after rehydration after that rendering dom.
 */
persistStore(store, {}, () => {
  render(
    <AppContainer>
       <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={history}>
          <Main />
        </Router>
      </Provider>
      </MuiThemeProvider>
    </AppContainer>,
    document.getElementById('app-container')
  )
}); 