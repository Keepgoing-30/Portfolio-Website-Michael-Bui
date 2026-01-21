import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	// Đường dẫn cơ sở để deploy lên GitHub Pages
	base: '/Portfolio-Website-Michael-Bui/',
	plugins: [react()],
});
