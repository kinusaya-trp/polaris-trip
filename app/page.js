import Image from "next/image"; // Next.js環境では画像最適化のためにImageコンポーネントを使用することを推奨

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

// TOPページのデザインに合わせてカラースキームを定義
const statusConfig = {
    planning: { 
        colorClass: "bg-[#8DACC0]", 
        borderColor: "border-[#8DACC0]", // 境界線の色
        label: "PLANNING",
        text: "text-[#8DACC0]" // テキストの色
    },
    ongoing: { 
        colorClass: "bg-[#9AB59A]", 
        borderColor: "border-[#9AB59A]",
        label: "ONGOING",
        text: "text-[#9AB59A]"
    },
    done: { 
        colorClass: "bg-[#B4A7B8]", 
        borderColor: "border-[#B4A7B8]",
        label: "DONE",
        text: "text-[#B4A7B8]"
    },
};

// 全体のカラースキームを定義（index.htmlと統一）
const styles = {
    text: "text-[#3E3E3E]", // Main text
    sub: "text-[#787878]", // Sub text
    meta: "text-[#A0A0A0]", // Meta/Ghost text
    card: "bg-[#FFFFFC]", // Card background
    border: "border-[#E8E8E6]", // General border
};

// 3D/シャドウ効果（カスタムCSSを模倣）
const shadowClasses = "shadow-[0_8px_18px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.1)] transition-all duration-500";


export default function Home() {
  return (
    <main className={`max-w-6xl mx-auto px-6 py-12 ${styles.text}`}>
      
      {/* Header */}
      <header className="text-center mb-16">
        {/* フォント設定をTOPページと合わせる (font-medium, tracking-widest) */}
        <h1 className={`text-3xl md:text-4xl font-medium tracking-widest mb-4 ${styles.text}`}>Polaris Trip</h1>
        <p className={`text-sm tracking-wider font-normal opacity-80 ${styles.sub}`}>
          好きなものを丁寧に集めて、旅をおもいのままに、気の向くままに
        </p>
      </header>

      {/* Bookshelf */}
      {/* 3列表示(lg:grid-cols-3)と適切なギャップ(gap-12)を適用し、TOPページのレイアウトに近づける */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full mb-20">
        {tripsData.map((trip) => {
            const config = statusConfig[trip.status];
            
            return (
                <article key={trip.id} className="group">
                    {/* aタグでカード全体をラップし、クリック可能な領域を確保 */}
                    <a href="#" className={`block h-[280px] ${styles.card} rounded-md border ${styles.border} relative overflow-hidden flex flex-col md:flex-row ${shadowClasses}`} style={{ borderColor: config.borderColor }}>
                        
                        {/* 左ページ：画像/フォールバック */}
                        {/* h-[180px] md:h-full は、モバイルで縦、PCで横にするための調整 */}
                        <div className="w-full md:w-1/2 h-[180px] md:h-full relative overflow-hidden bg-gray-100 md:border-r border-gray-100 border-b md:border-b-0">
                            {/* Next/Imageの使用を推奨（ただし、今回はimgタグで記述） */}
                            <img
                                src={trip.image}
                                alt={trip.title}
                                // 画像ホバー時のアニメーション効果をTailwindで定義
                                className="w-full h-full object-cover transition-all duration-800 group-hover:scale-[1.03] filter sepia-[.15] saturate-[.85] group-hover:sepia-0 group-hover:saturate-100"
                            />
                        </div>

                        {/* 右ページ：情報 */}
                        <div className={`w-full md:w-1/2 p-6 flex flex-col justify-center relative ${styles.card}`}>
                            
                            {/* ステータス */}
                            <div className="flex items-center mb-4">
                                <span className={`w-1.5 h-1.5 rounded-full mr-2 ${config.colorClass}`}></span>
                                {/* メタ情報の色とトラッキングを統一 */}
                                <span className={`text-[0.65rem] font-medium uppercase tracking-widest opacity-90 ${styles.meta}`}>
                                    {config.label}
                                </span>
                            </div>

                            {/* タイトル */}
                            {/* leading-snugとfont-mediumで雑誌感を出す */}
                            <h2 className={`text-lg font-medium mb-2 leading-snug line-clamp-3 ${styles.text}`}>
                                {trip.title}
                            </h2>

                            {/* 日付・場所 */}
                            {/* mt-auto で下寄せにし、space-y-1 で行間を調整 */}
                            <div className={`mt-auto text-xs opacity-90 space-y-1 pt-2 ${styles.sub}`}>
                                <p className="tracking-wider">{trip.date}</p>
                                <p className="tracking-wider">{trip.location}</p>
                            </div>

                        </div>
                    </a>
                </article>
            );
        })}
      </section>
      
    </main>
  );
}
