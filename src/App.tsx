import { HomePage } from 'pages/Home';
import { CommentProvider } from 'context';

const App = (): JSX.Element => (
  <CommentProvider>
    <HomePage />
  </CommentProvider>
);

export default App;
