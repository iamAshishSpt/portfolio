import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Using a different model URL
const modelUrl = 'https://raw.githubusercontent.com/pmndrs/drei-assets/master/models/macbook/scene.gltf';
const modelPath = path.join(__dirname, 'public', 'desktop_pc', 'scene.gltf');

console.log('Downloading model...');

https.get(modelUrl, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download model: ${response.statusCode}`);
    return;
  }

  const file = fs.createWriteStream(modelPath);
  response.pipe(file);
  
  file.on('finish', () => {
    file.close();
    console.log('Model downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading model:', err);
}); 