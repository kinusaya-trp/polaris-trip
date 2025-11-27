import './globals.css';

export const metadata = {
  title: 'Polaris Trip',
  description: 'さやかの旅のしおりアプリ',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className="bg-gray-100 min-h-screen">
        
        {/* ヘッダー */}
        <header className="bg-white shadow p-4 text-center text-lg font-semibold">
          Polaris Trip
        </header>

        {/* メインコンテンツ */}
        <main className="p-6 max-w-3xl mx-auto">{children}</main>

        {/* フッター */}
        <footer className="text-center text-sm text-gray-500 py-6">
          © 2025 Polaris Trip
        </footer>

      </body>
    </html>
  );
}
