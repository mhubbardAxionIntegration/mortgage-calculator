import type { Block } from "@/lib/blog";

/**
 * Renders authored blog blocks. Paragraph HTML is trusted, first-party content
 * (used for internal links to calculators), so inlining it is safe here.
 */
export function BlogContent({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2
              key={i}
              className="pt-2 text-2xl font-bold tracking-tight text-slate-900"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 text-slate-600">
              {block.items.map((item, j) => (
                <li key={j} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-6 text-slate-600">
              {block.items.map((item, j) => (
                <li
                  key={j}
                  className="leading-relaxed [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ol>
          );
        }
        return (
          <p
            key={i}
            className="leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-emerald-700 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </div>
  );
}
