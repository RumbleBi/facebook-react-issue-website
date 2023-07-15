import GlobalStyle from './styles/globalStyles';
import { Router } from './Router';
import Layout from './common/layouts';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}

export default App;
