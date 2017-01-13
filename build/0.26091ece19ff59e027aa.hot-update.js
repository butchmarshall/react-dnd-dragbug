webpackHotUpdatePSLIB_ReactDNDBug(0,{

/***/ 445:
/*!*************************!*\
  !*** ./src/preview.jsx ***!
  \*************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports['default'] = undefined;
	
	var _getPrototypeOf = __webpack_require__(/*! babel-runtime/core-js/object/get-prototype-of */ 234);
	
	var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
	
	var _classCallCheck2 = __webpack_require__(/*! babel-runtime/helpers/classCallCheck */ 238);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(/*! babel-runtime/helpers/createClass */ 239);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _possibleConstructorReturn2 = __webpack_require__(/*! babel-runtime/helpers/possibleConstructorReturn */ 243);
	
	var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
	
	var _inherits2 = __webpack_require__(/*! babel-runtime/helpers/inherits */ 268);
	
	var _inherits3 = _interopRequireDefault(_inherits2);
	
	var _dec, _class;
	
	var _react = __webpack_require__(/*! react */ 2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDnd = __webpack_require__(/*! react-dnd */ 276);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var style = {
		cell: {
			cursor: 'pointer',
			border: '1px solid blue',
			userSelect: 'none',
			width: '50%'
		}
	};
	
	function getItemStyles(props, state) {
		var initialOffset = props.initialOffset,
		    currentOffset = props.currentOffset,
		    item = props.item;
	
		if (!initialOffset || !currentOffset) {
			return {};
		}
	
		var y = currentOffset.y;
		var transform = 'translate(0, ' + y + 'px)';
	
		var style = {
			position: 'fixed',
			zIndex: 1,
			top: 0,
			transform: transform
		};
	
		return style;
	}
	
	var Preview = (_dec = (0, _reactDnd.DragLayer)(function (monitor) {
		return {
			item: monitor.getItem(),
			itemType: monitor.getItemType(),
			initialOffset: monitor.getInitialSourceClientOffset(),
			currentOffset: monitor.getSourceClientOffset(),
			isDragging: monitor.isDragging()
		};
	}), _dec(_class = function (_React$Component) {
		(0, _inherits3['default'])(Preview, _React$Component);
	
		function Preview() {
			(0, _classCallCheck3['default'])(this, Preview);
			return (0, _possibleConstructorReturn3['default'])(this, (Preview.__proto__ || (0, _getPrototypeOf2['default'])(Preview)).apply(this, arguments));
		}
	
		(0, _createClass3['default'])(Preview, [{
			key: 'render',
			value: function render() {
	
				return _react2['default'].createElement(
					'tbody',
					{ style: getItemStyles(this.props, this.state) },
					_react2['default'].createElement(
						'tr',
						null,
						_react2['default'].createElement(
							'td',
							{ style: style.cell },
							this.props.children
						)
					)
				);
			}
		}]);
		return Preview;
	}(_react2['default'].Component)) || _class);
	exports['default'] = Preview;

/***/ }

})
//# sourceMappingURL=0.26091ece19ff59e027aa.hot-update.js.map