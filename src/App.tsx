import { Timer } from "./components/timer";
import { AppProvider } from "./AppProvider";
import { ControlButtons } from "./components/control-buttons";

function App() {
  return (
    <AppProvider>
      <div className="flex flex-col items-center h-full">
        <h1 className="text-5xl font-bold py-8 rubik-vinyl-regular">
          Set Your Timer
        </h1>
        <div className="flex flex-col px-8 py-4 space-y-4">
          <Timer />
          <ControlButtons />
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
