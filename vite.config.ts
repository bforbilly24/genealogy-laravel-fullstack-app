import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import compression from 'vite-plugin-compression';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	server: {
		host: 'localhost',
		port: 5173,
		hmr: {
			host: 'localhost',
		},
		watch: {
			usePolling: true,
		},
	},
	build: {
		manifest: true,
	},
	plugins: [
        tailwindcss(),
		laravel({
			input: ['resources/css/app.css', 'resources/js/app.tsx'],
			refresh: true,
		}),
		react(),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 10240,
		}),
	],
	resolve: {
		alias: {
			'@': '/resources/js',
		},
	},
});
