// module.exports = {
let karaoke = {

    customers : [{name:n ,
        groupsize:size,
        date:date,
        starttime:start,
        endtime:end,
        room:r,
    }],
    
        AddCustomer(n,size,date,start,end,r) {
            await(this.customers.push({name:n ,
            groupsize:size,
            date:date,
            starttime:start,
            endtime:end,
            room:r,
        }))
        console.log("Customer has been added");
        },
    // },
        Rooms:[{name:"" ,slots:""}],

        AddRooms(){
            await(this.Room.push({name:"Small" ,slots:2},{name:"Large",slots:6},{name:"Medium",slots:4}));
            console.log("Rooms added!");
        },
        //Preset Rooms to use

        AddRoom(n,s) {   
            
            await(this.Room.push({name:n ,slots:s}));
            console.log("Added Room " + n);
        },
        GetRooms(conditions) {
            return this.Rooms;
        },
    

    
    
    AssignRoom() {
        console.log("Hello function B");
    },
    
    FindByTime() {
        return 1+2;
    },
    RemoveCustomer() {
        
    },
}