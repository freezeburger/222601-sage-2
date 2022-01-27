
import { ViewLogin } from "./components/views";
import { MyFunctionnalComponent } from "./theory/functional-component";


const env = process.env;

console.groupCollapsed('Environnement Variables');
console.table(env);
console.log(env);
console.groupEnd();


function App() {
  return (
    <div className="App">

      <MyFunctionnalComponent />

      <ViewLogin></ViewLogin>
    </div>
  );
}

export default App;
