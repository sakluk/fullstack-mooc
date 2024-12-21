# Osa 1d. Unicafe

Tähän kansioon on kerätty palautukset tehtäviin 
- 1.6. unicafe vaihe1: Implementoitu palautefunktionaalisuus
- 1.7. unicafe vaihe2: Implementoitu lisätilastot
- 1.8. unicafe vaihe3: Eriytetty tilastot omaksi komponentiksi
- 1.9. unicafe vaihe4: Tilastot näytetään, jos on palautteita

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Opiskeltu Mozillan [JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview) |
| 1 | Luotu hakemisto ja malli käyttäen [React + Vite](https://fullstackopen.com/osa1/reactin_alkeet) pohjaa |
| 1 | Korjattu Gitin credential manager. Nyt käytössä [DPAPI](https://github.com/git-ecosystem/git-credential-manager/blob/main/docs/credstores.md)  |
| 1 | Opiskeltu [Komponentin tila- ja tapahtumakäsittelyä](https://fullstackopen.com/osa1/komponentin_tila_ja_tapahtumankasittelyä) |
| 1 | Opiskeltu [Monimutkaisempia tiloja ja debuggausta](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus) |
| 1 | Opiskeltu [reactia](https://react.dev/learn) ja [Thinking in React](https://react.dev/learn) |
| 1 | Tehty tehtävät 1.6 - 1.8 käyttäen Copilottia |
| 1 | Jatkettu tehtävästä 1.9. eteenpäin |
| **8** | **Yhteensä** |

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

### 20.12.2024 Reactin opiskelua ja Copilotin käyttö

 Opiskelin [reactia](https://react.dev/learn) ja [Thinking in Reactia](https://react.dev/learn). Luin eteenpäin kurssimateriaalia. Olin aiemmin käyttänyt VSCoden kanssa Copilotia, mutta huomasin
 kurssimateriaalissa uusia ominaisuuksia. Koska Copilot-lisäosa ei suostunut päivittymään, päivitin
 myös VSCoden. Uudempi versio Copilotista olikin todella näppärä. Ilmeisesti tämän kurssin tehtävien
 palautuksia on jo sen verran paljon Githubissa, että ensimmäisten tehtävien tekeminen sujui
 tabulaattoria painamalla. Copilot arvaili etukäteen jo seuraavien tehtävien koodirivejä, joten
 jouduin toppuuttelemaan "perämiestäni". Illan aikana sain tehtyä tehtävät 1.6 - 1.8.

 Olin myös aiemmin päivän aikana itse kopioinut kappaleen [1d - monimutkaisempi tila ja Reactin debuggaus](https://fullstackopen.com/osa1/monimutkaisempi_tila_reactin_debuggaus) - esimerkit ja testannut omassa ympäristössäni, joten ne on tallennettu omiksi versioikseen Github-projektiini. 

### 21.12.2024 Jatkettu tehtävien tekemistä



## Mallipohja

Ohjeiden mukaan pohjaksi asentuu [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohja, jonka avulla pääsee aloittamaan Reactin käytön minimaalisin askelin.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

