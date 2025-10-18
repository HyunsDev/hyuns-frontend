"use client";

import {
  View,
  findViewById,
  findViewByPath,
  views as registeredViews,
} from "@/data/views";
import { usePathname, useRouter } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  type ReactNode,
} from "react";

export type ViewContextValue = {
  /** Currently resolved view, or null if the pathname does not map to any view. */
  currentView: View | null;
  /** Navigate to the provided view id and keep URL in sync. */
  setCurrentView: (viewId: string) => void;
  /** All available views registered for Dash. */
  views: View[];
  /** Utility helper to check whether a pathname belongs to a registered view. */
  isKnownPath: (pathname: string | null | undefined) => boolean;
};

export const ViewContext = createContext<ViewContextValue | undefined>(
  undefined
);

export function ViewContextProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const currentView = useMemo(() => findViewByPath(pathname), [pathname]);

  const setCurrentView = useCallback(
    (viewId: string) => {
      const nextView = findViewById(viewId);

      if (!nextView) {
        console.warn(
          `[ViewContext] Attempted to navigate to unknown view "${viewId}".`
        );
        return;
      }

      if (currentView?.id === nextView.id) {
        return;
      }

      router.push(nextView.href);
    },
    [currentView?.id, router]
  );

  const isKnownPath = useCallback(
    (path: string | null | undefined) => findViewByPath(path) !== null,
    []
  );

  const value = useMemo<ViewContextValue>(
    () => ({
      currentView,
      setCurrentView,
      views: registeredViews,
      isKnownPath,
    }),
    [currentView, isKnownPath, setCurrentView]
  );

  return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>;
}

export function useView(): ViewContextValue {
  const context = useContext(ViewContext);

  if (!context) {
    throw new Error("useView must be used within a ViewContextProvider.");
  }

  return context;
}
