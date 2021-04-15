import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Card
          title="ini card saya"
          image="https://picsum.photos/seed/150/500"
          content="ini adalah contoh content saya.."
          date="17-08-1945"
          author="Soekarno"
        />

        <Card
          title="ini card kedua saya"
          image="https://picsum.photos/seed/100/500"
          content="ini content kedua saya"
          date="13-07-1987"
          author="fadliselaz"
        />

        <Card
          title="ini card ketiga saya"
          image="https://picsum.photos/seed/80/500"
          content="ini content kedua saya"
          date="13-07-1987"
          author="fadliselaz"
        />

        <Card />
      </header>
    </div>
  );
}

export default App;
