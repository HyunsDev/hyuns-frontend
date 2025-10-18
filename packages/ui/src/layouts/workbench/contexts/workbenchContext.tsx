"use client";

import React, { createContext } from "react";

export type WorkbenchContextType = {};
export const WorkbenchContext = createContext<WorkbenchContextType>({});

export function WorkbenchContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WorkbenchContext.Provider value={{}}>{children}</WorkbenchContext.Provider>
  );
}
