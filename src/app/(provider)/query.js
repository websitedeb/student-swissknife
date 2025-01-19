"use client";

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

export function ReactQueryProvider ({children}) {
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};