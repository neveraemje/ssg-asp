import parse from "html-react-parser";
import React from "react";
import { ReplaceAttachment } from "./ReplaceAttachment";

const parseHexColors = (text) => {
  // Regular expression to match hex color codes
  const hexColorRegex = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/g;

  // Replace hex color codes with colored boxes
  return text.replace(hexColorRegex, (match) => {
    return `<span class="hexa-preview" style="background-color: ${match};"></span>`;
  });
};

const Content = ({ content }) => {
  const replacedContent = ReplaceAttachment(content.body.view.value );
  const parsedContent = parse(parseHexColors(replacedContent));
 
  // const parsedContent = parse(parseHexColors(replacedContent));

  return (
    <div>
    <article
      className="mt-4 w-full min-w-0 max-w-6xl px-1 py-8 md:px-6"
      style={{ minHeight: "calc(100vh - 103px)" }}
    >
      <div>
        <>
          <h1 className=" text-3xl font-semibold text-gray-800 mb-6 dark:text-zinc-200">{content.title}</h1>
          <div className="prose max-w-none">{parsedContent}</div>
        </>
      </div>
    </article>
    </div>
  );
};

export default Content;