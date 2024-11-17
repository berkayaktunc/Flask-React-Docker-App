import { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/button-click", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setClickCount(data.click_count);
      } else {
        console.error("Failed to send button click to the backend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <button onClick={handleButtonClick}>Tikla</button>
      <p>Butona toplam {clickCount} kez basildi.</p>
    </div>
  );
}

export default App;
