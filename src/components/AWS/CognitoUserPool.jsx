import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "eu-central-1_POSOOsArR",
    ClientId: "5cbfcci6qkclmtiak1fo7j0av5"

}

export default new CognitoUserPool(poolData);