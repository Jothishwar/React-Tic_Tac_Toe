import React,{ useState } from 'react';

function TicTacToe(){

	const [turn,setTurn] = useState("1");
	const [cells,setCells] = useState(Array(9).fill(""));


	const handleClick = (num) => {

		if(cells[num] !== ""){
			alert("Invalid Move");
			return;
		}
		let squares=[...cells]
		if(turn==="1"){
			squares[num]='X';
			setTurn("2");
		}else{
			squares[num]='O';
			setTurn("1");
		}

		setCells(squares);
		console.log(squares);
	}

	const Cell = ({num}) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>
	}

	return(
		<div className='container'>

			<p>Player <span>{turn}</span></p>
			<table>
				<tbody>
					<tr>
						<Cell num={0}/>
						<Cell num={1}/>
						<Cell num={2}/>
					</tr>
					<tr>
						<Cell num={3}/>
						<Cell num={4}/>
						<Cell num={5}/>
					</tr>
					<tr>
						<Cell num={6}/>
						<Cell num={7}/>
						<Cell num={8}/>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default TicTacToe;