module.exports = {
    // Explain what function A does
    //let karaoke = {

    customers : []{name:"" ,
        groupsize:"",
        date:"",
        starttime:"",
        endtime:"",
    // AddCustomer() {
    //     await(this.customers.push({}));
    },
    }

    // let customers ={
    //     name:"" ,
    //     groupsize:"",
    //     date:"",
    //     starttime:"",
    //     endtime:"",
        AddCustomer() {
            await(this.customers.push({}));
        },
    // },
        Rooms:[],

        AddRoom(n,c,s) {   
            
            await(this.Room.push({name:n , code:c, slots:s}));
            console.log("Added Room " + n);
        },
        GetRooms(conditions) {
            
        },
    

    
    // Explain what function B does
    AssignRoom() {
        console.log("Hello function B");
    },
    
    FindByTime() {
        return 1+2;
    },
    StopSession() {
        return 1+2;
    },
//},
}