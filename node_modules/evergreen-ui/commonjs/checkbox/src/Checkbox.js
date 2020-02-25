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

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = (0, _objectWithoutProperties2.default)(_ref, ["fill"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), _react.default.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: _propTypes.default.string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["fill"]);
  return _react.default.createElement("svg", (0, _extends2.default)({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), _react.default.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: _propTypes.default.string
};

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Checkbox, _PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setIndeterminate", function (el) {
      if (!el) return;
      el.indeterminate = _this.props.indeterminate;
    });
    return _this;
  }

  (0, _createClass2.default)(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          id = _this$props.id,
          name = _this$props.name,
          label = _this$props.label,
          appearance = _this$props.appearance,
          disabled = _this$props.disabled,
          isInvalid = _this$props.isInvalid,
          checked = _this$props.checked,
          onChange = _this$props.onChange,
          value = _this$props.value,
          indeterminate = _this$props.indeterminate,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["theme", "id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate"]);
      var themedClassName = theme.getCheckboxClassName(appearance);
      return _react.default.createElement(_uiBox.default, (0, _extends2.default)({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: 16
      }, props), _react.default.createElement(_uiBox.default, {
        className: themedClassName,
        is: "input",
        id: id,
        type: "checkbox",
        name: name,
        value: value,
        checked: checked || indeterminate,
        onChange: onChange,
        disabled: disabled,
        "aria-invalid": isInvalid,
        innerRef: this.setIndeterminate
      }), _react.default.createElement(_uiBox.default, {
        boxSizing: "border-box",
        borderRadius: 3,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16
      }, indeterminate ? _react.default.createElement(MinusIcon, null) : _react.default.createElement(CheckIcon, null)), label && _react.default.createElement(_typography.Text, {
        marginLeft: 8,
        size: 300,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);
  return Checkbox;
}(_react.PureComponent);

Checkbox.displayName = "Checkbox";
(0, _defineProperty2.default)(Checkbox, "propTypes", (0, _objectSpread2.default)({}, _uiBox.spacing.propTypes, _uiBox.position.propTypes, _uiBox.layout.propTypes, _uiBox.dimensions.propTypes, {
  /**
   * The id attribute of the checkbox.
   */
  id: _propTypes.default.string,

  /**
   * The id attribute of the checkbox.
   */
  name: _propTypes.default.string,

  /**
   * Label of the checkbox.
   */
  label: _propTypes.default.node,

  /**
   * The value attribute of the checkbox.
   */
  value: _propTypes.default.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: _propTypes.default.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: _propTypes.default.bool,

  /**
   * Function called when state changes.
   */
  onChange: _propTypes.default.func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: _propTypes.default.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: _propTypes.default.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: _propTypes.default.object.isRequired
}));
(0, _defineProperty2.default)(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  appearance: 'default'
});

