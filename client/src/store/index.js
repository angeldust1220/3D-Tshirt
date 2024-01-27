import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#d0c3f1',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;