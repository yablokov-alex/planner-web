import React from 'react';
import Block from '../../components/Block/Block';
//import './MonthPage.scss'

import TaskItem from '../../components/UI/TaskItems/TaskItem/TaskItem';
//import TextBox from '../../components/UI/TextBox/TextBox';
import Button from '../../components/UI/Button/Button';

const weekPage = (props) => (
    <>
        <Block title="Главне задачи недели">
            <TaskItem number="1" checked={true} text="Выучить 150 слов" />
            <TaskItem number="2" checked={true} text="Выучить 300 слов" />
            <TaskItem number="3" checked={true} text="Выучить 450 слов" />
            <TaskItem number="4" checked={true} text="Выучить 600 слов" />
            <TaskItem number="5" checked={true} text="Выучить 750 слов" />
        </Block>
        <Block title="Второстепенные задачи">
            <TaskItem number="6" checked={false} text="Выучить 900 слов" />
            <TaskItem number="7" checked={false} text="Выучить 1000 слов" />
            <TaskItem number="8" checked={false} text="Выучить 1100 слов" />
            <TaskItem number="9" checked={false} text="Выучить 1200 слов" />
            <TaskItem number="10" checked={false} text="Выучить 1300 слов" />
        </Block>
        <Block title="Дополнительные задачи">
            <TaskItem number="11" checked={false} text="Выучить 1400 слов" />
            <TaskItem number="12" checked={false} text="Выучить 1500 слов" />
            <TaskItem number="13" checked={false} text="Выучить 1600 слов" />
            <TaskItem number="14" checked={false} text="Выучить 1700 слов" />
            <TaskItem number="15" checked={false} text="Выучить 2000 слов" />
        </Block>
        <Block>
            <Button text="Завершить неделю" />
        </Block>
    </>
);

export default weekPage;