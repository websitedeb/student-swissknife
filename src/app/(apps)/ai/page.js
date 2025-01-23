"use client";

import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ChatMessageList } from "@/components/ui/chat/chat-message-list";

import { S } from "./s";
import { R } from "./r";
import { L } from "./l";

import Markdown from "react-markdown";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useState, useRef } from "react";

function Inputcomp({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  const element = useRef(0);

  function clear(){
    if(element.current){
      element.current.value = "";
    }
  }

  return (
    <div className="grid place-items-center">
      <div className="flex bg-gray-950 max-w-fit p-2 rounded-xl items-center">
        <form className="flex space-x-2" onSubmit={handleSubmit(onSubmit)}>
          <Input className="w-96" {...register("prompt")} ref={element}/>
          <button
            type="button"
            onClick={clear}
            className="rounded-full bg-red-600 text-white hover:bg-red-950 h-10 px-4 py-2"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <Button
            type="submit"
            className="rounded-full bg-red-600 text-white hover:bg-red-950"
          >
            <i className="bi bi-chat-left-fill"></i>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default function AI() {
  const [prompt, setPrompt] = useState("");
  const [q, setQ] = useState("");

  const { data: ret, isLoading, isError, error } = useQuery({
    queryKey: ["aiResponse", prompt],
    queryFn: async () => {
      if (!prompt) return null;
      setQ(prompt);
      const response = await fetch(`https://stud-swki-api.sarthak22-ghoshal.workers.dev/ai?prompt=${prompt}`);
      if (!response.ok) {
        throw new Error("Failed to fetch AI response");
      }
      return response.json();
    },
    enabled: !!prompt,
  });

  function handleFormSubmit(data) {
    setPrompt(data.prompt);
  }

  return (
    <>
      <Header />
      &nbsp;&nbsp;
      <div className="m-8">
        <ChatMessageList
          className="bg-black bg-opacity-70 text-white h-96 max-h-96 min-h-96"
        >
          {isLoading && (<>
            <S>{q}</S>
            <L />
          </>)}

          {isError && (
            <>
              <S>{q}</S>
              <R className="text-red-500">Error: {error.message}</R>
            </>
          )}

          {ret && (
            <>
              <S>{q}</S>
              <R>
                <Markdown>
                  {ret.response}
                </Markdown>
              </R>
            </>
          )}
        </ChatMessageList>
      </div>
      <Inputcomp onSubmit={handleFormSubmit} />
    </>
  );
}