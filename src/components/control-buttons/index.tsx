import { Button } from "@/components/ui/button";
import { useApp } from "@/AppContext";

export function ControlButtons() {
  const { timer } = useApp();

  return (
    <div className="flex items-center space-x-2">
      <Button variant="default" onClick={timer.start}>
        Start
      </Button>
      <Button variant="destructive" onClick={timer.stop}>
        Stop
      </Button>
    </div>
  );
}
