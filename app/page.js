export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ヘッダー */}
      <header className="bg-white shadow p-4 text-center font-semibold text-lg">
        Polaris Trip
        <p className="text-sm text-gray-600 mt-1">
          好きなものを丁寧に集めて、旅をもっと思いのままに、気の向くままに
        </p>
      </header>

      {/* 本棚エリア */}
      <main className="max-w-2xl mx-auto mt-10 p-4">

        <h2 className="text-xl font-semibold mb-4">旅のしおり一覧</h2>

        {/* しおりカード（仮） */}
        <div className="grid grid-cols-1 gap-4">
          {/* しおり 1（仮表示） */}
          <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition">
            <p className="text-lg font-semibold">マイしおり</p>
            <p className="text-gray-500 text-sm mt-1">
              まだ内容がありません。開いて作成できます。
            </p>
            <a
              href="/shiori"
              className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              開く
            </a>
          </div>
        </div>

        {/* 新しいしおりを作る */}
        <div className="text-center mt-8">
          <a
            href="/shiori"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full shadow hover:bg-green-700"
          >
            ＋ 新しいしおりを作る
          </a>
        </div>
      </main>

      {/* フッター */}
      <footer className="text-center text-sm text-gray-500 py-6">
        © 2025 Polaris Trip
      </footer>
    </div>
  );
}
