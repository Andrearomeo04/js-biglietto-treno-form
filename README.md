Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.
Link repo live coding: https://github.com/fabriziom90/js-html-css.git
Buon lavoro

soluzione 

problema 1 "il programma dovrà chiedere il numero di chilometri da percorrere e l'età all'utente" x
1.creo 2 input di testo in cui richiederò questi dati

problema 2 "il prezzo del biglietto è definito in base ai km (0.21 € al km)" x
1.dichiaro una variabile per i km da percorrere
2.richiamo l'input in cui vanno messi i km e assegno questo valore alla variabile creata poc'anzi
3.richiamo la variabile per i numeri di km da voler percorrere e applico un calcolo in % per ottenere il prezzo finale

problema 3 "va applicato uno sconto del 20% per i minorenni; va applicato uno sconto del 40% per gli over 65."
1.dichiaro una variabile per l'età del passeggero
2.richiamo l'input in cui va messa l'età e assegno questo valore alla variabile creata poc'anzi
3.richiamo la variabile per l'età del passeggero
4.se il passeggero ha meno di 18 anni
5.1applico uno sconto in % del 20% sul prezzo
6.altrimenti se il passeggero ha 65 o più anni
7.1applico uno sconto in % del 40% sul prezzo
8.altrimenti il prezzo è quello default

problema 4 "il prezzo deve essere formattato con 2 decimali"
1.vado ad assegnare alla variabile con il prezzo finale, una proprietà che ci permette di ottenere il risultato in due decimali

problema 5 "creare un bottone, il quale genererà il prezzo finale in base alle informazioni date"
1.creo un pulsante 
1.recupero il pulsante dal dom
2.gli dico di rimanere in attesa di un evento click
3.recupero gli input di richiesta dei km e dell'età
5.stampo i valori nella console

problema 6 "milestone 2"
1.inserisco gli input di testo precedentemente creati, in un form
2.recupero il pulsante dal dom
3.gli dico di rimanere in attesa di un evento click
4.recupero gli input contenuti all'interno del form
5.stampo questi valori all'interno della pagina html


