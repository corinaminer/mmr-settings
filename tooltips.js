export const gameplaySettingTooltips = {
  "LogicMode": `Select mode of logic:
 - Casual: The randomization logic ensures that the game can be beaten casually.
 - Glitched: The randomization logic allows for placement of items that are only obtainable using known glitches.
 - Vanilla Layout: All items are left vanilla.
 - User Logic: Upload your own custom logic to be used in the randomization.
 - No Logic: Completely random, no guarantee the game is beatable. Uses Glitched logic with all tricks enabled for HTML tracker and Blitz junk location calculation.`,
  "AddSongs": "Enable songs being placed among items in the randomization pool.",
  "ProgressiveUpgrades": "Enable swords, wallets, magic, bomb bags, quivers and the Goron Lullaby to be found in the intended order.",
  "RandomizeDungeonEntrances": `Enable randomization of dungeon entrances. 

Stone Tower Temple is always vanilla, but Inverted Stone Tower Temple is randomized.`,
  "RandomizeBossRooms": "Enable randomization of boss rooms. The boss door texture will match the boss behind the door.",
  "RandomizeEnemies": "Enable randomization of enemies. May cause softlocks in some circumstances, use at your own risk.",
  "DamageMode": `Select a damage mode, affecting how much damage Link takes:

 - Default: Link takes normal damage.
 - 2x: Link takes double damage.
 - 4x: Link takes quadruple damage.
 - 1-hit KO: Any damage kills Link.
 - Doom: Hardcore mode. Link's hearts are slowly being drained continuously.`,
  "DamageEffect": `Select an effect to occur whenever Link is being damaged:

 - Default: Vanilla effects occur.
 - Fire: All damage burns Link.
 - Ice: All damage freezes Link.
 - Shock: All damage shocks link.
 - Knockdown: All damage knocks Link down.
 - Random: Any random effect of the above.`,
  "MovementMode": `Select a movement modifier:

 - Default: No movement modifier.
 - High speed: Link moves at a much higher velocity.
 - Super low gravity: Link can jump very high.
 - Low gravity: Link can jump high.
 - High gravity: Link can barely jump.`,
  "NutandStickDrops": `Adds Deku nuts and Deku sticks to drop tables in the field:

 - Default: No change, vanilla behavior.
 - Light: one stick and nut 1/16 chance termina bush.
 - Medium: More nuts, twice the chance
 - Extra: More sticks, more nuts, more drop locations.
 - Mayhem: You're crazy in the coconut!`,
  "ChestGameMinimap": `Draws a minimap during the Treasure Chest Game if you have the Map of Clock Town:

 - Off: No minimap, default vanilla behaviour.
 - Minimal: Minimap is displayed, blocks appear on minimap when triggered.
 - Conditional Spoiler: Minimal behaviour, and if the Mask of Truth is aquired along with Map of Clock Town, spoil the maze layout.
 - Spoiler: Only Map of Clock Town needed to spoil the maze layout.`,
  "FloorType": `Select a floortype for every floor ingame:

 - Default: Vanilla floortypes.
 - Sand: Link sinks slowly into every floor, affecting movement speed.
 - Ice: Every floor is slippery.
 - Snow: Similar to sand. 
 - Random: Any random floortypes of the above.`,
  "ClockSpeed": "Modify the speed of time.",
  "AutoInvert": "Auto-invert time at the start of a cycle.",
  "HideClock": "Clock UI will be hidden.",
  // TODO: Add ItemPlacement description. Not sure what it is - has options Random, Bespoke, or Classic.
  "StartingItemMode": `Select a starting item mode:

 - None: You will not start with any randomized starting items.
 - Random: You will start with randomized starting items.
 - Allow Temporary Items: You will start with randomized starting items including Keg, Magic Bean and Bottles with X.`,
  // TODO: this is a "Flags" enum
  "SmallKeyMode": `Select a Small Key mode:

 - Default: Unrestricted Small Key locations.
 - DoorsOpen: Small Key doors will always be open. Small Keys in the item pool will be replaced with other items. Other item placement restrictions will apply to the replacements too.
 - KeepWithinTemples: Randomization algorithm will place any randomized Small Keys into any temple.
 - KeepWithinArea: Randomization algorithm will place any randomized Small Keys into a location in or near the temple they're used in.
 - KeepWithinOverworld: Randomization algorithm will place any randomized Small Keys into an overworld location.
 - KeepThroughTime: Small Keys will go back in time with Link. Any used Small Keys will return to Link's inventory.`,
  // TODO: this is a "Flags" enum
  "BossKeyMode": `Select a Boss Key mode:

 - Default: Unrestricted Boss Key locations.
 - DoorsOpen: Boss Key doors will always be open. Boss Keys in the item pool will be replaced with other items. Other item placement restrictions will apply to the replacements too.
 - GreatFairyRewards: Boss Keys will be placed on the reward for collecting 15 stray fairies of their dungeon. Great Fairy Rewards must be randomized for this to take effect.
 - KeepWithinTemples: Randomization algorithm will place any randomized Boss Keys into any temple.
 - KeepWithinArea: Randomization algorithm will place any randomized Boss Keys into a location in or near the temple it's used in.
 - KeepWithinOverworld: Randomization algorithm will place any randomized Boss Keys into an overworld location.
 - KeepThroughTime: Boss Keys will go back in time with Link.`,
  // TODO: this is a "Flags" enum
  "StrayFairyMode": `Select a Stray Fairy mode:

 - Default: Unrestricted Stray Fairy locations.
 - ChestsOnly: Stray Fairies in the item pool will be replaced with other items. Other item placement restrictions will apply to the replacements too. Non-chest fairies (roaming, bubbles, beehives, etc.) are removed. Chests that ordinarily have a Stray Fairy will behave like normal chests.
 - KeepWithinTemples: Randomization algorithm will place any randomized Stray Fairies into any temple.
 - KeepWithinArea: Randomization algorithm will place any randomized Stray Fairies into a location in or near the fairy fountain they originate from.
 - KeepWithinOverworld: Randomization algorithm will place any randomized Stray Fairies into an overworld location.`,
  // TODO: this is a "Flags" enum
  "BossRemainsMode": `Select a Boss Remains mode:

 - Default: Unrestricted Boss Remains locations.
 - GreatFairyRewards: Boss Remains will be placed on the reward for collecting 15 stray fairies of their dungeon. Great Fairy Rewards must be randomized for this to take effect.
 - ShuffleOnly: Boss Remains will be shuffled among each other. You still need to randomize them in the Item Randomization tab.
 - KeepWithinTemples: Randomization algorithm will place any randomized Boss Remains into any temple.
 - KeepWithinArea: Randomization algorithm will place any randomized Boss Remains into a location in or near the temple its boss is in.
 - KeepWithinOverworld: Randomization algorithm will place any randomized Boss Remains into an overworld location.
 - Blitz1: Start with 1 random boss remains. Locations in and after the temple with that boss will be forced to be junk.
 - Blitz2: Start with 2 random boss remains. Locations in and after the temples with those bosses will be forced to be junk.
 - Blitz3: Start with 3 random boss remains. Locations in and after the temples with those bosses will be forced to be junk.
 - Blitz4: Start with all boss remains. Locations in and after temples will be forced to be junk.`,
  // TODO this is a "Flags" enum. Should be a checklist with some internal logic (e.g. i think None is mutually exclusive everything else)
  "PriceMode": `Select a price mode:

 - None: Vanilla prices.
 - Purchases: Prices for item purchases will be randomized.
 - Minigames: Prices for minigames will be randomized.
 - Misc: Prices for other miscellaneous spending will be randomized.
 - AccountForRoyalWallet: Price randomization will range from 1-999 instead of 1-500. Any shuffled or non-randomized price will double.
 - ShuffleOnly: Prices will only be shuffled among each other. Must enable Purchases, Minigames or Misc for this setting to have any effect.`,
  // TODO: this is a "Flags" enum
  "DungeonNavigationMode": `Select a dungeon navigation mode:

 - Default: Unrestricted Dungeon Maps and Compasses placement.
 - KeepWithinTemples: Randomization algorithm will place any randomized Dungeon Maps and Compasses into any temple.
 - KeepWithinArea: Randomization algorithm will place any randomized Dungeon Maps and Compasses into a location in or near the temple they're for.
 - KeepWithinOverworld: Randomization algorithm will place any randomized Dungeon Maps and Compasses into an overworld location.
 - MapRevealsLocation: Finding a Dungeon Map will tell you the location of the dungeon.
 - CompassRevealsBoss: Finding a Compass will tell you which boss is in the dungeon.`,
  // TODO this is a "Flags" enum. Should be a checklist with some internal logic (e.g. i think Default is mutually exclusive everything else)
  "VictoryMode": `Select a victory mode:

 - Default: Have all 4 boss remains.
 - DirectToCredits: Once the custom victory condition(s) is/are fulfilled, begin the credits as soon as possible. Otherwise, you must fulfill the condition(s) and then defeat Majora.
 - CantFightMajora: When enabled, speaking to the Moon Child who is wearing Majora's Mask will send you back in time if you haven't fufilled the victory condition(s). When disabled, defeating Majora will send you back in time if you haven't fulfilled the victory condition(s).
 - Fairies: Have 15 of each dungeon stray fairy.
 - SkullTokens: Have 30 of each type of skulltula token.
 - NonTransformationMasks: Have all 20 non-transformation masks.
 - TransformationMasks: Have all 4 transformation masks.
 - Notebook: Have all the notebook entries.
 - Hearts: Have all 20 hearts.
 - OneBossRemains: Have one of the boss remains. Only the highest boss remain victory condition enabled will be used.
 - TwoBossRemains: Have two of the boss remains. Only the highest boss remain victory condition enabled will be used.
 - ThreeBossRemains: Have three of the boss remains. Only the highest boss remain victory condition enabled will be used.
 - FourBossRemains: Have all the boss remains. Only the highest boss remain victory condition enabled will be used.`,
  "RequiredBossRemains": "Set the number of Boss Remains required to proceed through the final Giants cutscene.",
  "BlastMaskCooldown": "Adjust the cooldown timer after using the Blast Mask.",
  "TrapAmount": "Amount of ice traps to be added to pool by replacing junk items.",
  // TODO add trap weightings to form
  "TrapWeightings": "How much to weigh each type of trap when randomizing which one to use.",
  "TrapAppearance": "Appearance of ice traps in pool for world models.",
  "EnableSunsSong": "Enable using the Sun's Song, which speeds up time to 400 units per frame (normal time speed is 3 units per frame) until dawn or dusk or a loading zone.",
  "OcarinaUnderwater": "Enable using the ocarina underwater.",
  "AllowFierceDeityAnywhere": "Allow the Fierce Deity's Mask to be used anywhere. Also addresses some softlocks caused by Fierce Deity.",
  "ByoAmmo": "Arrows, Bombs, and Bombchu will not be provided for minigames. You must bring your own. Logic Modes other than No Logic will account for this.",
  "DeathMoonCrash": "Dying causes the moon to crash, with all that that implies.",
  "FewerHealthDrops": "Recovery Hearts will not drop, and re-acquiring random items will turn into Green Rupees instead. Fairies will not heal except on death.",
  "ContinuousDekuHopping": "Press A while hopping across water to keep hopping.",
  "IronGoron": "Goron Link will sink in water instead of drowning.",
  "HookshotAnySurface": "Hookshot can hook to any surface.",
  "ClimbMostSurfaces": "Link can climb most surfaces.",
  "TrapQuirks": "Ice traps will behave slightly differently from other items in certain situations.",
  "InstantTransform": "Transforming using Deku Mask, Goron Mask, Zora Mask and Fierce Deity's Mask will be almost instant. These items can no longer be used as \"cutscene items\".",
  "BombArrows": "Use a bomb while an arrow is out when using the bow to attach the bomb to the tip of the arrow.",
  "VanillaMoonTrialAccess": "Entering the trials on the Moon will require masks, as per the vanilla behavior, but this is not considered by logic. Without this enabled, the trials will not require any masks to enter.",
  "GiantMaskAnywhere": "Allows the Giant's Mask to be used anywhere with a high enough (or no) ceiling.",
  "QuickTextEnabled": "Enable quick text. Dialogs are fast-forwarded to choices/end of dialog.",
  "FreeHints": "Enable reading gossip stone hints without requiring the Mask of Truth.",
  "FreeGaroHints": "Enable fighting Garos by speaking to Tatl instead of wearing the Garo's Mask.",
  "TolerantGossipStones": "The angle at which Gossip Stones can be read will be more tolerant.",
  "EasyFrameByFrame": "Hold Start while unpausing to pause again after one frame passes.",
  "MixGossipAndGaroHints": "Garo hints distribution and gossip hint distribution will be mixed together.",
  "ClearHints": "Gossip stone hints will give clear item and location names.",
  "ClearGaroHints": "Garo hints will give clear item and location names.",
  "HintsIndicateImportance": "Location hints indicate the importance of the item.",
  "PreventDowngrades": "Downgrading items will be prevented.",
  "UpdateShopAppearance": "Shops models and text will be updated to match the item they give.",
  "UpdateChests": "Chest appearance will be updated to match the item they contain.",
  "UpdateNPCText": "NPC text that refers to items and their locations will be updated.",
  "FixEponaSword": `Change Epona's B button behavior to prevent you from losing your sword if you don't have a bow.
May affect vanilla glitches that use Epona's B button.`,
  "DrawHash": "Draw hash icons on the File Select screen.",
  "QuestItemStorage": "Enable Quest Item Storage, which allows for storing multiple quest items in their dedicated inventory slot. Quest items will also always be consumed when used.",
  "KeepQuestTradeThroughTime": "Quest items will return to your inventory after Song of Time.",
  "CritWiggleDisable": "Disable crit wiggle movement modification when 1 heart of health or less.",
  "Character": "Select a character model to replace Link's default model.",
  "TatlColorSchema": "Select a color scheme to replace Tatl's default color scheme.",
  "GossipHintStyle": `Select a Gossip Stone hint style:

 - Default: Vanilla Gossip Stone hints.
 - Random: Hints will contain locations of random items.
 - Relevant: Hints will contain locations of items loosely related to the vanilla hint or the area.
 - Competitive: Guaranteed hints about time-consuming checks, and hints regarding importance or non-importance of regions.`,
  "GaroHintStyle": `Select a Garo hint style:

 - Default: Vanilla Garo hints.
 - Random: Hints will contain locations of random items.
 - Relevant: Hints will contain locations of items loosely related to the vanilla hint or the area.
 - Competitive: Guaranteed hints about time-consuming checks, and hints regarding importance or non-importance of regions.`,
  "SpeedupBeavers": "Modify Beavers to not have to race the younger beaver.",
  "SpeedupDampe": "Change Dampe ghost flames to always have two on the ground floor and one up the ladder.",
  "SpeedupDogRace": "Make Gold Dog always win if you have the Mask of Truth.",
  "SpeedupLabFish": "Change Lab Fish to only need to be fed one fish.",
  "SpeedupBank": "Change the Bank reward thresholds to 200/500/1000 instead of 200/1000/5000. Also reduces maximum bank capacity from 5000 to 1000.",
  "DoubleArcheryRewards": "Grant both archery rewards with a sufficient score.",
  "SpeedupBabyCuccos": "Makes the location of baby cuccos show on the minimap.",
  "FastPush": "Increase the speed of pushing and pulling blocks and faucets.",
  "UpdateWorldModels": "Show world models as their actual item instead of the original item. This includes Pieces of Heart, Heart Containers, Skulltula Tokens, Stray Fairies, Moon's Tear and the Seahorse.",
  "EnablePictoboxSubject": "Display extra text showing which type of picture was captured by the Pictobox.",
  "LenientGoronSpikes": "Goron spikes can charge midair and keep their charge. Minimum speed for goron spikes is removed.",
  "TargetHealthBar": "Targeting an enemy shows their health bar.",
  "FreeScarecrow": "Spawn scarecrow automatically when using ocarina if within range.",
  "FillWallet": "Fills wallet with max rupees upon finding a wallet upgrade.",
  "HiddenRupeesSparkle": "Hit Tags and Invisible Rupees will emit a sparkle.",
  "SaferGlitches": `Makes it safer to use glitches:
 - Prevents HESS crash
 - Prevents Weirdshot crash
 - Prevents Action Swap crash
 - Prevents Song of Double Time softlock during 0th or 4th day
 - Prevents Tatl text softlock on 0th of 4th day
 - Prevents 0th day file deletion
 - Prevents hookslide crash
 - Prevents softlocks when using Remote Hookshot
 - Prevents 0th day Goron Bow crash
 - Applies safety fixes for Fierce Deity even if Fierce Deity Anywhere is not enabled
 - Index warp no longer crashes or softlocks (but you won't be able to use it to access the Debug Menu)
 - Prevents softlocks when interrupting mask transformations
 - Mayor is removed on 4th day
 - Deku Playground Employees are removed on 4th day
 - Prevents Gossip Stone time from crashing on 4th day
 - Prevents Town Shooting Gallery from crashing on 0th day and 4th day`,
  "ImprovedCamera": "Improves the responsiveness of the controls with relation to the direction the camera is facing.",
  "BombchuDrops": "If you have found Bombchu, then any random Bomb drop or fixed non-randomized Bomb drop will have a chance to drop Bombchu instead. Where relevant, Bombchu packs of 1 and 5 will be in logic in addition to packs of 10.",
  "FairyMaskShimmer": "Nearby stray fairies, even randomized ones, will cause the Great Fairy Mask to shimmer.",
  "SkulltulaTokenSounds": "Nearby skulltula tokens, even randomized ones, will emit a spider crawling sound.",
  "ArrowCycling": "Cycle through arrow types when pressing R while an arrow is out when using the bow.",
  "CloseCows": "When playing Epona's Song for a group of cows, the closest cow will respond, instead of the default behavior.",
  "ElegySpeedup": "Applies various Elegy of Emptiness speedups.",

  // TODO: Support these settings in form
  "TakeDamageOnEpona": "Instead of being immune to damage while riding Epona, Link will take damage and be thrown off.",
  "TakeDamageWhileShielding": "Link will take damage when being hit on his shield, and can't recoil off damage to the shield.",
  "TakeDamageFromVoid": "Link will take damage when falling into most voids. Voids that have a specific destination will not deal damage.",
  "TakeDamageFromGorons": "Link will take damage when being hit by Gorons during the Goron Race.",
  "TakeDamageFromGibdosFaster": "Gibdos will deal damage immediately after grabbing Link.",
  "TakeDamageGettingCaught": "Getting thrown out after being caught by guards will deal damage. Being thrown out after getting the reward from the Imprisoned Monkey will not deal damage.",
  "TakeDamageFromDog": "Dogs will damage Deku Link.",
  "TakeDamageFromDexihands": "Link will take damage from Dexihands.",
  "OverrideNumberOfRequiredGossipHints": "Set the number of Way of the Hero hints that will appear on Gossip Stones.",
  "OverrideNumberOfNonRequiredGossipHints": "Set the number of Foolish hints that will appear on Gossip Stones.",
  "OverrideMaxNumberOfClockTownGossipHints": "Set the maximum number of Way of the Hero / Foolish hints on Gossip Stones that can be for a Clock Town region (including Laundry Pool).",
  "OverrideNumberOfRequiredGaroHints": "Set the number of Way of the Hero hints that will appear on Garos.",
  "OverrideNumberOfNonRequiredGaroHints": "Set the number of Foolish hints that will appear on Garos.",
  "OverrideMaxNumberOfClockTownGaroHints": "Set the maximum number of Way of the Hero / Foolish hints on Garos that can be for a Clock Town region (including Laundry Pool)."
};

