'use strict';

/**
 * @ngdoc service
 * @name textManager.TextFactory
 * @description
 * # TextFactory
 * Factory in the textManager.
 */
angular.module('textManager')
  .factory('TextFactory', function () {   
   
    // Public API here
    return {
		trucateText: function(text, symbolsAmount) {
			var additionalEllipsis = (text.length > symbolsAmount) ? '...' : '';
			return text.substring(0, symbolsAmount) + additionalEllipsis;
		}
	};
});
