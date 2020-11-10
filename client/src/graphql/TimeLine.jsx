import gql from 'graphql-tag'

export const CREATE_ANNOUCMENT = gql`
      mutation CreatePost($content:String!,$content_title:String!,$type_content: String!,$class_id:String! ){
        CreatePost(data:{content : $content,content_title:$content_title,type_content: $type_content,class_id: $class_id}){
            id
            content
        }
    }

`
export const CREATE_TASK = gql`
      mutation CreateTask($content:String!,$content_title:String!,$type_content: String!,$class_id:String!,$point:Float!,$due: String!,$file: String!){
        CreatePost(data:{content : $content,content_title:$content_title,type_content: $type_content,class_id: $class_id,point:$point,due:$due,file:$file}){
            id
            content
        }
    }

` 


export const UPDATE_TASK = gql`
      mutation EditPost($id:String! $content:String!,$content_title:String!,$due: String! ,$isActive: Boolean){
        EditPost(data:{id:$id,content : $content,content_title:$content_title,due:$due,isActive: $isActive})
    }

`

export const DELETE_TASK = gql`
      mutation DeletePost($id:String!){
        DeletePost(id:$id)
    }
\
`

export const GET_TIMELINES = gql`
      query GetTimeLines($id: String! ){
        getTimeLines(class_id:$id){
            id
            content
            content_title
            type_content
            due
            file
            created_by{
                _id
                name
            }
            createdAt
            commentsCount
            comments{
                id
                content
                user_id
                user_name
                user_photo
                createdAt
            }
            
        }
    }

`


export const GET_TIMELINE = gql`
      query GetTimeLine($id: String! ){
        getTimeLine(id:$id){
            id
            
            content,
            content_title
            due
            isActive
            
            user_collect{
                id
                user_id
                file
                user_name
                user_email
                task_message_online
                feedBack
                task_file{file_name }
                isLate
                point
            }
            created_by{
                name
            }
            createdAt
            comments{
                id
                content
                user_id
                user_name
                user_photo
                createdAt
            }
            
        }
    }

`

