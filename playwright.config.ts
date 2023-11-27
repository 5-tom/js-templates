import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "./e2e",
	reporter: "list",
	projects: [
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] }
		}
	]
});
