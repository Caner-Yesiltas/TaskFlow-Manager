import Header from './components/Header';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  return <div className='container'  >
    <Header/>
    <TodoList/>
  </div>;
}

export default App;
