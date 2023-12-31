import GlobalStyle from './styles/globalStyles';
import { Router } from './Router';
import Layout from './common/layouts';

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </>
  );
}

export default App;
