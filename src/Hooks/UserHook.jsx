import axios from "axios";

function addUser(user){
    const addUser = process.env.REACT_APP_SERVER_URL+"/addUser";
    axios.post(addUser, user).catch((error)=>{
        console.log(error);
    });
}

function updateUser(user){
    const updateUser = process.env.REACT_APP_SERVER_URL+"/updateUser";
    axios.post(updateUser, user).catch((error)=>{console.log(error)});
}

export {addUser, updateUser};