/* 1) Quali sono i tipi primitivi principali in TypeScript?
1) i tipi primitivi di dato in typescript sono: string, number, boolean, null, undefined, any e never


2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
2)  const name : string = "Amin"
    const age : number = 23
    const studyingTypescript : boolean = true



3) Tipizza il parametro della seguente funzione:

const greet = (name : string) => {  return "Ciao " + name }



4) Specifica il tipo di ritorno della seguente funzione:

const sum = (a: number, b: number) => {  return a + b  }
sum(2,16)

5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
5) const addtax= () => {



}


6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
6)

7) Cos'è un Type Union e come si scrive?
7) Permette di creare un'unione di diversi tipi, ovvero assegnare 2 tipi di dato alla stessa variabile per renderla piú versatile.

8) Crea una variabile che possa contenere un numero, null o undefined.
8) const versatileVar : number || null || undefined = 5


9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
9) Const fullWeek : string = "Monday,Tuesday,Wednesday,Thurday,Friday,Saturday,Sunday"

10) Tipizza il seguente array di numeri nei due modi possibili:
const numbers = [1, 2, 3]
10) const numbers : numbers[] = [1,2,3]
    const numbers: Array<numbers> = [1,2,3]



11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
11) const items: [string,string,string,number,number] = ["blue", "red", "yellow" , 99 ,2]



12) Qual è la differenza tra type e interface?
12)  i types ci permettono di tipizzare una costante o un valore con diversi tipi di dato ad esempio  il dato string/number/boolean etc, l'interface invece ci permette di creare oggetti tipizzati come vogliamo noi. Cosí da creare/interagire e operare in modo specifico sugli oggetti appena creati. 

13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
13) interface person = {

 firstname: string
 lastname: string
 age: number

}

14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
14)  interface user = {
     email: string
     phoneNumber?: number
}


15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
15) const student ={
     name: string
     vote: number
}

ArrayOfStudents<student> = []

16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
16) interface veicolo = {
haswheels: boolean,
ismadeofSteel: boolean
}


interface Auto extends Veicolo {

needsDriverLicense: boolean,
has4wheels: boolean

}


17) Crea un oggetto che implementi l'interfaccia Auto.
17) const daewooMatiz: auto = {
    haswheels: true
    ismadeofSteel: true
    needsDriverLicense: true
    has4wheels: true

}

18) Cosa sono i Generics in TypeScript?
18) 

19) È possibile avere più tipi generici in un'interfaccia?

20) Crea un'interfaccia generica per una risposta API.  */
