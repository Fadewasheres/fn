module.exports = {
    bot: {
        token: process.env.token,
        prefix: ".",
        owners: ["1015630183887290519"],// OWNERS ID
        mongourl: "mongodb+srv://hazemmemail:4BrVDps2ew1h372m@cheese.wnhv6pz.mongodb.net/?retryWrites=true&w=majority"

    },

    website: {
        callback: "https://main--fadebotlist.repl.co/callback",
        secret: "cXrs5-1N-uHgWYJ_YThpcdmXJhDCEa43",
        clientID: "1172532655955398676",
        tags: [ "Moderation", "Fun", "Minecraft","Economy","Guard","NSFW","Anime","Invite","Music","Logging", "Web Dashboard", "Reddit", "Youtube", "Twitch", "Crypto", "Leveling", "Game", "Roleplay", "Utility", "Turkish" ]    
    },

    server: {
        id: "1139571010132258847",// SERVER ID
        roles: {
            yonetici: "1139573949315940493", //ADMIN ROLE ID
            moderator: "917862080026148975",// MOD ROLE ID 
            profile: {
                booster: "917862080026148975",// BOOSTER ROLE ID 
                sponsor: "917862080026148975",// SPONSOR ROLE ID
                supporter: "917862080026148975", //SUPORTER ROLE ID
                partnerRole: "917862080026148975" //partnerRole ID
            },
            codeshare: {
                javascript: "JS",
                html: "HTML",
                altyapilar: "ALTYAPILAR",
                bdfd: "BDFD",
                besdavet: "BESDAVET",
                ondavet: "ONDAVET",
                onbesdavet: "ONBESDAVET",
                yirmidavet: "YIRMIDAVET"
            },
            botlist: {
                developer: "1139575361693294632",// DEV ROLE ID 
                certified_developer: "1139575396262756432",// ROLE ID 
                bot: "1139573970975334420", //ROLE BOTS YOUR SERVER ID
                certified_bot: "1139575267694755860" // ROLE ID 
            }
        },
        channels: { // PUT ID channels LOGS
            codelog: "1139571811760222329",
            login: "1139571766386245732",
            webstatus: "1139571892819333162",
            uptimelog: "1139571790889357313",
            botlog: "1139571778189004881",
            votes: "1139571756479295609"
        }
    }


}
