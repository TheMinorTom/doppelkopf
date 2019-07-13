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
if(!isset($_POST)){
    http_response_code(400);
    exit("400 Bad request<br>Invalid method");
}else{
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL,"https://v1.api.minortom.net/do/user.php?user=".$_POST['userId']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query(array('userId' => $_POST['userId'],'userToken' => $_POST['userToken'])));
    
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    
    $server_output = curl_exec($ch);
    
    curl_close ($ch);
    
    $res = json_decode($server_output,true);
    if(!isset($res['error'])||$res['error']=="true"){
        http_response_code(400);
        exit("500 Internal server error<br>cURL failed");
    }else{
        $_SESSION['doppelkopf_user-logged-in'] = true;
        $_SESSION['doppelkopf_user-data'] = $res['result'];
        $_SESSION['doppelkopf_user-token'] = $_POST['userToken'];
?>
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
<html><head>
<title>Log in Callback - Doppelkopf</title>
</head><body>
    <noscript>Please enable JavaScript!</noscript>
    <p>You should be redirected.</p>
    <script>
    window.opener.location.reload();
    window.close();
    </script>
<hr>
<p class="copyright"><a href="//minortom.net?rel=doppelkopf">&copy; MinorTom</a> | <a href="//go.minortom.net/imprint?rel=doppelkopf">Imprint/Impressum</a> | <a href="//go.minortom.net/contact?rel=doppelkopf">Contact</a> | <a href="//go.minortom.net/privacy?rel=doppelkopf">Privacy policy</a> | <a href="//go.minortom.net/tos?rel=doppelkopf">Terms of Service</a>
</p>
</body></html> 
<?php
    }
}
