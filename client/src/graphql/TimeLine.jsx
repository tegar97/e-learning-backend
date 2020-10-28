import gql from 'graphql-tag'

export const CREATE_ANNOUCMENT = gql`
      mutation CreatePost($content:String!,$type_content: String!,$class_id:String! ){
        CreatePost(data:{content : $content,type_content: $type_content,class_id: $class_id}){
            id
            content
        }
    }

`


export const GET_TIMELINES = gql`
      query GetTimeLines($id: String! ){
        getTimeLines(class_id:$id){
            id
            content
            created_by{
                name
            }
        }
    }

`