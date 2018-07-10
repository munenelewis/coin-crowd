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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\user\\Documents\\solidity\\kickstart\\pages\\index.js?entry';


var CamapaignIdex = function (_Component) {
    (0, _inherits3.default)(CamapaignIdex, _Component);

    function CamapaignIdex() {
        (0, _classCallCheck3.default)(this, CamapaignIdex);

        return (0, _possibleConstructorReturn3.default)(this, (CamapaignIdex.__proto__ || (0, _getPrototypeOf2.default)(CamapaignIdex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CamapaignIdex, [{
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, ' View campaigns '),
                    fluid: true
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }), this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                content: 'Create Campaign',
                icon: 'add circle',
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })));
        }
    }], [{
        key: 'getInitialProps',

        //defines a class function no need to create a class instance
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaings().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CamapaignIdex;
}(_react.Component);

exports.default = CamapaignIdex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJCdXR0b24iLCJmYWN0b3J5IiwiTGF5b3V0IiwiQ2FtYXBhaWduSWRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaW5ncyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFFZixBQUFTLEFBQU07O0FBRWYsQUFBTyxBQUFhOzs7O0FBRXBCLEFBQU8sQUFBWTs7Ozs7Ozs7O0lBRWIsQTs7Ozs7Ozs7Ozs7MENBVWUsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDTSxBQUNUO2lEQUFhLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZWLEFBRVUsQUFDYjsyQkFISixBQUFPLEFBR0ksQUFFZDtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBUWQsYUFSYzs7aURBUVAsQUFBRSxzQkFBRixBQUFPLFNBQU0sT0FBYixBQUFxQjs4QkFBckI7Z0NBQVAsQUFBTyxBQUNWO0FBRFU7YUFBQTs7OztpQ0FHSCxBQUNKO21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUo7QUFGSTtBQUFBLGFBQUEsa0JBRUosY0FBQTs7OEJBQUE7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsdURBRVUsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQUZKLEFBRUksQUFDRTtBQURGO3FCQUZKLEFBR00sQUFBSyxBQUNQLG1DQUFBLEFBQUM7eUJBQUQsQUFDYyxBQUNWO3NCQUZKLEFBRVcsQUFDUDt5QkFISjs7OEJBQUE7Z0NBUEosQUFDSSxBQUVKLEFBSUksQUFXUDtBQVhPO0FBQ0k7OzthQTlCaEI7Ozs7Ozs7Ozs7O3VDQUVpQyxrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O2lDQUExRDtBO2lFQUVDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTGEsQSxBQTZDNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvdXNlci9Eb2N1bWVudHMvc29saWRpdHkva2lja3N0YXJ0In0=