import React from 'react';

function TicTacToe(){

	const handleClick = () => {
		console.count('yes');
	}

	const Cell = () => {
		return <td onClick={handleClick}>*</td>
	}

	return(
		<div className='container'>
			<table>
				<tbody>
					<tr>
						<Cell />
						<Cell />
						<Cell />
					</tr>
					<tr>
						<Cell />
						<Cell />
						<Cell />
					</tr>
					<tr>
						<Cell />
						<Cell />
						<Cell />
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default TicTacToe;