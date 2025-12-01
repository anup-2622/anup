import { useEffect } from "react";

import { io } from "socket.io-client";

function Chat() {
  const socket = io("http://localhost:3030");
  useEffect(() => {

    socket.on('newMessage',(newM)=>{console.log(newM, "new Message rendering to all the users using emit")})

  }, []);

  return (
    <div className=" fixed bottom-0 w-56 h-56 border-red-200 border-1 ">
      chat
    </div>
  );
}

export default Chat;
