"use client"
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const TableOfContents = ({ content, activeTab }) => {
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

    const filteredHeadings = headings.filter((heading) => {
      if (heading.level === "h1") {
        // Show all H1 headings
        return true;
      } else if (heading.level === "h2") {
        // Show H2 headings only if they are inside the active tab's content
        const headingRef = document.getElementById(heading.id);
        if (headingRef && headingRef.parentElement) {
          const tabContentId = headingRef.parentElement.getAttribute("data-tab-content-id");
          return tabContentId === `content-${activeTab}`;
        }
      }
      return false;
    });

    const toc = filteredHeadings.map((heading) => (
      <li key={heading.id}>
        {heading.level === "h1" ? (
          <a className="list-bar pl-0" href={`#${heading.id}`} onClick={(e) => handleItemClick(e, heading.id)}>
            {heading.title}
          </a>
        ) : (
          <a className="list-bar pl-4" href={`#${heading.id}`} onClick={(e) => handleItemClick(e, heading.id)}>
            {heading.title}
          </a>
        )}
      </li>
    ));

    setTableOfContents(toc);
  }, [content.body.view.value, activeTab]);

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
    <div className="sticky top-[120px] hidden h-[calc(100vh-121px)] w-[240px] md:flex md:shrink-0 md:flex-col md:justify-between pl-8">
      <div className="relative overflow-hidden">
        <nav className="styled-scrollbar flex h-[calc(100vh-200px)] flex-col overflow-y-scroll pr-2 pb-4">
          <h2 className="title-bar">Table of content</h2>
          <ul className="space-y-2">{tableOfContents}</ul>
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents;
