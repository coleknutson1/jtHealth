import './App.css'

export default function App() {
  let forecast = null;
  fetch("http://localhost:8080/weatherforecast").then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const reader = response.body.getReader();
    return reader;
  })
  return (
    <>
      <p>{forecast}</p>
    </>
  );
}