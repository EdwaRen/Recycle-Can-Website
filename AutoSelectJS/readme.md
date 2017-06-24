# AutoSelectJS
This javascript tool was used to mass translate locations using the Alberta Township System (ATS) into latitude and longitude coordinates. This was done on the following website: https://locator.scadalink.com/dls2latlng.html

# Guide
For this to work, you would need to run external javascript on an online webpage. Custom Javascript for Websites is a nice Google Chrome extension that does this. Once that is installed, fill out the locations.js file with your own custom coordinates the ATS addresses (The addresses must be in an array format, MS Excel does a very good job doing this). Make sure that the id.js file contains the selector ids, this can be found on clicking 'inspect element' for the selector.

If external script support does not work, you can always copy paste the values 'AlbertaPaint' array in 'locations.js' to 'AutoSelectJS.js' and rename it 'MyArr'. The same goes for the 'categories' array in 'id.js'

# Extraction
Rather than manually code an extraction tool in Javascript to display the web response, Google Chrome already has a tool for this! Go to Developer Tools, then select network and all messages to and from the webserver are recorded for your convenience.
