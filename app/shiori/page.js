export default function ShioriPage() {
  return (
    <div className="min-h-screen bg-gray-100 pt-10 pb-20">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center">旅のしおり</h1>
      <p className="text-center text-gray-600 mt-2">
        旅をもっと自由に、美しく、あなたらしく
      </p>

      {/* カテゴリ一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10 px-4">

        {/* 移動 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">🚋</div>
          <div className="font-semibold text-lg">移動</div>
        </div>

        {/* ホテル */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">🏨</div>
          <div className="font-semibold text-lg">ホテル</div>
        </div>

        {/* カフェ・フード */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">☕</div>
          <div className="font-semibold text-lg">カフェ・フード</div>
        </div>

        {/* 風景 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">🌲</div>
          <div className="font-semibold text-lg">風景</div>
        </div>

        {/* お土産 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">🎁</div>
          <div className="font-semibold text-lg">お土産</div>
        </div>

        {/* 体験 */}
        <div className="bg-white p-6 rounded-xl shadow text-center">
          <div className="text-5xl mb-3">🧭</div>
          <div className="font-semibold text-lg">体験</div>
        </div>
      </div>

      {/* メモ欄 */}
      <div className="max-w-3xl mx-auto mt-14 px-4">
        <h2 className="text-xl font-bold mb-3">旅のメモ</h2>
        <p className="text-sm text-gray-600 mb-3">
          行きたい場所、やりたいこと、感じたことをここに書けるようにできます。
        </p>

        <textarea
          className="w-full h-40 p-4 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
          placeholder="例：1日目はカフェ巡り。2日目は森林の神社へ…"
        ></textarea>
      </div>

      {/* フッター */}
      <footer className="text-center text-gray-500 text-sm mt-14">
        © 2025 Polaris Trip
      </footer>
    </div>
  );
}
