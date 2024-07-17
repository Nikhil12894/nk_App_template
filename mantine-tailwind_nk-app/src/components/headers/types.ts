// const links = [
//   { link: "/about", label: "Features" },
//   { link: "/pricing", label: "Pricing" },
//   { link: "/learn", label: "Learn" },
//   { link: "/community", label: "Community" },
// ];

export interface HeaderSearchProps {
  link: string;
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
  element: React.ReactNode;
}