export default  {

    insert: function (table, player) {
        player.id = new Date().getTime();
        var arr = this.select(table);
        arr.push(player);
        localStorage.setItem(table, JSON.stringify(arr))
    },
    remove: function (table, id) {
        //select the relevant player from arr
        var arr = this.select(table);
        var foundIndex = this._searchIndexById(table, id);
        if (foundIndex == undefined) {
            return;
        }

        //remove the player
        arr.splice(foundIndex, 1);

        //update the arr
        localStorage.setItem(table, JSON.stringify(arr));

    },
    select: function (table) {
        var result = localStorage.getItem(table)
        if (result == null) {
            result = '[]';
        }
        return JSON.parse(result);
    },

    update: function (table, id, player) {
        //select the relevant Item from arr
        var arr = this.select(table);
        var foundIndex = this._searchIndexById(table, id);
        if (foundIndex == undefined) {
            return;
        }

        for (var key in player) {
            if (player[key]) {
                var selectedPlayer = arr[foundIndex];
                selectedPlayer[key] = player[key];
            }
        }

        //update the arr in localStorage
        localStorage.setItem(table, JSON.stringify(arr));
        // read();
    },
    _searchIndexById: function (table, id) {
        var arr = this.select(table);
        var foundIndex = undefined;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].id === id) {
                foundIndex = i;
                break;
            }
        }
        return foundIndex;
    },
    namesOfTable: function(){
        alert("pass pass its a come its a goal")
        // var pl = <th> הסף את השחקן</th>
        // var ps = <th> עמדה</th>
        // var avp = <th> ממוצע נקודות</th>
        // var avm = <th> ממוצע דקות</th>
        // var avtw = <th> אחוזים ל2</th>
        // var avth = <th> אחוזים ל3</th>
        // var as= <th>אס' </th>
        // var rig = <th>מדד </th>
        // var act = <th>פעולות </th>
    },
    getPlayerById: function(table,id){
        var arr = this.select(table);
        return arr.find(function (player){
            debugger
            return player.id == id
        })
    }
}






