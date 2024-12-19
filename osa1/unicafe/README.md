# Osa 1d. Unicafe

Tähän kansioon on kerätty palautukset tehtäviin 
- 1.6 unicafe, step1: pohjat
- 1.7 unicafe, step2: laajennettu sovellus perustilastoilla

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Opiskeltu Mozillan [JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview) |
| 1 | Luotu hakemisto ja malli käyttäen [React + Vite](https://fullstackopen.com/osa1/reactin_alkeet) pohjaa |
| 1 | Korjattu Gitin credential manager. Nyt käytössä [DPAPI](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/credstores.md)  |
| 1 | Opiskeltu [Komponentin tila- ja tapahtumakäsittelyä](https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittelyä) |
| **4** | **Yhteensä** |

## Muistiinpanot

### 18.12.2024 Alihakemiston luominen
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
Tämän jälkeen tein muokkaukset [tehtävän 1.6](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus#tehtavat-1-6-1-14) mukaan.

### 19.12.2024 Credential manager opiskelua
Tutkittu jälleen miksi push ei onnistu VSCodesta. Virheilmoitus ohjaa sivuille: https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/credstores.md

Vaihdoin credential managerin antamalla komennon:
```bash
 git config --global credential.credentialStore dpapi
```
ja lisäämällä VSCoden settings.json -tiedostoon rivin:
```
"git.credentialHelper": "dpapi"
```
Tämän jälkeen tietojen päivitys (git push, Sync) GitHubiin alkoi myös toimia VSCoden kautta.

## Mallipohja

Ohjeiden mukaan pohjaksi asentuu [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohja, jonka avulla pääsee aloittamaan Reactin käytön minimaalisin askelin.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

