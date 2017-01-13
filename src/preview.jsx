import React from 'react';
import { DragLayer } from 'react-dnd';

const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
};

const boxStyle = {
  border: '1px solid blue',
  width: '500px'
}

function getItemStyles(props, state) {
	const { initialOffset, currentOffset, item } = props;
	if (!initialOffset || !currentOffset) {
		return {
			display: 'none'
		};
	}

	const y = (currentOffset.y);
	const x = (initialOffset.x);
	const transform = `translate(${x}px, ${y}px)`;

	const style = {
		transform: transform,
	};

	return style;
}

function getBoxStyles(props, state) {
	if (!props.item) {
		return {}
	}

	console.log(props.item.boundingClientRect);

	return {
		width: `${props.item.boundingClientRect.width}px`
	}
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
			<tbody style={{...layerStyles,...getItemStyles(this.props, this.state)}}>
				<tr>
					<td style={{...boxStyle, ...getBoxStyles(this.props, this.state)}}>
						{this.props.children}
					</td>
				</tr>
			</tbody>
		);
	}
}

/*
const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',

};

const boxStyle = {
  border: '1px solid blue',	
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
			<div style={layerStyles}>
				<div style={getItemStyles(this.props, this.state)}>
					<div style={boxStyle}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}*/