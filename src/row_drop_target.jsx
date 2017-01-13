import React from 'react';
import { DragLayer, DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

let style = {
	cell: {
		position: 'relative',
		border: '1px solid grey',
		userSelect: 'none',
		padding: '10px',
	}
};

@DropTarget("ROW", {
	canDrop() {
		return true;
	},
	hover(props, monitor, component) {
		let from = monitor.getItem().index,
		to = props.index;

		if (from === to) {
			return;
		}

		props.swap(from, to);

		monitor.getItem().index = to;
	}
}, (connect, monitor) => {
	return {
		dragItem: monitor.getItem(),
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
})
export default class RowDropTarget extends React.Component {
	render() {
		const { connectDropTarget, isDragging, isOver } = this.props;

		return connectDropTarget(
			<div style={style.cell}>
				{this.props.children}
			</div>
		);
	}
}