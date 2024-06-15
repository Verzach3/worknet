import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { telefunc } from "telefunc/vite";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		// @ts-expect-error
		telefunc({
			disableNamingConvention: true,
		}),
		TanStackRouterVite(),
	],
	resolve: {
		alias: [
			{
				find: "@/functions",
				replacement: fileURLToPath(
					new URL("./backend/functions", import.meta.url),
				),
			},
			{
				find: "@/backend",
				replacement: fileURLToPath(new URL("./backend", import.meta.url)),
			},
			{
				find: "@",
				replacement: fileURLToPath(new URL("./src", import.meta.url)),
			},
		],
	},
});
