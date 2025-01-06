# Osa 4. Blogilista

Tästä kansiosta löytyvät palautukset tehtäviin:
- [4.1 ja 4.2](https://fullstackopen.com/osa4/sovelluksen_rakenne_ja_testauksen_alkeet#tehtavat-4-1-4-2)
- [4.3, 4.4 ja 4.5](https://fullstackopen.com/osa4/sovelluksen_rakenne_ja_testauksen_alkeet#tehtavat-4-3-4-7)
  - Tehtävät 4.6 ja 4.7 on jätetty myöhemmin tehtäviksi

## Tunnit

| Tunnit | Yht | Kommentit |
| ------ | --- | --------- |
| 2 |   | Opiskeltu sovelluksen rakennetta ja testauksen alkeita ja tehty tehtävä 4.1 |
| 3 | 5  | Tehty tehtävä 4.2 - 4.5 |
|   | **5** | **Yhteensä** |

## Muistiinpanot

### Osio 4a. Sovelluksen rakenne ja testauksen alkeet
- Luettu [osio 4a](https://fullstackopen.com/osa4/sovelluksen_rakenne_ja_testauksen_alkeet)
- Alustettu projekti
  - Luotu alihakemisto osa4 > blogilista
  - Alustettu projekti `npm init`
  - Asennettu express `npm install express`
  - Asennettu nodemon `npm install --save-dev nodemon`
  - Lisätty "start" ja "dev" skriptit
  - Annettu `git config user.name` ja `git config user.email`
  - Asennettu cors `npm instal cors`
  - Asennettu mongoose `npm install mongoose`
  - Asennettu ESlint `npm install --save-dev eslint @eslint/js`
  - Alustettu ESlint `npx eslint --init`
  - Päivitetty asennus `npm update`
  - Lisätty `.gitignore` tiedosto
  - Lisätty "lint" skripti `package.json` tiedostoon
  - Muutettu `eslint.config.mjs` edellisen osan 3 mukaiseksi
  - Asennettu ESLint liitännäinen `npm install --save-dev @stylistic/eslint-plugin-js`
  - Korjattu `eslint.config.mjs` tyylien mukaiseksi
- Tehtävä 4.1
  - Kopioitu esimerkkikoodi `index.js` tiedostoon
  - Asennettu dotenv `npm install dotenv`
  - Testattu ja korjattu koodi
- Tehtävä 4.2
  - Refaktoroitu koodi kurssin esimerkin mukaan
  - Testattu ja korjattu koodi
- Tehtävä 4.3
  - Lisätty utils/list_helper.js ja tests/list.test.js
  - Lisätty "test" skripti package.json tiedostoon
  - Testattu toimivuus `npm test`
- Tehtävä 4.4
  - Määritelty funktio `totalLikes` list_helper.js tiedostoon
  - Lisätty yksikkötestit list.test.js tiedostoon
  - Testattu testien toiminta
- Tehtävä 4.5*
  - Määritelty funktio `favoriteBlog`, lisätty yksikkötestit ja testattu testien toiminta
- (Jätetty tehtävät 4.6* ja 4.7* väliin)

### Osio 4b. Backendin testaaminen
- Luettu [osio 4b](https://fullstackopen.com/osa4/backendin_testaaminen)
- Lisätty `package.json` skripteihin `NODE_ENV` muuttuja
- Asennettu cross-env `npm install -save-dev cross-env`
- Muutettu `config.js` ja `.env`
- Asennettu SuperTest kirjasto `npm install --save-dev supertest`
- Lisätty `blogs_api.test.js`


