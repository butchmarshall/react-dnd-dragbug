import React from 'react';
import { DragLayer, DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

let style = {
	cell: {
		cursor: 'pointer',
		border: '1px solid red',
		userSelect: 'none',
	}
}

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
		item: monitor.getItem(),
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	};
})
@DragSource("ROW", {
	beginDrag(props, monitor, component) {
		console.log("beginDrag index", props.index);

		return {
			boundingClientRect: component.state.boundingClientRect,
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
export default class Row extends React.Component {
    constructor(props) {
        super(props);

		this.state = {
			boundingClientRect: null
		}
    }
	componentDidMount() {
		this.setState({
			boundingClientRect: this.self.getBoundingClientRect()
		});
		this.props.connectDragPreview(getEmptyImage(), {
			captureDraggingState: true
		});
	}
	render() {
		const { connectDragSource, connectDropTarget, isDragging, isOver } = this.props,
		text = ((isOver)?"&nbsp;":this.props.children);

		return connectDropTarget(connectDragSource(
			<tbody>
				<tr>
					<td style={style.cell} dangerouslySetInnerHTML={{ __html: text }} ref={(tbody) => { this.self = tbody; }}></td>
				</tr>
			</tbody>
		));
	}
}