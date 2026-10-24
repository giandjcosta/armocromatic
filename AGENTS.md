# Come si lavora su Armocromatic

Regole per chi modifica il sito: Gianluca, Claude Code, l'agente di VS Code, Perplexity, Aider. Leggerle prima di ogni modifica.

## Dove sta il sito
- La versione vera è il ramo `main` di questo repository. Quello che c'è su `main` è quello che c'è online.
- Netlify (sito `armocromatic`, https://armocromatic.netlify.app) pubblica da solo a ogni merge su `main`. Non c'è build: pubblica i file così come sono.
- Mai pubblicare a mano su Netlify (trascinando i file, dalla CLI o dall'API): la volta dopo che qualcuno fa merge su `main` quella versione sparisce.

## Il giro di ogni modifica
1. Partire sempre dall'ultima versione di `main`.
2. Creare un ramo con il proprio nome davanti: `perplexity/<cosa>`, `claude/<cosa>`, `vscode/<cosa>`, `aider/<cosa>`, `gianluca/<cosa>`.
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

## Regole comuni a tutti i repository di Gianluca

Valgono per chiunque modifichi questi repository: Gianluca, Claude Code (cloud o desktop), l'agente di VS Code, Perplexity, Aider o altri.

Repository: `o-fant-a-girrr` (sito della lega), `o-girrr-registro` (laboratorio e registro della lega), `armocromatic` (sito di armocromia), `giandjcosta` (profilo GitHub).

### Prima di cominciare
1. Leggi questo file fino in fondo: sotto ci sono le regole del singolo progetto.
2. Aggiorna la copia locale (`git pull`). I repository cambiano di continuo: lavorano più assistenti, e sul sito della lega scrivono anche i workflow ogni pochi minuti.
3. Guarda le Pull Request e i rami aperti: se qualcuno sta già lavorando sulla stessa parte, non sovrapporti.

### Mentre lavori
- Una modifica per argomento, piccola. Non toccare file che non c'entrano con quello che ti è stato chiesto.
- Lavora su un ramo con il tuo nome davanti: `claude/…`, `vscode/…`, `perplexity/…`, `aider/…`, `gianluca/…`. Commit con messaggi in italiano che dicono cosa cambia.
- Mai `git push --force`, mai riscrivere la storia di un ramo già su GitHub, mai cancellare rami di altri.
- Mai scrivere nel codice chiavi, token o password. Le chiavi "publishable" di Supabase già presenti nelle pagine sono pubbliche per scelta; ogni altra chiave no.
- Prima di consegnare, prova davvero: le pagine devono funzionare a 320 px di larghezza (iPhone SE) senza scorrere di lato, e la console del browser non deve avere errori nuovi.

### Cosa serve il "vai" di Gianluca
- Qualsiasi cosa che va online (merge sul ramo pubblicato, push sul sito vero). Unica eccezione: micro correzioni di testo nel sito della lega, che vanno online con un avviso dopo.
- Qualsiasi modifica al database Supabase (progetto `qmjqfgmvimsuxvghetgi`): niente SQL, niente migrazioni, niente dati cambiati senza il suo "vai" esplicito.
- Cancellare file, rami, Pull Request o dati.
- Se un controllo di sicurezza blocca un'operazione, fermati e spiega cosa è successo: non aggirarlo.

### Quando hai finito
- Di' cosa hai cambiato, cosa hai provato e cosa non hai potuto provare (per esempio Safari).
- Per la lega: aggiorna `STATO.md` nel repository `o-girrr-registro`.
- Rispondi in italiano.
