import React from "react";
import { Routes, Route } from "react-router-dom";
import { SubscribePage, SubscribedPage } from "./pages";

function App() {
  const [email, setEmail] = React.useState();

  return (
    <Routes>
      <Route path="/" element={<SubscribePage setEmail={setEmail} />} />
      <Route path="success" element={<SubscribedPage email={email} />} />
    </Routes>
  );
}

export default App;
