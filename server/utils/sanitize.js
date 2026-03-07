function escapeHtml(str) {
  if (typeof str !== "string") return str;
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sanitizeXSS(val) {
  if (typeof val === "string") return escapeHtml(val);
  if (Array.isArray(val)) return val.map(sanitizeXSS);
  if (val && typeof val === "object") {
    const out = {};
    for (const k of Object.keys(val)) out[k] = sanitizeXSS(val[k]);
    return out;
  }
  return val;
}

function sanitizeMongo(val) {
  if (Array.isArray(val)) {
    return val.map(sanitizeMongo);
  }
  if (val && typeof val === "object" && !(val instanceof Date)) {
    const out = {};
    for (const k of Object.keys(val)) {
      if (!k.startsWith("$") && !k.includes(".")) {
        out[k] = sanitizeMongo(val[k]);
      }
    }
    return out;
  }
  return val;
}

module.exports = {
  sanitizeXSS,
  sanitizeMongo,
};
