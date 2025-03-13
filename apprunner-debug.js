const fs = require('fs');
const { execSync } = require('child_process');

// Log system info
console.log('=== SYSTEM INFO ===');
console.log('Node version:', process.version);
console.log('NPM version:', execSync('npm --version').toString().trim());
console.log('Current directory:', process.cwd());

// Try to build
console.log('\n=== ATTEMPTING BUILD ===');
try {
  console.log('Running npm ci...');
  execSync('npm ci', { stdio: 'inherit' });

  console.log('Running svelte-kit sync...');
  execSync('npx svelte-kit sync', { stdio: 'inherit' });

  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });

  console.log('Build successful');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}

// Check build output
console.log('\n=== BUILD OUTPUT ===');
if (fs.existsSync('./build')) {
  console.log('Build directory exists');
  const files = fs.readdirSync('./build');
  console.log('Files in build directory:', files);

  if (fs.existsSync('./build/index.js')) {
    console.log('Found build/index.js');
  } else if (fs.existsSync('./build/server/index.js')) {
    console.log('Found build/server/index.js');
  } else {
    console.log('Could not find entry point');
  }
} else {
  console.log('Build directory does not exist');
}

// Start a simple server
console.log('\n=== STARTING SERVER ===');
require('http').createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('App Runner Debug Server Running');
}).listen(3000, () => {
  console.log('Debug server running on port 3000');
});