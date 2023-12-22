<script setup>
const { path } = useRoute()

const post = await queryContent(path).findOne()
post.author = await queryContent('authors', post.author).findOne()



</script>

<template>
    <div class="w-full py-20">
        <div class="max-w-screen-md mx-auto px-4">
        <div class="w-full h-96 overflow-hidden">
            <img :src="`${post.image}`" class="w-full h-full object-cover object-center" :alt="post.title">
        </div>
        <h1 class="text-5xl font-bold mt-5">{{ post.title }}</h1>
        <div class="font-bold mt-5">{{ post.description }}</div>
        <div class="flex mt-5 items-center gap-2">
        <img :src="post.author.image" class="w-10 h-10 rounded-full aspect-[1/1]" :alt="post.author.title">
        <p class="font-bold">{{ post.author.name }}</p>
        </div>
        <div class="w-full mt-10">
            <ContentDoc :value="post" class="prose w-full max-w-none overflow-hidden xl:prose-xl prose-a:text-brunswick-green prose-a:no-underline prose-pre:overflow-auto" />
        </div>
        </div>
    </div>
</template>