import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./pages/Router";
import { SidebarProvider } from "@hyunsdev/ui";

function App() {
  return (
    <BrowserRouter>
      <SidebarProvider>
        <MainRouter />
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;
