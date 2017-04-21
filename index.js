"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var p=t[r];p.enumerable=p.enumerable||!1,p.configurable=!0,"value"in p&&(p.writable=!0),Object.defineProperty(e,p.key,p)}}return function(t,r,p){return r&&e(t.prototype,r),p&&e(t,p),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_reactRouter=require("react-router"),_exenv=require("exenv"),_exenv2=_interopRequireDefault(_exenv),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),Breadcrumbs=function(e){function t(e){_classCallCheck(this,t);var r=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.displayName="Breadcrumbs",r}return _inherits(t,e),_createClass(t,[{key:"_getDisplayName",value:function(e){var t=null;return"function"==typeof e.getDisplayName&&(t=e.getDisplayName.bind(null,this.props.params)()),t=e.indexRoute?t||e.indexRoute.displayName||null:t||e.displayName||null,!t&&Boolean(e.name)&&(t=e.name),!t&&this.props.displayMissing&&(t=this.props.displayMissingText),t}},{key:"_addKeyToElement",value:function(e){return e&&!e.key&&e.type?Object.assign({},e,{key:100*Math.random()}):e}},{key:"_addKeyToArrayElements",value:function(e){var t=this;return e.map(function(e){return t._addKeyToElement(e)})}},{key:"_processCustomElements",value:function(e){var t=this;return e.map(function(e){return e?Array.isArray(e)?t._addKeyToArrayElements(e):t._addKeyToElement(e):null})}},{key:"_appendAndPrependElements",value:function(e){var t=[],r=this._processCustomElements([e.shift(),e.pop()]);return r[0]&&t.unshift(r[0]),t.push(e[0]),r[1]&&t.push(r[1]),t.reduce(function(e,t){return e.concat(t)},[]).filter(function(e){return e})}},{key:"_resolveRouteName",value:function(e){var t=this._getDisplayName(e);return!t&&e.breadcrumbName&&(t=e.breadcrumbName),!t&&e.name&&(t=e.name),t}},{key:"_processRoute",value:function(e,t,r,p){var s=this;if(!e.path&&this.props.hideNoPath)return null;var a="",n=this._resolveRouteName(e);if(n&&"excludes"in this.props&&this.props.excludes.some(function(e){return e===n}))return null;var o=!0;o&&(o=Boolean(e.childRoutes)),a=r?"":this.props.separator,o||(a=""),Object.prototype.hasOwnProperty.call(e,"breadcrumblink")&&(o=e.breadcrumblink);var i=e.path.split("/")[e.path.split("/").length-1],u=void 0;if(e.path.split("/").forEach(function(t){if(":"===t.substring(0,1)&&s.props.params){u=Object.keys(s.props.params).map(function(e){return s.props.params[e]});var r=e.path.split("/").map(function(e){return":"===e.substring(0,1)?u.shift():e});e.path=r.reduce(function(e,t){return e+"/"+t}),e.staticName||":"!==i.substring(0,1)||(n="function"==typeof e.getDisplayName?e.getDisplayName.bind(null,s.props.params)():r.reduce(function(e,t){return t})),"function"==typeof e.prettifyParam&&(n=e.prettifyParam(n,s.props.params))}}),!n)return null;this.props.prettify&&(n=n.replace(/-/g," "),n=n.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}));var l={};Object.prototype.hasOwnProperty.call(e,"linkProps")&&(l=e.linkProps);var c=n,f=this.props.itemClass;return o?p&&(c=_react2["default"].createElement(this.props.Link||_reactRouter.Link,Object.assign({to:e.path},l),n)):f+=" "+this.props.activeItemClass,p?_react2["default"].createElement(this.props.itemElement,{className:f,key:100*Math.random()},c,a):c}},{key:"_buildRoutes",value:function(e,t,r,p){var s=this,a=[],n="/";return e=e.map(function(e,t){var r=Object.assign({},e);if("function"==typeof e.prettifyParam&&(r.prettifyParam=e.prettifyParam),"props"in r&&"path"in r.props&&(r.path=r.props.path,r.children=r.props.children,r.name=r.props.name,r.prettifyParam=r.props.prettifyParam),!r.path)return null;"/"===r.path.charAt(0)?n=r.path:("/"!==n.charAt(n.length-1)&&(n+="/"),n+=r.path),t>0&&"/"!==r.path.charAt(0)&&(r.path=n);var p=s._resolveRouteName(r);return!s.props.displayMissing&&!p||"excludes"in s.props&&s.props.excludes.some(function(e){return e===p})?null:r}).filter(function(e){return Boolean(e)}),a=e.map(function(r,p){return s._processRoute(r,e.length,e.length===p+1,t)}).filter(function(e){return Boolean(e)}),_exenv2["default"].canUseDOM&&window&&window.document&&"setDocumentTitle"in this.props&&this.props.setDocumentTitle&&a[a.length-1].props.children[0]>0&&(window.document.title=a[a.length-1].props.children[0].props.children),(r||p)&&(a=this._appendAndPrependElements([r,a,p])),t?_react2["default"].createElement(this.props.wrapperElement,{className:this.props.customClass||this.props.wrapperClass},a):a}},{key:"render",value:function(){return this._buildRoutes(this.props.routes,this.props.createElement,this.props.prepend,this.props.append)}}]),t}(_react2["default"].Component);Breadcrumbs.propTypes={params:_propTypes2["default"].object.isRequired,prepend:_propTypes2["default"].oneOfType([_propTypes2["default"].node,_propTypes2["default"].bool]),append:_propTypes2["default"].oneOfType([_propTypes2["default"].node,_propTypes2["default"].bool]),separator:_propTypes2["default"].oneOfType([_propTypes2["default"].element,_propTypes2["default"].string]),createElement:_propTypes2["default"].bool,Link:_propTypes2["default"].oneOfType([_propTypes2["default"].func,_propTypes2["default"].string]),displayMissing:_propTypes2["default"].bool,prettify:_propTypes2["default"].bool,displayMissingText:_propTypes2["default"].string,wrapperElement:_propTypes2["default"].oneOfType([_propTypes2["default"].func,_propTypes2["default"].string]),wrapperClass:_propTypes2["default"].string,itemElement:_propTypes2["default"].oneOfType([_propTypes2["default"].func,_propTypes2["default"].string]),itemClass:_propTypes2["default"].string,customClass:_propTypes2["default"].string,activeItemClass:_propTypes2["default"].string,excludes:_propTypes2["default"].arrayOf(_propTypes2["default"].string),hideNoPath:_propTypes2["default"].bool,routes:_propTypes2["default"].arrayOf(_propTypes2["default"].object).isRequired,setDocumentTitle:_propTypes2["default"].bool},Breadcrumbs.defaultProps={prepend:!1,append:!1,separator:" > ",createElement:!0,displayMissing:!0,displayMissingText:"Missing name prop from Route",wrapperElement:"div",wrapperClass:"breadcrumbs",itemElement:"span",itemClass:"",activeItemClass:"",excludes:[""],prettify:!1,hideNoPath:!0,setDocumentTitle:!1},exports["default"]=Breadcrumbs;
//# sourceMappingURL=dist/react-breadcrumbs.min.js.map