export const itemCatTooltips = {
  "MainInventory": "Randomize items on the main inventory screen other than trade items. Also includes Bombers' Notebook, Swords, Mirror Shield and Wallets.",
  "Songs": "Randomize songs except Song of Soaring.",
  "SongOfSoaring": "Randomize the Song of Soaring.",
  "HeartContainers": "Randomize Heart Containers.",
  "BossRemains": "Randomize Boss Remains.",
  "PiecesOfHeart": "Randomize Pieces of Heart.",
  "Masks": "Randomize Masks.",
  "TradeItems": "Randomize Moon's Tear, Title Deeds, Letter to Kafei, Pendant of Memories, Room Key and Letter to Mama.",
  "Navigation": "Randomize Dungeon Maps/Compasses and overworld maps.",
  "MagicPowers": "Randomize non-item Great Fairy rewards including Magic Power, Great Spin Attack, Extended Magic Power and Double Defense.",
  "SkulltulaTokens": "Randomize golden skulltula tokens. Tokens will not reset to 0 after Song of Time.",
  "StrayFairies": "Randomize stray fairies including the Clock Town stray fairy. Stray fairies will not reset to 0 after Song of Time.",
  "DungeonKeys": "Randomize small keys and boss keys.",
  "GoldRupees": "Randomize Gold Rupees.",
  "SilverRupees": "Randomize Silver Rupees.",
  "PurpleRupees": "Randomize Purple Rupees.",
  "RedRupees": "Randomize Red Rupees.",
  "BlueRupees": "Randomize Blue Rupees.",
  "GreenRupees": "Randomize Green Rupees.",
  "RecoveryHearts": "Randomize the recovery hearts in Pirates' Fortress.",
  "MagicJars": "Randomize large and small magic jars.",
  "Shields": "Randomize Hero's Shields.",
  "Bombchu": "Randomize Bombchu.",
  "Arrows": "Randomize Arrows.",
  "Bombs": "Randomize Bombs.",
  "DekuNuts": "Randomize Deku Nuts.",
  "DekuSticks": "Randomize Deku Sticks.",
  "Milk": "Randomize Milk.",
  "RedPotions": "Randomize Red Potions.",
  "GreenPotions": "Randomize Green Potions.",
  "BluePotions": "Randomize Blue Potions.",
  "Chateau": "Randomize the Chateau refill. Bottle with Chateau Romani is part of Main Inventory.",
  "Seahorse": "Randomize the Seahorse.",
  "Fairy": "Randomize the Fairy purchase in the Trading Post.",
  "ScoopedItems": "Randomize bottle scoops.",
  "NotebookEntries": "Randomize Bombers' Notebook entries.",
  "Frogs": "Randomize the frog choir members.",
  "TimeTravel": "Randomize Ocarina and Song of Time.",
  "RoyalWallet": "Add the Royal Wallet to the item pool."
};

