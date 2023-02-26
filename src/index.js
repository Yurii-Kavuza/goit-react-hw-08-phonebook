import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { Provider } from 'react-redux';
import './index.css';
import App from 'components/App';
import { theme } from './theme';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>      
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
