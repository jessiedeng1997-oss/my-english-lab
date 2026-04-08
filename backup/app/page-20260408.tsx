import WordCard from './components/WordCard-20260408'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Title */}
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-8">
        Welcome to English Lab
      </h1>

      {/* Illustration strip — cute animals & plants */}
      <div className="flex items-end gap-8 mb-10 select-none" aria-hidden="true">

        {/* 🐱 Cat */}
        <svg width="48" height="52" viewBox="0 0 48 52" fill="none">
          {/* ears */}
          <polygon points="8,18 4,4 16,12" fill="#fde8d8" stroke="#e8a87c" strokeWidth="1.6" strokeLinejoin="round"/>
          <polygon points="40,18 44,4 32,12" fill="#fde8d8" stroke="#e8a87c" strokeWidth="1.6" strokeLinejoin="round"/>
          {/* inner ear */}
          <polygon points="9,16 6,7 14,13" fill="#f9c4a8"/>
          <polygon points="39,16 42,7 34,13" fill="#f9c4a8"/>
          {/* head */}
          <ellipse cx="24" cy="28" rx="18" ry="16" fill="#fde8d8" stroke="#e8a87c" strokeWidth="1.6"/>
          {/* eyes */}
          <ellipse cx="17" cy="25" rx="3" ry="3.5" fill="#4a3728"/>
          <ellipse cx="31" cy="25" rx="3" ry="3.5" fill="#4a3728"/>
          <circle cx="18" cy="24" r="1" fill="white"/>
          <circle cx="32" cy="24" r="1" fill="white"/>
          {/* nose */}
          <ellipse cx="24" cy="31" rx="2" ry="1.4" fill="#f4a0a0"/>
          {/* mouth */}
          <path d="M22 32.5 Q24 34.5 26 32.5" stroke="#e8a87c" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* whiskers */}
          <line x1="4" y1="30" x2="16" y2="31" stroke="#c9a080" strokeWidth="1" strokeLinecap="round"/>
          <line x1="4" y1="33" x2="16" y2="33" stroke="#c9a080" strokeWidth="1" strokeLinecap="round"/>
          <line x1="44" y1="30" x2="32" y2="31" stroke="#c9a080" strokeWidth="1" strokeLinecap="round"/>
          <line x1="44" y1="33" x2="32" y2="33" stroke="#c9a080" strokeWidth="1" strokeLinecap="round"/>
          {/* body */}
          <ellipse cx="24" cy="46" rx="12" ry="7" fill="#fde8d8" stroke="#e8a87c" strokeWidth="1.4"/>
        </svg>

        {/* 🌻 Sunflower */}
        <svg width="44" height="60" viewBox="0 0 44 60" fill="none">
          {/* stem */}
          <path d="M22 58 Q20 45 22 34" stroke="#5a9e3a" strokeWidth="2.2" strokeLinecap="round"/>
          {/* leaf */}
          <path d="M22 48 Q12 44 10 38 Q18 40 22 48Z" fill="#7ec850" stroke="#5a9e3a" strokeWidth="1.2"/>
          {/* petals */}
          {[0,40,80,120,160,200,240,280,320].map((deg, i) => (
            <ellipse key={i} cx="22" cy="10" rx="4" ry="7" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.2"
              transform={`rotate(${deg} 22 22)`}/>
          ))}
          {/* center */}
          <circle cx="22" cy="22" r="8" fill="#92400e" stroke="#78350f" strokeWidth="1.4"/>
          <circle cx="19" cy="20" r="1.2" fill="#fbbf24"/>
          <circle cx="23" cy="19" r="1.2" fill="#fbbf24"/>
          <circle cx="26" cy="22" r="1.2" fill="#fbbf24"/>
          <circle cx="22" cy="25" r="1.2" fill="#fbbf24"/>
          <circle cx="18" cy="24" r="1.2" fill="#fbbf24"/>
        </svg>

        {/* 🐦 Bird */}
        <svg width="52" height="44" viewBox="0 0 52 44" fill="none">
          {/* branch */}
          <path d="M4 38 Q26 34 48 38" stroke="#a0785a" strokeWidth="2.4" strokeLinecap="round"/>
          {/* tail */}
          <path d="M10 28 Q4 32 6 38 Q10 34 14 32Z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1.2"/>
          {/* body */}
          <ellipse cx="26" cy="26" rx="14" ry="10" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.6"/>
          {/* wing */}
          <path d="M18 24 Q22 18 32 22 Q26 26 18 24Z" fill="#93c5fd" stroke="#60a5fa" strokeWidth="1.2"/>
          {/* head */}
          <circle cx="38" cy="20" r="8" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.6"/>
          {/* eye */}
          <circle cx="40" cy="18" r="2.2" fill="#1e3a5f"/>
          <circle cx="41" cy="17" r="0.8" fill="white"/>
          {/* beak */}
          <path d="M45 21 L50 22 L45 23Z" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1"/>
          {/* feet */}
          <line x1="22" y1="35" x2="20" y2="38" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="20" y1="38" x2="17" y2="39" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="20" y1="38" x2="20" y2="40" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="30" y1="35" x2="32" y2="38" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="32" y1="38" x2="35" y2="39" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="32" y1="38" x2="32" y2="40" stroke="#a0785a" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>

        {/* 🍄 Mushroom */}
        <svg width="40" height="52" viewBox="0 0 40 52" fill="none">
          {/* stem */}
          <path d="M13 34 Q12 44 14 50 Q20 52 26 50 Q28 44 27 34Z" fill="#fef3c7" stroke="#d97706" strokeWidth="1.6"/>
          {/* cap */}
          <path d="M2 34 Q2 14 20 10 Q38 14 38 34Z" fill="#f87171" stroke="#ef4444" strokeWidth="1.6"/>
          {/* spots */}
          <circle cx="14" cy="22" r="4" fill="white" opacity="0.85"/>
          <circle cx="26" cy="20" r="3" fill="white" opacity="0.85"/>
          <circle cx="20" cy="30" r="2.5" fill="white" opacity="0.85"/>
          <circle cx="8" cy="30" r="2" fill="white" opacity="0.85"/>
          <circle cx="32" cy="29" r="2" fill="white" opacity="0.85"/>
          {/* grass */}
          <path d="M10 50 Q8 44 10 40" stroke="#5a9e3a" strokeWidth="1.6" strokeLinecap="round"/>
          <path d="M30 50 Q32 44 30 40" stroke="#5a9e3a" strokeWidth="1.6" strokeLinecap="round"/>
        </svg>

        {/* 🐰 Bunny */}
        <svg width="48" height="60" viewBox="0 0 48 60" fill="none">
          {/* ears */}
          <ellipse cx="16" cy="14" rx="5" ry="12" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.6"/>
          <ellipse cx="32" cy="14" rx="5" ry="12" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.6"/>
          {/* inner ear */}
          <ellipse cx="16" cy="14" rx="2.5" ry="8" fill="#fbcfe8"/>
          <ellipse cx="32" cy="14" rx="2.5" ry="8" fill="#fbcfe8"/>
          {/* head */}
          <ellipse cx="24" cy="32" rx="16" ry="14" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.6"/>
          {/* eyes */}
          <circle cx="18" cy="29" r="3" fill="#be185d"/>
          <circle cx="30" cy="29" r="3" fill="#be185d"/>
          <circle cx="19" cy="28" r="1" fill="white"/>
          <circle cx="31" cy="28" r="1" fill="white"/>
          {/* nose */}
          <ellipse cx="24" cy="35" rx="2" ry="1.4" fill="#f472b6"/>
          {/* mouth */}
          <path d="M22 36.5 Q24 38.5 26 36.5" stroke="#f9a8d4" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
          {/* body */}
          <ellipse cx="24" cy="52" rx="13" ry="9" fill="#fce7f3" stroke="#f9a8d4" strokeWidth="1.4"/>
          {/* tail */}
          <circle cx="36" cy="54" r="4" fill="white" stroke="#f9a8d4" strokeWidth="1.2"/>
        </svg>

      </div>

      {/* Word Card */}
      <WordCard />
    </div>
  )
}
