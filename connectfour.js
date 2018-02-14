
var connectfour = (function() {

  var grid = [[null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null]];
              var current = "red";


              function makeMove(cell) {
                // we need to extract the x and y from the cell id
                // RxCy

                var x = Number(cell[1]);
                var y = Number(cell[2]);
                 // this is the y in RxCy
                // check if the cell is empty
                console.log(grid);
                console.log(x);
                console.log(y);
                if (grid[x][y] === null) {
                  // play the move
                  grid[x][y] = current;

                  // alternate the player
                  if (current === "red") {
                    current = "yellow";
                  }
                  else {
                    current = "red";
                  }
                  // notify all the listeners (which update the views)
                  notify();
                }
              }
              function clearGrid() {
                // set all cells to null
                for (var r = 0; r < grid.length; r++) {
                  for (var c = 0; c < grid[r].length; c++) {
                    grid[r][c] = null;
                  }
                }
                // notify all the listeners (which update the views)
                notify();
              }
  
              // store all the listeners
              // we have to call all of them if something changes
              var listeners = [];

              // this function registers/adds a listener
              function listen(cb) {
                // collect them in the listeners array
                listeners.push(cb);
              }

              // notify all listeners of a change to the grid
              function notify() {
                // iterate through the array and call the listen callback function
                for (var i = 0; i < listeners.length; i++) {
                  // call the function
                  listeners[i](grid);
                }
              }

              // all functionality is accessed through the methods below
              return {
                makeMove: makeMove,
                clearGrid: clearGrid,
                listen: listen
              };
});
