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

var CheckIcon = function CheckIcon(_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === void 0 ? 'currentColor' : _ref$fill,
      props = _objectWithoutProperties(_ref, ["fill"]);

  return React.createElement("svg", _extends({
    width: 10,
    height: 7,
    viewBox: "0 0 10 7"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z"
  }));
};

CheckIcon.displayName = "CheckIcon";
CheckIcon.propTypes = {
  fill: PropTypes.string
};

var MinusIcon = function MinusIcon(_ref2) {
  var _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? 'currentColor' : _ref2$fill,
      props = _objectWithoutProperties(_ref2, ["fill"]);

  return React.createElement("svg", _extends({
    width: 16,
    height: 16,
    viewBox: "0 0 16 16"
  }, props), React.createElement("path", {
    fill: fill,
    fillRule: "evenodd",
    d: "M11 7H5c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1z"
  }));
};

MinusIcon.displayName = "MinusIcon";
MinusIcon.propTypes = {
  fill: PropTypes.string
};

var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Checkbox, _PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "setIndeterminate", function (el) {
      if (!el) return;
      el.indeterminate = _this.props.indeterminate;
    });

    return _this;
  }

  _createClass(Checkbox, [{
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
          props = _objectWithoutProperties(_this$props, ["theme", "id", "name", "label", "appearance", "disabled", "isInvalid", "checked", "onChange", "value", "indeterminate"]);

      var themedClassName = theme.getCheckboxClassName(appearance);
      return React.createElement(Box, _extends({
        is: "label",
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: "relative",
        display: "flex",
        marginY: 16
      }, props), React.createElement(Box, {
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
      }), React.createElement(Box, {
        boxSizing: "border-box",
        borderRadius: 3,
        display: "flex",
        flex: "none",
        alignItems: "center",
        justifyContent: "center",
        width: 16,
        height: 16
      }, indeterminate ? React.createElement(MinusIcon, null) : React.createElement(CheckIcon, null)), label && React.createElement(Text, {
        marginLeft: 8,
        size: 300,
        color: disabled ? 'muted' : 'default'
      }, label));
    }
  }]);

  return Checkbox;
}(PureComponent);

Checkbox.displayName = "Checkbox";

_defineProperty(Checkbox, "propTypes", _objectSpread({}, spacing.propTypes, position.propTypes, layout.propTypes, dimensions.propTypes, {
  /**
   * The id attribute of the checkbox.
   */
  id: PropTypes.string,

  /**
   * The id attribute of the checkbox.
   */
  name: PropTypes.string,

  /**
   * Label of the checkbox.
   */
  label: PropTypes.node,

  /**
   * The value attribute of the checkbox.
   */
  value: PropTypes.string,

  /**
   * The checked attribute of the checkbox.
   */
  checked: PropTypes.bool,

  /**
   * State in addition to "checked" and "unchecked".
   * When true, the checkbox displays a "minus" icon.
   */
  indeterminate: PropTypes.bool,

  /**
   * Function called when state changes.
   */
  onChange: PropTypes.func,

  /**
   * When true, the checkbox is disabled.
   */
  disabled: PropTypes.bool,

  /**
   * When true, the aria-invalid attribute is true.
   * Used for accessibility.
   */
  isInvalid: PropTypes.bool,

  /**
   * The appearance of the checkbox.
   * The default theme only comes with a default style.
   */
  appearance: PropTypes.string,

  /**
   * Theme provided by ThemeProvider.
   */
  theme: PropTypes.object.isRequired
}));

_defineProperty(Checkbox, "defaultProps", {
  checked: false,
  indeterminate: false,
  onChange: function onChange() {},
  appearance: 'default'
});

