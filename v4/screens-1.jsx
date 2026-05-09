// VÉDICO — Hoje + Mapa with 3-mode awareness
// Voice in PT-BR. Soft Marcio CTAs only on hard transits. Recortes for discípulos.

function StatusBar() {
  const c = V2.walnut;
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 28px 0', height: 44,
      fontFamily: '-apple-system, system-ui',
      color: c, fontSize: 15, fontWeight: 600,
    }}>
      <span>9:41</span>
      <span style={{ width: 100 }}></span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <svg width="17" height="11" viewBox="0 0 17 11" fill={c}>
          <rect x="0" y="6" width="3" height="5" rx="0.5"></rect>
          <rect x="4.5" y="4" width="3" height="7" rx="0.5"></rect>
          <rect x="9" y="2" width="3" height="9" rx="0.5"></rect>
          <rect x="13.5" y="0" width="3" height="11" rx="0.5"></rect>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11" fill={c}>
          <path d="M7.5 3 C 9.5 3, 11.3 3.8, 12.6 5.1 L 13.6 4.1 C 11.9 2.5, 9.8 1.5, 7.5 1.5 C 5.2 1.5, 3.1 2.5, 1.4 4.1 L 2.4 5.1 C 3.7 3.8, 5.5 3, 7.5 3 Z"></path>
          <path d="M7.5 6 C 8.7 6, 9.7 6.5, 10.5 7.3 L 11.5 6.3 C 10.4 5.2, 9 4.5, 7.5 4.5 C 6 4.5, 4.6 5.2, 3.5 6.3 L 4.5 7.3 C 5.3 6.5, 6.3 6, 7.5 6 Z"></path>
          <circle cx="7.5" cy="9" r="1.3"></circle>
        </svg>
        <svg width="24" height="11" viewBox="0 0 24 11">
          <rect x="0.5" y="0.5" width="20" height="10" rx="2.5" stroke={c} fill="none" opacity="0.4"></rect>
          <rect x="2" y="2" width="17" height="7" rx="1.2" fill={c}></rect>
          <path d="M22 4 L22 7 Q 23 6.7, 23 5.5 Q 23 4.3, 22 4 Z" fill={c} opacity="0.5"></path>
        </svg>
      </div>
    </div>
  );
}

function ScreenHeader({ logo = true, title = '', leftIcon = null, onLeft = null }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '6px 22px 0', paddingLeft: leftIcon ? 22 : 110, // leave room for ModeChip
    }}>
      {leftIcon ? (
        <button onClick={onLeft} style={{
          background: 'none', border: 'none', padding: 6, marginLeft: -6,
          cursor: 'pointer', display: 'flex', alignItems: 'center',
        }}>{leftIcon}</button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 28,
            letterSpacing: '0.01em', color: V2.walnut, lineHeight: 1,
            textTransform: 'lowercase',
          }}>védico</span>
          <span style={{ marginLeft: 2, transform: 'translateY(-2px)', display: 'inline-block' }}>
            <StarSmall size={11} color={V2.walnut} stroke={1.6} />
          </span>
        </div>
      )}
      {title && (
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 18,
          letterSpacing: '0.18em', color: V2.walnut, textTransform: 'uppercase',
        }}>{title}</div>
      )}
      {!leftIcon ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <BellIcon /><MenuIcon />
        </div>
      ) : <div style={{ width: 32 }}></div>}
    </div>
  );
}

function SectionHeader({ title, squiggle = 180 }) {
  return (
    <div style={{ padding: '32px 22px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{
        fontFamily: TYPE.display, fontWeight: 800,
        fontSize: 22, letterSpacing: '0.16em',
        color: V2.walnut, textTransform: 'uppercase',
      }}>{title}</div>
      <div style={{ marginTop: 6 }}>
        <Squiggle width={squiggle} color={V2.walnut} stroke={2.2} amp={3.5} period={14} />
      </div>
    </div>
  );
}

