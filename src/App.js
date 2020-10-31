import Todo from './Todo';
import './App.css';

function App() {
  return (
    <div className="app">
      <Todo title="Take out the trash" description="The bin man comes at 9PM" />
      <Todo title="Walk the dog" description="She is bored" />
      <Todo title="Go Food shopping" description="No food in the fridge" />
    </div>
  );
}

export default App;
