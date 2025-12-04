export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* サイトタイトル */}
      <h1 className="text-3xl font-bold mt-12">Polaris Trip</h1>
      
      {/* サブタイトル */}
      <p className="mt-3 text-gray-600">
        好きなものを丁寧に集めて、旅をもっと思いのままに、気の向くままに
      </p>

      {/* ボタン：旅のしおりを開く */}
      <a
        href="/shiori"
        className="mt-10 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        旅のしおりをつくる
      </a>
    </div>
  );
}
