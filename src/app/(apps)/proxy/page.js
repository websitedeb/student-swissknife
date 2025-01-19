"use client";

import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { useState } from "react";
import { useForm } from "react-hook-form";

function Placeholder() {
    return (
        <div className="text-white font-sans text-center grid place-items-center">
            <div className="text-red-600 text-9xl animate-pulse">
                <i className="bi bi-globe glow"></i>
            </div>
            &nbsp;
            &nbsp;
            <div className="text-gray-800 text-2xl animate-pulse">
                <p>Enter a URL to View</p>
            </div>
        </div>
    );
}

function Viewer({ url }) {
    return (
        <div className="w-full h-full">
            <iframe
                src={url}
                className="w-full h-full border-0 rounded-3xl"
                title="Viewer"
                sandbox="allow-same-origin allow-scripts"
            />
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
                className="flex w-[300] items-center ml-[615] space-x-2 bg-gray-800 p-5 rounded-2xl"
            >
                <FormField
                    name="url"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Input
                                    type="url"
                                    placeholder="Enter URL"
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
                    <i className="bi bi-arrow-up-right"></i>
                </Button>
            </form>
        </Form>
    );
}

export default function Proxy() {
    const [currentUrl, setCurrentUrl] = useState("");

    const handleSubmit = (data) => {
        console.log("Submitted URL:", data.url);
        setCurrentUrl(data.url);
    };

    return (
        <>
            <Header />

            <div
                className={`bg-gradient-to-r from-[#1C1C1C] via-[#000000] to-[#1C1C1C] border-white border-l-2 border-t-2 border-b-2 border-r-2 rounded-3xl h-[530px] w-screen mt-[50px] grid place-items-center opacity-55`}
            >
                {currentUrl ? <Viewer url={`https://stud-swki-api.sarthak22-ghoshal.workers.dev/proxy/?url=${currentUrl}`} /> : <Placeholder />}
            </div>
            &nbsp;
            <InputBox onSubmit={handleSubmit} />
        </>
    );
}

/*
Pack up, I'm straight
Enough, oh, say, say, say
Oh, say, say, say, oh, say, say, say
Oh, say, say, say, oh, say, say, say
Wait, they don't love you like I love you
Wait, they don't love you like I love you
Maps
Wait, they don't love you like I love you
Made off, don't stray
Well, my kind's your kind, I'll stay the same
Pack up, but don't stray
Oh, say, say, say, oh, say, say, say
Wait, they don't love you like I love you
Wait, they don't love you like I love you
Maps
Wait, well, they don't love you like I love you
Wait, they don't love you like I love you
Maps
Wait, they don't love you like I love you
Wait, they don't love you like I love you
Wait, they don't love you like I love you
Maps
Wait, well, they don't love you like I love you
Wait, they don't love you like I love you
Maps
Wait, they don't love you like I love you
*/