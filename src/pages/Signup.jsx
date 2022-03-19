import React,{useState} from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import CognitoUserPool from "../components/AWS/CognitoUserPool";


const Signup = () => {
    const [email, setEmail] = useState(""); //useState of e-mail to have a field to add e-mail details.
    const [password, setPassword] = useState(""); //useState of password to have a field to add password details.
    const [name, setName] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender,setGender] = useState("");
    const current = new Date().toISOString().split("T")[0];




    const onSubmit = (event) => { //event received as the input. The following form will take onSubmit function
        // as a reference and will apply the signUp method below, once submitted with given input from above.

        //prevents to submit the form to the page. It is used to prevent form actions in traditional HTML but React.
        event.preventDefault();
        var attributeList = [];
        attributeList.push(new CognitoUserAttribute({Name:"name",Value:name}));
        attributeList.push(new CognitoUserAttribute({Name:"birthdate",birthdate}));
        attributeList.push(new CognitoUserAttribute({Name:"gender",Value:gender}));

        // CognitoUserPool.signUp takes five inputs. Usually stated as the one below:
        CognitoUserPool.signUp(email, password, attributeList, null, (err,data)=> {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            };
        });
    };

    return (
    <div>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input //the value of this input is the email object created above. Once changed, also change the value.
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            ></input>

            <label htmlFor="password">Password</label>
            <input
                type="password" //to hide the password entry.
                value={password} //the value of this input is the password object created above. Once changed, also change the value.
                onChange={(event) => setPassword(event.target.value)}
            ></input>

            <label htmlFor="name">Name</label>
            <input //the value of this input is the email object created above. Once changed, also change the value.
                value={name}
                onChange={(event) => setName(event.target.value)}
            ></input>

            <label htmlFor="gender">Gender</label>
            <div 
                value={gender}
                onChange={(event) => setGender(event.target.value)}>
                <input type="radio" value="male" name="gender"/> Male
                <input type="radio" value="female" name="gender"/> Female
                <input type="radio" value="other" name="gender"/> Prefer Not To Say/Other
            </div>

            <label htmlFor="birthdate">Birth Date</label>
                <input type='date'
                placeholder='Enter BirthDate'
                value={birthdate} onChange={(event) => {setBirthdate(event.target.value)}}
                name='birthdate'
                max={current}
                />

            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
};

export default Signup;