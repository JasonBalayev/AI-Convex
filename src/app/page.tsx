"use client";

import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { NewToDoForm } from "./components/new-todo-form";
import { ToDoList } from "./components/to-do-list";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { GenerateTodosForm } from "./components/generate-todos-form";
import { FiLogIn } from "react-icons/fi";
import { FaLinkedin, FaGithub, FaGlobe } from "react-icons/fa"; 
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-screen-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 space-y-8">
          <Authenticated>
            <motion.header
              className="flex items-center justify-between mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                AI-Convex
              </h1>
              <UserButton afterSignOutUrl="/" />
            </motion.header>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              <ToDoList />
              <GenerateTodosForm />
              <NewToDoForm />
            </motion.div>
          </Authenticated>

          <Unauthenticated>
            <motion.div
              className="flex flex-col items-center justify-center space-y-6 p-6 bg-gray-700 rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 text-lg">Please sign in to continue</p>
              <SignInButton>
                <button className="flex items-center px-5 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <FiLogIn className="mr-2" size={20} />
                  Sign In
                </button>
              </SignInButton>
            </motion.div>
          </Unauthenticated>

        
          <AuthLoading>
            <motion.div
              className="flex items-center justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <svg
                className="animate-spin h-8 w-8 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              <span className="text-gray-400 text-lg">Loading...</span>
            </motion.div>
          </AuthLoading>
        </div>
      </div>

      <motion.footer
        className="w-full py-4 flex justify-center space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
  
        <a
          href="https://www.linkedin.com/in/jasonbalayev/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-400 transition-colors duration-300"
        >
          <FaLinkedin size={24} />
          <span className="text-lg">LinkedIn</span>
        </a>
        <a
          href="https://github.com/JasonBalayev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300"
        >
          <FaGithub size={24} />
          <span className="text-lg">GitHub</span>
        </a>
        <a
          href="https://jasonbalayev.dev/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-green-500 hover:text-green-400 transition-colors duration-300"
        >
          <FaGlobe size={24} />
          <span className="text-lg">Website</span>
        </a>
      </motion.footer>
    </div>
  );
}
