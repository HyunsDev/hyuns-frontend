import { Navigate, Route, Routes } from "react-router-dom";

import { PngIconsPage } from "./png-icons/page";
import { SvgIconsPage } from "./svg-icons/page";
import { NotFoundPage } from "./404/page";

export function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/svg-icons" replace />} />
      <Route path="/png-icons" element={<PngIconsPage />} />
      <Route path="/svg-icons" element={<SvgIconsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
