import axios from "axios"

export function creaetUser(user){
    return new Promise((resolve,reject)=>{
        axios({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            data: user
            //this is used for the authorization for backend
            // headers:{
            //     'Authorization':`some secrete`,
            // }
        }).then((resp)=>{
            resolve(resp.data)
        })
    })
}