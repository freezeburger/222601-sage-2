import { ViewLogin } from "./components/views";

const env = process.env;

console.groupCollapsed('Environnement Variables');
  console.table(env);
  console.log(env);
console.groupEnd();


function App() {
  return (
    <div className="App">
        <ViewLogin></ViewLogin>
    </div>
  );
}

export default App;
