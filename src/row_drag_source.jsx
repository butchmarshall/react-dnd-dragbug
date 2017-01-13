import React from 'react';
import { DragLayer, DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

let style = {
	cell: {
		position: 'relative',
		cursor: 'pointer',
		border: '1px solid red',
		userSelect: 'none',
	}
}

function getStyles(props) {
	const { left, top, isDragging } = props;
	const transform = `translate3d(${left}px, ${top}px, 0)`;

	return {
		transform: transform,
		WebkitTransform: transform,
	};
}


@DragSource("ROW", {
	beginDrag(props, monitor, component) {
		console.log("beginDrag index", props.index);

		return {
			index: props.index,
			text: props.text,
			swap: props.swap,
		};
	},
	endDrag(props, monitor, component) {
		console.log("endDrag index", props.index);
	},
	canDrag() {
		return true;
	}
}, (connect, monitor) => ({
	connectDragSource: connect.dragSource(),
	connectDragPreview: connect.dragPreview(),
	isDragging: monitor.isDragging(),
}))
export default class RowDragSource extends React.Component {
	componentDidMount() {
		this.props.connectDragPreview(getEmptyImage(), {
			captureDraggingState: true
		});
	}
	render() {
		const { connectDragSource, isDragging, isOver } = this.props;

		return connectDragSource(
			<div style={getStyles(this.props)}>
				<div style={style.cell}>
					{this.props.children}
				</div>
			</div>
		);
	}
}