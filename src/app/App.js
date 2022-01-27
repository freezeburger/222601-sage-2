
import { ViewLogin } from "./components/views";
import { MyBetterFunctionnalComponent } from "./theory/better-functional-component";

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
