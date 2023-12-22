---
title: Reactivity 101 in Vue.js
image: /blog/thumbnail-vs.png
description: 'In this tutorial, we''ll be using Nuxt Content to build a quiz application.'
author: charles
---

## Introduction

Vue.js 3 introduced the Composition API, a revolutionary way to organize and reuse code in Vue applications. With the Composition API, developers can build more maintainable and modular code, and this includes managing reactivity. In this blog post, we'll explore Vue.js 3's Composition API and delve into how it handles reactivity, making it a powerful tool for building modern web applications.

## Understanding the Composition API

The Composition API is an alternative way to define the structure of a Vue component. It encourages breaking down component logic into smaller, reusable units called Composition Functions. These functions can be composed together to form a complete component. Let's create a simple example using the Composition API to understand how reactivity works:

```javascript
<script setup>
import { ref } from 'vue';
const message = ref('Hello, Vue 3 Composition API!');
const changeMessage = () => {
message.value = 'Vue 3 Composition API is awesome!';
};
</script>
<template>
<div>
<p>{{ message }}</p>
<button @click="changeMessage">Change Message</button>
</div>
</template >

```

In this example, we're using the Composition API to define a component. We use the ref function to create a reactive reference to the message property. When we click the button, the changeMessage function updates the message property, and Vue's reactivity system takes care of updating the DOM.

## Ref and Reactive

The Composition API provides two main functions for creating reactivity: ref and reactive.

* ref is used to create a reactive reference to a single value, like a variable.
* reactive is used to create a reactive object that can contain multiple properties.

You can choose between ref and reactive based on your specific needs and data structure.

The main difference between ref and reactive in Vue.js's Composition API lies in the complexity of the data they handle. ref is used for creating a reactive reference to a single value, typically simple variables or primitive types like strings and numbers. On the other hand, reactive is employed to create a reactive object capable of containing multiple properties. While ref is suitable for individual data points, reactive is ideal when you need to manage more complex, nested data structures. This fundamental distinction allows developers to choose the right reactivity tool for their specific use case, making Vue.js's Composition API exceptionally flexible in accommodating various data scenarios.

## Computed Properties with the Composition API

Just like in the Options API, you can create computed properties with the Composition API. Computed properties are functions that depend on reactive data and are recalculated when their dependencies change.

```javascript

<script setup>
  import {ref, computed} from 'vue';
  const count = ref(0);
const double-count = computed(() => count.value * 2);
</script>


```

In this example, doubleCount is a computed property that automatically updates whenever the count value changes.

## Reactivity with Watchers

The Composition API also provides a powerful way to watch for changes in reactive data using the watch function. You can perform custom actions when specific data properties change.

```javascript
<script setup>
  import {ref, watch} from 'vue';
  const message = ref('Hello, Vue 3 Composition API!');
watch(message, (newValue, oldValue) => {
    console.log(`Message changed from ${oldValue} to ${newValue}`);
});
</script>
```

Here, we're watching the message property and logging a message whenever it changes.

## Conclusion

The Vue.js Composition API offers a flexible and powerful way to manage reactivity in your Vue applications. With it, you can define reactive data and computed data, and even perform side effects with watchers. If you’d like to get hands-on learning the reactivity fundamentals of the Composition API, checkout our course [Vue.js 3 Fundamentals with the Composition API](https://vueschool.io/courses/vue-js-fundamentals-with-the-composition-api)!
