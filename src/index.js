import { Graph ,number,letters,board} from "./graph";

// possible moves of knight
let possibleMoves = [
    [ -1, 2 ],  [ -1, -2 ],
    [ 1, 2 ],   [ 1, -2 ],
    [ 2, -1 ],  [ 2, 1 ],
    [ -2, -1 ], [ -2, 1 ]
]

let g = new Graph()

// function to fill adjcanecy list of all possible moves
function fillGraph(start){
    let l= letters.indexOf(start[0])
    let n = number.indexOf(start[1])

    for (let i=0;i<8;i++){
        let nposx = letters[l+possibleMoves[i][0]]
        let nposy = number[n+possibleMoves[i][1]]

        if (nposy && nposx)
            g.addEdge(start,`${nposx}${nposy}`)
    }

}

board.forEach(element => {
    fillGraph(element)
});


g.shortestPathBFS('f5','h8')