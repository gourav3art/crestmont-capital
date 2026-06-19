'use client';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#02050d',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      WebkitFontSmoothing: 'antialiased',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box'
    }}>
      
      {/* 1. INSTITUTIONAL HEADER FIXED NAVIGATION */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: 'rgba(2, 5, 13, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '14px', fontWeight: 600, uppercase: 'true', letterSpacing: '4px', textTransform: 'uppercase' }}>
          Crestmont <span style={{ color: '#d4af37', fontWeight: 300 }}>Capital</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button style={{
            border: '1px solid rgba(212, 175, 55, 0.4)',
            backgroundColor: 'transparent',
            color: '#d4af37',
            padding: '8px 18px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            cursor: 'pointer'
          }}>
            Investor Login →
          </button>
        </div>
      </header>

      {/* 2. CINEMATIC HERO SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: '160px 40px 80px 40px',
        boxSizing: 'border-box',
        background: 'radial-gradient(circle at 75% 30%, #0d1b3a 0%, #02050d 60%)'
      }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <div style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '16px' }}>
            // Global Investment Management
          </div>
          <h1 style={{
            fontSize: '64px',
            fontWeight: 200,
            letterSpacing: '-0.02em',
            color: '#ffffff',
            marginBottom: '24px',
            lineHeight: '1.1',
            textTransform: 'uppercase'
          }}>
            CRESTMONT <br />
            <span style={{ fontWeight: 600, color: '#e5e5e5' }}>CAPITAL</span>
          </h1>
          <p style={{
            color: '#a3a3a3',
            fontSize: '17px',
            maxWidth: '560px',
            lineHeight: '1.6',
            marginBottom: '40px',
            fontWeight: 300
          }}>
            Independent investment management, strategic advisory, and cross-border capital solutions engineered for institutions, modern businesses, and sophisticated market operations.
          </p>
          <button style={{
            border: '1px solid rgba(255, 255, 255, 0.15)',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            backdropFilter: 'blur(4px)',
            color: '#ffffff',
            padding: '14px 28px',
            fontSize: '11px',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '2px',
            cursor: 'pointer'
          }}>
            Explore Our Platform →
          </button>
        </div>
      </section>

      {/* 3. FOUR-PILLAR CORE VALUE STRIP */}
      <section style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: '#030814',
        padding: '60px 40px',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '40px',
        boxSizing: 'border-box'
      }}>
        {[
          { title: "Global Perspective", desc: "Operating seamlessly across interconnected international financial structures." },
          { title: "Independent Thinking", desc: "Unconflicted processing execution aligned strictly with systemic objectives." },
          { title: "Disciplined Approach", desc: "Rigorous system validation loops and structural protective management rules." },
          { title: "Client Partnership", desc: "Long-term computational frameworks built around trust, precision, and performance." }
        ].map((pillar, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#ffffff' }}>
              {pillar.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#a3a3a3', lineHeight: '1.5', fontWeight: 300 }}>
              {pillar.desc}
            </p>
          </div>
        ))}
      </section>

      {/* 4. INTEGRATED CAPITAL SOLUTIONS GRID */}
      <section style={{ padding: '100px 40px', maxWidth: '1400px', margin: '0 auto', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '24px', marginBottom: '60px' }}>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d4af37', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '8px' }}>// Our Platform</div>
            <h2 style={{ fontSize: '36px', fontWeight: 300, tracking: '-0.02em', color: '#ffffff' }}>Integrated Capital Solutions</h2>
          </div>
          <p style={{ color: '#a3a3a3', fontSize: '14px', maxWidth: '400px', fontWeight: 300, lineHeight: '1.6' }}>
            A comprehensive execution interface designed to map opportunity parameters, mitigate execution anomalies, and secure absolute long-term target finality.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {[
            { tag: "01", title: "Investment Management", desc: "Active quantitative rules across complex processing pools with strict focus on variance adjustments." },
            { tag: "02", title: "Strategic Advisory", desc: "Structured architectural consultancy, restructuring assistance, and protocol integrations." },
            { tag: "03", title: "Capital Markets", desc: "Direct framework path connection to wholesale financial networks and liquidity execution arrays." },
            { tag: "04", title: "Research & Analytics", desc: "Proprietary processing analytics delivering clear pattern definition updates to active systems." }
          ].map((sol, i) => (
            <div key={i} style={{
              border: '1px solid rgba(255, 255, 255, 0.05)',
              backgroundColor: 'rgba(4, 9, 24, 0.6)',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '260px',
              boxSizing: 'border-box'
            }}>
              <div>
                <div style={{ fontFamily: 'monospace', fontSize: '10px', color: '#525252', marginBottom: '20px' }}>// {sol.tag}</div>
                <h4 style={{ fontSize: '18px', fontWeight: 400, marginBottom: '10px', color: '#ffffff' }}>{sol.title}</h4>
                <p style={{ fontSize: '12px', color: '#a3a3a3', lineHeight: '1.5', fontWeight: 300 }}>
                  {sol.desc}
                </p>
              </div>
              <span style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.5px', color: '#d4af37' }}>
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 5. GLOBAL INSTITUTIONAL FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        backgroundColor: '#010307',
        padding: '80px 40px 40px 40px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '3px', color: '#ffffff', marginBottom: '16px' }}>
              Crestmont <span style={{ color: '#d4af37', fontWeight: 300 }}>Capital</span>
            </div>
            <p style={{ color: '#525252', fontSize: '12px', lineHeight: '1.6', fontWeight: 300 }}>
              Systematic Processing Architecture.<br />
              Global Telemetry Perspective.<br />
              Enduring Operational Value.
            </p>
          </div>
          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px', fontSize: '11px' }}>Platform</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#a3a3a3', fontWeight: 300 }}>
              <div>Investment Management</div>
              <div>Strategic Advisory</div>
              <div>Capital Markets</div>
              <div>Research & Analytics</div>
            </div>
          </div>
          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px', fontSize: '11px' }}>Company</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '12px', color: '#a3a3a3', fontWeight: 300 }}>
              <div>Operational Philosophy</div>
              <div>System Governance</div>
              <div>Infrastructure Core</div>
            </div>
          </div>
          <div>
            <h5 style={{ color: '#ffffff', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px', fontSize: '11px' }}>Global Context</h5>
            <p style={{ color: '#a3a3a3', fontSize: '12px', margin: 0, fontWeight: 300 }}>info@crestcap.space</p>
            <p style={{ fontFamily: 'monospace', fontSize: '11px', color: '#525252', marginTop: '8px' }}>London // Singapore // Odisha</p>
          </div>
        </div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255, 255, 255, 0.03)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#525252',
          fontWeight: 300
        }}>
          <div>© 2026 Crestmont Capital Ltd. All rights reserved. Registered UK Company No. 17037425.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Disclosures</div>
          </div>
        </div>
      </footer>

    </div>
  );
}
