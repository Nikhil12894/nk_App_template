import { CodeHighlightTabs } from "@mantine/code-highlight";
// import { TypeScriptIcon, CssIcon } from "@mantinex/dev-icons";

const tsxCode = `
function Button() {
  return <button>Click me</button>;
}
`;

const cssCode = `
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;

function Demo() {
//   const tsIcon = <TypeScriptIcon size={18} />;
//   const cssIcon = <CssIcon size={18} />;

  return (
    <CodeHighlightTabs
      code={[
        {
          fileName: "Button.tsx",
          code: tsxCode,
          language: "tsx",
        //   icon: tsIcon,
        },
        {
          fileName: "Button.module.css",
          code: cssCode,
          language: "scss",
        //   icon: cssIcon,
        },
      ]}
    />
  );
}

export { Demo as CodeHighlightDemo } ;