// VÉDICO — Memória, Conta, Onboarding, Sobre

// ─── MEMÓRIA ───────────────────────────────────────────────────────
const CONSULTAS = [
  {
    id: 'c-2026-04-12',
    date: '12 ABR 2026', dateLong: '12 de abril, 2026',
    title: 'O TERCEIRO SATURNO',
    blurb: 'sobre amadurecer sem endurecer · 1h12',
    excerpt: 'Você está entrando no terceiro mês do sub-período de Saturno. Não é castigo — é o tempo lento que insiste em ser respeitado. Sade Sati ainda não, mas a vibração já chega.',
    transcript: true, audio: true, doc: true,
    tags: ['Antardasha', 'Saturno', 'Sade Sati'],
    audioLen: '1h 12min',
  },
  {
    id: 'c-2025-12-08',
    date: '08 DEZ 2025', dateLong: '8 de dezembro, 2025',
    title: 'LUA NOVA EM ESCORPIÃO',
    blurb: 'sobre o que afunda para crescer · 58min',
    excerpt: 'A Lua nova em Vrischika pede silêncio. Não é hora de iniciar nada visível — é hora de descer.',
    transcript: true, audio: true, doc: false,
    tags: ['Lua nova', 'Escorpião'],
    audioLen: '58min',
  },
  {
    id: 'c-2025-09-21',
    date: '21 SET 2025', dateLong: '21 de setembro, 2025',
    title: 'A VOLTA DE JÚPITER',
    blurb: 'expansão chegando, mas com paciência · 1h05',
    excerpt: 'Júpiter retorna ao seu lugar natal — uma bênção lenta. Os próximos 12 meses pedem que você se mostre.',
    transcript: true, audio: true, doc: true,
    tags: ['Jupiter return', 'Mahādashā'],
    audioLen: '1h 05min',
  },
  {
    id: 'c-2025-06-04',
    date: '04 JUN 2025', dateLong: '4 de junho, 2025',
    title: 'PRIMEIRA LEITURA',
    blurb: 'mapa natal completo · 1h48',
    excerpt: 'Lagna em Capricórnio: você nasceu pronta para construir. Saturno como senhor da casa um — toda lentidão sua é estrutural.',
    transcript: true, audio: true, doc: true,
    tags: ['Mapa natal', 'Lagna'],
    audioLen: '1h 48min',
  },
];

