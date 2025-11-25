import './App.css';

function App() {
  // Function to send data to Flutter
  const sendDataToFlutter = () => {
    if (window.FlutterChannel) {
      window.FlutterChannel.postMessage("Hello from React!");
    } else {
      console.log("Flutter WebView aint available");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Button to send data */}
        <button
          onClick={sendDataToFlutter}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Send Data to Flutter
        </button>
      </header>
    </div>
  );
}

export default App;
