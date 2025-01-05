# Osa 3. Puhelinluettelo - selain

Tässä kansiossa on esitetty osa 3. Puhelinluettelosovelluksen selainosio. Tämä vastaa tehtäviin 3.14 ja 3.17 tarvittaviin varmistuksiin.

## Käytetyt tunnit

Käytetyt tunnit on kirjattu palvelinpuolen kirjanpitoon.

## Muistiinpanot
- Muutettu ja korjattu toimimaan palvelimen ja mongoDB:n kanssa
- Asennettu ESLint `npm install eslint`
- Alustettu ESLint `npx eslint --init`
- Lisätty lint skripti package.json tiedostoon
- Ajettu `npm run lint` useaan kertaan ja tehty tarvittavat korjaukset, mm. tarkistettu, että  `prop-types` kirjasto on asennettu ja sitä käytetään komponenteissa

## Mallipohja

Pohjana käytetään [React](https://react.dev/) + [Vite](https://vite.dev/) mallipohjaa.

Mallipohjaan liittyvät lisäosat:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
