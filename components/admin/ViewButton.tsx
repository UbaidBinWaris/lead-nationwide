"use client";

import { useState } from "react";
import { MdVisibility } from "react-icons/md";
import { MessageModal } from "./MessageModal";
import { markAsRead } from "@/app/l8I32auyIM/actions";

export function ViewButton({ message }: { message: any }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = async () => {
    setIsOpen(true);
    if (!message.isRead) {
      await markAsRead(message.id);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        title="View details"
      >
        <MdVisibility size={20} />
      </button>

      <MessageModal 
        message={message} 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onDeleted={() => setIsOpen(false)} 
      />
    </>
  );
}
