import "./globals.css";

export const metadata = {
  title: "Liherbert Artes",
  description: "Site Oficial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/perfil.jpg" />
      </head>
      <body className="bg-fundo-cinza text-zinc-50">{children}</body>
    </html>
  );
}
