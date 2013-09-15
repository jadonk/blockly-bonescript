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

goog.provide('Blockly.Language.bonescript');

goog.require('Blockly.Language');

Blockly.Language.bonescript_getplatform = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/getPlatform/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("getPlatform")
        .appendTitle(new Blockly.FieldVariable(
        'name'), 'name')
        .appendTitle(new Blockly.FieldVariable(
        'serialNumber'), 'serialNumber')
        .appendTitle(new Blockly.FieldVariable(
        'version'), 'version')
        .appendTitle(new Blockly.FieldVariable(
        'bonescript'), 'bonescript')
    this.appendStatementInput("callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('name'),
        this.getTitleValue('serialNumber'),
        this.getTitleValue('version'),
        this.getTitleValue('bonescript')
    ];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  contextMenuMsg_: '',
  contextMenuType_: 'variables_get',
  customContextMenu: Blockly.Language.variables_get.customContextMenu
};

