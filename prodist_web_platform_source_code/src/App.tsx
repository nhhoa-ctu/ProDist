import { useState, useRef, createContext, useContext } from "react";
import { translations, type Lang, type TranslationKey } from "./i18n";

// ── Lang context ─────────────────────────────────────────────────────────────

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void }>({
  lang: "en",
  setLang: () => {},
});

function useLang() {
  return useContext(LangContext);
}

function t(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] as string;
}

// ── Instrument data (bilingual) ──────────────────────────────────────────────

const instruments = [
  {
    id: "dan-nguyet",
    name: { vi: "Đàn nguyệt", en: "Đàn nguyệt" },
    nameEn: "Moon Lute",
    image: "/images/dan-nguyet.png",
    info: {
      en: {
        "Used widely by ethnic group": "Vietnamese ethnic groups",
        "Structure consists of": "Neck, Strings, Resonating body, Headstock",
        "Number of strings": "2",
        "Origin":
          "Derived from the Chinese Yue-qin (Yue k'in), brought to Vietnam and adapted by Nguyễn Hán Tự (pen name Trọng Dung) during the Tang dynasty.",
        "Playing technique":
          "Historically, performers grew their fingernails long to pluck the strings; today a plectrum is used instead.",
        "Appeared in Vietnam": "Depicted in Vietnamese art from the 11th century",
        "Used in":
          "Cải lương, Royal Court Music of Huế, Ca Huế, Đờn ca tài tử, Chầu văn, Hát chèo",
      },
      vi: {
        "Được sử dụng rộng rãi trong dân tộc": "Dân tộc Việt Nam",
        "Cấu tạo gồm": "Cần đàn, Dây đàn, Bầu vang, Đầu đàn",
        "Số dây": "2",
        "Nguồn gốc":
          "Từ cây nguyệt cầm (Yue k'in) của người Trung Hoa do Nguyễn Hán tự là Trọng Dung đời nhà Tấn chế tạo ra",
        "Cách chơi":
          "Ngày xưa người biểu diễn nuôi móng tay dài để khảy đàn nguyệt, ngày nay miếng khảy đàn đã giữ nhiệm vụ này",
        "Xuất hiện ở Việt Nam vào": "Xuất hiện trong mỹ thuật Việt Nam từ thế kỷ XI",
        "Được sử dụng trong":
          "Cải lương, Nhã nhạc cung đình Huế, Ca huế, Đờn ca tài tử Nam Bộ, Chầu văn, Hát chèo",
      },
    },
    videos: [
      {
        thumb: "https://img.youtube.com/vi/3E0Tsjp4_-A/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=3E0Tsjp4_-A",
        performer: "TÚ TRI",
        composer: "TRỌNG NGUYỄN",
        title: "GIỌT SỮA CUỐI CÙNG",
      },
      {
        thumb: "https://img.youtube.com/vi/BHmKm5wbFyE/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=BHmKm5wbFyE",
        performer: "Nghệ sĩ Diệu Hiền",
        composer: "Ca Huế",
        title: "Ca Huế – Hành Vân",
      },
      {
        thumb: "https://img.youtube.com/vi/R9lixR9BrpU/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=R9lixR9BrpU",
        performer: "TÚ TRI",
        composer: "TRỌNG NGUYỄN",
        title: "GIỌT SỮA CUỐI CÙNG",
      },
    ],
  },
  {
    id: "dan-tranh",
    name: { vi: "Đàn tranh", en: "Đàn tranh" },
    nameEn: "Zither",
    image: "/images/dan-tranh.png",
    info: {
      en: {
        "Used widely by ethnic group": "Kinh (Viet) people",
        "Structure consists of": "Sound box, Movable bridges, Strings, Tuning pegs",
        "Number of strings": "16–17",
        "Origin":
          "Derived from the Chinese guzheng, introduced to Vietnam between the 13th and 14th centuries.",
        "Playing technique":
          "Players wear metal or tortoiseshell fingerpicks on the right-hand fingers to pluck the strings.",
        "Appeared in Vietnam": "13th – 14th century",
        "Used in":
          "Royal Court Music of Huế, Ca Huế, Đờn ca tài tử, Chamber music",
      },
      vi: {
        "Được sử dụng rộng rãi trong dân tộc": "Dân tộc Kinh, Người Việt",
        "Cấu tạo gồm": "Hộp đàn, Nhạn đàn, Dây đàn, Trục lên dây",
        "Số dây": "16–17",
        "Nguồn gốc":
          "Có nguồn gốc từ đàn Tranh của Trung Quốc, được du nhập vào Việt Nam từ thế kỷ XIII–XIV",
        "Cách chơi":
          "Người chơi đeo móng gảy bằng kim loại hoặc đồi mồi vào các ngón tay phải để gảy dây",
        "Xuất hiện ở Việt Nam vào": "Thế kỷ XIII – XIV",
        "Được sử dụng trong":
          "Nhã nhạc cung đình Huế, Ca Huế, Đờn ca tài tử, Nhạc thính phòng",
      },
    },
    videos: [
      {
        thumb: "https://img.youtube.com/vi/5qap5aO4i9A/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
        performer: "Nghệ sĩ Nhật Hoa",
        composer: "Traditional",
        title: "Lý Ngựa Ô – Đàn Tranh",
      },
      {
        thumb: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=tgbNymZ7vqY",
        performer: "NSƯT Minh Tâm",
        composer: "Classical",
        title: "Đàn Tranh Cổ Điển",
      },
      {
        thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        performer: "Lê Thị Bạch Vân",
        composer: "Traditional",
        title: "Mưa Rừng – Đàn Tranh",
      },
    ],
  },
  {
    id: "dan-co",
    name: { vi: "Đàn cò", en: "Đàn cò" },
    nameEn: "Vietnamese Fiddle",
    image: "/images/dan-co.png",
    info: {
      en: {
        "Used widely by ethnic group": "Kinh (Viet) people",
        "Structure consists of": "Resonating body, Neck, Bow, Strings",
        "Number of strings": "2",
        "Origin":
          "Derived from the Chinese erhu (nhị), introduced to Vietnam many centuries ago.",
        "Playing technique":
          "A horsehair bow is drawn across the two strings to produce sound.",
        "Appeared in Vietnam": "Many centuries ago",
        "Used in": "Chèo, Ca trù, Royal Court Music, Cải lương, Hát văn",
      },
      vi: {
        "Được sử dụng rộng rãi trong dân tộc": "Dân tộc Kinh",
        "Cấu tạo gồm": "Thân đàn, Cần đàn, Cung vĩ, Dây đàn",
        "Số dây": "2",
        "Nguồn gốc":
          "Có nguồn gốc từ Trung Quốc (đàn nhị/erhu), du nhập vào Việt Nam từ rất sớm",
        "Cách chơi": "Dùng cung vĩ kéo qua hai dây để tạo ra âm thanh",
        "Xuất hiện ở Việt Nam vào": "Nhiều thế kỷ trước",
        "Được sử dụng trong": "Chèo, Ca trù, Nhã nhạc, Cải lương, Hát văn",
      },
    },
    videos: [
      {
        thumb: "https://img.youtube.com/vi/3JZ_D3ELwOQ/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=3JZ_D3ELwOQ",
        performer: "NSND Thanh Ngoan",
        composer: "Classical",
        title: "Đàn Cò – Chèo Cổ",
      },
      {
        thumb: "https://img.youtube.com/vi/LDU_Txk06tU/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=LDU_Txk06tU",
        performer: "Nghệ sĩ Văn Ty",
        composer: "Traditional",
        title: "Độc Tấu Đàn Cò",
      },
      {
        thumb: "https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=9bZkp7q19f0",
        performer: "NSND Xuân Hoạch",
        composer: "Classical",
        title: "Đàn Cò Hát Văn",
      },
    ],
  },
  {
    id: "dan-bau",
    name: { vi: "Đàn bầu", en: "Đàn bầu" },
    nameEn: "Monochord",
    image: "/images/dan-bau.png",
    info: {
      en: {
        "Used widely by ethnic group": "Kinh people – a uniquely Vietnamese instrument",
        "Structure consists of": "Resonating box, Flexible wand, Plectrum, String",
        "Number of strings": "1",
        "Origin":
          "A purely Vietnamese instrument with no known foreign ancestor, present since ancient times.",
        "Playing technique":
          "A plectrum strikes the string while the wand is bent to change pitch, producing a wide range of tones.",
        "Appeared in Vietnam": "Ancient times – a purely Vietnamese creation",
        "Used in":
          "Chamber music, Royal Court Music, Ethnic ensemble music, Solo performance",
      },
      vi: {
        "Được sử dụng rộng rãi trong dân tộc": "Dân tộc Kinh – Nhạc cụ độc đáo của Việt Nam",
        "Cấu tạo gồm": "Hộp cộng hưởng, Cần đàn, Que gảy, Dây đàn",
        "Số dây": "1",
        "Nguồn gốc":
          "Là nhạc cụ thuần Việt, xuất hiện từ rất sớm trong lịch sử âm nhạc dân tộc",
        "Cách chơi":
          "Dùng que gảy gảy dây và rung cần để thay đổi cao độ, tạo âm thanh phong phú",
        "Xuất hiện ở Việt Nam vào": "Từ thời xa xưa, nhạc cụ thuần Việt",
        "Được sử dụng trong":
          "Nhạc thính phòng, Nhã nhạc, Hòa tấu dân tộc, Biểu diễn độc tấu",
      },
    },
    videos: [
      {
        thumb: "https://img.youtube.com/vi/kffacxfA7G4/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=kffacxfA7G4",
        performer: "Nghệ sĩ Hương Thanh",
        composer: "Traditional",
        title: "Đàn Bầu – Tiếng Đàn Ngàn Xưa",
      },
      {
        thumb: "https://img.youtube.com/vi/2vjPBrBU-TM/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=2vjPBrBU-TM",
        performer: "NSƯT Thanh Tâm",
        composer: "Classical",
        title: "Độc Tấu Đàn Bầu",
      },
      {
        thumb: "https://img.youtube.com/vi/YR5ApYxkU-U/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=YR5ApYxkU-U",
        performer: "Nghệ sĩ Bích Vân",
        composer: "Traditional",
        title: "Đàn Bầu Quê Hương",
      },
    ],
  },
  {
    id: "trong-trong",
    name: { vi: "Trống", en: "Trống" },
    nameEn: "Vietnamese Drum",
    image: "/images/trong-trong.png",
    info: {
      en: {
        "Used widely by ethnic group": "Many Vietnamese ethnic groups",
        "Structure consists of": "Drum shell, Drum heads, Tension ropes, Drumsticks",
        "Number of strings": "None – percussion instrument",
        "Origin":
          "Present since very early in Vietnamese history, deeply associated with festivals and folk rituals.",
        "Playing technique":
          "Drumsticks strike the drum heads or shell to produce rhythmic patterns.",
        "Appeared in Vietnam": "Prehistoric era – one of Vietnam's oldest instruments",
        "Used in":
          "Festivals, Chèo, Tuồng, Cải lương, Royal Court Music, Folk performances",
      },
      vi: {
        "Được sử dụng rộng rãi trong dân tộc": "Nhiều dân tộc Việt Nam",
        "Cấu tạo gồm": "Tang trống, Mặt da, Dây căng, Dùi trống",
        "Số dây": "Không có dây – nhạc cụ gõ",
        "Nguồn gốc":
          "Có mặt từ rất sớm trong lịch sử Việt Nam, gắn với lễ hội và nghi lễ dân gian",
        "Cách chơi":
          "Dùng dùi trống gõ vào mặt da hoặc tang trống để tạo ra tiết tấu",
        "Xuất hiện ở Việt Nam vào": "Từ thời tiền sử – nhạc cụ lâu đời nhất",
        "Được sử dụng trong":
          "Lễ hội, Chèo, Tuồng, Cải lương, Nhã nhạc, Biểu diễn dân gian",
      },
    },
    videos: [
      {
        thumb: "https://img.youtube.com/vi/uelHwf8o7_U/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=uelHwf8o7_U",
        performer: "Đoàn nghệ thuật dân tộc",
        composer: "Traditional",
        title: "Trống Hội Làng",
      },
      {
        thumb: "https://img.youtube.com/vi/Ct6BUPvE2sM/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=Ct6BUPvE2sM",
        performer: "Nghệ nhân dân gian",
        composer: "Festival",
        title: "Độc Tấu Trống",
      },
      {
        thumb: "https://img.youtube.com/vi/OPf0YbXqDm0/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=OPf0YbXqDm0",
        performer: "Đội trống truyền thống",
        composer: "Classical",
        title: "Trống Lễ Hội Dân Gian",
      },
    ],
  },
];

