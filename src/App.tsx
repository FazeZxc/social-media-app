import "./App.css";

import { ThemeProvider } from "@/components/theme-provider";
import { SignUpPage } from "./components/views/auth";
import { Route, Routes } from "react-router-dom";
import { HeroPage } from "./components/views/public";
import { Feed } from "./components/views/feed";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {/* <ModeToggle /> */}
      <Routes>
        <Route path="/auth/sign-in" element={<SignUpPage />} />
        <Route path="/" element={<HeroPage/>} />
        <Route path="/feed" element={<Feed/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
