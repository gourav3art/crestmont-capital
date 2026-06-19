"use client";

import { useState, useEffect } from "react";

// ============================================================================
// SYSTEM IDENTIFIERS, QUANTITATIVE CONSTANTS & METRIC MATRICES
// ============================================================================

type ActivePanel =
  | "overview"
  | "topologies"
  | "attenuation"
  | "governance"
  | "compliance"
  | "ledger";

interface TelemetryRow {
  id: string;
  timeMark: string;
  subsystem: string;
  metricLabel: string;
  precisionWeight: number;
}

const CAPITAL_CHANNELS = [
  {
    zone: "LONDON // GLOBAL ENTERPRISE CORE",
    baseRatio: 0.35,
    densityMetric: 0.985,
    structuralCap: "0.04%",
  },
  {
    zone: "NEW_YORK // PRIMARY LIQUIDITY NODE",
    baseRatio: 0.3,
    densityMetric: 0.962,
    structuralCap: "0.05%",
  },
  {
    zone: "SINGAPORE // CROSS_BORDER VECTOR",
    baseRatio: 0.2,
    densityMetric: 0.914,
    structuralCap: "0.08%",
  },
  {
    zone: "TOKYO // LIQUIDITY RESILIENCE MATRIX",
    baseRatio: 0.15,
    densityMetric: 0.891,
    structuralCap: "0.12%",
  },
];