export default withTheme(Checkbox);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jaGVja2JveC9zcmMvQ2hlY2tib3guanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQdXJlQ29tcG9uZW50IiwiUHJvcFR5cGVzIiwiQm94Iiwic3BhY2luZyIsInBvc2l0aW9uIiwibGF5b3V0IiwiZGltZW5zaW9ucyIsIlRleHQiLCJ3aXRoVGhlbWUiLCJDaGVja0ljb24iLCJmaWxsIiwicHJvcHMiLCJwcm9wVHlwZXMiLCJzdHJpbmciLCJNaW51c0ljb24iLCJDaGVja2JveCIsImVsIiwiaW5kZXRlcm1pbmF0ZSIsInRoZW1lIiwiaWQiLCJuYW1lIiwibGFiZWwiLCJhcHBlYXJhbmNlIiwiZGlzYWJsZWQiLCJpc0ludmFsaWQiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJ2YWx1ZSIsInRoZW1lZENsYXNzTmFtZSIsImdldENoZWNrYm94Q2xhc3NOYW1lIiwic2V0SW5kZXRlcm1pbmF0ZSIsIm5vZGUiLCJib29sIiwiZnVuYyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxLQUFQLElBQWdCQyxhQUFoQixRQUFxQyxPQUFyQztBQUNBLE9BQU9DLFNBQVAsTUFBc0IsWUFBdEI7QUFDQSxPQUFPQyxHQUFQLElBQWNDLE9BQWQsRUFBdUJDLFFBQXZCLEVBQWlDQyxNQUFqQyxFQUF5Q0MsVUFBekMsUUFBMkQsUUFBM0Q7QUFDQSxTQUFTQyxJQUFULFFBQXFCLGtCQUFyQjtBQUNBLFNBQVNDLFNBQVQsUUFBMEIsYUFBMUI7O0FBRUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSx1QkFBR0MsSUFBSDtBQUFBLE1BQUdBLElBQUgsMEJBQVUsY0FBVjtBQUFBLE1BQTZCQyxLQUE3Qjs7QUFBQSxTQUNoQjtBQUFLLElBQUEsS0FBSyxFQUFFLEVBQVo7QUFBZ0IsSUFBQSxNQUFNLEVBQUUsQ0FBeEI7QUFBMkIsSUFBQSxPQUFPLEVBQUM7QUFBbkMsS0FBa0RBLEtBQWxELEdBQ0U7QUFD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QlUsRUFBQUEsT0FBTyxFQUFFLEtBRFc7QUFFcEJSLEVBQUFBLGFBQWEsRUFBRSxLQUZLO0FBR3BCUyxFQUFBQSxRQUFRLEVBQUUsb0JBQU0sQ0FBRSxDQUhFO0FBSXBCSixFQUFBQSxVQUFVLEVBQUU7QUFKUSxDOztBQStFeEIsZUFBZWQsU0FBUyxDQUFDTyxRQUFELENBQXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCBCb3gsIHsgc3BhY2luZywgcG9zaXRpb24sIGxheW91dCwgZGltZW5zaW9ucyB9IGZyb20gJ3VpLWJveCdcbmltcG9ydCB7IFRleHQgfSBmcm9tICcuLi8uLi90eXBvZ3JhcGh5J1xuaW1wb3J0IHsgd2l0aFRoZW1lIH0gZnJvbSAnLi4vLi4vdGhlbWUnXG5cbmNvbnN0IENoZWNrSWNvbiA9ICh7IGZpbGwgPSAnY3VycmVudENvbG9yJywgLi4ucHJvcHMgfSkgPT4gKFxuICA8c3ZnIHdpZHRoPXsxMH0gaGVpZ2h0PXs3fSB2aWV3Qm94PVwiMCAwIDEwIDdcIiB7Li4ucHJvcHN9PlxuICAgIDxwYXRoXG4gICAgICBmaWxsPXtmaWxsfVxuICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgIGQ9XCJNNCA0LjU4NkwxLjcwNyAyLjI5M0ExIDEgMCAxIDAgLjI5MyAzLjcwN2wzIDNhLjk5Ny45OTcgMCAwIDAgMS40MTQgMGw1LTVBMSAxIDAgMSAwIDguMjkzLjI5M0w0IDQuNTg2elwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbkNoZWNrSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY29uc3QgTWludXNJY29uID0gKHsgZmlsbCA9ICdjdXJyZW50Q29sb3InLCAuLi5wcm9wcyB9KSA9PiAoXG4gIDxzdmcgd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgey4uLnByb3BzfT5cbiAgICA8cGF0aFxuICAgICAgZmlsbD17ZmlsbH1cbiAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICBkPVwiTTExIDdINWMtLjU1IDAtMSAuNDUtMSAxcy40NSAxIDEgMWg2Yy41NSAwIDEtLjQ1IDEtMXMtLjQ1LTEtMS0xelwiXG4gICAgLz5cbiAgPC9zdmc+XG4pXG5cbk1pbnVzSWNvbi5wcm9wVHlwZXMgPSB7XG4gIGZpbGw6IFByb3BUeXBlcy5zdHJpbmdcbn1cblxuY2xhc3MgQ2hlY2tib3ggZXh0ZW5kcyBQdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBDb21wb3NlcyBzb21lIEJveCBBUElzLlxuICAgICAqL1xuICAgIC4uLnNwYWNpbmcucHJvcFR5cGVzLFxuICAgIC4uLnBvc2l0aW9uLnByb3BUeXBlcyxcbiAgICAuLi5sYXlvdXQucHJvcFR5cGVzLFxuICAgIC4uLmRpbWVuc2lvbnMucHJvcFR5cGVzLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIGF0dHJpYnV0ZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICovXG4gICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogTGFiZWwgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMubm9kZSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBhdHRyaWJ1dGUgb2YgdGhlIGNoZWNrYm94LlxuICAgICAqL1xuICAgIHZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlIGNoZWNrZWQgYXR0cmlidXRlIG9mIHRoZSBjaGVja2JveC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFN0YXRlIGluIGFkZGl0aW9uIHRvIFwiY2hlY2tlZFwiIGFuZCBcInVuY2hlY2tlZFwiLlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNoZWNrYm94IGRpc3BsYXlzIGEgXCJtaW51c1wiIGljb24uXG4gICAgICovXG4gICAgaW5kZXRlcm1pbmF0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiBjYWxsZWQgd2hlbiBzdGF0ZSBjaGFuZ2VzLlxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGNoZWNrYm94IGlzIGRpc2FibGVkLlxuICAgICAqL1xuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGFyaWEtaW52YWxpZCBhdHRyaWJ1dGUgaXMgdHJ1ZS5cbiAgICAgKiBVc2VkIGZvciBhY2Nlc3NpYmlsaXR5LlxuICAgICAqL1xuICAgIGlzSW52YWxpZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXBwZWFyYW5jZSBvZiB0aGUgY2hlY2tib3guXG4gICAgICogVGhlIGRlZmF1bHQgdGhlbWUgb25seSBjb21lcyB3aXRoIGEgZGVmYXVsdCBzdHlsZS5cbiAgICAgKi9cbiAgICBhcHBlYXJhbmNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogVGhlbWUgcHJvdmlkZWQgYnkgVGhlbWVQcm92aWRlci5cbiAgICAgKi9cbiAgICB0aGVtZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrZWQ6IGZhbHNlLFxuICAgIGluZGV0ZXJtaW5hdGU6IGZhbHNlLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBhcHBlYXJhbmNlOiAnZGVmYXVsdCdcbiAgfVxuXG4gIHNldEluZGV0ZXJtaW5hdGUgPSBlbCA9PiB7XG4gICAgaWYgKCFlbCkgcmV0dXJuXG4gICAgZWwuaW5kZXRlcm1pbmF0ZSA9IHRoaXMucHJvcHMuaW5kZXRlcm1pbmF0ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRoZW1lLFxuXG4gICAgICBpZCxcbiAgICAgIG5hbWUsXG4gICAgICBsYWJlbCxcbiAgICAgIGFwcGVhcmFuY2UsXG4gICAgICBkaXNhYmxlZCxcbiAgICAgIGlzSW52YWxpZCxcbiAgICAgIGNoZWNrZWQsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5kZXRlcm1pbmF0ZSxcbiAgICAgIC4uLnByb3BzXG4gICAgfSA9IHRoaXMucHJvcHNcblxuICAgIGNvbnN0IHRoZW1lZENsYXNzTmFtZSA9IHRoZW1lLmdldENoZWNrYm94Q2xhc3NOYW1lKGFwcGVhcmFuY2UpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJveFxuICAgICAgICBpcz1cImxhYmVsXCJcbiAgICAgICAgY3Vyc29yPXtkaXNhYmxlZCA/ICdub3QtYWxsb3dlZCcgOiAncG9pbnRlcid9XG4gICAgICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgIG1hcmdpblk9ezE2fVxuICAgICAgICB7Li4ucHJvcHN9XG4gICAgICA+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBjbGFzc05hbWU9e3RoZW1lZENsYXNzTmFtZX1cbiAgICAgICAgICBpcz1cImlucHV0XCJcbiAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICBjaGVja2VkPXtjaGVja2VkIHx8IGluZGV0ZXJtaW5hdGV9XG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICBhcmlhLWludmFsaWQ9e2lzSW52YWxpZH1cbiAgICAgICAgICBpbm5lclJlZj17dGhpcy5zZXRJbmRldGVybWluYXRlfVxuICAgICAgICAvPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgYm94U2l6aW5nPVwiYm9yZGVyLWJveFwiXG4gICAgICAgICAgYm9yZGVyUmFkaXVzPXszfVxuICAgICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAgICBmbGV4PVwibm9uZVwiXG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICA+XG4gICAgICAgICAge2luZGV0ZXJtaW5hdGUgPyA8TWludXNJY29uIC8+IDogPENoZWNrSWNvbiAvPn1cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIHtsYWJlbCAmJiAoXG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIG1hcmdpbkxlZnQ9ezh9XG4gICAgICAgICAgICBzaXplPXszMDB9XG4gICAgICAgICAgICBjb2xvcj17ZGlzYWJsZWQgPyAnbXV0ZWQnIDogJ2RlZmF1bHQnfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICl9XG4gICAgICA8L0JveD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFRoZW1lKENoZWNrYm94KVxuIl19