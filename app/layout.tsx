// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'Lähihoitajat Job Board',
  description: 'Job board for Lähihoitajat',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
