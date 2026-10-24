# Come si lavora su Armocromatic

Regole per chi modifica il sito: Gianluca, Perplexity e Claude Code. Leggerle prima di ogni modifica.

## Dove sta il sito
- La versione vera è il ramo `main` di questo repository. Quello che c'è su `main` è quello che c'è online.
- Netlify (sito `armocromatic`, https://armocromatic.netlify.app) pubblica da solo a ogni merge su `main`. Non c'è build: pubblica i file così come sono.
- Mai pubblicare a mano su Netlify (trascinando i file, dalla CLI o dall'API): la volta dopo che qualcuno fa merge su `main` quella versione sparisce.

## Il giro di ogni modifica
1. Partire sempre dall'ultima versione di `main`.
2. Creare un ramo con il proprio nome davanti: `perplexity/<cosa>`, `claude/<cosa>`, `gianluca/<cosa>`.
3. Fare i commit su quel ramo, con messaggi in italiano che dicono cosa cambia.
4. Aprire una Pull Request verso `main`, con nella descrizione: cosa cambia, perché, come provarlo.
5. Netlify crea un'anteprima della Pull Request (link `deploy-preview-N--armocromatic.netlify.app` nei commenti della PR): provarla su telefono e PC.
6. Il merge lo decide Gianluca. Nessuno fa merge da solo delle proprie modifiche, salvo che Gianluca lo chieda.
7. Se un'altra Pull Request è stata unita nel frattempo, aggiornare il proprio ramo da `main` prima del merge.

## Per non pestarsi i piedi
- Una Pull Request per argomento, piccola. Due persone non lavorano insieme sullo stesso pezzo di `index.html`: prima si dice chi fa cosa.
- Prima di cominciare, guardare le Pull Request aperte: se qualcuno sta già lavorando su quella parte, aspettare o commentare lì.

## Cose tecniche da ricordare
- Il sito è una pagina sola (`index.html`) con le sezioni come schede: `#/home`, `#/fit`, `#/grooming`, `#/palette`, `#/rules`, `#/accessori`.
- `sw.js` tiene il sito in memoria sul telefono (app aggiunta alla Home) e serve prima la copia salvata. Ogni volta che cambia un file del sito, alzare di uno il numero in `var CACHE = 'armocromatic-vN'`, altrimenti chi ha già aperto il sito continua a vedere la versione vecchia. Se si aggiunge un file, metterlo anche in `ASSETS`.
- Immagini in `img/` in formato `.webp`, con il testo `alt` che descrive cosa si vede. Icone in `icons/`.
- Il sito è per tutti: niente dati personali di qualcuno (altezza, peso, foto) nei testi. I dati li mette ognuno nel calcolatore.
- Deve funzionare bene a 320 px di larghezza (iPhone SE) senza scorrere di lato.
