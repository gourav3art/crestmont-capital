'use client';

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'macro' | 'credit'>('all');

  return (
    <div className="min-h-screen w-full bg-[#02050d] text-white selection:bg-[#d4af37]/30 selection:text-white font-sans antialiased">
      
      {/* 1. INSTITUTIONAL HEADER FIXED NAVIGATION */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#02050d]/80 backdrop-blur-md border-b border-white/5 px-6 lg:px-16 py-5 flex justify-between items-center">
        <div className="text-sm font-semibold uppercase tracking-[4px] text-white select-none">
          Crestmont <span className="text-[#d4af37] font-light">Capital</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-[11px] font-medium uppercase tracking-[2px] text-neutral-400">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          <a href="#research" className="hover:text-white transition-colors">Research</a>
          <a href="#governance" className="hover:text-white transition-colors">Governance</a>
        </nav>
        <div>
          <button className="border border-[#d4af37]/30 bg-transparent text-[#d4af37] px-5 py-2 text-[10px] font-semibold uppercase tracking-[1.5px] hover:bg-[#d4af37] hover:text-[#02050d] transition-all duration-300">
            Investor Login →
          </button>
        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center pt-24 px-6 lg:px-16 overflow-hidden">
        {/* Subtle background abstract gradient to simulate the planet map atmosphere */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_70%_30%,#1e293b_0%,transparent_60%)]" />
        
        <div className="relative z-10 max-w-4xl mt-12">
          <div className="font-mono text-[11px] text-[#d4af37] uppercase tracking-[4px] mb-4">// Global Investment Management</div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white mb-8 leading-[1.05]">
            CRESTMONT <br />
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">CAPITAL</span>
          </h1>
          <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed mb-10 font-light">
            Independent investment management, strategic advisory, and cross-border capital solutions engineered for institutions, modern businesses, and sophisticated market operations.
          </p>
          <button className="border border-white/20 bg-white/5 backdrop-blur-sm text-white px-8 py-4 text-xs font-medium uppercase tracking-[2px] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-300">
            Explore Our Platform &rarr;
          </button>
        </div>
      </section>

      {/* 3. FOUR-PILLAR CORE VALUE STRIP */}
      <section className="border-t border-b border-white/5 bg-[#030814] px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {[
          { icon: "🌐", title: "Global Perspective", desc: "Operating seamlessly across interconnected international financial structures." },
          { icon: "🛡️", title: "Independent Thinking", desc: "Unconflicted processing execution aligned strictly with systemic objectives." },
          { icon: "📊", title: "Disciplined Approach", desc: "Rigorous system validation loops and structural protective management rules." },
          { icon: "🤝", title: "Client Partnership", desc: "Long-term computational frameworks built around trust, precision, and performance." }
        ].map((pillar, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="text-lg text-[#d4af37] mb-1">{pillar.icon}</div>
            <h3 className="text-xs font-bold uppercase tracking-[1.5px] text-white">{pillar.title}</h3>
            <p className="text-xs text-neutral-400 leading-relaxed font-light">{pillar.desc}</p>
          </div>
        ))}
      </section>

      {/* 4. INTEGRATED CAPITAL SOLUTIONS GRID */}
      <section id="platform" className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <div className="text-mono text-[10px] text-[#d4af37] uppercase tracking-[3px] mb-2">// Our Platform</div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">Integrated Capital Solutions</h2>
          </div>
          <p className="text-neutral-400 text-sm max-w-md font-light leading-relaxed">
            A comprehensive execution interface designed to map opportunity parameters, mitigate execution anomalies, and secure absolute long-term target finality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { tag: "01", title: "Investment Management", desc: "Active quantitative rules across complex processing pools with strict focus on variance adjustments." },
            { tag: "02", title: "Strategic Advisory", desc: "Structured architectural consultancy, restructuring assistance, and protocol integrations." },
            { tag: "03", title: "Capital Markets", desc: "Direct framework path connection to wholesale financial networks and liquidity execution arrays." },
            { tag: "04", title: "Research & Analytics", desc: "Proprietary processing analytics delivering clear pattern definition updates to active systems." }
          ].map((sol, i) => (
            <div key={i} className="group border border-white/5 bg-[#040918]/60 p-8 flex flex-col justify-between h-[280px] transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-[#070e24]">
              <div>
                <div className="font-mono text-[10px] text-neutral-600 mb-6 group-hover:text-[#d4af37] transition-colors">// {sol.tag}</div>
                <h4 className="text-lg font-normal mb-3 text-white">{sol.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">{sol.desc}</p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#d4af37] cursor-pointer opacity-80 group-hover:opacity-100 transition-opacity">
                Learn More &rarr;
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. RESEARCH INSIGHTS & PERSPECTIVES MODULE */}
      <section id="research" className="py-24 border-t border-white/5 bg-[#030712] px-6 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-mono text-[10px] text-[#d4af37] uppercase tracking-[3px] mb-2">// System Intelligence</div>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight">Latest Perspectives</h2>
            </div>
            <span className="text-xs text-[#d4af37] font-medium tracking-[1px] hover:underline cursor-pointer">
              View all insights &rarr;
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { cat: "Market Outlook", title: "Global Macro Outlook Q2 2026", date: "June 12, 2026", lines: "h-[4px] bg-[#d4af37]" },
              { cat: "Execution Strategy", title: "Navigating Structural Volatility with Logic", date: "May 28, 2026", lines: "h-[4px] bg-neutral-600" },
              { cat: "Private Infrastructure", title: "Private Allocation Channels: A Compelling Target Set", date: "April 15, 2026", lines: "h-[4px] bg-neutral-800" }
            ].map((insight, i) => (
              <div key={i} className="border border-white/5 bg-[#050b1a]/40 overflow-hidden group cursor-pointer hover:border-white/10 transition-colors">
                {/* Visual graphic simulator line placeholder */}
                <div className={`${insight.lines} w-full transition-all duration-500 group-hover:bg-[#d4af37]`} />
                <div className="p-8">
                  <span className="font-mono text-[9px] text-[#d4af37] uppercase tracking-[2px] block mb-4">{insight.cat}</span>
                  <h4 className="text-xl font-light leading-snug text-white mb-6 group-hover:text-neutral-200 transition-colors">{insight.title}</h4>
                  <span className="text-[11px] text-neutral-500 font-mono">{insight.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL INSTITUTIONAL FOOTER SYSTEM */}
      <footer className="border-t border-white/5 bg-[#010307] px-6 lg:px-16 py-20 text-neutral-400 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[3px] text-white mb-4">
              Crestmont <span className="text-[#d4af37] font-light">Capital</span>
            </div>
            <p className="text-neutral-500 leading-relaxed font-light max-w-xs">
              Systematic Processing Architecture. <br />
              Global Telemetry Perspective. <br />
              Enduring Operational Value.
            </p>
          </div>
          <div>
            <h5 className="text-white font-medium uppercase tracking-[1.5px] mb-4">Platform</h5>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Investment Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Strategic Advisory</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Capital Markets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Research & Analytics</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium uppercase tracking-[1.5px] mb-4">Company</h5>
            <ul className="space-y-2 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Operational Philosophy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Governance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Infrastructure Core</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-medium uppercase tracking-[1.5px] mb-4">Global Context</h5>
            <p className="text-neutral-500 font-light leading-relaxed mb-2">info@crestcap.space</p>
            <p className="font-mono text-[11px] text-neutral-600">London // Singapore // Odisha</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 font-light text-[11px]">
          <div>© 2026 Crestmont Capital Ltd. All rights reserved. Registered UK Company No. 17037425.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-neutral-400 transition-colors">Disclosures</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
