// VÉDICO — shared visual primitives, palette, hand-drawn icons.
// Matches v2 (CHANI-fidelity) Today screen exactly.

const V2 = {
  cream:       '#F4ECDD',
  creamWarm:   '#EFE4D0',
  paper:       '#FFFCF6',
  walnut:      '#2A1F1A',
  walnutSoft:  '#5A4A40',
  sage:        '#9CA88A',
  rose:        '#C9928A',
  terracotta:  '#B86855',
  gold:        '#C7A974',
  ink:         '#1A1310',
};

const TYPE = {
  display: '"Big Shoulders Stencil Display", "Big Shoulders Stencil Text", Impact, sans-serif',
  mono:    '"Special Elite", "Courier Prime", "Courier New", monospace',
  italic:  '"Cormorant Garamond", "Bookman Old Style", Georgia, serif',
};

const PAPER_GRID_BG = `
  repeating-linear-gradient(0deg, transparent 0 31px, rgba(90,74,64,0.07) 31px 32px),
  repeating-linear-gradient(90deg, transparent 0 31px, rgba(90,74,64,0.07) 31px 32px)
`;

const NOTEBOOK_BG = `
  repeating-linear-gradient(0deg, transparent 0 19px, rgba(90,74,64,0.06) 19px 20px),
  repeating-linear-gradient(90deg, transparent 0 19px, rgba(90,74,64,0.06) 19px 20px)
`;

// ─── Hand-drawn squiggle underline ─────────────────────────────────
function Squiggle({ width = 220, color = '#2A1F1A', stroke = 2.4, amp = 4, period = 16 }) {
  const segs = Math.floor(width / period);
  let d = `M 2 ${amp + 2}`;
  for (let i = 1; i <= segs; i++) {
    const x = i * period;
    const cx = x - period / 2;
    const cy = (i % 2 === 0) ? amp + 2 : 2;
    const j = ((i * 7) % 5) * 0.18 - 0.4;
    d += ` Q ${cx + j} ${cy + j}, ${x + j * 0.5} ${amp + 2}`;
  }
  return (
    <svg width={width} height={amp * 2 + 4} viewBox={`0 0 ${width} ${amp * 2 + 4}`} style={{ display: 'block' }}>
      <path d={d} fill="none" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
}

// ─── Dashed pill border ────────────────────────────────────────────
function DashedPill({ width, height, color = '#2A1F1A', stroke = 1.4, dash = '5 4' }) {
  return (
    <svg width={width} height={height} style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <rect x={stroke} y={stroke} width={width - stroke * 2} height={height - stroke * 2}
        rx={(height - stroke * 2) / 2} ry={(height - stroke * 2) / 2}
        fill="none" stroke={color} strokeWidth={stroke} strokeDasharray={dash} strokeLinecap="round"></rect>
    </svg>
  );
}

// ─── 8-point stars ─────────────────────────────────────────────────
function StarBig({ size = 110, fill = '#5A4A40', halftone = true, id = 'ht' }) {
  const r1 = 50, r2 = 18, cx = 60, cy = 60;
  let d = '';
  for (let i = 0; i < 16; i++) {
    const r = i % 2 === 0 ? r1 : r2;
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  d += 'Z';
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      {halftone && (
        <defs>
          <pattern id={id} x="0" y="0" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
            <circle cx="1.6" cy="1.6" r="0.8" fill={fill}></circle>
          </pattern>
        </defs>
      )}
      <path d={d} fill={halftone ? `url(#${id})` : fill} stroke={fill} strokeWidth={halftone ? 0.6 : 0}></path>
    </svg>
  );
}

function StarSmall({ size = 18, color = '#2A1F1A', stroke = 1.4 }) {
  const r1 = 50, r2 = 16, cx = 60, cy = 60;
  let d = '';
  for (let i = 0; i < 16; i++) {
    const r = i % 2 === 0 ? r1 : r2;
    const a = (i * Math.PI) / 8 - Math.PI / 2;
    const x = cx + Math.cos(a) * r;
    const y = cy + Math.sin(a) * r;
    d += (i === 0 ? 'M' : 'L') + x.toFixed(1) + ' ' + y.toFixed(1) + ' ';
  }
  d += 'Z';
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <path d={d} fill="none" stroke={color} strokeWidth={stroke} strokeLinejoin="round"></path>
    </svg>
  );
}

// ─── Crescent moon ─────────────────────────────────────────────────
function MoonCutout({ size = 90, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <path d="M 70 12 C 42 16, 25 38, 30 62 C 35 86, 62 92, 84 80 C 60 84, 42 70, 40 50 C 38 32, 50 18, 70 12 Z"
        fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round"></path>
      <circle cx="55" cy="32" r="0.9" fill={color}></circle>
      <circle cx="62" cy="50" r="0.8" fill={color}></circle>
      <circle cx="48" cy="62" r="0.7" fill={color}></circle>
    </svg>
  );
}