type Instrument = typeof instruments[0];

// ── Language Toggle ──────────────────────────────────────────────────────────

function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-0.5 gap-0.5">
      {(["en", "vi"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all ${
            lang === l
              ? "bg-amber-600 text-white shadow-sm"
              : "text-gray-500 hover:text-amber-700"
          }`}
        >
          {l === "en" ? "🇬🇧 EN" : "🇻🇳 VI"}
        </button>
      ))}
    </div>
  );
}

// ── Navbar ───────────────────────────────────────────────────────────────────

function Navbar({
  activePage,
  setActivePage,
}: {
  activePage: string;
  setActivePage: (p: string) => void;
}) {
  const { lang } = useLang();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer flex-shrink-0"
          onClick={() => setActivePage("home")}
        >
          <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-sm tracking-tight">PD</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-700 tracking-tight">
              ProDist
            </span>
            <div className="text-[9px] text-gray-400 font-medium tracking-wider uppercase leading-tight">
              {t(lang, "nav_tagline")}
            </div>
          </div>
        </div>

        {/* Nav links + Lang */}
        <div className="flex items-center gap-1 sm:gap-2">
          {(["home", "demo", "about"] as const).map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activePage === page
                  ? "bg-amber-600 text-white shadow"
                  : "text-gray-600 hover:bg-amber-50 hover:text-amber-700"
              }`}
            >
              {page === "home"
                ? t(lang, "nav_home")
                : page === "demo"
                ? t(lang, "nav_demo")
                : t(lang, "nav_about")}
            </button>
          ))}
          <div className="ml-1 sm:ml-3">
            <LangToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}

// ── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ setActivePage }: { setActivePage: (p: string) => void }) {
  const { lang } = useLang();

  const stats = [
    { value: "98.44%", label: t(lang, "stat_f1_label"), desc: t(lang, "stat_f1_desc") },
    { value: "52.73 MB", label: t(lang, "stat_size_label"), desc: t(lang, "stat_size_desc") },
    { value: "69.0%", label: t(lang, "stat_confusion_label"), desc: t(lang, "stat_confusion_desc") },
    { value: "+4.87 pp", label: t(lang, "stat_f1imp_label"), desc: t(lang, "stat_f1imp_desc") },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-red-950/60 to-amber-900/50" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, #f59e0b 1px, transparent 1px),
            radial-gradient(circle at 80% 20%, #ef4444 1px, transparent 1px),
            radial-gradient(circle at 60% 80%, #f59e0b 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 pt-28 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-10 flex-1">
          {/* Left */}
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full mb-5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              {t(lang, "hero_badge")}
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                ProDist
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-amber-100/90 font-semibold mb-1 leading-snug">
              {t(lang, "hero_subtitle")}
            </p>
            <p className="text-base text-white/60 mb-4">{t(lang, "hero_subtitle2")}</p>
            <p className="text-sm lg:text-base text-white/55 mb-7 max-w-xl leading-relaxed">
              {t(lang, "hero_desc")}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-7">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 text-center"
                >
                  <div className="text-amber-300 font-black text-lg leading-tight">{s.value}</div>
                  <div className="text-white/80 text-[11px] font-semibold mt-0.5">{s.label}</div>
                  <div className="text-white/45 text-[10px] mt-0.5">{s.desc}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => setActivePage("demo")}
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/30 hover:scale-105 transition-all text-sm"
              >
                {t(lang, "hero_cta_demo")}
              </button>
              <button
                onClick={() => setActivePage("about")}
                className="px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-sm backdrop-blur-sm"
              >
                {t(lang, "hero_cta_learn")}
              </button>
            </div>
          </div>

          {/* Right – instrument cards */}
          <div className="flex-1 flex flex-col items-center gap-3 w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-3 gap-3 w-full">
              {[
                { img: "/images/dan-nguyet.png", vi: "Đàn nguyệt", en: "Moon Lute" },
                { img: "/images/dan-co.png", vi: "Đàn cò", en: "Vietnamese Fiddle" },
                { img: "/images/dan-tranh.png", vi: "Đàn tranh", en: "Zither" },
              ].map((item) => (
                <div
                  key={item.vi}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="w-20 h-20 lg:w-28 lg:h-28 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.vi}
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-white/90 text-[11px] font-semibold text-center leading-tight">
                    {item.vi}
                    <br />
                    <span className="text-amber-300/80 text-[10px] font-normal">{item.en}</span>
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
              {[
                { img: "/images/dan-bau.png", vi: "Đàn bầu", en: "Monochord" },
                { img: "/images/trong-trong.png", vi: "Trống", en: "Vietnamese Drum" },
              ].map((item) => (
                <div
                  key={item.vi}
                  className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 flex flex-col items-center gap-2 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
                >
                  <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                    <img
                      src={item.img}
                      alt={item.vi}
                      className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-white/90 text-[11px] font-semibold text-center leading-tight">
                    {item.vi}
                    <br />
                    <span className="text-amber-300/80 text-[10px] font-normal">{item.en}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-8 animate-bounce">
          <div className="text-white/40 text-xs flex flex-col items-center gap-1">
            <span>{t(lang, "hero_scroll")}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Instrument Card ───────────────────────────────────────────────────────────

function InstrumentCard({
  instrument,
  index,
  onClick,
}: {
  instrument: Instrument;
  index: number;
  onClick: () => void;
}) {
  const { lang } = useLang();
  const info = instrument.info[lang];
  const infoEntries = Object.entries(info);

  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-amber-100 overflow-hidden cursor-pointer transition-all hover:-translate-y-1"
    >
      <div className="h-44 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-5">
        <img
          src={instrument.image}
          alt={instrument.name[lang]}
          className="h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
        />
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-gray-800 text-base">{instrument.name[lang]}</h3>
            <p className="text-amber-600 text-xs font-medium">{instrument.nameEn}</p>
          </div>
          <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 text-xs font-bold flex items-center justify-center flex-shrink-0">
            {index + 1}
          </span>
        </div>
        <div className="mt-2 space-y-1">
          {infoEntries.slice(0, 2).map(([k, v]) => (
            <p key={k} className="text-[11px] text-gray-500 truncate">
              <span className="font-medium text-gray-700">{k}:</span> {v}
            </p>
          ))}
        </div>
        <button className="mt-3 text-xs text-amber-600 font-semibold hover:text-amber-800 transition-colors">
          {t(lang, "demo_view_detail")}
        </button>
      </div>
    </div>
  );
}

// ── Video Card ────────────────────────────────────────────────────────────────

function VideoCard({ video }: { video: Instrument["videos"][0] }) {
  const { lang } = useLang();
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl overflow-hidden border border-gray-200 hover:border-red-400 shadow-sm hover:shadow-md transition-all"
    >
      <div className="relative">
        <img
          src={video.thumb}
          alt={video.title}
          className="w-full h-28 object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/320x180/1a1a2e/f59e0b?text=Video";
          }}
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-all">
          <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="p-2.5 bg-white">
        <p className="text-[11px] text-gray-700 font-semibold line-clamp-1">
          – {t(lang, "video_performer")}: {video.performer}
        </p>
        <p className="text-[11px] text-gray-500">
          – {t(lang, "video_composer")}: {video.composer}
        </p>
        <p className="text-[11px] text-gray-500 line-clamp-1">
          – {t(lang, "video_title")}: {video.title}
        </p>
      </div>
    </a>
  );
}

// ── Demo Page ─────────────────────────────────────────────────────────────────

function DemoPage() {
  const { lang } = useLang();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [result, setResult] = useState<Instrument | null>(null);
  const [loading, setLoading] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setShowDetail(false);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    setLoading(true);
    setResult(null);
    setShowDetail(false);
    setTimeout(() => {
      const picked = instruments[Math.floor(Math.random() * instruments.length)];
      setResult(picked);
      setLoading(false);
      setShowDetail(true);
    }, 1800);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-black text-gray-800 mb-1">{t(lang, "demo_title")}</h2>
      <p className="text-gray-500 text-sm mb-6">{t(lang, "demo_subtitle")}</p>

      {/* Upload */}
      <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6 mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          {t(lang, "demo_upload_label")}
        </label>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors font-medium"
          >
            {t(lang, "demo_choose_file")}
          </button>
          <span className="text-sm text-gray-400 italic">
            {selectedFile ? selectedFile.name : t(lang, "demo_no_file")}
          </span>
          <button
            onClick={handleUpload}
            disabled={!selectedFile || loading}
            className="px-5 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                {t(lang, "demo_analyzing")}
              </>
            ) : (
              t(lang, "demo_upload_btn")
            )}
          </button>
        </div>

        {previewUrl && (
          <div className="mt-4 flex items-start gap-5 flex-wrap">
            <div className="w-36 h-36 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
              <img src={previewUrl} alt="preview" className="w-full h-full object-contain" />
            </div>
            {loading && (
              <div className="flex flex-col gap-2 justify-center pt-4">
                <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                  <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {t(lang, "demo_ai_analyzing")}
                </div>
                <div className="text-xs text-gray-400">{t(lang, "demo_ai_method")}</div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Result detail */}
      {showDetail && result && (
        <div>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <div className="w-1 h-6 bg-amber-500 rounded-full" />
            <h3 className="text-xl font-bold text-gray-800">
              {instruments.indexOf(result) + 1}. {result.name[lang]}
              <span className="ml-2 text-sm font-normal text-amber-600">({result.nameEn})</span>
            </h3>
            <span className="ml-auto bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-semibold flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {t(lang, "demo_confidence")}
            </span>
          </div>

          <div className="border border-gray-200 rounded-xl mb-6 overflow-hidden bg-gradient-to-b from-amber-50 to-white flex items-center justify-center h-64">
            <img src={result.image} alt={result.name[lang]} className="h-full object-contain p-6 drop-shadow-lg" />
          </div>

          {/* Bilingual info side-by-side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {(["vi", "en"] as Lang[]).map((l) => (
              <div
                key={l}
                className={`rounded-2xl border p-5 ${
                  l === "vi"
                    ? "bg-amber-50 border-amber-200"
                    : "bg-blue-50 border-blue-200"
                }`}
              >
                <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2 text-sm">
                  <span
                    className={`w-1 h-4 rounded-full ${
                      l === "vi" ? "bg-amber-500" : "bg-blue-500"
                    }`}
                  />
                  {l === "vi" ? "🇻🇳 Thông tin đàn:" : "🇬🇧 Instrument Information:"}
                </h4>
                <ul className="space-y-1.5">
                  {Object.entries(result.info[l]).map(([k, v]) => (
                    <li key={k} className="text-xs text-gray-700 flex gap-1.5">
                      <span className={`flex-shrink-0 ${l === "vi" ? "text-amber-500" : "text-blue-500"}`}>–</span>
                      <span>
                        <span className="font-semibold">{k}: </span>
                        {v}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Videos */}
          <div>
            <h4 className="text-sm font-bold text-gray-700 mb-3 text-center">
              {t(lang, "demo_videos_title")}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {result.videos.map((v, i) => (
                <VideoCard key={i} video={v} />
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="mt-6 text-sm text-amber-600 hover:text-amber-800 font-medium transition-colors"
          >
            {t(lang, "demo_back")}
          </button>
        </div>
      )}

      {/* Instrument list */}
      {!showDetail && (
        <>
          <hr className="border-amber-100 my-8" />
          <h3 className="text-lg font-bold text-gray-700 mb-4">{t(lang, "demo_list_title")}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {instruments.map((inst, i) => (
              <InstrumentCard
                key={inst.id}
                instrument={inst}
                index={i}
                onClick={() => {
                  setResult(inst);
                  setShowDetail(true);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ── About Page ────────────────────────────────────────────────────────────────

function AboutPage() {
  const { lang } = useLang();

  const stats = [
    { value: "98.44%", label: t(lang, "stat_f1_label"), desc: t(lang, "stat_f1_desc") },
    { value: "52.73 MB", label: t(lang, "stat_size_label"), desc: t(lang, "stat_size_desc") },
    { value: "69.0%", label: t(lang, "stat_confusion_label"), desc: t(lang, "stat_confusion_desc") },
    { value: "+4.87 pp", label: t(lang, "stat_f1imp_label"), desc: t(lang, "stat_f1imp_desc") },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 mb-8 border border-amber-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-red-600 rounded-2xl flex items-center justify-center shadow">
            <span className="text-white font-black text-sm">PD</span>
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-800">{t(lang, "about_title")}</h2>
            <p className="text-amber-600 text-xs font-medium">{t(lang, "about_tagline")}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{t(lang, "about_desc")}</p>
      </div>

      {/* Stats */}
      <h3 className="text-lg font-bold text-gray-800 mb-4">{t(lang, "about_results_title")}</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white border border-amber-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="text-2xl font-black text-amber-600">{s.value}</div>
            <div className="text-sm font-semibold text-gray-700 mt-1">{s.label}</div>
            <div className="text-xs text-gray-400 mt-0.5">{s.desc}</div>
          </div>
        ))}
      </div>

      {/* Abstract – side by side */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm mb-6">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-amber-500 rounded-full" />
          {t(lang, "about_abstract_title")}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-[11px] font-bold text-blue-600 mb-2 uppercase tracking-widest">🇬🇧 English</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {translations.en.about_abstract_p1}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              {translations.en.about_abstract_p2}
            </p>
          </div>
          <div className="md:border-l md:border-gray-100 md:pl-6">
            <p className="text-[11px] font-bold text-amber-600 mb-2 uppercase tracking-widest">🇻🇳 Tiếng Việt</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {translations.vi.about_abstract_p1}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              {translations.vi.about_abstract_p2}
            </p>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gradient-to-br from-amber-600 to-red-700 rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">{t(lang, "about_contact_title")}</h3>
        <p className="text-amber-100 text-sm mb-4">{t(lang, "about_contact_desc")}</p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="mailto:research@prodist.ai"
            className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
          >
            📧 research@prodist.ai
          </a>
          <a
            href="#"
            className="px-4 py-2 bg-white/20 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors"
          >
            {t(lang, "about_read_paper")}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────

export default function App() {
  const [activePage, setActivePage] = useState("home");
  const [lang, setLang] = useState<Lang>("en");

  const stats = [
    { value: "98.44%", label: t(lang, "stat_f1_label"), desc: t(lang, "stat_f1_desc") },
    { value: "52.73 MB", label: t(lang, "stat_size_label"), desc: t(lang, "stat_size_desc") },
    { value: "69.0%", label: t(lang, "stat_confusion_label"), desc: t(lang, "stat_confusion_desc") },
    { value: "+4.87 pp", label: t(lang, "stat_f1imp_label"), desc: t(lang, "stat_f1imp_desc") },
  ];

  const features = [
    {
      icon: "🎵",
      title: lang === "en" ? t("en", "feat1_title") : t("vi", "feat1_title"),
      desc: lang === "en" ? t("en", "feat1_desc") : t("vi", "feat1_desc"),
    },
    {
      icon: "🧠",
      title: lang === "en" ? t("en", "feat2_title") : t("vi", "feat2_title"),
      desc: lang === "en" ? t("en", "feat2_desc") : t("vi", "feat2_desc"),
    },
    {
      icon: "⚡",
      title: lang === "en" ? t("en", "feat3_title") : t("vi", "feat3_title"),
      desc: lang === "en" ? t("en", "feat3_desc") : t("vi", "feat3_desc"),
    },
  ];

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen bg-gray-50 font-[Inter,sans-serif]">
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {activePage === "home" && (
          <>
            <HeroSection setActivePage={setActivePage} />

            {/* Features */}
            <section className="bg-white py-16 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                    {t(lang, "features_tag")}
                  </span>
                  <h2 className="text-3xl font-black text-gray-800 mt-2">
                    {t(lang, "features_title")}
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {features.map((f) => (
                    <div
                      key={f.title}
                      className="bg-amber-50 border border-amber-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="text-4xl mb-3">{f.icon}</div>
                      <h3 className="font-bold text-gray-800 mb-2">{f.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stats strip */}
            <section className="bg-gradient-to-r from-amber-600 to-red-700 py-10 px-4">
              <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl font-black text-white">{s.value}</div>
                    <div className="text-amber-200 text-xs font-semibold mt-1">{s.label}</div>
                    <div className="text-white/60 text-[10px] mt-0.5">{s.desc}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Instruments preview */}
            <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                  <span className="text-amber-600 text-xs font-bold uppercase tracking-widest">
                    {t(lang, "dataset_tag")}
                  </span>
                  <h2 className="text-3xl font-black text-gray-800 mt-2">
                    {t(lang, "dataset_title")}
                  </h2>
                  <p className="text-gray-500 text-sm mt-2">{t(lang, "dataset_desc")}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {instruments.map((inst, i) => (
                    <div
                      key={inst.id}
                      className="bg-white rounded-2xl border border-amber-200 p-4 text-center hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
                      onClick={() => setActivePage("demo")}
                    >
                      <div className="w-full h-28 flex items-center justify-center mb-3">
                        <img
                          src={inst.image}
                          alt={inst.name[lang]}
                          className="h-full object-contain group-hover:scale-110 transition-transform drop-shadow-md"
                        />
                      </div>
                      <div className="text-xs font-bold text-gray-700">{inst.name[lang]}</div>
                      <div className="text-[10px] text-amber-500 font-medium">{inst.nameEn}</div>
                      <div className="mt-2 text-[10px] bg-amber-100 text-amber-700 rounded-full px-2 py-0.5">
                        #{i + 1}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <button
                    onClick={() => setActivePage("demo")}
                    className="px-8 py-3 bg-amber-600 text-white font-bold rounded-xl hover:bg-amber-700 transition-colors shadow-lg hover:shadow-amber-300/50"
                  >
                    {t(lang, "dataset_cta")}
                  </button>
                </div>
              </div>
            </section>
          </>
        )}

        {activePage === "demo" && (
          <div className="pt-20">
            <DemoPage />
          </div>
        )}

        {activePage === "about" && (
          <div className="pt-20">
            <AboutPage />
          </div>
        )}

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-xs">PD</span>
              </div>
              <span className="font-bold text-amber-400">ProDist</span>
              <span className="text-gray-500 text-xs hidden sm:block">
                Profile-Guided Semantic Distillation
              </span>
            </div>
            <p className="text-gray-500 text-xs text-center">{t(lang, "footer_copy")}</p>
          </div>
        </footer>
      </div>
    </LangContext.Provider>
  );
}
