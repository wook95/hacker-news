import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import GlobalStyles from '@/styles/globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById('root'),
);
