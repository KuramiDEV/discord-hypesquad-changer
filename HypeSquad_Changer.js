// Select which HypeSquad house you want to get: "bravery", "brilliance" ou "balance"
// bravery - Purple
// brilliance - Orange
// balance - Green
const hypeSquad_House = "DESIRED_HOUSE";
// ============================================

delete window.$;
let wpRequire = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]);
webpackChunkdiscord_app.pop();

let api = Object.values(wpRequire.c).find(x => x?.exports?.Bo?.get).exports.Bo;

const casaMap = {
    'bravery': 1,
    'brilliance': 2,
    'balance': 3
};

const HsID = casaMap[hypeSquad_House.toLowerCase()];

if (!HsID) {
    console.error(`❌ ERROR: "${hypeSquad_House}" this is not a valid house! Use: bravery, brilliance, or balance.`);
} else {
    try {
        const userInfo = await api.get({url: '/users/@me'});
        console.log(`👤 user: ${userInfo.body.username}#${userInfo.body.discriminator}`);
        
        await api.post({
            url: '/hypesquad/online',
            body: { house_id: HsID }
        });
        
        console.log(`✅ HypeSquad's house changed to: ${hypeSquad_House}!`);
        
    } catch (error) {
        console.error(`❌ ERROR: ${error.message}`);
    }
}
