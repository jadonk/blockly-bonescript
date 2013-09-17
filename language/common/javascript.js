/**
 * Copyright 2013 Texas Instruments
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
 * @fileoverview BoneScript blocks for Blockly
 * @author jdk@ti.com (Jason Kridner)
 */
'use strict';

goog.provide('Blockly.Language.javascript');

goog.require('Blockly.Language');

Blockly.Language.javascript_settimeout = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/setTimeout/',
  init: function() {
    this.setColour(210);
    this.appendValueInput("timeout")
        .setCheck(Number)
        .appendTitle("setTimeout");
    this.appendStatementInput("callback");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.javascript_consolelog = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/console/',
  init: function() {
    this.setColour(210);
    this.appendValueInput("log")
        .appendTitle("console.log");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

