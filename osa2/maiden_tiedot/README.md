# Osa 2d. Maiden tiedot

Tässä kansiossa on esitetty palautukset tehtäviin 2.18* ja 2.20*. Tehtävä 2.19* on jätetty tekemättä.

## Käytetyt tunnit
  Tunnit | Tehtävä                 |
| -----  | ----------------------- |
| 1      | Luotu pohja             |
| 1      | Toteutettu maiden suodattaminen |
| 1      | Toteutettu säätietojen hakeminen |
| **3**  | **Yhteensä**            |

## Muistiinpanot
- Luotu uusi React+Vite mallipohja, poistettu tarpeettomat tiedostot
- Koodattu Copilottia käyttäen maiden suodattaminen
- Jätetty tehtävä 2.19* tekemättä
- Toteutettu säätietojen hakeminen (tehtävä 2.20*)
- Jatkettu toteuttamista käyttäen Copilotia

Säätietojen hakeminen https://openweathermap.org/ palvelusta vaatii luotto/pankkikortin tietojen antamisen. Säätietojen kysely on maksutonta 1000 kyselyyn per päivä asti, joten se kyllä riittää hyvin näihin tehtäviin.

Tehtävänannossa ei oltu kerrottu miten piilottaa api-avaimet, mutta Copilot antoi selkeät ohjeet kuinka tehdä se. Loin ohjeiden mukaisesti `.env` tiedoston ja lisäsin sen `.gitignore` listalle,  jotta sitä ei tallenneta GitHub projektikansioon.

## Mallipohja

Pohjana käytetään [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohjaa.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
