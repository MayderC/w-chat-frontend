import { useEffect, useState, useContext } from "react";
import { socketContext } from "./SocketContext";
import { io } from "socket.io-client";
import { Context } from "../Context";

export const SocketProvider = ({ children }) => {
  const { TOKEN } = useContext(Context);
  const [socket, setSocket] = useState(() => {
    return io(process.env.REACT_APP_BACKEND_URL, {
      auth: { token: TOKEN },
    });
  });

  useEffect(() => {
    setSocket(() =>
      io(process.env.REACT_APP_BACKEND_URL, {
        auth: { token: TOKEN },
      })
    );
  }, [TOKEN]);

  return (
    <socketContext.Provider value={{ socket }}>
      {children}
    </socketContext.Provider>
  );
};
