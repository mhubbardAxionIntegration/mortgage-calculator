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
                <li
                  key={j}
                  className="leading-relaxed [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
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
                  className="leading-relaxed [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
                  dangerouslySetInnerHTML={{ __html: item }}
                />
              ))}
            </ol>
          );
        }
        if (block.type === "aside") {
          return (
            <aside
              key={i}
              className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 text-slate-700"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
                From the editor
              </p>
              <p
                className="mt-1.5 text-sm leading-relaxed [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            </aside>
          );
        }
        if (block.type === "figure") {
          return (
            <figure
              key={i}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              {/* Local SVG/PNG charts — skip next/image so SVGs stay sharp. */}
              <img
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                className="h-auto w-full"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="border-t border-slate-100 px-4 py-3 text-sm leading-relaxed text-slate-500">
                {block.caption}
              </figcaption>
            </figure>
          );
        }
        if (block.type === "table") {
          return (
            <figure key={i} className="overflow-x-auto rounded-2xl border border-slate-200">
              <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    {block.headers.map((h, j) => (
                      <th
                        key={j}
                        className="border-b border-slate-200 px-3 py-2 font-semibold"
                        dangerouslySetInnerHTML={{ __html: h }}
                      />
                    ))}
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  {block.rows.map((row, ri) => (
                    <tr key={ri} className="odd:bg-white even:bg-slate-50/80">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="border-b border-slate-100 px-3 py-2 align-top [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
                          dangerouslySetInnerHTML={{ __html: cell }}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {block.caption ? (
                <figcaption className="border-t border-slate-100 px-3 py-2 text-xs leading-relaxed text-slate-500">
                  {block.caption}
                </figcaption>
              ) : null}
            </figure>
          );
        }
        if (block.type === "faq") {
          return (
            <div key={i} className="space-y-4">
              {block.items.map((item, j) => (
                <div
                  key={j}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
                >
                  <h3 className="text-base font-semibold text-slate-900">
                    {item.q}
                  </h3>
                  <p
                    className="mt-1.5 text-sm leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              ))}
            </div>
          );
        }
        return (
          <p
            key={i}
            className="leading-relaxed text-slate-600 [&_a]:font-medium [&_a]:text-sky-800 [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        );
      })}
    </div>
  );
}
