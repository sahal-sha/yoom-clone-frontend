import React from 'react'
import Messages from './messages'
import MessageInput from './MessageInput'
import { TiMessages } from "react-icons/ti";
import useConversation from '../../zustand/useConversation';


    const MessageContainer = () => {
      const {selectedConversation, setSelectedConversaion} = useConversation()
      
      return (
        <div className='md:min-w-[450px] flex flex-col'>
          {!selectedConversation ? (
            <NoChatSelected />
          ):(
        <>
        {/* Header */}

        
        <div className='bg-slate-500 px-4 py-2 mb-2'>
            <span className='label-text'>To:</span>
            <span className='text-gray-900 font-bold'>sahal sha</span>
        </div>

        <Messages />  
        <MessageInput />
        

        </>
        )}
        </div>
      )
    }
    
    export default MessageContainer

    const NoChatSelected = () =>{
      return(
        <div className='flex items-center justify-center w-full h-full'>
          <div className='px-4 text-center sm:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
            <p>Welcome 👋 sahal ❤️</p>
            <p>select a chat to start messaging</p>
            <TiMessages className='text-3xl md:text-6xl text-center' />
          </div>
        </div>
      )
    }

