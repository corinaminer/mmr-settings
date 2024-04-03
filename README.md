# MMR Settings Generator
Page: https://corinaminer.github.io/mmr-settings/

This repository is the source for a basic webpage where you can make settings for [Zoey Zolotova's Majora's Mask randomizer](https://github.com/ZoeyZolotova/mm-rando). Zoey has developed a very lovely GUI for generating MMR seeds, but it only runs on Windows. If you're a Mac user hoping to play some MMR without running a VM, this is for you.

## How to generate settings
The webpage is very basic. Configure the settings on the page as you like, then hit the "Download Settings" link at the bottom to get your `mmr-settings.json` file.

Once you have the settings file, you can use the CLI in Zoey's randomizer to generate a seed.

## Current limitations
### MMR version
This page is made for MMR version 1.16.0.8, which is currently in beta and can be found in the `#beta-releases` channel of the [MMR discord](https://discord.gg/7jBRhhJ). While the randomizer is generally graceful at handling missing and unknown settings fields, watch out for unexpected behavior if you are running a different version.

If you're running a newer randomizer version and you find that the page is missing new configurable settings, please feel free to [file an issue](https://github.com/corinaminer/mmr-settings/issues/new) letting me know. You can still configure the new settings by manually editing your settings file.

### Cosmetic and output settings
The page is currently only set up to configure `GameplaySettings`. If you want to customize other settings categories, you'll need to do that manually or copy from another settings file for now. I plan to add cosmetic settings customization in the near future.

### Missing configurability
Zoey's GUI has certain cabablities that the webpage currently lacks:
- Starting item customization. Haven't yet figured out how to change the starting items from the vanilla default, including Deku Mask.
- Fully granular customizability of randomized checks. The page lets you randomize by category (e.g. stray fairies), not by individual check (e.g. Woodfall Jar Fairy).
- Customized junk locations.
- TrapWeights setting. Don't have an example settings file with trap weights, and haven't looked into the expected format. Low priority.