export const locCatTooltips = {
  "Chests": "Randomize chests that don't fit into the other categories.",
  "NpcRewards": "Randomize items rewarded by NPCs except Minigames.",
  "Freestanding": "Randomize freestanding items.",
  "Purchases": "Randomize purchases including shops, scrubs, tingle, bean man, milk bar and Gorman Bros.",
  "StartingItems": "Randomize starting items.",
  "Minigames": "Randomize items rewarded from minigames.",
  "BossFights": "Randomize items earned by fighting bosses/minibosses.",
  "MoonItems": "Randomize items on The Moon.",
  "EnemySpawn": "Randomize items spawned by enemies including freestanding Golden Skulltulas, enemies that normally spawn Stray Fairies and Takkuri.",
  "Grass": "Randomize fixed dropped from grass. Only Keaton Grass and grass such as that near owl statues drop fixed items.",
  "Jars": "Randomize fixed drops from jars including small jars and green jars.",
  "Crates": "Randomize fixed drops from small and large crates.",
  "SmallSnowballs": "Randomize fixed drops from small snowballs.",
  "LargeSnowballs": "Randomize fixed drops from large snowballs.",
  "Barrels": "Randomize fixed drops from barrels. This includes items that already exist within barrels before they're destroyed.",
  "Beehives": "Randomize fixed drops from beehives.",
  "InvisibleItems": "Randomize invisible items.",
  "Events": "Randomize items spawned by events including the Moon's Tear, the Sword School Gong, the Song Wall in Termina Field, the Telescope Guay and the Termina Field circling Guay.",
  "SoftSoil": "Randomize items from soft soil.",
  "HitSpots": "Randomize items dropped by hitting specific spots in the game.",
  "Rocks": "Randomize fixed drops from rocks. Only rocks on walls drop fixed items. Also includes the item within the Red Rock in Mountain Village spring time.",
  "Scoops": "Randomize bottle scoops.",
  "NotebookEntries": "Randomize Bombers' Notebook entries.",
  "Fairies": "Randomize fairies summoned at Gossip Stones and free floating fairies.",
  "Butterflies": "Randomize fairies that transform from butterflies.",
  "Frogs": "Randomize the frog choir members.",
  "GlitchesRequired": "Randomize items that require glitches to collect."
};

export const classicCatTooltips = {
  "BaseItemPool": "Randomize the base set of items.",
  "SongOfSoaring": "Randomize the Song of Soaring.",
  "DungeonItems": "Enable keys, boss keys, maps and compasses being placed in the randomization pool.",
  "ShopItems": "Enable shop items being placed in the randomization pool.",
  "CaughtBottleContents": "Enable captured bottle contents being randomized.",
  "CowMilk": "Enable randomization of cow milk.",
  "MoonItems": "Enable moon items being placed in the randomization pool. Includes the four Moon Trial Heart Pieces, Fierce Deity's Mask and the two Link Trial chests.",
  "GreatFairyRewards": "Enable great fairy rewards being placed in the randomization pool. Includes Magic Power, Great Spin Attack, Extended Magic Power, Double Defense, Great Fairy's Sword and Great Fairy's Mask.",
  // TODO: Better description of mundane rewards. GUI says "See Help > Manual (F1) > Shuffles for details.".
  "MundaneRewards": "Enable randomization of mundane rewards.",
  "SkulltulaTokens": "Enable randomization of golden skulltula tokens. Tokens will not reset to 0 after Song of Time.",
  "StrayFairies": "Enable randomization of stray fairies. Stray fairies will not reset to 0 after Song of Time.",
  "CrazyStartingItems": "Enable randomization of starting Sword, Shield, and two Heart Containers.",
  "EverythingElse": "Enable miscellaneous items being placed in the randomization pool. Among the miscellaneous items are: Freestanding heartpieces, overworld chests, (hidden) grotto chests, Tingle's maps and bank heartpiece.",
  "GlitchesRequired": "Enable randomization of locations that require glitches, such as the pre-clocktown deku nut chest and the out of bounds deku palace rupee.",
  "FreestandingRupees": "Randomize freestanding rupees.",
  "FixedMinorItemDrops": "Randomize fixed minor item drops.",
  "HiddenRupees": "Randomize invisible rupees and hit tags.",
  "SoftSoil": "Randomize items from soft soil.",
  "BossRemains": "Randomize the boss remains.",
  "NotebookEntries": "Randomize Bombers' Notebook entries.",
  "Fairies": "Randomize fairies summoned at Gossip Stones and free floating fairies.",
  "Butterflies": "Randomize fairies that transform from butterflies.",
  "Frogs": "Randomize the frog choir members.",
  "RoyalWallet": "Add the Royal Wallet (999 capacity) to the item pool.",
  "OcarinaAndSongOfTime": "Randomize the Ocarina of Time and the Song of Time."
};

export const cutsceneTooltips = {
  // General cutscenes
  "BlastMaskThief": "You don't have to wait for Sakon to leave.",
  "BoatArchery": "The minigame will end as soon as you have the required 20 points.",
  "FishermanGame": "The minigame will end as soon as you have the required 20 points.",
  "MilkBarPerformance": "Replaying of the music is shortened.",
  "HungryGoron": "The Hungry Goron doesn't interrupt you when you approach, and you don't have to watch him roll away.",
  "TatlInterrupts": "Remove most instances of Tatl interrupting your gameplay.",
  "FasterBankText": "Skips the irrelevant bank text. Allows using Z/R to set deposit/withdraw amount to min/max.",
  "GoronVillageOwl": "The owl in Goron Village will no longer trigger dialog when you approach. You must target it and talk to it if you want it to reveal the path.",
  "AutomaticCredits": "The dialog of the credits will proceed automatically.",
  "PrincessDelivery": "The cutscene when delivering the Deku Princess will be skipped.",
  "ShortChestOpening": "All chests will open using the short animation.",
  "SunMask": "Shorten various aspects of recovering the Sun Mask.",
  "Tingle": "You don't have to watch Tingle fall, and his text is shortened.",
  "JimRunning": "You don't have to watch Jim run away after using the Bombers' code.",
  "Kotake": "You don't have to watch Kotake fly into the woods, and don't have to watch her fly away after giving you an item.",
  "HoldAText": "Hold A to automatically advance text.",
  "EverythingElse": "Various cutscenes are skipped or otherwise shortened.",
  // Boss intro cutscenes
  "Odolwa": "Odolwa is ready to fight you right away.",
  "Goht": "Link doesn't look around in surprise when you enter Goht's room.",
  "Gyorg": "Gyorg is ready to fight you right away.",
  "Twinmold": "Twinmold is ready to fight you right away.",
  "Majora": "Majora is ready to fight you right away.",
  "Wart": "You don't have to look at Wart to get him down from the ceiling. It spawns on the ground.",
  "IgosDuIkana": "Igos du Ikana and his henchmen are ready to fight you right away.",
  "Gomess": "Gomess and his bats are ready to fight you right away."
};

export const trickTooltips = {
  "Exit OSH Without Goron": "Backwalk up the slope to exit.",
  "Lensless Chests": "Open invisible chests without the Lens of Truth; there is one in Lens Cave, Mountain Village, and Beneath the Well.",
  "Day 2 Grave Without Lens of Truth": "Pass the false wall into Day 2 Grave, and cross the section with the invisible floor without Lens of Truth.",
  "SHT Lensless Walls/Ceilings": "Pass through false walls, and also collect Stray Fairies in false walls and ceilings, without Lens of Truth.",
  "Pinnacle Rock without Seahorse": "Learn the path and enter Pinnacle Rock without the Seahorse.",
  "Run Through Poisoned Water": "Run through the poison swamp as Zora/FD/Adult/Giant Link.",
  "WFT 2nd Floor Skip": "Hookshot to the torch in the main room.",
  "Scarecrow's Song": "Using Scarecrow's Song where not normally required.",
  "Long Jump": "Drop a bomb behind you then use the recoil to jump a long distance.",
  "Poisoned Water as Goron": "Enter poisoned swamp by rolling as Goron. You aren't guaranteed to have enough health to make it.",
  "Swim to Zora Hall as Human": "You can avoid being damaged by the fish by swimming sideways.",
  "Brute Force OSH Code": "Removes Captain's Hat as requirement for Ocean Spider House mask code.",
  "Climb Stone Tower with One Transformation": "Play Elegy while on a block to ride the block up.",
  "Deku Playground Rupee Displacement": "Make the Rupees in Deku Playground fall by repeatedly using transformation masks, trade items, or the Ocarina of Time.",
  "Bomb Hovering": "The quintessential technique of any glitched randomizer of Majora's Mask.",
  "Lensless Jumping": "Jump along invisible platforms without Lens of Truth.",
  "Goron Roll Item Grabs": "Abuse the Goron Rolling hitbox to pick up freestanding rupees.",
  "Melt Sun Blocks With Water": "Simply pour water on the sun block in front of the Stone Tower Compass Chest and it will \"melt\" away.",
  "Powder Keg Storage": "Throw the Powder Keg from Keg Trial to the Hungry Goron, and then you may soar away with it.",
  "Hookshot Clip": "Clip out of bounds by using the Hookshot on a torch near a wall.",
  "Day 1 Grave Clip": "Sidehop into Composer Flat's grave at an angle.",
  "Icicle Clip": "Clip through walls by backwalking into an icicle.",
  "Ocarina Dive": "Pull out Ocarina while swinging your sword over a ledge.",
  "Item Dive": "While hovering over water, use the Ocarina or a cutscene item.",
  "SHT BK Skip": "Clip through the door using the icicle.",
  "Lensless Walking": "Lens of Truth will not be required to walk on invisible walkways.",
  "Bomber Guard Skip": "Backflip over the Bomber Hideout Guard.",
  "Deku Guard Skip": "Backflip over the deku guards from the fence.",
  "Kill Deku Shrine Big Octo": "Kill the Big Octo blocking the Deku Shrine before clearing Woodfall Temple with the Bow, Hookshot, or Zora Mask.",
  "Deku Palace Bean Skip": "Backflip onto the gate, then jump to the fence.",
  "Ikana Castle Falling Ceiling Skip": "Get on top of the falling ceiling with a sidehop and a jump slash, then ride the ceiling up to the switch with a well timed arrow.",
  "Goron Bomb Jump": "Drop a bomb, pound as Goron, uncurl midair.",
  "GBT Fireless": "Navigate through the seesaw room without Fire Arrows.",
  "Ikana Canyon Iceless": "Hookshot to the first stump from a precise position.",
  "SHT Zora Jumps": "Jump from the bridge to the right side of the ice block. And jump to the 3rd locked door.",
  "Jump Slash through One Sided Geometry": "Get the South Clock Town chest and the Doggy Racetrack Roof chest by jump slashing.",
  "Avoid Swamp Tree Bat": "Kill the other bats, then climb around the final bat with precision.",
  "Goron Pound onto Ledges": "Use Goron Pound to get on the Swamp Tourist House roof, the ledge in Lulu's room, and the straw roof in SCT.",
  "Zora Hall Scrub Ledge Climb": "Climb onto the ledge in Lulu's room by navigating the furniture.",
  "Lensless Walls/Ceilings": "Walk and shoot through false walls without Lens of Truth.",
  "Termina Stump with No Items": "Slowly walk up the seam of the stump.",
  "ISTT Hookshot to Eyegore": "Shoot the Eyegore with Light Arrows from below, then hookshot to the chest.",
  "Ocean Skulltulas without Fire Arrows": "At the entrance, simply hit the skulltula from a precise position. In the storage room, get on the boat, slash the skulltula, then jump slash to get the token.",
  "SHT Jump to Stray Fairies": "Jump to the two fairies in the SHT bridge room.",
  "Clever Ice Platforms": "Use ice platforms to your advantage in less obvious places, including shooting the underwater sun switch in STT or for the GBT Boss Key.",
  "Inn Balcony Jump": "Jump to the Inn balcony as Zora or Adult Link.",
  "Shoot Goht": "Shoot Goht with Arrows.",
  "STT Water Tunnel as Human": "Swim through the underwater tunnel with a precise roll jump dive inside. Hold A for the deepest possible dive.",
  "Clever Bombchu Usage": "Use 10 packs of Bombchu for destroying beehives, Stray Fairy bubbles, and crystal switches in STT.",
  "STT Eyegore Bridge Jumps": "Get on top of the railing from inside the bridge with a side hop and a jump slash. Also, dolphin dive onto the bridge as Zora by swimming into either bridge supports with a precise angle.",
  "Out of Bounds": "Go out of bounds to get to difficult areas and loading zones.",
  "Inn Balcony with Cucco": "Use a Cucco from the Bombers' Hide and Seek to jump to the Stock Pot Inn balcony.",
  "STT Updrafts without Deku Mask": "Ride the ISTT updrafts up one level, and cross the STT updrafts without Deku Mask.",
  "Zora Boomerang Through Walls": "Use Zora Boomerangs through walls by hugging the wall at an angle.",
  "Ocarina Items": "Play other items like you would play the Ocarina. Also includes duplicating bottles over masks and other inventory items.",
  "Action Swap": "While holding an item and crouching, pull out another item and quickly interact with an actor.",
  "Long Bomb Hovers": "Perform bomb hovers with many explosions.",
  "Keeta with Minimal Items": "Defeat Keeta without stunning him at all. A broken deku and some speed will be sufficient.",
  "Time Stop": "Delay triggered events by using a bottle in Link's hand immediately after shielding while targeting.",
  "Blast Mask Hovers": "Get ISG in certain locations to perform Blast Mask-Only hovers.",
  "Path to Snowhead without Magic": "Roll along the sides of the gaps.",
  "Recoil Flip Through Ice": "Recoil flip through ice in Termina Field, Twin Islands, and Snowhead Temple using only a shield or Zora Mask.",
  "Postman without Bunny Hood": "Get exactly 10 seconds without using the Bunny Hood.",
  "Deku Recoil": "Slide off a ledge at high speed by shielding an explosion as Deku.",
  "Deliver Deku Princess Without Deku Mask": "Hover over the Deku King's chamber, and drop the Deku Princess from above.",
  "Restricted Items": "Use normally unavailable items indoors by equipping and using an item on the frame of a ledge popup.",
  "Jump Slash Take Downs": "Hit things with mid-air jump slashes.",
  "STT BK Skip": "Recoil flip through the door. Alternatively, hover to the loading zone to Twinmold.",
  "Shoot Twinmold": "Shoot Twinmold's tail with arrows instead of fighting with Giant's Mask.",
  "SHT Pillar Skip": "Shoot or bomb the snowballs, then jump down.",
  "Lensless Climbing": "Climb the Mountain Village invisible ladder without Lens of Truth.",
  "ISTT Early Boss Key": "Drop down from the Dexihand either as Deku or with a sidehop and Jump Slash.",
  "Powder Kegs as Explosives": "Use Powder Kegs in place of other explosives, for ALL applications of explosives, including other tricks.",
  "Recoil Flip": "Cross gaps by shielding an explosion during a backflip.",
  "ISTT Lightless Boss Key": "Kill Gomess without Light Arrows by waiting for an opening when Gomess uses a special attack.",
  "Superslide": "Preserve recoil momentum after taking damage during roll invulnerability frames."
};

