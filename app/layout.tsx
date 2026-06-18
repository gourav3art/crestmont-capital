import './globals.css';

export const metadata = {
  title: 'Crestmont Capital | Global Investment Management',
  description: 'Independent investment management, strategic advisory, and cross-border capital solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
