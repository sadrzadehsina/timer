import { useApp } from "@/AppContext";

export function Timer() {
  const { timer } = useApp();

  return (
    <div className="self-center min-w-fit">
      <h1 className="text-9xl m-w-full">{timer.time}</h1>
    </div>
  );
}
