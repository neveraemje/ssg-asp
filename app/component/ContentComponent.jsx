"use client"
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
      <ul
        className="flex flex-wrap -mb-px text-gray-600 text-base font-medium text-center"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        {tabs.map((tab, index) => (
          <li key={index} role="presentation">
            <button
              className={`inline-block p-4 border-b-2 rounded-t-lg ${
                index === activeTab
                  ? " border-green-600 text-green-600 font-semibold"
                  : "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              }`}
              id={`tab-${index}`}
              data-tabs-target={`#content-${index}`}
              type="button"
              role="tab"
              aria-controls={`content-${index}`}
              aria-selected={index === activeTab ? "true" : "false"}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


const TableOfContents = ({ toc }) => {
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
    <div className="toc">
      <h2 className="title-bar">On this page</h2>
      <ul className="space-y-2">
        {toc.map((entry, index) => (
          <li key={index}>
            <a
              href={`#${entry.anchor}`}
              className={`text-${entry.type === "h1" ? "sm" : "sm"} hover:text-teal-600 list-bar`}
              onClick={(e) => handleItemClick(e, entry.anchor)}
            >
              {entry.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};


const Content = ({ content }) => {
  const [tabs, setTabs] = useState([]);
  const [defaultContent, setDefaultContent] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const splitContentIntoTabs = (htmlContent) => {
      const regex = /<h1.*?>(.*?)<\/h1>/gi;
      const matches = htmlContent.match(regex);
      if (!matches) return [];

      const tabs = matches.map((match, index) => {
        const label = match.match(/<h1.*?>(.*?)<\/h1>/i)[1];
        const startIndex = htmlContent.indexOf(match);
        const endIndex =
          index === matches.length - 1
            ? htmlContent.length
            : htmlContent.indexOf(matches[index + 1]);

        const tabContent = htmlContent.substring(startIndex, endIndex);

        return { label, content: tabContent };
      });

      const defaultContentArray = htmlContent
        .split(regex)
        .filter((segment) => segment.trim() !== "");
      if (defaultContentArray.length > 0) {
        setDefaultContent(defaultContentArray[0]);
      }

      return tabs;
    };

    const extractedTabs = splitContentIntoTabs(content.body.view.value);
    setTabs(extractedTabs);
  }, [content.body.view.value]);

  const buildToc = (tabContent) => {
    const tocEntries = [];
    const h1Regex = /<h1.*?>(.*?)<\/h1>/gi;
    const h2Regex = /<h2.*?>(.*?)<\/h2>/gi;

    const h1Matches = tabContent.match(h1Regex);
    const h2Matches = tabContent.match(h2Regex);
    
    if (h2Matches) {
      h2Matches.forEach((match) => {
        const h2Text = match.match(/<h2.*?>(.*?)<\/h2>/i)[1];
        const anchorLink = h2Text.toLowerCase().replace(/ /g, "-");
        tocEntries.push({ type: "h2", text: h2Text, anchor: anchorLink });
      });
    }

    setToc(tocEntries);
  };

  useEffect(() => {
    if (tabs[activeTab]) {
      buildToc(tabs[activeTab].content);
    }
  }, [activeTab, tabs]);

  return (
  
  <div className="relative mx-auto max-w-screen-xl md:flex md:flex-row md:py-0 py-8">

  <article
    className="mt-4 w-full max-w-[56rem] min-w-0  px-8 py-8 md:px-8 "
    style={{ minHeight: "calc(100vh - 103px)" }}
  >
  
      <h1 className="text-3xl font-semibold text-gray-700 mb-6">
        {content.title}
      </h1>

      {defaultContent && (
        <div className="prose max-w-none mb-4">
          {parse(defaultContent)}
        </div>
      )}

      <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
  <div className="prose max-w-none">
  {parse(
    tabs[activeTab]?.content.replace(
      /<h([1-2])[^>]*>(.*?)<\/h\1>/gi,
      (match, level, text) => {
        const anchorLink = text.toLowerCase().replace(/ /g, "-");
        return `<h${level} id="${anchorLink}"${level === "1" ? ' class="hidden"' : ''}>${text}</h${level}>`;
      }
    ) || ""
  )}
</div>

  
  </article>

  <div className="sticky top-[120px] w-64 h-full overflow-y-auto pr-4">
    {/* Render Table of Contents using the new component */}
    {toc.length > 0 && <TableOfContents toc={toc} />}
  </div>

  </div>
    
  
  );
};

export default Content;
