"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _uiBox = _interopRequireWildcard(require("ui-box"));

var _typography = require("../../typography");

var _theme = require("../../theme");

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2.default)(_ref, ["size", "fill"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), _react.default.createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
};

CircleIcon.displayName = "CircleIcon";
CircleIcon.propTypes = {
  fill: _propTypes.default.string,
  size: _propTypes.default.number
};

var Radio =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Radio, _PureComponent);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleChange", function (event) {
      _this.props.onChange(event, event.target.checked);
    });
    return _this;
  }

  (0, _createClass2.default)(Radio, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          disabled = _this$props.disabled,
          isInvalid = _this$props.isInvalid,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          value = _this$props.value,
          size = _this$props.size,
          isRequired = _this$props.isRequired,
          appearance = _this$props.appearance,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"]);
      var themedClassName = theme.getRadioClassName(appearance);
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: size === 12 ? 8 : 12
      }, props), _react.default.createElement(_uiBox.default, {
        is: "input",
        className: themedClassName,
        id: id,
        type: "radio",
        name: name,
        value: value,
        checked: checked,
        onChange: this.handleChange,
        disabled: disabled,
        "aria-invalid": isInvalid,
        required: isRequired
      }), _react.default.createElement(_uiBox.default, {
        boxSizing: "border-box",
        borderRadius: 9999,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        width: size,
        height: size
      }, _react.default.createElement(CircleIcon, {
        size: size === 12 ? 4 : 4
      })), label && _react.default.createElement(_typography.Text, {
        marginLeft: size === 12 ? 8 : 10,
        size: size === 12 ? 300 : 400,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);
  return Radio;
}(_react.PureComponent);

