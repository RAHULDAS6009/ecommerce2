// src/legacy/jquery-globals.js
import $ from "jquery";
window.$ = $;
window.jQuery = $;

// Optional: quiet migrate logs
$.migrateMute = true;
$.migrateTrace = false;

import "jquery-migrate";
export default $;
