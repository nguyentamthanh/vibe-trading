import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Agent = lazy(() => import("@/pages/Agent").then((m) => ({ default: m.Agent })));
const RunDetail = lazy(() => import("@/pages/RunDetail").then((m) => ({ default: m.RunDetail })));
const Compare = lazy(() => import("@/pages/Compare").then((m) => ({ default: m.Compare })));

function PageLoader() {
  return <div className="flex items-center justify-center h-screen text-muted-foreground text-sm">Loading…</div>;
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Suspense fallback={<PageLoader />}><Home /></Suspense> },
      { path: "/agent", element: <Suspense fallback={<PageLoader />}><Agent /></Suspense> },
      { path: "/runs/:runId", element: <Suspense fallback={<PageLoader />}><RunDetail /></Suspense> },
      { path: "/compare", element: <Suspense fallback={<PageLoader />}><Compare /></Suspense> },
    ],
  },
]);
