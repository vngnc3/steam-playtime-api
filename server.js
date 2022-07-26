import got from 'got';
import 'dotenv/config';
import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

// Define streamer's Steam ID & Steam API key (required for private accounts).
// See: https://community.nightdev.com/t/hours-command-to-return-steam-game-hours/8902
const steamId = process.env.STEAM_ID;
const steamAPIKey = process.env.STEAM_API_KEY;

// Declare a route
fastify.get('/', async (request, reply) => {
  return `Hello World. This API works. Move along. \nUse /playtime/{game} to get the playtime of a game. Set your Steam API key and user ID in the .env file.`;
});

// SteamID must be in 64bit format, account must be public. AppID is the game ID.
// Private Steam accounts may use a dedicated Steam web API key. 
fastify.get('/playtime/:game', async (request, reply) => {
  const appid = await getAppid(request.params.game);
  const decapiResponse = await got(`https://decapi.me/steam/hours?id=${steamId}&appid=${appid}`);
  return `Izzy has been playing ${request.params.game} for ${decapiResponse.body}.`;
});

fastify.get('/playtime', async (request, reply) => {
  return `Error: No arguments provided.`;
});

// Find the Steam appid for the game name provided.
async function getAppid(gameName) {
  const game = gameName;
  const steamResponse = await got(`https://api.steampowered.com/ISteamApps/GetAppList/v2/`);
  const steamApps = JSON.parse(steamResponse.body).applist.apps; // formatted in JSON.
  const id = steamApps.find(app => app.name === game).appid;
  return id;
};

// Run the server!
const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
};

start()