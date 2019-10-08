import React, { Component } from 'react';
import { connect } from 'react-redux';
import Block from '../../components/Block/Block';
import TaskItem from '../../components/UI/TaskItems/TaskItem/TaskItem';
import Button from '../../components/UI/Button/Button';

class DayPage extends Component {

	clickHandler = (task) => {
		console.log(task);
	}

	render() {
		let content = <div> Edit mode </div>;

		const { tasks } = this.props.day;

		if (tasks.length) {
			content = (
				<>
					<Block title="Главная задача дня">
						<TaskItem number="1" task={tasks[0]} clicked={() => this.clickHandler(tasks[0])} />
					</Block>
					<Block title="Второстепенные задачи">
						<TaskItem number="2" task={tasks[1]} clicked={() => this.clickHandler(tasks[1])}  />
						<TaskItem number="3" task={tasks[2]} clicked={() => this.clickHandler(tasks[2])}  />
					</Block>
					<Block title="Дополнительные задачи">
						<TaskItem number="4" task={tasks[3]} clicked={() => this.clickHandler(tasks[3])}  />
						<TaskItem number="5" task={tasks[4]} clicked={() => this.clickHandler(tasks[4])}  />
					</Block>
					<Block>
						<Button text="Завершить день" />
					</Block>
				</>
			);
		}

		return (
			<>
				{content}
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		day: state.task.day
	}
};

export default connect(mapStateToProps)(DayPage);