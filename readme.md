# 🤖 Steam Playtime API

Get user's playtime of a game on Steam with [DecAPI Steam API](https://docs.decapi.me/steam) **without providing Steam app id**.  
Useful for custom chatbot commands and Twitch integration.  

---

&nbsp;

# Dependencies  
- [Node.js](https://nodejs.org/en/)
- [Fastify](https://www.fastify.io/)
- [got](https://github.com/sindresorhus/got)  

&nbsp;

# Getting Started  

1. Clone this repo.  
2. Install Node.js dependencies: `npm install`  
3. Create a `.env` file on the root directory.  
4.  Set the streamer's Steam user ID and (optional) [Steam API key](https://steamcommunity.com/dev) in the .env file.  
5. Run the server: `node server`  
6. Fastify server will run on port `3000`.

&nbsp;  

# Usage

Once the server is started, the API can be called through `/playtime/<GAME_NAME>`.  
Expected response:

```
    Gaben has been playing NEKOPARA Vol. 1 for 6.83 hours.
```  

&nbsp;

# Recommended Usage  

Using [Nightbot](https://nightbot.tv/) and [DecAPI](https://decapi.me/), one can automate the API call and get the playtime of the currently streamed game on Twitch.   

The Nightbot command will use two APIs respectively:  
1. ✨This API✨ `<HOSTNAME>/playtime/<GAME_NAME>`, and
2. DecAPI `https://decapi.me/twitch/game/<CHANNEL_NAME>`.  

Implementation in Nightbot can be done by nesting Nightbot [variables](https://docs.nightbot.tv/commands/variableslist):  

```
$(urlfetch <HOSTNAME>/playtime/$(urlfetch https://decapi.me/twitch/game/<CHANNEL_NAME>))
```   

--- 

&nbsp;  

# Maintenance

Hit me up on Twitter [@vngnc](https://twitter.com/vngnc) or Twitch [izzyxizzy](https://twitch.tv/izzyxizzy/).  

![steam](https://www.steamidfinder.com/signature/76561198049741299.png)