const FALLBACK = [
  {
    username: 'azozxlowkeyy',
    global_name: 'azozxlowkeyy',
    id: process.env.DISCORD_ID_AZO || process.env.NEXT_PUBLIC_DISCORD_ID_AZO || '',
  },
  {
    username: 'hexcoder0012',
    global_name: 'hexcoder',
    id: process.env.DISCORD_ID_HEX || process.env.NEXT_PUBLIC_DISCORD_ID_HEX || '',
  },
];

async function fetchDiscordUser(id, token) {
  const res = await fetch(`https://discord.com/api/v10/users/${id}`, {
    headers: { Authorization: `Bot ${token}` },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return {
    id: data.id,
    username: data.username,
    global_name: data.global_name || data.username,
  };
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');

  const token = process.env.DISCORD_BOT_TOKEN;
  const profiles = [...FALLBACK];

  if (token) {
    const enriched = await Promise.all(
      profiles.map(async (profile) => {
        if (!profile.id) return profile;
        const live = await fetchDiscordUser(profile.id, token);
        return live || profile;
      }),
    );
    return res.status(200).json({ profiles: enriched, source: 'discord-api' });
  }

  return res.status(200).json({ profiles, source: 'static' });
}
