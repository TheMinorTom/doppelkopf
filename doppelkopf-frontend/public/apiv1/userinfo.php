<?php 
/*
Copyright 2019 MinorTom <me@minortom.net>, DaJaBe
https://go.minortom.net/doppelkopf

This file is part of Doppelkopf.

Doppelkopf is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Doppelkopf is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with Doppelkopf.  If not, see <https://www.gnu.org/licenses/>.
*/
require_once("api.inc.php");
if(!isset($_SESSION['doppelkopf_user-logged-in'])||!$_SESSION['doppelkopf_user-logged-in']){
    echo '{"logged_in": "false"}';
}else{
    echo '{"logged_in": "true", "user": '.json_encode($_SESSION['doppelkopf_user-data']).', "secret":'.json_encode($_SESSION['doppelkopf_user-token']).'}';
}