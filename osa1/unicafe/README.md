# Osa 1d. Unicafe

Tähän kansioon on kerätty palautukset tehtäviin 
- 1.6 unicafe, step1: pohjat
- 1.7 unicafe, step2: laajennettu sovellus perustilastoilla

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Opiskeltu Mozillan [JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview) |
| 1 | Luotu hakemisto ja malli käyttäen React + Vite pohjaa |
|   | Seuraavaksi materiaaliin tutustuminen ... |
| **2** | **Yhteensä** |

## Muistiinpanot

Loin samalla tavalla kuin edellisessä tehtäväsarjassa ensimmäiseksi uuden alikansion ja asensin sinne React + Vite mallipohjan:
```bash
cd osa1
npm create vite@latest unicafe -- --template react
cd unicafe
npm install
```
ja käynnistin ohjelman:
```
npm run dev
```
Tämän jälkeen tein tehtävätohjeiden mukaan.

Tutkittu jälleen miksi push ei onnistu VSCodesta. Virheilmoitus ohjaa sivuille: https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/credstores.md
mutta näistä ei ole ollut apua.

## Mallipohja

Ohjeiden mukaan pohjaksi asentuu [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohja, jonka avulla pääsee aloittamaan Reactin käytön minimaalisin askelin.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

