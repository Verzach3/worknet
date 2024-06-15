import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { telefunc, config } from "telefunc";
import { glob } from "glob";
import { createRequire } from "node:module";
const app = new Hono();
app.use(cors());
app.use(logger());
const require = createRequire(import.meta.url);

config.root = "C:\\Users\\gabri\\Projects\\worknet-tamagui";
config.disableNamingConvention = true;
config.telefuncFiles = [];
const files = await glob("./functions/**/*.telefunc.ts");
for (const file of files) {
	console.log("Registrando", file.split("/").pop());
	config.telefuncFiles.push(require.resolve(`./${file}`));
}

app.all("/_telefunc", async (c) => {
	const httpResponse = await telefunc({
		url: c.req.url.toString(),
		method: c.req.method,
		body: await c.req.text(),
		context: {
			...c,
		},
	});
	const { body, statusCode, contentType } = httpResponse;

	c.status(statusCode);
	c.header("Content-Type", contentType);

	return c.body(body);
});

export default app;
