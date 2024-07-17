import { AppShell, Burger, Group, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../lib/utils";
import { HeaderSearchProps } from "../types";
import classes from "./MobileNavbar.module.css";

interface MobileNavbarProps {
  children: React.ReactNode;
  links: HeaderSearchProps[];
}
export function MobileNavbar({ children, links }: MobileNavbarProps) {
  const [opened, { toggle }] = useDisclosure();
  //   const pinned = useHeadroom({ fixedAt: 10 });
  const [rootLinks, setRootLinks] = useState<React.ReactNode[]>([]);
  useEffect(() => {
    if (links.length > 0) {
      const _rootLinks = links.map((link) => (
        <Link
          to={link.link}
          className={cn([
            classes.control,
            "hover:bg-slate-400/20 p-2 dark:text-white",
          ])}
          key={link.label}
        >
          <Text fw={700}>{link.label}</Text>
        </Link>
      ));
      setRootLinks(_rootLinks);
    }
  }, [links]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
    >
      <AppShell.Header className="bg-gradient-to-t from-cyan-100 dark:bg-gradient-to-b dark:from-cyan-900 border-b-2 rounded-md shadow-sm">
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            {/* <MantineLogo size={30} /> */}
            <Text fw={"bolder"}>NK</Text>
            <Group ml="xl" gap={0} visibleFrom="sm" className="gap-4">
              {rootLinks}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {rootLinks}
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
