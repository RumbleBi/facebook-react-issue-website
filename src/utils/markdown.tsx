import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MarkdownProps {
  content: string;
}

export default function Markdown({ content }: MarkdownProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[remarkGfm, rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              {...props}
              style={vscDarkPlus}
              language={match[1]}
              PreTag="div"
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <CodeBlockStyle className={className} {...props}>
              {children}
            </CodeBlockStyle>
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}

const CodeBlockStyle = styled.code`
  border-radius: 6px;
  background-color: #696969;
  color: #fff;
  white-space: break-spaces;
  padding: 0.2rem 0.4rem;
  font-size: 75%;
`;
