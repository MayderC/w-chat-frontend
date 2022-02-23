import { useEffect, useState, useCallback, useContext } from "react";
import { socketContext } from "./SocketContext";
import { io } from "socket.io-client";
import { Context } from "../Context";

export const SocketProvider = ({ children }) => {
  const { TOKEN } = useContext(Context);
  const [socket, setSocket] = useState(() => {
    return io("http://localhost:3001", {
      auth: { token: TOKEN },
    });
  });

  useEffect(() => {
    setSocket(() =>
      io("http://localhost:3001", {
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
