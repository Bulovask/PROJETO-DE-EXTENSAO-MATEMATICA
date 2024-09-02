const { spawn } = require('child_process');

const watcher = spawn('node', ['watch.js']);
const httpServer = spawn('http-server.cmd', ['../public/res', '-p', '8000']);
const emulators = spawn('firebase.cmd', ['emulators:start']);
const firebaseServe = spawn('firebase.cmd', ['serve', '--only', 'hosting:user', '--port', '5002']);

const log = msg => process.stdout.write(msg);

watcher.stdout.on('data', data => log('Watcher stdout data:\n' + data));
httpServer.stdout.on('data', data => log('Http Server stdout data:\n' + data));
emulators.stdout.on('data', data => log('Emulators stdout data:\n' + data));
firebaseServe.stdout.on('data', data => log('Firebase Serve stdout data:\n' + data));

watcher.stderr.on('data', data => log('Watcher stderr data:\n' + data));
httpServer.stderr.on('data', data => log('Http Server stderr data:\n' + data));
emulators.stderr.on('data', data => log('Emulators stderr data:\n' + data));
firebaseServe.stderr.on('data', data => log('Firebase Serve stderr data:\n' + data));

watcher.on('close', code => log('Watcher exit with:\n' + code));
httpServer.on('close', code => log('Http Server exit with:\n' + code));
emulators.on('close', code => log('Emulators exit with\n' + code));
firebaseServe.on('close', code => log('Firebase Serve exit with\n' + code));
