//import { link } from "fs";

//import {parse} from 'papaparse';
//import {readFileSync} from 'fs';

// /// <reference path="./node_modules/@types/papaparse/index.d.ts" />
// /// <reference path="./node_modules/@types/node/index.d.ts" />

class Startup {
    public static main(): number {
        console.log('Hello you');
        return 0;
    }
}

Startup.main();


class DataPoint {
    public date = 0;
    public energyConsumption = 0;
    public waterConsumption = 0;
    public energyUnits = '';
    public waterUnits = '';
}


class Community {
    public name = '';
    public type = '';
    public dataPoints = [];
}


// function readDataSource(fp: string) {
//     let file = readFileSync('sample.csv', 'utf8');
//     parse(file, {complete: (result) => console.dir(result.data)});
// }

function printme(val: string): void {
    console.log(val)
}


function clearList(root: any): void {
    while( root.firstChild ){
        root.removeChild( root.firstChild );
    }
}


function search(): void {
    let input: any = document.getElementById("search-input");
    let filter: string = input.value.toUpperCase();

    let testlist = ['NCSU', 'Raleigh', 'Chapel Hill', 'Durham', 'Greensboro', 'Chatanooga', 'Detroit', 'Baltimore', 'Hamilton', 'New Havan', 'North Carolina', 'Vermont', 'Alaska']
    let displayList = document.getElementById("search-results-list")

    // clear the list
    clearList(displayList);
    if (filter.length == 0) {
        displayList.style.visibility = 'hidden';
        return;
    } else {
        displayList.style.visibility = 'visible';
    }

    for (let i = 0; i < testlist.length; i++) {
        let item = testlist[i];
        if (item.toUpperCase().indexOf(filter) > -1) {
            let liNode = document.createElement('li');
            let textNode = document.createTextNode(item);
            liNode.appendChild(textNode);

            let a = document.createElement('a');
            if (item.toUpperCase() == 'NCSU') {
                a.href = 'detail.html';
            } else {
                a.href = '#'
            }
            a.append(liNode);

            displayList.appendChild(a);
        }
    }
}