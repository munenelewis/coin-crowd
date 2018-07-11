webpackHotUpdate(6,{

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

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

var _semanticUiReact = __webpack_require__(481);

var _layout = __webpack_require__(1163);

var _layout2 = _interopRequireDefault(_layout);

var _campaign = __webpack_require__(1181);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(1005);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(726);

var _ContributeForm = __webpack_require__(1185);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Documents\\solidity\\kickstart\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                minimuContribution = _props.minimuContribution,
                requestCount = _props.requestCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: 'adress of the manager',
                description: 'managner created this campaign and can create request to withdraw money',
                style: { overflowWrap: ' break-word' }
            }, {
                header: minimuContribution,
                meta: 'Minimum contribution (wei)',
                description: 'you must contribute this much wei to be a contributer',
                style: { overflowWrap: ' break-word' }
            }, {
                header: requestCount,
                meta: 'Number of request',
                description: 'A request trying to withdraw money from the contract. Request must be approved by approvers',
                style: { overflowWrap: ' break-word' }
            }, {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of people who have already donated to this campaign',
                style: { overflowWrap: ' break-word' }
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'How much money the campaign has to spend',
                style: { overflowWrap: ' break-word' }
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, ' CampaignShow '), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, ' View Request')))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: props.query.address,
                                    minimuContribution: summary[0],
                                    balance: summary[1],
                                    requestCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIkxheW91dCIsIkNhbXBhaWduIiwid2ViMyIsIkxpbmsiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW5pbXVDb250cmlidXRpb24iLCJyZXF1ZXN0Q291bnQiLCJhcHByb3ZlcnNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFFckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQXFCOzs7Ozs7Ozs7SUFJdEIsQTs7Ozs7Ozs7Ozs7c0NBeUJXO3lCQVNMLEtBVEssQUFTQTtnQkFUQSxBQUlMLGlCQUpLLEFBSUw7Z0JBSkssQUFLTCxpQkFMSyxBQUtMO2dCQUxLLEFBTUwsNEJBTkssQUFNTDtnQkFOSyxBQU9MLHNCQVBLLEFBT0w7Z0JBUEssQUFRTCx3QkFSSyxBQVFMLEFBR0o7O2dCQUFNO3dCQUNGLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLGNBTEgsQUFDVixBQUlXLEFBQWdCO0FBSjNCLEFBQ0ksYUFGTTt3QkFPVixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQUhKLEFBR2lCLEFBQ2I7dUJBQU8sRUFBRSxjQVhILEFBT1YsQUFJVyxBQUFnQjtBQUozQixBQUNJO3dCQUtKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLGNBakJILEFBYVYsQUFJVyxBQUFnQjtBQUozQixBQUNJO3dCQUtKLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLGNBdkJILEFBbUJWLEFBSVcsQUFBZ0I7QUFKM0IsQUFDSTt3QkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQztzQkFGSixBQUVVLEFBQ047NkJBSEosQUFHaUIsQUFDYjt1QkFBTyxFQUFFLGNBN0JqQixBQUFjLEFBeUJWLEFBSVcsQUFBZ0IsQUFHL0I7QUFQSSxBQUNJO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FBTyxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNIO0FBREc7QUFBQSxhQUFBLGtCQUNILGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURHLEFBQ0gsQUFDQSxtQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0M7QUFERDtvQkFEQSxBQUNBLEFBQ0MsQUFBSyxBQUtOLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxBQUFDLDBDQUFlLFNBQVUsS0FBQSxBQUFLLE1BQS9CLEFBQXFDOzhCQUFyQztnQ0FUSixBQUNJLEFBT0EsQUFDQSxBQUtBO0FBTEE7a0NBS0MsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLCtCQUNBLEFBQUMsOEJBQUssdUJBQXFCLEtBQUEsQUFBSyxNQUExQixBQUFnQyxVQUF0Qzs4QkFBQTtnQ0FBQSxBQUVBO0FBRkE7K0JBRUEsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDQTtBQURBO0FBQUEsK0JBQ0EsQUFBQyx5Q0FBTyxTQUFSOzhCQUFBO2dDQUFBO0FBQUE7ZUFyQlosQUFBTyxBQUVILEFBY0ksQUFDSSxBQUNBLEFBRUEsQUFDQSxBQVlmOzs7OztpSEF2RzRCLEE7Ozs7O2lDQUluQjtBLDJDQUFXLHdCQUFTLE1BQUEsQUFBTSxNLEFBQWYsQUFBcUI7O3VDQUdmLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUEvQztBOzs2Q0FNTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt3REFBb0IsUUFGakIsQUFFaUIsQUFBUSxBQUM1Qjs2Q0FBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjtrREFBYyxRQUpYLEFBSVcsQUFBUSxBQUN0QjtvREFBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7NkNBQVMsUUFOTixBQU1NLEFBQVEsQTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFmZ0IsQSxBQTRHNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJDOi9Vc2Vycy91c2VyL0RvY3VtZW50cy9zb2xpZGl0eS9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\user\\Documents\\solidity\\kickstart\\pages\\campaigns\\show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\user\\Documents\\solidity\\kickstart\\pages\\campaigns\\show.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns\\show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4wNzgyMGVhMDk5NjgyOWM0ZTgyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/YWE2NmY3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBHcmlkLCBCdXR0b24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSAnLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24nO1xyXG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XHJcbmltcG9ydCBDb250cmlidXRlRm9ybSAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybSc7XHJcblxyXG5cclxuXHJcbmNsYXNzIENhbXBhaWduU2hvdyAgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMocHJvcHMpIHtcclxuXHJcblxyXG5cclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9ICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcblxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWRkcmVzczogcHJvcHMucXVlcnkuYWRkcmVzcyxcclxuICAgICAgICAgICAgbWluaW11Q29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0Q291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcygpe1xyXG5cclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICBtYW5hZ2VyLFxyXG4gICAgICAgICAgICBtaW5pbXVDb250cmlidXRpb24sXHJcbiAgICAgICAgICAgIHJlcXVlc3RDb3VudCxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuXHJcbiAgICAgICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdhZHJlc3Mgb2YgdGhlIG1hbmFnZXInLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdtYW5hZ25lciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdCB0byB3aXRoZHJhdyBtb25leScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICcgYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbmltdUNvbnRyaWJ1dGlvbixcclxuICAgICAgICAgICAgICAgIG1ldGE6ICdNaW5pbXVtIGNvbnRyaWJ1dGlvbiAod2VpKScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ3lvdSBtdXN0IGNvbnRyaWJ1dGUgdGhpcyBtdWNoIHdlaSB0byBiZSBhIGNvbnRyaWJ1dGVyJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJyBicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogcmVxdWVzdENvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiByZXF1ZXN0JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSByZXF1ZXN0IHRyeWluZyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdCBtdXN0IGJlIGFwcHJvdmVkIGJ5IGFwcHJvdmVycycsXHJcbiAgICAgICAgICAgICAgICBzdHlsZTogeyBvdmVyZmxvd1dyYXA6ICcgYnJlYWstd29yZCcgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ051bWJlciBvZiBhcHByb3ZlcnMnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduJyxcclxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogJyBicmVhay13b3JkJyB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsICdldGhlcicpLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogJ0NhbXBhaWduIEJhbGFuY2UgKGV0aGVyKScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0hvdyBtdWNoIG1vbmV5IHRoZSBjYW1wYWlnbiBoYXMgdG8gc3BlbmQnLFxyXG4gICAgICAgICAgICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiAnIGJyZWFrLXdvcmQnIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz47XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxoMz4gQ2FtcGFpZ25TaG93IDwvaDM+XHJcbiAgICAgICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuUm93PlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYXJkcygpfVxyXG4gICAgICAgICAgICBcclxuICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs2fT5cclxuICAgICAgICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXsgdGhpcy5wcm9wcy5hZGRyZXNzIH0vPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Sb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBwcmltYXJ5PiBWaWV3IFJlcXVlc3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvR3JpZC5Sb3c+XHJcblxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduU2hvdztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTtBQVNBO0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBTUE7QUFFQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUFJQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBS0E7QUFMQTtBQUtBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFZQTs7Ozs7Ozs7OztBQW5HQTtBQUFBOztBQUdBO0FBQ0E7QUFEQTs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==