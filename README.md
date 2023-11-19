# Assignment 1

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

