# iPhone color filter photo manager for Windows

## About
When you transfer photos from your iphone to Windows machine you may notice that extra file with `.AAE` extensions are present. These files are created in your iPhone device when you take a photo with a colour filter applied. If you have a photo with an accompanying `.AAE` file, Windows is somehow making a copy of that photo. For example, if you have an apple photo `IMG_2602` with `IMG_2602.aae`, another **jpeg** copy will be saved with `IMG_E2602` and this image contains the edits. This automation script removes does two things:

- removes unnecessary `.AAE` files
- removes the colour filtered photos originals:
  if there are unprocessed `IMG_2602.JPG` and colour filtered `IMG_E2602.JPG`,
  the script will remove unprocessed `IMG_2602.JPG`
- renames the file name of colored verison to be the same as original version, making chronology of images consistent

In `dist` folder you will find the files that are removed from `source` folder.
`source` folder will contain images cleaned from `.AAE` files and colored originals

## Disclaimer

The author of this automation tasks is not responsible for any data loss.
Please use this tool carefully.

## Installation

This tool requires:
- [node.js](https://nodejs.org/en/)
- [gulp cli](https://gulpjs.com/docs/en/getting-started/quick-start#install-the-gulp-command-line-utility)

## How to use

- download or clone the repo
- run `npm install` in the command line terminal
- place all the folder or photos that you wish to manage in the `source` folder
- run `gulp` in the command line terminal
- it may take a while for all files to be processed. After all tasks are done in the `source` folder you will find your filtered photos in their respective folders.
- in `dist` folder you will find all the removed `.AAE` files as well as the original unprocessed photos of color filtered photos.
