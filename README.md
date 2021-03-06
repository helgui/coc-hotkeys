# Unofficial hotkey script for Crusaders of Crypto

Hotkey support in CoC is very requested feature and it was planned to be implemented, but y'all know, sad things happened...

## How to use

Although the code is tested only in Chrome, it should be working in any other browser that supports external script execution (no guarantee tho). I provide instructions for Chrome only.

At first you have to save the script as Chrome snippet. To do that open developer tools (F12 or Ctrl+Shift+I) and go to `Sources` tab.

![step 1](/pics/step01.png)

In the left panel choose `Snippets`

![step 2](/pics/step02.png)

and click `+ New snippet`

![step 3](/pics/step03.png)

Type the name whatever you want and copypaste contents of [coc-hk.js](coc-hk.js) to the main text field. Finally, press Ctrl+S to save the snippet.

![step 4](/pics/step04.png)

To activate hotkey functionality open the game and wait until it's loaded. Then open developer tools, go to `Snippets`, right-click your snippet and choose `Run` in the popup menu. This action must be done every time you load the game.

![step 5](/pics/step05.png)

That's it! Now you can use hotkeys in the following layout:
  * **M** for map
  * **I** for inventory
  * **L** for combat log
  * **E** for equipment
  * **Y** for start over

~Miley? Who is Miley?~

Keys function as toggles, so you should press **M** to open the map as well as to close it. I'd not recommend to mix keyboard and mouse control, so if you opened a panel using keyboard you should close it with keyboard and vice versa.

