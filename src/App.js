//imports
import LoginTow from "./pages/LoginTow";
import Counter from "./components/Counter";
import CounterContextProvider from "./utils/contexts/CounterContext";
import EditeNameProvider from "./utils/contexts/EditeName";

//styles
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Registaration Your Account 😒</h1>
      <LoginTow />

      {/* <CounterContextProvider>
        <EditeNameProvider>
          <Counter />
        </EditeNameProvider>
      </CounterContextProvider> */}
    </div>
  );
}

export default App;
