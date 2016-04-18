/*global angular */

/**
 * Directive that binds an event-emitted value provided by the given event name to the model
 * of the element it is applied to.
 */
angular.module('todomvc')
	.directive('polyBind', function () {
		'use strict';

		return {
			restrict: 'A',
			scope: {
				ngModel: '='
			},
			link: function (scope, elem, attrs) {
				var conf = JSON.parse(attrs.polyBind);
				if (!conf.event || !conf.modelValue)
					return;

				elem.bind(conf.event, function (event) {
					scope.ngModel = event.detail[conf.modelValue];
				});
			}
		}
	});
