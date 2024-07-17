import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { CodeHighlightDemo } from "./app/blog/blog";
import Landing from "./app/landing/landing";
import { NotFound } from "./app/notfound/NotFound";
import Portfolio from "./app/Portfolio_copy/Portfolio";
import { FooterSocial } from "./components/footer/FooterSocial/FooterSocial";
import { MobileNavbar } from "./components/headers/MobileNavbar/MobileNavbar";


const rootLink: {
  link: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
  element: React.ReactNode;
}[] = [
  {
    link: "/home",
    label: "Home",
    element: <Landing />,
  },
  {
    link: "/portfolio",
    label: "Portfolio",
    element: <Portfolio />,
  },
  {
    link: "/blogs",
    label: "Blogs",
    element: <CodeHighlightDemo />,
  },
];

const appRout = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    element: (
      <>
        <MobileNavbar links={rootLink}>
          <Outlet />
        </MobileNavbar>
        <FooterSocial />
      </>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="home" />,
      },
      ...rootLink.map((item) => {
        return {
          path: item.link,
          element: item.element,
        };
      }),
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export { appRout };
