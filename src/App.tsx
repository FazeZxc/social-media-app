import "./App.css";
import { ModeToggle96 } from "./components/mode-toggle";
import { Button } from "./components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import { SignUp } from "./components/views/auth/signup";
import { SignUpDetails } from "./components/views/auth/signup.details";
import { SignUpPassword } from "./components/views/auth/signup.password";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        {/* <Button>Click Me</Button> */}
        {/* <ModeToggle /> */}
        {/* <SignUp /> */}
        {/* <SignUpDetails /> */}
        <SignUpPassword />
      </div>
    </ThemeProvider>
  );
}

export default App;
