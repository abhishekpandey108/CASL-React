
import './App.css';
import List from './List';
import Main from './Main';
import { useAuth } from './CASL/AuthContext';
import { Can } from './CASL/Can';
function App() {
  const {user} = useAuth()
console.log(`User from App.js: ${user}`)
  return (
    <div className="App">
      <Main />
      {user && (
        <Can I="read" a="List">
          <h2>Logged In as {user.role}</h2>
          <List />
        </Can>
      )}
      
      
    </div>
  );
}

export default App;
