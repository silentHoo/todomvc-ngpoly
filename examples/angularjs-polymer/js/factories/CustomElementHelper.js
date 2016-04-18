/*global angular */

/**
 * Factory that works as wrapper to abstract from the direct access from controllers to an custom element's instance.
 * Use this factory methods to call methods on the element's instance.
 */
angular.module('todomvc')
	.factory('CustomElementHelper', function ($document) {
		'use strict';

		return {
			getInstance: function(selector) {
				return $document[0].querySelector(selector);
			}
		}
	});
