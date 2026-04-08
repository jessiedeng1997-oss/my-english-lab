'use client'

import { useState } from 'react'

function speak(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return
  window.speechSynthesis.cancel()
  const utter = new SpeechSynthesisUtterance(text)
  utter.lang = 'en-US'
  utter.rate = 0.9
  window.speechSynthesis.speak(utter)
}

function SpeakerIcon({ speaking }: { speaking: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill={speaking ? 'currentColor' : 'none'} />
      {speaking ? (
        <>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </>
      ) : (
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
      )}
    </svg>
  )
}

interface Sense {
  pos: string
  meaning: string
}

interface Word {
  english: string
  phonetic: string
  senses: Sense[]
  example: string
  exampleTranslation: string
}

const words: Word[] = [
  {
    english: 'Serendipity',
    phonetic: '/ˌser.ənˈdɪp.ɪ.ti/',
    senses: [
      { pos: 'n.', meaning: '意外发现美好事物的运气' },
      { pos: 'n. (引申)', meaning: '幸运的巧合；机缘巧合' },
    ],
    example: 'Finding that little café was pure serendipity.',
    exampleTranslation: '发现那家小咖啡馆纯属意外之喜。',
  },
  {
    english: 'Ephemeral',
    phonetic: '/ɪˈfem.ər.əl/',
    senses: [
      { pos: 'adj.', meaning: '短暂的；转瞬即逝的' },
      { pos: 'n.', meaning: '短命的事物；朝生暮死之物' },
    ],
    example: 'The beauty of cherry blossoms is ephemeral.',
    exampleTranslation: '樱花之美转瞬即逝。',
  },
  {
    english: 'Resilience',
    phonetic: '/rɪˈzɪl.i.əns/',
    senses: [
      { pos: 'n.', meaning: '韧性；快速恢复的能力' },
      { pos: 'n. (物理)', meaning: '弹性；回弹性' },
      { pos: 'n. (心理)', meaning: '心理复原力；抗压能力' },
    ],
    example: 'Her resilience helped her overcome every obstacle.',
    exampleTranslation: '她的韧性帮助她克服了每一个障碍。',
  },
  {
    english: 'Luminous',
    phonetic: '/ˈluː.mɪ.nəs/',
    senses: [
      { pos: 'adj.', meaning: '发光的；明亮的' },
      { pos: 'adj. (引申)', meaning: '才华横溢的；光彩照人的' },
    ],
    example: 'The moon cast a luminous glow over the lake.',
    exampleTranslation: '月亮将皎洁的光芒洒在湖面上。',
  },
  {
    english: 'Wanderlust',
    phonetic: '/ˈwɒn.də.lʌst/',
    senses: [
      { pos: 'n.', meaning: '对旅行的强烈渴望' },
      { pos: 'n. (文学)', meaning: '漂泊欲；流浪情结' },
    ],
    example: 'Wanderlust drove her to explore every continent.',
    exampleTranslation: '对旅行的渴望驱使她探索每一片大陆。',
  },
]

const CARD_SHADOW = '0 8px 32px 0 rgba(100,160,255,0.18), 0 2px 8px 0 rgba(100,160,255,0.10)'

export default function WordCard() {
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [speaking, setSpeaking] = useState(false)

  const word = words[index]

  function nextWord() {
    setFlipped(false)
    setTimeout(() => setIndex((i) => (i + 1) % words.length), 200)
  }

  function handleSpeak(e: React.MouseEvent) {
    e.stopPropagation()
    setSpeaking(true)
    speak(word.english)
    setTimeout(() => setSpeaking(false), 1200)
  }

  return (
    <div className="flex flex-col items-center gap-8">
      <div
        className="w-96 cursor-pointer"
        style={{ perspective: '1000px', height: '320px' }}
        onClick={() => setFlipped((f) => !f)}
      >
        <div
          style={{
            transition: 'transform 0.55s cubic-bezier(0.4,0,0.2,1)',
            transformStyle: 'preserve-3d',
            transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            position: 'relative',
            width: '100%',
            height: '100%',
          }}
        >
          {/* Front */}
          <div
            style={{ backfaceVisibility: 'hidden', boxShadow: CARD_SHADOW }}
            className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center gap-3 px-8"
          >
            <span className="text-5xl font-bold tracking-tight text-gray-900">
              {word.english}
            </span>
            <span className="text-base text-gray-400 font-mono">
              {word.phonetic}
            </span>
            <button
              onClick={handleSpeak}
              className="mt-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all active:scale-95"
              style={{
                color: speaking ? '#008733' : '#9ca3af',
                backgroundColor: speaking ? '#e6f4ec' : '#f3f4f6',
              }}
              aria-label="播放发音"
            >
              <SpeakerIcon speaking={speaking} />
              <span>{speaking ? '播放中…' : '发音'}</span>
            </button>
            <span className="text-xs text-gray-300 mt-1">点击翻转</span>
          </div>

          {/* Back */}
          <div
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              boxShadow: CARD_SHADOW,
            }}
            className="absolute inset-0 bg-white rounded-3xl flex flex-col justify-between px-8 py-7"
          >
            <div className="flex flex-col gap-2">
              {word.senses.map((s, i) => (
                <div key={i} className="flex items-baseline gap-2">
                  <span
                    className="text-xs font-semibold px-1.5 py-0.5 rounded"
                    style={{ backgroundColor: '#e6f4ec', color: '#008733' }}
                  >
                    {s.pos}
                  </span>
                  <span className="text-base text-gray-800">{s.meaning}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-100" />
            <div className="flex flex-col gap-1.5">
              <p className="text-sm text-gray-600 italic leading-relaxed">
                "{word.example}"
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                {word.exampleTranslation}
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={nextWord}
        className="px-8 py-3 rounded-full text-white text-base font-semibold tracking-wide transition-all active:scale-95"
        style={{ backgroundColor: '#008733' }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#006b28')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#008733')}
      >
        下一个单词 →
      </button>
    </div>
  )
}
