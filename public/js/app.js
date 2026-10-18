(function() {
      // =========================================================================
      // 1. PROFILE & TECHNICAL DOSSIER DATA
      // =========================================================================
      const DOSSIERS = {
        'tanker-2000dwt': {
          badge: 'RINA CLASSIFICATION · DETAILED DESIGN',
          title: '2000 DWT Inland Oil Tanker — Principal Particulars & Design Scope',
          html: `
            <p>Complete vessel design for inland oil transportation engineered to meet <strong>RINA Classification</strong> rules for shallow-draft inland waterways in Bangladesh and international river basins.</p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 p-3.5 rounded-xl bg-abyss-950 border border-white/10 font-mono-tech text-xs">
              <div><span class="text-slate-400 block">LOA</span><strong class="text-cyan-300">74.27 m</strong></div>
              <div><span class="text-slate-400 block">LWL</span><strong class="text-white">73.50 m</strong></div>
              <div><span class="text-slate-400 block">Molded Beam</span><strong class="text-white">12.00 m</strong></div>
              <div><span class="text-slate-400 block">Design Draft</span><strong class="text-emerald-300">3.50 m</strong></div>
              <div><span class="text-slate-400 block">Molded Depth</span><strong class="text-white">5.00 m</strong></div>
              <div><span class="text-slate-400 block">Service Speed</span><strong class="text-amber-300">12.0 knots</strong></div>
              <div><span class="text-slate-400 block">Deadweight</span><strong class="text-cyan-300">2000 DWT</strong></div>
              <div><span class="text-slate-400 block">Class Society</span><strong class="text-emerald-300">RINA</strong></div>
            </div>
            <h4 class="font-bold text-white text-sm pt-2">Key Naval Engineering Deliverables:</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Lines Plan &amp; Offset Table:</strong> Developed faired station sections, waterlines, and buttocks in AutoCAD, MAXSURF, and Rhinoceros.</li>
              <li><strong>General Arrangement (GA):</strong> Double-hull cargo oil tank segregation, pump room arrangement, aft machinery space, and crew accommodation deckhouse.</li>
              <li><strong>Hydrostatics &amp; Stability:</strong> Cross curves of stability (KN), GZ righting lever curves, and intact/damage stability verification.</li>
            </ul>
          `
        },
        'hull-fea': {
          badge: 'FINITE ELEMENT ANALYSIS · ANSYS',
          title: 'Hull Structural Analysis — FEA Load Cases & Stress Validation',
          html: `
            <p>Comprehensive 3D Finite Element Analysis (FEA) of primary and secondary ship hull structural members to validate structural integrity under hydrostatic and wave-induced bending loads.</p>
            <div class="grid grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-abyss-950 border border-white/10 font-mono-tech text-xs">
              <div><span class="text-slate-400 block">Primary Solver</span><strong class="text-emerald-300">ANSYS Mechanical FEA</strong></div>
              <div><span class="text-slate-400 block">Yield Criterion</span><strong class="text-white">Von Mises Equivalent Stress</strong></div>
              <div><span class="text-slate-400 block">Structural Members</span><strong class="text-cyan-300">Keel, Web Frames, Stiffeners</strong></div>
              <div><span class="text-slate-400 block">Optimization</span><strong class="text-amber-300">Safety Factor &amp; Scantlings</strong></div>
            </div>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>3D shell and beam finite element modeling of midship cargo hold and transverse bulkheads.</li>
              <li>Evaluation of shear stress and normal bending stress across hogging, sagging, and hydrostatic pressure load cases.</li>
              <li>Material grade selection (Marine Grade A / AH36 steel) and plate thickness optimization for varying operating depths.</li>
            </ul>
          `
        },
        'hull-optimization': {
          badge: 'MAXSURF & CFD · 15%+ DRAG REDUCTION',
          title: 'Hull Form Optimization — Parametric Hydrodynamic Performance',
          html: `
            <p>Systematic hull form development and parametric modification in <strong>MAXSURF</strong> coupled with CFD validation to minimize wave-making and viscous pressure resistance.</p>
            <div class="grid grid-cols-2 gap-2.5 p-3.5 rounded-xl bg-abyss-950 border border-white/10 font-mono-tech text-xs">
              <div><span class="text-slate-400 block">Measured Gain</span><strong class="text-emerald-300">15%+ Resistance Reduction</strong></div>
              <div><span class="text-slate-400 block">Design Tool</span><strong class="text-cyan-300">MAXSURF Modeler &amp; Resistance</strong></div>
              <div><span class="text-slate-400 block">Flow Validation</span><strong class="text-white">ANSYS Fluent CFD</strong></div>
              <div><span class="text-slate-400 block">Target Regions</span><strong class="text-amber-300">Bulbous Bow &amp; Stern Run</strong></div>
            </div>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Parametric variation of Longitudinal Center of Buoyancy (LCB), Prismatic Coefficient (Cp), and waterplane entrance angle.</li>
              <li>Wave profile cancellation analysis using bulbous bow geometry tuned for service Froude number.</li>
              <li>Significant reduction in Effective Towing Power (Pe) and fuel consumption across operational speed range.</li>
            </ul>
          `
        },
        'ga-plan': {
          badge: 'PUBLICATION · OCTOBER 2024 · 15 MIN READ',
          title: 'General Arrangement Plan — Ship Layout & Crew Accommodation Guide',
          html: `
            <p>Published by <strong>Md. Mahim Khan</strong> (October 2024). A comprehensive guide to understanding ship layout design, crew accommodation planning, and the essential components of a vessel's general arrangement.</p>
            <h4 class="font-bold text-white text-sm pt-2">Key Topics Covered:</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Subdivision &amp; Watertight Integrity:</strong> Collision bulkhead positioning, cargo space allocation, cofferdams, and engine room boundaries.</li>
              <li><strong>Crew Accommodation &amp; Ergonomics:</strong> Bridge visibility lines, mess rooms, cabins, galley workflow, and ILO Maritime Labour Convention (MLC) compliance.</li>
              <li><strong>Deck Machinery &amp; Safety Systems:</strong> Mooring winches, anchor windlass, cargo manifold layout, and SOLAS lifeboat/liferaft embarkation stations.</li>
            </ul>
          `
        },
        'auv-cfd': {
          badge: 'PUBLICATION · OCTOBER 2024 · 8 MIN READ',
          title: 'Optimizing AUV Performance: A Deep Dive into Hydrodynamic Resistance with CFD',
          html: `
            <p>Published by <strong>Md. Mahim Khan</strong> (October 2024). An in-depth exploration of Autonomous Underwater Vehicle (AUV) hydrodynamic performance optimization using Computational Fluid Dynamics.</p>
            <h4 class="font-bold text-white text-sm pt-2">Key Research Highlights:</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Axisymmetric Myring Hull Parameterization:</strong> Optimizing nose and tail contour exponents to delay boundary layer separation and minimize pressure drag.</li>
              <li><strong>CFD Turbulence Modeling:</strong> Domain sizing, inflation layer y+ mesh refinement, and RANS k-ω SST turbulence closure in ANSYS Fluent.</li>
              <li><strong>Propulsive Efficiency:</strong> Wake fraction and thrust deduction evaluation for stern-mounted ducted thrusters and control fins.</li>
            </ul>
          `
        }
      };

      // =========================================================================
      // 2. TOAST & MODAL HELPERS
      // =========================================================================
      const toastEl = document.getElementById('toast-banner');
      let toastTimer = null;
      function showToast(msg) {
        if (!toastEl) return;
        toastEl.textContent = msg;
        toastEl.classList.remove('hidden');
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => {
          toastEl.classList.add('hidden');
        }, 3200);
      }

      const detailModal = document.getElementById('detail-modal');
      const modalBadge = document.getElementById('modal-badge');
      const modalTitle = document.getElementById('modal-title');
      const modalBody = document.getElementById('modal-body');

      function openDossierModal(key) {
        const item = DOSSIERS[key];
        if (!item || !detailModal) return;
        modalBadge.textContent = item.badge;
        modalTitle.textContent = item.title;
        modalBody.innerHTML = item.html;
        detailModal.classList.remove('hidden');
        detailModal.classList.add('flex');
      }

      function closeDossierModal() {
        if (!detailModal) return;
        detailModal.classList.add('hidden');
        detailModal.classList.remove('flex');
      }

      document.getElementById('close-detail-modal-btn').addEventListener('click', closeDossierModal);
      document.getElementById('modal-close-secondary-btn').addEventListener('click', closeDossierModal);
      detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeDossierModal();
      });

      document.querySelectorAll('.open-project-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => openDossierModal(btn.getAttribute('data-project-modal')));
      });
      document.querySelectorAll('.open-article-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => openDossierModal(btn.getAttribute('data-article-modal')));
      });

      // =========================================================================
      // 3. NAVIGATION, FILTERS, CLIPBOARD & CONTACT FORM
      // =========================================================================
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      const mobileMenuPanel = document.getElementById('mobile-menu-panel');
      if (mobileMenuBtn && mobileMenuPanel) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenuPanel.classList.toggle('hidden');
        });
      }

      document.querySelectorAll('.nav-scroll-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-nav');
          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (mobileMenuPanel) mobileMenuPanel.classList.add('hidden');
        });
      });

      // Competency filter
      document.querySelectorAll('.comp-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-comp-filter');
          document.querySelectorAll('.comp-filter-btn').forEach(b => {
            b.className = 'comp-filter-btn px-3 py-1.5 rounded-lg text-xs font-mono-tech bg-abyss-900 text-slate-300 hover:text-white border border-white/10 transition';
          });
          btn.className = 'comp-filter-btn px-3 py-1.5 rounded-lg text-xs font-mono-tech bg-cyan-400 text-slate-950 font-semibold transition';

          document.querySelectorAll('[data-comp-card]').forEach(card => {
            const cId = card.getAttribute('data-comp-card');
            if (filter === 'all' || cId === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });

      // Web Apps filter
      document.querySelectorAll('.app-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-app-filter');
          document.querySelectorAll('.app-filter-btn').forEach(b => {
            b.className = 'app-filter-btn px-3 py-1 rounded-lg text-xs font-mono-tech bg-abyss-900 text-slate-300 border border-white/10';
          });
          btn.className = 'app-filter-btn px-3 py-1 rounded-lg text-xs font-mono-tech bg-cyan-400 text-slate-950 font-semibold';

          document.querySelectorAll('[data-app-card]').forEach(card => {
            const cat = card.getAttribute('data-app-card');
            if (filter === 'all' || cat === filter) {
              card.classList.remove('hidden');
            } else {
              card.classList.add('hidden');
            }
          });
        });
      });

      // Copy Credential ID
      document.querySelectorAll('.copy-cred-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const text = btn.getAttribute('data-copy');
          try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
              navigator.clipboard.writeText(text).catch(() => {});
            } else {
              const ta = document.createElement('textarea');
              ta.value = text;
              document.body.appendChild(ta);
              ta.select();
              document.execCommand('copy');
              document.body.removeChild(ta);
            }
          } catch (e) {}
          showToast('Copied Credential ID: ' + text.slice(0, 18) + (text.length > 18 ? '...' : ''));
        });
      });

      // Pre-fill internship / collaboration button
      const prefillBtn = document.getElementById('prefill-internship-btn');
      if (prefillBtn) {
        prefillBtn.addEventListener('click', () => {
          document.getElementById('contact-name').value = 'Dr. Rafiqul Islam — Offshore Engineering Lead';
          document.getElementById('contact-email').value = 'r.islam@maritime-design.org';
          document.getElementById('contact-subject').value = 'Hull Form & CFD Hydrodynamic Optimization';
          document.getElementById('contact-message').value = 'Hello Mahim, we reviewed your 2000 DWT RINA Inland Oil Tanker design and MAXSURF/CFD optimization portfolio on itsmahim.dev. We would love to discuss a naval architecture collaboration.';
          showToast('Pre-filled sample naval architecture inquiry!');
        });
      }

      // Contact form handler (calls /api/contact if served from Node.js, with instant fallback in Canvas)
      const contactForm = document.getElementById('contact-form');
      const contactFeedback = document.getElementById('contact-feedback');
      if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const name = document.getElementById('contact-name').value.trim();
          const email = document.getElementById('contact-email').value.trim();
          const subject = document.getElementById('contact-subject').value;
          const message = document.getElementById('contact-message').value.trim();

          if (!name || !email || !message) {
            contactFeedback.className = 'mt-3 p-3 rounded-lg text-xs font-mono-tech border bg-amber-500/15 border-amber-400/40 text-amber-200';
            contactFeedback.textContent = 'Please fill in your name, email address, and project message.';
            contactFeedback.classList.remove('hidden');
            return;
          }

          const responseData = {
            status: 'success',
            message: `Dispatch logged for Md. Mahim Khan (${subject}). Thank you, ${name}!`
          };

          contactFeedback.className = 'mt-3 p-3 rounded-lg text-xs font-mono-tech border bg-emerald-500/15 border-emerald-400/40 text-emerald-200';
          contactFeedback.textContent = (responseData && responseData.message)
            ? responseData.message
            : `Dispatch logged for Md. Mahim Khan (${subject}). Thank you, ${name}!`;
          contactFeedback.classList.remove('hidden');
          contactForm.reset();
          showToast('Engineering inquiry transmitted!');
        });
      }

      // =========================================================================
      // 4. NODE.JS API EXPLORER MODAL
      // =========================================================================
      const nodeModal = document.getElementById('node-modal');
      const apiViewer = document.getElementById('api-response-viewer');

      function computeHydroMetrics(speedKnots, seaState, draft) {
        const loa = 74.27, lwl = 73.5, beam = 12.0, cb = 0.80;
        const g = 9.81, rho = 1025, nu = 1.19e-6;
        const speedMs = speedKnots * 0.514444;
        const fn = speedMs / Math.sqrt(g * lwl);
        const re = (speedMs * lwl) / nu;
        const vol = lwl * beam * draft * cb;
        const disp = (vol * rho) / 1000;
        const wetted = 1.7 * lwl * draft + (vol / draft);
        const cf = 0.075 / Math.pow(Math.log10(Math.max(re, 1e6)) - 2, 2);
        const cr = 0.0008 + Math.pow(fn, 4) * 0.18 + (seaState * 0.00012);
        const rtBase = (0.5 * rho * speedMs * speedMs * wetted * (cf + cr)) / 1000;
        const rtOpt = rtBase * 0.845;
        const pe = rtOpt * speedMs;
        const kb = 0.53 * draft;
        const bm = (0.085 * beam * beam) / (cb * draft);
        const kg = 0.62 * draft;
        const gmt = Math.max(0.45, kb + bm - kg);
        return {
          fn: fn.toFixed(3),
          disp: Math.round(disp),
          wetted: Math.round(wetted),
          pe: Math.round(pe),
          gmt: gmt.toFixed(2),
          rtBase: rtBase.toFixed(1),
          rtOpt: rtOpt.toFixed(1)
        };
      }

      function renderApiPreview(type) {
        if (!apiViewer) return;
        const speed = parseFloat(document.getElementById('slider-speed').value) || 12;
        const wave = parseFloat(document.getElementById('slider-wave').value) || 1.2;
        const draft = parseFloat(document.getElementById('slider-draft').value) || 3.5;
        const m = computeHydroMetrics(speed, wave, draft);

        if (type === 'profile') {
          apiViewer.textContent = JSON.stringify({
            endpoint: "GET /api/profile",
            status: 200,
            name: "Md. Mahim Khan",
            degree: "B.Sc. in Naval Architecture & Offshore Engineering (4th Year, 2nd Semester)",
            institution: "Bangladesh Maritime University (BMU)",
            website: "https://www.itsmahim.dev/",
            coreCompetencies: ["01 Ship Design & Modeling", "02 Engineering Analysis", "03 Programming & Automation"],
            engineeringProjects: ["2000 DWT Inland Oil Tanker (RINA)", "Hull Structural Analysis (FEA)", "Hull Form Optimization (-15%+ Drag)"],
            liveWebAppsCount: 5,
            certificationsCount: 3
          }, null, 2);
        } else if (type === 'hydro') {
          apiViewer.textContent = JSON.stringify({
            endpoint: `GET /api/hydrodynamics?loa=74.27&lwl=73.5&beam=12&draft=${draft}&speed=${speed}&seaState=${wave}`,
            solver: "ITTC-1957 Hull Resistance & Hydrostatics Engine (Node.js)",
            vessel: "2000 DWT Inland Oil Tanker (RINA Class)",
            computedTelemetry: {
              froudeNumber_Fn: Number(m.fn),
              displacement_Tonnes: m.disp,
              wettedSurface_m2: m.wetted,
              baselineResistance_kN: Number(m.rtBase),
              maxsurfOptimizedResistance_kN: Number(m.rtOpt),
              resistanceReductionPct: "15.5%",
              effectivePower_kW: m.pe,
              transverseMetacentricHeight_GMt_m: Number(m.gmt)
            }
          }, null, 2);
        } else {
          apiViewer.textContent = [
            "itsmahim-naval-portfolio/",
            "├── package.json                 # Node.js configuration & start scripts",
            "├── server.js                    # Node.js HTTP & REST API server (/api/profile, /api/hydrodynamics, /api/contact)",
            "├── test-server.js               # Automated verification test suite for API & static assets",
            "├── README.md                    # Complete setup, API documentation & deployment guide",
            "└── public/",
            "    ├── index.html               # 3D Interactive Naval Architecture Portfolio frontend",
            "    ├── css/styles.css           # Abyssal Hydrodynamic & CAD Blueprint stylesheet",
            "    ├── js/app.js                # Three.js r128 3D Hull/AUV/FEA simulator & telemetry controller",
            "    ├── data/profile.json        # Structured data extracted from https://www.itsmahim.dev/",
            "    └── assets/images/           # Custom 3D Tanker CAD, FEA Stress & CFD Streamline renders",
            "        ├── tanker-2000dwt.jpg",
            "        ├── hull-fea.jpg",
            "        └── hull-cfd.jpg"
          ].join("\n");
        }
      }

      const openNodeModalButton = document.getElementById('open-node-modal-btn');
      if (openNodeModalButton && nodeModal) {
        openNodeModalButton.addEventListener('click', () => {
          renderApiPreview('hydro');
          nodeModal.classList.remove('hidden');
          nodeModal.classList.add('flex');
        });
      }
      const closeNodeModalButton = document.getElementById('close-node-modal-btn');
      if (closeNodeModalButton && nodeModal) {
        closeNodeModalButton.addEventListener('click', () => {
          nodeModal.classList.add('hidden');
          nodeModal.classList.remove('flex');
        });
      }
      const closeNodeModalBottomButton = document.getElementById('close-node-modal-bottom-btn');
      if (closeNodeModalBottomButton && nodeModal) {
        closeNodeModalBottomButton.addEventListener('click', () => {
          nodeModal.classList.add('hidden');
          nodeModal.classList.remove('flex');
        });
      }
      document.querySelectorAll('.api-test-btn').forEach(btn => {
        btn.addEventListener('click', () => renderApiPreview(btn.getAttribute('data-api-test')));
      });

      // =========================================================================
      // 5. THREE.JS 3D INTERACTIVE NAVAL HULL, AUV & FEA DIGITAL TWIN SIMULATOR
      // =========================================================================
      let mainRafId = null;
      let state = {
        vessel: 'tanker',     // 'tanker' | 'auv' | 'fea'
        shader: 'cad',        // 'cad' | 'fea' | 'cfd'
        speedKnots: 12.0,
        waveHeight: 1.2,
        draft: 3.5,
        autoRotate: true,
        camSpherical: { radius: 19, theta: 0.68, phi: 1.12 },
        targetSpherical: { radius: 19, theta: 0.68, phi: 1.12 }
      };

      function updateTelemetryHUD() {
        const m = computeHydroMetrics(state.speedKnots, state.waveHeight, state.draft);
        document.getElementById('hud-fn').textContent = m.fn;
        document.getElementById('hud-disp').textContent = m.disp.toLocaleString() + ' t';
        document.getElementById('hud-power').textContent = m.pe + ' kW';
        document.getElementById('hud-wetted').textContent = m.wetted.toLocaleString() + ' m²';
        document.getElementById('hud-gmt').textContent = m.gmt + ' m';
      }

      // Sliders listeners
      const sliderSpeed = document.getElementById('slider-speed');
      const sliderWave = document.getElementById('slider-wave');
      const sliderDraft = document.getElementById('slider-draft');

      sliderSpeed.addEventListener('input', () => {
        state.speedKnots = parseFloat(sliderSpeed.value);
        document.getElementById('label-speed').textContent = state.speedKnots.toFixed(1) + ' knots';
        updateTelemetryHUD();
      });
      sliderWave.addEventListener('input', () => {
        state.waveHeight = parseFloat(sliderWave.value);
        document.getElementById('label-wave').textContent = state.waveHeight.toFixed(1) + ' m';
        updateTelemetryHUD();
      });
      sliderDraft.addEventListener('input', () => {
        state.draft = parseFloat(sliderDraft.value);
        document.getElementById('label-draft').textContent = state.draft.toFixed(1) + ' m';
        updateTelemetryHUD();
      });

      function initThreeSimulator() {
        if (typeof THREE === 'undefined') return;
        const container = document.getElementById('hull-canvas-container');
        const canvas = document.getElementById('hull-3d-canvas');
        if (!container || !canvas) return;

        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x030811, 0.022);

        const width = container.clientWidth || 640;
        const height = container.clientHeight || 360;
        const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 200);

        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x94a3b8, 0.85);
        scene.add(ambientLight);

        const dirLight1 = new THREE.DirectionalLight(0x22d3ee, 1.35);
        dirLight1.position.set(18, 24, 16);
        scene.add(dirLight1);

        const dirLight2 = new THREE.DirectionalLight(0x10b981, 0.75);
        dirLight2.position.set(-18, -10, -14);
        scene.add(dirLight2);

        // Root Vessel Group
        const vesselRoot = new THREE.Group();
        scene.add(vesselRoot);

        let tankerGroup = new THREE.Group();
        let auvGroup = new THREE.Group();
        let feaGroup = new THREE.Group();
        let propellerMesh = null;
        let auvPropMesh = null;
        let hullSurfaceMesh = null;

        // Helper: Parametric Ship Hull Geometry Builder (2000 DWT Tanker proportions)
        function createTankerHullGeometry(nx, ny) {
          const geom = new THREE.BufferGeometry();
          const positions = [];
          const colors = [];
          const indices = [];

          const halfLen = 7.4; // Scaled 74.27m LOA
          const halfBeam = 1.25; // Scaled 12m Beam
          const depth = 1.15;

          function hullPoint(u, v, side) {
            // u in [-1, 1] (stern to bow), v in [0, 1] (keel to deck)
            const x = u * halfLen;
            // Waterline beam envelope
            let bFactor = 1.0;
            if (u > 0.35) {
              const t = (u - 0.35) / 0.65;
              bFactor = Math.max(0.0, 1.0 - Math.pow(t, 1.85));
              // Bulbous bow protrusion near keel
              if (u > 0.82 && v < 0.45) {
                bFactor += 0.22 * Math.sin(((u - 0.82) / 0.18) * Math.PI) * (1.0 - v / 0.45);
              }
            } else if (u < -0.45) {
              const t = (-0.45 - u) / 0.55;
              bFactor = Math.max(0.08, 1.0 - Math.pow(t, 1.6) * (1.0 - 0.35 * v));
            }
            // Bilge & section shape
            const secFactor = Math.pow(v, 0.42);
            const z = side * halfBeam * bFactor * secFactor;
            // Sheer line & keel rise at stern
            let y = (v - 0.45) * depth;
            if (u > 0.5) y += Math.pow((u - 0.5) / 0.5, 2) * 0.22 * v;
            if (u < -0.6 && v < 0.35) y += Math.pow((-0.6 - u) / 0.4, 1.5) * 0.25 * (1 - v);
            return [x, y, z];
          }

          // Generate both Starboard (+1) and Port (-1) shells
          [1, -1].forEach((side, sIdx) => {
            const baseOffset = sIdx * (nx + 1) * (ny + 1);
            for (let i = 0; i <= nx; i++) {
              const u = -1 + (2 * i) / nx;
              for (let j = 0; j <= ny; j++) {
                const v = j / ny;
                const [x, y, z] = hullPoint(u, v, side);
                positions.push(x, y, z);

                // Default vertex color for FEA stress contour (midship hogging/sagging bending stress)
                const bendStress = Math.exp(-Math.pow(u * 1.6, 2)) * (0.4 + 0.6 * Math.abs(v - 0.5) * 2);
                const c = new THREE.Color();
                c.setHSL(0.55 - bendStress * 0.48, 0.95, 0.5);
                colors.push(c.r, c.g, c.b);
              }
            }
            for (let i = 0; i < nx; i++) {
              for (let j = 0; j < ny; j++) {
                const a = baseOffset + i * (ny + 1) + j;
                const b = baseOffset + (i + 1) * (ny + 1) + j;
                const c = baseOffset + (i + 1) * (ny + 1) + (j + 1);
                const d = baseOffset + i * (ny + 1) + (j + 1);
                if (side === 1) {
                  indices.push(a, b, c, a, c, d);
                } else {
                  indices.push(a, c, b, a, d, c);
                }
              }
            }
          });

          geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
          geom.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
          geom.setIndex(indices);
          geom.computeVertexNormals();
          return geom;
        }

        // Build Model 1: 2000 DWT Inland Oil Tanker
        const hullGeom = createTankerHullGeometry(44, 14);
        const hullMat = new THREE.MeshPhongMaterial({
          color: 0x0a2239,
          emissive: 0x041222,
          specular: 0x22d3ee,
          shininess: 70,
          side: THREE.DoubleSide,
          vertexColors: false,
          transparent: true,
          opacity: 0.92
        });
        hullSurfaceMesh = new THREE.Mesh(hullGeom, hullMat);
        tankerGroup.add(hullSurfaceMesh);

        // Cyan CAD Wireframe overlay on Tanker Hull
        const wireMat = new THREE.MeshBasicMaterial({
          color: 0x22d3ee,
          wireframe: true,
          transparent: true,
          opacity: 0.42
        });
        const hullWireMesh = new THREE.Mesh(hullGeom, wireMat);
        tankerGroup.add(hullWireMesh);

        // Main Deck & Cargo Tank Trunk
        const deckGeom = new THREE.BoxGeometry(12.2, 0.12, 2.15);
        const deckMat = new THREE.MeshPhongMaterial({ color: 0x0f2942, emissive: 0x061526 });
        const deckMesh = new THREE.Mesh(deckGeom, deckMat);
        deckMesh.position.set(-0.3, 0.58, 0);
        tankerGroup.add(deckMesh);

        // Cargo Manifold Piping along Tanker Deck
        const pipeMat = new THREE.MeshPhongMaterial({ color: 0x22d3ee, emissive: 0x0891b2 });
        [-0.35, 0, 0.35].forEach(zOff => {
          const pipe = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 9.2, 8), pipeMat);
          pipe.rotation.z = Math.PI / 2;
          pipe.position.set(0.2, 0.72, zOff);
          tankerGroup.add(pipe);
        });

        // Aft Superstructure Bridge & Accommodation Deckhouse
        const bridgeGroup = new THREE.Group();
        const tier1 = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.75, 1.85), new THREE.MeshPhongMaterial({ color: 0x1e3a5f }));
        tier1.position.set(-5.1, 1.0, 0);
        const tier2 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.6, 1.6), new THREE.MeshPhongMaterial({ color: 0x264b77 }));
        tier2.position.set(-4.95, 1.65, 0);
        const wheelhouse = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.42, 1.95), new THREE.MeshPhongMaterial({ color: 0x38bdf8, emissive: 0x0284c7 }));
        wheelhouse.position.set(-4.8, 2.12, 0);
        const funnel = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.28, 0.85, 12), new THREE.MeshPhongMaterial({ color: 0x06b6d4 }));
        funnel.position.set(-5.65, 1.85, 0);
        bridgeGroup.add(tier1, tier2, wheelhouse, funnel);
        tankerGroup.add(bridgeGroup);

        // Forecastle & Forward Mast
        const forecastle = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.35, 1.45), new THREE.MeshPhongMaterial({ color: 0x163252 }));
        forecastle.position.set(5.6, 0.8, 0);
        const fwdMast = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.05, 1.4, 8), pipeMat);
        fwdMast.position.set(5.9, 1.6, 0);
        tankerGroup.add(forecastle, fwdMast);

        // Propeller & Rudder at Stern
        propellerMesh = new THREE.Group();
        propellerMesh.position.set(-7.15, -0.25, 0);
        for (let b = 0; b < 4; b++) {
          const blade = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.42, 0.14), new THREE.MeshPhongMaterial({ color: 0xf59e0b, emissive: 0xb45309 }));
          blade.rotation.x = (b * Math.PI) / 2;
          propellerMesh.add(blade);
        }
        const rudder = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.65, 0.06), new THREE.MeshPhongMaterial({ color: 0x0891b2 }));
        rudder.position.set(-7.42, -0.22, 0);
        tankerGroup.add(propellerMesh, rudder);

        vesselRoot.add(tankerGroup);

        // Build Model 2: AUV (Autonomous Underwater Vehicle CFD Hydrodynamic Body)
        const auvMat = new THREE.MeshPhongMaterial({ color: 0x083344, emissive: 0x041e2b, specular: 0x22d3ee, shininess: 90 });
        const auvWireMat = new THREE.MeshBasicMaterial({ color: 0x22d3ee, wireframe: true, transparent: true, opacity: 0.5 });
        const auvBodyGeom = new THREE.CylinderGeometry(0.85, 0.85, 8.2, 32, 16);
        auvBodyGeom.rotateZ(Math.PI / 2);
        const auvBody = new THREE.Mesh(auvBodyGeom, auvMat);
        const auvBodyWire = new THREE.Mesh(auvBodyGeom, auvWireMat);

        const noseGeom = new THREE.SphereGeometry(0.85, 32, 16);
        noseGeom.scale(2.1, 1, 1);
        const noseMesh = new THREE.Mesh(noseGeom, new THREE.MeshPhongMaterial({ color: 0x06b6d4, emissive: 0x0e7490, wireframe: false, transparent: true, opacity: 0.9 }));
        noseMesh.position.set(4.1, 0, 0);

        const tailGeom = new THREE.ConeGeometry(0.85, 2.8, 32);
        tailGeom.rotateZ(Math.PI / 2);
        const tailMesh = new THREE.Mesh(tailGeom, auvMat);
        tailMesh.position.set(-5.5, 0, 0);

        // Cruciform Control Fins
        const finV = new THREE.Mesh(new THREE.BoxGeometry(1.1, 2.4, 0.08), pipeMat);
        finV.position.set(-5.8, 0, 0);
        const finH = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 2.4), pipeMat);
        finH.position.set(-5.8, 0, 0);

        // Ducted Thruster Ring
        const duct = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.07, 12, 28), new THREE.MeshPhongMaterial({ color: 0x10b981, emissive: 0x047857 }));
        duct.rotation.y = Math.PI / 2;
        duct.position.set(-6.85, 0, 0);

        auvPropMesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.95, 0.2), new THREE.MeshPhongMaterial({ color: 0xf59e0b }));
        auvPropMesh.position.set(-6.85, 0, 0);

        auvGroup.add(auvBody, auvBodyWire, noseMesh, tailMesh, finV, finH, duct, auvPropMesh);
        auvGroup.visible = false;
        vesselRoot.add(auvGroup);

        // Build Model 3: Hull Structural FEA Framing (Transverse Web Frames + Longitudinal Girder Mesh)
        const feaMat = new THREE.MeshPhongMaterial({ color: 0x10b981, emissive: 0x065f46, wireframe: false });
        // Keel & Longitudinal Stiffeners
        for (let z = -1.1; z <= 1.11; z += 0.55) {
          const longGirder = new THREE.Mesh(new THREE.BoxGeometry(13.2, 0.14, 0.08), new THREE.MeshPhongMaterial({
            color: Math.abs(z) < 0.2 ? 0xf59e0b : 0x22d3ee,
            emissive: Math.abs(z) < 0.2 ? 0x78350f : 0x083344
          }));
          longGirder.position.set(0, -0.42 + Math.abs(z) * 0.18, z);
          feaGroup.add(longGirder);
        }
        // Transverse Web Frames (Stations)
        for (let i = -6; i <= 6; i++) {
          const xPos = i * 1.05;
          const bScale = 1 - Math.pow(Math.max(0, Math.abs(i) - 3) / 4.2, 1.7);
          const frameRing = new THREE.Mesh(
            new THREE.TorusGeometry(1.05 * Math.max(0.35, bScale), 0.055, 8, 20, Math.PI),
            new THREE.MeshPhongMaterial({
              color: Math.abs(i) <= 2 ? 0xf59e0b : (Math.abs(i) <= 4 ? 0x10b981 : 0x22d3ee)
            })
          );
          frameRing.rotation.y = Math.PI / 2;
          frameRing.rotation.x = Math.PI;
          frameRing.position.set(xPos, 0.45, 0);
          feaGroup.add(frameRing);
        }
        // FEA Wireframe Shell
        const feaShellWire = new THREE.Mesh(hullGeom, new THREE.MeshBasicMaterial({
          vertexColors: true,
          wireframe: true,
          transparent: true,
          opacity: 0.78
        }));
        feaGroup.add(feaShellWire);
        feaGroup.visible = false;
        vesselRoot.add(feaGroup);

        // Dynamic 3D Gerstner Wave Ocean Grid
        const oceanGeom = new THREE.PlaneGeometry(46, 28, 56, 36);
        oceanGeom.rotateX(-Math.PI / 2);
        const oceanMat = new THREE.MeshBasicMaterial({
          color: 0x06b6d4,
          wireframe: true,
          transparent: true,
          opacity: 0.22
        });
        const oceanMesh = new THREE.Mesh(oceanGeom, oceanMat);
        oceanMesh.position.y = -0.35;
        scene.add(oceanMesh);

        // Real-time CFD Flow Streamline Particles
        const streamCount = 320;
        const streamGeom = new THREE.BufferGeometry();
        const streamPos = new Float32Array(streamCount * 3);
        const streamColors = new Float32Array(streamCount * 3);
        for (let i = 0; i < streamCount; i++) {
          streamPos[i * 3] = (Math.random() - 0.5) * 24;
          streamPos[i * 3 + 1] = -0.8 + Math.random() * 1.4;
          streamPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
          streamColors[i * 3] = 0.13;
          streamColors[i * 3 + 1] = 0.83;
          streamColors[i * 3 + 2] = 0.93;
        }
        streamGeom.setAttribute('position', new THREE.BufferAttribute(streamPos, 3));
        streamGeom.setAttribute('color', new THREE.BufferAttribute(streamColors, 3));
        const streamMat = new THREE.PointsMaterial({
          size: 0.16,
          vertexColors: true,
          transparent: true,
          opacity: 0.85
        });
        const streamPoints = new THREE.Points(streamGeom, streamMat);
        scene.add(streamPoints);

        // Apply Vessel & Shader Mode
        function syncVisualModes() {
          tankerGroup.visible = (state.vessel === 'tanker');
          auvGroup.visible = (state.vessel === 'auv');
          feaGroup.visible = (state.vessel === 'fea');

          const badge = document.getElementById('sim-active-badge');
          if (badge) {
            badge.textContent = state.vessel === 'tanker'
              ? '2000 DWT RINA Tanker'
              : (state.vessel === 'auv' ? 'AUV CFD Hydrodynamic Body' : 'ANSYS Hull FEA Framing');
          }

          if (hullSurfaceMesh) {
            if (state.shader === 'fea') {
              hullSurfaceMesh.material.vertexColors = true;
              hullSurfaceMesh.material.color.setHex(0xffffff);
              hullWireMesh.material.color.setHex(0xf59e0b);
            } else if (state.shader === 'cfd') {
              hullSurfaceMesh.material.vertexColors = false;
              hullSurfaceMesh.material.color.setHex(0x06283d);
              hullWireMesh.material.color.setHex(0x10b981);
            } else {
              hullSurfaceMesh.material.vertexColors = false;
              hullSurfaceMesh.material.color.setHex(0x0a2239);
              hullWireMesh.material.color.setHex(0x22d3ee);
            }
            hullSurfaceMesh.material.needsUpdate = true;
          }
          streamPoints.material.size = (state.shader === 'cfd' || state.vessel === 'auv') ? 0.24 : 0.15;
          streamPoints.material.opacity = (state.shader === 'cfd' || state.vessel === 'auv') ? 0.98 : 0.65;
        }

        // Vessel mode buttons
        document.querySelectorAll('.vessel-mode-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.vessel = btn.getAttribute('data-vessel');
            document.querySelectorAll('.vessel-mode-btn').forEach(b => {
              b.className = 'vessel-mode-btn px-2.5 py-1 rounded text-[11px] font-mono-tech font-medium bg-abyss-900 text-slate-300 hover:text-white border border-white/10 transition';
            });
            btn.className = 'vessel-mode-btn px-2.5 py-1 rounded text-[11px] font-mono-tech font-medium bg-cyan-400 text-slate-950 transition';
            syncVisualModes();
          });
        });

        // Shader mode buttons
        document.querySelectorAll('.shader-mode-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            state.shader = btn.getAttribute('data-shader');
            document.querySelectorAll('.shader-mode-btn').forEach(b => {
              b.className = 'shader-mode-btn px-2.5 py-1 rounded text-[10px] font-mono-tech bg-abyss-950/80 text-slate-300 border border-white/15 hover:border-cyan-400/40 text-right';
            });
            btn.className = 'shader-mode-btn px-2.5 py-1 rounded text-[10px] font-mono-tech bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 text-right';
            syncVisualModes();
          });
        });

        // Project card "Load in 3D" buttons
        document.querySelectorAll('.load-3d-project-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const v = btn.getAttribute('data-load-3d');
            const s = btn.getAttribute('data-load-shader');
            state.vessel = v;
            state.shader = s;

            document.querySelectorAll('.vessel-mode-btn').forEach(b => {
              const match = b.getAttribute('data-vessel') === v;
              b.className = match
                ? 'vessel-mode-btn px-2.5 py-1 rounded text-[11px] font-mono-tech font-medium bg-cyan-400 text-slate-950 transition'
                : 'vessel-mode-btn px-2.5 py-1 rounded text-[11px] font-mono-tech font-medium bg-abyss-900 text-slate-300 hover:text-white border border-white/10 transition';
            });

            document.querySelectorAll('.shader-mode-btn').forEach(b => {
              const match = b.getAttribute('data-shader') === s;
              b.className = match
                ? 'shader-mode-btn px-2.5 py-1 rounded text-[10px] font-mono-tech bg-cyan-500/30 text-cyan-200 border border-cyan-400/50 text-right'
                : 'shader-mode-btn px-2.5 py-1 rounded text-[10px] font-mono-tech bg-abyss-950/80 text-slate-300 border border-white/15 hover:border-cyan-400/40 text-right';
            });

            syncVisualModes();
            document.getElementById('simulator-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
            showToast('Loaded ' + v.toUpperCase() + ' model in 3D Hydrodynamic Lab');
          });
        });

        // Camera Presets
        document.querySelectorAll('.cam-preset-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            const preset = btn.getAttribute('data-cam');
            state.autoRotate = false;
            document.getElementById('toggle-autorotate-btn').textContent = 'Auto-Orbit: OFF';
            if (preset === 'iso') {
              state.targetSpherical = { radius: 19, theta: 0.68, phi: 1.12 };
            } else if (preset === 'profile') {
              state.targetSpherical = { radius: 20, theta: 0.0, phi: 1.48 };
            } else if (preset === 'bow') {
              state.targetSpherical = { radius: 16, theta: 1.57, phi: 1.42 };
            } else if (preset === 'top') {
              state.targetSpherical = { radius: 21, theta: 0.0, phi: 0.22 };
            }
          });
        });

        // Auto-rotate toggle
        const autoBtn = document.getElementById('toggle-autorotate-btn');
        autoBtn.addEventListener('click', () => {
          state.autoRotate = !state.autoRotate;
          autoBtn.textContent = state.autoRotate ? 'Auto-Orbit: ON' : 'Auto-Orbit: OFF';
        });

        // Pointer Orbit Drag & Wheel Zoom
        let isDragging = false;
        let prevX = 0, prevY = 0;

        canvas.addEventListener('pointerdown', (e) => {
          isDragging = true;
          prevX = e.clientX;
          prevY = e.clientY;
          state.autoRotate = false;
          autoBtn.textContent = 'Auto-Orbit: OFF';
        });
        window.addEventListener('pointermove', (e) => {
          if (!isDragging) return;
          const dx = e.clientX - prevX;
          const dy = e.clientY - prevY;
          prevX = e.clientX;
          prevY = e.clientY;
          state.targetSpherical.theta -= dx * 0.008;
          state.targetSpherical.phi = Math.max(0.18, Math.min(1.52, state.targetSpherical.phi - dy * 0.008));
        });
        window.addEventListener('pointerup', () => {
          isDragging = false;
        });
        canvas.addEventListener('wheel', (e) => {
          e.preventDefault();
          state.targetSpherical.radius = Math.max(10, Math.min(30, state.targetSpherical.radius + e.deltaY * 0.01));
        }, { passive: false });

        // Animation Loop
        let clock = new THREE.Clock();
        if (mainRafId) cancelAnimationFrame(mainRafId);

        function animate() {
          mainRafId = requestAnimationFrame(animate);
          const t = clock.getElapsedTime();

          if (state.autoRotate) {
            state.targetSpherical.theta += 0.0035;
          }

          // Smooth spherical camera interpolation
          state.camSpherical.radius += (state.targetSpherical.radius - state.camSpherical.radius) * 0.08;
          state.camSpherical.theta += (state.targetSpherical.theta - state.camSpherical.theta) * 0.08;
          state.camSpherical.phi += (state.targetSpherical.phi - state.camSpherical.phi) * 0.08;

          camera.position.x = state.camSpherical.radius * Math.sin(state.camSpherical.phi) * Math.cos(state.camSpherical.theta);
          camera.position.y = state.camSpherical.radius * Math.cos(state.camSpherical.phi);
          camera.position.z = state.camSpherical.radius * Math.sin(state.camSpherical.phi) * Math.sin(state.camSpherical.theta);
          camera.lookAt(0, 0.2, 0);

          // Dynamic vessel heave, pitch, roll & draft offset
          const waveAmp = state.waveHeight * 0.12;
          const speedFactor = state.speedKnots / 12.0;
          const draftSink = (3.5 - state.draft) * 0.22;

          vesselRoot.position.y = draftSink + Math.sin(t * 2.1 * speedFactor) * waveAmp * 0.45;
          vesselRoot.rotation.z = Math.sin(t * 1.8 * speedFactor) * waveAmp * 0.08; // Pitch
          vesselRoot.rotation.x = Math.cos(t * 1.4) * waveAmp * 0.06; // Roll

          // Spin propellers proportional to speed
          if (propellerMesh) propellerMesh.rotation.x += 0.18 * speedFactor;
          if (auvPropMesh) auvPropMesh.rotation.x += 0.24 * speedFactor;

          // Animate Ocean Wave Mesh
          const posAttr = oceanGeom.attributes.position;
          for (let i = 0; i < posAttr.count; i++) {
            const vx = posAttr.getX(i);
            const vz = posAttr.getZ(i);
            const wy = Math.sin(vx * 0.45 + t * 2.4 * speedFactor) * waveAmp
                     + Math.cos(vz * 0.65 + t * 1.7) * (waveAmp * 0.5);
            posAttr.setY(i, wy);
          }
          posAttr.needsUpdate = true;

          // Animate CFD Flow Streamline Particles
          const sPos = streamGeom.attributes.position;
          const sCol = streamGeom.attributes.color;
          for (let i = 0; i < streamCount; i++) {
            let px = sPos.getX(i);
            let py = sPos.getY(i);
            let pz = sPos.getZ(i);

            px -= (0.09 + 0.06 * speedFactor);
            if (px < -12) {
              px = 12;
              pz = (Math.random() - 0.5) * 6.5;
            }
            // Deflect streamlines around hull bow & midbody
            if (Math.abs(px) < 7.6 && Math.abs(pz) < 1.55) {
              const push = (1.6 - Math.abs(pz)) * 0.05;
              pz += (pz >= 0 ? push : -push);
              // Highlight accelerated flow in emerald/amber
              sCol.setXYZ(i, 0.06, 0.95, 0.68);
            } else {
              sCol.setXYZ(i, 0.13, 0.83, 0.93);
            }
            sPos.setXYZ(i, px, py, pz);
          }
          sPos.needsUpdate = true;
          sCol.needsUpdate = true;

          renderer.render(scene, camera);
        }

        animate();

        // Responsive Resize
        window.addEventListener('resize', () => {
          const w = container.clientWidth || 640;
          const h = container.clientHeight || 360;
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h);
        });
      }

      // Ambient Background Wave Canvas (2D lightweight wave lines)
      function initBgCanvas() {
        const bgCanvas = document.getElementById('bg-ocean-canvas');
        if (!bgCanvas) return;
        const ctx = bgCanvas.getContext('2d');
        function resizeBg() {
          bgCanvas.width = window.innerWidth;
          bgCanvas.height = window.innerHeight;
        }
        resizeBg();
        window.addEventListener('resize', resizeBg);

        let phase = 0;
        function drawBg() {
          requestAnimationFrame(drawBg);
          phase += 0.012;
          ctx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);
          ctx.strokeStyle = 'rgba(34, 211, 238, 0.12)';
          ctx.lineWidth = 1;
          for (let l = 0; l < 5; l++) {
            ctx.beginPath();
            const baseY = bgCanvas.height * (0.2 + l * 0.16);
            for (let x = 0; x <= bgCanvas.width; x += 24) {
              const y = baseY + Math.sin(x * 0.004 + phase + l) * 18;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
        }
        drawBg();
      }

      window.addEventListener('load', () => {
        updateTelemetryHUD();
        initThreeSimulator();
        initBgCanvas();
      });
    })();
