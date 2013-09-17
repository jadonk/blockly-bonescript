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

Blockly.Language.bonescript_pin = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript#pin',
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Pin');
    this.appendDummyInput()
        .appendTitle("pin")
        .appendTitle(new Blockly.FieldTextInput("USR0"), "PIN");
    this.setTooltip('');
  }
};

Blockly.Language.bonescript_direction = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript#pin',
  init: function() {
    this.setColour(210);
    this.setOutput(true, 'Direction');
    this.appendDummyInput()
        .appendTitle("direction")
        .appendTitle(new Blockly.FieldDropdown([['in', 'in'], ['out', 'out']]), "DIR");
    this.setTooltip('');
  }
};

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
        'bonescript'), 'bonescript');
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

Blockly.Language.bonescript_pinmode = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/pinMode/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("pinMode");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendValueInput("direction")
        .setCheck("Direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.bonescript_getpinmode = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/getPinMode/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("getPinMode");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldVariable(
        'mux'), 'mux')
        .appendTitle(new Blockly.FieldVariable(
        'slew'), 'slew')
        .appendTitle(new Blockly.FieldVariable(
        'rx'), 'rx')
        .appendTitle(new Blockly.FieldVariable(
        'pullup'), 'pullup')
        .appendTitle(new Blockly.FieldVariable(
        'name'), 'name')
        .appendTitle(new Blockly.FieldVariable(
        'err'), 'err');
    this.appendStatementInput("callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('mux'),
        this.getTitleValue('slew'),
        this.getTitleValue('rx'),
        this.getTitleValue('pullup'),
        this.getTitleValue('name'),
        this.getTitleValue('err')
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

Blockly.Language.bonescript_digitalwrite = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/digitalWrite/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("digitalWrite");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendValueInput("value")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.bonescript_analogwrite = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/analogWrite/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("analogWrite");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendValueInput("value")
        .setCheck(Number);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.bonescript_digitalread = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/digitalRead/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("digitalRead");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldVariable(
        'value'), 'value');
    this.appendStatementInput("callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('value')
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

Blockly.Language.bonescript_analogread = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/analogRead/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("analogRead");
    this.appendValueInput("pin")
        .setCheck("Pin");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldVariable(
        'value'), 'value');
    this.appendStatementInput("callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('value')
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
