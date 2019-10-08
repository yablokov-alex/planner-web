import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';
import './Sidebar.scss';

class Sidebar extends Component {

	render() {
		return (
			<aside className="aside">
				<div className="sidebar">
					<div className="sidebar__wrap">
						<NavigationItem to="/inbox" svgHash="#email" title="Входящие" count={this.props.inbox.count} />
						<NavigationItem to="/delegated" svgHash="#user" title="Делегированные" count={this.props.delegated.count} />
						<NavigationItem to="/day" svgHash="#calendar-1" title="День" count={this.props.day.count} />
						<NavigationItem to="/week" svgHash="#calendar-3" title="Неделя" count={this.props.week.count} />
						<NavigationItem to="/month" svgHash="#calendar-2" title="Месяц" count={this.props.month.count} />
					</div>
					<div className="sidebar__target">
						<NavLink to="/" exact>
							<svg className="icon-goal">
								<use xlinkHref="#goal"></use>
							</svg>
							<span>Цель</span>
						</NavLink>
					</div>
					<div className="sidebar__close" onClick={this.props.click}>
						<svg className="icon-arrow-circle">
							<use xlinkHref="#arrow-circle"></use>
						</svg>
						<span>Свернуть</span>
					</div>
				</div>
			</aside>
		);
	}

}

const mapStateToProps = state => {
	return {
		day: state.task.day,
		week: state.task.week,
		month: state.task.month,
		inbox: state.task.inbox,
		delegated: state.task.delegated
	}
};

export default connect(mapStateToProps)(Sidebar);