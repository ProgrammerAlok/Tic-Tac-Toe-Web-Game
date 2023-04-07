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

        matrix[0][0] = 1;
        count++;

        let parent = document.getElementById('box1');

        setOX(parent);     
        
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

        matrix[0][1] = 1;
        count++;

        let parent = document.getElementById('box2');
        
        setOX(parent);  
        
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
        
        matrix[0][2] = 1;
        count++;
        
        let parent = document.getElementById('box3');
        
        setOX(parent);  
        
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

        matrix[1][0] = 1;
        count++;

        let parent = document.getElementById('box4');

        setOX(parent);

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

        matrix[1][1] = 1;
        count++;

        let parent = document.getElementById('box5');

        setOX(parent);

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

        matrix[1][2] = 1;
        count++;

        let parent = document.getElementById('box6');

        setOX(parent);

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

        matrix[2][0] = 1;
        count++;

        let parent = document.getElementById('box7');

        setOX(parent);

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

        matrix[2][1] = 1;
        count++;

        let parent = document.getElementById('box8');

        setOX(parent);

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

        matrix[2][2] = 1;
        count++;

        let parent = document.getElementById('box9');

        setOX(parent);

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

const setOX = (id) => {

    const parent = id;

    const img = document.createElement('img');
    img.height = 50;
    img.width = 50;

    if( isCross ) {
        img.src = './assets/X.png';
        isCross = false;
        
    }
    else {            
        img.src = './assets/O.png';
        isCross = true;
    }

    parent.style.backgroundColor = 'white';
    parent.appendChild(img);    

}


const hasWinningCondition = () => {
    
    for( let i=0; i<size; i++) {
    
        if( matrix[i][0] === 1 && matrix[i][1]===1 && matrix[i][2]===1 ) {
            return true;
        }

        if( matrix[0][i]===1 && matrix[1][i]===1 && matrix[2][i]===1 ) {
            return true;
        }
    
    }

    if( matrix[0][0] === 1 && matrix[1][1]===1 && matrix[2][2]===1 ) {
        return true;
    }

    if( matrix[2][0] === 1 && matrix[1][1]===1 && matrix[0][2]===1 ) {
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

