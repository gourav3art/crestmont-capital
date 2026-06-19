export default function Footer() {
  return (
    <footer className="bg-[#02040a] text-gray-500 text-xs font-light py-16 border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="font-serif-display text-white tracking-[0.2em] text-sm mb-4">CRESTMONT CAPITAL</div>
          <p className="text-gray-600 leading-relaxed max-w-xs">
            Strategic Capital. Global Perspective. Enduring Value.
          </p>
        </div>
        <div>
          <h4 className="text-white tracking-[0.1em] mb-4 text-[11px]">PLATFORM</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-white transition">Investment Management</a></li>
            <li><a href="#" className="hover:text-white transition">Strategic Advisory</a></li>
            <li><a href="#" className="hover:text-white transition">Capital Markets</a></li>
            <li><a href="#" className="hover:text-white transition">Research & Analytics</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white tracking-[0.1em] mb-4 text-[11px]">COMPANY</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-white transition">Philosophy</a></li>
            <li><a href="#" className="hover:text-white transition">Governance</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white tracking-[0.1em] mb-4 text-[11px]">CONTACT</h4>
          <p className="text-gray-600 mb-2">info@crestmontcapital.com</p>
          <p className="text-gray-600 mb-4">+1 (212) 555-0198</p>
          <p className="text-[11px] text-gray-500 tracking-wide">New York | London | Singapore</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-gray-600">
        <div>© {new Date().getFullYear()} Crestmont Capital. All rights reserved.</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">Terms of Use</a>
          <a href="#" className="hover:text-white transition">Disclosures</a>
        </div>
      </div>
    </footer>
  );
}
