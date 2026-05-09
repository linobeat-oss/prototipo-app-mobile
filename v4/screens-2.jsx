// VÉDICO — Memória, Conta, Sobre, Onboarding, AgendarModal
// Memória is the product anchor — editorial library of Márcio consultations.

// ─── MEMÓRIA ──────────────────────────────────────────────────────
const CONSULTAS = [
  {
    id: 'c4',
    date: '12 ABR 2026',
    duration: '74 min',
    kind: 'INÍCIO DE ANTARDASHA',
    title: 'Saturno apertando a Lua',
    excerpt: 'a poda do Saturno chegou. é o terceiro mês — o mais físico. depois ele vira professor.',
    chapters: ['o que é Antardasha', 'no seu mapa', 'o que esperar dos próximos meses', 'rituais'],
    color: V2.terracotta,
  },
  {
    id: 'c3',
    date: '08 DEZ 2025',
    duration: '62 min',
    kind: 'JÚPITER RETURN',
    title: 'doze anos depois',
    excerpt: 'Júpiter volta ao lugar onde estava quando você nasceu. é uma rima, não uma repetição.',
    chapters: ['o que é Júpiter return', 'sua casa 5', 'comparação com 2014'],
    color: V2.sage,
  },
  {
    id: 'c2',
    date: '21 SET 2025',
    duration: '48 min',
    kind: 'LUA NOVA EM VIRGEM',
    title: 'recomeço pequeno',
    excerpt: 'lua nova é o avesso da expansão. é hora de fazer pouco, com cuidado.',
    chapters: ['lua nova vs cheia', 'na sua 9ª casa'],
    color: V2.gold,
  },
  {
    id: 'c1',
    date: '04 JUN 2025',
    duration: '92 min',
    kind: 'PRIMEIRA LEITURA',
    title: 'seu mapa, do começo',
    excerpt: 'a Lua aqui é o coração da sua vida emocional — toda mudança que você sente forte, passa por ela.',
    chapters: ['Lagna', 'os planetas', 'casas mais ativas', 'Mahādashā atual', 'pra escutar de novo'],
    color: V2.rose,
  },
];

function MemoriaScreen({ go }) {
  const { mode } = useMode();
  const [open, setOpen] = React.useState(null);

  if (open) return <ConsultaDetail consulta={open} onBack={() => setOpen(null)} />;

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
        <div style={{ padding: '24px 22px 0', textAlign: 'center' }}>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 26, color: V2.walnut, lineHeight: 1,
          }}>a sua</div>
          <div style={{
            fontFamily: TYPE.display, fontWeight: 800, fontSize: 44,
            letterSpacing: '0.06em', color: V2.walnut, marginTop: 2, lineHeight: 1,
          }}>MEMÓRIA</div>
          <div style={{ marginTop: 8, display: 'flex', justifyContent: 'center' }}>
            <Squiggle width={150} color={V2.walnut} stroke={2} amp={3.5} period={14} />
          </div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 14, color: V2.walnutSoft, marginTop: 10,
            lineHeight: 1.4, padding: '0 18px',
          }}>{mode === 'discipulo'
            ? 'cada conversa sua com o Márcio — guardada, transcrita, sua.'
            : 'aqui ficará cada conversa sua com o Márcio. áudio, transcrição, os recortes que importarem.'
          }</div>
        </div>

        {mode === 'discipulo'
          ? <MemoriaCheia consultas={CONSULTAS} onOpen={setOpen} />
          : <MemoriaPromessa mode={mode} />
        }
      </div>
    </div>
  );
}

