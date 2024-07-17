import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { CodeHighlightDemo } from "./app/blog/blog";
import Landing from "./app/landing/landing";
import PortfolioMain from "./app/portfolio/Portfolio-main";
import Portfolio from "./app/Portfolio_copy/Portfolio";


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
  {
    link: "/editor",
    label: "Editor",
    element: <PortfolioMain />,
  },
];

// const appRout = createBrowserRouter([
//   {
//     path: "/",
//     errorElement: <NotFound />,
//     element: (
//       <>
//         <MobileNavbar links={rootLink}>
//           <Outlet />
//         </MobileNavbar>
//         <FooterSocial />
//       </>
//     ),
//     children: [
//       {
//         index: true,
//         element: <Navigate to="home" />,
//       },
//       ...rootLink.map((item) => {
//         return {
//           path: item.link,
//           element: item.element,
//         };
//       }),
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);

const appRout = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="p-0 m-0">
        <Outlet />
      </div>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="editor" />,
      },
      {
        path: "editor",
        element: <PortfolioMain />,
      },
     
    ],
  },
]);
export { appRout };
