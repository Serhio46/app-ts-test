import React, { ChangeEvent, FC, useState } from 'react';


//Можно создать интрефейс для описания пропсов и предпочтительнее
interface asdProps {
	name: string;
	age: number;
	student: boolean;
	getAge(): number;
}
//export const asd: FC <asdProps> = ({name, age, student, getAge})

//так же есть перечисления enum, в которых можно перечислить значения, которые может принимать значение поля

enum Colors {
	RED,
	BLUE,
	GREEN
}

//Здесь типизация напрямую в дженерике, передаем объект
export const asd: FC<{ name: string }> = ({ name }) => {

	//const [state, setState] = useState('') // этого достаточно , еts понгимает что здесь строка, но есди хотим явно указать, то задаем в дженерике
	const [state, setState] = useState<string>();// ексли введем что-то другое, тс будет ругаться

	//Типизация событий
	const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setState(event.target.value)
	}



	return (
		<>
			<div>{name}</div>
		</>
	);
}

export default asd;