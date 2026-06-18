import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestmont Capital",
  description:
    "Independent Investment Management, Strategic Advisory & Cross-Border Capital Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        {/* Navigation */}
        <header className="navbar">
          <div className="container nav-content">

            <a href="/" className="logo">
              CRESTMONT CAPITAL
            </a>

            <nav>
              <ul className="nav-links">
                <li>
                  <a href="#platform">Platform</a>
                </li>

                <li>
                  <a href="#philosophy">Philosophy</a>
                </li>

                <li>
                  <a href="#research">Research</a>
                </li>

                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>

          </div>
        </header>

        {children}

      </body>
    </html>
  );
}
