# Osa 1a. Kurssitiedot

Tässä kansiossa on esitetty omat palautukseni tehtäviin 
- 1.1 kurssitiedot, step1: komponentit Header, Content ja Total
- 1.2 kurssitiedot, step2: komponentti Part
- 1.3 kurssitiedot, step3: kurssin osat JavaScript -olioissa
- 1.4 kurssitiedot, step4: kurssin osat taulukkona
- 1.5 kurssitiedot, step5: kurssi ja sen osat on yksi JavaScript -olio

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| ------- | ---------------------- |
| 1 | Kurssin sisällön selailua |
| 1 | Osa 0. Web-sovellusten perusteet |
| 1 | Osa 1a. Reactin alkeet, ympäristön pystyttäminen, ensimmäiset tehtävät 1.1 ja 1.2 |
| 1 | Ensimmäisten tehtävien siirto alikansioon, gitin korjaus, node_modules uudelleen asennus |
| 1 | Osa 1b. JavaScriptin tutustuminen ja tehtävät (1.3 -1.5) |
| **5** | **Yhteensä** |

## Haasteet ja pohdintoja

Npm ympäristön asentaminen oli suoraviivaista, mutta aluksi asensin ympäristön kansioon `osa1`. Myöhemmin ymmärsin, että osalle 1a pitää luoda oma alikansio `osa1/kurssitiedot` ja tämän jälkeen menikin hetken aikaa ennenkuin keksin miten jo tehdyt harjoitukset sai kopioitua alikansioon. Vahingossa ehdin tehdä jo paikalliseen projektiin tallennuksen, jossa tuli mukaan koko `node_modules` kansio (7000+ tiedostoa). Jouduin palauttamaan tiedot Github-projektistani ja asentamaan npm:n uudestaan palautettuun kansioon.

Toinen ongelma on VSCoden Source Controlin käytössä. Koska käytän myös Metropolian omaa GitLabia, niin työkoneeni git-asetukset ovat jotenkin sekaisin. En saa synkronoitua tietoja GitHubiin suoraan VSCodesta, vaan joudun työntämään (Push) tiedot käyttäen Git gui:ta. Pieni, mutta ärsyttävä ongelma, jota en ole vielä kyennyt ratkaisemaan. Liittyy ilmeisesti siihen, mitä credential-manageria git käyttää.

## Mallipohja

Ohjeiden mukaan pohjaksi asentuu [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohja, jonka avulla pääsee aloittamaan Reactin käytön minimaalisin askelin.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
