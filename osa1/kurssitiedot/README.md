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

Toinen ongelma on VSCoden Source Controlin käytössä. En saa synkronoitua tietoja GitHubiin suoraan VSCodesta, vaan joudun työntämään (Push) tiedot käyttäen Git gui:ta tai komentoriviä. Pieni, mutta ärsyttävä ongelma, jota en ole vielä kyennyt ratkaisemaan. Liittyy ilmeisesti siihen, mitä credential-manageria git käyttää.

Tätä ongelmaa yritin ratkaista poistamalla Windowsin credential managerista githubiin liittyvät avaimet, resetoida Git-konfiguraatio:
```bash
git config --global --unset credential.helper
git config --global --unset user.name
git config --global --unset user.email
```
ja lopuksi luoda hakemistokohtaiset käyttäjätunnukset:
```
cd /path/to/your/repository
git config user.name "Your Name"
git config user.email "your.email@example.com"
```
Lisäksi loin henkilökohtaisen pääsyavaimen (Personal Access Token, PAT) Githubissa:

1. Avaa https://github.com/settings/tokens
1. Klikkaa Generate new token. käytin Classic-versiota.
1. Kirjoita lyhyt kuvaus, jotta muistat mitä varten tämä avain on generoitu.
1. Valitse päättymisaika. Käytin 60 päivää.
1. Valitse laajuus (Select scopes). Tässä ilmeisesti riittää, että valitsee vain `repo`
1. Sivun pohjalla on painike `Generate Token`.
1. Kopioi ja tallenna avain (token) hyvään talteen. Et näe sitä uudestaan.

Tämän jälkeen annoin komentoikkunassa komennon:
```
git push
```
jolloin kysyttiin GitHubin salasanaa. Tässä kohtaa voi valita `token` ja kopioida generoidun avaimen. 

Tämänkin jälkeen, jos yritän synkronoida projektin VSCoden kautta, saan edelleen virheilmoituksen:
```
> git push origin main:main
fatal: Unable to persist credentials with the 'wincredman' credential store.
See https://aka.ms/gcm/credstores for more information.
fatal: Unable to persist credentials with the 'wincredman' credential store.
See https://aka.ms/gcm/credstores for more information.
error: remote-curl: error reading command stream from git
error: failed to push some refs to 'https://github.com/sakluk/fullstack-mooc.git'
```

Eli muutosten työntäminen Github-kansioon pitänee jatkossakin tehdä komentoriviltä :-(

## Mallipohja

Ohjeiden mukaan pohjaksi asentuu [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohja, jonka avulla pääsee aloittamaan Reactin käytön minimaalisin askelin.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
