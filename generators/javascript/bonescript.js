/**
 * Copyright 2013 Texas Instruments Inc.
 * http://beagleboard.org/Support/BoneScript/blockly
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating JavaScript for BoneScript blocks
 * @author jdk@ti.com (Jason Kridner)
 */
'use strict';

goog.provide('Blockly.JavaScript.bonescript');

goog.require('Blockly.JavaScript');

Blockly.JavaScript.bonescript_getplatform = function() {
  var statements_callback = Blockly.JavaScript.statementToCode(this, 'callback');
  var text_val = this.getTitleValue('val');
  var code = 'b.getPlatform( function(' + text_val + '){' + statements_callback + '} );\n';
  return code;
};
