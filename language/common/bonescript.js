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

Blockly.Language.bonescript_getplatform_firsttry = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/getPlatform/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("getPlatform");
    this.appendStatementInput("callback")
        .appendTitle(new Blockly.FieldTextInput("x"), "val");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Language.bonescript_var_get = {
  category: null,  // Variables are handled specially.
  helpUrl: '',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle('get')
        .appendTitle(new Blockly.FieldVariable(
        'item'), 'VAR');
    this.setOutput(true, null);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  contextMenuMsg_: '',
  contextMenuType_: 'bonescript_var_set',
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getTitleValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlTitle = goog.dom.createDom('title', null, name);
    xmlTitle.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlTitle);
    xmlBlock.setAttribute('type', 'bonescript_var_set');
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};

Blockly.Language.bonescript_var_set = {
  category: null,  // Variables are handled specially.
  helpUrl: '',
  init: function() {
    this.setColour(210);
    this.appendValueInput('VALUE')
        .appendTitle('set')
        .appendTitle(new Blockly.FieldVariable(
        'item'), 'VAR');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  contextMenuMsg_: '',
  contextMenuType_: 'bonescript_var_get',
  customContextMenu: Blockly.Language.bonescript_var_get.customContextMenu
};

Blockly.Language.bonescript_getplatform = {
  helpUrl: 'http://beagleboard.org/Support/BoneScript/getPlatform/',
  init: function() {
    this.setColour(210);
    this.appendDummyInput()
        .appendTitle("getPlatform")
        .appendTitle(new Blockly.FieldVariable(
        'item'), 'VAR');
    this.appendStatementInput("callback");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  getVars: function() {
    return [this.getTitleValue('VAR')];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getTitleValue('VAR'))) {
      this.setTitleValue(newName, 'VAR');
    }
  },
  contextMenuMsg_: '',
  contextMenuType_: 'bonescript_var_get',
  customContextMenu: Blockly.Language.bonescript_var_get.customContextMenu
};

