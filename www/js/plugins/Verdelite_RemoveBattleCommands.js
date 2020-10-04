/*: @plugindesc v1.00 Simple Plugin removing commands from the Battle Command window using switches
 * @author Verdelite
 * 
 * @param Switch for removing item command
 * @desc Enter switch ID for removing Item command, enter 0 for no switch
 * @default 0
 * 
 * @param Switch for removing guard command
 * @desc Enter switch ID for removing Guard command, enter 0 for no switch
 * @default 0
 * 
 * @param Switch for removing skill command
 * @desc Enter switch ID for removing Skill command, enter 0 for no switch
 * @default 0
 * 
 * @param Switch for removing attack command
 * @desc Enter switch ID for removing Attack command, enter 0 for no switch
 * @default 0
 * 
 * @help
 * SETUP:
 * Enter the switch ID for the corresponding commands.
 * If the switch is ON (true) the command will be hidden.
 * If the switch is OFF (false) or the ID is 0, the command will show as usual.
 *
 * If using Yanfly's ChangeBattleEquip Plugin, place this plugin above Yanfly's.
 *
 * ======================================================================================
 *
 * TERMS OF USE
 * Free for any commercial or non-commercial project!
 * No credit required
 */

   (function() {
  var parameters = PluginManager.parameters('Verdelite_RemoveBattleCommands');
  var itemSwitch = Number(parameters['Switch for removing item command'] || 0);
  var guardSwitch = Number(parameters['Switch for removing guard command'] || 0);
  var skillSwitch = Number(parameters['Switch for removing skill command'] || 0);
  var attackSwitch = Number(parameters['Switch for removing attack command'] || 0);

  var _Verdelite_Window_ActorCommand = Window_ActorCommand.prototype.makeCommandList;

  Window_ActorCommand.prototype.makeCommandList = function() {
    if (this._actor) {

    	if(attackSwitch==0 || ($gameSwitches.value(attackSwitch)==false)){
        	this.addAttackCommand();
        }
        
        if(skillSwitch==0 || ($gameSwitches.value(skillSwitch)==false)){
        	this.addSkillCommands();
        }
        
        if(guardSwitch==0 || ($gameSwitches.value(guardSwitch)==false)){
        	this.addGuardCommand();
        }

        if(itemSwitch==0 || ($gameSwitches.value(itemSwitch)==false)) {
        	this.addItemCommand();
        }
    }
};
}) ();