// Perhaps useful later: additional tricks not yet included in form
const moreTrickTooltips = {
  "Bowless Aliens": "Pause and unpause until 5:15. Logic expects Sun's Song.",
  "Guess Bomber Code": "120 combinations.",
  "Bio Baba Hive Luck": "Hope the item lands on a lilypad.",
  // TODO Maybe different in casual logic mode: "Navigate through the waterwheel room without Ice Arrows."
  "GBT Iceless": "Reverse the water flow without Ice Arrows by using a Long Jump and a Gainer. Pass through the waterwheel room with a precise jump out of the water.",
  "Zora Jar Game with Explosives": "Blow up all the pots on the same frame. Can be \"buffered\" with Ocarina, or simply done with a well-timed Blast Mask explosion combined with a bomb.",
  // TODO Different in glitch logic mode: "Hit all 9 keaton bushes with a small sword and small spin attack."
  "Keaton Grass Small Spin": "Hit more than 5 Keaton bushes with a small sword and quick spin attacks.",
  "GBT Goron Waterwheel": "Skip the first yellow turnkey with a precise Goron roll.",
  // TODO Different in glitch logic mode: Thaw ice..., raise the pillar..., and activate the switch in the Compass room by rolling into the ice.
  "SHT Fireless": "Thaw ice with precise arrow shots through torches, and raise the pillar with Flame Storage.",
  "GBT Cutscene Diving": "Freeze and unfreeze the water blocking the green pump room to dive to the deeper parts of the temple without Zora Mask.",
  "WFT Bow Skip": "Open the barred doors leading to the pre-boss room of Woodfall Temple with a lit Deku Stick.",
  "Dog Race Luck": "Removes Mask of Truth as a requirement for Dog Race.",
  "STT Underwater Sun Switch Snipe": "Shoot the underwater sun switch from the uninverted side of the temple with precise timing using a sidehop over the water.",
  "Flip Stone Tower Without Elegy": "Shoot a Light Arrow with a precise shot, combined with a precise roll to manipulate one of the Elegy of Emptiness blocks out of the way of the shot.",
  "Skull Kid With Bombs": "Hit the Ocarina out of Skull Kid's hand with a well-timed bomb throw.",
  "Straw Roof With Jump Slash": "Use a precise jump slash to upwarp on top of the straw roof in South Clock Town for the chest.",
  "Jump Slash Tingle Balloon": "Jump from the tree, and jump slash Tingle's balloon with a sword to take him down.",
  "SSH With Bombchu": "Destroy beehives in Swamp Spider House with Bombchu.",
  "Woodfall as FD": "Jump from the Song of Soaring tablet to the entrance of Woodfall, and collect all the items in Woodfall with clever platforming as Fierce Deity Link.",
  "WFT 2nd Floor With Hookshot": "Hookshot the torch on the right side of the main room, and jump up.",
  "Twin Islands Items in Winter": "Collect the items in the ice in Twin Islands using highly technical Zora Boomerang tricks.",
  "Powder Keg Challenge Access as FD": "Fierce Deity Link is tall enough to thaw the ice in front of Medigoron's cave with hot spring water.",
  "SHT Tall Jumps": "With Zora Mask, Adult Link, or Fierce Deity, get through the bridge room and the Goron Pound switch room with some platforming.",
  "Coast Ledge Long Jump": "Long Jump from the top of the Hookshot target to the next ledge, then long jump from there to the Piece of Heart on the next ledge.",
  "Coast Ledge Zora Jump": "Jump to the Piece of Heart on the ledge from the higher ledge as Zora or Adult Link.",
  "Coast Ledge as FD": "Jump to the highest ledge from the Hookshot target as Fierce Deity, then jump to the ledge for the Piece of Heart.",
  "Coast Ledge as Giant": "Climb to the Hookshot target as Giant Link, then either Zora/Adult Gainer onto the Hookshot target and Long Jump from there, or do the rest of the platforming as Fierce Deity.",
  "Zora Cape as Giant": "Climb all the way up to the Waterfall Rapids with tactical jump slashes as Giant Link.",
  "Lulu's Ledge as Goron": "Goron Pound underneath the ledge with the Heart Piece in Lulu's Room to upwarp on top of it.",
  "PF Guard Room Rear Entry": "Jump from the Hookshot room to the back entrance of the Guard room. Or roll over the roof as Goron.",
  "Road to Ikana Fences With Goron Bomb Jumps": "Self-explanatory. Drop a bomb, pound as Goron, uncurl midair.",
  "Defeat Well Big Poe With Bombs": "Kill the Big Poe in the Well by simply throwing bombs at it.",
  "Ikana Castle Invisible Platform Without Lens of Truth": "Navigate the single invisible ice platform in Ikana Castle without Lens of Truth.",
  "STT Elegy Maze With Bombchu": "Break the cracked wall with a Real Bombchu detonation.",
  "Deku Trial as FD": "Collect the Piece of Heart in Deku Trial without Deku Mask using some fine platforming as Fierce Deity Link. You cannot actually complete the trial in this way.",
  "Deku Trial With Hookshot Most Surfaces": "Hookshot your way across the trial. To get to the door, hookshot from the moving platform.",
  "Goron Trial as FD": "Get through Goron Trial as Fierce Deity with sideways long jumps across long gaps.",
  "Zora Trial as Human": "Swim through the pipes as human. You need either Song of Time, Goron Mask, or a death warp to escape the Heart Piece spot.",
  "Link Trial With Sticks": "Kill the Dinolfos and defeat the Garo Master on the Moon with Deku Sticks.",
  "Link Trial With Songs": "Skip the challenges to unlock barred doors (and summon a ladder) on the Moon by playing songs at specific Gossip Stones.",
  "Link Trial as FD": "Climb up past the Iron Knuckle as Fierce Deity Link without spawning the ladder. Either jump from the Iron Knuckle chest, or perform a FD Gainer.",
  "Super Bowless Aliens": "Mash pause for ~30 minutes (That's real time, not in-game time!) to complete Aliens Defense without a bow or Sun's Song.",
  "OSH Brute Force Code": "Removes Captain's Hat as requirement for Ocean Spider House mask code.",
  "Lulu's Ledge as Zora": "Climb onto the ledge in Lulu's room by navigating the furniture.",
  "Ranch Tingle as FD": "Climb the \"Out of Bounds\" ledge near the sign to Romani Ranch, and take Tingle down with a jump and a Jump Slash.",
  "Stun Keeta with Bombs": "Use a bomb to stun Captain Keeta before he moves away.",
  "Milk Multiple Cows": "Play Epona's Song multiple times in a row for a group of cows before any respond. Then they will all give you their item.",
  "OSH Fireless": "At the entrance, simply hit the skulltula from a precise position. In the storage room, get on the boat, slash the skulltula, then jump slash to get the token.",
  "OSH Storage Room Clip": "In the Ocean Spider House storage room, jump onto the boat and clip through the ceiling.",
  "Snowball Skip With Tall Character": "Avoid the large snowballs in Path to Mountain Village with a Zora/Adult Link backflip or a somewhat precise backwalk as Fierce Deity.",
  "Inn Balcony With Cucco": "Use a Cucco from the Bombers' Hide and Seek to jump to the Stock Pot Inn balcony.",
  "ISTT Updraft Recoil Flips": "Recoil flip inside the tallest updraft to get to the Updraft Fire Ring chest, and to the upstairs puzzle rooms.",
  "Low% Ocean Great Fairy": "Get to the Fairy Fountain in Zora Cape with just Zora Mask and an explosive. Extremely precise and requires a highly specific setup; not for the faint of heart!",
  "Jump Slash WFT Gekko": "Manipulate where the Gekko will fall off his Snapper, and jump slash it when it tries to climb the wall.",
  "Powder Keg Challenge Access as Zora/Adult Link": "Shield the ice, then quickly climb up and drop hot spring water before the ice hits you again.",
  "Goron Village Invisible Platforming Backwards": "Get back from Lone Peak Shrine (Lens Cave) using the invisible platforms without Lens of Truth.",
  "FD Jump Into PFI": "Jump from the pound switch to the railing outside Pirates' Fortress Interior.",
  "Lilypad Parkour as FD": "Go through the poison swamp to Deku Palace, and even the soft soil outside Deku Palace, as Fierce Deity, without taking any damage!",
  "Deku Palace Poison Water Without Deku Mask": "Run through the damaging water to the soft soil outside Deku Palace as a non-human form, taking a lot of damage in the process.",
  "Big Octo Skip as Deku": "The glitchless Octo skip, for the Octo near the frog. Jump to the left side of the Big Octo, and sneak past it as Deku with void I-frames.",
  "Big Octo Skip as Goron": "Roll from the Tourist Center ledge through the Big Octo as Goron Link.",
  "Big Octo Skip as FD": "Simply jump over the Big Octo as Fierce Deity Link.",
  "Big Octo Skip as Adult Link": "Recoil flip over the Big Octo near the Tourist Center.",
  "Swamp Poison Water by Climbing": "Kill the Big Octo, and climb around the poison swamp with the Climb Most Surfaces gimmick.",
  "Recoil Flip to Swamp Spiderhouse with Fairy": "From the Tourist Center platform, recoil flip over the Big Octo, and swim through the poison swamp as human Link. A fairy is likely necessary to survive the damage.",
  "Poison Swamp Grotto as Goron": "Get from the Swamp Spiderhouse to the grotto nearby with either a long jump, or a Goron Pound damage boost off a nearby Dragonfly.",
  "Long Jump to Soaring Tablet": "Backflip onto the lilypad near the large rock, and jump to the rock. Then, you can long jump from near the Deku Flower to the Song of Soaring tablet as Zora/Adult/FD.",
  "FD Jump to Soaring Tablet": "FD jump from near the Deku Flower to the Song of Soaring tablet. Sliding off without jumping is very common, but avoidable.",
  "Blast Mask Long Jumps As Zora/FD": "You may be expected to perform long jumps that require Zora or Fierce Deity Link using Blast Mask.",
  "Woodfall Climbing and Swimming": "After climbing up to Woodfall with the Climb Anywhere Gimmick, you may be expected to do quite a bit of swimming in the poison water as Human Link.",
  "Woodfall Blue Rupee Without Deku Mask": "A long jump or recoil flip with explosives will work, but you can also recoil flip off a deku scrub projectile to get this.",
  "Path to Snowhead Jumping and Climbing": "Long jump and climb across the gaps in Path to Snowhead.",
  "Path to Snowhead as FD": "Jump across the gaps in Path to Snowhead with the Fierce Deity Anywhere gimmick.",
  "Path to Snowhead with Nothing": "Mash jump slashes on the slopes on the left sides of the gaps.",
  "Path to Snowhead Pillar Without Lens of Truth": "Jump along the invisible platforms without Lens of Truth.",
  "Path to Snowhead Pillar as FD": "Jump from the last invisible platform in Path to Snowhead to the pillar as Fierce Deity.",
  "Path to Snowhead Pillar as Giant Link": "Jump from the last invisible platform in Path to Snowhead to the pillar as Giant Link.",
  "Path to Snowhead Pillar Long Jump Climb": "Long jump from the last invisible platform in Path to Snowhead to the pillar with the Climb Most Surfaces gimmick.",
  "Ocean Great Fairy With Ice Arrows": "Create ice platforms with Ice Arrows, and climb up to the Ocean Great Fairy as a tall form, or with a Goron Bomb Jump.",
  "Ocean Great Fairy as FD": "Perform a Zora High Ledge Grab to the small island nearest the grotto, then jump the rest of the way with Fierce Deity Link.",
  "Goron Race Without Magic": "Pray.",
  "Defeat Dampe Big Poe With Nothing": "You can lure the Big Poe to the stairs for a clean shot at jump slashing it with your best sword, or Deku Sticks.",
  "Pacifist Well Hot Spring Water": "Collect Hot Spring Water in the Well without killing the Dexihand by quickly scooping the water from behind it, and soaring away.",
  "Great Bay Early With Goron Bomb Jump": "Drop a bomb, pound as Goron, uncurl midair to get past the fence blocking Great Bay.",
  "Great Bay Early With Goron Chu Chu Jump": "Lure a Chu Chu over to the Great Bay fence to damage boost over the fence as Goron.",
  "Great Bay Early as FD": "Long jump over the fence as Fierce Deity with a well-timed jump slash.",
  "Great Bay Early With Only Bombs": "Long jump, jump slash, damage boost using 2 bombs to get over the fence to Great Bay as just Human Link.",
  "Road to Ikana Fences With Goron Bubble Boosts": "Damage boost off the bubbles at night in Road to Ikana with Goron Pounds.",
  "Road to Ikana Fences as Zora": "Get over the fences in Road to Ikana with highly precise Zora ground jump, jump slash, damage boosts with bombs.",
  "Turtle Jump": "Jump and \"climb\" onto the turtle you ride to Great Bay Temple as Fierce Deity Link.",
  "Climb Into Romani Ranch": "Climb through the boulder in Milk Road with the Climb Most Surfaces gimmick.",
  "FD Jump into Ranch": "Jump over the boulder in Milk Road as Fierce Deity. You can climb on some of the terrain near Tingle.",
  "Hookshot into Ranch": "Hookshot into Ranch with the gimmick Hookshot Any Surface.",
  "Ikana Canyon Access as FD": "Damage boost onto the boulder below the ghost, then climb up with a gainer as Fierce Deity.",
  "Ikana Canyon Access as FD With Real Bombchu": "Damage boost off a Real Bombchu during the day in Road to Ikana to get on the boulder under the ghost for the trick Ikana Canyon Access as FD.",
  "Observatory Goron Bomb Jump": "Goron bomb jump over the Astral Observatory fence.",
  "Fish Push": "Drop a fish on the slope leading up to the Goron Racetrack Grotto, and push it up the slope to prevent yourself from sliding down.",
  "Zoey Grotto Recoil Flip": "Recoil flip up the slope leading to the Goron Racetrack grotto. You must sidehop out of the snow immediately before the recoil flip.",
  "Peahat With Sticks": "Kill the Peahat in Termina Field with Deku Sticks. A broken Deku Stick is preferable.",
  "Dodongos With Sticks": "Kill the Dodongos in Termina Field with Deku Sticks. A broken Deku Stick is preferable.",
  "Dinolfos With Sticks": "Kill the Dinolfos in Woodfall Temple with a Deku Stick(s).",
  "Doggy Racetrack Chest With Jump Slash": "Use a jump slash to upwarp on top of the awning in the Doggy Racetrack for the chest.",
  "Straw Roof as FD": "Jump to the lower chest in South Clock Town as Fierce Deity Link.",
  "South Clock Town Final Day Chest as FD": "Jump to the upper chest in South Clock Town as Fierce Deity Link.",
  "Straw Roof as Goron": "Goron Pound underneath the corner of the straw roof to upwarp on top of it, then jump to the chest as human link.",
  "Tourist Center Roof as Goron": "Simply Goron Pound underneath the Tourist Center door to warp up on top of the roof.",
  "Tourist Center Roof as FD": "Either sidehop into the door as Fierce Deity Link to get a strange upwarp on top of the roof, or use a FD Gainer.",
  "Igos Fight Swordless": "Defeat Igos du Ikana with Deku Sticks or something like Ice Arrows.",
  "Poe Hut With Bombs and Sticks": "Defeat the first three Poes with Deku Sticks, then simply blow up the last Poe with bombs or Blast Mask.",
  "Defeat Keeta With Sticks": "Beat Keeta with only a single broken Deku Stick. You can either fight through the Stalchildren, which is tight on time, or simply mash backflip up the slope near the Captain's Hat chest and intercept Keeta.",
  "Keeta as Goron": "Defeat Keeta without stunning him as Goron Link by getting through the Stalchildren quickly.",
  "Ikana Graveyard Rocks Without Sonata": "Get on the other side of Keeta without waking him up by performing a very precise Goron Pound onto a lantern above the door to Dampe's hut, backflip a little higher, then do a twisted backflip as human to climb up.",
  "Ikana Graveyard Bats With Sticks and Bombs": "Kill the bats in Day 1 grave with only sticks, and kill all the bats around the graveyard on day 2 with sticks and bombs.",
  "Road to Swamp Bats With Sticks": "Kill the 3 bats guarding the Heart Piece in the tree with sticks or by throwing grass.",
  "WFT Skulltula With Stick": "Kill the Skulltula holding a Stray Fairy in Woodfall Temple with a Deku Stick.",
  "Takkuri With Nothing": "Kill Takkuri with Deku Sticks, or if even Deku Sticks are too hard to come by, throwing a total of 12 grass at Takkuri will take him down too!",
  "Reverse Well With Climbing": "Enter the Well from Ikana Castle with Deku Mask and the Climb Most Surfaces gimmick.",
  "Inn Balcony With Bombs": "Long jump or recoil flip into Stock Pot Inn with explosives.",
  "Inn Balcony as Goron": "Goron Spike Roll into Stock Pot Inn at night for Midnight Meeting. Requires a special setup.",
  "Inn Balcony With Nothing": "Simply wait on the balcony after 8:30 PM to speak to Anju during the Midnight Meeting.",
  "Skull Kid With Blast Mask": "Hit the Ocarina out of Skull Kid's hand with a back flip and a Blast Mask explosion.",
  "Skull Kid With FD": "Hit the Ocarina out of Skull Kid's hand with a Fierce Deity Link jump slash.",
  "Snowball Skip as Human": "Backflip over the large snowballs blocking the way to Mountain Village as only Link.",
  "Garo Mask Skip": "Bug limit Ikana access with a Goron damage boost, a lot of slope climbing, and a recoil flip.",
  "Climb Stone Tower as FD": "Skip half of the Elegy of Emptiness switches with Fierce Deity Link's jumps.",
  "Climb Stone Tower as Giant": "Climb the entirety of Stone Tower with the gimmick Giant's Mask Anywhere. Requires a sword for jump slashing.",
  "SSH Main Room Ceiling Skull as FD": "Kill the skull from a distance, then jump to the token as Fierce Deity Link.",
  "SSH With Explosives": "Kill Swamp Skulltulas and break beehives by throwing explosives at them.",
  "SSH Gold Room as FD": "Jump and climb on top of the left \"support pillar\" as Fierce Deity to access the beehive and the Skulltula near the ceiling.",
  "SSH Monument Room Lower Wall Skull as FD": "Jump to the skull from the scaffolding as Fierce Deity.",
  "SSH Monument Room Lower Wall Skull With Nothing": "Jump slash to kill the skull, then jump slash to collect the skull, using two precise anti-gravity jumps from the top of the monument, on the lower side.",
  "SSH Vine Skull as Zora": "Collect the skull behind the vine through the wall with Zora Fins.",
  "SSH With Blast Mask and Climbing": "Blast some beehives and wall skulls with Blast Mask and the Climb Most Surfaces gimmick.",
  "SSH Boulderless-less": "Put bugs in the boulder soft soil spot without actually destroying the boulder.",
  "Enter Ocean Spider House as Goron": "Goron Bomb Jump over the fence in the first room.",
  "Enter Ocean Spider House as Giant": "Destroy the cracked wall with a swing of Giant Link's sword, and also get past the fence in the first room with the gimmick Giant's Mask Anywhere.",
  "OSH as Zora": "Collect the tokens from the Skulltulas inside holes in the Oceanside Spider House as Zora with either boomerangs through walls, or very precise boomerangs into the holes.",
  "OSH as Giant": "Collect Skulltula Tokens in holes by jumping out of bounds with the gimmick Giant's Mask Anywhere.",
  "OSH Storage Room Behind Crate Skull as Adult With Hookshot": "Collect the token through the wall with Hookshot.",
  "OSH Storage Room Behind Crate Skull as Adult With Fish": "Collect the token through the wall with... a fish??",
  "OSH Entrance Skulls With Nothing": "Kill the skulls somehow, and collect their tokens with precise sidehops.",
  "OSH Entrance Web Skull as Goron": "Goron Bomb Jump onto the fence, then Goron Pound and platform up the webs to get to the Skulltula.",
  "Pirates' Fortress Upper Chest as Goron": "Roll along the slope on the side as Goron to get to the upper chest in Pirates' Fortress Interior.",
  "Pirates' Fortress Upper Chest as FD": "Jump along the slope to the side as Fierce Deity to get to the upper chest in Pirates' Fortress Interior.",
  "Hookshot Room Skull Flag Rupees With Zora Boomerangs": "Collect the rupees from the skull flag in the Hookshot room without releasing the bees using Zora Boomerangs through the walls.",
  "Great Bay Cows With Nothing": "Get hurled up to the cow grotto in Great Bay Coast by a Like Like.",
  "Bio Baba Grotto With Bombs": "Destroy the hives in the Bio Baba grotto in Termina Field with explosives.",
  "Twin Islands FD Diving": "Dive for the underwater rupees in springtime Twin Islands as Fierce Deity Link. Simply swim over the items, and hold A.",
  "Swamp Frog Item Long Jump": "Long jump to the blue rupees with explosives.",
  "Swamp Frog Items as Goron": "Damage boost off an Octorok projectile as Goron to get the blue rupees on top of the flowers near the swamp frog.",
  "Stone Tower Bean Chests as Giant": "Jump slash to the bean chests as Giant Link.",
  "Ikana Castle Gainer": "Perform a Gainer over the sun block blocking Ikana Castle.",
  "Ikana Castle Access as Goron": "Goron Bomb Jump over the sun block blocking Ikana Castle.",
  "Ikana Castle as FD": "Get through the left side of Ikana Castle as Fierce Deity Link, and also jump to the Castle Pillar Heart Piece without Deku Mask.",
  "Ikana Castle Falling Ceiling Room as Zora/Adult Link": "Get on top of the falling ceiling as Zora or Adult Link with either a Gainer or a sidehop jump slash, then climb to the switch that unlocks the barred doors.",
  "Ikana Castle Falling Ceiling Room as Human": "Get on top of the falling ceiling with either a Gainer or a sidehop jump slash, raise the ceiling by shooting one of the crystal switches with bow, then ride the ceiling up to the switch that unlocks the barred doors.",
  "Ikana Castle Pillar as Goron": "Goron Bomb Jump onto the railing of the side of the castle, then navigate along the railing and sidehop to the Piece of Heart.",
  "Ikana Castle Hole Room Jumps": "Jump to the pots in the hole room of Ikana Castle as human, and jump around the Skulltulas while doing the room in reverse.",
  "SHT Lensless Map Room Ledge": "Jump along the small invisible platforms leading to the Stray Fairy chest at the top of the Map room without Lens of Truth.",
  "Collect Out of Bounds Item": "Grab the out of bounds item near the entrance to the imprisoned monkey in Deku Palace with a Zora Boomerang through the wall.",
  "Goron Racetrack Access as Giant": "Climb around the giant boulder as Giant Link, and into the loading zone.",
  "Goron Racetrack Access as FD": "Long jump onto some grabbable terrain as Fierce Deity, then navigate the terrain to sidehop into the racetrack loading zone from above.",
  "Goron Racetrack Access With Hookshot/Climb Anywhere": "Get above the giant boulder in front of the Goron Racetrack, and sidehop into the loading zone.",
  "Near Frog Hive Flower as Human": "Climb onto the giant flower near this beehive as only Human to reach it with Hookshot or a Bombchu. You can do a glitchy upwarp onto the flower from the water where the petals of the flower are as low as they can be.",
  "Near Frog Hive With Bombchu": "Destroy this beehive with a well-placed, well-timed Bombchu.",
  "Deku Palace Pots as Goron": "Goron Bomb Jump up to the pots.",
  "Deku Palace Pots as Goron With Nothing": "Wake up a Deku Scrub by backflipping on the Bean Skip door frame, then damage boost up to the Deku Palace pots as Goron off the nuts fired by the Deku Scrub.",
  "Termina Field Log Climb": "Climb up one of the ends of the log to get the item above the log with the gimmick Climb Most Surfaces.",
  "North Ramp Jump": "Jump to the invisible item in the gap between the two ramps in northern Termina Field. Requires either a precise long jump+jump slash combo, or a roll jump as a tall form plus a jump slash.",
  "Deku Playground as FD": "Get on top of the platforms in the Deku Playground during Day 2 or 3 with a well timed jump as Fierce Deity.",
  "Deku Playground as Goron": "Get on top of the platforms in the Deku Playground during Day 2 or 3 with a well timed roll as Goron.",
  "Deku Playground with Goron Spikes": "Get on top of the platforms in the Deku Playground during Day 1 with a very precisely timed and aimed Goron Spike Roll.",
  "Termina Field Clam With Explosives": "Hit the clam for its items with a Bombchu, or throw explosives at it.",
  "Termina Field Clam With Sword Beams": "Angle a Sword Beam at the clam in Termina Field using clever targeting of a nearby Chu Chu.",
  "Clock Tower Clock With Sword Beams": "Hit the Clock Tower clock with a Sword Beam for its items, aiming using the nearby dog to angle the beam upward.",
  "Clock Tower Clock With Powder Keg": "Hit the Clock Tower clock for its items by throwing a Powder Keg at it.",
  "Clock Tower Clock With Bombchu": "Hit the Clock Tower clock for its items using a very, very precise Bombchu.",
  "Zora Jar Game With Powder Keg": "Simply place a Powder Keg in the middle and watch it blow up all the jars at once, winning the game.",
  "Smithy Fairy as FD": "Hit the pot with a Sword Beam by summoning the scarecrow and targeting it for a good beam angle.",
  "Smithy Fairy With Bombchu": "Break the pot with the Fairy inside with a Bombchu.",
  "Smithy Fairy With Powder Keg": "Break the pot with the Fairy inside by throwing a Powder Keg at it, either from your pack, or from Medigoron during the Powder Keg Challenge.",
  "Road to Ikana Pot as FD": "Hit the pot with a Sword Beam by summoning the scarecrow and targeting it for a good beam angle.",
  "Road to Ikana Pot With Bombchu": "Break the pot with the Fairy inside with a Bombchu.",
  "Pillar Pot as FD": "Jump to the pot and jump slash it as Fierce Deity.",
  "Pillar Pot With Bombchu": "Break the pot with the Fairy inside with a Bombchu.",
  "Pillar Pot With Explosives": "Break the pot with the Fairy inside by throwing an explosive at it as Goron/Adult Link.",
  "Pillar Pot With Nothing": "Break the pot with the Fairy inside by luring a Real Bombchu into it.",
  "Canyon Ledge as FD": "Jump to the Piece of Heart as Fierce Deity, with moderate precision required.",
  "Great Bay Tingle as FD": "Hit Tingle down with a Sword Beam as Fierce Deity. You will need to cleverly utilize a Bombchu to target for the right angle.",
  "Canyon Tingle as FD": "Hit Tingle down with a Sword Beam as Fierce Deity. You will need to cleverly utilize a Bombchu or a Guay to target for the right angle.",
  "Swamp Tingle as FD": "Hit Tingle down with a Sword Beam as Fierce Deity from the top of the tree.",
  "Mountain Tingle as FD": "Jump slash Tingle's balloon in the mountains as Fierce Deity. You don't have to stand on the nearby post to get enough height, but it helps.",
  "Swamp Tingle With Climbing": "Climb up the wall near Tingle with the Climb Most Surfaces gimmick to get in range for a jump slash take down.",
  "Zora Cape Recoil Flip": "Recoil flip from above the Deku Flower to the Ledge Without Tree Chest.",
  "WFT Entrance as FD": "Jump along the platforms to get through the first room as Fierce Deity.",
  "WFT 2nd Floor as FD": "Jump from the Stray Fairy chest spawn in the main room to the 2nd floor as Fierce Deity with egregious precision.",
  "WFT Elevator Room as FD": "Jump from the 2nd floor to the room with the Gekko as Fierce Deity, and also jump around the elevator room in general.",
  "WFT Elevator Jump": "Use the eye switch elevator without Deku Mask to get to the 2nd floor.",
  "WFT as Giant Link": "Backflip through the first room, jump to the 2nd floor, jump to the Gekko door, and jump to the Odolwa door, all as Giant Link.",
  "WFT Twisted Recoil Flip": "Get through the first room in Woodfall Temple with a highly technical sideways recoil flip as Zora or Adult Link; probably one of the most challenging jumps in all of Casual Logic!",
  "WFT Jump Slash to 2nd Floor": "Above the main room, perform a jump slash recoil through one of the holes to obtain access to the main room's 2nd floor.",
  "WFT Carnivorous Flower Jump": "Kill the carnivorous flower outside the Snapper room, then jump from the flower to the Snapper room.",
  "WFT Elevator Room Long Jumps": "Long jump to the Small Key chest from the top floor, and long jump to the Snapper room from the elevator.",
  "WFT Long Jump to Odolwa as FD": "In the pre-boss room, jump to the flower platform on the right, then long jump to the Red Rupee on the right with explosives and Fierce Deity to get to Odolwa's lair.",
  "WFT Odolwa With Nothing": "Defeat Odolwa with only Bomb Flowers.",
  "WFT Pre-Boss Jumps to Upper Left": "Jump and climb up the ledges leading to the upper left Stray Fairy bubble as Zora/Adult/Fierce Deity Link.",
  "WFT Stray Fairy Bubbles With Explosives": "Pop Stray Fairy bubbles with explosives and Bombchu, for the purpose of collecting them with Great Fairy's Mask.",
  "WFT Poison Water Bubble With Nothing": "Grab the fairy by swimming in the poison water. It is theoretically possible to not have enough health to do this!",
  "WFT Main Room Switch Jump": "Jump to the switch from the 2nd floor with a roll jump as human.",
  "WFT Entrance Platform With Explosives": "Use a precise Long Jump to the platform with the chest in the first room. Aim for the Deku Flower to not fall down.",
  "WFT Hives With Explosives": "Destroy hives in Woodfall Temple with explosives and Bombchu for their items.",
  "WFT Entrance Hive With Jump Slash": "Break the beehive in the first room of Woodfall Temple with a sword and a jump slash.",
  "WFT Entrance Hive Jumps": "Long jump to the platform nearest the hive. Also, Adult Link can barely make it there with a precise jump + jump slash.",
  "WFT Red Rupee Jumps": "Jump to the red rupees on the pillars in the room leading up to Odolwa. Can be done with either a Long Jump with explosives, Fierce Deity's Mask Anywhere, or clever use of Ice Arrow platforms.",
  "WFT Red Rupees as Goron": "From the door to Odolwa, roll straight into the pillar as Goron, and the red rupee will somehow be collected.",
  "WFT Crystal Long Jump": "Long jump to the crystal switch in the room before Odolwa. You will only ever possibly need to do this to collect the red rupee on the right hand side of the room.",
  "GBT as Giant": "Pass the water control room as Giant Link. You can also take the mask off in the water in the whirlpool room to dive to the bottom without Zora Mask.",
  "GBT Whirlpool Access as FD": "Skip using the yellow valve in the water control room to activate the yellow pipe's water stream platform, by just jumping across as Fierce Deity Link.",
  "GBT Red Pump Long Jump": "Long Jump from the pipe to the red water pump turn key (outside Wart room) with explosives.",
  "GBT Red Pump as FD": "Jump to the red water pump turn key (outside Wart room) from below as Fierce Deity Link.",
  "GBT Red Valve Early": "Get to the closed red valve room early by bonking off a nearby wall while dolphin diving out of the water as Zora, and use a Gainer to climb up to the ledge with the turnkey without freezing the Chu Chu.",
  "GBT Map Chest Room Jumps": "Jump around the platforms in the room with the Map Chest in Great Bay Temple as Zora/Adult Link/Fierce Deity, or with Long Jumps. In particular, FD can jump to the seesaw room from here.",
  "GBT Red Control Turnkey as FD": "Jump to the platform with the red turnkey in the water control room as Fierce Deity Link from the rising platform on the left.",
  "GBT Red Control Turnkey With Bombs": "Skip needing Hookshot to use the red turnkey in the water control room by recoil flipping to the platform. Alternatively, use a Goron Bomb Jump or a Deku shield recoil.",
  "GBT Exit as FD": "Jump to the turtle's nose as Fierce Deity with a precise jump from the torches, then strafe around the nose and up onto the turtle's back.",
  "GBT Exit as Goron": "Goron Bomb Jump onto the turtle's nose from the torches Stray Fairy chest, then Goron Bomb Jump onto the turtle's back.",
  "GBT Exit With Nothing": "Exit Great Bay Temple with only sticks, if necessary. Jump slash onto the turtle's nose, then you can jump slash around the turtle's eye and onto its back. This trick is very, very unlikely to be required; mostly used to remove exit requirements from Great Bay Temple in Dungeon Entrance Randomizer.",
  "GBT Green Pump Room Early as FD": "Jump around the waterstream blocking the ladder to the green pump room as Fierce Deity Link.",
  "GBT Boss Door as FD": "Skip setting up the green pipe water stream platform with a simple jump across the gap to the Great Bay boss door as Fierce Deity Link.",
  "GBT Iron Goron Sneaks Past Dexihands": "Get past the Dexihands between the map chest room and the Bio Baba tunnel by quickly swimming through as human. Also, open the Great Bay Small Key chest by juking out the dexihand there.",
  "GBT Boss Key With Ice Arrows": "Create an Ice Arrow platform and climb up the window to skip the Gekko fight.",
  "GBT Boss Key With Explosives": "Long jump to the Great Bay Boss Key chest with explosives. A tall figure is needed to grab onto the window.",
  "GBT Boss Key as FD": "Jump to the exit window for the Great Bay Boss Key chest as Fierce Deity Link.",
  "GBT Boss Key as Zora/Adult": "Jump to the exit window for the Great Bay Boss Key chest with a highly precise diagonal roll jump against the wall as Zora or Adult Link.",
  "GBT Boss Key as Giant": "As Giant Link, jump slash to the right of the ice blocking the door from near the Small Key chest to get to the Boss Key chest with a bizarre clip.",
  "GBT Underwater Hookshot": "Hookshot into most of the rooms of Great Bay Temple with the gimmick Hookshot Any Surface.",
  "GBT Boss Key Climb": "Climb into the exit window for the Great Bay Boss Key chest with the gimmick Climb Most Surfaces; requires climbing above the window and jump slashing inside.",
  "GBT Skulltula With Stick": "Kill the Skulltula holding a Stray Fairy in Great Bay Temple with a Deku Stick.",
  "GBT Stray Fairy Collection With Bombchu": "Release Stray Fairies in Great Bay Temple from jars, barrels, and bubbles using Bombchu.",
  "GBT Water Control Room Underwater Fairy With Nothing": "Get this fairy with two precise dives from the platform with the Skulltula and the rupee triangle.",
  "GBT Pre-Boss Bubble Fairy as Zora": "Jump out of the water at the Stray Fairy underneath the green turnkey in the room before Gyorg as Zora.",
  "GBT Pre-Boss Bubble Fairy Recoil Flip": "Recoil flip into the stray fairy bubble underneath the green turnkey in the room before Gyorg.",
  "GBT Waterwheel Room as FD": "Jump to the Stray Fairy chests in the Waterwheel Room as Fierce Deity Link.",
  "GBT Waterwheel Fairy Chests With Explosives": "Long jump to the upper Stray Fairy chest from the rising platform, and recoil flip to the lower Stray Fairy chest from the horizontally moving platform.",
  "GBT Waterwheel Room Lower Chest With Nothing": "Get into the lower cove with the Stray Fairy chest in the waterwheel room with a very precise sidehop and a jump slash.",
  "GBT Green Pump Room Climb": "Shimmy up the green pipe to get above the ceiling in the green pump room with the gimmick Climb Most Surfaces.",
  "GBT Whirlpool Jar as FD": "Break the jar with the Stray Fairy at the bottom of the giant whirlpool with a precise Sword Beam angled by targeting a Bombchu.",
  "GBT Bio Babas With Bombchu": "Kill all 4 Bio Babas for the Stray Fairy chest with Bombchu.",
  "GBT Dexihands Jar With Explosives": "Blow up the jar holding this Stray Fairy captive, then collect the Fairy with a surviving Dexihand.",
  "GBT Green Pump Room Giant Upwarp": "After entering the green pump room, put on Giant's Mask from a precise position to instantly warp to the ceiling section of the room.",
  "SHT as Giant": "Navigate Snowhead Temple with the gimmick Giant's Mask Anywhere. You can go all the way to the top with just Giant's Mask and a Magic Meter!",
  "SHT Gainers": "Use Gainers in Snowhead Temple to climb ledges that are barely out of reach.",
  "SHT Goron Bomb Jumps": "Goron Bomb Jump to ledges that are just barely out of reach in Snowhead Temple.",
  "SHT Long Jumps": "Cross gaps in Snowhead Temple with Long Jumps.",
  "SHT Twin Block Goron Pound": "Get on top of the two blocks stacked on top of eachother with an extremely precise, nuanced Goron Pound that clips into the corner of the block.",
  "SHT Bridge Room With Bunny Hood": "Get past the bridge room with an extremely precise jump and jump slash as human, only possible with Bunny Hood.",
  "SHT Elevator Skip as FD": "Skip using the elevator that requires Fire Arrows with a jump from the crates as Fierce Deity Link.",
  "SHT Ramps as FD": "Jump across the ledges with ramps on the 2nd floor as Fierce Deity Link.",
  "SHT Pixelshot": "From the first floor, Hookshot the torch in the main room above where the Scarecrow is.",
  "SHT Frozen Switch Clip": "In the Compass room, roll into the switch at the right angle to activate it without thawing the ice.",
  "SHT 3F Jumps": "Jump from the top level of the frozen stairwell to the platform with the 3rd locked door, and also jump from the 3rd locked door to the Goron Pound switch room.",
  "SHT Fireless Pillar Long Jump": "Long jump around the ramps on the 2nd floor in the main room, even if the pillar is raised, with a tall form and precise Long Jump angles.",
  "SHT Icicle Room Rupees as Zora": "Collect the rupees with Zora Boomerangs without breaking the ice.",
  "SHT Fairy Bubbles With Explosives": "Collect Stray Fairies in Snowhead Temple by popping the bubbles with explosives or Bombchu.",
  "Stump Chest With Goron Bomb Jump": "Damage boost on top of the stump in Termina Field with a Goron Bomb Jump.",
  "Stump Chest With Goron Spikes": "Perform a precise Goron Spike Roll to take a jump off one of the roots of the stump to get on top of the stump.",
  "Stump Chest With Bats": "Damage boost off a nearby Bad Bat as Goron to get on top of the stump.",
  "STT Elegy Maze Climb": "Climb over the exit game in the maze with the gimmick Climb Most Surfaces enabled.",
  "STT as Giant": "Navigate through uninverted Stone Tower Temple with the gimmick Giant's Mask Anywhere enabled.",
  "STT Eyegore Bridge as Zora": "Dolphin dive onto the Eyegore bridge as Zora Link with a precise bonk.",
  "STT Eyegore Bridge With Explosives": "Get on top of the railing or sunblock in the Eyegore room, then Recoil Flip or Long Jump onto the bridge. Alternatively, Goron Bomb Jump onto the bridge from an Ice Arrow ice platform.",
  "STT Gainers": "Gainer onto the sun block in Stone Tower Temple with sufficiently tall transformations.",
  "STT Eyegore Bridge as FD": "Jump onto the Eyegore Bridge as Fierce Deity Link.",
  "STT Updraft Room With Explosives": "Recoil flip through the updraft room with explosives.",
  "STT Updraft Room as FD": "Jump through the updraft room as Fierce Deity Link.",
  "STT Updraft Room With Powder Keg": "Goron roll through the first updraft to get to the other side, then use a Powder Keg to Recoil Flip through the other 2 sets of updrafts.",
  "STT Updraft Room as Goron/Zora": "Goron roll through the first updraft to get to the other side, then use a Zora Jump Slash recoil to fly through the other 2 sets of updrafts.",
  "STT Lava Room Ledge as Zora": "Perform an incredibly precise Zora Jump Slash in the first updraft to barely make it onto this ledge.",
  "STT Lava Room Ledge as Goron": "Goron roll through the first updraft to get to the other side, then hookshot the chest.",
  "STT Eyegore Bridge to Courtyard": "Jump slash onto the railing of the bridge, and then cross the water with either Deku Mask, Ice Arrows, or a Recoil Flip.",
  "STT Garo Master With Sticks": "Defeat the Garo Master in Stone Tower Temple with Deku Sticks.",
  "STT Map Chest Recoil Flip": "From the basement ledge, use a precise curved Recoil Flip to land on top of the sun block.",
  "STT Basement Ledge Jump Slash Recoil": "Get onto the basement ledge by falling down the hole in the ceiling, and using a Jump Slash wall recoil to land on the ledge.",
  "STT Basement Ceiling With Real Bombchu": "Blow up the hole in the ceiling of the basement room with a Real Bombchu from the maze.",
  "STT Map Chest as Zora": "Jump Slash the wall in the ceiling hole as Zora Link to recoil off and land on the sun block in the basement.",
  "STT Map Chest as FD": "From the basement ledge, jump on top of the sun block.",
  "STT Armos With Nuts": "Lure the Armos behind the sun block in the basement room closer with Deku Nuts, then kill them through the wall.",
  "STT Armos With Bombchu": "Kill the Armos behind the sun block in the basement room with Bombchu.",
  "STT Thin Bridge Crystal as Zora": "Hit the switch through the floor with Zora Boomerangs.",
  "STT Thin Bridge Crystal as FD": "Jump slash the crystal through the wall as Fierce Deity Link. Alternatively, target the Hiploop and shoot a sword beam at the crystal from below.",
  "STT Thin Bridge Crystal With Nothing": "Jump slash the crystal through the wall with as little as a Deku Stick.",
  "STT Underwater Sun Switch With Ice Arrows": "Shoot the underwater sun switch from the uninverted side on top of an ice platform over the water.",
  "STT Goron Bomb Jumps": "Goron Bomb Jump on top of the sun blocks in the Eyegore room.",
  "STT Bridge Crystal With Explosives": "Activate the crystal switch in the Eyegore room with explosives through the railing.",
  "STT Bridge Crystal as Zora": "Activate the crystal switch in the Eyegore room with Zora Boomerangs through the railing.",
  "STT Bridge Crystal With Nothing": "Activate the crystal switch in the Eyegore room with as little as a single Deku Stick through the railing, with a precise Jump Slash.",
  "STT Bridge Crystal With Spin Attack": "Activate the crystal switch in the Eyegore room with a big Spin Attack.",
  "STT Bridge Crystal With Ice Arrows": "Make yourself ice platforms with Ice Arrows to get to the area with the crystal switch in the Eyegore room.",
  "ISTT Lobby Long Jump": "Long Jump to the Death Armos switch with explosives.",
  "ISTT Lobby as FD": "Jump to the Death Armos switch as Fierce Deity Link.",
  "ISTT as Giant": "Navigate through the rooms of Inverted Stone Tower Temple as Giant Link with the gimmick Giant's Mask Anywhere.",
  "ISTT Updrafts Without Deku Mask": "Ride the updrafts up without Deku Mask.",
  "ISTT Lava Room Gainer": "Gainer through the upsidedown lava room upstairs with a sufficiently tall transformation.",
  "ISTT Lava Room With Explosives": "Recoil flip through the upsidedown lava room upstairs, or Goron Bomb Jump over the short wall.",
  "ISTT Eyegore Bridge Recoil Flips": "Recoil Flip from the bridge to either side, including towards the Dexihand, to get launched into the updraft room.",
  "ISTT Wizzrobe Goron Bomb Jump": "Goron Bomb Jump to the Wizzrobe chest from below.",
  "ISTT Hanging Explosive Dodging": "Cross under the Eyegore bridge with the Deku Flowers by flying underneath the explosives, and flying into them from behind to destroy them.",
  "ISTT Poe Gap as FD": "Jump the gap with the Poes as Fierce Deity Link.",
  "ISTT Eyegore Bridge to Dexihand as FD": "Self-explanatory jump. You may have to try several times before actually getting a proper jump off the bridge.",
  "ISTT Recoil Flip to Eyegore Bridge": "Recoil flip onto the Eyegore bridge from the passage leading out from the updraft room.",
  "ISTT Death Armos Maze Chest Recoil Flip": "Skip needing Elegy or Hookshot for the fire ring in the maze by simply outrunning the returning fire with a recoil flip.",
  "Hookshot Room Long Jump to Tank": "Long jump from the Hookshot chest to the tank with the egg inside.",
  "Sewers With Bombchu": "Navigate through Pirates' Fortress Sewers using Bombchu to hit the crystal switches where available.",
  "ISTT Thin Bridge Rupees as Goron": "Collect the rupees from above by rolling over them as Goron Link.",
  "ISTT Frozen Eye Chest Ledge With Nothing": "Jump to the ledge where the Stray Fairy chest spawns from above with no items.",
  "ISTT Thin Bridge Three Blue Rupees as Zora": "Collect the rupees through the wall with Zora Boomerangs.",
  "GBT Gyorg Quick Kill": "Skip the cutscene for Gyorg spawning piranhas by finishing it off with Fierce Deity while it is above the platform.",
  "GBT Gyorg Without Magic": "Kill Gyorg using only Zora Link, and no magic.",
  "GBT Gyorg With Arrows": "Kill Gyorg with only arrows by sidehopping into the water and shooting arrows at it as you fall in.",
  "GBT Gyorg as Goron": "Kill Gyorg with the Iron Goron gimmick.",
  "Wallmaster Void Out": "Bring Hot Spring Water from the Dexihand to the Well Cow by allowing a Wallmaster to grab you and take you back to the Ikana Castle side of the well.",
  "ISTT Updraft Rupee Gainer": "Get up to the ledge with the two red rupees in the updraft room with a Gainer and a tall transformation.",
  "ISTT Updraft Rupee Goron Bomb Jump": "Get up to the ledge with the two red rupees in the updraft room with a Goron Bomb Jump.",
  "ISTT Updraft Rupees as Zora": "Grab the rupees through the sun block with Zora Boomerangs.",
  "Bean Grotto as Giant": "Put on Giant's Mask underneath the chest on the ledge in Bean Man's grotto to get warped up onto the ledge.",
  "Underwater Chest as Giant": "Open the chest as Giant from a precise position.",
  "Twinmold Minimalism": "Kill Twinmold with just about any valid damaging hitbox, including just a Kokiri Sword.",
  "Bank #2 Without Wallets": "Bank Reward #2 will not require Adult Wallet or higher.",
  "Bank #3 Without Wallets": "Bank Reward #3 will not require Giant Wallet or higher.",
  "Like Like With Bombchu": "Kill the Like Like under the falls in Zora Cape with Bombchu.",
  "The Giant Dive": "Kill the Like-Like under the falls in Zora Cape from a distance, then dive for the item using Giant's Mask to grab it as if it was Ruto's Letter.",
  "Rock Sirloin Fireless": "Get the Rock Sirloin without lighting the chandelier or the torches. Break the chandelier pot closest to the Baby Goron side with Goron Spikes to get the chandelier swaying slightly, then quickly break the chandelier pot with the Rock Sirloin inside with an extremely precise Goron Spike Roll.",
  "SSH Tree Room Beehive as FD": "Blow up the Gossip Stone in the tree room, then use the blast-off animation of the Gossip Stone to get an angle to hit the beehive with a Sword Beam.",
  "Lens Cave With Powder Keg Challenge": "Bring the Powder Keg from Medigoron across the invisible platforms and into Lone Peak Shrine to blow up the rock. Requires multiple outrageously precise Keg tosses on platforms that you probably can't see; good luck!",
  "Sewers With Explosives": "Long Jump to the first crystal switch to raise the metal gate. With Blast Mask, you can also hit the second crystal switch to activate the water elevator while simultaneously performing a Long Jump/Recoil Flip to get to the water elevator in time.",
  "Ranch Tingle With Sword Beams": "Shoot a Sword Beam at Tingle's balloon as Fierce Deity Link. You can get the right angle by targeting the pickaxe guy between him and the rock, on all 3 days.",
  "Doggy Racetrack Chest With Nothing": "Climb onto the awning with a precise jump without using a sword to Jump Slash through it.",
  "Faster Bank": "Makes Bank 2 require nothing, and Bank 3 require any wallet.",
  "GBT Iceless Boss Key": "Jump to the Boss Key chest without an ice platform.",
  "Gainer": "Backflip away from a wall, then re-target the wall 1 frame later.",
  "Lullaby Skip": "Skip playing Goron Lullaby to enter Snowhead Temple using either Goron Spikes or a HESS.",
  "FD Jumps": "Leap across gaps only possible with the Allow Fierce Deity's Mask Anywhere gimmick enabled.",
  "FD Difficult Jumps": "Perform the most difficult jumps, only possible with the Allow Fierce Deity's Mask Anywhere gimmick enabled.",
  "Snowball Skip": "Backflip past the large snowballs blocking the way in Path to Mountain Village.",
  "Big Octo Skip": "Get past the left side Big Octo with a precise jump and Deku voiding invulnerability frames, or get past the right side Big Octo with a Goron roll from above.",
  "Powder Keg Challenge with Hot Spring Water": "Link can use Hot Spring Water to melt the ice in front of Medigoron's cave with ISG. Zora and Fierce Deity can also do it without ISG.",
  "Harder Long Jumps": "Includes long jumping sideways to grab awkward ledges, and long jumping as Zora or Fierce Deity with Blast Mask.",
  "Difficult Goron Spike Rolls": "Use precise movement with Goron Spikes to get to hard-to-reach areas.",
  "GBT Hookless Exit": "Leave Great Bay Temple without Hookshot by carefully negotiating with the turtle's geometry.",
  "Remote Hookshot": "\"Store\" a hookshot target by drinking milk after pulling hookshot holding an empty bottle.",
  "Enemy Interactions": "Utilize enemies to your advantage. Not compatible with randomized enemies!",
  "Harder Enemy Interactions": "Utilize enemies to perform difficult tricks. Not compatible with randomized enemies!",
  "Index Warp": "Activate the Hidden Owl, and you can soar to other owl statues without hitting them.",
  "Weirdshot": "Use Hookshot during the distortion caused by rolling into an explosion.",
  "WFT Gekko Quick Kill": "Kill the WFT Gekko with bombs and jump slashing.",
  "WFT Megapound": "During Deku void invulnerability frames, get hit by an explosion while Goron Pounding to get to the 2nd floor of Woodfall Temple.",
  "Precise Zora Jumps": "Precise Zora Jumps outside of Snowhead Temple.",
  "WFT Recoil Jump": "Jump to WFT 2nd Floor as human with only a bomb and a Bombchu.",
  "WFT BK Skip": "Skip the boss key for Woodfall Temple.",
  "Zora Clips": "Clip into ledges and walls as Zora.",
  "Open Upside-Down Chests": "Open chests in ISTT from STT, and vice-versa, with hovering.",
  "STT Sun Block Clip": "Clip past the sun block in front of the Compass Chest in STT and ISTT.",
  "Equip Swap": "Equip items over the trade item slot, or the 6th bottle slot.",
  "Extremely Long Bomb Hovers": "Bomb hovers with many, many explosives, usually only possible with Blast Mask (Instant Blast Mask Cooldown recommended!)",
  "Path to Snowhead With Nothing": "Get through Path to Snowhead by mashing jump slashes on the edges of the gaps.",
  "Mountain Village Early Seamwalk": "Carefully walk up the slope and around the ice blocking Path to Mountain Village.",
  "Epona Push": "Get pushed by Epona's idle animation and amplifying the collision interaction with pause buffering.",
  "Beneath the Well Sun Block Clip": "Clip through the sun block at the end of Beneath the Well with bombs and Zora Mask or FD Anywhere.",
  "Zora Hall Doors as Human": "Get past the Zoras in front of Lulu's room and Evan's room with a twisted backflip.",
  "Honey and Darling Three Days without Bow": "Prevent yourself by getting kicked out of the minigame by pause buffering, and complete the day 2 minigame during the transition to Day 3.",
  "Weirdshot Off a Powder Keg Explosion": "Exactly as the trick name describes. Try your best to not crash your game trying this!",
  "Recoil Flip Off Enemies": "Recoil flip off enemies. Very precise!",
  "Ikana Castle Seamwalk": "Seamwalk to the top of the castle from the castle's corner on the right side.",
  "Enter Pirates' Fortress Sewers as Deku": "Clip into the Sewers from behind by voiding into a water stream as Deku.",
  "Ignore Fire Rings": "Cleverly open chests surrounded by fire.",
  "Momentary Anti-Gravity": "Slide into the corner of a roof to obtain momentary anti-gravity.",
  "Flip Stone Tower Without Light Arrows": "Flip Stone Tower by dropping water above the red emblem.",
  "Day 2 Grave Clip": "Get on top of the Day 2 Grave, then slide inside by reading the grave from above. Or simply unload the grave.",
  "Damage Boosting": "Take damage in midair from any source of damage for a small boost.",
  "Day 3 Grave Clip": "Ocarina dive into the grave from above, or read the grave from above with extreme precision.",
  "Enter Secret Shrine Without Light Arrows": "Drop water from very high above the sun switch to activate it.",
  "Leever Hover": "Get into Great Bay Coast early with only a shield.",
  "Termina Field Boulder Clip": "Get in grottos underneath boulders in Termina Field during a day/night transition.",
  "Business Scrub Flower Theft": "Damage boost into flowers occupied by business scrubs.",
  "GBT BK Skip": "Clip out of bounds as Zora and simply swim to the unloaded boss door, or hover there instead."
};


