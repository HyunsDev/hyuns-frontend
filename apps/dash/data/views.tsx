import { NotepadText, ScrollText } from "lucide-react";
import { ReactNode } from "react";

export type View = {
  /** Unique identifier used by the view context */
  id: string;
  /** Human friendly label rendered in UI */
  title: string;
  /** Canonical href that should be pushed to the router */
  href: string;
  /** Icon rendered inside activity navigation */
  icon: ReactNode;
  isVisibleInViewList?: boolean;
  matchPath?: (pathname: string) => boolean;
};

export const views: View[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    href: "/",
    icon: <></>,
    isVisibleInViewList: false,
  },
  {
    id: "journal",
    title: "Journal",
    href: "/journals",
    icon: <ScrollText />,
    isVisibleInViewList: true,
  },
  {
    id: "memo",
    title: "Memo",
    href: "/memo",
    icon: <NotepadText />,
    isVisibleInViewList: true,
  },
];

const TRAILING_SLASH_REGEX = /\/+$/;

const normalizePath = (path: string): string => {
  if (!path) return "/";
  if (path === "/") return path;
  return path.replace(TRAILING_SLASH_REGEX, "");
};

const defaultMatch = (href: string, pathname: string) => {
  const cleanHref = normalizePath(href);
  const cleanPathname = normalizePath(pathname);

  if (cleanPathname === cleanHref) {
    return true;
  }

  return cleanPathname.startsWith(`${cleanHref}/`);
};

export const findViewByPath = (
  pathname: string | null | undefined
): View | null => {
  if (!pathname) return null;

  const cleanPathname = normalizePath(pathname);

  return (
    views.find((view) => {
      const matcher = view.matchPath;
      if (matcher) {
        return matcher(cleanPathname);
      }

      return defaultMatch(view.href, cleanPathname);
    }) ?? null
  );
};

export const findViewById = (id: string | null | undefined): View | null => {
  if (!id) return null;
  return views.find((view) => view.id === id) ?? null;
};
