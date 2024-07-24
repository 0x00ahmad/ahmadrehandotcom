import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownRenderer({ markdownContent }: { markdownContent: string }) {
    return (
        <div className="markdown-container prose text-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
}

export default MarkdownRenderer;
