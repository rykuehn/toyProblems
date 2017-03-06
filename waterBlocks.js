function waterBlocks(grid){

    for(var i = 0; i<grid.length; i++){
        var split = grid[i].split('');
        grid[i] = split
    }
    
    for(var row = 1; row <= grid.length-2; row++) {
        for(var column = 1; column <= grid.length-2; column++){
            var item = grid[row][column];
            if(item > grid[row - 1][column] &&
               item > grid[row + 1][column] &&
               item > grid[row][column -1] &&
               item > grid[row][column + 1]) {
                grid[row][column] = 'X'
            }
        }
    }
    
    for(var i = 0; i<grid.length; i++){
        var split = grid[i].join('');
        grid[i] = split
    }
    
    console.log(grid.join('\n'))
}

waterBlocks(['1112', '1912', '1892', '1234'])