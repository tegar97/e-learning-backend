import { gql } from "@apollo/client";

export const JOIN_CLASS = gql`
    mutation JoinClass($code_class:String! ){
        joinClass(code_class : $code_class){
            id
            name
        }
    }

`