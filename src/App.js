import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
