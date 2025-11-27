export default function Page() {
  return (
    <div className="space-y-12">

      {/* ヒーローセクション */}
      <section className="text-center space-y-4 py-10">
        <h1 className="text-4xl font-bold text-gray-800">旅のしおり</h1>
        <p className="text-gray-600 text-lg">
          旅をもっと自由に、美しく、あなたらしく
        </p>
      </section>

      {/* カテゴリカード（透明カード風） */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { title: "移動", emoji: "🚃" },
          { title: "ホテル", emoji: "🏨" },
          { title: "カフェ・フード", emoji: "☕" },
          { title: "風景", emoji: "🌲" },
          { title: "お土産", emoji: "🎁" },
          { title: "体験", emoji: "🧭" },
        ].map((item) => (
          <div
            key={item.title}
            className="bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition rounded-xl p-6 text-center border border-white"
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <div className="font-medium text-gray-700">{item.title}</div>
          </div>
        ))}
      </section>

      {/* 旅のメモエリア */}
      <section className="bg-white shadow rounded-xl p-6 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">旅のメモ</h2>
        <p className="text-gray-600">
          行きたい場所、やりたいこと、感じたことをここに書けるようにできます。
        </p>
        <textarea
          className="w-full h-32 p-3 border rounded-lg focus:ring"
          placeholder="例：1日目はカフェ巡り。2日目は森林の神社へ…"
        ></textarea>
      </section>

    </div>
  );
}