// ─── Hoje hero (Saturno antardasha card) — used by Praticante + Discípulo
function HojeHeroSaturno({ mode, openAgendar }) {
  return (
    <article style={{
      background: V2.paper, borderRadius: 8, padding: 0,
      boxShadow: '0 1px 0 rgba(42,31,26,0.05), 0 24px 40px -28px rgba(42,31,26,0.25)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', height: 220, background: V2.paper,
        backgroundImage: NOTEBOOK_BG, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', left: 18, top: 16, width: 130, height: 188,
          transform: 'rotate(-3deg)',
          clipPath: 'polygon(2% 4%, 98% 0%, 100% 96%, 4% 100%)',
          boxShadow: '0 6px 14px -8px rgba(42,31,26,0.4)',
        }}>
          <img src="assets/pahari-krishna-radha.png" alt="" style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center 18%', display: 'block',
          }} />
        </div>
        <div style={{ position: 'absolute', right: 22, top: 8, transform: 'rotate(8deg)' }}>
          <StarBig size={86} fill={V2.walnut} halftone id="ht-hoje" />
        </div>
        <div style={{
          position: 'absolute', right: 30, bottom: 14,
          width: 60, height: 60, borderRadius: '50%',
          background: V2.creamWarm, border: `1.4px solid ${V2.walnut}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: 'rotate(-4deg)',
        }}><SaturnSymbol size={36} color={V2.walnut} /></div>
        <div style={{ position: 'absolute', left: 130, top: 6, transform: 'rotate(-18deg)' }}>
          <PalmLeaf size={120} color={V2.sage} />
        </div>
        <div style={{ position: 'absolute', left: 8, bottom: 16, transform: 'rotate(14deg)' }}>
          <MoonCutout size={56} color={V2.walnut} />
        </div>
        <div style={{ position: 'absolute', right: 14, top: 92 }}>
          <Sticker rotate={6}>ANTARDASHA</Sticker>
        </div>
      </div>

      <div style={{ padding: '20px 22px 22px', position: 'relative' }}>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 12, letterSpacing: '0.18em',
          color: V2.walnutSoft, marginBottom: 10,
        }}>5 MIN · 8 DE MAIO</div>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 28,
          letterSpacing: '0.005em', color: V2.walnut,
          textTransform: 'uppercase', lineHeight: 1.05,
        }}>SUB-PERÍODO<br />DE SATURNO</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 15, color: V2.walnutSoft,
          marginTop: 8, lineHeight: 1.4,
        }}>terceiro mês — desacelere devagar.</div>
        <div style={{ position: 'absolute', right: 22, bottom: 22 }}>
          <PlayTriangle size={26} color={V2.walnut} />
        </div>
      </div>

      {/* Recorte for discípulos — Márcio's voice, contextual to today */}
      {mode === 'discipulo' && (
        <div style={{ padding: '0 22px 16px' }}>
          <Recorte from="ABR/26">
            quando Saturno apertar, lembra: é uma poda, não um castigo.
          </Recorte>
        </div>
      )}

      {/* Soft Márcio CTA — Saturno is heavy. Always sits on this card. */}
      <div style={{
        borderTop: `0.6px dashed ${V2.walnut}55`,
        padding: '14px 22px 16px', background: V2.creamWarm,
        display: 'flex', alignItems: 'center', gap: 12,
        cursor: 'pointer',
      }} onClick={openAgendar}>
        <div style={{
          width: 36, height: 36, borderRadius: '50%',
          background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
          color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 18, fontWeight: 500,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>M</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 14.5, color: V2.walnut, lineHeight: 1.3,
          }}>“Esse é um trânsito delicado. Vale conversar.”</div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.16em',
            color: V2.walnutSoft, marginTop: 4,
          }}>{mode === 'discipulo' ? 'AGENDAR PRÓXIMA CONVERSA ›' : 'AGENDAR COM MÁRCIO ›'}</div>
        </div>
      </div>
    </article>
  );
}

// ─── HOJE ─────────────────────────────────────────────────────────
function HojeScreen({ go }) {
  const { mode, openAgendar } = useMode();
  const greeting = mode === 'curioso' ? 'oi, Beatriz' : 'Bom dia, Beatriz';

  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <ScreenHeader />

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 100 }}>
        {/* Greeting */}
        <div style={{ padding: '24px 22px 6px', textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontWeight: 500, fontSize: 30,
            color: V2.walnut, letterSpacing: '-0.005em', lineHeight: 1,
          }}>{greeting}</div>
        </div>

        {/* Discípulo: editorial post-consulta toast (most recent) */}
        {mode === 'discipulo' && <PostConsultaToast onOpen={() => go('memoria')} />}

        {/* Tab pill */}
        <div style={{ padding: '20px 22px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative', width: '100%', maxWidth: 320, height: 46,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: 4, boxSizing: 'border-box',
          }}>
            <DashedPill width={320} height={46} color={V2.walnut} stroke={1.3} dash="5 4" />
            {[
              { id: 'hoje', label: 'HOJE', active: true },
              { id: 'semana', label: 'SEMANA' },
              { id: 'ano', label: 'ANO' },
            ].map((t) => (
              <div key={t.id} style={{
                flex: 1, height: 38, borderRadius: 19,
                background: t.active ? V2.ink : 'transparent',
                color: t.active ? V2.cream : V2.walnut,
                fontFamily: TYPE.mono, fontSize: 12, fontWeight: 400,
                letterSpacing: '0.16em',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>{t.label}</div>
            ))}
          </div>
        </div>

        <SectionHeader title="SUA LEITURA DE HOJE" squiggle={180} />

        {/* Hero */}
        <div style={{ padding: '20px 22px 0' }}>
          {mode === 'curioso'
            ? <HojeHeroFree />
            : <HojeHeroSaturno mode={mode} openAgendar={openAgendar} />
          }
        </div>

        {/* Curioso: stop here, push to subscribe */}
        {mode === 'curioso' && (
          <div style={{ padding: '24px 22px 0' }}>
            <FreeFadeLockup />
          </div>
        )}

        {/* Praticante + Discípulo: 2-up grid (Lua + 2nd tile varies by mode) */}
        {mode !== 'curioso' && (
          <div style={{ padding: '20px 22px 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <LuaCard />
            {mode === 'discipulo'
              ? <ProximaConsultaCard onClick={() => go('memoria')} />
              : <PrimeiraConversaCard onClick={openAgendar} />
            }
          </div>
        )}

        {/* Praticante + Discípulo: rituais */}
        {mode !== 'curioso' && (
          <React.Fragment>
            <SectionHeader title="RITUAIS DE HOJE" squiggle={140} />
            <div style={{ padding: '18px 22px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { glyph: <Lotus size={50} color={V2.terracotta} />, label: 'MEDITAÇÃO', caption: '12 min · respiração lenta' },
                { glyph: <SouthChart size={42} color={V2.walnut} stroke={1.2} />, label: 'SEU MAPA', caption: 'Lua nakshatra: Pūrva Phalgunī', onClick: () => go('mapa') },
              ].map((r, i) => (
                <div key={i} onClick={r.onClick} style={{
                  background: V2.paper, borderRadius: 6, padding: '14px 18px',
                  boxShadow: '0 1px 0 rgba(42,31,26,0.04)',
                  border: `0.6px solid ${V2.walnutSoft}33`,
                  display: 'flex', alignItems: 'center', gap: 16,
                  cursor: r.onClick ? 'pointer' : 'default',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%',
                    background: V2.creamWarm, border: `1px dashed ${V2.walnut}66`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>{r.glyph}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: TYPE.display, fontWeight: 800, fontSize: 17,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: V2.walnut, lineHeight: 1.05,
                    }}>{r.label}</div>
                    <div style={{
                      fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.06em',
                      color: V2.walnutSoft, marginTop: 4,
                    }}>{r.caption}</div>
                  </div>
                  <PlayTriangle size={16} color={V2.walnut} />
                </div>
              ))}
            </div>
          </React.Fragment>
        )}

        {mode !== 'curioso' && (
          <div style={{ padding: '32px 22px 18px', textAlign: 'center' }}>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 14, color: V2.walnutSoft, opacity: 0.85,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ height: 0.5, width: 28, background: V2.walnutSoft, opacity: 0.5 }}></span>
              <span>com cuidado, Márcio</span>
              <span style={{ height: 0.5, width: 28, background: V2.walnutSoft, opacity: 0.5 }}></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Curioso hero — no Saturno depth, just Lua + tease of leitura ─────
function HojeHeroFree() {
  return (
    <article style={{
      background: V2.paper, borderRadius: 8, padding: 0,
      boxShadow: '0 1px 0 rgba(42,31,26,0.05), 0 18px 32px -24px rgba(42,31,26,0.22)',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'relative', height: 150, background: V2.paper,
        backgroundImage: NOTEBOOK_BG, overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', right: 22, top: 14, transform: 'rotate(8deg)' }}>
          <StarBig size={78} fill={V2.walnut} halftone id="ht-free" />
        </div>
        <div style={{ position: 'absolute', left: 26, top: 22, transform: 'rotate(-10deg)' }}>
          <MoonCutout size={70} color={V2.walnut} />
        </div>
        <div style={{ position: 'absolute', left: 110, top: 60 }}>
          <StarSmall size={11} color={V2.terracotta} stroke={1.2} />
        </div>
      </div>

      <div style={{ padding: '18px 22px 8px' }}>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 12, letterSpacing: '0.18em',
          color: V2.walnutSoft, marginBottom: 10,
        }}>UMA AMOSTRA · 8 DE MAIO</div>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 26,
          letterSpacing: '0.005em', color: V2.walnut,
          textTransform: 'uppercase', lineHeight: 1.05,
        }}>LUA EM LEÃO,<br />CRESCENTE</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 15.5, color: V2.walnut,
          marginTop: 12, lineHeight: 1.5,
        }}>
          a Lua passa pela casa de Leão hoje — uma luz quente, exposta. é dia de aparecer
          devagar, não de gritar.
        </div>
      </div>
    </article>
  );
}

// Free paywall — editorial fade, never a hard wall
function FreeFadeLockup() {
  const { setMode } = useMode();
  return (
    <div style={{
      position: 'relative', padding: '0 0 0 0',
      background: V2.paper,
      border: `0.6px solid ${V2.walnutSoft}33`,
      borderRadius: 6, overflow: 'hidden',
    }}>
      <div style={{
        padding: '18px 22px 70px',
        position: 'relative',
        maxHeight: 200, overflow: 'hidden',
      }}>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 15, color: V2.walnut, lineHeight: 1.55,
        }}>
          Mas Lua é só a superfície. Por baixo, você está no terceiro mês de um sub-período
          de Saturno — a chamada Antardasha. Saturno não é vilão; é o tempo lento que
          insiste em ser respeitado. No seu mapa, ele rege a Lagna —…
        </div>
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: 80,
          background: `linear-gradient(180deg, ${V2.paper}00 0%, ${V2.paper} 70%)`,
          pointerEvents: 'none',
        }}></div>
      </div>
      <div style={{
        padding: '14px 22px 18px', textAlign: 'center',
        borderTop: `0.6px dashed ${V2.walnut}55`,
        background: V2.creamWarm,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
          color: V2.walnutSoft, marginBottom: 10,
        }}><LockGlyph size={11} color={V2.walnutSoft} /> A LEITURA COMPLETA DO MÁRCIO</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 16, color: V2.walnut, lineHeight: 1.4, marginBottom: 14,
        }}>
          continua todos os dias para assinantes —<br />
          escrita por ele, em português.
        </div>
        <button onClick={() => setMode('praticante')} style={{
          background: V2.ink, color: V2.cream, border: 'none',
          padding: '12px 22px', borderRadius: 22,
          fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
          cursor: 'pointer',
        }}>ASSINAR O VÉDICO ›</button>
      </div>
    </div>
  );
}

function LuaCard() {
  return (
    <article style={{
      background: V2.paper, borderRadius: 6, padding: 14,
      boxShadow: '0 1px 0 rgba(42,31,26,0.04), 0 14px 22px -16px rgba(42,31,26,0.18)',
      position: 'relative', minHeight: 170, overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', right: -6, top: -8, transform: 'rotate(-12deg)' }}>
        <MoonCutout size={88} color={V2.walnut} />
      </div>
      <div style={{ position: 'absolute', left: 70, bottom: 64 }}>
        <StarSmall size={9} color={V2.terracotta} stroke={1.1} />
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14 }}>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 16,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: V2.walnut, lineHeight: 1.05, marginBottom: 4,
        }}>LUA DE HOJE</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
          fontSize: 16, color: V2.terracotta, lineHeight: 1.15,
        }}>Crescente em Leão</div>
      </div>
    </article>
  );
}

function ProximaConsultaCard({ onClick }) {
  return (
    <article onClick={onClick} style={{
      background: V2.paper, borderRadius: 6, padding: 14,
      boxShadow: '0 1px 0 rgba(42,31,26,0.04), 0 14px 22px -16px rgba(42,31,26,0.18)',
      position: 'relative', minHeight: 170, overflow: 'hidden',
      border: `0.8px solid ${V2.gold}`, cursor: 'pointer',
    }}>
      <div style={{
        position: 'absolute', right: -2, top: -4,
        width: 90, height: 90, borderRadius: '50%',
        background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
        border: `1.4px solid ${V2.walnut}`, transform: 'rotate(8deg)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em',
        boxShadow: '0 4px 10px -6px rgba(42,31,26,0.3)',
      }}>M</div>
      <div style={{ position: 'absolute', left: 14, top: 12 }}>
        <StarSmall size={11} color={V2.gold} stroke={1.2} />
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14 }}>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 16,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: V2.walnut, lineHeight: 1.05, marginBottom: 4,
        }}>PRÓXIMA<br />CONSULTA</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
          fontSize: 14, color: V2.walnutSoft, lineHeight: 1.2,
        }}>Márcio · 14 de maio</div>
      </div>
    </article>
  );
}

function PrimeiraConversaCard({ onClick }) {
  return (
    <article onClick={onClick} style={{
      background: V2.paper, borderRadius: 6, padding: 14,
      boxShadow: '0 1px 0 rgba(42,31,26,0.04), 0 14px 22px -16px rgba(42,31,26,0.18)',
      position: 'relative', minHeight: 170, overflow: 'hidden',
      border: `0.8px dashed ${V2.walnut}77`, cursor: 'pointer',
    }}>
      <div style={{ position: 'absolute', right: 14, top: 14, transform: 'rotate(6deg)' }}>
        <StarSmall size={14} color={V2.gold} stroke={1.4} />
      </div>
      <div style={{ position: 'absolute', left: 14, top: 14 }}>
        <CalendarGlyph size={22} color={V2.walnut} />
      </div>
      <div style={{ position: 'absolute', left: 14, right: 14, bottom: 14 }}>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 15,
          letterSpacing: '0.1em', textTransform: 'uppercase',
          color: V2.walnut, lineHeight: 1.05, marginBottom: 4,
        }}>QUANDO QUISER<br />CONVERSAR</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
          fontSize: 13.5, color: V2.walnutSoft, lineHeight: 1.25,
        }}>marcar com<br />Márcio →</div>
      </div>
    </article>
  );
}

// ─── Post-consulta editorial toast (Discípulo only) ───────────────
function PostConsultaToast({ onOpen }) {
  const [shown, setShown] = React.useState(true);
  if (!shown) return null;
  return (
    <div style={{
      margin: '14px 22px 0', padding: '12px 14px',
      background: V2.ink, color: V2.cream,
      borderRadius: 4, position: 'relative',
      animation: 'toastIn 0.5s ease-out',
      display: 'flex', alignItems: 'center', gap: 12,
      cursor: 'pointer',
    }} onClick={() => { onOpen(); setShown(false); }}>
      <div style={{ flexShrink: 0 }}>
        <StarSmall size={14} color={V2.gold} stroke={1.4} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 14, lineHeight: 1.35,
        }}>O Márcio acabou de te mandar a leitura.</div>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.18em',
          color: V2.gold, marginTop: 4,
        }}>ESTÁ NA MEMÓRIA, TE ESPERANDO ›</div>
      </div>
      <button onClick={(e) => { e.stopPropagation(); setShown(false); }} style={{
        background: 'none', border: 'none', color: V2.creamWarm, opacity: 0.6,
        fontSize: 18, cursor: 'pointer', padding: 4,
      }}>×</button>
    </div>
  );
}

// ─── MAPA ─────────────────────────────────────────────────────────
const RASHI = [
  { name: 'Meena',     short: 'Pi', r: 0, c: 0 },
  { name: 'Mesha',     short: 'Ar', r: 0, c: 1 },
  { name: 'Vrishabha', short: 'Ta', r: 0, c: 2 },
  { name: 'Mithuna',   short: 'Ge', r: 0, c: 3 },
  { name: 'Karka',     short: 'Cn', r: 1, c: 3 },
  { name: 'Simha',     short: 'Le', r: 2, c: 3 },
  { name: 'Kanya',     short: 'Vi', r: 3, c: 3 },
  { name: 'Tula',      short: 'Li', r: 3, c: 2 },
  { name: 'Vrischika', short: 'Sc', r: 3, c: 1 },
  { name: 'Dhanu',     short: 'Sg', r: 3, c: 0 },
  { name: 'Makara',    short: 'Cp', r: 2, c: 0 },
  { name: 'Kumbha',    short: 'Aq', r: 1, c: 0 },
];

const PLANETS_IN_HOUSE = {
  'Mesha': ['Su', 'Me'], 'Vrishabha': [], 'Mithuna': ['Ve'],
  'Karka': ['Ma'], 'Simha': ['Mo'], 'Kanya': [],
  'Tula': ['Ra'], 'Vrischika': [], 'Dhanu': ['Ju'],
  'Makara': ['Sa'], 'Kumbha': [], 'Meena': ['Ke'],
};

function MapaChart() {
  const cell = 70;
  const lagna = 'Makara';
  return (
    <div style={{
      position: 'relative', width: cell * 4, height: cell * 4,
      background: V2.paper, backgroundImage: NOTEBOOK_BG,
      border: `1.4px solid ${V2.walnut}`,
    }}>
      {RASHI.map((s) => {
        const planets = PLANETS_IN_HOUSE[s.name] || [];
        const isLagna = s.name === lagna;
        return (
          <div key={s.name} style={{
            position: 'absolute',
            left: s.c * cell, top: s.r * cell,
            width: cell, height: cell,
            borderRight: s.c < 3 ? `1px solid ${V2.walnut}` : 'none',
            borderBottom: s.r < 3 ? `1px solid ${V2.walnut}` : 'none',
            padding: 6, display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              fontFamily: TYPE.mono, fontSize: 8.5, letterSpacing: '0.12em',
              color: V2.walnutSoft, textTransform: 'uppercase',
            }}>{s.short}</div>
            <div style={{
              flex: 1, display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'center',
              fontFamily: TYPE.display, fontWeight: 800, fontSize: 14,
              color: planets.includes('Sa') ? V2.terracotta : V2.walnut,
              gap: 4, letterSpacing: '0.04em', lineHeight: 1,
            }}>
              {planets.map((p) => <span key={p}>{p}</span>)}
            </div>
            {isLagna && (
              <div style={{
                position: 'absolute', top: 4, right: 4,
                width: 9, height: 9, transform: 'rotate(45deg)',
                background: V2.terracotta,
              }}></div>
            )}
          </div>
        );
      })}
      <svg style={{ position: 'absolute', left: cell, top: cell, pointerEvents: 'none' }}
        width={cell * 2} height={cell * 2}>
        <line x1="0" y1="0" x2={cell * 2} y2={cell * 2} stroke={V2.walnut} strokeWidth="1" />
        <line x1={cell * 2} y1="0" x2="0" y2={cell * 2} stroke={V2.walnut} strokeWidth="1" />
      </svg>
      <div style={{
        position: 'absolute', left: cell, top: cell,
        width: cell * 2, height: cell * 2,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexDirection: 'column', gap: 2, pointerEvents: 'none',
      }}>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 14,
          letterSpacing: '0.18em', color: V2.walnut,
        }}>RĀSHI</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 13,
          color: V2.walnutSoft,
        }}>Lagna em Capricórnio</div>
      </div>
    </div>
  );
}

const DASHA = [
  { lord: 'KETU',  start: 1989, end: 1996, color: V2.walnutSoft },
  { lord: 'VENUS', start: 1996, end: 2016, color: V2.rose },
  { lord: 'SUN',   start: 2016, end: 2022, color: V2.gold },
  { lord: 'MOON',  start: 2022, end: 2032, color: V2.sage, current: true },
  { lord: 'MARS',  start: 2032, end: 2039, color: V2.terracotta },
  { lord: 'RAHU',  start: 2039, end: 2057, color: V2.walnut },
];

function DashaTimeline() {
  const total = DASHA[DASHA.length - 1].end - DASHA[0].start;
  const now = 2026;
  const nowFrac = (now - DASHA[0].start) / total;
  return (
    <div style={{ width: '100%' }}>
      <div style={{
        fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.16em',
        color: V2.walnutSoft, marginBottom: 8,
      }}>VIMSHOTTARI · MAHĀDASHĀ</div>
      <div style={{ position: 'relative', height: 56 }}>
        <div style={{
          position: 'absolute', top: 18, left: 0, right: 0, height: 22,
          display: 'flex', border: `1px solid ${V2.walnut}`,
          background: V2.paper,
        }}>
          {DASHA.map((d, i) => {
            const w = ((d.end - d.start) / total) * 100;
            return (
              <div key={d.lord} style={{
                width: `${w}%`, background: d.current ? V2.sage + 'CC' : 'transparent',
                borderRight: i < DASHA.length - 1 ? `1px solid ${V2.walnut}` : 'none',
                position: 'relative',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{
                  fontFamily: TYPE.mono, fontSize: 8.5, letterSpacing: '0.12em',
                  color: V2.walnut,
                }}>{d.lord.slice(0, 3)}</span>
              </div>
            );
          })}
        </div>
        <div style={{
          position: 'absolute', top: 4, left: `calc(${nowFrac * 100}% - 1px)`,
          width: 2, height: 50, background: V2.terracotta,
        }}></div>
        <div style={{
          position: 'absolute', top: 44, left: `calc(${nowFrac * 100}% - 14px)`,
          fontFamily: TYPE.mono, fontSize: 8.5, letterSpacing: '0.16em',
          color: V2.terracotta,
        }}>HOJE</div>
        <div style={{
          position: 'absolute', top: 0, left: 0,
          fontFamily: TYPE.mono, fontSize: 8.5, color: V2.walnutSoft,
        }}>{DASHA[0].start}</div>
        <div style={{
          position: 'absolute', top: 0, right: 0,
          fontFamily: TYPE.mono, fontSize: 8.5, color: V2.walnutSoft,
        }}>{DASHA[DASHA.length - 1].end}</div>
      </div>
    </div>
  );
}

function MapaScreen({ go }) {
  const { mode, openAgendar } = useMode();

  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <ScreenHeader />

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 100 }}>
        <div style={{ padding: '20px 22px 0', textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 24, color: V2.walnut, lineHeight: 1.1,
          }}>seu mapa,</div>
          <div style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 30,
            letterSpacing: '0.04em', color: V2.walnut, marginTop: 4,
          }}>BEATRIZ MORAIS</div>
          <div style={{ marginTop: 6, display: 'flex', justifyContent: 'center' }}>
            <Squiggle width={120} color={V2.walnut} stroke={1.8} amp={3} period={12} />
          </div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.18em',
            color: V2.walnutSoft, marginTop: 12,
          }}>14 ABR 1991 · 03:42 · SALVADOR/BA</div>
        </div>

        {/* Tab toggle */}
        <div style={{ padding: '20px 22px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'relative', width: 280, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: 3, boxSizing: 'border-box',
          }}>
            <DashedPill width={280} height={40} color={V2.walnut} stroke={1.2} dash="5 4" />
            {[
              { id: 'rashi', label: 'RĀSHI', active: true },
              { id: 'navamsha', label: 'NAVAMSHA', locked: mode === 'curioso' },
              { id: 'lua', label: 'LUA', locked: mode === 'curioso' },
            ].map((t) => (
              <div key={t.id} style={{
                flex: 1, height: 32, borderRadius: 16,
                background: t.active ? V2.ink : 'transparent',
                color: t.active ? V2.cream : (t.locked ? V2.walnutSoft : V2.walnut),
                fontFamily: TYPE.mono, fontSize: 10.5,
                fontWeight: 400, letterSpacing: '0.18em',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>{t.locked && <LockGlyph size={9} color={V2.walnutSoft} />}{t.label}</div>
            ))}
          </div>
        </div>

        {/* Chart */}
        <div style={{ padding: '24px 22px 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            transform: 'rotate(-1deg)',
            boxShadow: '0 18px 30px -22px rgba(42,31,26,0.4)',
          }}>
            <MapaChart />
          </div>
        </div>

        {/* Glossary */}
        <div style={{
          padding: '18px 22px 0', display: 'flex',
          gap: 8, flexWrap: 'wrap', justifyContent: 'center',
        }}>
          {[
            ['Su', 'Sol'], ['Mo', 'Lua'], ['Ma', 'Marte'], ['Me', 'Mercúrio'],
            ['Ju', 'Júpiter'], ['Ve', 'Vênus'], ['Sa', 'Saturno'], ['Ra', 'Rāhu'], ['Ke', 'Ketu'],
          ].map(([k, v]) => (
            <div key={k} style={{
              fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.1em',
              color: V2.walnutSoft, padding: '3px 7px',
              border: `0.6px solid ${V2.walnut}55`, borderRadius: 9,
              background: V2.paper,
            }}>
              <span style={{ color: V2.walnut, fontWeight: 700 }}>{k}</span> {v}
            </div>
          ))}
        </div>

        {mode === 'curioso' ? (
          <div style={{ padding: '28px 22px 0' }}>
            <FreeMapaLockup />
          </div>
        ) : (
          <React.Fragment>
            <SectionHeader title="MAHĀDASHĀ" squiggle={120} />
            <div style={{ padding: '18px 22px 0' }}>
              <article style={{
                background: V2.paper, borderRadius: 6,
                padding: '18px 18px 22px',
                boxShadow: '0 1px 0 rgba(42,31,26,0.04)',
                border: `0.6px solid ${V2.walnutSoft}33`,
              }}>
                <DashaTimeline />
                <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: 4, background: V2.sage,
                  }}></div>
                  <div style={{
                    fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.1em',
                    color: V2.walnutSoft,
                  }}>VOCÊ ESTÁ EM <span style={{ color: V2.walnut }}>MAHĀDASHĀ DA LUA</span> · 6 anos restantes</div>
                </div>
                <div style={{
                  marginTop: 12,
                  fontFamily: TYPE.italic, fontStyle: 'italic',
                  fontSize: 14, color: V2.walnut, lineHeight: 1.45,
                }}>
                  Período de Lua é doce, mutável, ligado à mãe e à memória. Dentro dele, agora,
                  o sub-período é de Saturno — ele pesa um pouco a luz lunar.
                </div>

                {/* Discípulo: Márcio's marginalia on this period */}
                {mode === 'discipulo' && (
                  <div style={{ marginTop: 14 }}>
                    <Recorte from="JUN/25 · 1ª LEITURA" compact>
                      a Lua aqui é o coração da sua vida emocional — toda mudança que você
                      sente forte, passa por ela.
                    </Recorte>
                  </div>
                )}
              </article>
            </div>

            <SectionHeader title="TRÂNSITOS DE HOJE" squiggle={140} />
            <div style={{ padding: '18px 22px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { p: 'Saturno', sign: 'Aquário', house: '2ª casa', note: 'sobre fala e família', sw: V2.terracotta,
                  recorte: mode === 'discipulo' ? 'no terceiro mês ele aperta. depois, ensina.' : null,
                  recorteFrom: 'ABR/26' },
                { p: 'Júpiter', sign: 'Touro',   house: '5ª casa', note: 'sobre criação e filhos',  sw: V2.sage,
                  recorte: mode === 'discipulo' ? 'Júpiter na 5ª chega devagar — é uma bênção que pede paciência.' : null,
                  recorteFrom: 'SET/25' },
                { p: 'Marte',   sign: 'Câncer',  house: '7ª casa', note: 'sobre vínculos',          sw: V2.rose, recorte: null },
              ].map((t) => (
                <div key={t.p} style={{
                  background: V2.paper, borderRadius: 6, padding: '14px 18px',
                  border: `0.6px solid ${V2.walnutSoft}33`,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      border: `1.2px dashed ${V2.walnut}77`, background: V2.creamWarm,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: TYPE.display, fontWeight: 800, fontSize: 14,
                      color: t.sw, letterSpacing: '0.04em',
                    }}>{t.p.slice(0, 2).toUpperCase()}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        fontFamily: TYPE.display, fontWeight: 800, fontSize: 15,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: V2.walnut, lineHeight: 1.05,
                      }}>{t.p} EM {t.sign.toUpperCase()}</div>
                      <div style={{
                        fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.06em',
                        color: V2.walnutSoft, marginTop: 3,
                      }}>{t.house.toUpperCase()} · {t.note}</div>
                    </div>
                    <ChevronRight color={V2.walnut} />
                  </div>
                  {t.recorte && (
                    <div style={{ marginTop: 12 }}>
                      <Recorte from={t.recorteFrom} compact>{t.recorte}</Recorte>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA at end of mapa — only for praticante (discipulo already has the recortes) */}
            {mode === 'praticante' && (
              <div style={{ padding: '24px 22px 0' }}>
                <div onClick={openAgendar} style={{
                  position: 'relative', padding: '18px 18px 18px 64px',
                  background: V2.creamWarm, borderRadius: 6,
                  border: `0.8px solid ${V2.gold}`, cursor: 'pointer',
                }}>
                  <div style={{
                    position: 'absolute', left: 14, top: 14,
                    width: 36, height: 36, borderRadius: '50%',
                    background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
                    color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
                    fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>M</div>
                  <div style={{
                    fontFamily: TYPE.italic, fontStyle: 'italic',
                    fontSize: 14.5, color: V2.walnut, lineHeight: 1.35,
                  }}>“Mapa é só a partitura. A leitura é o que conversamos.”</div>
                  <div style={{
                    fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.16em',
                    color: V2.walnutSoft, marginTop: 6,
                  }}>AGENDAR LEITURA COMPLETA ›</div>
                </div>
              </div>
            )}
          </React.Fragment>
        )}

        <div style={{ height: 30 }}></div>
      </div>
    </div>
  );
}

function FreeMapaLockup() {
  const { setMode } = useMode();
  return (
    <div style={{
      background: V2.paper, borderRadius: 6,
      border: `0.6px solid ${V2.walnutSoft}33`, overflow: 'hidden',
    }}>
      <div style={{
        padding: '18px 22px 14px',
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 15, color: V2.walnut, lineHeight: 1.5,
      }}>
        seu Lagna é Capricórnio — Saturno como senhor da casa um. tudo que você é começa
        no tempo lento.
      </div>
      <div style={{
        padding: '14px 22px 18px', textAlign: 'center',
        borderTop: `0.6px dashed ${V2.walnut}55`,
        background: V2.creamWarm,
      }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
          color: V2.walnutSoft, marginBottom: 10,
        }}><LockGlyph size={11} color={V2.walnutSoft} /> DASHA, TRÂNSITOS &amp; LEITURA</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 15, color: V2.walnut, lineHeight: 1.4, marginBottom: 14,
        }}>
          o mapa inteiro, com o Vimshottari Dasha<br />e os trânsitos do dia, é parte do védico.
        </div>
        <button onClick={() => setMode('praticante')} style={{
          background: V2.ink, color: V2.cream, border: 'none',
          padding: '12px 22px', borderRadius: 22,
          fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
          cursor: 'pointer',
        }}>ASSINAR O VÉDICO ›</button>
      </div>
    </div>
  );
}

Object.assign(window, { HojeScreen, MapaScreen, StatusBar, ScreenHeader, SectionHeader });
