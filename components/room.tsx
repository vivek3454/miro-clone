"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: ReactNode;
}

export const Room = ({ children, roomId, fallback}: RoomProps) => {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_jBkbFou-x4oKXbqgekeNC_e7BSzAmMeSYhv5ZvBJ0JAfUtwrgAWfILcEahXHK9L1"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};
