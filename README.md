# MMR Settings Generator
Page: https://corinaminer.github.io/mmr-settings/

This repository is the source for a basic webpage where you can make settings for [Zoey Zolotova's Majora's Mask randomizer](https://github.com/ZoeyZolotova/mm-rando). Zoey has developed a very lovely GUI for generating MMR seeds, but it only runs on Windows. If you're a Mac user hoping to play some MMR without running a VM, this is for you.

## How to generate settings
The webpage is very basic. Configure the settings on the page as you like, then hit the "Download Settings" link at the bottom to get your `mmr-settings.json` file.

Once you have the settings file, you can use the CLI in Zoey's randomizer to generate a seed. Check out [this guide](https://docs.google.com/document/d/19lqbkCu9ai_0nqJ5T7fWJuK6JZnZz0xUKxD4mg7J4ZI/) for help generating seeds with the CLI.

## Current limitations
### MMR version
This page is made for MMR version 1.16.0.8, which is currently in beta and can be found in the `#beta-releases` channel of the [MMR discord](https://discord.gg/7jBRhhJ). While the randomizer is generally graceful at handling missing and unknown settings fields, watch out for unexpected behavior if you are running a different version.

If you're running a newer randomizer version and you find that the page is missing new configurable settings, please feel free to [file an issue](https://github.com/corinaminer/mmr-settings/issues/new) letting me know. You can still configure the new settings by manually editing your settings file.

### Cosmetic and output settings
The page is currently only set up to configure `GameplaySettings`. Cosmetic and output settings are always taken from the default `settings.json` file, even if they are configured in the file supplied with the `-settings` arg. I am open to adding ability to configure cosmetic settings, but then users would need to copy the downloaded cosmetic settings into `settings.json`.

Alternatively, I could attempt to make the downloaded file complete enough to replace `settings.json`, but then it would be less compatible across versions.

### Missing configurability
Zoey's GUI has certain cabablities that the webpage currently lacks:
- Fully granular customizability of randomized checks. The page lets you randomize by category (e.g. stray fairies), not by individual check (e.g. Woodfall Jar Fairy).
- Customized starting items. If you don't shuffle masks, you will start with Deku; if you don't shuffle songs, you will start with Healing and Soaring (and Song of Time, which is a given that won't be randomized unless you select a specific setting for that).
- Customized junk locations.
- TrapWeights setting. Don't have an example settings file with trap weights, and haven't looked into the expected format. Low priority.
