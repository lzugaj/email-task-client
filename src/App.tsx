import React from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EmailHistory from "./pages/EmailHistory/EmailHistory";
import EmailContent from "./pages/EmailHistory/components/EmailContent";
import EmailMessage from "./pages/EmailMessage/EmailMessage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmailMessage />} />
        <Route path="/history" element={<EmailHistory />} />
        <Route path="/history/:id" element={<EmailContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
