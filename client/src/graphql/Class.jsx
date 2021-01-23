import gql from 'graphql-tag'

export const JOIN_CLASS = gql`
    mutation JoinClass($code_class:String! ){
        joinClass(code_class : $code_class){
            id
            name
        }
    }

`

export const CREATE_CLASS = gql`
    mutation CreateClass($name:String!,$description:String!,$subjects:String!,$lesson_day: Float! ){
        createClass(data:{name: $name,description: $description,subjects:$subjects,lesson_day:$lesson_day }){
            id
            name
        }
    }

`


export const GET_CLASS_TODAY = gql`
    {
        getClassNow{
                id
                name

            }
    }
       
    

`


export const GET_CLASS = gql`
     query GetDetailRoom($id: String!){
        getDetailRoom(id: $id){
            id
            name
            code_class
            subjects
            description
            user{
                name
                id
                isAdmin
            }
        }
    }
       
    

`

export const CHECK_ADMIN = gql`
    query CheckAdmin($id:String!){
        CheckAdmin(id:$id)
    }
`
export const FIND_ALL_CLASS = gql`
    query findAllClass{
        findAllClass{
            name
            user{
                name
            }
            id

        }
    }
`

