let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

let size = 3;

let isActive = true;

let count = 0;

/*
 isCross true :: X ( X represent 1 )
        &&
 isCross false :: O ( O represent 2 )
*/
let isCross = true; 

const Box1 = () => {

    console.log("box 1 is clicked");
    
    if( count<size*size && isActive && matrix[0][0]===0 ) {

        
        count++;

        const row = 0;
        const col = 0;

        const parent = document.getElementById('box1');

        setOX(parent, row, col);     
        
        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }

}

const Box2 = () => {
    console.log("box 2 is clicked");

    if( count<size*size && isActive && matrix[0][1]===0 ) {

        count++;

        const row = 0;
        const col = 1;

        const parent = document.getElementById('box2');
        
        setOX(parent, row, col);  
        
        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }

}

const Box3 = () => {
    console.log("box 3 is clicked");
    
    if( count<size*size && isActive && matrix[0][2]===0 ) {
        
        count++;

        const row = 0;
        const col = 2;
        
        const parent = document.getElementById('box3');
        
        setOX(parent, row, col);  
        
        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }

}

const Box4 = () => {
    console.log("box 4 is clicked");

    if( count<size*size && isActive && matrix[1][0]===0 ) {

        count++;

        const row = 1;
        const col = 0;

        const parent = document.getElementById('box4');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }
    
}

const Box5 = () => {
    console.log("box 5 is clicked");

    if( count<size*size && isActive && matrix[1][1]===0 ) {

        count++;

        const row = 1;
        const col = 1;

        const parent = document.getElementById('box5');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }

}

const Box6 = () => {
    console.log("box 6 is clicked");

    if( count<size*size && isActive && matrix[1][2]===0 ) {

        count++;

        const row = 1;
        const col = 2;

        const parent = document.getElementById('box6');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }
    
}

const Box7 = () => {
    console.log("box 7 is clicked");

    if( count<size*size && isActive && matrix[2][0]===0 ) {

        count++;

        const row = 2;
        const col = 0;

        const parent = document.getElementById('box7');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }
    
}

const Box8 = () => {
    console.log("box 8 is clicked");

    if( count<size*size && isActive && matrix[2][1]===0 ) {

        count++;

        const row = 2;
        const col = 1;

        const parent = document.getElementById('box8');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }
    
}

const Box9 = () => {
    console.log("box 9 is clicked");

    if( count<size*size && isActive && matrix[2][2]===0 ) {

        count++;

        const row = 2;
        const col = 2;

        const parent = document.getElementById('box9');

        setOX(parent, row, col);

        if( hasWinningCondition() ) {
            isActive = false;
            if( !isCross ) {
                console.log('X has own the Game')
            }
            else {                
                console.log('O has own the Game')
            }
        }

    }
    
}

const setOX = (id, row, col) => {
    
    const parent = id;

    const img = document.createElement('img');
    img.height = 50;
    img.width = 50;
    img.id = `img${count}`;

    if( isCross ) {
        matrix[row][col] = 1;
        img.src = './assets/X.png';
        isCross = false;
        document.getElementById('player-tern').innerHTML = `O's turn`
    }
    else {            
        matrix[row][col] = 2;
        img.src = './assets/O.png';
        isCross = true;
        document.getElementById('player-tern').innerHTML = `X's turn`
    }

    parent.style.backgroundColor = 'white';
    parent.appendChild(img);    
    
}


const hasWinningCondition = () => {
    
    const winner_tv = document.getElementById('player-tern');

    if( count==size*size ) {
        winner_tv.innerHTML = `Game is Draw`
    }

    // for X means 1
    for( let i=0; i<size; i++) {
    
        if( matrix[i][0] === 1 && matrix[i][1]===1 && matrix[i][2]===1 ) {
            winner_tv.innerHTML = `X has own the game`;
            return true;
        }
        
        if( matrix[0][i]===1 && matrix[1][i]===1 && matrix[2][i]===1 ) {
            winner_tv.innerHTML = `X has own the game`;
            return true;
        }
        
    }
    
    if( matrix[0][0] === 1 && matrix[1][1]===1 && matrix[2][2]===1 ) {
        winner_tv.innerHTML = `X has own the game`;
        return true;
    }
    
    if( matrix[2][0] === 1 && matrix[1][1]===1 && matrix[0][2]===1 ) {
        winner_tv.innerHTML = `X has own the game`;
        return true;
    }
    
    // for O means 2
    for( let i=0; i<size; i++) {
        
        if( matrix[i][0] === 2 && matrix[i][1]===2 && matrix[i][2]===2 ) {
            winner_tv.innerHTML = `O has own the game`;
            return true;
        }
        
        if( matrix[0][i]===2 && matrix[1][i]===2 && matrix[2][i]===2 ) {
            winner_tv.innerHTML = `O has own the game`;
            return true;
        }
        
    }
    
    if( matrix[0][0] === 2 && matrix[1][1]===2 && matrix[2][2]===2 ) {
        winner_tv.innerHTML = `O has own the game`;
        return true;
    }
    
    if( matrix[2][0] === 2 && matrix[1][1]===2 && matrix[0][2]===2 ) {
        winner_tv.innerHTML = `O has own the game`;
        return true;
    }


    return false;

    /*
    for( let i=0; i<size; i++ ) {
        for( let j=0; j<size; j++ ) {
            if( matrix[i][j]===0 ) {
                return false;
            }
        }
    }

    for( let i=0; i<size; i++ ) {
        for( let j=0; j<size; j++ ) {
            if( matrix[i][j]===0 ) {
                return false;
            }
        }
    }
    */


}


const formatBoard = () => {
    /*
    for(let i=0; i<size; i++) {
        for( let j=0; j<size; j++) {
            matrix[i][j]=0;
        }
    }
    for(let i=0; i<size*size; i++) {
        document.getElementById(`img${i+1}`).parentNode.removeChild(document.getElementById(`img${i+1}`));
    }
    */
}