function MemoriaScreen({ go }) {
  const [openId, setOpenId] = React.useState(null);
  const open = CONSULTAS.find(c => c.id === openId);

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
        {/* Editorial header */}
        <div style={{ padding: '24px 22px 0', textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 26, color: V2.walnut, lineHeight: 1.05,
          }}>a memória da sua</div>
          <div style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 40,
            letterSpacing: '0.04em', color: V2.walnut, marginTop: 0,
            lineHeight: 1,
          }}>JORNADA</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 18, color: V2.walnut, lineHeight: 1.05, marginTop: 4,
          }}>com Márcio.</div>
          <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
            <Squiggle width={140} color={V2.walnut} stroke={1.8} amp={3} period={12} />
          </div>
        </div>

        {/* Stats row */}
        <div style={{
          padding: '20px 22px 0', display: 'flex',
          justifyContent: 'space-around', textAlign: 'center',
        }}>
          {[
            { n: '04', l: 'CONSULTAS' },
            { n: '4h 03', l: 'GRAVADAS' },
            { n: '11', l: 'MESES' },
          ].map((s) => (
            <div key={s.l}>
              <div style={{
                fontFamily: TYPE.display, fontWeight: 800, fontSize: 28,
                color: V2.walnut, letterSpacing: '0.02em', lineHeight: 1,
              }}>{s.n}</div>
              <div style={{
                fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.18em',
                color: V2.walnutSoft, marginTop: 4,
              }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Filter pills */}
        <div style={{
          padding: '20px 22px 0', display: 'flex', gap: 8, overflowX: 'auto',
        }}>
          {['TODAS', 'COM ÁUDIO', 'COM .DOCX', 'SADE SATI', 'LUA'].map((f, i) => (
            <div key={f} style={{
              flexShrink: 0,
              fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.16em',
              color: i === 0 ? V2.cream : V2.walnut,
              background: i === 0 ? V2.ink : 'transparent',
              border: `1px ${i === 0 ? 'solid' : 'dashed'} ${V2.walnut}`,
              padding: '6px 12px', borderRadius: 14,
            }}>{f}</div>
          ))}
        </div>

        {/* Timeline list */}
        <div style={{
          padding: '24px 22px 0', position: 'relative',
        }}>
          {/* vertical thread */}
          <div style={{
            position: 'absolute', left: 36, top: 30, bottom: 14,
            width: 0, borderLeft: `1px dashed ${V2.walnut}66`,
          }}></div>

          {CONSULTAS.map((c, i) => (
            <div key={c.id} onClick={() => setOpenId(c.id)} style={{
              position: 'relative', paddingLeft: 36, marginBottom: 18,
              cursor: 'pointer',
            }}>
              {/* Node */}
              <div style={{
                position: 'absolute', left: 28, top: 22,
                width: 16, height: 16, transform: 'rotate(45deg)',
                background: i === 0 ? V2.terracotta : V2.creamWarm,
                border: `1.4px solid ${V2.walnut}`,
                zIndex: 2,
              }}></div>

              <article style={{
                background: V2.paper, borderRadius: 6,
                padding: '14px 16px 16px',
                border: `0.6px solid ${V2.walnutSoft}33`,
                boxShadow: i === 0
                  ? '0 1px 0 rgba(42,31,26,0.04), 0 18px 28px -22px rgba(42,31,26,0.3)'
                  : '0 1px 0 rgba(42,31,26,0.04)',
                marginLeft: 4,
                transform: i % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.3deg)',
              }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', gap: 10,
                }}>
                  <div style={{
                    fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.2em',
                    color: V2.walnutSoft,
                  }}>{c.date}</div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {c.audio && <Headphones size={16} color={V2.walnut} />}
                    {c.doc && <DocGlyph size={16} color={V2.walnut} />}
                  </div>
                </div>

                <div style={{
                  fontFamily: TYPE.display, fontWeight: 800, fontSize: 21,
                  letterSpacing: '0.04em', color: V2.walnut,
                  textTransform: 'uppercase', lineHeight: 1.05, marginTop: 6,
                }}>{c.title}</div>

                <div style={{
                  fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 14,
                  color: V2.walnutSoft, marginTop: 6, lineHeight: 1.3,
                }}>{c.blurb}</div>

                {/* Pull-quote — only on most recent */}
                {i === 0 && (
                  <div style={{
                    marginTop: 12, padding: '10px 12px',
                    borderLeft: `2px solid ${V2.terracotta}`,
                    background: V2.creamWarm,
                    fontFamily: TYPE.italic, fontStyle: 'italic',
                    fontSize: 13, color: V2.walnut, lineHeight: 1.4,
                  }}>“{c.excerpt}”</div>
                )}

                {/* tags */}
                <div style={{
                  marginTop: 10, display: 'flex', gap: 6, flexWrap: 'wrap',
                }}>
                  {c.tags.map((t) => (
                    <span key={t} style={{
                      fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.14em',
                      color: V2.walnutSoft, padding: '2px 7px',
                      background: V2.cream,
                      border: `0.6px solid ${V2.walnut}33`,
                      textTransform: 'uppercase',
                    }}>{t}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}

          {/* Beginning marker */}
          <div style={{
            paddingLeft: 36, marginTop: 6,
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute', left: 28, top: 6,
              width: 16, height: 16, borderRadius: '50%',
              border: `1.2px solid ${V2.walnut}`,
              background: V2.cream, zIndex: 2,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}><StarSmall size={10} color={V2.walnut} stroke={1.2} /></div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 14, color: V2.walnutSoft, lineHeight: 1.3,
            }}>aqui começa a sua jornada com Márcio.</div>
          </div>
        </div>

        <div style={{ height: 24 }}></div>
      </div>

      {/* Detail overlay */}
      {open && <ConsultaDetail c={open} onClose={() => setOpenId(null)} />}
    </div>
  );
}

function ConsultaDetail({ c, onClose }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 50,
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      display: 'flex', flexDirection: 'column',
      animation: 'slideUp 0.32s ease-out',
    }}>
      <StatusBar />
      <ScreenHeader leftIcon={<BackArrow />} onLeft={onClose} title="" />
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 22px 40px' }}>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.22em',
          color: V2.walnutSoft,
        }}>{c.dateLong.toUpperCase()}</div>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 32,
          letterSpacing: '0.02em', color: V2.walnut,
          textTransform: 'uppercase', lineHeight: 1.02, marginTop: 4,
        }}>{c.title}</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 17, color: V2.walnutSoft, marginTop: 6,
        }}>{c.blurb}</div>

        {/* Player card */}
        <article style={{
          marginTop: 22, background: V2.paper, borderRadius: 6,
          padding: '18px 18px 16px',
          border: `0.6px solid ${V2.walnutSoft}33`,
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', right: 14, top: -10,
          }}><Sticker rotate={4} size={9}>ÁUDIO · {c.audioLen.toUpperCase()}</Sticker></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <button onClick={() => setPlaying(!playing)} style={{
              width: 54, height: 54, borderRadius: '50%',
              background: V2.ink, border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {playing ? <PauseGlyph size={20} color={V2.cream} /> : <PlayTriangle size={22} color={V2.cream} />}
            </button>
            <div style={{ flex: 1, minWidth: 0 }}>
              <Waveform bars={26} height={28} color={V2.walnut} progress={playing ? 0.42 : 0.32} />
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.12em',
                color: V2.walnutSoft, marginTop: 6,
              }}>
                <span>{playing ? '00:31:14' : '00:23:08'}</span>
                <span>{c.audioLen.replace(' ', '').replace('min', ':00').replace('h', ':')}</span>
              </div>
            </div>
          </div>
        </article>

        {/* Transcript pull-quote */}
        <div style={{
          marginTop: 24,
          fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.22em',
          color: V2.walnutSoft,
        }}>TRECHO DA TRANSCRIÇÃO</div>
        <div style={{
          marginTop: 8, padding: '14px 16px',
          borderLeft: `2px solid ${V2.terracotta}`,
          background: V2.paper,
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 16, color: V2.walnut, lineHeight: 1.5,
        }}>
          “{c.excerpt}”
        </div>

        {/* Section list */}
        <div style={{
          marginTop: 26,
          fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.22em',
          color: V2.walnutSoft,
        }}>CAPÍTULOS DA CONSULTA</div>
        <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {[
            ['00:00', 'Abertura'],
            ['08:14', 'O peso de Saturno'],
            ['23:00', 'Antardasha — o terceiro mês'],
            ['41:30', 'O que cuidar no corpo'],
            ['58:12', 'Despedida'],
          ].map(([t, label], i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, alignItems: 'baseline',
              padding: '10px 0',
              borderBottom: `0.6px dashed ${V2.walnut}33`,
            }}>
              <div style={{
                fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.12em',
                color: V2.walnutSoft, width: 44,
              }}>{t}</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic',
                fontSize: 15, color: V2.walnut, flex: 1,
              }}>{label}</div>
              <PlayTriangle size={11} color={V2.walnut} />
            </div>
          ))}
        </div>

        {/* Doc link */}
        {c.doc && (
          <div style={{
            marginTop: 22, padding: '14px 16px',
            background: V2.paper, border: `0.6px solid ${V2.walnutSoft}33`,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <DocGlyph size={28} color={V2.walnut} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: TYPE.display, fontWeight: 800, fontSize: 13,
                letterSpacing: '0.12em', color: V2.walnut,
                textTransform: 'uppercase',
              }}>INTERPRETAÇÃO ESCRITA</div>
              <div style={{
                fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.06em',
                color: V2.walnutSoft, marginTop: 2,
              }}>marcio_{c.id}.docx · 7 páginas</div>
            </div>
            <ChevronRight color={V2.walnut} />
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      `}</style>
    </div>
  );
}

// ─── CONTA ─────────────────────────────────────────────────────────
function ContaScreen({ go }) {
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
        {/* Identity card */}
        <div style={{ padding: '20px 22px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 84, height: 84, borderRadius: '50%',
            background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
            border: `1.4px solid ${V2.walnut}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 36, fontWeight: 500, transform: 'rotate(-4deg)',
            flexShrink: 0,
          }}>B</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: TYPE.display, fontWeight: 800, fontSize: 22,
              letterSpacing: '0.04em', color: V2.walnut, lineHeight: 1.05,
            }}>BEATRIZ MORAIS</div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 14,
              color: V2.walnutSoft, marginTop: 4,
            }}>Lagna em Capricórnio · Lua em Leão</div>
            <div style={{
              fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.14em',
              color: V2.walnutSoft, marginTop: 4,
            }}>14 ABR 1991 · SALVADOR/BA</div>
          </div>
        </div>

        {/* Subscription card */}
        <div style={{ padding: '20px 22px 0' }}>
          <article style={{
            background: V2.paper, borderRadius: 6,
            padding: '18px 18px 18px',
            border: `0.8px solid ${V2.gold}`,
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', right: -12, top: -16, transform: 'rotate(8deg)',
            }}><StarBig size={70} fill={V2.gold} halftone id="ht-conta" /></div>

            <div style={{
              fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
              color: V2.gold,
            }}>ASSINATURA</div>
            <div style={{
              fontFamily: TYPE.display, fontWeight: 800, fontSize: 24,
              letterSpacing: '0.02em', color: V2.walnut, marginTop: 4,
              textTransform: 'uppercase',
            }}>VÉDICO ANUAL</div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 14,
              color: V2.walnutSoft, marginTop: 4, lineHeight: 1.3,
            }}>renova em 14 de outubro · inclui 4 consultas/ano com Márcio</div>

            <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 4 }}>
              <span style={{
                fontFamily: TYPE.display, fontWeight: 800, fontSize: 24,
                color: V2.walnut,
              }}>2/4</span>
              <span style={{
                fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.14em',
                color: V2.walnutSoft,
              }}>CONSULTAS USADAS</span>
            </div>
            <div style={{
              marginTop: 8, height: 8, background: V2.creamWarm,
              border: `0.8px solid ${V2.walnut}`,
              display: 'flex',
            }}>
              <div style={{ flex: 1, background: V2.terracotta }}></div>
              <div style={{ flex: 1, background: V2.terracotta }}></div>
              <div style={{ flex: 1, background: 'transparent', borderLeft: `0.8px solid ${V2.walnut}` }}></div>
              <div style={{ flex: 1, background: 'transparent', borderLeft: `0.8px solid ${V2.walnut}` }}></div>
            </div>
          </article>
        </div>

        {/* Schedule with Marcio — primary action */}
        <div style={{ padding: '18px 22px 0' }}>
          <button style={{
            width: '100%', padding: '18px 16px',
            background: V2.ink, color: V2.cream, border: 'none',
            borderRadius: 6, cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: 14,
            textAlign: 'left',
          }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
              border: `1.2px solid ${V2.cream}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 22,
            }}>M</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: TYPE.display, fontWeight: 800, fontSize: 17,
                letterSpacing: '0.12em', color: V2.cream,
                textTransform: 'uppercase', lineHeight: 1.05,
              }}>AGENDAR COM MÁRCIO</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 13,
                color: V2.creamWarm, opacity: 0.8, marginTop: 3,
              }}>próximo horário disponível: ter, 14 de maio</div>
            </div>
            <ChevronRight color={V2.cream} />
          </button>
        </div>

        <SectionHeader title="AJUSTES" squiggle={120} />

        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column' }}>
          {[
            { label: 'DADOS DE NASCIMENTO',  hint: 'data, hora, lugar' },
            { label: 'NOTIFICAÇÕES',        hint: 'leitura diária · trânsitos delicados' },
            { label: 'PREFERÊNCIAS DE LEITURA', hint: 'profundidade · vocabulário sânscrito' },
            { label: 'PRIVACIDADE DA MEMÓRIA', hint: 'acesso a transcrições e áudios' },
            { label: 'SOBRE O VÉDICO',      hint: 'o que é · o que não é', onClick: () => go('sobre') },
          ].map((row, i) => (
            <div key={row.label} onClick={row.onClick} style={{
              padding: '14px 0', display: 'flex', alignItems: 'center', gap: 12,
              borderBottom: `0.6px dashed ${V2.walnut}33`,
              cursor: row.onClick ? 'pointer' : 'default',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: TYPE.display, fontWeight: 800, fontSize: 14,
                  letterSpacing: '0.14em', color: V2.walnut,
                  textTransform: 'uppercase', lineHeight: 1.05,
                }}>{row.label}</div>
                <div style={{
                  fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.06em',
                  color: V2.walnutSoft, marginTop: 4,
                }}>{row.hint}</div>
              </div>
              <ChevronRight color={V2.walnut} />
            </div>
          ))}
        </div>

        <div style={{ padding: '24px 22px 18px', textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 12.5, color: V2.walnutSoft, opacity: 0.85,
          }}>védico · v 2.0 · feito devagar</div>
        </div>
      </div>
    </div>
  );
}

// ─── SOBRE O VÉDICO ────────────────────────────────────────────────
function SobreScreen({ go }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <ScreenHeader leftIcon={<BackArrow />} onLeft={() => go('conta')} title="" />
      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '8px 24px 40px' }}>

        <div style={{ textAlign: 'center', paddingTop: 12 }}>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.32em',
            color: V2.walnutSoft,
          }}>UM PEQUENO MANIFESTO</div>
          <div style={{ marginTop: 6, display: 'flex', justifyContent: 'center' }}>
            <StarBig size={70} fill={V2.walnut} halftone id="ht-sobre" />
          </div>
          <div style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 38,
            letterSpacing: '0.06em', color: V2.walnut, marginTop: 14,
            lineHeight: 1,
          }}>O QUE É<br />O VÉDICO</div>
          <div style={{ marginTop: 10, display: 'flex', justifyContent: 'center' }}>
            <Squiggle width={120} color={V2.walnut} stroke={1.8} amp={3} period={12} />
          </div>
        </div>

        {/* Manifesto body */}
        <div style={{
          marginTop: 28,
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 18, color: V2.walnut, lineHeight: 1.55,
        }}>
          VÉDICO é a memória da sua jornada védica com Márcio. Não substitui sua consulta — dá escala.
        </div>

        <div style={{ margin: '22px 0', display: 'flex', justifyContent: 'center' }}>
          <Squiggle width={80} color={V2.walnutSoft} stroke={1.4} amp={2.6} period={10} />
        </div>

        <div style={{
          fontFamily: TYPE.mono, fontSize: 12.5, color: V2.walnut,
          letterSpacing: '0.02em', lineHeight: 1.7,
        }}>
          O que é <span style={{ color: V2.terracotta }}>software</span> — cálculo de mapa,
          trânsitos, períodos de Vimshottari Dasha, Antardasha — o app cuida.
          <br /><br />
          O que é <span style={{ color: V2.terracotta }}>voz</span> — interpretação,
          escuta, o jeito do Márcio dizer as coisas — só ele faz.
          <br /><br />
          Quando o trânsito é delicado, o app não tenta consolar você sozinho. Ele te lembra que existe alguém esperando do outro lado.
        </div>

        {/* What it isn't */}
        <div style={{
          marginTop: 28, padding: '18px 18px 18px',
          background: V2.paper, borderRadius: 6,
          border: `0.8px dashed ${V2.walnut}77`,
        }}>
          <div style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 16,
            letterSpacing: '0.18em', color: V2.walnut,
            textTransform: 'uppercase',
          }}>O QUE O VÉDICO NÃO É</div>
          <ul style={{
            listStyle: 'none', padding: 0, margin: '14px 0 0 0',
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 15, color: V2.walnutSoft, lineHeight: 1.5,
          }}>
            {[
              'um astrólogo de inteligência artificial.',
              'um marketplace de horas a R$/min.',
              'um chat para perguntar “quando vou casar”.',
              'urgência. nunca urgência.',
            ].map((t) => (
              <li key={t} style={{
                paddingLeft: 22, position: 'relative', marginTop: 8,
              }}>
                <span style={{
                  position: 'absolute', left: 2, top: 2,
                  fontFamily: TYPE.display, fontWeight: 800,
                  color: V2.terracotta,
                }}>×</span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Sign */}
        <div style={{ marginTop: 28, textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 15, color: V2.walnutSoft, lineHeight: 1.4,
          }}>com cuidado e sem pressa,</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 26, color: V2.walnut, marginTop: 4,
          }}>Márcio</div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.22em',
            color: V2.walnutSoft, marginTop: 6,
          }}>SALVADOR · 2026</div>
        </div>
      </div>
    </div>
  );
}

// ─── ONBOARDING ────────────────────────────────────────────────────
function OnboardingFlow({ onDone }) {
  const [step, setStep] = React.useState(0);
  const total = 3;

  const Steps = [Step1, Step2, Step3];
  const Cur = Steps[step];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <div style={{
        position: 'absolute', top: 56, right: 22,
        fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
        color: V2.walnutSoft, cursor: 'pointer',
      }} onClick={onDone}>PULAR ›</div>

      {/* progress dots */}
      <div style={{
        padding: '24px 0 0', display: 'flex',
        justifyContent: 'center', gap: 8,
      }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{
            width: i === step ? 22 : 7, height: 7,
            background: i === step ? V2.ink : (i < step ? V2.terracotta : V2.walnut + '33'),
            border: i === step ? 'none' : `0.6px solid ${V2.walnut}`,
            transition: 'width 0.32s',
          }}></div>
        ))}
      </div>

      <Cur />

      <div style={{
        padding: '18px 22px 26px',
        display: 'flex', gap: 12, alignItems: 'center',
      }}>
        {step > 0 && (
          <button onClick={() => setStep(step - 1)} style={{
            background: 'none', border: `1px dashed ${V2.walnut}`,
            padding: '14px 18px', borderRadius: 24,
            fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.18em',
            color: V2.walnut, cursor: 'pointer',
          }}>‹ VOLTAR</button>
        )}
        <button onClick={() => step < total - 1 ? setStep(step + 1) : onDone()} style={{
          flex: 1, background: V2.ink, color: V2.cream,
          border: 'none', padding: '16px 22px', borderRadius: 28,
          fontFamily: TYPE.mono, fontSize: 12, letterSpacing: '0.22em',
          cursor: 'pointer',
        }}>{step < total - 1 ? 'CONTINUAR ›' : 'ENTRAR NO VÉDICO ›'}</button>
      </div>
    </div>
  );
}

function Step1() {
  return (
    <div style={{ flex: 1, padding: '32px 28px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <StarBig size={140} fill={V2.walnut} halftone id="ht-onb1" />
        <div style={{ position: 'absolute', right: 38, top: -8, transform: 'rotate(-12deg)' }}>
          <MoonCutout size={48} color={V2.walnut} />
        </div>
        <div style={{ position: 'absolute', left: 30, bottom: -2 }}>
          <StarSmall size={13} color={V2.terracotta} stroke={1.2} />
        </div>
      </div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 22, color: V2.walnutSoft, marginTop: 24, lineHeight: 1.2,
      }}>bem-vinda ao</div>
      <div style={{
        fontFamily: TYPE.display, fontWeight: 800, fontSize: 64,
        letterSpacing: '0.04em', color: V2.walnut, lineHeight: 0.92,
        marginTop: 4,
      }}>VÉDICO</div>
      <div style={{ marginTop: 14, display: 'flex', justifyContent: 'center' }}>
        <Squiggle width={140} color={V2.walnut} stroke={1.8} amp={3} period={12} />
      </div>
      <div style={{
        marginTop: 22,
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 18, color: V2.walnut, lineHeight: 1.4, padding: '0 12px',
      }}>a memória da sua jornada védica<br />com Márcio.</div>
    </div>
  );
}

function Step2() {
  return (
    <div style={{ flex: 1, padding: '24px 28px 0', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.28em',
        color: V2.walnutSoft, textAlign: 'center',
      }}>COMO FUNCIONA</div>
      <div style={{
        fontFamily: TYPE.display, fontWeight: 800, fontSize: 30,
        letterSpacing: '0.04em', color: V2.walnut, lineHeight: 1,
        marginTop: 10, textAlign: 'center',
      }}>NÃO SUBSTITUI<br />SUA CONSULTA.</div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 18, color: V2.terracotta, marginTop: 8, textAlign: 'center',
      }}>dá escala.</div>

      <div style={{
        marginTop: 26, display: 'flex', flexDirection: 'column', gap: 14,
      }}>
        {[
          { ic: <SouthChart size={32} color={V2.walnut} stroke={1.4} />, t: 'O CÁLCULO É SOFTWARE',
            d: 'mapa, trânsitos, dashas, antardashas — em tempo real, no seu bolso.' },
          { ic: <Headphones size={28} color={V2.walnut} />, t: 'A INTERPRETAÇÃO É VOZ',
            d: 'leituras escritas e gravadas pelo Márcio. Nada de robô.' },
          { ic: <Lotus size={36} color={V2.terracotta} />, t: 'EM MOMENTOS DELICADOS',
            d: 'o app sugere — sem pressão — uma conversa com o Márcio.' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 14,
            background: V2.paper, padding: '14px 14px',
            border: `0.6px solid ${V2.walnutSoft}33`, borderRadius: 4,
            transform: i % 2 ? 'rotate(0.3deg)' : 'rotate(-0.3deg)',
          }}>
            <div style={{
              width: 50, height: 50, borderRadius: '50%',
              background: V2.creamWarm, border: `1px dashed ${V2.walnut}66`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>{row.ic}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: TYPE.display, fontWeight: 800, fontSize: 13,
                letterSpacing: '0.14em', color: V2.walnut,
                textTransform: 'uppercase', lineHeight: 1.05,
              }}>{row.t}</div>
              <div style={{
                fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.04em',
                color: V2.walnutSoft, marginTop: 4, lineHeight: 1.45,
              }}>{row.d}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3() {
  const [data, setData] = React.useState({ nome: 'Beatriz', dia: '14', mes: 'abril', ano: '1991', hora: '03:42', cidade: 'Salvador, BA' });
  return (
    <div style={{ flex: 1, padding: '24px 28px 0', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.28em',
        color: V2.walnutSoft, textAlign: 'center',
      }}>SEUS DADOS DE NASCIMENTO</div>
      <div style={{
        fontFamily: TYPE.display, fontWeight: 800, fontSize: 28,
        letterSpacing: '0.04em', color: V2.walnut, lineHeight: 1.05,
        marginTop: 10, textAlign: 'center',
      }}>DATA, HORA<br />E LUGAR.</div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 14, color: V2.walnutSoft, marginTop: 8,
        textAlign: 'center', padding: '0 6px',
      }}>quanto mais precisa a hora, mais precisa a leitura.</div>

      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          { l: 'NOME', v: data.nome, k: 'nome' },
          { l: 'DATA',  v: `${data.dia} · ${data.mes} · ${data.ano}`, k: '_data' },
          { l: 'HORA',  v: data.hora, k: 'hora' },
          { l: 'CIDADE', v: data.cidade, k: 'cidade' },
        ].map((r) => (
          <label key={r.k} style={{
            display: 'block',
            background: V2.paper, padding: '12px 14px',
            border: `0.6px solid ${V2.walnutSoft}33`,
          }}>
            <div style={{
              fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.22em',
              color: V2.walnutSoft,
            }}>{r.l}</div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 19, color: V2.walnut, lineHeight: 1, marginTop: 4,
            }}>{r.v}</div>
          </label>
        ))}
      </div>

      <div style={{
        marginTop: 'auto', paddingTop: 16,
        fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.18em',
        color: V2.walnutSoft, textAlign: 'center', lineHeight: 1.6,
      }}>
        ESTES DADOS NÃO SAEM DO SEU APARELHO<br />SEM A SUA PERMISSÃO.
      </div>
    </div>
  );
}

Object.assign(window, { MemoriaScreen, ConsultaDetail, ContaScreen, SobreScreen, OnboardingFlow });
