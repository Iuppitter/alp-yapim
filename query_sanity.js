const { createClient } = require("next-sanity");

const client = createClient({
  projectId: "3pibv061",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false
});

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  title,
  "heroVideoFileUrl": heroVideo.asset->url,
  heroVideoUrl
}`;

async function main() {
    const data = await client.fetch(SITE_SETTINGS_QUERY);
    console.log(JSON.stringify(data, null, 2));
}

main();
