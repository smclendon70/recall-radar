# Recall Radar: Your Step-by-Step Launch Guide

This folder is your complete app. Follow these steps in order. Total cost to go live: **$0**. Adding Google Play later costs **$25** (one time).

---

## What's in this folder

| File | What it is |
|---|---|
| `index.html` | The app itself |
| `privacy.html`, `terms.html` | Privacy policy and terms (the app stores require these) |
| `manifest.webmanifest`, `sw.js`, `icons/` | Let people install the app on their phone's home screen |
| `netlify/functions/proxy.js` + `netlify.toml` | A backup route to the government data, used only if a browser blocks the direct one |
| `tools/make-pro-code.html` | Owner tool for making Pro unlock codes |

---

## STEP 1: Put the app online for free (about 20 minutes)

### 1a. Create a free GitHub account
1. Go to **github.com** and sign up.
2. Click the **+** at the top right, then **New repository**.
3. Name it `recall-radar`, choose **Public**, then click **Create repository**.
4. Click **uploading an existing file**.
5. Unzip the folder on your computer. Drag **everything inside it** (not the folder itself) into the upload box. Include the `netlify` and `icons` folders.
6. Click **Commit changes**.

### 1b. Connect it to Netlify (free hosting)
1. Go to **netlify.com**, click **Sign up**, and choose **Sign up with GitHub**.
2. Click **Add new site**, then **Import an existing project**, then **GitHub**.
3. Pick your `recall-radar` repository.
4. Leave every setting as it is and click **Deploy**.
5. In about a minute you'll get an address like `https://random-name-123.netlify.app`.
6. Click **Site configuration**, then **Change site name**, and rename it to something like `recallradar-app`. Your address becomes `https://recallradar-app.netlify.app`.

### 1c. Test it with real data
Open your address on your phone. Add your own car, one medicine, and "crib". You should see real recalls from the government databases.

> If something doesn't load, send me a screenshot. The backup route usually takes care of it automatically.

---

## STEP 2: Add your details (5 minutes)

On GitHub, open `index.html` and click the **pencil icon** to edit. Near the top, find the `CONFIG` section and fill in:

```
supportEmail: "your-email@gmail.com",
shareUrl: "https://recallradar-app.netlify.app",
```

Click **Commit changes**. Netlify updates your live app automatically in about a minute.

Also open `privacy.html` and `terms.html`, and replace `[your support email]` with your email the same way.

---

## STEP 3: Start taking payments ($0 up front)

Free users can watch 3 items. Pro unlocks unlimited items.

### 3a. Make your Pro code
1. Open `https://YOUR-SITE.netlify.app/tools/make-pro-code.html`.
2. Type a secret code you make up, for example `RADAR-GOLD-7731`.
3. Copy the long "fingerprint" it gives you.
4. In `index.html` CONFIG, paste it like this: `proCodeHashes: ["the-long-fingerprint"],`

### 3b. Create Stripe payment links
1. Sign up at **stripe.com**. It's free, and Stripe only takes a small cut of each sale.
2. Go to **Payment Links**, then **New**.
3. Create a product called "Recall Radar Pro – Yearly" at $19.99, recurring yearly.
4. Under **After payment**, choose **Show confirmation page** and write: *"Thank you! Your Pro code is RADAR-GOLD-7731. Open Recall Radar, tap Go Pro, and enter this code."*
5. Copy the link. Do the same for a $2.99 monthly link.
6. Paste both into CONFIG:
```
paymentLinkMonthly: "https://buy.stripe.com/...",
paymentLinkYearly: "https://buy.stripe.com/...",
```

**Good to know:** this simple setup trusts buyers with the code. That's fine for starting out. Once you have steady sales, I can upgrade it to real accounts so each buyer gets their own code.

---

## STEP 4: Get listed in the Microsoft Store (free)

1. Sign up at **storedeveloper.microsoft.com** as an **Individual** developer. It's free. You'll verify with an ID and a selfie.
2. Go to **pwabuilder.com**, paste your Netlify address, and click **Start**.
3. Click **Package for stores**, then **Windows**, and follow its steps. It walks you through linking to your Microsoft account.
4. Upload the package in Microsoft Partner Center along with your store listing (copy is below). Microsoft also hosts your privacy policy link.

---

## STEP 5: Google Play ($25, when you're ready)

1. Sign up at **play.google.com/console** as a **Personal** account ($25 one time) and verify your ID.
2. On **pwabuilder.com**, package your site for **Android**. Download the package. It includes a file called `assetlinks.json`.
3. Upload `assetlinks.json` to your GitHub repository inside a folder named `.well-known`. This proves you own the website.
4. In Play Console, create the app and upload the `.aab` file to **Closed testing**.
5. **Find 12 testers** with Android phones: friends, family, your early web users, or Facebook groups. Add their Gmail addresses. They must stay opted in for **14 days in a row**. Recruit 15–20 to be safe.
6. After 14 days, apply for production access. Answer the questions specifically (what the app does, what testers said).

**Important:** Google Play doesn't allow selling upgrades through outside payment links. The app already detects when it's opened from Google Play and hides the Stripe buttons there. Your Play listing is free, and people buy Pro on your website.

---

## Store listing copy (paste into any store)

**Name:** Recall Radar: Car, Food & Product Recalls

**Short description (80 characters):**
Check if your car, medicine, food, or baby products are recalled. Free.

**Full description:**
Is anything you own recalled? Find out in seconds.

Recall Radar checks your car, medicines, food, and kids' products against official U.S. government recall records from NHTSA, the FDA, and the Consumer Product Safety Commission.

• CARS & TRUCKS: Pick your year, make, and model, or enter your VIN. See every safety recall, including "Do not drive" and "Park outside" warnings.
• MEDICINE: Check prescription and over-the-counter medicines.
• FOOD: Check brands and products you buy.
• KIDS & HOME: Cribs, car seats, strollers, toys, and appliances.
• LATEST RECALLS: See the most serious new recalls as they're announced.

No account needed. Your list stays on your phone.

Free: watch up to 3 items. Pro: unlimited items for your whole household.

Recall Radar is independent and not affiliated with NHTSA, FDA, or CPSC. Always confirm with the official recall notice.

**Keywords:** recall, car recall, vehicle recall, VIN check, food recall, drug recall, medicine recall, product recall, baby recall, car seat recall, crib recall, safety alert, NHTSA, FDA

**Category:** Utilities (or Lifestyle)

---

## Getting your first users (free marketing)

1. **Ride the news.** When a big recall hits (it happens weekly), post right away: *"Is your car on the new airbag recall list? Check free in 10 seconds."* Use TikTok, Facebook, Pinterest, and Instagram.
2. **Use the Latest tab.** Screenshot the newest food recalls and post them. Recall posts get shared a lot.
3. **Parent groups.** Share crib, car seat, and baby food recalls in local mom and dad Facebook groups. Be helpful, not spammy.
4. **Car groups.** Post in owner groups for popular models when a recall drops.
5. **Ask for reviews** once someone finds a recall and says thanks.

---

## What's next (when you're ready)

- Automatic alerts by text or email when something new is recalled (needs a small server; good Pro feature)
- Real user accounts so the list syncs across phones
- Apple App Store ($99/year) once Pro sales cover it
