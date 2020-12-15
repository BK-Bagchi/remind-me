import { Provider } from 'react-redux';
import './App.css';
import Todo from './react/Todo/Todo';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
