<script setup>
import { find } from 'lodash-es'
const blog = await queryContent('posts').find()
const authors = await queryContent('authors').find()


const posts = computed(() => {
  return blog.map(article => ({
    ...article,
    author: find(authors, author => author?.title.toLowerCase() === article?.author?.toLowerCase())
  }))
})
</script>

<template>
  <div class="w-full pt-20">
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col gap-10">
      <h1 class="text-[40px] font-bold text-center">Articles with Tina CMS</h1>
      <div class="w-full grid grid-cols-2 gap-[60px]">
        <UCard v-for="post in posts" :key="post.id" class="w-full grid gap-5 cursor-pointer group" @click="$router.push(post._path)">
        <div class="w-full h-72 overflow-hidden">
        <img :src="`${post.image}`" class="w-full h-full object-cover object-center" :alt="post.title">
        </div>
            <div class="grid gap-4">
                <h4 class="text-2xl font-bold group-hover:text-green-500">{{ post.title }}</h4>
            <div>{{ post.description }}</div>
            <div class="flex mt-5 items-center gap-2">
         <img :src="post.author.image" class="w-10 h-10 rounded-full aspect-[1/1]" :alt="post.author.title">
             <p class="font-bold">{{ post.author.name }}</p>
        </div>
            </div>
          </UCard>
      </div>
    </div>
  </div>
</template>
