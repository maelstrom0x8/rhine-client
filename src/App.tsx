import { UIProvider } from 'context/UIContext';
import { MainRoute } from './routes/MainRoute';

const App = () => {
  return (
    <UIProvider>
      <MainRoute />
    </UIProvider>
  );
};

export default App;
