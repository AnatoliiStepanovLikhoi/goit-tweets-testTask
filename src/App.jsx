import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const SharedLayout = lazy(() =>
  import("./components/SharedLayout/SharedLayout")
);
const HomePage = lazy(() => import("./pages/HomePage"));
const TweetsPage = lazy(() => import("./pages/TweetsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
