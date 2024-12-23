# Osa 2. Puhelinluettelo

Tässä kansiossa on esitetty palautukset tehtäviin 2.6. - 2.10.

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Opiskeltu  [lomakkeiden käsittelyä](https://fullstackopen.com/osa2/lomakkeiden_kasittely) |
| 2 | Luotu koodi tehtäville 2.6 - 2.10 |
| **3** | **Yhteensä** |

## Muistiinpanot
- Luotu uusi React+Vite mallipohja
- Poistettu tarpeettomat tiedostot, jätetty tyylipohjat `App.css` ja  `index.css`
- Opiskeltu tietojen välittämistä main.jsx:stä App-komponenttiin käyttäen notes-esimerkkiä
- Poistettu myös `App.css`, koska kaikki tekstit oli keskitetty keskelle näyttöä
- Jatkettu osan 2.b [lomakkeiden käsittely](https://fullstackopen.com/osa2/lomakkeiden_kasittely) esimerkkien koodaamista

Jälleen kerran Copilotista oli korvaamaton apu. Esim. kun refaktoroin koodia (tehtävä 2.10), avasin ja tallensin uuden komponenttitiedoston, `App.jsx` tiedostoon oli ilmestynyt automaattisesti `import` lausekkeet. Samoin Copilot arvasi pelkästä komponentin nimen alusta, millaista koodia pitää kirjoittaa. Itselleni jäi tehtäväksi koodin oikoluku ja testata, että koodi edelleen toimii, kuten on tarkoitus.

## Mallipohja

Pohjana käytetään [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohjaa.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
