export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-black to-slate-950" />

        <div className="relative z-10 max-w-6xl text-center">
          <p className="mb-6 text-sm tracking-[0.35em] text-slate-400">
            GLOBAL INVESTMENT MANAGEMENT
          </p>

          <h1 className="mb-8 text-7xl font-light tracking-tight">
            CRESTMONT
            <br />
            CAPITAL
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl text-slate-300">
            Independent investment management, strategic advisory,
            and cross-border capital solutions for institutions,
            businesses, and sophisticated investors.
          </p>

          <button className="rounded border border-slate-700 px-8 py-4 hover:bg-slate-900">
            Explore Platform
          </button>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-y border-slate-800 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">

          <div className="text-center">
            <h2 className="text-4xl font-light">$250M+</h2>
            <p className="text-slate-400">Capital Exposure</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-light">15+</h2>
            <p className="text-slate-400">Markets</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-light">24/7</h2>
            <p className="text-slate-400">Coverage</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl font-light">100%</h2>
            <p className="text-slate-400">Independent</p>
          </div>

        </div>
      </section>

      {/* Platform */}
      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="mb-16 text-5xl font-light">
          Global Capital Platform
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border border-slate-800 p-8">
            <h3 className="mb-4 text-2xl">
              Investment Management
            </h3>

            <p className="text-slate-400">
              Research-driven portfolio construction,
              capital allocation and risk management.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 p-8">
            <h3 className="mb-4 text-2xl">
              Strategic Advisory
            </h3>

            <p className="text-slate-400">
              Corporate development, restructuring,
              and cross-border transaction support.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 p-8">
            <h3 className="mb-4 text-2xl">
              Research & Analytics
            </h3>

            <p className="text-slate-400">
              Macroeconomic intelligence, market
              research and investment analysis.
            </p>
          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-slate-950 px-8 py-40">

        <div className="mx-auto max-w-5xl">

          <h2 className="mb-12 text-5xl font-light">
            Investment Philosophy
          </h2>

          <blockquote className="text-4xl leading-relaxed text-slate-200">
            Capital is scarce.
            <br />
            Discipline matters.
            <br />
            Long-term compounding remains the foundation
            of enduring value creation.
          </blockquote>

        </div>

      </section>

      {/* Research */}
      <section className="mx-auto max-w-7xl px-8 py-32">

        <h2 className="mb-16 text-5xl font-light">
          Research Centre
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          <div className="rounded-xl border border-slate-800 p-8">
            Quarterly Market Outlook
          </div>

          <div className="rounded-xl border border-slate-800 p-8">
            Global Macro Review
          </div>

          <div className="rounded-xl border border-slate-800 p-8">
            Strategic Asset Allocation
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-8 py-20">

        <div className="mx-auto max-w-7xl">

          <h3 className="mb-4 text-2xl">
            CRESTMONT CAPITAL
          </h3>

          <p className="text-slate-400">
            Strategic Capital. Global Perspective.
          </p>

        </div>

      </footer>

    </main>
  );
}
