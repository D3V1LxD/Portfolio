/**
 * Md. Mahim Khan — Naval Architecture & Offshore Engineering 3D Portfolio Server
 * Domain: https://www.itsmahim.dev/
 * Built with Node.js HTTP/REST API & Three.js WebGL Interactive Hydrodynamic Digital Twin
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const PROFILE_PATH = path.join(PUBLIC_DIR, 'data', 'profile.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// In-memory store for contact inquiries submitted during runtime
const inquiries = [];

/**
 * Naval Architecture Hydrodynamic & ITTC-1957 Resistance Calculator
 * Computes Froude Number (Fn), Displacement, Wetted Surface, Resistance, and Power
 */
function calculateHydrodynamics(params) {
  const loa = parseFloat(params.loa) || 74.27;
  const lwl = parseFloat(params.lwl) || 73.5;
  const beam = parseFloat(params.beam) || 12.0;
  const draft = parseFloat(params.draft) || 3.5;
  const speedKnots = parseFloat(params.speed) || 12.0;
  const cb = parseFloat(params.cb) || 0.80;
  const seaState = parseFloat(params.seaState) || 1.2;

  const g = 9.81;
  const rho = 1025; // Seawater density kg/m^3
  const nu = 1.19e-6; // Kinematic viscosity m^2/s
  const speedMs = speedKnots * 0.514444;

  // Froude Number & Reynolds Number
  const froudeNumber = speedMs / Math.sqrt(g * lwl);
  const reynoldsNumber = (speedMs * lwl) / nu;

  // Volume & Displacement
  const moldedVolume = lwl * beam * draft * cb;
  const displacementTonnes = (moldedVolume * rho) / 1000;

  // Mumford / Denny Wetted Surface Area approximation (m^2)
  const wettedSurface = 1.7 * lwl * draft + (moldedVolume / draft);

  // ITTC-1957 Frictional Resistance Coefficient Cf
  const logRe = Math.log10(Math.max(reynoldsNumber, 1e6));
  const cf = 0.075 / Math.pow(logRe - 2, 2);

  // Wave-making & Sea-State Added Resistance approximation
  const cr = 0.0008 + Math.pow(froudeNumber, 4) * 0.18 + (seaState * 0.00012);
  const ct = cf + cr;

  // Total Resistance (kN) & Effective Power Pe (kW)
  const totalResistanceKN = (0.5 * rho * Math.pow(speedMs, 2) * wettedSurface * ct) / 1000;
  const optimizedResistanceKN = totalResistanceKN * 0.845; // 15.5% MAXSURF hull optimization gain
  const effectivePowerKW = optimizedResistanceKN * speedMs;

  // Transverse Metacentric Height GMt approximation (m)
  const kb = 0.53 * draft;
  const bm = (0.085 * Math.pow(beam, 2)) / (cb * draft);
  const kg = 0.62 * draft;
  const gmt = Math.max(0.45, kb + bm - kg);

  return {
    vessel: "2000 DWT Inland Oil Tanker (RINA Class)",
    inputs: { loa, lwl, beam, draft, speedKnots, cb, seaState },
    metrics: {
      speedMs: Number(speedMs.toFixed(2)),
      froudeNumber: Number(froudeNumber.toFixed(3)),
      reynoldsNumber: Number(reynoldsNumber.toExponential(2)),
      displacementTonnes: Math.round(displacementTonnes),
      wettedSurfaceM2: Math.round(wettedSurface),
      cf: Number(cf.toFixed(5)),
      baselineResistanceKN: Number(totalResistanceKN.toFixed(1)),
      optimizedResistanceKN: Number(optimizedResistanceKN.toFixed(1)),
      resistanceReductionPct: 15.5,
      effectivePowerKW: Math.round(effectivePowerKW),
      gmtMeters: Number(gmt.toFixed(2))
    }
  };
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // CORS headers for local development & API tools
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  // API Route 1: GET /api/profile
  if (pathname === '/api/profile' && req.method === 'GET') {
    fs.readFile(PROFILE_PATH, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: 'Failed to load profile data' }));
      }
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(data);
    });
    return;
  }

  // API Route 2: GET /api/hydrodynamics
  if (pathname === '/api/hydrodynamics' && req.method === 'GET') {
    const result = calculateHydrodynamics(parsedUrl.query);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify(result));
  }

  // API Route 3: POST /api/contact
  if (pathname === '/api/contact' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 1e5) req.socket.destroy();
    });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        if (!payload.name || !payload.email || !payload.message) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ status: 'error', message: 'Name, email, and message are required.' }));
        }
        const entry = {
          id: inquiries.length + 1,
          name: payload.name,
          email: payload.email,
          subject: payload.subject || 'Naval Architecture / Engineering Inquiry',
          message: payload.message,
          timestamp: new Date().toISOString()
        };
        inquiries.push(entry);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({
          status: 'success',
          message: 'Thank you! Your inquiry has been logged for Md. Mahim Khan.',
          entry
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status: 'error', message: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // Static File Serving
  let safePath = path.normalize(pathname === '/' ? '/index.html' : pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(PUBLIC_DIR, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA fallback to index.html
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        return res.end('404 Not Found');
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`==================================================================`);
    console.log(`🚢 Md. Mahim Khan — Naval Architecture 3D Portfolio Server Active`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log(`📡 API: http://localhost:${PORT}/api/profile`);
    console.log(`🌊 Hydrodynamics Engine: http://localhost:${PORT}/api/hydrodynamics`);
    console.log(`==================================================================`);
  });
}

module.exports = server;
