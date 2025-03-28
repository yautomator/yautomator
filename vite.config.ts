import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { sveltePhosphorOptimize } from 'phosphor-svelte/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss(), sveltePhosphorOptimize()]
});