// TODO Add forms for cosmetic settings and output settings
export const cosmeticSettingTooltips = {
  "LowHealthSFXComboBox": `Select a Low Health SFX setting:

 - Default: Vanilla sound.
 - Disabled: No sound will play.
 - Random: a random SFX will be chosen.
 - Specific SFX: a specific SFX will play as the low health sfx.`,
 "EnableHoldZTargeting": "Default Z-Targeting style to Hold.",
 "RandomizeSounds": "Randomize sound effects that are played throughout the game.",
 "Music": `Select a music option

- Default: Vanilla background music.
- Random: Randomized background music.
- None: No background music.`,
 "MusicLuckRollChance": `Music Rando comes with a chance to accept a song from outside of its categories.
- This controls the percentage chance of a Luck Roll allowing out-of-category music placement
- This is per specific slot+song check
- Only songs with their first category being a general category (0-16) are Luck Rollable.`,
 "EnableNightBGM": `Enables playing daytime Background music during nighttime in the field.
(Clocktown night music can be weird)`,
 "RemoveMinorMusic": "Minor music such as indoors and grottos will not play. Background music that is already playing will instead continue.",
 "ShowTrackName": "When a new track starts playing in-game, show the name of the track at the bottom left of the screen.",
 "DisableFanfares": "Replace item fanfares and swamp shooting gallery fanfares with sound effects.",
 // TODO DisableCombatMusic is a dropdown, i think? Normal / WeakEnemies / All
 "DisableCombatMusic": "Disables combat music around all regular (non boss or miniboss) enemies in the game.",
 "ShiftHueMiscUI": "Shifts the color of miscellaneous UI elements.",
 "KeepPictoboxAntialiasing": "Keep anti-aliasing in the Pictobox pictures, which is what makes Pictobox on emulator so slow.",
 "BombTrapsRandomizeTunicColor": "When you find a Bomb Trap, Link's tunic will randomly change color.",
 "RainbowTunic": "Link's tunic color will slowly cycle its hue.",
};

export const outputSettingTooltips = {
  "GenerateROM": "Output a randomized .z64 ROM that can be loaded into a N64 Emulator.",
  "OutputVC": "Output a randomized .WAD file that can be loaded into a Wii Virtual Channel.",
  "GenerateSpoilerLog": `Output a spoiler log.

 The spoiler log contains a list over all items, and their shuffled locations.
 In addition, the spoiler log contains version information, seed and settings string used in the randomization.`,
  "GenerateHTMLLog": `Output a html spoiler log (Requires spoiler log to be checked).

 Similar to the regular spoiler log, but readable in browsers. The locations/items are hidden by default, and hovering over them will make them visible.`,
  "GeneratePatch": `Output a patch file that can be applied using the Patch settings tab to reproduce the same ROM.
Patch file includes all settings except Tunic and Tatl color.`
};