// app/page.js

const tripsData = [
  {
    id: 1,
    title: "北陸ひとり旅 - 忘れられない冬の静けさ",
    date: "2025.02.10 – 02.13",
    location: "富山・金沢",
    status: "planning",
    image:
      "https://images.unsplash.com/photo-1570459027562-4a916cc6113f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "森の神社と朝霧に包まれた時間",
    date: "2025.03.02",
    location: "千葉",
    status: "done",
    image:
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "ひとり温泉読書 - 言葉を探す静養の二日間",
    date: "2025.01.18 – 01.19",
    location: "箱根",
    status: "ongoing",
    image:
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210d6?q=80&w=1000&auto=format&fit=crop",
  },
];

const statusColor = {
  planning: "bg-[#8DACC0]",
  ongoing: "bg-[#9AB59A]",
  done: "bg-[#B4A7B8]",
};

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <header className="text-center mb-16">
        <h1 className="text-4xl tracking-widest mb-4">Polaris Trip</h1>
        <p className="text-sm text-gray-500">
          好きなものを丁寧に集めて、旅をおもいのままに、気の向くままに
        </p>
      </header>

      {/* Bookshelf */}
      <section className="grid md:grid-cols-2 gap-12">
        {tripsData.map((trip) => (
          <article key={trip.id} className="book-transform">
            <div className="bg-white rounded-md overflow-hidden shadow flex">

              {/* 左ページ：写真 */}
              <div className="w-1/2 overflow-hidden">
                <img
                  src={trip.image}
                  alt={trip.title}
                  className="w-full h-full object-cover photo-filter"
                />
              </div>

              {/* 右ページ：情報 */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                {/* ステータス */}
                <div className="flex items-center mb-3">
                  <span
                    className={`w-1.5 h-1.5 rounded-full mr-2 ${statusColor[trip.status]}`}
                  />
                  <span className="text-xs tracking-widest text-gray-400 uppercase">
                    {trip.status}
                  </span>
                </div>

                {/* タイトル */}
                <h2 className="text-lg leading-snug mb-2 line-clamp-2">
                  {trip.title}
                </h2>

                {/* 日付・場所 */}
                <p className="text-xs text-gray-500">{trip.date}</p>
                <p className="text-xs text-gray-500">{trip.location}</p>
              </div>

            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
