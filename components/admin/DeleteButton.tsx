"use client";

import { useState } from "react";
import { deleteMessage } from "@/app/l8I32auyIM/actions";
import { MdDeleteOutline } from "react-icons/md";

export function DeleteButton({ messageId }: { messageId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    
    setIsDeleting(true);
    const result = await deleteMessage(messageId);
    
    if (!result.success) {
      alert("Failed to delete message");
      setIsDeleting(false);
    }
    // If successful, the server action revalidates the path, so the page will update automatically.
  };

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="inline-flex items-center justify-center rounded-lg p-2 text-text-secondary transition-colors hover:bg-red-50 hover:text-red-primary focus:outline-none focus:ring-2 focus:ring-red-primary focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      title="Delete message"
    >
      {isDeleting ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-red-primary/30 border-t-red-primary" />
      ) : (
        <MdDeleteOutline size={20} />
      )}
    </button>
  );
}
