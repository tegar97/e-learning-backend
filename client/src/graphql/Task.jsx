import gql from 'graphql-tag'

export const SEND_TASK = gql`
mutation CreateUserCollect($task_message_online:String!,$timeLineId: String!,$file: String!){
    CreateUserCollect(data:{task_message_online : $task_message_online,timeLineId: $timeLineId,file: $file}){
      id
    
  }
}
`



export const GIVE_SCORE = gql`
mutation GiveScore($timeLineId:String!,$userCollectionId: String!,$point: Float!,$feedBack: String!){
  GiveScore(timeLineId:$timeLineId,userCollectionId: $userCollectionId,point:$point,feedBack:$feedBack)
}
`

export const GET_SCORE = gql`
query GetScore($timeLineId:String!){
  GetScore(timeLineId:$timeLineId){
    task_message_online
    point
    file
    feedBack
  }
}
`


