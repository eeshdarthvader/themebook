'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports['default'] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(
    require('@babel/runtime/helpers/taggedTemplateLiteral')
);

var _react = _interopRequireDefault(require('react'));

var _styledComponents = _interopRequireDefault(require('styled-components'));

function _templateObject() {
    var data = (0, _taggedTemplateLiteral2['default'])([
        "\n    overflow: hidden;\n    padding: 32px;\n    margin: 48px auto 48px;\n    font-size: 24px;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);\n    border-radius: 5px;\n    color: 'black';\n"
    ]);

    _templateObject = function _templateObject() {
        return data;
    };

    return data;
}

var SummaryCard = _styledComponents['default'].summary(_templateObject());

var Summary = function Summary(_ref) {
    var name = _ref.name;
    return /*#__PURE__*/ _react['default'].createElement(
        SummaryCard,
        null,
        'Hi, My name is ',
        name
    );
};

var _default = Summary;
exports['default'] = _default;