function MemoriaCheia({ consultas, onOpen }) {
  return (
    <div style={{ padding: '28px 22px 0' }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 16,
      }}>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.18em',
          color: V2.walnutSoft,
        }}>4 CONVERSAS · 11 MESES</div>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.18em',
          color: V2.walnut, display: 'flex', alignItems: 'center', gap: 6,
          padding: '4px 9px', border: `0.6px dashed ${V2.walnut}77`, borderRadius: 12,
        }}><BuscarGlyph size={11} color={V2.walnut} /> BUSCAR</div>
      </div>

      <div style={{ position: 'relative', paddingLeft: 16 }}>
        {/* Vertical timeline line */}
        <div style={{
          position: 'absolute', left: 4, top: 6, bottom: 6,
          width: 0.8, background: V2.walnutSoft, opacity: 0.4,
        }}></div>

        {consultas.map((c, i) => (
          <div key={c.id} style={{ position: 'relative', marginBottom: 18 }}>
            <div style={{
              position: 'absolute', left: -16, top: 18,
              width: 9, height: 9, borderRadius: 5,
              background: c.color, border: `1.4px solid ${V2.walnut}`,
            }}></div>
            <article onClick={() => onOpen(c)} style={{
              background: V2.paper, borderRadius: 4, padding: '14px 16px',
              border: `0.6px solid ${V2.walnutSoft}33`,
              boxShadow: '0 1px 0 rgba(42,31,26,0.04)',
              cursor: 'pointer', position: 'relative',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.16em',
                  color: V2.walnut,
                }}>{c.date}</span>
                <span style={{
                  fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.18em',
                  color: c.color, textTransform: 'uppercase',
                }}>· {c.kind}</span>
              </div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
                fontSize: 22, color: V2.walnut, lineHeight: 1.1, marginTop: 4,
              }}>{c.title}</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic',
                fontSize: 14, color: V2.walnutSoft, lineHeight: 1.4,
                marginTop: 8,
              }}>“{c.excerpt}”</div>
              <div style={{
                marginTop: 10, display: 'flex', alignItems: 'center', gap: 12,
                fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.14em',
                color: V2.walnutSoft,
              }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <Headphones size={12} color={V2.walnutSoft} />{c.duration}
                </span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  <DocGlyph size={11} color={V2.walnutSoft} />transcrição
                </span>
                <span style={{ marginLeft: 'auto' }}><ChevronRight size={11} color={V2.walnut} /></span>
              </div>
            </article>
          </div>
        ))}

        <div style={{ position: 'relative', marginTop: 6, paddingLeft: 0 }}>
          <div style={{
            position: 'absolute', left: -16, top: 4,
            width: 9, height: 9, borderRadius: 5,
            border: `1px dashed ${V2.walnut}77`, background: V2.cream,
          }}></div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 13, color: V2.walnutSoft, lineHeight: 1.4,
          }}>antes daqui — sua jornada com o Márcio começa.</div>
        </div>
      </div>
    </div>
  );
}

function MemoriaPromessa({ mode }) {
  const { openAgendar } = useMode();
  const sub = mode === 'praticante'
    ? 'você é assinante há 3 meses. quando quiser conversar, está aqui.'
    : 'sua biblioteca pessoal de conversas com o Márcio começa quando você marca a primeira.';

  return (
    <div style={{ padding: '28px 22px 0' }}>
      <div style={{
        position: 'relative',
        background: V2.paper, borderRadius: 6, padding: '40px 24px 28px',
        border: `0.6px solid ${V2.walnutSoft}33`, overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', left: '50%', top: 18,
          transform: 'translateX(-50%)',
        }}>
          <StarBig size={64} fill={V2.walnut} halftone id="ht-promessa" />
        </div>
        <div style={{
          marginTop: 60,
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 17, color: V2.walnut, lineHeight: 1.5, textAlign: 'center',
        }}>{sub}</div>

        <div style={{
          marginTop: 22, padding: '14px 16px',
          border: `0.6px dashed ${V2.walnut}66`,
          background: V2.creamWarm, position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: -10, left: 14, padding: '2px 8px',
            background: V2.cream, fontFamily: TYPE.mono, fontSize: 9,
            letterSpacing: '0.22em', color: V2.terracotta,
          }}>EXEMPLO · ANONIMIZADO</div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.16em',
            color: V2.walnutSoft, marginTop: 4,
          }}>14 MAR 2025 · LUA NOVA · 56 MIN</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
            fontSize: 18, color: V2.walnut, marginTop: 4, lineHeight: 1.15,
            filter: mode === 'curioso' ? 'blur(0.4px)' : 'none',
          }}>recomeço pequeno</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 13.5, color: V2.walnutSoft, lineHeight: 1.4, marginTop: 6,
            filter: mode === 'curioso' ? 'blur(2.4px)' : 'none',
            userSelect: mode === 'curioso' ? 'none' : 'auto',
          }}>“lua nova é o avesso da expansão. é hora de fazer pouco, com cuidado, e
            confiar que o pequeno é o suficiente — toda conversa sua chega aqui assim,
            inteira.”</div>
          <div style={{
            marginTop: 10, display: 'flex', alignItems: 'center', gap: 10,
            fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.16em',
            color: V2.walnutSoft, opacity: 0.7,
          }}>
            <Headphones size={11} color={V2.walnutSoft} /> ÁUDIO ·
            <DocGlyph size={11} color={V2.walnutSoft} /> TRANSCRIÇÃO ·
            <span>4 RECORTES</span>
          </div>
        </div>

        <div style={{
          marginTop: 18, fontFamily: TYPE.mono, fontSize: 10,
          letterSpacing: '0.18em', color: V2.walnutSoft, textAlign: 'center',
        }}>É ASSIM QUE FICA.</div>

        <button onClick={openAgendar} style={{
          marginTop: 18, width: '100%', padding: '14px',
          background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
          fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
          cursor: 'pointer',
        }}>AGENDAR PRIMEIRA CONVERSA ›</button>
      </div>

      <div style={{
        marginTop: 22, padding: '0 8px',
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 13, color: V2.walnutSoft, textAlign: 'center', lineHeight: 1.5,
      }}>nada que você fizer aqui apaga.<br />o que o Márcio te disse, fica.</div>
    </div>
  );
}

