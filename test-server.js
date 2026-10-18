/**
 * Automated Verification Suite for Md. Mahim Khan's Node.js 3D Portfolio Server
 */
const http = require('http');
const assert = require('assert');
const server = require('./server.js');

function request(path, method = 'GET', payload = null) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: '127.0.0.1',
      port: 0,
      path,
      method,
      headers: payload ? { 'Content-Type': 'application/json' } : {}
    };
    options.port = server.address().port;
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    if (payload) req.write(JSON.stringify(payload));
    req.end();
  });
}

server.listen(0, '127.0.0.1', async () => {
  try {
    const r1 = await request('/');
    assert.strictEqual(r1.status, 200);
    assert(r1.body.includes('Md. Mahim Khan'));

    const r2 = await request('/api/profile');
    assert.strictEqual(r2.status, 200);
    const profile = JSON.parse(r2.body);
    assert.strictEqual(profile.name, 'Md. Mahim Khan');
    assert.strictEqual(profile.webApps.length, 5);

    const r3 = await request('/api/hydrodynamics?loa=74.27&lwl=73.5&beam=12&draft=3.5&speed=12');
    assert.strictEqual(r3.status, 200);
    const hydro = JSON.parse(r3.body);
    assert(hydro.metrics.froudeNumber > 0);

    const r4 = await request('/api/contact', 'POST', {
      name: 'Verification Bot',
      email: 'verify@bmu.edu.bd',
      subject: 'RINA Tanker Design',
      message: 'Testing Node.js POST endpoint.'
    });
    assert.strictEqual(r4.status, 200);

    console.log('ALL NODE.JS SERVER & REST API CHECKS PASSED!');
    server.close(() => process.exit(0));
  } catch (err) {
    console.error('TEST FAILED:', err);
    server.close(() => process.exit(1));
  }
});
