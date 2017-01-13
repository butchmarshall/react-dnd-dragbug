import React from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Row from './row.jsx';
import RowDragSource from './row_drag_source.jsx';
import RowDropTarget from './row_drop_target.jsx';
import Preview from './preview.jsx';

@DragDropContext(HTML5Backend)
@DropTarget("ROW", {
	canDrop() {
		return false;
	},
}, (connect, monitor) => {
	return {
		dragItem: monitor.getItem()
	};
})
export default class App extends React.Component {
    constructor(props) {
        super(props);

		this.state = {
			listA: Array.from({length: 5}, (v, i) => i),
			listB: Array.from({length: 10}, (v, i) => i),
		}
    }

	swapItems(key, from, to) {
		let items = this.state[key];
	
		let temp = items[from];
		items[from] = items[to];
		items[to] = temp;

		let state = {};
		state[key] = items;
		this.setState(state);
	}

	render() {
		return (
			<div>
				<table width="100%" cellPadding="0" cellSpacing="0" border="0">
					{(() => {
						return this.state.listA.map((text, index) => {
							return (
								<Row key={"listA"+index} index={index} text={text} swap={this.swapItems.bind(this,"listA")}>
									{text}
								</Row>
							);
						})
					})()}

					<Preview dragItem={this.props.dragItem}>
						{(() => {
							if (this.props.dragItem) {
								return this.props.dragItem.text;
							}
						})()}
					</Preview>
				</table>
			</div>
		);
	}
}