function BuscarGlyph({ size = 14, color = V2.walnut }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <circle cx="7" cy="7" r="4.5"></circle>
      <path d="M 10.5 10.5 L 14 14"></path>
    </svg>
  );
}

// ─── Consulta detail (audio player + chapters + transcript) ──────
function ConsultaDetail({ consulta, onBack }) {
  const [playing, setPlaying] = React.useState(false);
  const c = consulta;
  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <ScreenHeader leftIcon={<BackArrow color={V2.walnut} />} onLeft={onBack} title="MEMÓRIA" />

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', paddingBottom: 28 }}>
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10.5, letterSpacing: '0.18em',
            color: c.color,
          }}>{c.date} · {c.kind}</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
            fontSize: 32, color: V2.walnut, lineHeight: 1.05, marginTop: 6,
          }}>{c.title}</div>
        </div>

        {/* Audio player card */}
        <div style={{ padding: '20px 22px 0' }}>
          <div style={{
            background: V2.paper, borderRadius: 6, padding: '18px 20px',
            border: `0.6px solid ${V2.walnutSoft}33`,
            boxShadow: '0 1px 0 rgba(42,31,26,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <button onClick={() => setPlaying(p => !p)} style={{
                width: 48, height: 48, borderRadius: '50%',
                background: V2.ink, border: 'none', color: V2.cream,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', flexShrink: 0,
              }}>
                {playing ? <PauseGlyph size={18} color={V2.cream} /> : <PlayTriangle size={18} color={V2.cream} />}
              </button>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Waveform bars={32} height={26} color={V2.walnut} progress={0.32} />
                <div style={{
                  display: 'flex', justifyContent: 'space-between', marginTop: 6,
                  fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.1em',
                  color: V2.walnutSoft,
                }}>
                  <span>23:42</span><span>{c.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters */}
        <SectionHeader title="CAPÍTULOS" squiggle={120} />
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {c.chapters.map((ch, i) => {
            const t = `${(8 + i * 14).toString().padStart(2, '0')}:${(i % 6 * 9 + 12).toString().padStart(2, '0')}`;
            return (
              <div key={i} style={{
                background: V2.paper, padding: '10px 14px', borderRadius: 4,
                border: `0.6px solid ${V2.walnutSoft}22`,
                display: 'flex', alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.12em',
                  color: V2.walnutSoft, width: 40,
                }}>{t}</div>
                <div style={{
                  flex: 1, fontFamily: TYPE.italic, fontStyle: 'italic',
                  fontSize: 15, color: V2.walnut,
                }}>{ch}</div>
                <PlayTriangle size={11} color={V2.walnut} />
              </div>
            );
          })}
        </div>

        {/* Recortes */}
        <SectionHeader title="RECORTES" squiggle={120} />
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Recorte from={c.date}>{c.excerpt}</Recorte>
          {c.id === 'c4' && (
            <Recorte from={c.date}>
              quando Saturno apertar, lembra: é uma poda, não um castigo.
            </Recorte>
          )}
          {c.id === 'c1' && (
            <Recorte from={c.date}>
              o seu Saturno é o senhor do Lagna — ele não é vilão, é a estrutura.
            </Recorte>
          )}
        </div>

        {/* Files */}
        <SectionHeader title="ARQUIVOS" squiggle={100} />
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {[
            { kind: 'TRANSCRIÇÃO', sub: '.docx · 11 páginas', icon: <DocGlyph size={20} color={V2.walnut} /> },
            { kind: 'INTERPRETAÇÃO', sub: '.docx · escrita pelo Márcio', icon: <DocGlyph size={20} color={V2.walnut} /> },
            { kind: 'ÁUDIO ORIGINAL', sub: `.m4a · ${c.duration}`, icon: <Headphones size={20} color={V2.walnut} /> },
          ].map((f, i) => (
            <div key={i} style={{
              background: V2.paper, padding: '12px 14px', borderRadius: 4,
              border: `0.6px solid ${V2.walnutSoft}22`,
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 18,
                background: V2.creamWarm, border: `0.8px dashed ${V2.walnut}55`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>{f.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: TYPE.display, fontWeight: 800, fontSize: 13,
                  letterSpacing: '0.14em', color: V2.walnut,
                }}>{f.kind}</div>
                <div style={{
                  fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.08em',
                  color: V2.walnutSoft, marginTop: 2,
                }}>{f.sub}</div>
              </div>
              <ChevronRight color={V2.walnut} />
            </div>
          ))}
        </div>

        <div style={{ height: 40 }}></div>
      </div>
    </div>
  );
}

