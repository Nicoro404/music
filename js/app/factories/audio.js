/**
 * ownCloud - Music app
 *
 * @author Morris Jobke
 * @copyright 2013 Morris Jobke <morris.jobke@gmail.com>
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU AFFERO GENERAL PUBLIC LICENSE
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU AFFERO GENERAL PUBLIC LICENSE for more details.
 *
 * You should have received a copy of the GNU Affero General Public
 * License along with this library.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

angular.module('Music').factory('Audio', ['$rootScope', function ($rootScope) {
	var isChrome = (navigator && navigator.userAgent &&
		navigator.userAgent.indexOf('Chrome') !== -1) ?
			true : false;

	soundManager.setup({
		url: OC.linkTo('music', '3rdparty/soundmanager'),
		flashVersion: 8,
		// this fixes a bug with HTML5 playback in Chrome - Chrome has to use flash
		// Chrome stalls sometimes for several seconds after changing a track
		// drawback: OGG files can't played in Chrome
		// https://code.google.com/p/chromium/issues/detail?id=111281
		useHTML5Audio: isChrome ? false : true,
		preferFlash: isChrome ? true : false,
		useFlashBlock: true,
		flashPollingInterval: 200,
		html5PollingInterval: 200,
		onready: function() {
			$rootScope.$emit('SoundManagerReady');
		}
	});

	return soundManager;
}]);
