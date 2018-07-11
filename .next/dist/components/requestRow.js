'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Documents\\solidity\\kickstart\\components\\requestRow.js';


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context.next = 6;
                            return campaign.methods.approveRequest(_this.props.id).send({

                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2);
        })), _this.onFinalize = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context2.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);
                            _context2.next = 6;
                            return campaign.methods.finalizeRequest(_this.props.id).send({

                                from: accounts[0]
                            });

                        case 6:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                approversCount = _props.approversCount;

            var ReadyToFinalize = request.approvalCount > approversCount / 2;

            return _react2.default.createElement(Row, { disabled: request.complete, positive: ReadyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, ' ', id, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, ' ', request.description, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, ' ', _web2.default.utils.fromWei(request.value, 'ether'), ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, '  ', request.recipient, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, ' ', request.approvalCount, ' / ', approversCount, ' '), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, ' Approve ')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, request.complete ? null : _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, ' Finalize ')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXHJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJvbkFwcHJvdmUiLCJldGgiLCJnZXRBY2NvdW50cyIsImFjY291bnRzIiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJtZXRob2RzIiwiYXBwcm92ZVJlcXVlc3QiLCJpZCIsInNlbmQiLCJmcm9tIiwib25GaW5hbGl6ZSIsImZpbmFsaXplUmVxdWVzdCIsIlJvdyIsIkNlbGwiLCJyZXF1ZXN0IiwiYXBwcm92ZXJzQ291bnQiLCJSZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50IiwiY29tcGxldGUiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUyxBQUFPOztBQUNoQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTyxBQUFjOzs7Ozs7Ozs7SUFJZixBOzs7Ozs7Ozs7Ozs7Ozs7d04sQUFHRixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOzs2QkFBMUI7QUFERSxnREFFRjtBQUZFLHVDQUVTLHdCQUFTLE1BQUEsQUFBSyxNQUZ2QixBQUVTLEFBQW9COzRDQUY3Qjs0Q0FHRixBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7O3NDQUUxQyxTQUxILEFBR0YsQUFBb0QsQUFFL0MsQUFBUztBQUZzQyxBQUV0RCw2QkFGRTs7NkJBSEU7NkJBQUE7NENBQUE7O0FBQUE7d0JBQUE7QSxtQixBQVlaLHNGQUFhLG9CQUFBOzBCQUFBOzRFQUFBOzBCQUFBO3VEQUFBOzZCQUFBOzZDQUFBO21DQUNjLGNBQUEsQUFBSyxJQURuQixBQUNjLEFBQVM7OzZCQUExQjtBQURHLGlEQUVIO0FBRkcsdUNBRVEsd0JBQVMsTUFBQSxBQUFLLE1BRnRCLEFBRVEsQUFBb0I7NkNBRjVCOzRDQUdILEFBQVMsUUFBVCxBQUFpQixnQkFBZ0IsTUFBQSxBQUFLLE1BQXRDLEFBQTRDLElBQTVDLEFBQWdEOztzQ0FFM0MsU0FMRixBQUdILEFBQXFELEFBRWhELEFBQVM7QUFGdUMsQUFFdkQsNkJBRkU7OzZCQUhHOzZCQUFBOzZDQUFBOztBQUFBO3lCQUFBO0E7Ozs7O2lDQWFKO2dCQUFBLEFBRUUsTUFGRixBQUVlLHVCQUZmLEFBRUU7Z0JBRkYsQUFFTyxPQUZQLEFBRWUsdUJBRmYsQUFFTzt5QkFDNkIsS0FIcEMsQUFHeUM7Z0JBSHpDLEFBR0csWUFISCxBQUdHO2dCQUhILEFBR1EsaUJBSFIsQUFHUTtnQkFIUixBQUdrQix3QkFIbEIsQUFHa0IsQUFDdkI7O2dCQUFNLGtCQUFrQixRQUFBLEFBQVEsZ0JBQWdCLGlCQUFoRCxBQUFpRSxBQU1qRTs7bUNBQ0ssY0FBRCxPQUFLLFVBQVcsUUFBaEIsQUFBd0IsVUFBVyxVQUFXLG1CQUFtQixDQUFDLFFBQWxFLEFBQTBFOzhCQUExRTtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBUSxLQUFSLElBREosQUFDSSxBQUNBLHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFRLGFBQVIsQUFBZ0IsYUFGcEIsQUFFSSxBQUNBLHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUFRLG1CQUFBLEFBQUssTUFBTCxBQUFXLFFBQVMsUUFBcEIsQUFBNEIsT0FBcEMsQUFBUSxBQUFtQyxVQUgvQyxBQUdJLEFBQ0Esc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVUsY0FBVixBQUFrQixXQUp0QixBQUlJLEFBQ0Esc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBQVMsYUFBVCxBQUFpQixlQUFvQixPQUFyQyxnQkFMSixBQUtJLEFBRUEsc0JBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsdUJBQ00sQUFBUSxXQUFSLEFBQW1CLHVCQUNyQixBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7YUFBQSxFQVRSLEFBT0ksQUFFSSxBQUtKLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ1U7QUFEVjtBQUFBLHVCQUNVLEFBQVEsV0FBUixBQUFtQix1QkFFakIsQUFBQyx5Q0FBTyxPQUFSLEFBQWMsT0FBTSxPQUFwQixNQUEwQixTQUFTLEtBQW5DLEFBQXdDOzhCQUF4QztnQ0FBQTtBQUFBO2FBQUEsRUFsQnBCLEFBQ0ksQUFjSSxBQUdZLEFBV3ZCOzs7OztBQW5Fb0IsQSxBQXNFekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoicmVxdWVzdFJvdy5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0RvY3VtZW50cy9zb2xpZGl0eS9raWNrc3RhcnQifQ==