export default function Home() {
  // --- Core State Machine ---
  const [currentPanel, setCurrentPanel] = useState<ActivePanel>("overview");
  const [allocationParameter, setAllocationParameter] = useState<number>(78.4);
  const [varianceBoundary, setVarianceBoundary] = useState<number>(0.12);
  const [tailRiskZScore, setTailRiskZScore] = useState<number>(1.65);
  const [telemetryLogs, setTelemetryLogs] = useState<TelemetryRow[]>([]);
  const [signalSequence, setSignalSequence] = useState<number>(0);
  const [aggregateMetricsAUM, setAggregateMetricsAUM] = useState<number>(14286.08);
  const [systemUptimeContinuum, setSystemUptimeContinuum] = useState<number>(99.9982);
  const [isSyncingTopology, setIsSyncingTopology] = useState<boolean>(false);
  
  // --- Responsive UX State ---
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // --- Continuous Telemetry Operational Stream ---
  useEffect(() => {
    const vectors = [
      "CORE_LIQUIDITY // CITADEL_SECURITIES_INTEGRATION // VERIFIED_NODE",
      "RISK_ATTENUATION // STOCHASTIC_VARIANCE_INSULATION // PASSING",
      "ALLOCATION_MATRIX // CROSS_BORDER_CAPITAL_CONTINUUM_ACTIVE",
      "CLEARING_ENGINE // MULTI_ASSET_SETTLEMENT_ROUTING_SUCCESS",
      "DATA_INFRASTRUCTURE // ECONOMETRIC_TELEMETERING_SYNC_COMPLETE",
      "VALIDATION_NODE // ASYMMETRIC_EQUILIBRIUM_ENFORCED_HORIZON",
    ];

    const generateInitialMatrixLogs = (): TelemetryRow[] => {
      return Array.from({ length: 6 }).map((_, i) => {
        const timestamp = new Date(Date.now() - (6 - i) * 3000);
        return {
          id: Math.random().toString(36).substring(2, 9),
          timeMark: timestamp.toISOString().slice(11, 19),
          subsystem: vectors[i % vectors.length],
          metricLabel: "NOMINAL // CORE_ACTIVE",
          precisionWeight: parseFloat((Math.random() * 0.08 + 0.92).toFixed(4)),
        };
      });
    };

    setTelemetryLogs(generateInitialMatrixLogs());

    const runtimeInterval = setInterval(() => {
      setTelemetryLogs((prev) => {
        const timeMark = new Date().toISOString().slice(11, 19);
        const nextLog: TelemetryRow = {
          id: Math.random().toString(36).substring(2, 9),
          timeMark,
          subsystem: vectors[Math.floor(Math.random() * vectors.length)],
          metricLabel:
            Math.random() > 0.15
              ? "NOMINAL // CORE_ACTIVE"
              : "RE_INDEXING // STABILITY_HOLD",
          precisionWeight: parseFloat((Math.random() * 0.08 + 0.92).toFixed(4)),
        };
        return [...prev.slice(1), nextLog];
      });

      setAggregateMetricsAUM(
        (prev) => prev + parseFloat((Math.random() * 0.04 - 0.015).toFixed(2))
      );
      setSystemUptimeContinuum((prev) =>
        Math.min(
          100,
          Math.max(99.99, prev + (Math.random() * 0.00002 - 0.00001))
        )
      );
      setSignalSequence((s) => (s + 1) % 4);
    }, 3000);

    return () => clearInterval(runtimeInterval);
  }, []);

  const handleTopologyMatrixSync = () => {
    setIsSyncingTopology(true);
    setTimeout(() => {
      setIsSyncingTopology(false);
    }, 1200);
  };

  const panels: { id: ActivePanel; label: string }[] = [
    { id: "overview", label: "01 // Executive Summary" },
    { id: "topologies", label: "02 // Allocation Topologies" },
    { id: "attenuation", label: "03 // Risk Attenuation Matrix" },
    { id: "governance", label: "04 // Structural Governance" },
    { id: "compliance", label: "05 // Compliance Disclosures" },
    { id: "ledger", label: "06 // System Integrity Audit" },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#030508",
        color: "#f8fafc",
        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        WebkitFontSmoothing: "antialiased",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
        position: "relative",
        letterSpacing: "-0.01em",
      }}
    >
      {/* 1. CINEMATIC BACKGROUND COMPOSITION */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(13, 27, 42, 0.45) 0%, rgba(3, 5, 8, 1) 70%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* 2. GRAND INSTITUTIONAL MASTHEAD */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "rgba(3, 5, 8, 0.85)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
          padding: "20px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "26px",
              height: "26px",
              border: "1px solid #c9a054",
              background: "linear-gradient(135deg, rgba(201,160,84,0.1), transparent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
              color: "#c9a054",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            Crestmont <span style={{ color: "#c9a054", fontWeight: 300 }}>Capital</span>
          </div>
        </div>

        {/* Live Metrics Grid (Hidden/Stacked on ultra-small screens via clean inline rules) */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#f8fafc", fontWeight: 500 }}>
              ${aggregateMetricsAUM.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}M
            </span>
            <span style={{ fontSize: "8px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "3px" }}>
              Aggregate Asset Matrix
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
            <span style={{ fontFamily: "monospace", fontSize: "12px", color: "#10b981", fontWeight: 500 }}>
              {systemUptimeContinuum.toFixed(4)}%
            </span>
            <span style={{ fontSize: "8px", color: "#64748b", textTransform: "uppercase", letterSpacing: "1.5px", marginTop: "3px" }}>
              Operational Continuum
            </span>
          </div>

          {/* Mobile Architecture Trigger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "none",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "4px",
              color: "#ffffff",
              padding: "8px 12px",
              cursor: "pointer",
            }}
            className="mobile-trigger"
          >
            Menu
          </button>
        </div>
      </header>

      {/* MOBILE NAVIGATION DROPDOWN MATRIX */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: "73px",
            left: 0,
            width: "100%",
            backgroundColor: "rgba(3, 5, 8, 0.98)",
            backdropFilter: "blur(30px)",
            zIndex: 90,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 0",
          }}
        >
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => {
                setCurrentPanel(panel.id);
                setMobileMenuOpen(false);
              }}
              style={{
                width: "100%",
                padding: "16px 24px",
                background: currentPanel === panel.id ? "rgba(201, 160, 84, 0.05)" : "transparent",
                border: "none",
                color: currentPanel === panel.id ? "#c9a054" : "#94a3b8",
                textAlign: "left",
                fontSize: "12px",
                fontFamily: "monospace",
                cursor: "pointer",
              }}
            >
              {panel.label}
            </button>
          ))}
        </div>
      )}

      {/* 3. CONTROL INTEGRATION VIEWPORT CONTAINER */}
      <div style={{ display: "flex", minHeight: "100vh", paddingTop: "73px", boxSizing: "border-box" }}>
        
        {/* PREMIUM DESKTOP SIDEBAR NAVIGATION */}
        <nav
          style={{
            width: "300px",
            backgroundColor: "rgba(3, 5, 8, 0.4)",
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
            padding: "40px 24px",
            boxSizing: "border-box",
            position: "fixed",
            top: "73px",
            bottom: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          className="desktop-nav"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ fontFamily: "monospace", fontSize: "9px", color: "#475569", letterSpacing: "2px", marginBottom: "16px", paddingLeft: "12px" }}>
              // PLATFORM CONTROL NODES
            </div>
            {panels.map((panel) => (
              <button
                key={panel.id}
                onClick={() => setCurrentPanel(panel.id)}
                style={{
                  width: "100%",
                  background: currentPanel === panel.id ? "rgba(201, 160, 84, 0.04)" : "transparent",
                  borderLeft: currentPanel === panel.id ? "2px solid #c9a054" : "2px solid transparent",
                  borderTop: "none", borderRight: "none", borderBottom: "none",
                  color: currentPanel === panel.id ? "#ffffff" : "#64748b",
                  padding: "14px 16px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
              >
                {panel.label}
              </button>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.03)", paddingTop: "24px", paddingLeft: "12px" }}>
            <span style={{ fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "2px", display: "block", marginBottom: "6px", fontWeight: 600 }}>
              London Corporate Core
            </span>
            <span style={{ fontSize: "11px", color: "#475569", lineHeight: "1.6", display: "block", fontWeight: 400, fontFamily: "monospace" }}>
              128 City Road, London
              <br />
              EC1V 2NX, United Kingdom
            </span>
          </div>
        </nav>

        {/* CENTRAL VIEWPORT VIEW PANEL */}
        <main
          style={{
            flex: 1,
            boxSizing: "border-box",
            position: "relative",
            zIndex: 10,
          }}
          className="main-viewport"
        >
          {/* PANEL 1: EXECUTIVE OVERVIEW */}
          {currentPanel === "overview" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "48px", justifyContent: "space-between" }}>
                <div style={{ flex: "1 1 550px" }}>
                  <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "5px", marginBottom: "20px" }}>
                    // PRIVATE ASSET INSULATION MATRIX
                  </div>
                  <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 200, letterSpacing: "-0.02em", color: "#ffffff", margin: "0 0 28px 0", lineHeight: "1.15", textTransform: "uppercase" }}>
                    Systemic Capital <br />
                    <span style={{ fontWeight: 600, color: "#f1f5f9" }}>Preservation</span>
                  </h2>
                  <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.75", marginBottom: "36px", fontWeight: 300 }}>
                    Crestmont Capital operates as a closed-ended private capital management structure. The architecture coordinates deep, multi-asset allocation parameters designed to systematically safeguard sovereign asset bases, filter out micro-structural tracking errors, and execute liquidity distribution protocols across global networks with absolute finality.
                  </p>

                  <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", paddingTop: "32px" }}>
                    <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px", color: "#ffffff", fontFamily: "monospace" }}>
                      Operational Mandate Parameters
                    </h4>
                    <p style={{ color: "#64748b", fontSize: "13px", lineHeight: "1.7", fontWeight: 300, margin: 0 }}>
                      Every portfolio vector mapped inside this framework operates strictly under non-discretionary execution parameters. By anchoring direct data tunnels straight into high-volume electronic routing configurations—similar to structural networks maintained within Citadel Securities frameworks—the platform handles high-capacity allocations cleanly while mitigating external counterparty noise and market-maker fractional slippage.
                    </p>
                  </div>
                </div>

                {/* HIGH-END WIREFRAME ARTWORK */}
                <div style={{ flex: "1 1 380px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "360px" }}>
                  <div style={{ width: "340px", height: "340px", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "radial-gradient(circle, rgba(201, 160, 84, 0.03) 0%, transparent 70%)" }}>
                    <div style={{ width: "180px", display: "flex", flexDirection: "column", gap: "6px", opacity: 0.85 }}>
                      <div style={{ width: 0, height: 0, borderLeft: "90px solid transparent", borderRight: "90px solid transparent", borderBottom: "26px solid #c9a054", opacity: 0.25, marginBottom: "2px" }} />
                      <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.06)", border: "1px solid rgba(255, 255, 255, 0.02)" }} />
                      <div style={{ display: "flex", justifyContent: "space-between", padding: "0 8px", height: "100px" }}>
                        {[1, 2, 3, 4, 5].map((col) => (
                          <div key={col} style={{ width: "8px", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03), transparent)", borderLeft: "1px solid rgba(255, 255, 255, 0.02)", position: "relative" }}>
                            <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", backgroundColor: "rgba(201, 160, 84, 0.08)" }} />
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <div style={{ width: "100%", height: "6px", backgroundColor: "rgba(255, 255, 255, 0.05)" }} />
                        <div style={{ width: "106%", height: "8px", backgroundColor: "rgba(255, 255, 255, 0.02)", marginLeft: "-3%" }} />
                      </div>
                    </div>
                    {[0, 1, 2, 3].map((track) => (
                      <div key={track} style={{ position: "absolute", width: `${240 + track * 32}px`, height: `${240 + track * 32}px`, borderRadius: "50%", border: signalSequence === track ? "1px solid rgba(201, 160, 84, 0.15)" : "1px solid rgba(255,255,255,0.01)", transform: "rotateX(70deg) rotateY(10deg)", transition: "all 0.6s ease" }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PANEL 2: ALLOCATION TOPOLOGIES */}
          {currentPanel === "topologies" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "12px" }}>
                  // ALLOCATION_CORE // NETWORK_TOPOLOGY
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", margin: 0 }}>Sovereign Balance Matrices</h3>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.01)", border: "1px solid rgba(255, 255, 255, 0.03)", padding: "28px", borderRadius: "4px", marginBottom: "36px" }}>
                <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#ffffff", marginBottom: "20px", fontFamily: "monospace" }}>Macro Parameter Calibration Board</h4>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", marginBottom: "24px" }}>
                  <div>
                    <label style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: "11px", color: "#64748b", marginBottom: "10px" }}>
                      <span>System Allocation Focus</span>
                      <span style={{ color: "#c9a054" }}>{allocationParameter.toFixed(1)}%</span>
                    </label>
                    <input type="range" min="50" max="95" step="0.5" value={allocationParameter} onChange={(e) => setAllocationParameter(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "#c9a054", background: "rgba(255,255,255,0.05)", height: "3px" }} />
                  </div>
                  <div>
                    <label style={{ display: "flex", justifyContent: "space-between", fontFamily: "monospace", fontSize: "11px", color: "#64748b", marginBottom: "10px" }}>
                      <span>Integrated Boundary Coefficient</span>
                      <span style={{ color: "#c9a054" }}>{varianceBoundary.toFixed(2)}</span>
                    </label>
                    <input type="range" min="0.02" max="0.45" step="0.01" value={varianceBoundary} onChange={(e) => setVarianceBoundary(parseFloat(e.target.value))} style={{ width: "100%", accentColor: "#c9a054", background: "rgba(255,255,255,0.05)", height: "3px" }} />
                  </div>
                </div>
                <button onClick={handleTopologyMatrixSync} disabled={isSyncingTopology} style={{ backgroundColor: "rgba(201, 160, 84, 0.05)", border: "1px solid #c9a054", color: "#c9a054", padding: "10px 20px", fontSize: "11px", fontFamily: "monospace", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", cursor: "pointer", transition: "all 0.3s ease" }}>
                  {isSyncingTopology ? "Syncing Fields..." : "Execute Synchronization"}
                </button>
              </div>

              <div style={{ border: "1px solid rgba(255, 255, 255, 0.03)", borderRadius: "4px", overflowX: "auto" }}>
                <div style={{ minWidth: "700px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", backgroundColor: "rgba(255,255,255,0.01)", padding: "14px 20px", borderBottom: "1px solid rgba(255,255,255,0.04)", fontFamily: "monospace", fontSize: "10px", color: "#475569" }}>
                    <div>SOVEREIGN NETWORK VECTOR</div>
                    <div>WEIGHT</div>
                    <div>LIQUIDITY INDEX</div>
                    <div>STRUCTURAL DRIFT CAP</div>
                  </div>
                  {CAPITAL_CHANNELS.map((node, i) => {
                    const calculatedWeight = i === 0 ? allocationParameter / 100 : (1 - allocationParameter / 100) * (node.baseRatio / 0.65);
                    return (
                      <div key={i} style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", padding: "18px 20px", borderBottom: "1px solid rgba(255,255,255,0.02)", alignItems: "center", fontSize: "12px" }}>
                        <div style={{ color: "#ffffff", fontWeight: 500, fontFamily: "monospace" }}>{node.zone}</div>
                        <div style={{ fontFamily: "monospace", color: "#c9a054" }}>{(calculatedWeight * 100).toFixed(2)}%</div>
                        <div style={{ fontFamily: "monospace", color: "#94a3b8" }}>{(node.densityMetric - varianceBoundary * 0.04).toFixed(4)}</div>
                        <div style={{ fontFamily: "monospace", color: "#10b981", fontSize: "11px" }}>{node.structuralCap}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* PANEL 3: RISK ATTENUATION MATRIX */}
          {currentPanel === "attenuation" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "12px" }}>
                  // RISK_BOUNDS // SOVEREIGN_INSULATION
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", margin: 0 }}>Stochastic Mitigation Frameworks</h3>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
                <div style={{ border: "1px solid rgba(255,255,255,0.03)", background: "rgba(255,255,255,0.01)", padding: "28px", borderRadius: "4px" }}>
                  <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", marginBottom: "16px" }}>// MITIGATION_COEFFICIENT_ALPHA</div>
                  <h4 style={{ fontSize: "16px", fontWeight: 500, color: "#ffffff", marginBottom: "12px" }}>Non-Linear Noise Filtering</h4>
                  <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.65", fontWeight: 300, margin: 0 }}>
                    By processing exposure indices through complex structural distributions rather than standard deviation blocks, the core layout cleans macro-structural signals while stripping random trend mutations entirely.
                  </p>
                </div>
                <div style={{ border: "1px solid rgba(255,255,255,0.03)", background: "rgba(255,255,255,0.01)", padding: "28px", borderRadius: "4px" }}>
                  <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", marginBottom: "16px" }}>// MITIGATION_COEFFICIENT_BETA</div>
                  <h4 style={{ fontSize: "16px", fontWeight: 500, color: "#ffffff", marginBottom: "12px" }}>Asymmetric Protection</h4>
                  <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: "1.65", fontWeight: 300, margin: 0 }}>
                    Systemic configurations force capital distribution balances into rule-based pathways. This strict architectural protection neutralizes psychological heuristics and operational errors.
                  </p>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255, 255, 255, 0.03)", padding: "28px", borderRadius: "4px" }}>
                <h4 style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "2px", color: "#ffffff", marginBottom: "20px", fontFamily: "monospace" }}>Value-at-Risk (VaR) Metric Attenuation</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "24px" }}>
                  {[1.65, 2.33, 3.09].map((zValue) => (
                    <button key={zValue} onClick={() => setTailRiskZScore(zValue)} style={{ backgroundColor: tailRiskZScore === zValue ? "rgba(201,160,84,0.08)" : "transparent", border: tailRiskZScore === zValue ? "1px solid #c9a054" : "1px solid rgba(255,255,255,0.08)", color: tailRiskZScore === zValue ? "#ffffff" : "#64748b", padding: "10px 16px", fontSize: "11px", fontFamily: "monospace", cursor: "pointer" }}>
                      Z = {zValue}
                    </button>
                  ))}
                </div>
                <p style={{ color: "#475569", fontSize: "12px", lineHeight: "1.6", margin: 0, fontWeight: 300 }}>
                  Active allocation pathways utilize variance tracking limits anchored to a Critical Z-score multiplier of <span style={{ color: "#c9a054", fontFamily: "monospace" }}>{tailRiskZScore}</span>. This parameter enforces systemic risk mitigation metrics automatically across all active paths.
                </p>
              </div>
            </div>
          )}

          {/* PANEL 4: STRUCTURAL GOVERNANCE */}
          {currentPanel === "governance" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "12px" }}>
                  // GOVERNANCE // CAPITAL_PROTECTION
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", margin: 0 }}>Systemic Risk Policy</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.75", fontWeight: 300 }}>
                <p>Institutional oversight at Crestmont Capital is governed through automated structural boundaries. The system utilizes deterministic logic gates that enforce allocation rules across every sovereign asset node, rendering the model entirely isolated from emotional drift or discretionary intervention anomalies.</p>
                <p>Balance controls use a multi-tiered validation stack. Under this layout, any shifts in market covariance models trigger automated defensive constraints, isolating balance sheet assets into uncorrelated cash buffers until system conditions return to long-term parametric norms.</p>
              </div>
            </div>
          )}

          {/* PANEL 5: REGULATORY DISCLOSURES */}
          {currentPanel === "compliance" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "12px" }}>
                  // LEGAL_LEDGER // COMPLIANCE_MANDATE
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", margin: 0 }}>Jurisdictional Ledger</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.75", fontWeight: 300 }}>
                <p>Crestmont Capital Ltd operates as a corporate limited infrastructure entity established within the jurisdiction of England and Wales (Entity Registration Certificate No. 17037425). The platform operations, systematic structures, and risk distribution frameworks detailed in this interface are engineered exclusively for the optimization of proprietary treasury balances and institutional capital safety parameters.</p>
                <p>This dashboard environment functions entirely as a private proprietary system and does not configure public advisory conduits or retail financial broker interfaces. All layout configurations and data visualizations remain the exclusive intellectual property of Crestmont Capital Ltd.</p>
              </div>
            </div>
          )}

          {/* PANEL 6: SYSTEM INTEGRITY AUDIT */}
          {currentPanel === "ledger" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div style={{ marginBottom: "32px" }}>
                <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#c9a054", textTransform: "uppercase", letterSpacing: "4px", marginBottom: "12px" }}>
                  // AUDIT_TRACE // COMPILER_VALIDATION
                </div>
                <h3 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", margin: 0 }}>Bare-Metal Network Diagnostics</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", color: "#94a3b8", fontSize: "14px", lineHeight: "1.75", fontWeight: 300 }}>
                <p>Sovereign network allocations align continuously with internal validation auditing logs. System benchmarks are generated natively across bare-metal server matrices to guarantee mathematical structural stability during high-intensity global cross-border allocation cycles.</p>
                <div style={{ border: "1px solid rgba(255,255,255,0.03)", padding: "20px", backgroundColor: "rgba(0,0,0,0.3)", borderRadius: "4px", fontFamily: "monospace", fontSize: "11px", color: "#4b5563", lineHeight: "1.6" }}>
                  <div>&gt; NETWORK_INTEGRITY_CHECK: PASS</div>
                  <div>&gt; SUBSYSTEM_ISOLATION_INDEX: 1.0000 (ZERO_LEAK)</div>
                  <div>&gt; REGIONAL_NODE_LATENCY_MAX: 0.08ms</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* FIXED METRIC RUNTIME TELEMETRY ENGINE */}
      <div className="telemetry-engine">
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: "8px", marginBottom: "10px", color: "#ffffff", fontSize: "9px", fontFamily: "monospace", letterSpacing: "1px", display: "flex", justifyContent: "space-between" }}>
          <span>// REAL-TIME SYSTEMIC TELEMETRY ENGINE</span>
          <span style={{ color: "#c9a054" }}>ACTIVE_FEED</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {telemetryLogs.map((log) => (
            <div key={log.id} style={{ display: "flex", justifyContent: "space-between", whiteSpace: "nowrap", overflow: "hidden", fontFamily: "monospace", fontSize: "9px" }}>
              <span style={{ color: "#475569" }}>[{log.timeMark}]</span>
              <span style={{ color: "#94a3b8", paddingLeft: "8px", flex: 1, textOverflow: "ellipsis", overflow: "hidden" }}>{log.subsystem}</span>
              <span style={{ color: log.metricLabel.includes("NOMINAL") ? "#10b981" : "#c9a054", paddingLeft: "12px" }}>{log.metricLabel}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SOLID INSTITUTIONAL CLOSURE FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255, 255, 255, 0.03)", backgroundColor: "#020305", padding: "80px 24px 40px 24px", position: "relative", zIndex: 30 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "48px", marginBottom: "64px" }}>
          <div>
            <div style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "4px", color: "#ffffff", marginBottom: "20px" }}>
              Crestmont <span style={{ color: "#c9a054", fontWeight: 300 }}>Capital</span>
            </div>
            <p style={{ color: "#475569", fontSize: "11px", lineHeight: "1.7", fontFamily: "monospace", margin: 0 }}>
              Private Proprietary Capital Allocation.<br /> Continuous Stochastic Execution Matrix.<br /> Hardware Independent Sovereignty.
            </p>
          </div>
          <div>
            <h5 style={{ color: "#ffffff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "18px", fontSize: "10px", fontFamily: "monospace" }}>Core Mandates</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px", color: "#64748b", fontWeight: 300 }}>
              <div>Risk Attenuation Limits</div>
              <div>Balance Structure Consistency</div>
              <div>Sovereign Configuration Validation</div>
            </div>
          </div>
          <div>
            <h5 style={{ color: "#ffffff", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: "18px", fontSize: "10px", fontFamily: "monospace" }}>Infrastructure Network</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "12px", color: "#64748b", fontWeight: 300 }}>
              <div>London // Corporate Seat</div>
              <div>New York // Primary Liquidity</div>
              <div>Singapore // Cross-Border Vector</div>
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "1200px", margin: "0 auto", paddingTop: "32px", borderTop: "1px solid rgba(255, 255, 255, 0.02)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", fontSize: "10px", color: "#334155", gap: "16px", fontFamily: "monospace" }}>
          <div>© 2026 Crestmont Capital Ltd. Registration No. 17037425. All quantitative systemic protocols enforced.</div>
          <div style={{ display: "flex", gap: "24px" }}>
            <div>System Mandate</div>
            <div>Infrastructure Terms</div>
          </div>
        </div>
      </footer>

      {/* INJECTED GLOBAL RESPONSIVE RULES */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Desktop Default Framework */
        .main-viewport {
          padding: 48px 48px 48px 348px;
          max-width: 1500px;
        }
        .telemetry-engine {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 400px;
          backgroundColor: rgba(3, 5, 8, 0.9);
          backdropFilter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.03);
          padding: 16px;
          zIndex: 100;
          boxSizing: border-box;
          border-radius: 4px;
        }

        /* Responsive Breakpoint Matrix */
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .mobile-trigger { display: block !important; }
          .main-viewport { padding: 40px 24px 240px 24px !important; }
          .telemetry-engine { 
            position: static !important; 
            width: calc(100% - 48px) !important; 
            margin: 0 auto 40px auto !important;
            background: rgba(255,255,255,0.01) !important;
          }
        }
      `}</style>
    </div>
  );
}
