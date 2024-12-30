# Osa 2. Puhelinluettelo

Tässä kansiossa on esitetty palautukset tehtäviin 2.6. - 2.17 sekä tarvittavat muutokset tehtävään 3.14.


## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Opiskeltu  [lomakkeiden käsittelyä](https://fullstackopen.com/osa2/lomakkeiden_kasittely) |
| 2 | Luotu koodi tehtäville 2.6 - 2.10 |
| 1 | Opiskeltu [palvelimella olevan datan hakemista](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) |
| 1 | Tehty tehtävä 2.11. |
| 1 | Opiskeltu [palvelimella olevan datan muokkaamista](https://fullstackopen.com/osa2/palvelimella_olevan_datan_muokkaaminen) |
| 3 | Tehty tehtävät 2.12. - 2.17.  |
| **9** | **Yhteensä** |

## Muistiinpanot
- Luotu uusi React+Vite mallipohja
- Poistettu tarpeettomat tiedostot, jätetty tyylipohjat `App.css` ja  `index.css`
- Opiskeltu tietojen välittämistä main.jsx:stä App-komponenttiin käyttäen notes-esimerkkiä
- Poistettu myös `App.css`, koska kaikki tekstit oli keskitetty keskelle näyttöä
- Jatkettu osan 2.b [lomakkeiden käsittely](https://fullstackopen.com/osa2/lomakkeiden_kasittely) esimerkkien koodaamista
- Jatkettu osan 2.c [palvelimella olevan datan hakemisen](https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen) opiskelulla
- Jatkettu osan 2.d.[palvelimella olevan datan muokkaamisen](https://fullstackopen.com/osa2/palvelimella_olevan_datan_muokkaaminen) opiskelua
- Tehty tehtävät 2.12 - 2.17. 
- Lisätty [.\src\services\persons.js](.\src\services\persons.js)
- Lisätty [.\src\components\Notification.jsx](.\srv\components\Notification.jsx)
- Muutettu ja korjattu toimimaan palvelimen ja mongoDB:n kanssa

Nyt ymmärrän paremmin meidän opiskelijoita, kun he [koodaavat ensimmäistä kertaa omaa verkkosovellustaan](https://opinto-opas.metropolia.fi/88094/fi/67/70361/3459/2550/62749) ja tuskailevat koodin monimutkaisuuden kanssa. Olin jo aiemmin jotenkin päässyt sinuiksi React-objektien, tapahtumakäsittelijöiden ja tilojen kanssa, mutta lukiessani osiota [palvelimella olevan datan muokkaamista](https://fullstackopen.com/osa2/palvelimella_olevan_datan_muokkaaminen) nyt kun yhdistetään asynkroninen tiedonhaku ja -kirjoitus tietokantaan, on haastavaa pitää mielessä kaikkivat liikkuvat osat. Sellainen tunne, että opetellaan jonglööraamaan 6 erilaisella esineellä yhtäaikaa. Oppimiskäyrä on todella tiukka, varsinkin kun näyttää siltä, että kaikki sovelluslogiikka (ainakin tässä vaiheessa) kirjoitetaan muutamaan komponenttiin ja `App.jsx` tiedostoon ja uusia termejä ja asioita tulee tiiviiseen tahtiin. 

Viimeksi olen koodannut sovelluksia ehkä melkein 20 vuotta sitten käyttäen Visual Basicia tai Matlabia. Näissä työkaluissa (muistelen) sovelluksen käyttöliittymä ja tapahtumakäsittelijät oli eriytetty eri tiedostoihin ja käytettiin eri työkaluja näiden työstämiseen. Samoin, kun tähän mennessä on opetellut debuggaamaan ainoastaan käyttämällä `console.log` -komentoja ja tarkkailemalla jatkuvasti muutoksia sovelluksen kehitysversiossa, koodin toteuttaminen ja testaus tuntuu ainakin näin uutena verkkosovelluksen koodaajana hitaalta.

Puhelinluettelon viimeisessä tehtävässä (2.17*) oli haasteita. Kun rakensin `Notification.jsx` käsittelemään rakennetta `msg` ja nimesin muuttajan nimen, niin kestikin tovi, että ymmärsin muuttaa muuttajan nimen myös `Notification` komponentin kutsuun. Koodi ei antanut mitään virheilmoituksia, mutta `msg` arvot olivat `undefined` ja tämä aiheutti harmaita hiuksia. Lisäsin `console.log` komentoja vähän joka puolelle ja ihmettelin miksi `Notification` komponenttia kutsuttiin vähän väliä. Lopulta löysin syyn ja se oli väärä parametrin nimi. Tämän kun sai korjattua, alkoi koodi toimimaan, kuten olin odottanut.

Jälleen kerran Copilotista on ollut korvaamaton apu. Esim. kun refaktoroin koodia (tehtävä 2.10), avasin ja tallensin uuden komponenttitiedoston, `App.jsx` tiedostoon oli ilmestynyt automaattisesti `import` lausekkeet. Samoin Copilot arvasi pelkästä komponentin tai funktion nimen alusta, millaista koodia pitää kirjoittaa. Itselleni jäi tehtäväksi koodin oikoluku ja testata, että koodi edelleen toimii, kuten on tarkoitus.

## Mallipohja

Pohjana käytetään [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohjaa.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
