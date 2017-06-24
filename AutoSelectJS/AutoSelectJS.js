import {getLocations} from 'locations'
import {getIDs} from 'locations'


var temp = "07";
var count = 0;


var myArr = getLocations(); 	//This is your input file. The values you want to automatically insert into the selector are stored here in a 2D array
var IDs = getIDs();		//The ID is simply the id of the selector (can be found by clicking the selector and right clicking 'inspect element')

<script

var tid = setTimeout(mySearch, 2000);

function mySearch() {

    for (x = 0; x < myArr[0].length; x++) {
        temp = myArr[count][x];
        var mySelect2 = document.getElementById(categories[x]);
		
		//Finds the option in the drop down menu and selects it
        for (var i, j = 0; i = mySelect2.options[j]; j++) {
            if (i.value == temp) {
                mySelect2.selectedIndex = "0" + j;

                break;
            }
        }
    }
    
    //These functions initiate requests to the third party web server and ultimately returns the coordinates
    getCurrentLSD(0);
    rePopulate()
    count = count + 1;
    
    //The count variable can be adjusted to reflect the size of the input file
    if (count == 273) {
        abortTimer;
    } else {
        tid = setTimeout(mySearch, 2000); // repeat myself
    }

}

function abortTimer() { // to be called when you want to stop the timer
    clearTimeout(tid);
}



console.log(sec.options);
console.log("Hello");
