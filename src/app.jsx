import React from 'react';
import { DragDropContext, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Row from './row.jsx';
import Preview from './preview.jsx';

@DragDropContext(HTML5Backend)
@DropTarget("ROW", {
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
		console.log(this.props);
		
		return (
			<div>
				<table width="100%">
					{(() => {
						return this.state.listA.map((text, index) => {
							return (
								<Row key={"listA"+index} text={text} index={index} swap={this.swapItems.bind(this, 'listA')}>{text}</Row>
							)
						})
					})()}
				</table>
				<br/><br/>
				<table width="100%">
					{(() => {
						return this.state.listB.map((text, index) => {
							return (
								<Row key={"listB"+index} text={text} index={index} swap={this.swapItems.bind(this, 'listB')}>{text}</Row>
							)
						})
					})()}
					<Preview>
					{(() => {
						if (!this.props.dragItem) {
							return;
						}
						
						return (
							this.props.dragItem.text
						);
					})()}
					</Preview>
				</table>
			</div>
		);
	}
}