import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Box, { spacing, position, layout, dimensions } from 'ui-box';
import { Text } from '../../typography';
import { withTheme } from '../../theme';

var CircleIcon = function CircleIcon(_ref) {
  var size = _ref.size,
      _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["size", "fill"]);

  return React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 10 10"
  }, props), React.createElement("circle", {
    fill: fill,
    cx: "5",
    cy: "5",
    r: "5"
  }));
};

CircleIcon.displayName = "CircleIcon";
CircleIcon.propTypes = {
  fill: PropTypes.string,
  size: PropTypes.number
};

var Radio =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Radio, _PureComponent);

  function Radio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Radio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Radio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange(event, event.target.checked);
    });

    return _this;
  }

  _createClass(Radio, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "label", "disabled", "isInvalid", "checked", "onChange", "value", "size", "isRequired", "appearance"]);

      var themedClassName = theme.getRadioClassName(appearance);
      return React.createElement(Box, _extends({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: size === 12 ? 8 : 12
      }, props), React.createElement(Box, {
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
      }), React.createElement(Box, {
        boxSizing: "border-box",
        borderRadius: 9999,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 2,
        width: size,
        height: size
      }, React.createElement(CircleIcon, {
        size: size === 12 ? 4 : 4
      })), label && React.createElement(Text, {
        marginLeft: size === 12 ? 8 : 10,
        size: size === 12 ? 300 : 400,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);

  return Radio;
}(PureComponent);

Radio.displayName = "Radio";

_defineProperty(Radio, "propTypes", _objectSpread({}, spacing.propTypes, position.propTypes, layout.propTypes, dimensions.propTypes, {
  /**
   * The id attribute of the radio.
   */
  id: PropTypes.string,

  /**
   * The name attribute of the radio.
   */
  name: PropTypes.string,

  /**
   * Label of the radio.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the radio.
   */
  value: PropTypes.string,

  /**
   * Function called when state changes
   * Signature:
   * ```
   * function(event: object, checked: boolean) => void
   * ```
   */
  onChange: PropTypes.func,

  /**
   * When true, the radio is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the radio is checked.
   */
  checked: PropTypes.bool,

  /**
   * The size of the radio circle. This also informs the text size and spacing.
   */
  size: PropTypes.oneOf([12, 16]),

  /**
   * When true, the radio get the required attribute.
   */
  isRequired: PropTypes.bool.isRequired,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool.isRequired,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string.isRequired,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Radio, "defaultProps", {
  appearance: 'default',
  onChange: function onChange() {},
  size: 12,
  isRequired: false,
  isInvalid: false
});

export default withTheme(Radio);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yYWRpby9zcmMvUmFkaW8uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlRleHQiLCJ3aXRoVGhlbWUiLCJDaXJjbGVJY29uIiwic2l6ZSIsImZpbGwiLCJwcm9wcyIsInByb3BUeXBlcyIsInN0cmluZyIsIm51bWJlciIsIlJhZGlvIiwiZXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsImNoZWNrZWQiLCJ0aGVtZSIsImlkIiwibmFtZSIsImxhYmVsIiwiZGlzYWJsZWQiLCJpc0ludmFsaWQiLCJ2YWx1ZSIsImlzUmVxdWlyZWQiLCJhcHBlYXJhbmNlIiwidGhlbWVkQ2xhc3NOYW1lIiwiZ2V0UmFkaW9DbGFzc05hbWUiLCJoYW5kbGVDaGFuZ2UiLCJub2RlIiwiZnVuYyIsImJvb2wiLCJvbmVPZiIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE9BQU9BLEtBQVAsSUFBZ0JDLGFBQWhCLFFBQXFDLE9BQXJDO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLE9BQU9DLEdBQVAsSUFBY0MsT0FBZCxFQUF1QkMsUUFBdkIsRUFBaUNDLE1BQWpDLEVBQXlDQyxVQUF6QyxRQUEyRCxRQUEzRDtBQUNBLFNBQVNDLElBQVQsUUFBcUIsa0JBQXJCO0FBQ0EsU0FBU0MsU0FBVCxRQUEwQixhQUExQjs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdDLElBQUgsUUFBR0EsSUFBSDtBQUFBLHVCQUFTQyxJQUFUO0FBQUEsTUFBU0EsSUFBVCwwQkFBZ0IsY0FBaEI7QUFBQSxNQUFtQ0MsS0FBbkM7O0FBQUEsU0FDakI7QUFBSyxJQUFBLEtBQUssRUFBRUYsSUFBWjtBQUFrQixJQUFBLE1BQU0sRUFBRUEsSUFBMUI7QUFBZ0MsSUFBQSxPQUFPLEVBQUM7QUFB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LFVBQVUsRUFBRSxTQURRO0FBRXBCWCxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUZFO0FBR3BCUixFQUFBQSxJQUFJLEVBQUUsRUFIYztBQUlwQmtCLEVBQUFBLFVBQVUsRUFBRSxLQUpRO0FBS3BCRixFQUFBQSxTQUFTLEVBQUU7QUFMUyxDOztBQWdGeEIsZUFBZWxCLFNBQVMsQ0FBQ1EsS0FBRCxDQUF4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgQm94LCB7IHNwYWNpbmcsIHBvc2l0aW9uLCBsYXlvdXQsIGRpbWVuc2lvbnMgfSBmcm9tICd1aS1ib3gnXG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAnLi4vLi4vdHlwb2dyYXBoeSdcbmltcG9ydCB7IHdpdGhUaGVtZSB9IGZyb20gJy4uLy4uL3RoZW1lJ1xuXG5jb25zdCBDaXJjbGVJY29uID0gKHsgc2l6ZSwgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9e3NpemV9IGhlaWdodD17c2l6ZX0gdmlld0JveD1cIjAgMCAxMCAxMFwiIHsuLi5wcm9wc30+XG4gICAgPGNpcmNsZSBmaWxsPXtmaWxsfSBjeD1cIjVcIiBjeT1cIjVcIiByPVwiNVwiIC8+XG4gIDwvc3ZnPlxuKVxuXG5DaXJjbGVJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm51bWJlclxufVxuXG5jbGFzcyBSYWRpbyBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIGF0dHJpYnV0ZSBvZiB0aGUgcmFkaW8uXG4gICAgICovXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIExhYmVsIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICBsYWJlbDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgYXR0cmlidXRlIG9mIHRoZSByYWRpby5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXNcbiAgICAgKiBTaWduYXR1cmU6XG4gICAgICogYGBgXG4gICAgICogZnVuY3Rpb24oZXZlbnQ6IG9iamVjdCwgY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZFxuICAgICAqIGBgYFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIHJhZGlvIGlzIGNoZWNrZWQuXG4gICAgICovXG4gICAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2l6ZSBvZiB0aGUgcmFkaW8gY2lyY2xlLiBUaGlzIGFsc28gaW5mb3JtcyB0aGUgdGV4dCBzaXplIGFuZCBzcGFjaW5nLlxuICAgICAqL1xuICAgIHNpemU6IFByb3BUeXBlcy5vbmVPZihbMTIsIDE2XSksXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRydWUsIHRoZSByYWRpbyBnZXQgdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBpc1JlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGFwcGVhcmFuY2Ugb2YgdGhlIGNoZWNrYm94LlxuICAgICAqIFRoZSBkZWZhdWx0IHRoZW1lIG9ubHkgY29tZXMgd2l0aCBhIGRlZmF1bHQgc3R5bGUuXG4gICAgICovXG4gICAgYXBwZWFyYW5jZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0JyxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgc2l6ZTogMTIsXG4gICAgaXNSZXF1aXJlZDogZmFsc2UsXG4gICAgaXNJbnZhbGlkOiBmYWxzZVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gZXZlbnQgPT4ge1xuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoZXZlbnQsIGV2ZW50LnRhcmdldC5jaGVja2VkKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBzaXplLFxuICAgICAgaXNSZXF1aXJlZCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICAuLi5wcm9wc1xuICAgIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0UmFkaW9DbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ31cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgbWFyZ2luWT17c2l6ZSA9PT0gMTIgPyA4IDogMTJ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICByZXF1aXJlZD17aXNSZXF1aXJlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGJveFNpemluZz1cImJvcmRlci1ib3hcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17OTk5OX1cbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAgZmxleD1cIm5vbmVcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcbiAgICAgICAgICBtYXJnaW5Ub3A9ezJ9XG4gICAgICAgICAgd2lkdGg9e3NpemV9XG4gICAgICAgICAgaGVpZ2h0PXtzaXplfVxuICAgICAgICA+XG4gICAgICAgICAgPENpcmNsZUljb24gc2l6ZT17c2l6ZSA9PT0gMTIgPyA0IDogNH0gLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9e3NpemUgPT09IDEyID8gOCA6IDEwfVxuICAgICAgICAgICAgc2l6ZT17c2l6ZSA9PT0gMTIgPyAzMDAgOiA0MDB9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnbXV0ZWQnIDogJ2RlZmF1bHQnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKFJhZGlvKVxuIl19