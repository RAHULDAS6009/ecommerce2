import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 1) kill @charset before PostCSS
function stripCharsetVitePlugin() {
  return {
    name: "strip-charset-vite",
    enforce: "pre",
    transform(code, id) {
      if (!id.endsWith(".css")) return null;
      const out = code.replace(/^\uFEFF|@charset\s+["'][^"']+["'];?/gi, "");
      return out !== code ? { code: out, map: null } : null;
    },
  };
}

// 2) jQuery shim + special wrap for src/js/plugins.js
function wrapLegacyPlugins() {
  const SHIM = "var jQuery = window.jQuery || window.$; var $ = jQuery;\n";
  return {
    name: "wrap-legacy-plugins",
    enforce: "pre",
    transform(code, id) {
      const p = id.replaceAll("\\", "/");

      // Only touch your legacy folder
      if (!p.includes("/src/js/")) return null;

      // Special case: plugins.js — wrap to force this === window
      if (p.endsWith("/src/js/plugins.js")) {
        const wrapped =
          `(function(window, document){\n` +
          SHIM +
          code +
          `\n}).call(window, window, document);`;
        return { code: wrapped, map: null };
      }

      // Generic: if file looks like it uses jQuery, prepend shim
      if (/\b(jQuery|\$\s*\(|\.fn\.)/.test(code)) {
        // Avoid double-prepend
        if (!code.startsWith("var jQuery = window.jQuery")) {
          return { code: SHIM + code, map: null };
        }
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    stripCharsetVitePlugin(),   // must run first
    wrapLegacyPlugins(),        // make legacy files happy in ESM
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["jquery", "jquery-migrate"],
  },
  // server: { hmr: { overlay: false } }, // optional
});
