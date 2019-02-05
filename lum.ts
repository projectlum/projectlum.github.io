//import {parse} from 'papaparse';
//import fs = require("fs");

// /// <reference path="./node_modules/@types/papaparse/index.d.ts" />
// ///<reference path="./node_modules/@types/node/index.d.ts" />

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


class SearchItem {
    private _name: string;
    private _href: string;
    constructor (name:string, href:string='#') {
        this._name = name;
        this._href = href;
    }
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    get href(): string {
        return this._href;
    }
    set href(newHref: string) {
        this._href = newHref;
    }
}


function search(): void {
    let input: any = document.getElementById("search-input");
    let filter: string = input.value.toUpperCase();

    let testlist = ['About Us', 'Click through example', 'NCSU', 'Raleigh', 'Chapel Hill', 'Durham', 'Greensboro', 'Chatanooga', 'Detroit', 'Baltimore', 'Hamilton', 'New Havan', 'North Carolina', 'Vermont', 'Alaska']
    let displayList = document.getElementById("search-results-list")

    let searchList = [];
    searchList.push(new SearchItem('Home', 'index.html'))
    searchList.push(new SearchItem('About Us', 'about.html'))
    searchList.push(new SearchItem('Click through example', 'click_through/home.html'))
    searchList.push(new SearchItem('Hong Kong', 'detail.html'))
    searchList.push(new SearchItem('Raleigh', '#'))
    searchList.push(new SearchItem('Chapel Hill', '#'))

    // clear the list
    clearList(displayList);
    if (filter.length == 0) {
        displayList.style.visibility = 'hidden';
        return;
    } else {
        displayList.style.visibility = 'visible';
    }

    for (let i = 0; i < searchList.length; i++) {
        let item:SearchItem = searchList[i];
        if (item.name.toUpperCase().indexOf(filter) > -1) {
            let liNode = document.createElement('li');
            let textNode = document.createTextNode(item.name);
            liNode.appendChild(textNode);

            let a = document.createElement('a');
            a.href = item.href;
            a.append(liNode);

            displayList.appendChild(a);
        }
    }
}