import { Link, RichTextEditor, useRichTextEditorContext } from "@mantine/tiptap";
import { Color } from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";

import Highlight from "@tiptap/extension-highlight";
import SubScript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import jsx from "highlight.js/lib/languages/javascript";
import tsx from "highlight.js/lib/languages/typescript";
import { common, createLowlight } from "lowlight";

import { Menu, TypographyStylesProvider } from "@mantine/core";
import { IconPhoto, IconTextIncrease } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import { CustomCodeBlockLowlight } from "./custom-code-block";
import "./editor.css";
import { FontSize } from "./FontSize";
import { EditorProps } from "./types";



const lowlight = createLowlight(common);

// register languages that you are planning to use
lowlight.register({ tsx });
lowlight.register({ jsx });


export function EditorComponent({ content, onUpdate, isEditable }: EditorProps) {
  const editor = useEditor({
    autofocus: true,
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Underline,
      Link,
      Superscript,
      SubScript,
      Highlight,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      FontSize,
      Color,
      CustomCodeBlockLowlight.configure({ lowlight }),
      ImageResize
    ],
    editorProps: {
      attributes: {
        style: "border: none;",
      },
    },
    content,
  });

  useEffect(() => {
    if(editor) {
        editor?.setEditable(isEditable);
    }
  }, [editor, isEditable]);
  return (
    <TypographyStylesProvider>
      <RichTextEditor
        editor={editor}
        withTypographyStyles={false}
        onBlur={() => {
          if (editor) {
            onUpdate && onUpdate(editor.getHTML());
          }
        }}
        m={0}
        p={0}
      >
        {isEditable && (
          <RichTextEditor.Toolbar sticky stickyOffset={60} mb="xl"    mt="sm" className="justify-center ">
            <RichTextEditor.ControlsGroup>
              <RichTextEditor.ColorPicker
                colors={[
                  "#25262b",
                  "#868e96",
                  "#fa5252",
                  "#e64980",
                  "#be4bdb",
                  "#7950f2",
                  "#4c6ef5",
                  "#228be6",
                  "#15aabf",
                  "#12b886",
                  "#40c057",
                  "#82c91e",
                  "#fab005",
                  "#fd7e14",
                ]}
              />

              <RichTextEditor.Bold />
              <RichTextEditor.Italic />
              <RichTextEditor.Underline />
              <RichTextEditor.Strikethrough />
              <RichTextEditor.ClearFormatting />
              <RichTextEditor.Highlight />
              <RichTextEditor.Code />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.H1 />
              <RichTextEditor.H2 />
              <RichTextEditor.H3 />
              <RichTextEditor.H4 />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Blockquote />
              <RichTextEditor.Hr />
              <RichTextEditor.BulletList />
              <RichTextEditor.OrderedList />
              <RichTextEditor.Subscript />
              <RichTextEditor.Superscript />
              <RichTextEditor.CodeBlock />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Link />
              <RichTextEditor.Unlink />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.AlignLeft />
              <RichTextEditor.AlignCenter />
              <RichTextEditor.AlignJustify />
              <RichTextEditor.AlignRight />
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              {/* <FontSizeControl /> */}
              <CustomImageControl />
              
            </RichTextEditor.ControlsGroup>

            <RichTextEditor.ControlsGroup>
              <RichTextEditor.Undo />
              <RichTextEditor.Redo />
            </RichTextEditor.ControlsGroup>
          </RichTextEditor.Toolbar>
        )}
        <RichTextEditor.Content />
      </RichTextEditor>
    </TypographyStylesProvider>
  );
}


// const InsertStarControl=()=> {
//   const { editor } = useRichTextEditorContext();
//   return (
//     <RichTextEditor.Control
//       onClick={() => editor?.commands.insertContent('⭐')}
//       aria-label="Insert star emoji"
//       title="Insert star emoji"
//     >
//       <IconStar stroke={1.5} size="1rem" />
//     </RichTextEditor.Control>
//   );
// };

function CustomImageControl() {
const fileInputRef = useRef<HTMLInputElement>(null);  
const { editor } = useRichTextEditorContext();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result;
        editor
          ?.chain()
          .focus()
          .setImage({ src: `${base64String}` })
          .run();
      };
    }
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={fileInputRef}
        onChange={handleImageUpload}
      />
      <RichTextEditor.Control onClick={() => fileInputRef.current?.click()}>
        <IconPhoto stroke={1.5} size="1rem" />
      </RichTextEditor.Control>
    </>
  );
}


export const FontSizeControl= () => {
  const { editor } = useRichTextEditorContext();
      const [opened, setOpened] = useState(false);

  const fontSizes = [
    { label: "12px", value: "12px" },
    { label: "14px", value: "14px" },
    { label: "16px", value: "16px" },
    { label: "18px", value: "18px" },
    { label: "24px", value: "24px" },
    { label: "32px", value: "32px" },
  ];

  const handleFontSizeChange = (value: string|null) => {
    if (!value || value.length === 0) {
      return editor?.chain().focus().unsetFontSize().run();
    }
    return editor?.chain().focus().setFontSize(value).run();
  };

  return (
    <>
      <Menu
        opened={opened}
        onChange={setOpened}
        trigger="hover"
        offset={18}
        withArrow
        arrowPosition="center"
      >
        <Menu.Dropdown>
          {fontSizes.map((size) => (
            <Menu.Item
              onClick={() => handleFontSizeChange(size.value)}
              key={`${size.label}_${size.value}`}
            >
              <span style={{ fontSize: size.value }}>{size.label}</span>
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      <RichTextEditor.Control onClick={() => setOpened((prev) => !prev)}>
        <IconTextIncrease stroke={1.5} size={"1rem"} />
      </RichTextEditor.Control>
    </>
  );
};