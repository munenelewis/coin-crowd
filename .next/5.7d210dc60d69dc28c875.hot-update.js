webpackHotUpdate(5,{

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(450);

var _campaign = __webpack_require__(680);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(525);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(1007);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Documents\\solidity\\kickstart\\components\\ContributeForm.js';


var ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: ''
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 2;
                                _context.next = 5;
                                return _web2.default.eth.getAccounts();

                            case 5:
                                accounts = _context.sent;
                                _context.next = 8;
                                return campaign.methods.Contribute().send({

                                    from: accounts[0],

                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 8:

                                _routes.Router.replaceRoute('/campaigns/' + _this.props.address);

                                _context.next = 13;
                                break;

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[2, 11]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, ' Amount to contribute '), _react2.default.createElement(_semanticUiReact.Input, {
                label: 'ether',
                labelPosition: 'right',
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },

                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, 'Contribute'));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkJ1dHRvbiIsIkNhbXBhaWduIiwid2ViMyIsIlJvdXRlciIsIkNvbnRyaWJ1dGVGb3JtIiwic3RhdGUiLCJ2YWx1ZSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJDb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwic2V0U3RhdGUiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFNLEFBQU8sQUFBUzs7QUFDOUIsQUFBUSxBQUFjOzs7O0FBQ3RCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQWM7Ozs7Ozs7SUFFakIsQTs7Ozs7Ozs7Ozs7Ozs7O2dPQUNGLEE7bUJBQ1csQSxBQURKO0FBQUEsQUFDSCxpQixBQUdKO2lHQUFXLGlCQUFBLEFBQU8sT0FBUDs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUjtzQ0FBQSxBQUFNLEFBR0E7O0FBSkUsMkNBSVMsd0JBQVMsTUFBQSxBQUFLLE1BSnZCLEFBSVMsQUFBb0I7Z0RBSjdCO2dEQUFBO3VDQVFtQixjQUFBLEFBQUssSUFSeEIsQUFRbUIsQUFBUzs7aUNBQTFCO0FBUkYsb0RBQUE7Z0RBQUE7Z0RBVUUsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCOzswQ0FFMUIsU0FGK0IsQUFFL0IsQUFBUyxBQUVmOzsyQ0FBTyxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sTUFBQSxBQUFLLE1BQXRCLEFBQTRCLE9BZG5DLEFBVUUsQUFBbUMsQUFJOUIsQUFBbUM7QUFKTCxBQUVyQyxpQ0FGRTs7aUNBT047OytDQUFBLEFBQU8sNkJBQTJCLE1BQUEsQUFBSyxNQWpCbkMsQUFpQkosQUFBNkM7O2dEQWpCekM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBQUE7O2lDQUFBO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7Ozs7Ozs7aUNBMEJGO3lCQUNMOzttQ0FBUSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7OEJBQXJCO2dDQUFBLEFBQ0E7QUFEQTthQUFBLGtCQUNDLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDJDQUFBLEFBQUM7dUJBQUQsQUFDVSxBQUNOOytCQUZKLEFBRWtCLEFBQ2Q7dUJBQU8sS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ2xCOzBCQUFZLHlCQUFBOzJCQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxNQUFBLEFBQU0sT0FBcEMsQUFBUSxBQUFjLEFBQXFCO0FBSjNEOzs7OEJBQUE7Z0NBSEosQUFDQSxBQUVJLEFBU0o7QUFUSTtBQUNJLGlDQVFSLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBWlIsQUFBUSxBQVlBLEFBVVg7Ozs7O0FBdER3QixBLEFBeUQ3Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0RvY3VtZW50cy9zb2xpZGl0eS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\user\\Documents\\solidity\\kickstart\\components\\ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Documents\\solidity\\kickstart\\components\\ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS43ZDIxMGRjNjBkNjlkYzI4Yzg3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz8yZTA0N2I5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtGb3JtLCBJbnB1dCwgTWVzc2FnZSwgQnV0dG9ufSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuaW1wb3J0ICBDYW1wYWlnbiBmcm9tICcuLi9ldGhlcmV1bS9jYW1wYWlnbic7XHJcbmltcG9ydCB3ZWIzIGZyb20gJy4uL2V0aGVyZXVtL3dlYjMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5cclxuY2xhc3MgQ29udHJpYnV0ZUZvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0ZSA9e1xyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBvblN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT57XHJcbiAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHJcbiAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XHJcblxyXG5cclxuICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG5cclxuICAgICAgICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLkNvbnRyaWJ1dGUoKS5zZW5kKHtcclxuXHJcbiAgICAgICAgICAgICAgIGZyb206IGFjY291bnRzWzBdLFxyXG5cclxuICAgICAgICAgICAgICAgdmFsdWU6IHdlYjMudXRpbHMudG9XZWkodGhpcy5zdGF0ZS52YWx1ZSwgJ2V0aGVyJylcclxuICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgUm91dGVyLnJlcGxhY2VSb3V0ZShgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc31gKVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICBcclxuICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD4gQW1vdW50IHRvIGNvbnRyaWJ1dGUgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdldGhlcidcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxQb3NpdGlvbj0ncmlnaHQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudD0+IHRoaXMuc2V0U3RhdGUoe3ZhbHVlOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHByaW1hcnk+XHJcblxyXG4gICAgICAgICAgICAgICAgQ29udHJpYnV0ZVxyXG5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICApOyBcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtOyBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBUkE7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFsQkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFKQTtBQUNBOztBQURBO0FBU0E7QUFUQTtBQUNBO0FBUUE7QUFBQTtBQUFBO0FBVUE7Ozs7Ozs7QUFHQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9