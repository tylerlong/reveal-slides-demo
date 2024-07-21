import React from 'react';
import markdownit from 'markdown-it';

const md = markdownit();

const Markdown = (props: { markdown: string }) => {
  const { markdown } = props;
  let lines = markdown.trim().split('\n');
  const commonPrefixWhiteSpace = Math.min(
    ...lines.map((line) => {
      const match = line.match(/^[ ]+/);
      return match ? match[0].length : 0;
    }),
  );
  lines = lines.map((line) => line.slice(commonPrefixWhiteSpace));
  const sections = lines
    .join('\n')
    .split('---\n')
    .map((section) => section.trim());
  return sections.map((section, index) => (
    <section key={`section-${index}`}>
      <div dangerouslySetInnerHTML={{ __html: md.render(section) }} />
    </section>
  ));
};

export default Markdown;
