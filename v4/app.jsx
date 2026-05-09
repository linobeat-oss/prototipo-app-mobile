// VÉDICO — App shell: phone frame, router, bottom nav, mode selector

function PhoneV2({ children }) {
  return (
    <div style={{
      width: 390, height: 844, borderRadius: 48,
      background: '#0d0a09', padding: 12,
      boxShadow: '0 60px 120px -30px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)',
      position: 'relative',
    }}>
      <div style={{
        width: '100%', height: '100%', borderRadius: 38,
        overflow: 'hidden', background: V2.cream, position: 'relative',
      }}>
        {children}
        <div style={{
          position: 'absolute', top: 9, left: '50%', transform: 'translateX(-50%)',
          width: 110, height: 30, borderRadius: 20, background: '#0d0a09',
          zIndex: 100, pointerEvents: 'none',
        }}></div>
      </div>
    </div>
  );
}

function BottomNav({ tab, go }) {
  const tabs = [
    { kind: 'hoje', label: 'HOJE' },
    { kind: 'mapa', label: 'MAPA' },
    { kind: 'memoria', label: 'MEMÓRIA' },
    { kind: 'conta', label: 'CONTA' },
  ];
  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 40,
      background: V2.cream, borderTop: `0.8px solid ${V2.walnut}`,
      padding: '12px 6px 28px',
      display: 'flex', justifyContent: 'space-around',
    }}>
      {tabs.map((t) => {
        const active = tab === t.kind;
        return (
          <button key={t.kind} onClick={() => go(t.kind)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            gap: 4, padding: '4px 8px', minWidth: 56,
          }}>
            <NavSketch kind={t.kind} color={V2.walnut} active={active} />
            <span style={{
              fontFamily: TYPE.mono, fontSize: 9.5, fontWeight: 400,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: active ? V2.terracotta : V2.walnut,
            }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── DEMO ONLY: mode selector chip, top of phone screen ───────────
// In production this doesn't exist. It's a pitch tool to switch
// between Curioso / Praticante / Discípulo states in one build.
function ModeChip() {
  const { mode, setMode } = useMode();
  const cur = MODE_LABEL[mode];
  const dot = mode === 'curioso' ? V2.walnutSoft : (mode === 'praticante' ? V2.gold : V2.terracotta);
  const cycle = () => {
    const i = MODES.indexOf(mode);
    setMode(MODES[(i + 1) % MODES.length]);
  };
  return (
    <button onClick={cycle} title="cicla modo de demo" style={{
      position: 'absolute', top: 50, left: 14, zIndex: 90,
      background: V2.cream, color: V2.walnut,
      border: `0.8px dashed ${V2.walnut}`,
      padding: '4px 9px 4px 8px',
      display: 'inline-flex', alignItems: 'center', gap: 7,
      fontFamily: TYPE.mono, fontSize: 8.5, letterSpacing: '0.18em',
      cursor: 'pointer',
    }}>
      <span style={{
        width: 6, height: 6, borderRadius: 3, background: dot,
      }}></span>
      <span style={{ color: V2.walnutSoft }}>DEMO</span>
      <span style={{ color: V2.walnut, fontWeight: 700 }}>{cur}</span>
    </button>
  );
}

function App() {
  const [screen, setScreen] = React.useState('onboarding');
  const [animKey, setAnimKey] = React.useState(0);
  const [mode, setMode] = React.useState('curioso');
  const [agendarOpen, setAgendarOpen] = React.useState(false);

  const go = (next) => {
    if (next === screen) return;
    setScreen(next);
    setAnimKey(k => k + 1);
  };

  const openAgendar = () => setAgendarOpen(true);

  // "ver exemplo antes" link in Step1 → demo persona, skip to hoje as discípulo
  const enterAsExample = () => {
    setMode('discipulo');
    go('hoje');
  };

  const ctx = { mode, setMode, openAgendar, enterAsExample };

  const isTabbed = ['hoje', 'mapa', 'memoria', 'conta'].includes(screen);

  let Active;
  if (screen === 'onboarding') Active = <OnboardingFlow onDone={() => go('hoje')} onExample={enterAsExample} />;
  else if (screen === 'hoje') Active = <HojeScreen go={go} />;
  else if (screen === 'mapa') Active = <MapaScreen go={go} />;
  else if (screen === 'memoria') Active = <MemoriaScreen go={go} />;
  else if (screen === 'conta') Active = <ContaScreen go={go} />;
  else if (screen === 'sobre') Active = <SobreScreen go={go} />;

  return (
    <UserModeContext.Provider value={ctx}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 22 }}>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 13,
          letterSpacing: '0.32em', color: '#C7A974',
          textTransform: 'uppercase',
        }}>VÉDICO · PROTÓTIPO NAVEGÁVEL</div>

        <PhoneV2>
          <div key={animKey} style={{
            width: '100%', height: '100%', position: 'relative',
            animation: 'fadeIn 0.28s ease-out',
          }} data-screen-label={screen}>
            {Active}
            {isTabbed && <BottomNav tab={screen} go={go} />}
          </div>
          {/* Mode chip floats above the screen content (demo only). */}
          {isTabbed && <ModeChip />}
          {/* Agendar overlay — global, can pop from anywhere. */}
          {agendarOpen && <AgendarModal onClose={() => setAgendarOpen(false)} />}
        </PhoneV2>

        <div style={{ display: 'flex', gap: 10 }}>
          <button onClick={() => go('onboarding')} style={{
            background: 'none', border: `1px dashed #C7A97488`, color: '#C7A974',
            fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.18em',
            padding: '6px 12px', borderRadius: 14, cursor: 'pointer',
          }}>↻ ONBOARDING</button>
        </div>

        <div style={{
          maxWidth: 380, textAlign: 'center',
          fontFamily: TYPE.mono, fontSize: 11,
          color: '#C7A97499', lineHeight: 1.7, letterSpacing: '0.04em',
        }}>
          Toque o chip <span style={{ color: '#C7A974' }}>DEMO</span> no canto superior do app
          para alternar entre Curioso, Praticante e Discípulo.<br />
          O app cresce com a relação.
        </div>

        <style>{`
          @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
          @keyframes toastIn { from { transform: translateY(-12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        `}</style>
      </div>
    </UserModeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