// ─── Palm leaf, lotus, saturn ──────────────────────────────────────
function PalmLeaf({ size = 100, color = '#9CA88A' }) {
  return (
    <svg width={size} height={size * 0.45} viewBox="0 0 200 90">
      <g fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round">
        <path d="M 6 45 Q 100 38, 194 45" strokeWidth="2"></path>
        {Array.from({ length: 28 }).map((_, i) => {
          const x = 12 + i * 6.5;
          const t = (i - 13.5) / 13.5;
          const h = 32 * (1 - Math.abs(t) * 0.55);
          return (
            <g key={i}>
              <path d={`M ${x} 45 Q ${x + 3} ${45 - h * 0.5}, ${x + 6} ${45 - h}`}></path>
              <path d={`M ${x} 45 Q ${x + 3} ${45 + h * 0.5}, ${x + 6} ${45 + h}`}></path>
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function Lotus({ size = 80, color = '#B86855' }) {
  return (
    <svg width={size} height={size * 0.7} viewBox="0 0 100 70">
      <g fill="none" stroke={color} strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M 50 60 Q 32 48, 32 22 Q 42 36, 50 60"></path>
        <path d="M 50 60 Q 68 48, 68 22 Q 58 36, 50 60"></path>
        <path d="M 50 60 Q 18 50, 8 32 Q 26 42, 50 60"></path>
        <path d="M 50 60 Q 82 50, 92 32 Q 74 42, 50 60"></path>
        <path d="M 50 60 Q 50 38, 50 12 Q 50 38, 50 60"></path>
        <path d="M 4 64 Q 50 60, 96 64"></path>
      </g>
    </svg>
  );
}

function SaturnSymbol({ size = 60, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <g fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 16 8 L 16 44"></path>
        <path d="M 8 14 Q 16 8, 24 14"></path>
        <path d="M 16 44 Q 16 52, 26 52 Q 38 52, 38 42 Q 38 32, 28 32 Q 22 32, 22 38"></path>
      </g>
    </svg>
  );
}

// ─── South-Indian chart ────────────────────────────────────────────
function SouthChart({ size = 60, color = '#2A1F1A', stroke = 1.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60">
      <g fill="none" stroke={color} strokeWidth={stroke} strokeLinejoin="round">
        <rect x="4" y="4" width="52" height="52"></rect>
        <line x1="4" y1="4" x2="56" y2="56"></line>
        <line x1="56" y1="4" x2="4" y2="56"></line>
        <line x1="4" y1="20" x2="56" y2="20"></line>
        <line x1="4" y1="40" x2="56" y2="40"></line>
        <line x1="20" y1="4" x2="20" y2="56"></line>
        <line x1="40" y1="4" x2="40" y2="56"></line>
      </g>
    </svg>
  );
}

// ─── Header icons ──────────────────────────────────────────────────
function BellIcon({ color = '#2A1F1A' }) {
  return (
    <svg width="22" height="24" viewBox="0 0 24 26" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 5 19 Q 4 18, 5 17 Q 7 14, 6.5 10 Q 6 6, 9 4 Q 12 2.5, 15 4 Q 18 6, 17.5 10 Q 17 14, 19 17 Q 20 18, 19 19 L 5 19 Z"></path>
      <path d="M 10 22 Q 12 24, 14 22"></path>
    </svg>
  );
}
function MenuIcon({ color = '#2A1F1A' }) {
  return (
    <svg width="26" height="16" viewBox="0 0 26 16" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round">
      <path d="M 2 3 Q 13 2, 24 3"></path>
      <path d="M 2 8 Q 13 7, 24 8"></path>
      <path d="M 2 13 Q 13 12, 24 13"></path>
    </svg>
  );
}
function BackArrow({ color = '#2A1F1A' }) {
  return (
    <svg width="24" height="20" viewBox="0 0 28 22" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M 12 4 Q 6 11, 4 11 Q 6 11, 12 18"></path>
      <path d="M 4 11 Q 14 11, 25 11"></path>
    </svg>
  );
}

// ─── Sketchy nav glyphs ────────────────────────────────────────────
function NavSketch({ kind, color, active }) {
  const c = active ? V2.terracotta : color;
  const sw = 1.7;
  if (kind === 'hoje') return (
    <svg width="26" height="26" viewBox="0 0 30 30" fill="none" stroke={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="15" cy="15" r="5"></circle>
      <path d="M 15 3 L 15 6"></path><path d="M 15 24 L 15 27"></path>
      <path d="M 3 15 L 6 15"></path><path d="M 24 15 L 27 15"></path>
      <path d="M 6.5 6.5 L 8.6 8.6"></path><path d="M 21.4 21.4 L 23.5 23.5"></path>
      <path d="M 23.5 6.5 L 21.4 8.6"></path><path d="M 8.6 21.4 L 6.5 23.5"></path>
    </svg>
  );
  if (kind === 'mapa') return (
    <svg width="26" height="26" viewBox="0 0 30 30" fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round">
      <rect x="4" y="4" width="22" height="22"></rect>
      <line x1="4" y1="4" x2="26" y2="26"></line>
      <line x1="26" y1="4" x2="4" y2="26"></line>
      <line x1="4" y1="11" x2="26" y2="11"></line>
      <line x1="4" y1="19" x2="26" y2="19"></line>
      <line x1="11" y1="4" x2="11" y2="26"></line>
      <line x1="19" y1="4" x2="19" y2="26"></line>
    </svg>
  );
  if (kind === 'memoria') return (
    <svg width="28" height="26" viewBox="0 0 32 30" fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round">
      <path d="M 4 8 Q 9 6, 16 8 Q 23 6, 28 8 L 28 24 Q 23 22, 16 24 Q 9 22, 4 24 Z"></path>
      <path d="M 16 8 L 16 24"></path>
      <path d="M 8 13 L 13 13"></path><path d="M 8 17 L 13 17"></path>
      <path d="M 19 13 L 24 13"></path><path d="M 19 17 L 24 17"></path>
    </svg>
  );
  if (kind === 'conta') return (
    <svg width="26" height="26" viewBox="0 0 30 30" fill="none" stroke={c} strokeWidth={sw} strokeLinejoin="round" strokeLinecap="round">
      <circle cx="15" cy="11" r="4.5"></circle>
      <path d="M 5 27 Q 10 18, 15 18 Q 20 18, 25 27"></path>
    </svg>
  );
  return null;
}

function PlayTriangle({ size = 22, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"><path d="M 5 3 L 21 12 L 5 21 Z" fill={color}></path></svg>
  );
}

function PauseGlyph({ size = 22, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <rect x="6" y="4" width="4" height="16"></rect>
      <rect x="14" y="4" width="4" height="16"></rect>
    </svg>
  );
}

function ChevronRight({ size = 14, color = '#2A1F1A', sw = 1.6 }) {
  return (
    <svg width={size} height={size * 1.4} viewBox="0 0 14 20" fill="none" stroke={color} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
      <path d="M 4 3 Q 10 10, 11 10 Q 10 10, 4 17"></path>
    </svg>
  );
}

// Audio waveform — sketchy bars
function Waveform({ bars = 28, height = 22, color = '#2A1F1A', progress = 0.32 }) {
  const cells = Array.from({ length: bars }).map((_, i) => {
    // pseudo random heights, deterministic by i
    const h = 0.35 + 0.65 * Math.abs(Math.sin(i * 1.61803 * 1.7) * Math.cos(i * 0.7));
    return h;
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 2.4, height }}>
      {cells.map((h, i) => (
        <div key={i} style={{
          width: 2.2, height: `${Math.max(8, h * height)}px`,
          background: i < bars * progress ? V2.terracotta : color,
          opacity: i < bars * progress ? 1 : 0.55,
          borderRadius: 1,
        }}></div>
      ))}
    </div>
  );
}

// Document/transcript glyph
function DocGlyph({ size = 32, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round">
      <path d="M 6 4 Q 15 3, 22 4 L 26 8 L 26 28 Q 16 27, 6 28 Z"></path>
      <path d="M 22 4 L 22 8 L 26 8"></path>
      <path d="M 10 14 Q 16 13, 22 14"></path>
      <path d="M 10 18 Q 16 17, 22 18"></path>
      <path d="M 10 22 Q 13 21, 16 22"></path>
    </svg>
  );
}

function Headphones({ size = 26, color = '#2A1F1A' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <path d="M 5 18 Q 4 8, 15 4 Q 26 8, 25 18"></path>
      <rect x="4" y="17" width="6" height="9" rx="1.4"></rect>
      <rect x="20" y="17" width="6" height="9" rx="1.4"></rect>
    </svg>
  );
}

function Sticker({ children, rotate = -4, color = V2.walnut, bg = V2.creamWarm, size = 11 }) {
  return (
    <span style={{
      display: 'inline-block',
      background: bg,
      border: `0.8px solid ${color}`,
      fontFamily: TYPE.mono, fontSize: size,
      letterSpacing: '0.18em', color,
      padding: '4px 9px',
      transform: `rotate(${rotate}deg)`,
      whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

Object.assign(window, {
  V2, TYPE, PAPER_GRID_BG, NOTEBOOK_BG,
  Squiggle, DashedPill, StarBig, StarSmall, MoonCutout, PalmLeaf, Lotus,
  SaturnSymbol, SouthChart, BellIcon, MenuIcon, BackArrow, NavSketch,
  PlayTriangle, PauseGlyph, ChevronRight, Waveform, DocGlyph, Headphones, Sticker,
});
