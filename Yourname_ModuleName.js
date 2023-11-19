// module.exports = {
let karaoke = {

    customers : [{name:n ,
        groupsize:size,
        room:r,
    }],
    
    async AddCustomer(n,size,r = null) {
        await(this.customers.push({name:n ,
        groupsize:size,
        room:r,
    }))
    console.log('Customer has been added');
    },
    //Add Customer 

    GetCustomers(){
        return this.customers;
    },
    //Get all Customers

    GetCustomerByRoom(roomName){
        const customersInRoom = this.customers.filter(customer => customer.room === roomName);

        if (customersInRoom.length > 0) {
            console.log('Customers in Room ${roomName}:');
            customersInRoom.forEach(customer => {
                console.log('- ${customer.name}');
            });
        } else {
            console.log('No customers found in Room ${roomName}');
        }

        return customersInRoom;
    },
    //Get customer inside room



    Rooms:[{name:"" ,slots:""}],

        async AddRooms(){
            await(this.Rooms.push({name:"Small" ,slots:2},{name:"Large",slots:6},{name:"Medium",slots:4}));
            console.log('Rooms added!');
        },
        //Preset Rooms to use

        async AddRoom(n,s) {   
            
            await(this.Rooms.push({name:n ,slots:s}));
            console.log('Added Room' + n);
        },
        //Add a new room

        GetRooms(conditions) {
            return this.Rooms;
        },
        //Show all the Rooms
    
    AssignRoom(customerName) {

        const customer = this.customers.find(cust => cust.name === customerName);

        if (!customer) {
            console.log(`Customer with name '${customerName}' not found`);
            return;
        }

        // Find the first available room
        const availableRoom = this.Rooms.find(room => room.slots > 0);

        if (availableRoom) {
            // Assign the room to the customer
            customer.room = availableRoom.name;
            availableRoom.slots--;

            console.log(`Room ${availableRoom.name} assigned to ${customer.name}`);
        } else {
            console.log("No available rooms");
        }
    },
    //Auto Assign the room by Group size
    AssignRoom(customerName, roomName) {
        const customer = this.customers.find(cust => cust.name === customerName);

        if (!customer) {
            console.log(`Customer with name '${customerName}' not found`);
            return;
        }

        const selectedRoom = this.Rooms.find(room => room.name === roomName);

        if (!selectedRoom) {
            console.log(`Room with name '${roomName}' not found`);
            return;
        }

        // Assign the specified room to the customer
        customer.room = selectedRoom.name;
        selectedRoom.slots--;

        console.log(`Room ${selectedRoom.name} assigned to ${customer.name}`);
    },
    //Manually Assign Customer Room


    
    RemoveCustomer(customerName) {
        const index = this.customers.findIndex(customer => customer.name === customerName);

        if (index !== -1) {
            const removedCustomer = this.customers.splice(index, 1)[0];
            console.log(`Customer ${removedCustomer.name} removed`);
            
            // If the customer had a room assigned, increase the available slots for that room
            if (removedCustomer.room) {
                const assignedRoom = this.Rooms.find(room => room.name === removedCustomer.room);
                if (assignedRoom) {
                    assignedRoom.slots++;
                    console.log(`Room ${assignedRoom.name} slots increased`);
                }
            }
        } else {
            console.log(`Customer with name '${customerName}' not found`);
        }
    },
    //Removes Customer and returns Rooms slots
}