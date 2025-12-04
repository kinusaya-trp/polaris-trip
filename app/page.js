export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      
      {/* ヘッダー */}
      <header className="bg-white/70 backdrop-blur-sm shadow-sm p-6 text-center">
        <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
          Polaris Trip
        </h1>

        {/* 細い仕切り線 */}
        <hr className="border-t border-gray-200 w-24 mx-auto my-3" />

        <p className="text-sm text-gray-600">
          好きなものを丁寧に集めて、旅をもっと思いのままに、気の向くままに
        </p>
      </header>

      {/* メインコンテンツ */}
      <main className="max-w-4xl mx-auto p-6 mt-10">

        <h2 className="text-lg font-semibold text-gray-700 mb-6">
          旅のしおり一覧
        </h2>

        {/* カードグリッド（2列） */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* 雑誌の表紙風カード */}
          <div
            className="
              bg-gradient-to-br from-[#f7f8fa] to-[#eef3f7]
              border border-gray-100 rounded-xl 
              shadow-[0_4px_16px_rgba(0,0,0,0.08)]
              hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)]
              transition cursor-pointer p-6
            "
          >
            <h3 className="text-xl font-medium text-gray-800">
              マイしおり
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              まだ内容がありません。ここから旅が始まります。
            </p>

            <a
              href="/shiori"
              className="inline-block mt-4 px-4 py-2 
                bg-gray-900 text-white rounded-lg text-sm 
                hover:bg-gray-700 transition"
            >
              開く
            </a>
          </div>

        </div>

        {/* ＋ 追加ボタン */}
        <div className="text-center mt-12">
          <a
            href="/shiori"
            className="inline-block px-6 py-3 rounded-full shadow 
              bg-gray-900 text-white hover:bg-gray-700 transition"
          >
            ＋ 新しいしおりを作る
          </a>
        </div>

      </main>

      {/* フッター */}
      <footer className="text-center text-sm text-gray-500 py-10">
        © 2025 Polaris Trip
      </footer>
    </div>
  );
}
