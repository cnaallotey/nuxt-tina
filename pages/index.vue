<script setup>
import { find } from "lodash-es";
const blog = await queryContent("posts").find();
const authors = await queryContent("authors").find();

const posts = computed(() => {
  return blog.map((article) => ({
    ...article,
    author: find(
      authors,
      (author) => author?.title.toLowerCase() === article?.author?.toLowerCase()
    ),
  }));
});
</script>

<template>
  <div class="w-full">
    <AppNav />
    <div class="max-w-screen-xl mx-auto px-4 flex flex-col gap-10">
      <h1 class="text-[40px] text-slate-900 font-bold text-left">Articles with Tina CMS</h1>
      <div class="w-full grid grid-cols-2 gap-[80px]">
        <UCard
          v-for="post in posts"
          :key="post.id"
          class="w-full flex flex-col justify-between gap-5 cursor-pointer group h-full rounded-3xl bg-white p-4 md:p-8"
          @click="$router.push(post._path)"
        >
          <div class="w-full grid gap-5">
            <div class="w-full h-72 overflow-hidden rounded-2xl">
              <img
                :src="`${post.image}`"
                class="w-full h-full object-cover object-center"
                :alt="post.title"
              />
            </div>
            <div class="grid gap-4">
              <h4 class="text-2xl font-bold text-slate-900 group-hover:text-green-500">
                {{ post.title }}
              </h4>
              <div class="text-base text-slate-500">{{ post.description }}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
              <img
                :src="post.author.image"
                class="w-10 h-10 rounded-full aspect-[1/1]"
                :alt="post.author.title"
              />
              <p class="font-bold">{{ post.author.name }}</p>
            </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
