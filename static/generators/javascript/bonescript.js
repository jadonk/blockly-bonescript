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

Blockly.JavaScript.bonescript_var = function() {
  if (!Blockly.JavaScript.definitions_['bonescript_var']) {
    var varName = Blockly.JavaScript.variableDB_.getDistinctName('b', Blockly.Generator.NAME_TYPE);
    Blockly.JavaScript.definitions_['bonescript_var'] = 'var ' + varName + ' = require("bonescript");\n';
    Blockly.JavaScript.bonescript_var.varName = varName;
  }
  return Blockly.JavaScript.bonescript_var.varName;
};

Blockly.JavaScript.bonescript_pin = function() {
  var code = "'" + this.getTitleValue('PIN') + "'";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.bonescript_pin_digital = Blockly.JavaScript.bonescript_pin;
Blockly.JavaScript.bonescript_pin_analogin = Blockly.JavaScript.bonescript_pin;
Blockly.JavaScript.bonescript_pin_analogout = Blockly.JavaScript.bonescript_pin;

Blockly.JavaScript.bonescript_direction = function() {
  var code = "'" + this.getTitleValue('DIR') + "'";
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.bonescript_getplatform = function() {
  var statements_callback = Blockly.JavaScript.statementToCode(this, 'callback');
  var varTemp = Blockly.Variables.generateUniqueName();
  var code = [];
  code.push(Blockly.JavaScript.bonescript_var() + '.getPlatform( function(' + varTemp + '){');
  code = uniquifyLocal(this, code, varTemp, 'name');
  code = uniquifyLocal(this, code, varTemp, 'serialNumber');
  code = uniquifyLocal(this, code, varTemp, 'version');
  code = uniquifyLocal(this, code, varTemp, 'bonescript');
  code.push(statements_callback);
  code.push('});');
  return code.join('\n')+'\n';
};

Blockly.JavaScript.bonescript_pinmode = function() {
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_direction = Blockly.JavaScript.valueToCode(this, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
  var code = Blockly.JavaScript.bonescript_var();
  code += '.pinMode(';
  code += value_pin;
  code += ', ';
  code += value_direction;
  code += ');\n';
  return code;
};

Blockly.JavaScript.bonescript_getpinmode = function() {
  var statements_callback = Blockly.JavaScript.statementToCode(this, 'callback');
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var varTemp = Blockly.Variables.generateUniqueName();
  var code = [];
  code.push(Blockly.JavaScript.bonescript_var() + '.getPinMode(');
  code.push('  ' + value_pin + ', function(' + varTemp + '){');
  code = uniquifyLocal(this, code, varTemp, 'mux');
  code = uniquifyLocal(this, code, varTemp, 'slew');
  code = uniquifyLocal(this, code, varTemp, 'rx');
  code = uniquifyLocal(this, code, varTemp, 'pullup');
  code = uniquifyLocal(this, code, varTemp, 'name');
  code = uniquifyLocal(this, code, varTemp, 'err');
  code.push(statements_callback);
  code.push('});');
  return code.join('\n')+'\n';
};

Blockly.JavaScript.bonescript_digitalwrite = function() {
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(this, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = Blockly.JavaScript.bonescript_var();
  code += '.digitalWrite(';
  code += value_pin;
  code += ', ';
  code += value_value;
  code += ');\n';
  return code;
};

Blockly.JavaScript.bonescript_analogwrite = function() {
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var value_value = Blockly.JavaScript.valueToCode(this, 'value', Blockly.JavaScript.ORDER_ATOMIC);
  var code = Blockly.JavaScript.bonescript_var();
  code += '.analogWrite(';
  code += value_pin;
  code += ', ';
  code += value_value;
  code += ');\n';
  return code;
};

Blockly.JavaScript.bonescript_digitalread = function() {
  var statements_callback = Blockly.JavaScript.statementToCode(this, 'callback');
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var varTemp = Blockly.Variables.generateUniqueName();
  var code = [];
  code.push(Blockly.JavaScript.bonescript_var() + '.digitalRead(');
  code.push('  ' + value_pin + ', function(' + varTemp + '){');
  code = uniquifyLocal(this, code, varTemp, 'value');
  code.push(statements_callback);
  code.push('});');
  return code.join('\n')+'\n';
};

Blockly.JavaScript.bonescript_analogread = function() {
  var statements_callback = Blockly.JavaScript.statementToCode(this, 'callback');
  var value_pin = Blockly.JavaScript.valueToCode(this, 'pin', Blockly.JavaScript.ORDER_ATOMIC);
  var varTemp = Blockly.Variables.generateUniqueName();
  var code = [];
  code.push(Blockly.JavaScript.bonescript_var() + '.analogRead(');
  code.push('  ' + value_pin + ', function(' + varTemp + '){');
  code = uniquifyLocal(this, code, varTemp, 'value');
  code.push(statements_callback);
  code.push('});');
  return code.join('\n')+'\n';
};

function uniquifyLocal(block, code, varTemp, varName) {
  var varUnique = Blockly.JavaScript.variableDB_.getName(
      block.getTitleValue(varName), Blockly.Variables.NAME_TYPE);
  code.push('  var ' + varUnique + ' = ' + varTemp + '.' + varName + ';');
  return code;
}