var _default = (0, _theme.withTheme)(Checkbox);

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiQ2hlY2tJY29uIiwiZmlsbCIsInByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiTWludXNJY29uIiwiQ2hlY2tib3giLCJlbCIsImluZGV0ZXJtaW5hdGUiLCJ0aGVtZSIsImlkIiwibmFtZSIsImxhYmVsIiwiYXBwZWFyYW5jZSIsImRpc2FibGVkIiwiaXNJbnZhbGlkIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0aGVtZWRDbGFzc05hbWUiLCJnZXRDaGVja2JveENsYXNzTmFtZSIsInNldEluZGV0ZXJtaW5hdGUiLCJQdXJlQ29tcG9uZW50Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIm5vZGUiLCJib29sIiwiZnVuYyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLHVCQUFHQyxJQUFIO0FBQUEsTUFBR0EsSUFBSCwwQkFBVSxjQUFWO0FBQUEsTUFBNkJDLEtBQTdCO0FBQUEsU0FDaEI7QUFBSyxJQUFBLEtBQUssRUFBRSxFQUFaO0FBQWdCLElBQUEsTUFBTSxFQUFFLENBQXhCO0FBQTJCLElBQUEsT0FBTyxFQUFDO0FBQW5DLEtBQWtEQSxLQUFsRCxHQUNFO0FBQ0UsSUFBQSxJQUFJLEVBQUVELElBRFI7QUFFRSxJQUFBLFFBQVEsRUFBQyxTQUZYO0FBR0UsSUFBQSxDQUFDLEVBQUM7QUFISixJQURGLENBRGdCO0FBQUEsQ0FBbEI7O0FBQU1ELFM7QUFVTkEsU0FBUyxDQUFDRyxTQUFWLEdBQXNCO0FBQ3BCRixFQUFBQSxJQUFJLEVBQUVHLG1CQUFVQztBQURJLENBQXRCOztBQUlBLElBQU1DLFNB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SCxHQUFhO0FBSDlCLFNBS0dGLEtBTEgsQ0FsQ0osQ0FERjtBQTZDRDs7O0VBakpvQlUsb0I7O0FBQWpCaEIsUTs4QkFBQUEsUSwrQ0FLQ2lCLGVBQVFyQixTLEVBQ1JzQixnQkFBU3RCLFMsRUFDVHVCLGNBQU92QixTLEVBQ1B3QixrQkFBV3hCLFM7QUFFZDs7O0FBR0FRLEVBQUFBLEVBQUUsRUFBRVAsbUJBQVVDLE07O0FBRWQ7OztBQUdBTyxFQUFBQSxJQUFJLEVBQUVSLG1CQUFVQyxNOztBQUVoQjs7O0FBR0FRLEVBQUFBLEtBQUssRUFBRVQsbUJBQVV3QixJOztBQUVqQjs7O0FBR0FULEVBQUFBLEtBQUssRUFBRWYsbUJBQVVDLE07O0FBRWpCOzs7QUFHQVksRUFBQUEsT0FBTyxFQUFFYixtQkFBVXlCLEk7O0FBRW5COzs7O0FBSUFwQixFQUFBQSxhQUFhLEVBQUVMLG1CQUFVeUIsSTs7QUFFekI7OztBQUdBWCxFQUFBQSxRQUFRLEVBQUVkLG1CQUFVMEIsSTs7QUFFcEI7OztBQUdBZixFQUFBQSxRQUFRLEVBQUVYLG1CQUFVeUIsSTs7QUFFcEI7Ozs7QUFJQWIsRUFBQUEsU0FBUyxFQUFFWixtQkFBVXlCLEk7O0FBRXJCOzs7O0FBSUFmLEVBQUFBLFVBQVUsRUFBRVYsbUJBQVVDLE07O0FBRXRCOzs7QUFHQUssRUFBQUEsS0FBSyxFQUFFTixtQkFBVTJCLE1BQVYsQ0FBaUJDOzs4QkFsRXRCekIsUSxrQkFxRWtCO0FBQ3BCVSxFQUFBQSxPQUFPLEVBQUUsS0FEVztBQUVwQlIsRUFBQUEsYUFBYSxFQUFFLEtBRks7QUFHcEJTLEVBQUFBLFFBQVEsRUFBRSxvQkFBTSxDQUFFLENBSEU7QUFJcEJKLEVBQUFBLFVBQVUsRUFBRTtBQUpRLEM7O2VBK0VULHNCQUFVUCxRQUFWLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IEJveCwgeyBzcGFjaW5nLCBwb3NpdGlvbiwgbGF5b3V0LCBkaW1lbnNpb25zIH0gZnJvbSAndWktYm94J1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJy4uLy4uL3R5cG9ncmFwaHknXG5pbXBvcnQgeyB3aXRoVGhlbWUgfSBmcm9tICcuLi8uLi90aGVtZSdcblxuY29uc3QgQ2hlY2tJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezEwfSBoZWlnaHQ9ezd9IHZpZXdCb3g9XCIwIDAgMTAgN1wiIHsuLi5wcm9wc30+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9e2ZpbGx9XG4gICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgZD1cIk00IDQuNTg2TDEuNzA3IDIuMjkzQTEgMSAwIDEgMCAuMjkzIDMuNzA3bDMgM2EuOTk3Ljk5NyAwIDAgMCAxLjQxNCAwbDUtNUExIDEgMCAxIDAgOC4yOTMuMjkzTDQgNC41ODZ6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuQ2hlY2tJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jb25zdCBNaW51c0ljb24gPSAoeyBmaWxsID0gJ2N1cnJlbnRDb2xvcicsIC4uLnByb3BzIH0pID0+IChcbiAgPHN2ZyB3aWR0aD17MTZ9IGhlaWdodD17MTZ9IHZpZXdCb3g9XCIwIDAgMTYgMTZcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNMTEgN0g1Yy0uNTUgMC0xIC40NS0xIDFzLjQ1IDEgMSAxaDZjLjU1IDAgMS0uNDUgMS0xcy0uNDUtMS0xLTF6XCJcbiAgICAvPlxuICA8L3N2Zz5cbilcblxuTWludXNJY29uLnByb3BUeXBlcyA9IHtcbiAgZmlsbDogUHJvcFR5cGVzLnN0cmluZ1xufVxuXG5jbGFzcyBDaGVja2JveCBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIC8qKlxuICAgICAqIENvbXBvc2VzIHNvbWUgQm94IEFQSXMuXG4gICAgICovXG4gICAgLi4uc3BhY2luZy5wcm9wVHlwZXMsXG4gICAgLi4ucG9zaXRpb24ucHJvcFR5cGVzLFxuICAgIC4uLmxheW91dC5wcm9wVHlwZXMsXG4gICAgLi4uZGltZW5zaW9ucy5wcm9wVHlwZXMsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpZCBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBMYWJlbCBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gICAgLyoqXG4gICAgICogVGhlIHZhbHVlIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgY2hlY2tlZCBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGNoZWNrZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogU3RhdGUgaW4gYWRkaXRpb24gdG8gXCJjaGVja2VkXCIgYW5kIFwidW5jaGVja2VkXCIuXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggZGlzcGxheXMgYSBcIm1pbnVzXCIgaWNvbi5cbiAgICAgKi9cbiAgICBpbmRldGVybWluYXRlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIGNhbGxlZCB3aGVuIHN0YXRlIGNoYW5nZXMuXG4gICAgICovXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgY2hlY2tib3ggaXMgZGlzYWJsZWQuXG4gICAgICovXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0cnVlLCB0aGUgYXJpYS1pbnZhbGlkIGF0dHJpYnV0ZSBpcyB0cnVlLlxuICAgICAqIFVzZWQgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgaXNJbnZhbGlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhcHBlYXJhbmNlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKiBUaGUgZGVmYXVsdCB0aGVtZSBvbmx5IGNvbWVzIHdpdGggYSBkZWZhdWx0IHN0eWxlLlxuICAgICAqL1xuICAgIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGVtZSBwcm92aWRlZCBieSBUaGVtZVByb3ZpZGVyLlxuICAgICAqL1xuICAgIHRoZW1lOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tlZDogZmFsc2UsXG4gICAgaW5kZXRlcm1pbmF0ZTogZmFsc2UsXG4gICAgb25DaGFuZ2U6ICgpID0+IHt9LFxuICAgIGFwcGVhcmFuY2U6ICdkZWZhdWx0J1xuICB9XG5cbiAgc2V0SW5kZXRlcm1pbmF0ZSA9IGVsID0+IHtcbiAgICBpZiAoIWVsKSByZXR1cm5cbiAgICBlbC5pbmRldGVybWluYXRlID0gdGhpcy5wcm9wcy5pbmRldGVybWluYXRlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdGhlbWUsXG5cbiAgICAgIGlkLFxuICAgICAgbmFtZSxcbiAgICAgIGxhYmVsLFxuICAgICAgYXBwZWFyYW5jZSxcbiAgICAgIGRpc2FibGVkLFxuICAgICAgaXNJbnZhbGlkLFxuICAgICAgY2hlY2tlZCxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgdmFsdWUsXG4gICAgICBpbmRldGVybWluYXRlLFxuICAgICAgLi4ucHJvcHNcbiAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgY29uc3QgdGhlbWVkQ2xhc3NOYW1lID0gdGhlbWUuZ2V0Q2hlY2tib3hDbGFzc05hbWUoYXBwZWFyYW5jZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGlzPVwibGFiZWxcIlxuICAgICAgICBjdXJzb3I9e2Rpc2FibGVkID8gJ25vdC1hbGxvd2VkJyA6ICdwb2ludGVyJ31cbiAgICAgICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgbWFyZ2luWT17MTZ9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGNsYXNzTmFtZT17dGhlbWVkQ2xhc3NOYW1lfVxuICAgICAgICAgIGlzPVwiaW5wdXRcIlxuICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIGFyaWEtaW52YWxpZD17aXNJbnZhbGlkfVxuICAgICAgICAgIGlubmVyUmVmPXt0aGlzLnNldEluZGV0ZXJtaW5hdGV9XG4gICAgICAgIC8+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBib3hTaXppbmc9XCJib3JkZXItYm94XCJcbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezN9XG4gICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgIGZsZXg9XCJub25lXCJcbiAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgIGhlaWdodD17MTZ9XG4gICAgICAgID5cbiAgICAgICAgICB7aW5kZXRlcm1pbmF0ZSA/IDxNaW51c0ljb24gLz4gOiA8Q2hlY2tJY29uIC8+fVxuICAgICAgICA8L0JveD5cbiAgICAgICAge2xhYmVsICYmIChcbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbWFyZ2luTGVmdD17OH1cbiAgICAgICAgICAgIHNpemU9ezMwMH1cbiAgICAgICAgICAgIGNvbG9yPXtkaXNhYmxlZCA/ICdtdXRlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvQm94PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWUoQ2hlY2tib3gpXG4iXX0=