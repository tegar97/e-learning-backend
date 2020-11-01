import gql from 'graphql-tag'


export const LOGIN_USER = gql`
    mutation Login($email:String!,$password: String! ){
        login(data:{email : $email,password: $password}){
            _id
            name
            email
            photo
            token
        }
    }

`

export const CHECK_FINISH_TASK = gql`
    query CheckFinishTask($id:String!){
        CheckFinishTask(id:$id)
    }
`