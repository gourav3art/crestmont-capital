"use client";

import { useState, useEffect } from "react";

// ============================================================================
// SYSTEM IDENTIFIERS & CONFIGURATION ARRAYS
// ============================================================================

type ActivePanel = "overview" | "topologies" | "attenuation" | "disclosures";

interface TelemetryRow {
  id: string;
  timestamp: string;
  vector: string;
  systemState: string;
  coefficient: number;
}

const INITIAL_NODES = [
  {
    region: "LONDON // GLOBAL CORE",
    alphaWeight: 0.35,
    liquidityIndex: 0.98,
    state: "ACTIVE",
  },
  {
    region: "NEW YORK // HUB NODE",
    alphaWeight: 0.3,
    liquidityIndex: 0.96,
    state: "ACTIVE",
  },
  {
    region: "SINGAPORE // ACCELERATION NODE",
    alphaWeight: 0.2,
    liquidityIndex: 0.92,
    state: "ACTIVE",
  },
  {
    region: "TOKYO // RESILIENCE VECTOR",
    alphaWeight: 0.15,
    liquidityIndex: 0.89,
    state: "ACTIVE",
  },
];

export default function Home() {
  // --- Core State Machine ---
  const [currentPanel, setCurrentPanel] = useState<ActivePanel>("overview");
  const [allocationWeight, setAllocationWeight] = useState<number>(78.4);
  const [varianceBound, setVarianceBound] = useState<number>(0.12);
  const [tailRiskTolerance, setTailRiskTolerance] = useState<number>(1.65);
  const [telemetryLogs, setTelemetryLogs] = useState<TelemetryRow[]>([]);
  const [activeSignal, setActiveSignal] = useState<number>(0);
  const [simulatedAUM, setSimulatedAUM] = useState<number>(14280.45);
  const [systemUptime, setSystemUptime] = useState<number>(99.9984);
  const [isProcessingMatrix, setIsProcessingMatrix] = useState<boolean>(false);

  // --- Live Dynamic Telemetry Stream ---
  useEffect(() => {
    const vectors = [
      "LIQUIDITY_CORE // CITADEL_SECURITIES_INTEGRATION",
      "RISK_MATRIX // STOCHASTIC_VARIANCE_FILTER",
      "ALLOCATION_VECTOR // CROSS_BORDER_CAPITAL",
      "CLEARING_NODE // MULTI_ASSET_SETTLEMENT",
      "DATA_ENGINE // ECONOMETRIC_TELEMETERING",
      "CONFIRMATION // ASYMMETRIC_EQUILIBRIUM",
    ];

    const generateInitialLogs = (): TelemetryRow[] => {
      return Array.from({ length: 5 }).map((_, index) => {
        const time = new Date(Date.now() - (5 - index) * 5000);
        return {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: time.toISOString().slice(11, 19),
          vector: vectors[index % vectors.length],
          systemState: "NOMINAL // VERIFIED",
          coefficient: parseFloat((Math.random() * 0.1 + 0.9).toFixed(4)),
        };
      });
    };

    setTelemetryLogs(generateInitialLogs());

    const streamInterval = setInterval(() => {
      setTelemetryLogs((prev) => {
        const timestamp = new Date().toISOString().slice(11, 19);
        const nextRow: TelemetryRow = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp,
          vector: vectors[Math.floor(Math.random() * vectors.length)],
          systemState:
            Math.random() > 0.15
              ? "NOMINAL // VERIFIED"
              : "RE-INDEXING // CONTINUUM",
          coefficient: parseFloat((Math.random() * 0.1 + 0.9).toFixed(4)),
        };
        return [...prev.slice(1), nextRow];
      });

      // Update ambient macro variables smoothly
      setSimulatedAUM(
        (prev) => prev + parseFloat((Math.random() * 0.4 - 0.18).toFixed(2))
      );
      setSystemUptime((prev) =>
        Math.min(100, Math.max(99.99, prev + (Math.random() * 0.0002 - 0.0001)))
      );
      setActiveSignal((s) => (s + 1) % 4);
    }, 3500);

    return () => clearInterval(streamInterval);
  }, []);

  // --- Matrix Recalculation Handler ---
  const triggerMatrixRecalculation = () => {
    setIsProcessingMatrix(true);
    setTimeout(() => {
      setIsProcessingMatrix(false);
    }, 1200);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#010204",
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
      {/* ====================================================================
          CINEMATIC GLOBAL BACKGROUND MATRIX
          ==================================================================== */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background:
            "radial-gradient(circle at 85% 25%, #050b18 0%, #010204 75%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* FIXED COORDINATE GEOMETRIC ALIGNMENT LINES */}
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
          left: "280px",
          top: 0,
          width: "1px",
          height: "100%",
          background:
            "linear-gradient(180deg, transparent, rgba(255,255,255,0.02), transparent)",
          zIndex: 2,
        }}
      />

      {/* ====================================================================
          INSTITUTIONAL MASTHEAD HEADER
          ==================================================================== */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          backgroundColor: "rgba(1, 2, 4, 0.95)",
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

        <div style={{ display: "flex", gap: "48px", alignItems: "center" }}>
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
              ${simulatedAUM.toFixed(2)}M
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
              {systemUptime.toFixed(4)}%
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

      {/* ====================================================================
          CONTROL RUNTIME CONTAINER LAYER
          ==================================================================== */}
      <div
        style={{
          display: "flex",
          minHeight: "100vh",
          paddingTop: "86px",
          boxSizing: "border-box",
        }}
      >
        {/* SIDEBAR NAVIGATION CONTROL UNIT */}
        <nav
          style={{
            width: "280px",
            backgroundColor: "rgba(1, 2, 4, 0.5)",
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
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "9px",
                color: "#475569",
                tracking: "2px",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              // SYSTEM CHANNELS
            </div>
            {[
              { id: "overview", title: "01 // Executive Summary" },
              { id: "topologies", title: "02 // Allocation Topologies" },
              { id: "attenuation", title: "03 // Risk Attenuation Matrix" },
              { id: "disclosures", title: "04 // Regulatory Disclosures" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPanel(item.id as ActivePanel)}
                style={{
                  width: "100%",
                  background:
                    currentPanel === item.id
                      ? "rgba(214, 175, 55, 0.04)"
                      : "transparent",
                  border:
                    currentPanel === item.id
                      ? "1px solid rgba(214, 175, 87, 0.15)"
                      : "1px solid transparent",
                  color: currentPanel === item.id ? "#ffffff" : "#64748b",
                  padding: "14px 18px",
                  fontSize: "11px",
                  fontWeight: currentPanel === item.id ? 600 : 400,
                  textAlign: "left",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* Operational Location Anchor Footer */}
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
              London Core Seat
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
              128 City Road, EC1V 2NX
              <br />
              United Kingdom
            </span>
          </div>
        </nav>

        {/* MAIN STRUCTURAL VIEWPORT VIEW PANEL */}
        <main
          style={{
            flex: 1,
            padding: "60px 80px 140px 340px",
            boxSizing: "border-box",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* PANEL 1: EXECUTIVE OVERVIEW */}
          {currentPanel === "overview" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
              <div
                style={{
                  maxWidth: "1400px",
                  margin: "0 auto",
                  display: "flex",
                  flexWrap: "wrap",
                  items: "center",
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
                    // PRIVATE ASSET MANAGEMENT SYNDICATION
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
                    Systemic Institutional <br />
                    <span style={{ fontWeight: 600, color: "#f3f4f6" }}>
                      Neutralization
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
                    Crestmont Capital operates as a private closed-ended capital
                    management collective. The framework organizes macro-level
                    systemic distribution models designed from the ground up to
                    isolate sovereign asset clusters, mitigate correlation
                    errors, and coordinate capital provision across global
                    primary wholesale pipelines with mathematical finality.
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
                      Pillars of Capital Defense
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
                      Every portfolio coordinate established by Crestmont
                      Capital functions under non-discretionary execution
                      algorithms. By integrating direct network tunnels akin to
                      matching infrastructure structures within Citadel
                      Securities systems, the platform enforces systematic order
                      routing directly across liquidity pools, bypassing retail
                      intermediation and secondary market distortions.
                    </p>
                  </div>
                </div>

                {/* VISUAL ARCHITECTURAL BUILDING ENGINE PROJECTION */}
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

                      {/* Architrave Element Beam */}
                      <div
                        style={{
                          width: "100%",
                          height: "8px",
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          border: "1px solid rgba(255, 255, 255, 0.03)",
                        }}
                      />

                      {/* Linear Columns Row */}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 10px",
                          height: "130px",
                        }}
                      >
                        {[1, 2, 3, 4, 5].map((columnId) => (
                          <div
                            key={columnId}
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

                      {/* Stylobate Steps Foundation Platform */}
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

                    {/* Orbiting Axis Vectors Ring Array */}
                    {[0, 1, 2, 3].map((ringIndex) => (
                      <div
                        key={ringIndex}
                        style={{
                          position: "absolute",
                          width: `${300 + ringIndex * 36}px`,
                          height: `${300 + ringIndex * 36}px`,
                          borderRadius: "50%",
                          border:
                            activeSignal === ringIndex
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
            <div style={{ animation: "fadeIn 0.4s ease" }}>
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
                  // MATRIX_CORE // ALLOCATION_TOPOLOGIES
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Sovereign Vector Configurations
                </h3>
              </div>

              {/* INTERACTIVE ALLOCATION CALCULATOR CONTROLS */}
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
                  Macro Parameter Integration Board
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
                      <span>System Target Concentration</span>
                      <span style={{ color: "#d4af37" }}>
                        {allocationWeight.toFixed(1)}%
                      </span>
                    </label>
                    <input
                      type="range"
                      min="50"
                      max="95"
                      step="0.5"
                      value={allocationWeight}
                      onChange={(e) =>
                        setAllocationWeight(parseFloat(e.target.value))
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
                      <span>Integrated Boundary Threshold ($\sigma$)</span>
                      <span style={{ color: "#d4af37" }}>
                        {varianceBound.toFixed(2)}
                      </span>
                    </label>
                    <input
                      type="range"
                      min="0.02"
                      max="0.45"
                      step="0.01"
                      value={varianceBound}
                      onChange={(e) =>
                        setVarianceBound(parseFloat(e.target.value))
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
                  onClick={triggerMatrixRecalculation}
                  disabled={isProcessingMatrix}
                  style={{
                    backgroundColor: "rgba(214, 175, 55, 0.05)",
                    border: "1px solid #d4af37",
                    color: "#d4af37",
                    padding: "12px 24px",
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    cursor: isProcessingMatrix ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {isProcessingMatrix
                    ? "Computing Optimization Paths..."
                    : "Execute Parameter Synchronization"}
                </button>
              </div>

              {/* NODE LIQUIDITY BALANCING DATA TABLE */}
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
                  <div>SOVEREIGN DEPLOYMENT HORIZON</div>
                  <div>ALLOCATION WEIGHT</div>
                  <div>LIQUIDITY INDEX</div>
                  <div>NODE STATE</div>
                </div>
                {INITIAL_NODES.map((node, nodeIndex) => {
                  const dynamicWeight =
                    nodeIndex === 0
                      ? allocationWeight / 100
                      : (1 - allocationWeight / 100) *
                        (node.alphaWeight / (1 - INITIAL_NODES[0].alphaWeight));

                  return (
                    <div
                      key={nodeIndex}
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
                        {node.region}
                      </div>
                      <div
                        style={{ fontFamily: "monospace", color: "#d4af37" }}
                      >
                        {(dynamicWeight * 100).toFixed(2)}%
                      </div>
                      <div
                        style={{ fontFamily: "monospace", color: "#94a3b8" }}
                      >
                        {(node.liquidityIndex - varianceBound * 0.05).toFixed(
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
                        {node.state}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* PANEL 3: RISK ATTENUATION MATRIX */}
          {currentPanel === "attenuation" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
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
                  // RISK_ATTENUATION // STRUCTURAL_CONTROLS
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Stochastic Insulation Matrices
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
                    // MATRIX_COEFFICIENT_ALPHA
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
                    Non-Linear Volatility Attenuation
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
                    By implementing high-dimensional structural filtering
                    distributions over simple standard deviation tracking
                    intervals, our asset baseline strips tracking noise
                    completely out of active calculations, identifying
                    underlying absolute correlation matrices safely.
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
                    // MATRIX_COEFFICIENT_BETA
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
                    Asymmetric Downside Insulation
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
                    Allocation coordinates drop complex global dependencies down
                    to binary, non-discretionary targets. This protective
                    structural setup removes the human operational anomalies and
                    behavioral heuristics common during significant systemic
                    volatility adjustments.
                  </p>
                </div>
              </div>

              {/* RISK PARAMETER PANEL MODULATOR CONTROLS */}
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
                  Value-at-Risk ($VaR$) Target Modulation
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
                      label: "95% Confidence Limit ($Z_c = 1.65$)",
                      value: 1.65,
                    },
                    {
                      label: "99% Confidence Limit ($Z_c = 2.33$)",
                      value: 2.33,
                    },
                    {
                      label: "99.9% Sovereign Protection ($Z_c = 3.09$)",
                      value: 3.09,
                    },
                  ].map((btn) => (
                    <button
                      key={btn.value}
                      onClick={() => setTailRiskTolerance(btn.value)}
                      style={{
                        backgroundColor:
                          tailRiskTolerance === btn.value
                            ? "rgba(214,175,55,0.08)"
                            : "transparent",
                        border:
                          tailRiskTolerance === btn.value
                            ? "1px solid #d4af37"
                            : "1px solid rgba(255,255,255,0.08)",
                        color:
                          tailRiskTolerance === btn.value
                            ? "#ffffff"
                            : "#64748b",
                        padding: "12px 20px",
                        fontSize: "11px",
                        fontFamily: "monospace",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {btn.label}
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
                  Current allocation models are optimizing variance distribution
                  bounds targeting a Critical $Z$-score multiplier of{" "}
                  <span style={{ color: "#d4af37", fontFamily: "monospace" }}>
                    {tailRiskTolerance}
                  </span>
                  . This mathematical baseline enforces systemic capital
                  protection parameters natively across all sovereign clear
                  paths.
                </p>
              </div>
            </div>
          )}

          {/* PANEL 4: REGULATORY DISCLOSURES */}
          {currentPanel === "disclosures" && (
            <div style={{ animation: "fadeIn 0.4s ease" }}>
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
                  // LEDGER_DISCLOSURE // LEGAL_STATEMENT
                </div>
                <h3
                  style={{
                    fontSize: "32px",
                    fontWeight: 300,
                    color: "#ffffff",
                    margin: 0,
                  }}
                >
                  Institutional Compliance Ledger
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
                  Crestmont Capital Ltd is a private limited entity incorporated
                  under the jurisdiction of England and Wales (Entity
                  Registration Certificate No. 17037425). The platform
                  operations, systematic allocations, and algorithmic models
                  presented herein are deployed exclusively for proprietary
                  treasury configurations and deep wholesale capital balance
                  preservation parameters.
                </p>
                <p>
                  This infrastructure interface does not serve as an open retail
                  brokerage or common financial advisory gateway. Access
                  parameters to clearing paths and internal risk models are
                  managed under strict institutional containment mandates. All
                  data sets, simulated tracking coefficients, and runtime
                  configurations are strictly proprietary intellectual assets of
                  Crestmont Capital Ltd.
                </p>
                <p>
                  Sovereign network allocations and transaction routing
                  methodologies align continuously with internal validation
                  auditing logs. System benchmarks are generated natively across
                  bare-metal server matrices to guarantee mathematical
                  structural stability during high-intensity global cross-border
                  allocation cycles.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ====================================================================
          FIXED REAL-TIME COMPILER TELEMETRY INTERFACE
          ==================================================================== */}
      <div
        style={{
          position: "fixed",
          bottom: "32px",
          right: "40px",
          width: "440px",
          backgroundColor: "rgba(2, 3, 5, 0.95)",
          border: "1px solid rgba(255, 255, 255, 0.04)",
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
          <span style={{ color: "#d4af37" }}>LIVE_FEED</span>
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
              <span style={{ color: "#475569" }}>[{log.timestamp}]</span>
              <span
                style={{
                  color: "#94a3b8",
                  paddingLeft: "8px",
                  flex: 1,
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                {log.vector}
              </span>
              <span
                style={{
                  color: log.systemState.includes("NOMINAL")
                    ? "#10b981"
                    : "#d4af37",
                  paddingLeft: "12px",
                }}
              >
                {log.systemState}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ====================================================================
          GLOBAL INSTITUTIONAL REGULATORY FOOTER
          ==================================================================== */}
      <footer
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.04)",
          backgroundColor: "#010203",
          padding: "100px 60px 40px 60px",
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
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "48px",
            marginBottom: "80px",
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
                marginBottom: "24px",
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
              Hardware Independent Runtime Sovereignty.
            </p>
          </div>
          <div>
            <h5
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
                fontSize: "11px",
              }}
            >
              System Directives
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
              <div>Risk Attenuation Coefficients</div>
              <div>Memory Structure Consistency</div>
              <div>Deterministic State Verification</div>
            </div>
          </div>
          <div>
            <h5
              style={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "2px",
                marginBottom: "24px",
                fontSize: "11px",
              }}
            >
              Global Network Infrastructure
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
                marginBottom: "24px",
                fontSize: "11px",
              }}
            >
              Registered Office
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
                  marginTop: "12px",
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
            paddingTop: "40px",
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
            protocols enforced.
          </div>
          <div style={{ display: "flex", gap: "32px" }}>
            <div>System Integrity Mandate</div>
            <div>Terms of Infrastructure Access</div>
            <div>Regulatory Ledger Disclosures</div>
          </div>
        </div>
      </footer>

      {/* CORE CSS FADE ANIMATION BLOCK */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
