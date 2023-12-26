---
title: The Vue 3 Transition Component 101
image: /blog/ppp.jpg
description: >-
  Transitions can greatly enhance the user experience of a web application by
  adding smooth animations between different states. Vue.js 3 provides a
  powerful Transition component that simplifies the process of incorporating
  transitions into your Vue applications. In this article, we will explore how
  the Vue 3 Transition component works and demonstrate its usage with code
  examples.
author: charles
---

Transitions can greatly enhance the user experience of a web application by adding smooth animations between different states. Vue.js 3 provides a powerful Transition component that simplifies the process of incorporating transitions into your Vue applications. In this article, we will explore how the Vue 3 Transition component works and demonstrate its usage with code examples.

## The Vue 3 Transition Component

The Transition component in Vue 3 allows you to apply transitions to elements when they are inserted, updated, or removed from the DOM. It provides a declarative way to define the animation behavior and smoothly transition between different states. The Transition component works by leveraging CSS transitions or animations to achieve these effects.

## Basic Usage

To use the Transition component, you need to wrap your target element or component within it. Let's consider a simple example where we want to fade in a paragraph when it is inserted into the DOM:

\<script setup>
import {ref, onMounted} from "vue"
const show = ref(false);
\</script>

\<template>
&#x9;\<button @click="show = !show" >Toggle Message\</button>
  \<transition name="fade">
    \<p v-if="show">Hello, Vue 3 Transition Component!\</p>
  \</transition>
\</template>

\<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
\</style>

In this example, we use the Transition component to define a transition named "fade." Inside the transition, we conditionally render the paragraph based on the value of the show data property. When show becomes true, the paragraph will fade in.

## CSS Classes

The Transition component automatically adds and removes CSS classes to the target element during different transition stages. These classes can be used to define the desired animation styles. The CSS classes follow a naming convention based on the transition name and the transition mode (enter/leave).

For example, in the previous code snippet, the following classes are used:

* fade-enter-active: Applied to the target element during the entire enter transition.
* fade-leave-active: Applied to the target element during the entire leave transition.
* fade-enter-from: Applied to the target element one frame after the element is inserted
* fade-leave-to: Applied to the target element one frame after a leaving transition is triggered

By defining appropriate styles for these classes, you can control the animation properties such as opacity, transform, or height to create the desired transition effect.

## Transition Modes

The Transition component supports three transition modes: in-out, out-in, and the default mode.

* in-out: The new element transitions in first, followed by the old element transitioning out.
* out-in: The old element transitions out first, followed by the new element transitioning in.
* Default: Both the old and new elements transition simultaneously.

To specify the transition mode, you can use the mode prop on the Transition component:

\<transition name="fade" mode="out-in">
  \<!-- Content -->
\</transition>

## Customizing Transitions

The Transition component also provides additional props and events to customize the transitions further. You can use the appear prop to enable the initial transition when the component is first rendered. The duration prop allows you to control the transition duration.

Plus, you can even listen to events like before-enter, enter, after-enter, before-leave, leave, and after-leave to perform custom actions using JavaScript during different transition stages.

## Conclusion

The Vue 3 Transition component is a powerful tool that simplifies the process of adding smooth and visually appealing transitions to your Vue applications.

If you’d like to get hands-on practice using transitions for yourself plus dive deeper into all that’s possible, check out our premium course:  [Vue.js Transitions and Animations](https://vueschool.io/courses/vue-js-transitions-and-animations).

In it, we cover all the basics described in this article plus:

* Providing custom transition classes
* combining Vue Transitions with Greensock
* List transitions with the TransitionGroup component
* One-line transitions with the AutoAnimate plugin
* plus a whole lot more!
