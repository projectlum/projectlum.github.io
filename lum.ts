class Startup {
    public static main(): number {
        console.log('Hello you');
        return 0;
    }
}

Startup.main();

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

    let testlist = ['Raleigh', 'Chapel Hill', 'Durham', 'Greensboro', 'Chatanooga', 'Detroit', 'Baltimore', 'Hamilton', 'New Havan', 'North Carolina', 'Vermont', 'Alaska']
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
            displayList.appendChild(liNode);
        }
    }
}