"use client";

import { useEffect } from "react";
import { MdClose, MdDeleteOutline, MdPerson, MdEmail, MdPhone, MdBusiness, MdDateRange, MdDevices, MdLanguage } from "react-icons/md";
import { deleteMessage } from "@/app/l8I32auyIM/actions";
import { useState } from "react";

type MessageDetails = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  ip: string | null;
  browser: string | null;
  os: string | null;
  device: string | null;
  createdAt: Date;
};

interface MessageModalProps {
  message: MessageDetails | null;
  isOpen: boolean;
  onClose: () => void;
  onDeleted: () => void;
}

export function MessageModal({ message, isOpen, onClose, onDeleted }: MessageModalProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !message) return null;

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to permanently delete this message?")) return;
    setIsDeleting(true);
    const result = await deleteMessage(message.id);
    setIsDeleting(false);
    if (result.success) {
      onDeleted();
    } else {
      alert("Failed to delete message");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4 bg-slate-800/50">
          <h2 className="text-xl font-bold text-white">Message Details</h2>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-700 hover:text-white transition-colors"
          >
            <MdClose size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Left Column: Sender Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Sender Information</h3>
              <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4 space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <MdPerson className="text-slate-400" size={20} />
                  <span className="font-medium">{message.name}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <MdEmail className="text-slate-400" size={20} />
                  <a href={`mailto:${message.email}`} className="text-blue-400 hover:underline">{message.email}</a>
                </div>
                {message.phone && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <MdPhone className="text-slate-400" size={20} />
                    <a href={`tel:${message.phone}`} className="text-blue-400 hover:underline">{message.phone}</a>
                  </div>
                )}
                {message.company && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <MdBusiness className="text-slate-400" size={20} />
                    <span>{message.company}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Meta Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Meta & Tracking</h3>
              <div className="rounded-xl border border-slate-800 bg-slate-800/30 p-4 space-y-3">
                <div className="flex items-center gap-3 text-slate-200">
                  <MdDateRange className="text-slate-400" size={20} />
                  <span>{new Date(message.createdAt).toLocaleString()}</span>
                </div>
                {message.ip && (
                  <div className="flex items-center gap-3 text-slate-200">
                    <MdLanguage className="text-slate-400" size={20} />
                    <span className="font-mono text-sm">{message.ip}</span>
                  </div>
                )}
                {(message.device || message.os || message.browser) && (
                  <div className="flex items-start gap-3 text-slate-200">
                    <MdDevices className="text-slate-400 mt-1" size={20} />
                    <div className="flex flex-col text-sm">
                      {message.device && <span>{message.device}</span>}
                      {message.os && <span className="text-slate-400">{message.os}</span>}
                      {message.browser && <span className="text-slate-400">{message.browser}</span>}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Message Content */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Full Message</h3>
            <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-inner">
              <p className="whitespace-pre-wrap text-slate-300 leading-relaxed">
                {message.message}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-4 border-t border-slate-800 bg-slate-800/50 px-6 py-4">
          <button 
            onClick={onClose}
            className="rounded-lg px-4 py-2 font-medium text-slate-300 transition-colors hover:bg-slate-700 hover:text-white"
          >
            Close
          </button>
          <button 
            onClick={handleDelete}
            disabled={isDeleting}
            className="flex items-center gap-2 rounded-lg bg-red-500/10 px-4 py-2 font-medium text-red-500 transition-colors hover:bg-red-500/20 disabled:opacity-50"
          >
            {isDeleting ? (
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-red-500/30 border-t-red-500" />
            ) : (
              <>
                <MdDeleteOutline size={20} />
                Delete Message
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
