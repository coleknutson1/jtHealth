import "./App.css";
function App() {
  return (
    <>
      <form action={"https://www.google.com"} method="GET">
        <label htmlFor="choose"></label>
        <input id="choose" name="i-like" required />
        <button type="reset">Reset</button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
