// TableOfContents.js
"use client"
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const TableOfContents = ({ content }) => {
  const [tableOfContents, setTableOfContents] = useState([]);
  

  useEffect(() => {
   
    const headings = [];
    const parsed = parse(content.body.view.value, {
      replace: (domNode) => {
        if (domNode.name && /^h[1-2]$/.test(domNode.name)) {
          const title = domNode.children[0]?.data?.trim();
          if (title) {
            const id = domNode.attribs.id || title.toLowerCase().replace(/\s+/g, "-");
            headings.push({ level: domNode.name, title, id });
            return `<${domNode.name} id="${id}">${title}</${domNode.name}>`;
          }
        }
        return undefined;
      },
    });

    const toc = headings.map((heading) => (
      <li key={heading.id}>
        {heading.level === "h1" ? (
          <a className="toc pl-0" href={`#${heading.id}`} onClick={(e) => handleItemClick(e, heading.id)}>
            {heading.title}
          </a>
        ) : (
          <a className="toc pl-4 block" href={`#${heading.id}`}onClick={(e) => handleItemClick(e, heading.id)}>
            {heading.title}
          </a>
        )}
      </li>
    ));

    setTableOfContents(toc);
  }, [content.body.view.value]);

  const handleItemClick = (e, id) => {
    e.preventDefault();
    const headingRef = document.getElementById(id);


    if (headingRef) {
      const spacing = 44; // Desired spacing value in pixels
    
      // Calculate the target scroll position by subtracting the spacing
      const targetScrollPosition = headingRef.offsetTop - spacing;
    
      // Use scrollTo to scroll to the calculated position with smooth behavior
      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <div className="sticky top-[120px] hidden h-[calc(100vh-121px)] w-64 md:flex md:shrink-0 md:flex-col md:justify-between">
      <div className="relative overflow-hidden">
        <nav className="styled-scrollbar flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pr-2 pb-4">
          <h2 className="title-bar">
          On this page
          </h2>
          <ul className="space-y-2">
           
            {tableOfContents}
         
          </ul>

        </nav>
      </div>
    </div>

  );
};

export default TableOfContents;
