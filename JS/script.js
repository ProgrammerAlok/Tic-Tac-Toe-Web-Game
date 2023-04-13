
let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const size = 3;

let isActive = true;

let count = 0;

const max = 8;

/*
 isCross true :: X ( X represent 1 )
        &&
 isCross false :: O ( O represent 2 )
*/
let isCross = true; 

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");

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

box1.addEventListener("click", Box1);
box2.addEventListener("click", Box2);
box3.addEventListener("click", Box3);
box4.addEventListener("click", Box4);
box5.addEventListener("click", Box5);
box6.addEventListener("click", Box6);
box7.addEventListener("click", Box7);
box8.addEventListener("click", Box8);
box9.addEventListener("click", Box9);

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
        document.getElementById('player-tern').innerText = `O's turn`
    }
    else {            
        matrix[row][col] = 2;
        img.src = './assets/O.png';
        isCross = true;
        document.getElementById('player-tern').innerText = `X's turn`
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

}

const formatBoard = () => {

    isActive = true;
    count = 0;
    isCross = true;
    document.getElementById('player-tern').innerText = `X's turn`;
    
    for(let i=0; i<size; i++) {
        for( let j=0; j<size; j++) {
            matrix[i][j] = 0;
        }
    }

    for(let i=0; i<size*size; i++) {
        document.getElementById(`box${i+1}`).innerHTML = ``;
        document.getElementById(`box${i+1}`).style.backgroundColor = `#3f6280`;
    }
    
}
/*
const computer = () => {
    const flag = count;
    do
    {
        let boxx = getRandomInt(9);

        switch (boxx) {
            case 1:
                Box1();
                break;
            case 2:
                Box2();            
                break;
            case 3:
                Box3();           
                break;
            case 4:            
                Box4();           
                break;
            case 5:            
                Box5();           
                break;
            case 6:            
                Box6();           
                break;
            case 7:            
                Box7();           
                break;
            case 8:            
                Box8();           
                break;
            case 9:            
                Box9();           
                break;
        }
    }while( flag != count )
}

const getRandomInt = (max) => {
    return 1 + Math.floor(Math.random() * max);
}
*/