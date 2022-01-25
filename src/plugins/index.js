export function loadAllPlugins(app) {
  const files = import.meta.glob("./*.js");
  for (const path in files) {
    files[path]().then((mod) => {
      if (typeof mod.default === "function") {
        if (path !== "./index.js") mod.default(app);
      }
    });
  }
}
