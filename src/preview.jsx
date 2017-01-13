import React from 'react';
import { DragLayer } from 'react-dnd';

let style = {
	cell: {
		border: '1px solid blue',
		userSelect: 'none',
		width: '500px',
		zIndex: -1
	}
}

function getItemStyles(props, state) {
	const { initialOffset, currentOffset, item } = props;
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none'
		};
	}

	const y = (currentOffset.y);
	const transform = `translate(0, ${y}px)`;

	const style = {
		position: 'fixed',
		zIndex: 1,
		top: 0,
		marginLeft: '-2px',
		transform: transform,
	};

	return style;
}

@DragLayer((monitor) => {
	return {
		item: monitor.getItem(),
		itemType: monitor.getItemType(),
		initialOffset: monitor.getInitialSourceClientOffset(),
		currentOffset: monitor.getSourceClientOffset(),
		isDragging: monitor.isDragging(),
	};
})
export default class Preview extends React.Component {
	render() {
		return (
			<tbody style={getItemStyles(this.props, this.state)}>
				<tr>
					<td style={style.cell}>{this.props.children}</td>
				</tr>
			</tbody>
		);
	}
}