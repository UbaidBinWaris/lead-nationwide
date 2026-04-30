"use client";

import { useActionState } from "react";
import { authenticate } from "@/app/l8I32auyIM/login/actions";
import { MdLockOutline } from "react-icons/md";

export function LoginForm() {
  const [errorMessage, dispatch, isPending] = useActionState(authenticate, undefined);

  return (
    <form action={dispatch} className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl shadow-navy-deep/10 border border-border-light">
      <div className="mb-8 flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-blue-primary">
          <MdLockOutline size={28} />
        </div>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-text-primary">Admin Portal</h2>
        <p className="mt-1 text-sm text-text-secondary">Sign in to manage submissions.</p>
      </div>
      
      <div className="space-y-5">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-primary">Username</label>
          <input 
            type="text" 
            name="username" 
            required 
            autoComplete="username"
            className="w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary" 
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-text-primary">Password</label>
          <input 
            type="password" 
            name="password" 
            required 
            autoComplete="current-password"
            className="w-full rounded-xl border border-border-light bg-bg-secondary px-4 py-2.5 text-sm text-text-primary outline-none transition-all focus:border-blue-primary focus:ring-1 focus:ring-blue-primary" 
          />
        </div>
      </div>

      {errorMessage && (
        <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600 border border-red-100">
          {errorMessage}
        </div>
      )}

      <button 
        disabled={isPending} 
        className="mt-8 flex w-full justify-center rounded-xl bg-blue-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-primary/20 transition-all hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}
