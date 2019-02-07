(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.main = {}));
}(this, function (exports) { 'use strict';

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
    // function readDataSource(fp: string) {
    //     let file = readFileSync('sample.csv', 'utf8');
    //     parse(file, {complete: (result) => console.dir(result.data)});
    // }
    function clearList(root) {
        while (root.firstChild) {
            root.removeChild(root.firstChild);
        }
    }
    var SearchItem = /** @class */ (function () {
        function SearchItem(name, href) {
            if (href === void 0) { href = '#'; }
            this._name = name;
            this._href = href;
        }
        Object.defineProperty(SearchItem.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SearchItem.prototype, "href", {
            get: function () {
                return this._href;
            },
            set: function (newHref) {
                this._href = newHref;
            },
            enumerable: true,
            configurable: true
        });
        return SearchItem;
    }());
    function search() {
        var input = document.getElementById("search-input");
        var filter = input.value.toUpperCase();
        var displayList = document.getElementById("search-results-list");
        var searchList = [];
        searchList.push(new SearchItem('Home', 'index.html'));
        searchList.push(new SearchItem('About Us', 'about.html'));
        searchList.push(new SearchItem('Click through example', 'click_through/home.html'));
        searchList.push(new SearchItem('Hong Kong', 'detail.html'));
        searchList.push(new SearchItem('Posters', 'posters.html'));
        searchList.push(new SearchItem('Globe', 'globe.html'));
        // clear the list and return if there is nothing in the search bar
        clearList(displayList);
        if (filter.length == 0) {
            displayList.style.visibility = 'hidden';
            return;
        }
        else {
            displayList.style.visibility = 'visible';
        }
        for (var i = 0; i < searchList.length; i++) {
            var item = searchList[i];
            if (item.name.toUpperCase().indexOf(filter) > -1) {
                var liNode = document.createElement('li');
                var textNode = document.createTextNode(item.name);
                liNode.appendChild(textNode);
                var a = document.createElement('a');
                a.href = item.href;
                a.append(liNode);
                displayList.appendChild(a);
            }
        }
    }

    exports.search = search;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
