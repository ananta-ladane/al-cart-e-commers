import { configureStore, createSlice } from "@reduxjs/toolkit";


const myData = createSlice({
    name: "myreducer",
    initialState: {
        users: [

        ],

        storeid: [],
        products: [],

        currentUser: [{
            userid: null

        }],

        Buyprodet: [],

        allData: [],

        addcard: [],

        apcount: [0],

        // islogin: false
    },
    reducers: {

        // product data from local storage


        // const user = users.find((x) => {
        //     return x.username === uname.current.value && x.password === upass.current.value
        // })
        // login(state, action) {

        //     let username = action.payload.username;
        //     let email = action.payload.email;
        //     let password = action.payload.password;

        //     const user = state.users.find((x) => { return x.username === username && x.email === email && x.password === password });
        //     // console.log(JSON.parse(JSON.stringify(user)));

        //     if (user) {
        //         state.islogin = true;
        //         state.currentUser = user;
        //         console.log(state.islogin)
        //         console.log(state.currentUser)
        //     }

        // },

        addStoreid(state, action) {
            state.storeid = action.payload
            console.log(state.storeid)
        },

        userAdd(state, action) {

            state.currentUser = action.payload
            console.log(state.currentUser)

        },

        addData(state, action) {
            state.Buyprodet = [...state.Buyprodet, action.payload];
            //  console.log(state.Buyprodet)

            console.log(JSON.parse(JSON.stringify(state.Buyprodet)));
        },

        // loadData(state, action) {
        //     state = action.payload;

        // },

        addTocard(state, action) {

            state.addcard = [...state.addcard, action.payload]

            console.log(state.addcard)
            console.log("this is the add to card data")

        },

        adCount(state, action) {

            state.apcount = Number(state.apcount) + 1

            console.log(state.apcount)

        },

        logout(state) {

            state.islogin = false;
            // console.log(state.islogin);
            state.allData = [];


        }

    }
});



const store = configureStore({ reducer: myData.reducer });




export default store;

export const actions = myData.actions;







