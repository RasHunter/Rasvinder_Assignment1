# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax

The starting is to use the AddRooms function to show the current presets.

karaoke.AddRooms();
//Gets All the Presets into the Rooms[]

Then to add a new Room if need use AddRoom fuction to add a new room.

karaoke.AddRoom("Very Large",8);

To show all rooms use the function GetRooms

console.log(karaoke.GetRooms());


Next would be to Add a Customer

karaoke.AddCustomer("Mariah Carey",4);
or with room assigning
karaoke.AddCustomer("Mariah Carey",4,"Medium");

to show all customer use the GetCustomers function

console.log(karaoke.GetCustomers());

if room not assigned by using AddCustomer then the AssignRoom Function can be done.

karaoke.AssignRoom("Mariah Carey");
//Auto Assign to available room with slots

OR

karaoke.AssignRoom("Mariah Carey","Medium");
//Manually Assign Rooms

Lastly Customer can be Removed and the room they were in regains its slots by using the function RemoveCustomer

karaoke.RemoveCustomer();

