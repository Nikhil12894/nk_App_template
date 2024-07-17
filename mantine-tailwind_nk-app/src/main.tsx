import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// Order seems to matter. If Mantine is imported after tailwind, the tailwind class passed with className is not applied.
import '@mantine/core/styles.css';
import "@mantine/tiptap/styles.css";
import "@mantine/code-highlight/styles.css";
import "@mantine/carousel/styles.css";
import './index.css';
import { createTheme, MantineProvider } from '@mantine/core';
const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  black: "#020617",
  colors: {
    slate: [
      "#f1f5f9",
      "#e2e8f0",
      "#cbd5e1",
      "#94a3b8",
      "#64748b",
      "#475569",
      "#334155",
      "#1e293b",
      "#0f172a",
      "#020617",
    ],
  },
});
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="auto" theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);
