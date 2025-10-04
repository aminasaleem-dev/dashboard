import React from "react";
import TodoMainPage from "./todoPage/TodoMainPage";
import { TaskProvider } from "./dashboardComponent/ContextAPi"; // ✅ import the provider

function App() {
  return (
    <TaskProvider>
      <TodoMainPage />
    </TaskProvider>
  );
}

export default App;
