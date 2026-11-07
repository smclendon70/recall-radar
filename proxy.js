// Backup route for recall data. The app calls the government sites directly first;
// if a browser blocks that, it asks this small function instead.
// Only the official recall data sites below are allowed.
const ALLOWED = new Set([
  "api.nhtsa.gov",
  "vpic.nhtsa.dot.gov",
  "api.fda.gov",
  "www.saferproducts.gov"
]);

exports.handler = async (event) => {
  const target = (event.queryStringParameters || {}).url;
  let u;
  try { u = new URL(target); } catch (e) { return { statusCode: 400, body: JSON.stringify({ error: "bad url" }) }; }
  if (u.protocol !== "https:" || !ALLOWED.has(u.hostname)) {
    return { statusCode: 403, body: JSON.stringify({ error: "host not allowed" }) };
  }
  try {
    const r = await fetch(u.toString(), { headers: { "Accept": "application/json", "User-Agent": "RecallRadar/1.0" } });
    const body = await r.text();
    return {
      statusCode: r.status,
      headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=1800" },
      body
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "upstream unavailable" }) };
  }
};
