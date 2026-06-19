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
  const [aggregateMetricsAUM, setAggregateMetricsAUM] =
    useState<number>(14280.45);
  const [systemUptimeContinuum, setSystemUptimeContinuum] =
    useState<number>(99.9984);
  const [isSyncingTopology, setIsSyncingTopology] = useState<boolean>(false);

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
      return Array.from({ length: 8 }).map((_, i) => {
        const timestamp = new Date(Date.now() - (8 - i) * 3000);
        return {
          id: Math.random().toString(36).substr(2, 9),
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
          id: Math.random().toString(36).substr(2, 9),
          timeMark,
          subsystem: vectors[Math.floor(Math.random() * vectors.length)],
          metricLabel:
            Math.random() > 0.12
              ? "NOMINAL // CORE_ACTIVE"
              : "RE_INDEXING // STABILITY_HOLD",
          precisionWeight: parseFloat((Math.random() * 0.08 + 0.92).toFixed(4)),
        };
        return [...prev.slice(1), nextLog];
      });

      setAggregateMetricsAUM(
        (prev) => prev + parseFloat((Math.random() * 0.42 - 0.18).toFixed(2))
      );
      setSystemUptimeContinuum((prev) =>
        Math.min(
          100,
          Math.max(99.99, prev + (Math.random() * 0.0001 - 0.00005))
        )
      );
      setSignalSequence((s) => (s + 1) % 4);
    }, 2500);

    return () => clearInterval(runtimeInterval);
  }, []);

  const handleTopologyMatrixSync = () => {
    setIsSyncingTopology(true);
    setTimeout(() => {
      setIsSyncingTopology(false);
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#020305",
        color: "#ffffff",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        WebkitFontSmoothing: "antialiased",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overflowX: "hidden",
        position: "relative",
        letterSpacing: "0.01em",
      }}
    >
      {/* 1. CINEMATIC GRADIENT MAPPING BACKGROUND */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 85% 25%, #050c1c 0%, #020305 80%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* SOLID COORDINATE GRID LINES */}
      <div
        style={{
          position: "absolute",
          top: "140px",
          left: 0,
          width: "100%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.02), transparent)",
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "320px",
          top: 0,
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.02), transparent)",
          zIndex: 2,
        }}
      />

      {/* 2. GRAND INSTITUTIONAL NAVIGATION MASTHEAD */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "rgba(2, 3, 5, 0.96)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
          padding: "24px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "24px",
              height: "24px",
              border: "1px solid #d4af37",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              color: "#d4af37",
              fontWeight: "bold",
            }}
          >
            C
          </div>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            Crestmont{" "}
            <span style={{ color: "#d4af37", fontWeight: 300 }}>Capital</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#ffffff",
              }}
            >
              ${aggregateMetricsAUM.toFixed(2)}M
            </span>
            <span
              style={{
                fontSize: "8px",
                color: "#4b5563",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              Aggregate Asset Matrix
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "#10b981",
              }}
            >
              {systemUptimeContinuum.toFixed(4)}%
            </span>
            <span
              style={{
                fontSize: "8px",
                color: "#4b5563",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginTop: "2px",
              }}
            >
              Operational Continuum
            </span>
          </div>
        </div>
      </header>

      {/* 3. CONTROL RUNTIME CONTAINER FRAMEWORK */}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          paddingTop: "86px",
          boxSizing: "border-box",
        }}
      >
        {/* EXECUTIVE CONTROL PANEL SIDEBAR */}
        <nav
          style={{
            width: "320px",
            backgroundColor: "rgba(2, 3, 5, 0.6)",
            borderRight: "1px solid rgba(255, 255, 255, 0.03)",
            padding: "48px 30px",
            boxSizing: "border-box",
            position: "fixed",
            top: "86px",
            bottom: 0,
            zIndex: 40,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
                color: "#475569",
                letterSpacing: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              // PLATFORM CONTROL NODES
            </div>
            {[
              { id: "overview", label: "01 // Executive Summary" },
              { id: "topologies", label: "02 // Allocation Topologies" },
              { id: "attenuation", label: "03 // Risk Attenuation Matrix" },
              { id: "governance", label: "04 // Structural Governance" },
              { id: "compliance", label: "05 // Compliance Disclosures" },
              { id: "ledger", label: "06 // System Integrity Audit" },
            ].map((panel) => (
              <button
                key={panel.id}
                onClick={() => setCurrentPanel(panel.id as ActivePanel)}
                style={{
                  width: "100%",
                  background:
                    currentPanel === panel.id
                      ? "rgba(214, 175, 55, 0.04)"
                      : "transparent",
                  border:
                    currentPanel === panel.id
                      ? "1px solid rgba(214, 175, 87, 0.15)"
                      : "1px solid transparent",
                  color: currentPanel === panel.id ? "#ffffff" : "#64748b",
                  padding: "14px 18px",
                  fontSize: "11px",
                  fontWeight: currentPanel === panel.id ? 600 : 400,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                {panel.label}
              </button>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.03)",
              paddingTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                color: "#d4af37",
                textTransform: "uppercase",
                letterSpacing: "2px",
                display: "block",
                marginBottom: "4px",
              }}
            >
              London Corporate Core
            </span>
            <span
              style={{
                fontSize: "11px",
                color: "#475569",
                lineHeight: "1.5",
                display: "block",
                fontWeight: 300,
              }}
            >
              128 City Road, London
              <br />
              EC1V 2NX, United Kingdom
            </span>
          </div>
        </nav>

        {/* WORKSPACE CENTRAL VIEWPORT VIEW PANEL */}
        <main
          style={{
            flex: 1,
            padding: "60px 80px 140px 380px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* PANEL 1: EXECUTIVE OVERVIEW */}
          {currentPanel === "overview" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div
                style={{
                  maxWidth: "1400px",
                  margin: "0 auto",
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "80px",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ flex: "1 1 650px" }}>
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: "#d4af37",
                      textTransform: "uppercase",
                      letterSpacing: "5px",
                      marginBottom: "24px",
                    }}
                  >
                    // PRIVATE ASSET INSULATION MATRIX
                  </div>
                  <h2
                    style={{
                      fontSize: "64px",
                      fontWeight: 100,
                      letterSpacing: "-0.03em",
                      color: "#ffffff",
                      margin: "0 0 32px 0",
                      lineHeight: "1.1",
                      textTransform: "uppercase",
                    }}
                  >
                    Systemic Capital <br />
                    <span style={{ fontWeight: 600, color: "#f3f4f6" }}>
                      Preservation
                    </span>
                  </h2>
                  <p
                    style={{
                      color: "#94a3b8",
                      fontSize: "17px",
                      lineHeight: "1.8",
                      marginBottom: "48px",
                      fontWeight: 300,
                    }}
                  >
                    Crestmont Capital operates as a closed-ended private capital
                    management structure. The architecture coordinates deep,
                    multi-asset allocation parameters designed to systematically
                    safeguard sovereign asset bases, filter out micro-structural
                    tracking errors, and execute liquidity distribution
                    protocols across global networks with absolute finality.
                  </p>

                  <div
                    style={{
                      borderTop: "1px solid rgba(255,255,255,0.04)",
                      paddingTop: "40px",
                      marginTop: "40px",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "2px",
                        marginBottom: "16px",
                        color: "#ffffff",
                      }}
                    >
                      Operational Mandate Parameters
                    </h4>
                    <p
                      style={{
                        color: "#64748b",
                        fontSize: "14px",
                        lineHeight: "1.7",
                        fontWeight: 300,
                        margin: 0,
                      }}
                    >
                      Every portfolio vector mapped inside this framework
                      operates strictly under non-discretionary execution
                      parameters. By anchoring direct data tunnels straight into
                      high-volume electronic routing configurations—similar to
                      structural networks maintained within Citadel Securities
                      frameworks—the platform handles high-capacity allocations
                      cleanly while mitigating external counterparty noise and
                      market-maker fractional slippage.
                    </p>
                  </div>
                </div>

                {/* GRAND WIREFRAME ARCHITECTURAL MONOLITH */}
                <div
                  style={{
                    flex: "1 1 450px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "440px",
                  }}
                >
                  <div
                    style={{
                      width: "420px",
                      height: "420px",
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background:
                        "radial-gradient(circle, rgba(7, 14, 28, 0.4) 0%, transparent 75%)",
                      border: "1px solid rgba(255, 255, 255, 0.01)",
                    }}
                  >
                    <div
                      style={{
                        width: "220px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        opacity: 0.85,
                      }}
                    >
                      {/* Triangular Roof Pediment */}
                      <div
                        style={{
                          width: 0,
                          height: 0,
                          borderLeft: "110px solid transparent",
                          borderRight: "110px solid transparent",
                          borderBottom: "32px solid #d4af37",
                          opacity: 0.35,
                          marginBottom: "2px",
                        }}
                      />

                      {/* Beam Plate Architrave */}
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.03)",
                        }}
                      />

                      {/* Linear Column Matrices */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 10px",
                          height: "130px",
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((col) => (
                          <div
                            key={col}
                            style={{
                              width: "10px",
                              height: "100%",
                              background:
                                "linear-gradient(90deg, rgba(255,255,255,0.01), rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
                              borderLeft: "1px solid rgba(255, 255, 255, 0.03)",
                              borderRight:
                                "1px solid rgba(255, 255, 255, 0.03)",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                left: "50%",
                                top: 0,
                                bottom: 0,
                                width: "1px",
                                backgroundColor: "rgba(214, 175, 87, 0.1)",
                              }}
                            />
                          </div>
                        ))}
                      </div>

                      {/* Stylobate Base Steps Foundation */}
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                          marginTop: "2px",
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "8px",
                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                            border: "1px solid rgba(255, 255, 255, 0.02)",
                          }}
                        />
                        <div
                          style={{
                            width: "106%",
                            height: "10px",
                            backgroundColor: "rgba(255, 255, 255, 0.03)",
                            border: "1px solid rgba(255, 255, 255, 0.01)",
                            marginLeft: "-3%",
                          }}
                        />
                      </div>
                    </div>

                    {/* Surrounding Dynamic Horizon Boundary Tracks */}
                    {[0, 1, 2, 3].map((track) => (
                      <div
                        key={track}
                        style={{
                          position: "absolute",
                          width: `${300 + track * 36}px`,
                          height: `${300 + track * 36}px`,
                          borderRadius: "50%",
                          border:
                            signalSequence === track
                              ? "1px solid rgba(214, 175, 87, 0.12)"
                              : "1px solid transparent",
                          transform: "rotateX(72deg) rotateY(12deg)",
                          transition: "all 0.8s ease",
                          pointerEvents: "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* PANEL 2: ALLOCATION TOPOLOGIES */}
          {currentPanel === "topologies" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    marginBottom: "12px",
                  }}
                >
                  // ALLOCATION_CORE // NETWORK_TOPOLOGY
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Sovereign Balance Matrices
                </h3>
              </div>

              {/* LIVE SIMULATOR MANIFOLD CONTROLS */}
              <div
                style={{
                  backgroundColor: "rgba(5, 10, 24, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.03)",
                  padding: "40px",
                  borderRadius: "2px",
                  marginBottom: "48px",
                }}
              >
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Macro Parameter Calibration Board
                </h4>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "40px",
                    marginBottom: "32px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "monospace",
                        fontSize: "11px",
                        color: "#64748b",
                        marginBottom: "12px",
                      }}
                    >
                      <span>System Allocation Focus</span>
                      <span style={{ color: "#d4af37" }}>
                        {allocationParameter.toFixed(1)}%
                      </span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="95"
                      step="0.5"
                      value={allocationParameter}
                      onChange={(e) =>
                        setAllocationParameter(parseFloat(e.target.value))
                      }
                      style={{
                        width: "100%",
                        accentColor: "#d4af37",
                        background: "#1e293b",
                        height: "4px",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontFamily: "monospace",
                        fontSize: "11px",
                        color: "#64748b",
                        marginBottom: "12px",
                      }}
                    >
                      <span>Integrated Boundary Coefficient ($\sigma$)</span>
                      <span style={{ color: "#d4af37" }}>
                        {varianceBoundary.toFixed(2)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0.02"
                      max="0.45"
                      step="0.01"
                      value={varianceBoundary}
                      onChange={(e) =>
                        setVarianceBoundary(parseFloat(e.target.value))
                      }
                      style={{
                        width: "100%",
                        accentColor: "#d4af37",
                        background: "#1e293b",
                        height: "4px",
                        border: "none",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                <button
                  onClick={handleTopologyMatrixSync}
                  disabled={isSyncingTopology}
                  style={{
                    backgroundColor: "rgba(214, 175, 55, 0.05)",
                    border: "1px solid #d4af37",
                    color: "#d4af37",
                    padding: "12px 24px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    cursor: isSyncingTopology ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isSyncingTopology
                    ? "Rebalancing Topology Fields..."
                    : "Execute Model Synchronization"}
                </button>
              </div>

              {/* TOPOLOGY BALANCING GRID SYSTEM */}
              <div style={{ border: "1px solid rgba(255, 255, 255, 0.03)" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    backgroundColor: "#020409",
                    padding: "16px 24px",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#475569",
                    letterSpacing: "1px",
                  }}
                >
                  <div>SOVEREIGN NETWORK VECTOR</div>
                  <div>ALLOCATION WEIGHT</div>
                  <div>LIQUIDITY INDEX</div>
                  <div>STRUCTURAL DRIFT CAP</div>
                </div>
                {CAPITAL_CHANNELS.map((node, i) => {
                  const calculatedWeight =
                    i === 0
                      ? allocationParameter / 100
                      : (1 - allocationParameter / 100) *
                        (node.baseRatio / (1 - CAPITAL_CHANNELS[0].baseRatio));

                  return (
                    <div
                      key={i}
                      style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr 1fr 1fr",
                        padding: "24px",
                        borderBottom: "1px solid rgba(255,255,255,0.02)",
                        alignItems: "center",
                        fontSize: "13px",
                        fontWeight: 300,
                      }}
                    >
                      <div style={{ color: "#ffffff", fontWeight: 500 }}>
                        {node.zone}
                      </div>
                      <div
                        style={{ fontFamily: "monospace", color: "#d4af37" }}
                      >
                        {(calculatedWeight * 100).toFixed(2)}%
                      </div>
                      <div
                        style={{ fontFamily: "monospace", color: "#94a3b8" }}
                      >
                        {(node.densityMetric - varianceBoundary * 0.04).toFixed(
                          4
                        )}
                      </div>
                      <div
                        style={{
                          fontFamily: "monospace",
                          fontSize: "11px",
                          color: "#10b981",
                        }}
                      >
                        {node.structuralCap}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PANEL 3: RISK ATTENUATION MATRIX */}
          {currentPanel === "attenuation" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    marginBottom: "12px",
                  }}
                >
                  // RISK_BOUNDS // SOVEREIGN_INSULATION
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Stochastic Mitigation Frameworks
                </h3>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
                  gap: "32px",
                  marginBottom: "56px",
                }}
              >
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.03)",
                    backgroundColor: "rgba(4,9,20,0.2)",
                    padding: "40px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: "#d4af37",
                      marginBottom: "20px",
                    }}
                  >
                    // MITIGATION_COEFFICIENT_ALPHA
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#ffffff",
                      marginBottom: "14px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Non-Linear Noise Filtering
                  </h4>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#94a3b8",
                      lineHeight: "1.7",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    By processing exposure indices through complex structural
                    distributions rather than standard deviation blocks, the
                    core layout cleans macro-structural signals while stripping
                    random trend mutations entirely.
                  </p>
                </div>

                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.03)",
                    backgroundColor: "rgba(4,9,20,0.2)",
                    padding: "40px",
                    boxSizing: "border-box",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "10px",
                      color: "#d4af37",
                      marginBottom: "20px",
                    }}
                  >
                    // MITIGATION_COEFFICIENT_BETA
                  </div>
                  <h4
                    style={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#ffffff",
                      marginBottom: "14px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Asymmetric Downside Variance Protection
                  </h4>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#94a3b8",
                      lineHeight: "1.7",
                      fontWeight: 300,
                      margin: 0,
                    }}
                  >
                    Systemic configurations force capital distribution balances
                    into clear, rule-based pathways. This strict architectural
                    protection neutralizes psychological heuristics and
                    operational errors during volatile allocation changes.
                  </p>
                </div>
              </div>

              {/* INTEGRATED RISK MODEL REGULATION BOARD */}
              <div
                style={{
                  backgroundColor: "#020409",
                  border: "1px solid rgba(255,255,255,0.03)",
                  padding: "40px",
                }}
              >
                <h4
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    color: "#ffffff",
                    marginBottom: "24px",
                  }}
                >
                  Value-at-Risk ($VaR$) Metric Attenuation Bounds
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    marginBottom: "32px",
                  }}
                >
                  {[
                    {
                      title: "95% Confidence Index ($Z_c = 1.65$)",
                      zValue: 1.65,
                    },
                    {
                      title: "99% Confidence Index ($Z_c = 2.33$)",
                      zValue: 2.33,
                    },
                    {
                      title:
                        "99.9% Sovereign Protection Boundary ($Z_c = 3.09$)",
                      zValue: 3.09,
                    },
                  ].map((btn) => (
                    <button
                      key={btn.zValue}
                      onClick={() => setTailRiskZScore(btn.zValue)}
                      style={{
                        backgroundColor:
                          tailRiskZScore === btn.zValue
                            ? "rgba(214,175,55,0.08)"
                            : "transparent",
                        border:
                          tailRiskZScore === btn.zValue
                            ? "1px solid #d4af37"
                            : "1px solid rgba(255,255,255,0.08)",
                        color:
                          tailRiskZScore === btn.zValue ? "#ffffff" : "#64748b",
                        padding: "12px 20px",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {btn.title}
                    </button>
                  ))}
                </div>
                <p
                  style={{
                    color: "#475569",
                    fontSize: "12px",
                    lineHeight: "1.6",
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  Active allocation pathways utilize variance tracking limits
                  anchored to a Critical $Z$-score multiplier of{" "}
                  <span style={{ color: "#d4af37", fontFamily: "monospace" }}>
                    {tailRiskZScore}
                  </span>
                  . This parameter enforces systemic risk mitigation metrics
                  automatically across all active paths.
                </p>
              </div>
            </div>
          )}

          {/* PANEL 4: STRUCTURAL GOVERNANCE */}
          {currentPanel === "governance" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    marginBottom: "12px",
                  }}
                >
                  // GOVERNANCE // CAPITAL_PROTECTION
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Systemic Risk Policy & Institutional Control
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 300,
                }}
              >
                <p>
                  Institutional oversight at Crestmont Capital is governed
                  through automated structural boundaries. The system utilizes
                  deterministic logic gates that enforce allocation rules across
                  every sovereign asset node, rendering the model entirely
                  isolated from emotional drift, portfolio execution fatigue, or
                  discretionary intervention anomalies.
                </p>
                <p>
                  Balance controls use a multi-tiered validation stack. Under
                  this layout, any shifts in market covariance models trigger
                  automated defensive constraints, isolating balance sheet
                  assets into uncorrelated cash buffers until system conditions
                  return to long-term parametric norms.
                </p>
              </div>
            </div>
          )}

          {/* PANEL 5: REGULATORY DISCLOSURES */}
          {currentPanel === "compliance" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    marginBottom: "12px",
                  }}
                >
                  // LEGAL_LEDGER // COMPLIANCE_MANDATE
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Jurisdictional Ledger & Structural Parameters
                </h3>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 300,
                }}
              >
                <p>
                  Crestmont Capital Ltd operates as a corporate limited
                  infrastructure entity established within the jurisdiction of
                  England and Wales (Entity Registration Certificate No.
                  17037425). The platform operations, systematic structures, and
                  risk distribution frameworks detailed in this interface are
                  engineered exclusively for the optimization of proprietary
                  treasury balances and institutional capital safety parameters.
                </p>
                <p>
                  This dashboard environment functions entirely as a private
                  proprietary system and does not configure public advisory
                  conduits or retail financial broker interfaces. Access
                  permissions to clearing structures and validation metrics are
                  restricted under strict internal corporate guidelines. All
                  layout configurations and data visualizations remain the
                  exclusive intellectual property of Crestmont Capital Ltd.
                </p>
              </div>
            </div>
          )}

          {/* PANEL 6: SYSTEM INTEGRITY AUDIT */}
          {currentPanel === "ledger" && (
            <div style={{ transition: "all 0.4s ease" }}>
              <div style={{ marginBottom: "40px" }}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    letterSpacing: "4px",
                    marginBottom: "12px",
                  }}
                >
                  // AUDIT_TRACE // COMPILER_VALIDATION
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Bare-Metal Network Diagnostics
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  color: "#94a3b8",
                  fontSize: "14px",
                  lineHeight: "1.8",
                  fontWeight: 300,
                }}
              >
                <p>
                  Sovereign network allocations and transaction routing
                  methodologies align continuously with internal validation
                  auditing logs. System benchmarks are generated natively across
                  bare-metal server matrices to guarantee mathematical
                  structural stability during high-intensity global cross-border
                  allocation cycles, preventing processing degradation across
                  regional nodes.
                </p>
                <div
                  style={{
                    border: "1px solid rgba(255,255,255,0.03)",
                    padding: "24px",
                    backgroundColor: "#020409",
                    fontFamily: "monospace",
                    fontSize: "11px",
                    color: "#4b5563",
                  }}
                >
                  <div>&gt; NETWORK_INTEGRITY_CHECK: PASS</div>
                  <div>&gt; SUBSYSTEM_ISOLATION_INDEX: 1.0000 (ZERO_LEAK)</div>
                  <div>&gt; REGIONAL_NODE_LATENCY_MAX: 0.08ms</div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* FIXED METRIC RUNTIME LOG TERMINAL BLOCK */}
      <div
        style={{
          position: "fixed",
          bottom: "32px",
          right: "40px",
          width: "440px",
          backgroundColor: "rgba(2, 3, 5, 0.95)",
          border: "1px solid rgba(255, 25, 55, 0.04)",
          padding: "20px",
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(214, 175, 87, 0.55)",
          zIndex: 100,
          backdropFilter: "blur(16px)",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.04)",
            paddingBottom: "8px",
            marginBottom: "12px",
            color: "#ffffff",
            fontSize: "9px",
            letterSpacing: "1px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>// REAL-TIME SYSTEMIC TELEMETRY ENGINE</span>
          <span style={{ color: "#d4af37" }}>ACTIVE_FEED</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {telemetryLogs.map((log) => (
            <div
              key={log.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              <span style={{ color: "#475569" }}>[{log.timeMark}]</span>
              <span
                style={{
                  color: "#94a3b8",
                  paddingLeft: "8px",
                  flex: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {log.subsystem}
              </span>
              <span
                style={{
                  color: log.metricLabel.includes("NOMINAL")
                    ? "#10b981"
                    : "#d4af37",
                  paddingLeft: "12px",
                }}
              >
                {log.metricLabel}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 4. SOLID INSTITUTIONAL CLOSURE FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          backgroundColor: "#010203",
          padding: "140px 80px 60px 80px",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 30,
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "64px",
            marginBottom: "120px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "5px",
                color: "#ffffff",
                marginBottom: "28px",
              }}
            >
              Crestmont{" "}
              <span style={{ color: "#d4af37", fontWeight: 300 }}>Capital</span>
            </div>
            <p
              style={{
                color: "#27272a",
                fontSize: "12px",
                lineHeight: "1.8",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Private Proprietary Capital Allocation.
              <br />
              Continuous Stochastic Execution Matrix.
              <br />
              Hardware Independent Architecture Sovereignty.
            </p>
          </div>
          <div>
            <h5
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "28px",
                fontSize: "11px",
              }}
            >
              Core Mandates
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "12px",
                color: "#94a3b8",
                fontWeight: 300,
              }}
            >
              <div>Risk Attenuation Limits</div>
              <div>Balance Structure Consistency</div>
              <div>Sovereign Configuration Validation</div>
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "28px",
                fontSize: "11px",
              }}
            >
              Global Infrastructure Network
            </h5>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                fontSize: "12px",
                color: "#94a3b8",
                fontWeight: 300,
              }}
            >
              <div>London // Corporate Seat</div>
              <div>New York // Core Infrastructure Node</div>
              <div>Singapore // Core Infrastructure Node</div>
              <div>Tokyo // Core Infrastructure Node</div>
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "28px",
                fontSize: "11px",
              }}
            >
              Registered Seat
            </h5>
            <p
              style={{
                color: "#94a3b8",
                fontSize: "13px",
                lineHeight: "1.8",
                fontWeight: 300,
                margin: 0,
              }}
            >
              Crestmont Capital Ltd.
              <br />
              128 City Road, London
              <br />
              EC1V 2NX, United Kingdom
              <br />
              <span
                style={{
                  color: "#3f3f46",
                  fontFamily: "monospace",
                  fontSize: "11px",
                  display: "block",
                  marginTop: "16px",
                  letterSpacing: "0.5px",
                }}
              >
                info@crestcap.space
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            maxWidth: "1600px",
            margin: "0 auto",
            paddingTop: "44px",
            borderTop: "1px solid rgba(255, 255, 255, 0.03)",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            fontSize: "11px",
            color: "#27272a",
            fontWeight: 300,
            gap: "20px",
          }}
        >
          <div>
            © 2026 Crestmont Capital Ltd. Incorporated in England & Wales.
            Company Registration No. 17037425. All quantitative systemic
            protocols and liquidity protection parameters enforced.
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            <div>System Integrity Mandate</div>
            <div>Terms of Infrastructure Access</div>
            <div>Regulatory Ledger Disclosures</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