// ─── CONTA ────────────────────────────────────────────────────────
function ContaScreen({ go }) {
  const { mode, setMode, openAgendar } = useMode();

  // Free → focus on becoming subscriber. Sub → status. Discípulo → status + history.
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
        {/* Identity */}
        <div style={{ padding: '24px 22px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{
            width: 64, height: 64, borderRadius: '50%',
            background: V2.creamWarm, border: `1.4px solid ${V2.walnut}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: TYPE.italic, fontStyle: 'italic',
            fontSize: 30, color: V2.walnut, transform: 'rotate(-3deg)',
          }}>Bm</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: TYPE.display, fontWeight: 800, fontSize: 22,
              letterSpacing: '0.04em', color: V2.walnut, lineHeight: 1,
            }}>BEATRIZ MORAIS</div>
            <div style={{
              fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.16em',
              color: V2.walnutSoft, marginTop: 4,
            }}>14 ABR 1991 · SALVADOR/BA</div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 13, color: V2.terracotta, marginTop: 4,
            }}>{
              mode === 'curioso' ? 'experimentando o védico'
              : mode === 'praticante' ? 'assinante há 3 meses'
              : 'assinante · 4 consultas com Márcio'
            }</div>
          </div>
        </div>

        {/* Subscription block */}
        <div style={{ padding: '22px 22px 0' }}>
          {mode === 'curioso' ? (
            <div style={{
              background: V2.paper, borderRadius: 6, padding: '20px 22px',
              border: `0.8px solid ${V2.gold}`,
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', right: 14, top: 14, transform: 'rotate(8deg)' }}>
                <StarSmall size={14} color={V2.gold} stroke={1.4} />
              </div>
              <div style={{
                fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
                color: V2.walnutSoft,
              }}>EXPERIMENTANDO</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
                fontSize: 22, color: V2.walnut, marginTop: 4, lineHeight: 1.15,
              }}>continue todos os dias com o védico</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic',
                fontSize: 14, color: V2.walnutSoft, marginTop: 8, lineHeight: 1.5,
              }}>a leitura completa, o mapa inteiro, os trânsitos do dia.<br />
                escritos pelo Márcio, em português.
              </div>
              <button onClick={() => setMode('praticante')} style={{
                marginTop: 16, width: '100%', padding: '13px',
                background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
                fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
                cursor: 'pointer',
              }}>ASSINAR · R$ 29,90/MÊS</button>
            </div>
          ) : (
            <ContaAssinante mode={mode} openAgendar={openAgendar} />
          )}
        </div>

        {/* Settings list */}
        <SectionHeader title="AJUSTES" squiggle={100} />
        <div style={{ padding: '14px 22px 0', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {[
            { label: 'Sobre o védico', sub: 'manifesto curto', go: 'sobre' },
            { label: 'Dados de nascimento', sub: 'editar data, hora, local' },
            { label: 'Notificações', sub: 'leitura diária · trânsitos' },
            { label: 'Privacidade', sub: 'seus dados não saem do aparelho sem permissão' },
            mode === 'discipulo' && { label: 'Conversas com Márcio Lilah', sub: '4 conversas · 11 meses', go: 'memoria' },
            { label: 'Sair', sub: '', danger: true },
          ].filter(Boolean).map((s, i) => (
            <div key={i} onClick={s.go ? () => go(s.go) : undefined} style={{
              padding: '14px 4px',
              borderBottom: `0.6px solid ${V2.walnutSoft}22`,
              display: 'flex', alignItems: 'center', gap: 12,
              cursor: s.go ? 'pointer' : 'default',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
                  fontSize: 16, color: s.danger ? V2.terracotta : V2.walnut,
                }}>{s.label}</div>
                {s.sub && (
                  <div style={{
                    fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.06em',
                    color: V2.walnutSoft, marginTop: 2,
                  }}>{s.sub}</div>
                )}
              </div>
              {!s.danger && <ChevronRight color={V2.walnut} />}
            </div>
          ))}
        </div>

        <div style={{
          padding: '24px 22px',
          fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.22em',
          color: V2.walnutSoft, textAlign: 'center',
        }}>VÉDICO · v0.1 · MAIO 2026</div>
      </div>
    </div>
  );
}

function ContaAssinante({ mode, openAgendar }) {
  const incluido = [
    'leitura completa todo dia',
    'mapa inteiro · Lagna, Dasha, Navamsha',
    'trânsitos do dia, interpretados',
    'sua memória das consultas com Márcio Lilah',
  ];

  return (
    <div style={{
      background: V2.paper, borderRadius: 6, padding: '18px 20px',
      border: `0.6px solid ${V2.walnutSoft}33`, position: 'relative',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
            color: V2.walnutSoft,
          }}>ASSINATURA ATIVA</div>
          <div style={{
            fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
            fontSize: 22, color: V2.walnut, marginTop: 4, lineHeight: 1.1,
          }}>védico · mensal</div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.06em',
            color: V2.walnutSoft, marginTop: 4,
          }}>R$ 29,90 · próxima cobrança 8 jun</div>
        </div>
        <Sticker rotate={-6} bg={V2.cream} size={9}>ATIVO</Sticker>
      </div>

      <div style={{ borderTop: `0.6px dashed ${V2.walnut}44`, margin: '16px 0' }}></div>

      <div style={{
        fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.18em',
        color: V2.walnutSoft, marginBottom: 10,
      }}>O QUE VOCÊ TEM</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {incluido.map((item, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <div style={{ marginTop: 4, flexShrink: 0 }}>
              <StarSmall size={10} color={V2.terracotta} stroke={1.4} />
            </div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 14.5, color: V2.walnut, lineHeight: 1.35,
            }}>{item}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 16, padding: '12px 14px',
        background: V2.creamWarm, border: `0.6px dashed ${V2.walnut}66`,
      }}>
        <div style={{
          fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.22em',
          color: V2.terracotta, marginBottom: 4,
        }}>CONSULTAS</div>
        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 13.5, color: V2.walnut, lineHeight: 1.45,
        }}>as consultas com o Márcio Lilah continuam à parte — combinadas direto com ele.</div>
      </div>

      <button onClick={openAgendar} style={{
        marginTop: 16, width: '100%', padding: '13px',
        background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
        fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
        cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
      }}>
        <span style={{
          width: 16, height: 16, borderRadius: 8,
          background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
          color: V2.cream, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: TYPE.italic, fontStyle: 'italic', fontSize: 9,
        }}>M</span>
        AGENDAR COM MÁRCIO ›
      </button>
    </div>
  );
}

// ─── SOBRE ────────────────────────────────────────────────────────
function SobreScreen({ go }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <ScreenHeader leftIcon={<BackArrow color={V2.walnut} />} onLeft={() => go('conta')} title="" />

      <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px 60px' }}>
        <div style={{
          display: 'flex', justifyContent: 'center',
          marginBottom: 20,
        }}>
          <StarBig size={68} fill={V2.walnut} halftone id="ht-sobre" />
        </div>

        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 26, color: V2.walnut, lineHeight: 1, textAlign: 'center',
        }}>sobre o</div>
        <div style={{
          fontFamily: TYPE.display, fontWeight: 800, fontSize: 56,
          letterSpacing: '0.04em', color: V2.walnut, marginTop: 4,
          textAlign: 'center', lineHeight: 1,
        }}>VÉDICO</div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14, marginBottom: 24 }}>
          <Squiggle width={140} color={V2.walnut} stroke={2} amp={3.5} period={14} />
        </div>

        <div style={{
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 17, color: V2.walnut, lineHeight: 1.6, textWrap: 'pretty',
        }}>
          o védico é a memória da sua jornada védica com o Márcio Lilah.<br /><br />
          ele faz a parte que é software — calcula o seu mapa, seus trânsitos, seus
          períodos de Dasha. e amplifica a parte que é o Márcio — a leitura escrita
          em português, no tom dele, editada por ele.<br /><br />
          quando o céu apertar — Saturno duro, Sade Sati, uma Antardasha intensa — o
          védico vai te lembrar, devagar, que existe alguém pra conversar.<br /><br />
          a assinatura te dá o app inteiro: mapas completos, leitura todo dia, sua memória.
          quando você quiser conversar com o Márcio, é só agendar — a consulta é com ele, direto.
        </div>

        <div style={{
          marginTop: 32, padding: '18px 18px 18px 60px',
          background: V2.paper, border: `0.8px solid ${V2.gold}`, borderRadius: 6,
          position: 'relative',
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
            fontSize: 15, color: V2.walnut, lineHeight: 1.45,
          }}>“o que faz o védico ser védico não é o algoritmo.<br />é o que a gente
            conversou — guardado, pra você voltar.”</div>
          <div style={{
            fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.18em',
            color: V2.walnutSoft, marginTop: 8,
          }}>MÁRCIO · ASTRÓLOGO VÉDICO</div>
        </div>

        <div style={{
          marginTop: 28, fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.18em',
          color: V2.walnutSoft, textAlign: 'center',
        }}>FEITO À MÃO · COM CUIDADO · 2026</div>
      </div>
    </div>
  );
}

// ─── ONBOARDING (3 steps) ─────────────────────────────────────────
function OnboardingFlow({ onDone, onExample }) {
  const [step, setStep] = React.useState(1);
  return (
    <div style={{
      width: '100%', height: '100%',
      background: V2.cream, backgroundImage: PAPER_GRID_BG,
      color: V2.walnut, display: 'flex', flexDirection: 'column',
      overflow: 'hidden', position: 'relative',
    }}>
      <StatusBar />
      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 28px 30px' }}>
        {/* Step indicator */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 10, padding: '6px 0 24px',
        }}>
          {[1, 2, 3].map((n) => (
            <div key={n} style={{
              width: n === step ? 24 : 8, height: 4,
              background: n <= step ? V2.walnut : V2.walnutSoft,
              opacity: n <= step ? 1 : 0.3,
              transition: 'all 0.4s ease',
            }}></div>
          ))}
        </div>

        {step === 1 && <Step1 onNext={() => setStep(2)} onExample={onExample} />}
        {step === 2 && <Step2 onNext={() => setStep(3)} />}
        {step === 3 && <Step3 onDone={onDone} />}
      </div>
    </div>
  );
}

function Step1({ onNext, onExample }) {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
        <StarBig size={80} fill={V2.walnut} halftone id="ht-onb1" />
      </div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 22, color: V2.walnut, lineHeight: 1, textAlign: 'center',
      }}>oi —</div>
      <div style={{
        fontFamily: TYPE.display, fontWeight: 800, fontSize: 56,
        letterSpacing: '0.04em', color: V2.walnut, marginTop: 6,
        textAlign: 'center', lineHeight: 1,
      }}>VÉDICO</div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 14, marginBottom: 22 }}>
        <Squiggle width={130} color={V2.walnut} stroke={2} amp={3.5} period={14} />
      </div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 18, color: V2.walnut, lineHeight: 1.55, textAlign: 'center',
        textWrap: 'pretty',
      }}>
        astrologia védica em português,<br />escrita pelo Márcio Lilah, em três sopros.
      </div>

      <div style={{ marginTop: 50 }}>
        <button onClick={onNext} style={{
          width: '100%', padding: '14px',
          background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
          fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
          cursor: 'pointer',
        }}>COMEÇAR ›</button>
        <button onClick={onExample} style={{
          marginTop: 14, width: '100%', padding: 8,
          background: 'none', border: 'none',
          fontFamily: TYPE.italic, fontStyle: 'italic',
          fontSize: 14, color: V2.walnutSoft,
          cursor: 'pointer', textDecoration: 'underline',
          textDecorationStyle: 'dotted', textUnderlineOffset: 4,
        }}>quero ver um exemplo antes →</button>
      </div>
    </div>
  );
}

function Step2({ onNext }) {
  const items = [
    { kind: 'leitura',
      title: 'sua leitura todo dia',
      body: 'um texto escrito pelo Márcio Lilah, em português, sobre o céu de hoje no seu mapa.' },
    { kind: 'mapa',
      title: 'seu mapa, completo',
      body: 'Lagna, planetas, Dasha e os trânsitos do dia — calculados na hora.' },
    { kind: 'memoria',
      title: 'suas conversas guardadas',
      body: 'cada consulta com o Márcio Lilah fica aqui — áudio, transcrição, os trechos que importarem.' },
  ];
  return (
    <div>
      <div style={{
        fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
        color: V2.walnutSoft, textAlign: 'center', marginBottom: 14,
      }}>O QUE TEM AQUI</div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 30, color: V2.walnut, lineHeight: 1.15, textAlign: 'center',
        textWrap: 'pretty',
      }}>astrologia védica,<br />todo dia, em português.</div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 24px' }}>
        <Squiggle width={100} color={V2.walnut} stroke={1.6} amp={3} period={12} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {items.map((it) => (
          <div key={it.kind} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{
              width: 44, height: 44, borderRadius: '50%',
              background: V2.creamWarm, border: `0.8px dashed ${V2.walnut}77`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              {it.kind === 'leitura' && <StarSmall size={20} color={V2.walnut} stroke={1.4} />}
              {it.kind === 'mapa'    && <SouthChart size={22} color={V2.walnut} stroke={1.2} />}
              {it.kind === 'memoria' && <DocGlyph size={20} color={V2.walnut} />}
            </div>
            <div style={{ flex: 1, minWidth: 0, paddingTop: 2 }}>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic', fontWeight: 500,
                fontSize: 18, color: V2.walnut, lineHeight: 1.15,
              }}>{it.title}</div>
              <div style={{
                fontFamily: TYPE.italic, fontStyle: 'italic',
                fontSize: 14, color: V2.walnutSoft, lineHeight: 1.5, marginTop: 4,
                textWrap: 'pretty',
              }}>{it.body}</div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={onNext} style={{
        marginTop: 32, width: '100%', padding: '14px',
        background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
        fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
        cursor: 'pointer',
      }}>COMEÇAR PELO MAPA ›</button>
    </div>
  );
}

function Step3({ onDone }) {
  return (
    <div>
      <div style={{
        fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.22em',
        color: V2.walnutSoft, textAlign: 'center', marginBottom: 14,
      }}>SEUS DADOS DE NASCIMENTO</div>
      <div style={{
        fontFamily: TYPE.italic, fontStyle: 'italic',
        fontSize: 26, color: V2.walnut, lineHeight: 1.15, textAlign: 'center',
      }}>data, hora e lugar.<br />o céu naquele instante é seu mapa.</div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Squiggle width={100} color={V2.walnut} stroke={1.6} amp={3} period={12} />
      </div>

      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 14 }}>
        {[
          { label: 'NOME', value: 'Beatriz Morais' },
          { label: 'DATA', value: '14 / 04 / 1991' },
          { label: 'HORA', value: '03:42' },
          { label: 'LUGAR', value: 'Salvador / BA' },
        ].map((f) => (
          <div key={f.label}>
            <div style={{
              fontFamily: TYPE.mono, fontSize: 10, letterSpacing: '0.18em',
              color: V2.walnutSoft, marginBottom: 4,
            }}>{f.label}</div>
            <div style={{
              borderBottom: `0.8px solid ${V2.walnut}`, padding: '6px 2px',
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 18, color: V2.walnut,
            }}>{f.value}</div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 22, fontFamily: TYPE.mono, fontSize: 9, letterSpacing: '0.18em',
        color: V2.walnutSoft, textAlign: 'center', lineHeight: 1.7,
      }}>ESTES DADOS NÃO SAEM DO SEU APARELHO<br />SEM A SUA PERMISSÃO.</div>

      <button onClick={onDone} style={{
        marginTop: 26, width: '100%', padding: '14px',
        background: V2.ink, color: V2.cream, border: 'none', borderRadius: 4,
        fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
        cursor: 'pointer',
      }}>ENTRAR NO VÉDICO ›</button>
    </div>
  );
}

// ─── AGENDAR MODAL — handoff to WhatsApp/Calendly, payment off-app ─
function AgendarModal({ onClose }) {
  const [step, setStep] = React.useState('slots'); // slots → confirm
  const [slot, setSlot] = React.useState(null);

  const slots = [
    { d: '14 MAI', t: '10:00', dur: '60 min' },
    { d: '14 MAI', t: '15:30', dur: '60 min' },
    { d: '16 MAI', t: '09:00', dur: '60 min' },
    { d: '20 MAI', t: '14:00', dur: '90 min' },
  ];

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'rgba(26,19,16,0.5)',
      display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      animation: 'fadeIn 0.2s ease-out',
    }}>
      <div style={{
        width: '100%', background: V2.cream,
        borderRadius: '20px 20px 0 0',
        padding: '14px 22px 32px',
        animation: 'slideUp 0.32s cubic-bezier(0.2,0.8,0.2,1)',
        position: 'relative', maxHeight: '80%', overflowY: 'auto',
      }}>
        <div style={{
          width: 36, height: 4, borderRadius: 2,
          background: V2.walnutSoft, opacity: 0.4,
          margin: '0 auto 14px',
        }}></div>
        <button onClick={onClose} style={{
          position: 'absolute', right: 16, top: 14,
          background: 'none', border: 'none', fontSize: 22,
          color: V2.walnutSoft, cursor: 'pointer',
        }}>×</button>

        {step === 'slots' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: `radial-gradient(circle at 35% 30%, ${V2.rose} 0%, ${V2.terracotta} 70%, ${V2.walnutSoft} 100%)`,
                color: V2.cream, fontFamily: TYPE.italic, fontStyle: 'italic',
                fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>M</div>
              <div>
                <div style={{
                  fontFamily: TYPE.display, fontWeight: 800, fontSize: 18,
                  letterSpacing: '0.12em', color: V2.walnut,
                }}>AGENDAR COM MÁRCIO</div>
                <div style={{
                  fontFamily: TYPE.italic, fontStyle: 'italic',
                  fontSize: 13, color: V2.walnutSoft,
                }}>os horários disponíveis dele</div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {slots.map((s) => (
                <button key={s.d + s.t} onClick={() => { setSlot(s); setStep('confirm'); }} style={{
                  background: V2.paper, border: `0.6px solid ${V2.walnutSoft}33`,
                  borderRadius: 4, padding: '14px 16px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 14, textAlign: 'left',
                }}>
                  <div style={{
                    fontFamily: TYPE.display, fontWeight: 800, fontSize: 18,
                    letterSpacing: '0.08em', color: V2.walnut, minWidth: 64,
                  }}>{s.d}</div>
                  <div style={{
                    flex: 1, fontFamily: TYPE.italic, fontStyle: 'italic',
                    fontSize: 17, color: V2.walnut,
                  }}>{s.t}</div>
                  <div style={{
                    fontFamily: TYPE.mono, fontSize: 9.5, letterSpacing: '0.16em',
                    color: V2.walnutSoft,
                  }}>{s.dur}</div>
                  <ChevronRight color={V2.walnut} />
                </button>
              ))}
            </div>

            <div style={{
              marginTop: 18,
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 13, color: V2.walnutSoft, lineHeight: 1.5, textAlign: 'center',
            }}>pagamento direto com o Márcio, fora do védico.</div>
          </div>
        )}

        {step === 'confirm' && slot && (
          <div>
            <div style={{
              display: 'flex', justifyContent: 'center', margin: '6px 0 14px',
            }}>
              <StarSmall size={20} color={V2.gold} stroke={1.4} />
            </div>
            <div style={{
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 22, color: V2.walnut, lineHeight: 1.2, textAlign: 'center',
            }}>seu horário com o Márcio:</div>
            <div style={{
              marginTop: 14,
              fontFamily: TYPE.display, fontWeight: 800, fontSize: 32,
              letterSpacing: '0.04em', color: V2.walnut,
              textAlign: 'center', lineHeight: 1,
            }}>{slot.d} · {slot.t}</div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10, marginBottom: 18 }}>
              <Squiggle width={100} color={V2.walnut} stroke={1.6} amp={3} period={12} />
            </div>

            <div style={{
              padding: '16px 18px', background: V2.creamWarm,
              border: `0.6px dashed ${V2.walnut}`,
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 14.5, color: V2.walnut, lineHeight: 1.55, textWrap: 'pretty',
            }}>
              vamos te conectar com o Márcio pelo WhatsApp pra confirmar e combinar o
              pagamento por Pix, direto com ele.
            </div>

            <button onClick={onClose} style={{
              marginTop: 18, width: '100%', padding: '14px',
              background: '#25D366', color: 'white', border: 'none', borderRadius: 4,
              fontFamily: TYPE.mono, fontSize: 11, letterSpacing: '0.22em',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            }}><WhatsappGlyph size={16} color="white" /> ABRIR WHATSAPP</button>

            <button onClick={() => setStep('slots')} style={{
              marginTop: 10, width: '100%', padding: 8,
              background: 'none', border: 'none',
              fontFamily: TYPE.italic, fontStyle: 'italic',
              fontSize: 14, color: V2.walnutSoft,
              cursor: 'pointer', textDecoration: 'underline',
              textDecorationStyle: 'dotted', textUnderlineOffset: 4,
            }}>← outro horário</button>
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, {
  MemoriaScreen, ContaScreen, SobreScreen, OnboardingFlow, AgendarModal,
});
