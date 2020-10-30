import gql from 'graphql-tag'

export const CREATE_COMMENTS = gql`
      mutation CreateComment($id:String!,$content:String! ){
        CreateComment(id:$id,content:$content){
            id
            content
        }
    }

`

