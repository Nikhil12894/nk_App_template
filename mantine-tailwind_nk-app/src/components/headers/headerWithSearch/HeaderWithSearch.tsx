import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
// import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./HeaderWithSearch.module.css";
import { HeaderSearchProps } from "../types";
import { useEffect, useState } from "react";

export function HeaderSearch({
  headerMenu = [],
}: {
  headerMenu: HeaderSearchProps[];
}) {
  const [opened, { toggle }] = useDisclosure(false);
  const [items, setItems] = useState<JSX.Element[]>();

  console.log(classes);
  useEffect(() => {
    if (headerMenu.length > 0) {
      const _items = headerMenu.map((link) => (
        <a
          key={link.label}
          href={link.link}
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        >
          {link.label}
        </a>
      ));

      setItems(_items);
    }
  }, [headerMenu]);

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {/* <MantineLogo size={28} /> */}
          NK
        </Group>

        <Group>
          {items && (
            <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
              {items}
            </Group>
          )}
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}

export default HeaderSearch;
