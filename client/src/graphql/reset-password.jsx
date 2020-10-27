import gql from 'graphql-tag'


export const FORGOT_PASSWORD = gql`
    mutation ForgotPassword($email:String!){
        forgotPassword(data:{email: $email})        
    }

`
export const RESET_PASSWORD = gql`
    mutation ResetPassword($password:String!,$passwordConfirm: String!,$tokenParams: String!){
        resetPassword(data:{password: $password,passwordConfirm : $passwordConfirm,tokenParams: $tokenParams}){
            _id
            name
            email
            createdAt
            token
        }        
    }

`

export const CHECK_PAGE_RESET_PASSWORD = gql`
    query CheckPageResetPassword($token:String!){
        checkPageResetPassword(token: $token)        
    }

`