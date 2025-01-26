"use client";

import { Header } from "@/components/ui/header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useState } from "react";

import YouTube from "react-youtube";

function Placeholder() {
    return (
        <div className="text-white font-sans text-center grid place-items-center">
            <div className="text-red-600 text-9xl animate-pulse">
                <i className="bi bi-play-btn-fill"></i>
            </div>
            &nbsp;
            &nbsp;
            <div className="text-gray-800 text-2xl animate-pulse">
                <p>Enter a YT Video URL to Watch</p>
            </div>
        </div>
    );
}

function InputBox({ onSubmit }) {
    const form = useForm({
        defaultValues: {
            url: "",
        },
    });

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex w-72 items-center mx-auto space-x-2 bg-gray-800 p-5 rounded-2xl"
            >
                <FormField
                    name="url"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="Enter YT URL"
                                    {...field}
                                    required
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    className="bg-red-600 text-white hover:bg-red-800 focus:bg-white focus:text-black pl-5 pr-5"
                >
                    <i className="bi bi-play-fill"></i>
                </Button>
            </form>
        </Form>
    );
}

export default function Player() {
    const [vid, setVid] = useState("");

    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    };

    const handleVideoSubmit = (data) => {
        const videoId = extractVideoId(data.url);
        if (videoId) {
            setVid(videoId);
        } else {
            alert("Invalid YouTube URL");
        }
    };

    return (
        <>
            <Header />
            <div
                className={`bg-gradient-to-r from-[#1C1C1C] via-[#000000] to-[#1C1C1C] border-white border-l-2 border-t-2 border-b-2 border-r-2 rounded-3xl h-[530px] w-screen mt-[50px] grid place-items-center`}
            >
                {vid ? (
                    <YouTube
                        videoId={vid}
                        opts={{
                            height: "390",
                            width: "640",
                            playerVars: {
                                autoplay: 1,
                            },
                        }}
                    />
                ) : (
                    <Placeholder />
                )}
            </div>
            &nbsp;
            <InputBox onSubmit={handleVideoSubmit} />
        </>
    );
}
