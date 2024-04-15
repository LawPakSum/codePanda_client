import axios from "axios";

function addUser(user){

    const addUser = process.env.REACT_APP_SERVER_URL+"/addUser";
    axios.post(addUser, user).then((response)=>{
        alert("student added successfully")
        return true;
    }).catch((error)=>{
        console.log(error);
        alert("adding fail")
    });
}

function updateUser(user){
    const updateUser = process.env.REACT_APP_SERVER_URL+"/updateUser";
    axios.post(updateUser, user).catch((error)=>{console.log(error)});
}

export {addUser, updateUser};