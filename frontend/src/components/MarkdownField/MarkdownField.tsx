'use client';

import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

export interface IMarkdownFieldProps {
  content: string;
}

/**
 * MarkdownField component renders Markdown content as React elements.
 * Supports GitHub Flavored Markdown (GFM) and raw HTML.
 * Custom styling is applied for paragraphs, headers, lists, links, and strong text.
 *
 * @param {Object} props - Component props.
 * @param {IMarkdownField} props.content - The Markdown content to render.
 *
 * @returns {JSX.Element} The rendered Markdown content.
 */
export default function MarkdownField({ content }: IMarkdownFieldProps) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[[remarkGfm, { breaks: true }]]} // single \n becomes <br>
        rehypePlugins={[rehypeRaw]} // allow raw HTML
        components={{
          p: ({ children }) => <p className="mb-5 text-xl md:text-2xl">{children}</p>,
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 text-2xl font-medium italic md:text-3xl">{children}</h3>
          ),
          h4: ({ children }) => (
            <h4 className="mb-2 mt-6 text-xl font-semibold md:text-2xl">{children}</h4>
          ),
          ul: ({ children }) => <ul className="mb-5 list-disc ps-8">{children}</ul>,
          ol: ({ children }) => <ol className="mb-5 list-decimal ps-8">{children}</ol>,
          li: ({ children }) => <li className="mb-2 text-xl md:text-xl">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
          a: ({ href, children }) => (
            <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-bg-1">
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
