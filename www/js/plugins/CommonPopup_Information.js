//
//  入手インフォメーション ver1.15
//
// ------------------------------------------------------
// Copyright (c) 2016 Yana
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
// ------------------------------------------------------
//
// author Yana
//

var Imported = Imported || {};
Imported['CommonPopup_Information'] = 1.15;

if (!Imported.CommonPopupCore) {
    console.error('Please install CommonPopupCore plugin above first')
}
/*:
 * @plugindesc ver1.15/ This plugin show information about items in pop up window
 * @author Yana
 * 
 * @param Info Disable Switch Id
 * @desc Info Disable Switch ID
 * Disable info if switch on
 * @default 10
 * 
 * @param Use Battle Info
 * @desc Show Information window in battle
 * Please set it with with either "true" or "false"
 * @default true
 * 
 * @param Use Rewards Info
 * @desc Show Information window after battle/rewards window
 * Please set it with with either "true" or "false"
 * @default true
 *
 * @param Info Pattern
 * @desc Information Display Pattern
 * Normal:Normal GrowUp:Vertical Stretch Stretch: Horizontal Stretch
 * @default GrowUp
 *
 * @param Info Font Size
 * @desc Information Font Size
 * @default 20
 * 
 * @param Info Count
 * @desc Information Display Time(In Frames)
 * @default 120
 * 
 * @param Info Delay
 * @desc Information Delay Time.(In Frames)
 * When set to be continuously 
 * @default 20
 * 
 * @param Info MoveWait
 * @desc Information waiting time(In Frames)
 * @default 100
 * 
 * @param Info MoveFade
 * @desc Information fade time(In Frames)
 * @default 10
 * 
 * @param Info Position
 * @desc Information Default Position
 * When "Up" is written it will show on the top of the screen
 * @default 
 * 
 * @param Info Slide Action
 * @desc Information Slide Direction
 * When "Down" is written it will show from top to down.
 * @default
 * 
 * @param Info Sup X
 * @desc Information Supplementary X Position.
 * @default 0
 * 
 * @param Info Sup Y
 * @desc Information Supplementary Y Position.
 * @default 0
 *
 * @param Info Width
 * @desc Information box Width
 * @default 816
 *
 * @param Gold Icon Index
 * @desc The number of index for gold/money icon
 * @default 314
 *
 * @param Actor Icon Start Index
 * @desc the first icon index number for actors (if there is any actor icon).
 * @default 320
 *
 * @param Reward Popup Delay
 * @desc After battle popup delay time
 * @default 0
 * 
 * @param Battle Show List
 * @desc List of information displayed in battle
 * List of information name: item,gold,exp,skill,params,level,abp,classLevel。
 * @default item,gold,exp,skill,params,level,abp,classLevel
 * 
 * @param Get Gold Text
 * @desc Text Shown when player gain money
 * _icon:index icon to be set _num: Money amount
 * @default You Got 「\I[_icon]_num\C[14]\G\C[0]」 \C[24] Gold！
 * 
 * @param Lost Gold Text
 * @desc Text Shown when player lost money
 * _icon:index icon to be set _num:Money amount
 * @default You lost 「\I[_icon]_num\C[14]\G\C[0]」 \C[2]Gold
 * 
 * @param Get Item Text
 * @desc Text shown when player gain item
 * _icon:Item Icon _name:Item Name　_desc1:Line 1 in Description _desc2:Line 2 in Destription
 * @default You found \C[24]「\I[_icon]_name」 ！\n\C[6]_desc1
 * 
 * @param Lost Item Text
 * @desc Text shown when player lost item
 * _icon:Item Icon _name:Item Name　_desc1:Line 1 in Description _desc2:Line 1 in Description
 * @default You lost \C[24]「\I[_icon]_name」 ...\n\C[6]_desc1
 * 
 * @param Get Item Text Num
 * @desc Text shown when player gain item more than one 
 * _icon:Item icon _name:Item name　_num:Item number _desc1:Line 1 in Description _desc2:Line 2 in Description
 * @default You found \C[14]_num \C[24]「\I[_icon]_name s」 \C[24]！\n\C[6]_desc1
 * 
 * @param Lost Item Text Num
 * @desc Text shown when player lost more than one item  
 * _icon:Item icon _name:Item name　_num:Item number _desc1:Line 1 in Description _desc2:Line 2 in Description
 * @default You found \C[14]_num \C[24]「\I[_icon]_name s」 \C[24]！\n\C[6]_desc1
 * 
 * @param Get Skill Text
 * @desc Text shown when an actor learned skill 
 * _actor:actor name _icon:Skill Icon _name:Skill name　_desc1:Line 1 in Description _desc2:Line 2 in Description
 * @default \C[24]_actor \C[0]learned \C[24]「\I[_icon]_name」 \n\C[6]_desc1
 * 
 * @param Lost Skill Text
 * @desc Text shown when an actor lost a skill
 * _actor:actor name _icon:Skill Icon _name:Skill name　_desc1:Line 1 in Description _desc2:Line 2 in Description
 * @default \C[24]_actor \C[0]learned \C[24]「\I[_icon]_name」 \n\C[6]_desc1
 * 
 * @param Exp Up Text
 * @desc Text shown when player gained experiences
 * _actor:actor name  _name:Experience name _num:Experience value　
 * @default \C[24]_actor \C[0]gained \C[14]_num\C[4]_name\C[0]Experience\C[24]!
 * 
 * @param Exp Down Text
 * @desc Text shown when player lost experiences
 * _actor:actor name  _name:Experience name _num:Experience value　
 * @default \C[24]_actor \C[0]lost \C[14]_num\C[4]_name\C[0]Experience\C[24]...
 * 
 * @param Lv Up Text
 * @desc Text shown when player leveled up
 * _actor:actor name  _name:Level up Name _num:Leveled up by
 * @default \C[4]_name \C[24]_actor \C[0]gained \C[14]_num \C[0]Levels\C[24]！
 * 
 * @param Lv Down Text
 * @desc Text shown when player leveled down 
 * _actor:actor name  _name:Level up name　_num:Leveled down by
 * @default \C[4]_name \C[24]_actor \C[0]lost \C[14]_num \C[0]Levels\C[24]...
 * 
 * @param Param Up Text
 * @desc Text shown when parameter raised
 * _actor:actor name  _name:parameter name _num:raised value
 * @default \C[24]_actor\C[0]'s \C[4]_name\C[0]raised by \C[14]_num\C[24]！
 * 
 * @param Param Down Text
 * @desc Text shown when parameter lowered
 * _actor:actor name  _name:parameter name　_num:lowered value
 * @default \C[24]_actor\C[0]'s \C[4]_name \C[0]lowered by \C[14]_num\C[24]！・
 *
 * @param Abp Up Text
 * @desc Text shown when gained class/job experience
 * _actor:actor name  _name:Experience name _num:Experience value　
 * @default \C[24]_actor \C[0]gained \C[14]_num \C[4]_name \C[0]Experiences\C[24]！
 * 
 * @param Abp Down Text
 * @desc Text shown when lost class/job experience
 * _actor:actor name  _name:Experience name _num:Experience value　
 * @default \C[24]_actor \C[0]lost \C[14]_num \C[4]_name \C[0]Experiences\C[24]...
 * 
 * @param Class Lv Up Text
 * @desc Text shown when class/job leveled up 
 * _class:Class name _actor:actor name  _name:Level up name _num:leveled up by
 * @default \C[24]_actor 's job \C[4]_class _name \C[0]gained \C[14]_num \C[0]Levels\C[24]！
 * 
 * @param Class Lv Down Text
 * @desc Text shown when class/job leveled down 
 * _class:Class name _actor:actor name  _name:Level up name _num:leveled up by
 * @default \C[24]_actor 's job \C[4]_class _name \C[0]lost \C[14]_num \C[0]Levels\C[24]...
 *
 * @param Formation Lv Up Text
 * @desc Text shown when formation leveled up(perhaps team/battle plugin related)
 * _name:Formation name　_num:leveled up by
 * @default \C[4]_name \C[0]battle formation's level increased by\C[14]_num\C[24]！
 *
 * @param Formation Lv Max Text
 * @desc Text shown when formation level maxed out(perhaps team/battle plugin related)
 * _name:Formation name
 * @default \C[4]_name \C[0]battle formation's level \C[24]maxed out!
 *
 * @help------------------------------------------------------
 * Plugin Command
 * ------------------------------------------------------
 * ShowInfo [Name of information to display]
 * text information to display
 *
 * 
 * ------------------------------------------------------
 * This pop up need CommonPopUpCore Installed
 * Please put this plugin below CommonPopUpCore
 * If you don't write anything in the display text, it will invalidate the information shown
 * ------------------------------------------------------
 * How to Use
 * ------------------------------------------------------
 * Just set it on below the CommonPopUpCore plugin
 * for detailed settings please look at each parameter to be displayed
 *
 * 170524
 * added special code to give sound everytime popup need to a sound
 * _SE[sound name[,volume,pitch,phase]]
 * ※volume,pitch,phase can be ommited from the code. if ommited the default is volume=90,pitch=100，phase=0。
 * Example：When leveling up SE Skill3 is played
 * _SE[Skill3]\C[4]_name \C[24]_actor \C[0]gained \C[14]_num \C[0]Levels\C[24]！
 * ------------------------------------------------------
 * Terms of Service
 * ------------------------------------------------------
 * This plugin is released under the MIT license.
 * There are no restrictions on use. It can be used for both commercial and adult use.
 * We do not limit secondary distribution, but we do not support it.
 * Copyright display is optional. You can use it without doing it.
 * In short, there are no specific rules.
 * For inquiries such as bug reports and how to use, please contact us at Twitter or Twitter.
 * https://twitter.com/yanatsuki_
 * Please use these material on your own risk
 * ------------------------------------------------------
 * Change Log:
 * ver1.15:170525
 * 戦闘中にメッセージウィンドウが下以外の場合、ポップアップの位置がずれるバグを修正しました。
 * ポップアップ時にSEを再生する制御文字を追加しました。
 * 動作パターンをGrowUpに指定して、表示位置を上にした場合の動作を修正しました。
 * ver1.14:170216
 * アクター名の変換が正常に動作していなかったバグを修正しました。
 * ver1.131:170104
 * 特定の状況でエラーが発生することのあるバグを修正しました。
 * ver1.13:
 * 戦闘中のポップアップ位置を調整しました。
 * 戦闘終了時の戦利品表示にディレイをかける設定を追加しました。
 * 陣形レベルが上がった時にポップアップを表示する機能を追加しました。
 * ver1.12:
 * 利用規約をMITライセンスに変更しました。
 * 一度も仲間になっていないアクターに対してポップアップを表示すると、無限ループに陥るバグを修正しました。
 * ver1.11:
 * 動作パターンの設定を追加しました。
 * プラグインパラメータを追加しました。
 * ver1.10:
 * 処理内容を少し変更しました。
 * ヘルプを追加・修正しました。
 * 任意のテキストを表示するプラグインコマンドを追加しました。
 * ver1.09:
 * スキルを忘れさせた際のポップアップが表示されないバグを修正しました。
 * レベルアップ時やクラスレベルアップ時のスキル習得の表示位置を調整しました。
 * ver1.08:
 * 戦闘中の表示をexpとabpを無効化すると、経験値やABPが入らないバグを修正しました。
 * ver1.07:
 * インフォメーションを無効化する機能が正常に機能していなかったバグを修正しました。
 * 戦闘時に表示するインフォメーションを設定するBattle Show Listの設定項目を追加しました。
 * ver1.06:
 * 戦闘中のポップアップの位置が正常でなかったバグを修正しました。
 * var1.05:
 * 表示位置を補正するためのプラグインパラメータを追加しました。
 * 上から下へ動作する設定を追加しました。
 * var1.04:
 * 任意のテキストを渡せるように修正しました。
 * ver1.03:
 * ABPとクラスレベルのポップアップ処理を追加しました。
 * ver1.02:
 * レベルアップ処理でポップアップ表示が逆になっていたバグを修正しました。
 * ver1.01:
 * valueが0の状態でもポップアップしていたバグを修正しました。
 * YEP_CoreEngineとの競合回避処理を追加しました。
 * ver1.00:
 * 公開
 */

