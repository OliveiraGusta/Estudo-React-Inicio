import Titulo from "./Titulo";

function App() {
  return (
    <div>
      <Titulo cor="rgb(4, 255, 0)" nome="Gustavo" paragrafo={true} />
      <Titulo cor="blue" />
      <Titulo cor="red" />
      <Titulo cor="purple)" />
    </div>
  );
}

export default App;
