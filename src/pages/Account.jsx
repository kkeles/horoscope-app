import React,{useContext} from 'react';
import { AccountContext } from "../components/AWS/AccountActions";
  
const Account = () => {
    const getUser = useContext(AccountContext).getUser;

    const getuserData = () => {
        return (console.log(getUser().email));
    }



    const manualPost = () => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST','https://1o5beo8eq4.execute-api.eu-central-1.amazonaws.com/PreDEV/compare-yourself');
        xhr.onreadystatechange = function(event) {
            console.log("evt target response: ", event.target.response);
        }

        xhr.setRequestHeader("Content-Type","application/json");
        xhr.send(JSON.stringify({name: "Selena",age:32,income:1500}))
    }

    

  return (
    <div>
      <h1>This is an Account page!</h1>
      <button onClick={manualPost}>Send Data</button>
      <button onClick={getuserData}>GetUser</button>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus suscipit ipsa dignissimos vero at. Voluptatum adipisci odio aspernatur dignissimos, mollitia quia, saepe alias vitae culpa maxime illo omnis fugiat! Ea.</h3>
    </div>
  );
};
  
export default Account;