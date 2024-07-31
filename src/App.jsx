import { Suspense } from "react";
import {HashRouter} from "react-router-dom";
import { Router } from "./general/Router.jsx";
import { Loading } from "./components/Loading.jsx";

export const PageWithHeader = ({ children }) => (
  <div className="flex h-full flex-col">{children}</div>
);

export const App = () => (
  <HashRouter basename={import.meta.env.BASE_URL}>
    <Suspense
      fallback={
        <PageWithHeader>
          <Loading name="suspense" />
        </PageWithHeader>
      }
    >
      <div className="">
        <Router />
      </div>
    </Suspense>
  </HashRouter>
);
{
  /* <div className="h-full bg-indigo-50 p-4 lg:p-24"> */
}