(function() {
    var parameters = PluginManager.parameters('CommonPopup_Information');
    var infoDisableSwitchId = Number(parameters['Info Disable Switch Id'] || 10);
    var getGoldText = String(parameters['Get Gold Text']);
    var lostGoldText = String(parameters['Lost Gold Text']);
    var getInfoText = String(parameters['Get Item Text']);
    var lostInfoText = String(parameters['Lost Item Text']);
    var getInfoTextNum = String(parameters['Get Item Text Num']);
    var lostInfoTextNum = String(parameters['Lost Item Text Num']);
    var getInfoSkillText = String(parameters['Get Skill Text']);
    var lostInfoSkillText = String(parameters['Lost Skill Text']);
    var ExpUpText = String(parameters['Exp Up Text']);
    var ExpDownText = String(parameters['Exp Down Text']);
    var lvUpText = String(parameters['Lv Up Text']);
    var lvDownText = String(parameters['Lv Down Text']);
    var ParamUpText = String(parameters['Param Up Text']);
    var ParamDownText = String(parameters['Param Down Text']);
    var infoFontSize = Number(parameters['Info Font Size'] || 20);
    var infoCount = Number(parameters['Info Count'] || 120);
    var infoDelay = Number(parameters['Info Delay'] || 20);
    var infoMoveWait = Number(parameters['Info MoveWait'] || 100);
    var infoMoveFade = Number(parameters['Info MoveFade'] || 20);
    var goldIconIndex = Number(parameters['Gold Icon Index'] || 314);
    var actorIconStartIndex = Number(parameters['Actor Icon Start Index']);
    var useBattleInfo = String(parameters['Use Battle Info'] || 'true') === 'true';
    var useRewardsInfo = String(parameters['Use Rewards Info'] || 'true') === 'true';
    var infoSlideCount = 60;
    var infoPosition = String(parameters['Info Position'] || '');
    var infoSlideAction = String(parameters['Info Slide Action'] || '');
    var infoSupX = Number(parameters['Info Sup X'] || 0);
    var infoSupY = Number(parameters['Info Sup Y'] || 0);
    var infoPattern = parameters['Info Pattern'] || 'Normal';
    var infoWidth = parameters['Info Width'] || 816;
    var rewardPopupDelay = Number(parameters['Reward Popup Delay']);

    var abpUpText = String(parameters['Abp Up Text']);
    var abpDownText = String(parameters['Abp Down Text']);
    var clvUpText = String(parameters['Class Lv Up Text']);
    var clvDownText = String(parameters['Class Lv Down Text']);

    var fLvUpText = String(parameters['Formation Lv Up Text']);
    var fLvMaxText = String(parameters['Formation Lv Max Text']);
    
    var battleShowList = String(parameters['Battle Show List']).split(',');

    var _gInfo_GInterpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _gInfo_GInterpreter_pluginCommand.call(this, command, args);
        if (command === 'ShowInfo' || command === 'インフォ表示') {
            CommonPopupManager.showInfo({},args[0],null);
        }
    };

    CommonPopupManager.popEnable = function() {
        var useBattle = $gameParty.inBattle() ? useBattleInfo : true;
        return !$gameSwitches.value(infoDisableSwitchId) && useBattle;
    };

    // Change Gold
    var _gInfo_GInterpreter_command125 = Game_Interpreter.prototype.command125;
    Game_Interpreter.prototype.command125 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command125.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Item
    var _gInfo_GInterpreter_command126 = Game_Interpreter.prototype.command126;
    Game_Interpreter.prototype.command126 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command126.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Weapon
    var _gInfo_GInterpreter_command127 = Game_Interpreter.prototype.command127;
    Game_Interpreter.prototype.command127 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command127.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Armor
    var _gInfo_GInterpreter_command128 = Game_Interpreter.prototype.command128;
    Game_Interpreter.prototype.command128 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command128.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change EXP
    var _gInfo_GInterpreter_command315 = Game_Interpreter.prototype.command315;
    Game_Interpreter.prototype.command315 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command315.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Level
    var _gInfo_GInterpreter_command316 = Game_Interpreter.prototype.command316;
    Game_Interpreter.prototype.command316 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command316.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Parameter
    var _gInfo_GInterpreter_command317 = Game_Interpreter.prototype.command317;
    Game_Interpreter.prototype.command317 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command317.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };
    // Change Skill
    var _gInfo_GInterpreter_command318 = Game_Interpreter.prototype.command318;
    Game_Interpreter.prototype.command318 = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable();
        var result = _gInfo_GInterpreter_command318.call(this);
        CommonPopupManager._popEnable = false;
        return result;
    };

    Game_Actor.prototype.addParam = function(paramId, value) {
        Game_BattlerBase.prototype.addParam.call(this, paramId, value);
        if (CommonPopupManager._popEnable) {
            if ($gameParty.inBattle() && !battleShowList.contains('params')){ return }
            CommonPopupManager.showInfo({
                'name' : TextManager.param(paramId),
                'value' : value > 0
            }, value, 'param',this.actorId());
        }
    };
    var _gInfo_GParty_gainGold = Game_Party.prototype.gainGold;
    Game_Party.prototype.gainGold = function(amount) {
        _gInfo_GParty_gainGold.call(this, amount);
        if (CommonPopupManager._popEnable) {
            if ($gameParty.inBattle() && !battleShowList.contains('gold')){ return }
            var hash = {
                'name' : '',
                'iconIndex' : goldIconIndex,
                'description' : '',
                'value' : Math.abs(amount)
            };
            CommonPopupManager.showInfo(hash, amount, 'gold');
        }
    };
    var _gInfo_GParty_gainItem = Game_Party.prototype.gainItem;
    Game_Party.prototype.gainItem = function(item, amount, includeEquip) {
        var result = _gInfo_GParty_gainItem.call(this, item, amount, includeEquip);
        if (CommonPopupManager._popEnable) {
            if (this.inBattle() && !battleShowList.contains('item')){ return }
            CommonPopupManager.showInfo(item, amount, 'item');
        }
        if (Imported.YEP_CoreEngine) return result;
    };
    
    var _gInfo_GActor_learnSkill = Game_Actor.prototype.learnSkill;
    Game_Actor.prototype.learnSkill = function(skillId) {
        var isLearn = this.isLearnedSkill(skillId);
        _gInfo_GActor_learnSkill.call(this, skillId);
        if (CommonPopupManager._popEnable && !isLearn) {
            if ($gameParty.inBattle() && !battleShowList.contains('skill')){ return }
            CommonPopupManager.showInfo($dataSkills[skillId], 1, 'skill', this.actorId());
        }
    };
    var _gInfo_GActor_forgetSkill = Game_Actor.prototype.forgetSkill;
    Game_Actor.prototype.forgetSkill = function(skillId) {
        var isLearn = this.isLearnedSkill(skillId);
        _gInfo_GActor_forgetSkill.call(this, skillId);
        if (CommonPopupManager._popEnable && isLearn) {
            if ($gameParty.inBattle() && !battleShowList.contains('skill')){ return }
            CommonPopupManager.showInfo($dataSkills[skillId], 2, 'skill', this.actorId());
        }
    };
    var _gInfo_GActor_changeExp = Game_Actor.prototype.changeExp;
    Game_Actor.prototype.changeExp = function(exp, show) {
        var tExp = exp - this.currentExp();
        var plevel = this.level;
        var pSkills = this._skills.clone();
        if (CommonPopupManager._popEnable) {
            if (!$gameParty.inBattle() || battleShowList.contains('exp')){
                CommonPopupManager.showInfo({
                    'name' : TextManager.exp,
                    'value' : tExp > 0
                }, tExp, 'exp', this.actorId());
            }
        }
        var tempEnable = CommonPopupManager._popEnable;
        CommonPopupManager._popEnable = false;
        _gInfo_GActor_changeExp.call(this, exp, show);
        CommonPopupManager._popEnable = tempEnable;
        if ((this.level - plevel) !== 0){
            var upLevel = this.level - plevel;
            if (CommonPopupManager._popEnable) {
                if ($gameParty.inBattle() && !battleShowList.contains('level')){ return }
                CommonPopupManager.showInfo({
                    'name' : TextManager.level,
                    'value' : upLevel > 0
                }, upLevel, 'level', this.actorId());
            }   
        }
        if (CommonPopupManager._popEnable) {
            this._skills.forEach(function(skillId){
                if (!pSkills.contains(skillId)){
                    CommonPopupManager.showInfo($dataSkills[skillId], 1, 'skill', this.actorId());
                }
            }.bind(this));
        }
    };
    
    var _gInfo_GActor_changeLevel = Game_Actor.prototype.changeLevel;
    Game_Actor.prototype.changeLevel = function(level, show) {
        var upLevel = level - this.level;
        var tempEnable = CommonPopupManager._popEnable;
        var pSkills = this._skills.clone();
        CommonPopupManager._popEnable = false;
        _gInfo_GActor_changeLevel.call(this, level, show);
        CommonPopupManager._popEnable = tempEnable;
        if (CommonPopupManager._popEnable) {
            if ($gameParty.inBattle() && !battleShowList.contains('level')){ return }
            CommonPopupManager.showInfo({
                'name' : TextManager.level,
                'value' : upLevel > 0
            }, upLevel, 'level', this.actorId());
            
            this._skills.forEach(function(skillId){
                if (!pSkills.contains(skillId)){
                    CommonPopupManager.showInfo($dataSkills[skillId], 1, 'skill', this.actorId());
                }
            }.bind(this));
        }
    };
    
    if (Imported['VXandAceHybridClass']){
        
        // Change Class Level
        var _gInfo_GInterpreter_changeClassLevel = Game_Interpreter.prototype.changeClassLevel;
        Game_Interpreter.prototype.changeClassLevel = function(actorId,level,show) {
            CommonPopupManager._popEnable = CommonPopupManager.popEnable();
            _gInfo_GInterpreter_changeClassLevel.call(this,actorId,level,show);
            CommonPopupManager._popEnable = false;
        };
        
        // Change Abp
        var _gInfo_GInterpreter_changeAbp = Game_Interpreter.prototype.changeAbp;
        Game_Interpreter.prototype.changeAbp = function(actorId,abp,show) {
            CommonPopupManager._popEnable = CommonPopupManager.popEnable();
            var result = _gInfo_GInterpreter_changeAbp.call(this,actorId,abp,show);
            CommonPopupManager._popEnable = false;
            return result;
        };
        
        var _gInfo_GActor_changeAbp = Game_Actor.prototype.changeAbp;
        Game_Actor.prototype.changeAbp = function(abp, show) {
            var tAbp = abp - this.currentAbp();
            var plevel = this.currentClassLevel();
            var pSkills = this._skills.clone();
            if (CommonPopupManager._popEnable) {
                if (!$gameParty.inBattle() || battleShowList.contains('abp')){
                    CommonPopupManager.showInfo({
                        'name' : TextManager.abp,
                        'value' : tAbp > 0
                    }, tAbp, 'abp', this.actorId());
                }
            }
            
            var tempEnable = CommonPopupManager._popEnable;
            CommonPopupManager._popEnable = false;
            
            _gInfo_GActor_changeAbp.call(this, abp, show);
            
            CommonPopupManager._popEnable = tempEnable;
            
            if ((this.currentClassLevel() - plevel) !== 0){
                var upLevel = this.currentClassLevel() - plevel;
                if (CommonPopupManager._popEnable) {
                    if ($gameParty.inBattle() && !battleShowList.contains('classLevel')){ return }
                    CommonPopupManager.showInfo({
                        'name' : TextManager.classLevel,
                        'value' : upLevel > 0
                    }, upLevel, 'classLevel', this.actorId(), this.currentClass().name);
                }   
            }
            if (CommonPopupManager._popEnable) {
                this._skills.forEach(function(skillId){
                    if (!pSkills.contains(skillId)){
                        CommonPopupManager.showInfo($dataSkills[skillId], 1, 'skill', this.actorId());
                    }
                }.bind(this));
            }
        };
        
        var _gInfo_GActor_changeClassLevel = Game_Actor.prototype.changeClassLevel;
        Game_Actor.prototype.changeClassLevel = function(level, show) {
            var upLevel = level - this.currentClassLevel();
            var tempEnable = CommonPopupManager._popEnable;
            var pSkills = this._skills.clone();
            CommonPopupManager._popEnable = false;
            _gInfo_GActor_changeClassLevel.call(this, level, show);
            CommonPopupManager._popEnable = tempEnable;
            if (CommonPopupManager._popEnable) {
                if ($gameParty.inBattle() && !battleShowList.contains('classLevel')){ return }
                CommonPopupManager.showInfo({
                    'name' : TextManager.classLevel,
                    'value' : upLevel > 0
                }, upLevel, 'classLevel', this.actorId(), this.currentClass().name);
                
                this._skills.forEach(function(skillId){
                    if (!pSkills.contains(skillId)){
                        CommonPopupManager.showInfo($dataSkills[skillId], 1, 'skill', this.actorId());
                    }
                }.bind(this));
            }   
        };
    }

    var __BManager_displayRewards = BattleManager.displayRewards;
    BattleManager.displayRewards = function () {
        __BManager_displayRewards.call(this);
        if (Imported['BattleFormation']) {
            $gameTemp._popupDelay = rewardPopupDelay;
            var upLevel = this._upBfLevel;
            var item = $gameParty.battleFormation();
            if (CommonPopupManager.popEnable() && item) {
                if ($gameParty.inBattle() && !battleShowList.contains('formationLevel')) return;
                if ($gameParty.isMaxBfLevel(item.id)) {
                    CommonPopupManager.showInfo({
                        'name': item.name,
                        'iconIndex': item.iconIndex,
                        'value': 'max'
                    }, upLevel, 'formationLevel', null, null);
                } else {
                    CommonPopupManager.showInfo({
                        'name': item.name,
                        'iconIndex': item.iconIndex,
                        'value': upLevel > 0
                    }, upLevel, 'formationLevel', null, null);
                }
            }
            $gameTemp._popupDelay = 0;
        }
    };

    CommonPopupManager.showInfo = function(object, value, type, actor, c) {
        var text1 = null;
        if (value === 0) { return }
        var se = {name:'',volume:90,pitch:100,pan:0};
        switch(type) {
            case 'gold':
                text1 = getGoldText;
                if (value < 0) {
                    text1 = lostGoldText
                }
                break;
            case 'item':
                text1 = getInfoText;
                if (value > 1) {
                    text1 = getInfoTextNum
                } else if (value === -1) {
                    text1 = lostInfoText
                } else if (value < -1) {
                    text1 = lostInfoTextNum
                }
                break;
            case 'exp':
                text1 = object.value ? ExpUpText : ExpDownText;
                break;
            case 'level':
                text1 = object.value ? lvUpText : lvDownText;
                break;
            case 'abp':
                text1 = object.value ? abpUpText : abpDownText;
                break;
            case 'classLevel':
                text1 = object.value ? clvUpText : clvDownText;
                break;
            case 'param':
                text1 = object.value ? ParamUpText : ParamDownText;
                break;
            case 'skill':
                text1 = value === 1 ? getInfoSkillText : lostInfoSkillText;
                break;
            case 'formationLevel':
                text1 = object.value === 'max' ? fLvMaxText : fLvUpText;
                break;
            default :
                text1 = value;
        }
        if (text1 === '') return;
        if (text1 === 'null') return;
        text1 = text1.replace(/^_se\[(.+?)\]/i,function(){
            var tx = arguments[1].split(',');
            se.name = tx[0];
            if (tx[1]) se.volume = parseInt(tx[1], 10);
            if (tx[2]) se.pitch = parseInt(tx[2], 10);
            if (tx[3]) se.pan = parseInt(tx[3], 10);
            return '';
        }.bind(this));
        var descs = object.description ? object.description.split(/\n/) : [];
        if (actor) {
            actor = $gameActors.actor(actor);
            text1 = text1.replace(/_actor/g, actor.name());
            text1 = text1.replace(/_aicon/g, actor.actorId()+actorIconStartIndex-1);
        }
        if (c) { text1 = text1.replace(/_class/g, c) }
        text1 = text1.replace(/_name/g, object.name);
        text1 = text1.replace(/_icon/g, object.iconIndex);
        text1 = text1.replace(/_num/g, Math.abs(value));
        text1 = descs[0] ? text1.replace(/_desc1/g, descs[0]) : text1.replace(/_desc1/g, '');
        text1 = descs[1] ? text1.replace(/_desc2/g, descs[1]) : text1.replace(/_desc2/g, '');
        var texts = text1.split(/\n|\\n/);
        for (var i = 0; i < texts.length; i++) {
            var text = texts[i].replace(/\\C\[\d+\]/g, '');
            if (text === '') { delete texts[i] }
        }
        texts = texts.compact();
        var oneHeight = (infoFontSize + 8)
        var height = oneHeight * texts.length;
        var bitmap = new Bitmap(Graphics.boxWidth, height);
        bitmap.fillRect(0, 0, infoWidth / 2, bitmap.height, 'rgba(0,0,0,0.5)');
        bitmap.gradientFillRect(infoWidth / 2, 0, infoWidth / 2, bitmap.height, 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)');
        this.window().contents = bitmap;
        this.window().drawTextEx('\\FS[' + infoFontSize + ']', 0, 0);
        for (var i = 0; i < texts.length; i++) {
            var text = '\\FS[' + infoFontSize + ']' + texts[i]
            this.window().drawTextEx(text, 8, i * oneHeight);
        }
        var arg = this.setPopup([]);
        arg.bitmap = bitmap;
        arg.se = se;
        if (infoPattern === 'GrowUp') {
            arg.x = 0 + infoSupX;//Graphics.boxWidth * -1 + infoSupX;
            arg.y = Graphics.boxHeight;// - height;
            arg.moveX = 0;//Graphics.boxWidth;
            arg.anchorX = 0;
            arg.anchorY = 1.0;
            arg.pattern = -2;
            if (infoSlideAction === 'Down') arg.anchorY = 0;
        } else if (infoPattern === 'Stretch'){
            arg.x = 0 + infoSupX;
            arg.y = Graphics.boxHeight - height;
            arg.moveX = 0;
            arg.anchorX = 0;
            arg.anchorY = 0;
            arg.pattern = -1;
        } else {
            arg.x = Graphics.boxWidth * -1 + infoSupX;
            arg.y = Graphics.boxHeight - height;
            arg.moveX = Graphics.boxWidth;
            arg.anchorX = 0;
            arg.anchorY = 0;
        }
        if (infoPosition === 'Up') {
            arg.y = 0;
            if (infoPattern === 'GrowUp' && infoSlideAction !== 'Down') arg.y = height;
        }
        arg.y += infoSupY;
        if ($gameParty.inBattle() && (SceneManager._scene._messageWindow && SceneManager._scene._messageWindow.active)) {
            if (SceneManager._scene._messageWindow._positionType === 2) {
                var my = SceneManager._scene._messageWindow.y;
                arg.y = Math.min(arg.y, my - height + height * arg.anchorY);
            }
        }
        if ((SceneManager._scene._statusWindow && SceneManager._scene._statusWindow.isOpen())){
            var sy = SceneManager._scene._statusWindow.y;
            arg.y = Math.min(arg.y,sy - height +  height * arg.anchorY);
        }
        arg.moveY = 0;
        arg.count = infoCount;
        arg.fixed = false;
        arg.extend = [infoMoveFade,infoMoveWait];
        arg.slideCount = infoSlideCount;
        arg.delay = 0;
        arg.slideAction = infoSlideAction;
        if (!CommonPopupManager._tempCommonSprites) CommonPopupManager._tempCommonSprites = [];
        var array = CommonPopupManager._tempCommonSprites.compact();
        var ld = CommonPopupManager._lastIndex;
        if (ld !== undefined && ld >= 0 && array[ld]){
            array.sort(function(a,b){ return a.delay > b.delay ? -1 : 1 });
            arg.delay = array[0].delay + infoDelay;
        }
        if ($gameTemp._popupDelay && arg.delay === 0) arg.delay += $gameTemp._popupDelay;
        CommonPopupManager._lastIndex = this._tempCommonSprites.setNullPos(arg);
    };

    var _gInfo_BManager_gainRewards = BattleManager.gainRewards;
    BattleManager.gainRewards = function() {
        CommonPopupManager._popEnable = CommonPopupManager.popEnable() && useRewardsInfo;
        $gameTemp._popupDelay = rewardPopupDelay;
        _gInfo_BManager_gainRewards.call(this);
        CommonPopupManager._popEnable = false;
        $gameTemp._popupDelay = 0;
    };
})();
