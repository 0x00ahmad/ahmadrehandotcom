import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MarkdownRenderer({ markdownContent }: { markdownContent: string }) {
    return (
        <div className="markdown-container prose">
            <ReactMarkdown
                children={markdownContent}
                remarkPlugins={[remarkGfm]}
            />
        </div>
    );
}

export default MarkdownRenderer;
