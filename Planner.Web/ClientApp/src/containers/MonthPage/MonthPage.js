import React from 'react';
import './MonthPage.scss'

import Block from '../../components/Block/Block';
import TaskItem from '../../components/UI/TaskItems/TaskItem/TaskItem';
import TextBox from '../../components/UI/TextBox/TextBox';
import Button from '../../components/UI/Button/Button';
import Rating from '../../components/UI/Rating/Rating';
import Checkbox from '../../components/UI/Checkbox/Checkbox';

const monthPage = (props) => (
	<>
		<Block title="Главная задача дня">
			<TaskItem number="1" checked={true} text="Выучить 150 слов" />
		</Block>
		<Block title="Второстепенные задачи">
			<TaskItem number="2" checked={true} text="Выучить 20 слов" />
			<TaskItem number="3" checked={false} text="Заварить чай" />
		</Block>
		<Block title="Дополнительные задачи">
			<TaskItem number="4" checked={false} text="Нормально поесть" />
			<TaskItem number="5" checked={true} text="Хорошенько выспаться" />
		</Block>


		<Block title="Заметки" className="completion__box--notes">
			<TextBox placeholder="Закончить регистрацию пользователя" />
		</Block>

		<Block title="Продуктивность цели">
			<Rating />
		</Block>


		<Block title="Книга месяца">
			<Checkbox text="Анализ ценных бумаг" type="small" />
		</Block>
			
		<Block>
			<Button text="Завершить цель" />
		</Block>

		
		
	
	</>
);

export default monthPage;