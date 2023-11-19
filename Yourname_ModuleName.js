// module.exports = {
let karaoke = {


    customers : [],
    // {name:"" ,
    //     groupsize:"",
    //     date:"",
    //     starttime:"",
    //     endtime:"",
    // // AddCustomer() {
    // //     await(this.customers.push({}));
    // },

    // let customers ={
    //     name:"" ,
    //     groupsize:"",
    //     date:"",
    //     starttime:"",
    //     endtime:"",
        AddCustomer(n,size,date,start,end) {
            await(this.customers.push({name:n ,
            groupsize:size,
            date:date,
            starttime:start,
            endtime:end,
        }))
        console.log("Customer has been added");
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