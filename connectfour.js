var connectfour = (function(){

  var grid = [[null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null],
              [null, null, null, null, null, null, null]]

              var current = "red";


              function makeMove(cell) {
                // we need to extract the x and y from the cell id
                // RxCy

                var x = Number(cell[1]);
                var y = Number(cell[2])
                 // this is the y in RxCy
                // check if the cell is empty
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


});
