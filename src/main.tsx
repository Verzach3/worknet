import "@mantine/core/styles.css";
import "@mantine/dates/styles.css"
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { config } from "telefunc/client";
import { MantineProvider, createTheme } from "@mantine/core"
config.telefuncUrl = "http://verzach3-pc.tailfb324.ts.net:3000/_telefunc";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}
const theme = createTheme({
	fontFamily: "Inter"
})
// Render the app
const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<MantineProvider theme={theme}>
				<RouterProvider router={router} />
			</MantineProvider>
		</StrictMode>,
	);
}
