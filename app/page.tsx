export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wider">Crestmont Capital</h1>
        <nav className="space-x-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#structure" className="hover:text-white">Structure</a>
          <a href="#legal" className="hover:text-white">Legal</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="text-center py-32 px-6">
        <h2 className="text-6xl font-extrabold mb-6 tracking-tight">
          Crestmont Capital
        </h2>
        <p className="text-xl mb-4 text-gray-300">
          Proprietary Trading Firm
        </p>
        <p className="text-sm max-w-xl mx-auto text-gray-400 mb-8">
          Operating exclusively with internally allocated capital. No public investment services, advisory, or client fund management.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-2xl font-medium hover:scale-105 transition">
          Contact Compliance Team
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto py-20 px-8">
        <h3 className="text-3xl font-semibold mb-6">About the Firm</h3>
        <div className="grid md:grid-cols-2 gap-10 text-gray-300">
          <p>
            Crestmont Capital is a proprietary trading entity engaged in financial market operations using internally allocated capital. The firm is structured to operate with institutional discipline, focusing on execution quality, capital efficiency, and risk management.
          </p>
          <p>
            The firm does not solicit, accept, or manage funds from external investors and does not provide financial advisory, brokerage, or asset management services.
          </p>
        </div>
      </section>

      {/* STRUCTURE */}
      <section id="structure" className="bg-gray-900 py-20 px-8">
        <h3 className="text-3xl font-semibold text-center mb-12">Operational Framework</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {["Internal Capital Deployment","Risk Management Systems","Execution Infrastructure","Compliance Oversight","Liquidity Access","Strategy Research"].map((item) => (
            <div key={item} className="bg-black p-6 rounded-2xl border border-gray-800 hover:border-gray-600 transition">
              <h4 className="text-lg font-semibold mb-2">{item}</h4>
              <p className="text-sm text-gray-400">
                Structured proprietary trading component aligned with institutional practices.
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* LEGAL */}
      <section id="legal" className="py-20 px-8 max-w-6xl mx-auto">
        <h3 className="text-3xl font-semibold mb-10">Legal & Compliance</h3>

        <div className="grid md:grid-cols-2 gap-10 text-gray-300 text-sm">

          <div>
            <h4 className="font-semibold mb-2">Privacy Policy</h4>
            <p>
              Limited personal data may be collected strictly for communication and compliance obligations. Data is securely handled and disclosed only where required under applicable regulations.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Terms of Service</h4>
            <p>
              This website is provided for informational purposes only. Crestmont Capital operates solely as a proprietary trading firm and does not provide financial services to third parties.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Delivery Policy</h4>
            <p>
              No physical goods or retail services are offered. All activities remain internal to the organization.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Risk Disclosure</h4>
            <p>
              Trading financial instruments carries significant risk. All trading is conducted using firm capital and no guarantees of performance are made.
            </p>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-semibold mb-2">Regulatory Position</h4>
            <p>
              Crestmont Capital is not a broker, dealer, investment advisor, or asset manager. The firm does not engage in client-facing financial services or public capital solicitation.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-gray-900 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-6">Contact</h3>
          <p className="text-gray-300">Email: stag42uk@gmail.com</p>
          <p className="text-gray-400 mt-2">Business Type: Proprietary Trading Firm</p>
          <p className="text-gray-400">Response Time: 24–48 business hours</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-8 text-sm border-t border-gray-800">
        <p>© 2026 Crestmont Capital. All rights reserved.</p>
        <p className="text-gray-500 mt-2">
          Operating as a proprietary trading firm using internal capital only.
        </p>
      </footer>

    </div>
  );
}
