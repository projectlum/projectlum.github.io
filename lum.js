var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello you');
        return 0;
    };
    return Startup;
}());
Startup.main();
function printme(val) {
    console.log(val);
}
function clearList(root) {
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
}
function search() {
    var input = document.getElementById("search-input");
    var filter = input.value.toUpperCase();
    var testlist = ['Raleigh', 'Chapel Hill', 'Durham', 'Greensboro', 'Chatanooga', 'Detroit', 'Baltimore', 'Hamilton', 'New Havan', 'North Carolina', 'Vermont', 'Alaska'];
    var displayList = document.getElementById("search-results-list");
    // clear the list
    clearList(displayList);
    if (filter.length == 0) {
        displayList.style.visibility = 'hidden';
        return;
    }
    else {
        displayList.style.visibility = 'visible';
    }
    for (var i = 0; i < testlist.length; i++) {
        var item = testlist[i];
        if (item.toUpperCase().indexOf(filter) > -1) {
            var liNode = document.createElement('li');
            var textNode = document.createTextNode(item);
            liNode.appendChild(textNode);
            displayList.appendChild(liNode);
        }
    }
}
//# sourceMappingURL=lum.js.map