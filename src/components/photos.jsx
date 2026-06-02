// GRIFO Construtora — Site Components
// Photographic placeholders are inline SVGs evoking real construction photography
// (warm tones, golden hour). Replace with real photos when available.

import { useState } from 'react';

/* ============================================================
   PLACEHOLDER PHOTO — abstract construction scene rendered as SVG
   Variants: "site" (canteiro), "structure" (estrutura), "team",
             "hospital", "school", "commercial", "interior"
   Each is a sober, warm composition — no clip-art, no people drawn.
   ============================================================ */
function Photo({ variant = "site", caption, className = "" }) {
  const variants = {
    site: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sky-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a4a5e"/>
            <stop offset="0.6" stopColor="#5a5848"/>
            <stop offset="1" stopColor="#a07a2c" stopOpacity="0.9"/>
          </linearGradient>
          <linearGradient id="ground-warm" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a3328"/>
            <stop offset="1" stopColor="#1a1410"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sky-warm)"/>
        {/* distant building silhouettes */}
        <g opacity="0.5">
          <rect x="0" y="280" width="160" height="320" fill="#1a2434"/>
          <rect x="160" y="240" width="120" height="360" fill="#0e1825"/>
          <rect x="640" y="260" width="160" height="340" fill="#1a2434"/>
        </g>
        {/* under-construction tower */}
        <rect x="280" y="120" width="240" height="380" fill="#0d1a2a"/>
        {[...Array(8)].map((_, i) => (
          <rect key={i} x="290" y={140 + i*44} width="220" height="2" fill="#a07a2c" opacity="0.5"/>
        ))}
        {[...Array(5)].map((_, i) => (
          <rect key={i} x={310 + i*38} y="120" width="2" height="380" fill="#15263a"/>
        ))}
        {/* crane */}
        <line x1="540" y1="60" x2="540" y2="420" stroke="#15263a" strokeWidth="6"/>
        <line x1="380" y1="100" x2="700" y2="100" stroke="#15263a" strokeWidth="4"/>
        <line x1="540" y1="60" x2="380" y2="100" stroke="#15263a" strokeWidth="2"/>
        <line x1="540" y1="60" x2="700" y2="100" stroke="#15263a" strokeWidth="2"/>
        <line x1="610" y1="100" x2="610" y2="220" stroke="#15263a" strokeWidth="2"/>
        <rect x="600" y="220" width="20" height="14" fill="#15263a"/>
        {/* ground plane */}
        <rect x="0" y="500" width="800" height="100" fill="url(#ground-warm)"/>
        {/* warm light glow */}
        <circle cx="640" cy="180" r="120" fill="#c49a45" opacity="0.18"/>
        {/* subtle grain texture via dots */}
        <g opacity="0.05">
          {[...Array(80)].map((_, i) => (
            <circle key={i} cx={Math.random()*800} cy={Math.random()*600} r="1" fill="#fff"/>
          ))}
        </g>
      </svg>
    ),
    structure: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="conc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4a4438"/>
            <stop offset="1" stopColor="#1a1812"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#conc)"/>
        {/* concrete columns */}
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <rect x={60 + i*160} y="80" width="80" height="520" fill="#3a3428" opacity="0.85"/>
            <rect x={60 + i*160} y="80" width="80" height="6" fill="#15263a"/>
            <rect x={60 + i*160} y="280" width="80" height="6" fill="#15263a" opacity="0.5"/>
          </g>
        ))}
        {/* horizontal beams */}
        <rect x="0" y="80" width="800" height="14" fill="#0d1a2a"/>
        <rect x="0" y="280" width="800" height="10" fill="#0d1a2a" opacity="0.7"/>
        {/* warm light from left */}
        <rect width="800" height="600" fill="url(#warm-side)"/>
        <defs>
          <linearGradient id="warm-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c49a45" stopOpacity="0.25"/>
            <stop offset="0.5" stopColor="#c49a45" stopOpacity="0"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    team: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="team-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5a4a35"/>
            <stop offset="1" stopColor="#1a1812"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#team-bg)"/>
        {/* concrete texture */}
        <g opacity="0.4">
          {[...Array(20)].map((_, i) => (
            <line key={i} x1="0" y1={i*30} x2="800" y2={i*30} stroke="#000" strokeWidth="0.5"/>
          ))}
        </g>
        {/* worker silhouette - hard hat shape */}
        <ellipse cx="400" cy="320" rx="60" ry="40" fill="#a07a2c"/>
        <rect x="350" y="320" width="100" height="20" fill="#a07a2c"/>
        <rect x="320" y="340" width="160" height="220" fill="#7E5F1F"/>
        {/* scaffolding bars */}
        <line x1="100" y1="100" x2="100" y2="600" stroke="#15263a" strokeWidth="3"/>
        <line x1="700" y1="100" x2="700" y2="600" stroke="#15263a" strokeWidth="3"/>
        <line x1="100" y1="200" x2="700" y2="200" stroke="#15263a" strokeWidth="2"/>
        <line x1="100" y1="400" x2="700" y2="400" stroke="#15263a" strokeWidth="2"/>
        {/* warm sunset glow */}
        <circle cx="200" cy="120" r="160" fill="#c49a45" opacity="0.22"/>
      </svg>
    ),
    hospital: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hosp-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2a3a4e"/>
            <stop offset="1" stopColor="#0e1825"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#hosp-bg)"/>
        {/* hospital facade — long horizontal building */}
        <rect x="40" y="180" width="720" height="380" fill="#15263a"/>
        {/* window grid */}
        {[...Array(14)].map((_, c) => 
          [...Array(6)].map((__, r) => (
            <rect key={`${c}-${r}`} x={60 + c*52} y={210 + r*55} width="36" height="32"
              fill={Math.random() > 0.4 ? "#c49a45" : "#3a4a5e"} opacity={Math.random() > 0.4 ? 0.85 : 0.4}/>
          ))
        )}
        {/* ground */}
        <rect x="0" y="540" width="800" height="60" fill="#1a1410"/>
        {/* entrance canopy */}
        <rect x="340" y="430" width="120" height="6" fill="#a07a2c"/>
        <rect x="370" y="436" width="60" height="124" fill="#0d1a2a"/>
      </svg>
    ),
    school: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="sch-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5a5848"/>
            <stop offset="1" stopColor="#2a2418"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#sch-bg)"/>
        {/* low-rise school building */}
        <rect x="60" y="280" width="680" height="280" fill="#15263a"/>
        <rect x="60" y="270" width="680" height="14" fill="#a07a2c"/>
        {/* arched windows */}
        {[...Array(8)].map((_, i) => (
          <g key={i}>
            <rect x={120 + i*78} y="320" width="50" height="120" fill="#c49a45" opacity="0.7"/>
            <path d={`M ${120 + i*78} 320 Q ${145 + i*78} 290 ${170 + i*78} 320`} fill="#c49a45" opacity="0.7"/>
          </g>
        ))}
        {/* yard */}
        <rect x="0" y="540" width="800" height="60" fill="#3a3328"/>
        {/* tree silhouettes */}
        <circle cx="80" cy="500" r="40" fill="#1a2418"/>
        <rect x="76" y="490" width="8" height="50" fill="#0a0a08"/>
      </svg>
    ),
    commercial: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="com-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#3a3a4a"/>
            <stop offset="1" stopColor="#0a0e18"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#com-bg)"/>
        {/* glass tower */}
        <rect x="240" y="40" width="320" height="560" fill="#0d1a2a"/>
        {[...Array(20)].map((_, r) => 
          [...Array(8)].map((__, c) => (
            <rect key={`${r}-${c}`} x={250 + c*38} y={50 + r*28} width="32" height="22"
              fill={Math.random() > 0.5 ? "#c49a45" : "#2a3a4e"} opacity={Math.random() > 0.5 ? 0.7 : 0.3}/>
          ))
        )}
        {/* side reflections */}
        <rect x="240" y="40" width="6" height="560" fill="#a07a2c" opacity="0.6"/>
        <rect x="554" y="40" width="6" height="560" fill="#a07a2c" opacity="0.4"/>
      </svg>
    ),
    interior: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="int-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5a4a35"/>
            <stop offset="1" stopColor="#1a1410"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#int-bg)"/>
        {/* perspective lines — a corridor */}
        <polygon points="0,0 800,0 600,600 200,600" fill="#3a3428"/>
        <polygon points="200,150 600,150 500,450 300,450" fill="#15263a"/>
        <polygon points="300,250 500,250 460,350 340,350" fill="#0d1a2a"/>
        {/* warm light at end */}
        <rect x="350" y="280" width="100" height="60" fill="#c49a45" opacity="0.9"/>
        {/* ceiling beams */}
        {[200, 300, 400, 500].map(x => (
          <line key={x} x1={x} y1="0" x2={x*0.5+200} y2="600" stroke="#0a0a08" strokeWidth="2" opacity="0.5"/>
        ))}
      </svg>
    ),
    rebar: (
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="rebar-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a4438"/>
            <stop offset="1" stopColor="#1a1812"/>
          </linearGradient>
        </defs>
        <rect width="800" height="600" fill="url(#rebar-bg)"/>
        {/* vertical rebars */}
        {[...Array(20)].map((_, i) => (
          <line key={i} x1={20 + i*40} y1="0" x2={20 + i*40} y2="600"
            stroke="#a07a2c" strokeWidth="3" opacity={0.4 + Math.random() * 0.5}/>
        ))}
        {/* horizontal ties */}
        {[...Array(8)].map((_, i) => (
          <line key={i} x1="0" y1={50 + i*70} x2="800" y2={50 + i*70}
            stroke="#7E5F1F" strokeWidth="2" opacity="0.6"/>
        ))}
        {/* warm glow */}
        <circle cx="650" cy="120" r="180" fill="#c49a45" opacity="0.18"/>
      </svg>
    ),
  };
  return (
    <div className={"photo " + className}>
      {variants[variant] || variants.site}
      {caption && <span className="photo__caption">{caption}</span>}
    </div>
  );
}

export { Photo };
export default Photo;
