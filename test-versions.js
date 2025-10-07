#!/usr/bin/env node

/**
 * Test script to verify both versions are running
 */

const http = require('http');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function testPort(port, name) {
  return new Promise((resolve) => {
    const req = http.get(`http://localhost:${port}`, (res) => {
      log(`✅ ${name} (port ${port}): HTTP ${res.statusCode}`, 'green');
      resolve(true);
    });
    
    req.on('error', (err) => {
      log(`❌ ${name} (port ${port}): ${err.message}`, 'red');
      resolve(false);
    });
    
    req.setTimeout(5000, () => {
      log(`⏰ ${name} (port ${port}): Timeout`, 'yellow');
      req.destroy();
      resolve(false);
    });
  });
}

async function testBothVersions() {
  log('\n🧪 Testing both versions...\n', 'blue');
  
  const [current, redesigned] = await Promise.all([
    testPort(3000, 'Current Version'),
    testPort(3001, 'Redesigned Version')
  ]);
  
  log('\n📊 Results:', 'blue');
  log(`Current Version (3000): ${current ? '✅ Running' : '❌ Not running'}`, current ? 'green' : 'red');
  log(`Redesigned Version (3001): ${redesigned ? '✅ Running' : '❌ Not running'}`, redesigned ? 'green' : 'red');
  
  if (current && redesigned) {
    log('\n🎉 Both versions are running successfully!', 'green');
    log('📍 Current: http://localhost:3000', 'blue');
    log('📍 Redesigned: http://localhost:3001', 'blue');
  } else {
    log('\n⚠️  Some versions are not running. Check the logs above.', 'yellow');
  }
  
  log('');
}

testBothVersions();
