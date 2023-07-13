import GlobalStyle from './styles/globalStyles';
import { Router } from './Router';
import Layout from './components/layouts';
import { IssueProvider } from './contexts/issueContext';

function App() {
  return (
    <IssueProvider>
      <GlobalStyle />
      <Layout>
        <Router />
      </Layout>
    </IssueProvider>
  );
}

export default App;
