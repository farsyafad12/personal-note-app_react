import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteSection from './component/NoteSection';
import "./main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteSection />
  </StrictMode>
);
