import { ReactNode, useMemo } from "react";
import { AppContext } from "./AppContext";
import { useTimer } from "./components/timer/useTimer";

export function AppProvider({ children }: { children: ReactNode }) {
  const timer = useTimer();

  const state = useMemo(
    () => ({
      timer,
    }),
    [timer]
  );

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
