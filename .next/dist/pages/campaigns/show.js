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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _ContributeForm = require('../../components/ContributeForm');

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