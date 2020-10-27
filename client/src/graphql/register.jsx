import gql from 'graphql-tag'


export const REGISTER_USER = gql`
    mutation Register($name: String! ,$email:String!,$password: String!,$confirmPassword: String! ){
        register(data:{name: $name,email: $email,password: $password,confirmPassword: $confirmPassword}){
            _id
            name
            email,
            photo
        }
    }

`