import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import CollectionPage from "@/pages/CollectionPage";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      {/* minimal header (style 2, customized) + index-10 footer (Footer10) */}
      <Route element={<MainLayout headerStyle={2} footerStyle={10} />}>
        <Route path="/" element={<CollectionPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