Radio.displayName = "Radio";
(0, _defineProperty2.default)(Radio, "propTypes", (0, _objectSpread2.default)({}, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, _uiBox.dimensions.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: _propTypes.default.string,

  /**
   * The name attribute of the radio.
   */
  name: _propTypes.default.string,

  /**
   * Label of the radio.
   */
  label: _propTypes.default.node,

  /**
   * The value attribute of the radio.
   */
  value: _propTypes.default.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: _propTypes.default.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * When true, the radio is checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: _propTypes.default.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: _propTypes.default.bool.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes.default.bool.isRequired,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes.default.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Radio, "defaultProps", {
  appearance: 'default',
  onChange: function onChange() {},
  size: 12,
  isRequired: false,
  isInvalid: false
});

var _default = (0, _theme.withTheme)(Radio);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW8uanMiXSwibmFtZXMiOlsiQ2lyY2xlSWNvbiIsInNpemUiLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJudW1iZXIiLCJSYWRpbyIsImV2ZW50Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJjaGVja2VkIiwidGhlbWUiLCJpZCIsIm5hbWUiLCJsYWJlbCIsImRpc2FibGVkIiwiaXNJbnZhbGlkIiwidmFsdWUiLCJpc1JlcXVpcmVkIiwiYXBwZWFyYW5jZSIsInRoZW1lZENsYXNzTmFtZSIsImdldFJhZGlvQ2xhc3NOYW1lIiwiaGFuZGxlQ2hhbmdlIiwiUHVyZUNvbXBvbmVudCIsInNwYWNpbmciLCJwb3NpdGlvbiIsImxheW91dCIsImRpbWVuc2lvbnMiLCJub2RlIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsdUJBQVNDLElBQVQ7QUFBQSxNQUFTQSxJQUFULDBCQUFnQixjQUFoQjtBQUFBLE1BQW1DQyxLQUFuQztBQUFBLFNBQ2pCO0FBQUssSUFBQSxLQUFLLEVBQUVGLElBQVo7QUFBa0IsSUFBQSxNQUFNLEVBQUVBLElBQTFCO0FBQWdDLElBQUEsT0FBTyxFQUFDO0FBQXhDLEtBQXdERSxLQUF4RCxHQUNFO0FBQVEsSUFBQSxJQUFJLEVBQUVELElBQWQ7QUFBb0IsSUFBQSxFQUFFLEVBQUMsR0FBdkI7QUFBMkIsSUFBQSxFQUFFLEVBQUMsR0FBOUI7QUFBa0MsSUFBQSxDQUFDLEVBQUM7QUFBcEMsSUFERixDQURpQjtBQUFBLENBQW5COztBQUFNRixVO0FBTU5BLFVBQVUsQ0FBQ0ksU0FBWCxHQUF1QjtB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QUNQeUIsa0JBQVd6QixTO0FBRWQ7OztBQUdBVSxFQUFBQSxFQUFFLEVBQUVULG1CQUFVQyxNOztBQUVkOzs7QUFHQVMsRUFBQUEsSUFBSSxFQUFFVixtQkFBVUMsTTs7QUFFaEI7OztBQUdBVSxFQUFBQSxLQUFLLEVBQUVYLG1CQUFVeUIsSTs7QUFFakI7OztBQUdBWCxFQUFBQSxLQUFLLEVBQUVkLG1CQUFVQyxNOztBQUVqQjs7Ozs7OztBQU9BSSxFQUFBQSxRQUFRLEVBQUVMLG1CQUFVMEIsSTs7QUFFcEI7OztBQUdBZCxFQUFBQSxRQUFRLEVBQUVaLG1CQUFVMkIsSTs7QUFFcEI7OztBQUdBcEIsRUFBQUEsT0FBTyxFQUFFUCxtQkFBVTJCLEk7O0FBRW5COzs7QUFHQS9CLEVBQUFBLElBQUksRUFBRUksbUJBQVU0QixLQUFWLENBQWdCLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBaEIsQzs7QUFFTjs7O0FBR0FiLEVBQUFBLFVBQVUsRUFBRWYsbUJBQVUyQixJQUFWLENBQWVaLFU7O0FBRTNCOzs7O0FBSUFGLEVBQUFBLFNBQVMsRUFBRWIsbUJBQVUyQixJQUFWLENBQWVaLFU7O0FBRTFCOzs7O0FBSUFDLEVBQUFBLFVBQVUsRUFBRWhCLG1CQUFVQyxNQUFWLENBQWlCYyxVOztBQUU3Qjs7O0FBR0FQLEVBQUFBLEtBQUssRUFBRVIsbUJBQVU2QixNQUFWLENBQWlCZDs7OEJBMUV0QlosSyxrQkE2RWtCO0FBQ3BCYSxFQUFBQSxVQUFVLEVBQUUsU0FEUTtBQUVwQlgsRUFBQUEsUUFBUSxFQUFFLG9CQUFNLENBQUUsQ0FGRTtBQUdwQlQsRUFBQUEsSUFBSSxFQUFFLEVBSGM7QUFJcEJtQixFQUFBQSxVQUFVLEVBQUUsS0FKUTtBQUtwQkYsRUFBQUEsU0FBUyxFQUFFO0FBTFMsQzs7ZUFnRlQsc0JBQVVWLEtBQVYsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBDaXJjbGVJY29uID0gKHsgc2l6ZSwgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCAxMFwiIHsuLi5wcm9wc30+XG4gICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNVwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaXJjbGVJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXNcbiAgICAgKiBTaWduYXR1cmU6XG4gICAgICogYGBgXG4gICAgICogZnVuY3Rpb24oZXZlbnQ6IG9iamVjdCwgY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmFkaW8gY2lyY2xlLiBUaGlzIGFsc28gaW5mb3JtcyB0aGUgdGV4dCBzaXplIGFuZCBzcGFjaW5nLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMTIsIDE2XSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc2l6ZTogMTIsXG4gICAgaXNSZXF1aXJlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBzaXplLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0UmFkaW9DbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ31cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgbWFyZ2luWT17c2l6ZSA9PT0gMTIgPyA4IDogMTJ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17OTk5OX1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleD1cIm5vbmVcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezJ9XG4gICAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgICA+XG4gICAgICAgICAgPENpcmNsZUljb24gc2l6ZT17c2l6ZSA9PT0gMTIgPyA0IDogNH0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9e3NpemUgPT09IDEyID8gOCA6IDEwfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZSA9PT0gMTIgPyAzMDAgOiA0MDB9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnbXV0ZWQnIDogJ2RlZmF1bHQnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFJhZGlvKVxuIl19