
import type { NuxtLink } from '#build/components';
<template>
    <div class="w-full py-3 mb-10 bg-blue-950">
        <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
           <NuxtLink to="/">
            <img src="/images/logo.svg" class="h-10" alt="logo">
           </NuxtLink>
            <NuxtLink to="/admin/index.html" external class="text-blue-950 focus:outline-none bg-white inline-flex font-semibold text-sm h-[52px] items-center justify-center px-8 rounded-2xl">Admin</NuxtLink>
        </div>
    </div>
</template>