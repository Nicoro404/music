<?php

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

namespace OCA\Music\Db;

use \OCA\AppFramework\Db\Mapper;
use \OCA\AppFramework\Core\API;

use \OCA\AppFramework\Db\DoesNotExistException;

class AmpacheSessionMapper extends Mapper {

	public function __construct(API $api){
		parent::__construct($api, 'music_ampache_sessions');
	}

	public function find($token){
		$sql = 'SELECT `session`.`user_id` '.
			'FROM `*PREFIX*music_ampache_sessions` `session` '.
			'WHERE `session`.`token` = ?';
		$params = array($token);

		$result = $this->execute($sql, $params);

		// false if no row could be fetched
		return $result->fetchRow();
	}
}
