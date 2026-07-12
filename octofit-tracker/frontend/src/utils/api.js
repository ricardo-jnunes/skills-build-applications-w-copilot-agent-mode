export function getApiUrl(resource) {
  const env = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
  const codespaceName = env.VITE_CODESPACE_NAME?.trim();
  const currentOrigin = typeof window !== 'undefined' ? window.location.origin : '';

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api/${resource}/`;
  }

  if (currentOrigin && currentOrigin.includes('app.github.dev')) {
    return `${currentOrigin.replace(/:\d+$/, ':8000')}/api/${resource}/`;
  }

  return `http://localhost:8000/api/${resource}/`;
}
