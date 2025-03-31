
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AWS_REGION: string;
	export const AWS_ACCESS_KEY_ID: string;
	export const AWS_SECRET_ACCESS_KEY: string;
	export const AWS_BUCKET_NAME: string;
	export const AWS_SDK_LOAD_CONFIG: string;
	export const BASE_API_URL: string;
	export const ELECTRON_RUN_AS_NODE: string;
	export const COLORTERM: string;
	export const COMMAND_MODE: string;
	export const CURSOR_TRACE_ID: string;
	export const ELECTRON_NO_ATTACH_CONSOLE: string;
	export const GITHUB_ACCESS_TOKEN: string;
	export const GITHUB_TOKEN: string;
	export const HOME: string;
	export const HOMEBREW_CELLAR: string;
	export const HOMEBREW_PREFIX: string;
	export const HOMEBREW_REPOSITORY: string;
	export const INFOPATH: string;
	export const LANG: string;
	export const LOGNAME: string;
	export const LaunchInstanceID: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const PATH: string;
	export const PWD: string;
	export const SECURITYSESSIONID: string;
	export const SHELL: string;
	export const SHLVL: string;
	export const SSH_AUTH_SOCK: string;
	export const TERM: string;
	export const TERM_PROGRAM: string;
	export const TERM_PROGRAM_VERSION: string;
	export const TMPDIR: string;
	export const USER: string;
	export const VSCODE_CLI: string;
	export const VSCODE_CODE_CACHE_PATH: string;
	export const VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
	export const VSCODE_CWD: string;
	export const VSCODE_ESM_ENTRYPOINT: string;
	export const VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
	export const VSCODE_IPC_HOOK: string;
	export const VSCODE_NLS_CONFIG: string;
	export const VSCODE_PID: string;
	export const VSCODE_PROCESS_TITLE: string;
	export const WARSOXY_10_URL: string;
	export const XPC_FLAGS: string;
	export const XPC_SERVICE_NAME: string;
	export const __CFBundleIdentifier: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const ELECTRON_NO_ASAR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AWS_REGION: string;
		AWS_ACCESS_KEY_ID: string;
		AWS_SECRET_ACCESS_KEY: string;
		AWS_BUCKET_NAME: string;
		AWS_SDK_LOAD_CONFIG: string;
		BASE_API_URL: string;
		ELECTRON_RUN_AS_NODE: string;
		COLORTERM: string;
		COMMAND_MODE: string;
		CURSOR_TRACE_ID: string;
		ELECTRON_NO_ATTACH_CONSOLE: string;
		GITHUB_ACCESS_TOKEN: string;
		GITHUB_TOKEN: string;
		HOME: string;
		HOMEBREW_CELLAR: string;
		HOMEBREW_PREFIX: string;
		HOMEBREW_REPOSITORY: string;
		INFOPATH: string;
		LANG: string;
		LOGNAME: string;
		LaunchInstanceID: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		PATH: string;
		PWD: string;
		SECURITYSESSIONID: string;
		SHELL: string;
		SHLVL: string;
		SSH_AUTH_SOCK: string;
		TERM: string;
		TERM_PROGRAM: string;
		TERM_PROGRAM_VERSION: string;
		TMPDIR: string;
		USER: string;
		VSCODE_CLI: string;
		VSCODE_CODE_CACHE_PATH: string;
		VSCODE_CRASH_REPORTER_PROCESS_TYPE: string;
		VSCODE_CWD: string;
		VSCODE_ESM_ENTRYPOINT: string;
		VSCODE_HANDLES_UNCAUGHT_ERRORS: string;
		VSCODE_IPC_HOOK: string;
		VSCODE_NLS_CONFIG: string;
		VSCODE_PID: string;
		VSCODE_PROCESS_TITLE: string;
		WARSOXY_10_URL: string;
		XPC_FLAGS: string;
		XPC_SERVICE_NAME: string;
		__CFBundleIdentifier: string;
		__CF_USER_TEXT_ENCODING: string;
		ELECTRON_NO_ASAR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
