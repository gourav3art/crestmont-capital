export default function Perspectives() {
  const articles = [
    {
      tag: "MARKET OUTLOOK",
      title: "Global Macro Outlook Q2 2026",
      date: "May 12, 2026",
      bgClass: "bg-gradient-to-br from-blue-950/20 via-slate-900/40 to-black"
    },
    {
      tag: "INVESTMENT STRATEGY",
      title: "Navigating Volatility with Discipline",
      date: "May 5, 2026",
      bgClass: "bg-gradient-to-tr from-slate-900 via-neutral-900/50 to-blue-950/30"
    },
    {
      tag: "PRIVATE MARKETS",
      title: "Private Credit: A Compelling Opportunity Set",
      date: "April 28, 2026",
      bgClass: "bg-gradient-to-b from-neutral-950 via-slate-900/30 to-black"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24 border-b border-[var(--border-subtle)]">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs tracking-[0.2em] text-blue-400 font-medium block mb-2">RESEARCH INSIGHTS</span>
          <h2 className="font-serif-display text-3xl md:text-4xl font-light text-white">Latest Perspectives</h2>
        </div>
        <a href="#" className="text-xs tracking-[0.1em] text-blue-400 hover:text-white transition hidden sm:block">
          View all research →
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, idx) => (
          <div 
            key={idx} 
            className="border border-[var(--border-subtle)] bg-[#02040a] flex flex-col justify-between h-96 group hover:border-white/20 transition duration-300"
          >
            {/* Upper Geometric/Abstract Pattern Container */}
            <div className={`h-48 w-full border-b border-[var(--border-subtle)] relative overflow-hidden ${article.bgClass}`}>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>
            
            {/* Metadata and Title */}
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <span className="text-[10px] tracking-[0.15em] text-blue-400 font-medium block mb-2">{article.tag}</span>
                <h3 className="text-base font-light text-white group-hover:text-blue-300 transition duration-300 leading-snug">
                  {article.title}
                </h3>
              </div>
              <span className="text-[11px] text-gray-600 font-light">{article.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
