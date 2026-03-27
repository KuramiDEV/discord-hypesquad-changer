# Discord HypeSquad House Switcher

> ⚠️ **Educational Use Only**  
> This project is intended strictly for educational and research purposes. It demonstrates how Discord's internal client modules can be accessed and how API requests are structured. Use at your own risk.

---

## 📌 Overview

This script allows you to change your **Discord HypeSquad Online house** by interacting with Discord’s internal API through the client console.

It dynamically locates the internal API module using Webpack and sends a request to update your HypeSquad house.

---

## 🎯 Available Houses

You can choose one of the following houses:

| House       | Value        | Color   |
|------------|-------------|--------|
| Bravery     | `bravery`    | Purple |
| Brilliance  | `brilliance` | Orange |
| Balance     | `balance`    | Green  |

---

## ⚙️ How It Works

The script performs the following steps:

1. Accesses Discord's internal Webpack module system
2. Locates the internal API handler
3. Fetches your user information
4. Sends a POST request to update your HypeSquad house

---

## 💻 Usage Instructions

### 1. Open Discord

- Web version or Desktop app

### 2. Open Developer Console

- **Windows/Linux:** `Ctrl + Shift + I`
- Go to the **Console** tab

### 3. Edit the Script

Replace:

```js
const hypeSquad_House = "DESIRED_HOUSE";

to:

const hypeSquad_House = "bravery";
const hypeSquad_House = "brilliance";
const hypeSquad_House = "balance";
```

### 4. Run the Script

- Paste the full script into the console and press **Enter**.

### 📜 Script

```js
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
```

### ✅ Expected Output

```bash
👤 User: username#0
✅ HypeSquad house changed to: {house}
```

### ⚠️ Disclaimer

- This script relies on Discord's internal client structure, which may change at any time.
- It may stop working without notice.
- Running scripts in the Discord console may violate Discord’s Terms of Service.
- You are fully responsible for any actions taken using this code.

### 📚 Educational Purpose

This project is meant to help developers understand:

- Webpack module injection
- Reverse engineering frontend applications
- Internal API request handling
- Client-side scripting techniques

## 👨‍💻 Author

**KuramiDEV**  

- GitHub: https://github.com/KuramiDEV

## ⭐ Support

If you found this project useful, consider giving it a **star ⭐** on GitHub, it helps a lot!
