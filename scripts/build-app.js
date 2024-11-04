const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

async function buildApp() {
  const appsDir = path.resolve(__dirname, '../apps');

  const directories = fs
    .readdirSync(appsDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  // 디렉토리가 없을 경우 종료
  if (directories.length === 0) {
    console.log('No directories found in ./apps');
    return;
  }

  // 사용자에게 빌드할 앱을 선택하게 합니다.
  const response = await prompts({
    type: 'select',
    name: 'directory',
    message: 'Select an app to build:',
    choices: directories.map((dir) => ({ title: dir, value: dir })),
  });

  // 선택한 디렉토리에서 pnpm build 실행
  if (response.directory) {
    const targetDir = `./apps/${response.directory}`;

    const pnpmProcess = spawn('pnpm', ['--filter', targetDir, 'build'], {
      shell: true,
    });

    pnpmProcess.stdout.on('data', (data) => {
      console.log(`${data}`);
    });

    pnpmProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });

    pnpmProcess.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
  } else {
    console.log('No directory selected.');
  }
}

buildApp();
