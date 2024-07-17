const TextToBold = ({ children }: { children: string }) => {
  // Regex pattern to match text starting and ending with *
  const pattern = /\*([^*]+)\*/g;

  // Replace matched text with <strong> tags
  const updatedParagraph = children.replace(pattern, "<strong>$1</strong>");

  return <span dangerouslySetInnerHTML={{ __html: updatedParagraph }} />;
};

export default TextToBold;
