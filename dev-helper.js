#!/usr/bin/env node

/**
 * Development Helper Script
 * Helps manage running different versions of the website
 */

const { spawn } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const command = args[0];

const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(cmd, args, options = {}) {
  const child = spawn(cmd, args, {
    stdio: 'inherit',
    shell: true,
    ...options,
  });

  child.on('error', (error) => {
    log(`Error running command: ${error.message}`, 'red');
  });

  return child;
}

function showHelp() {
  log('\n🚀 PTC4U Homepage Development Helper\n', 'cyan');
  log('Available commands:', 'bright');
  log('  current     - Run current version (port 3000)', 'green');
  log('  redesign    - Run redesigned version (port 3001)', 'blue');
  log('  both        - Run both versions simultaneously', 'magenta');
  log('  help        - Show this help message', 'yellow');
  log('\nExamples:', 'bright');
  log('  node dev-helper.js current', 'green');
  log('  node dev-helper.js redesign', 'blue');
  log('  node dev-helper.js both', 'magenta');
  log('');
}

function runCurrent() {
  log('🚀 Starting current version on port 3000...', 'green');
  log('📍 URL: http://localhost:3000', 'cyan');
  runCommand('npm', ['run', 'dev']);
}

function runRedesign() {
  log('🎨 Starting redesigned version on port 3001...', 'blue');
  log('📍 URL: http://localhost:3001', 'cyan');
  runCommand('npm', ['run', 'dev:redesign']);
}

function runBoth() {
  log('🔄 Starting both versions simultaneously...', 'magenta');
  log('📍 Current: http://localhost:3000', 'green');
  log('📍 Redesigned: http://localhost:3001', 'blue');
  runCommand('npm', ['run', 'dev:both']);
}

// Main command handling
switch (command) {
  case 'current':
    runCurrent();
    break;
  case 'redesign':
    runRedesign();
    break;
  case 'both':
    runBoth();
    break;
  case 'help':
  case '--help':
  case '-h':
    showHelp();
    break;
  default:
    log('❌ Unknown command. Use "help" to see available commands.', 'red');
    showHelp();
    break;
}
