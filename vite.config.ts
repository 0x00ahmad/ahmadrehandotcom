import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite';


export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({ compiler: 'svelte' }),
		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: "Icon",
					extension: "svelte",
				})
			],
			dts: "src/auto-imports.d.ts",
			imports: ["svelte"],
			dirs: ["src"],
			ignore: ["**/*.test.{js,ts}", "**/*.spec.{js,ts}"],
			exclude: [/node_modules/, /@sveltejs\/kit/, /.git/],

		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
