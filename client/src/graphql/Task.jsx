import gql from 'graphql-tag'

export const SEND_TASK = gql`
mutation CreateUserCollect($task_message_online:String!,$timeLineId: String!){
    CreateUserCollect(data:{task_message_online : $task_message_online,timeLineId: $timeLineId}){
      id
    
  }
}
`