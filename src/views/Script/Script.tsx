import { memo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import script from "../../data/script.md?raw";

const Script = memo(() => {
  return (
    <div className="px-4 py-8 overflow-auto prose max-w-4xl mx-auto will-change-transform">
      <ReactMarkdown
        children={script}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter PreTag="div" language="python">
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
});

export default Script;
