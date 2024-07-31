# Svelte Template

This is a template repository for any future Sveltekit projects that I work on. After working on past projects I've come to terms with specific components and directorie that help me organize my code.

Here are the high level details.
- **TypeScript included!** Until Javascript has it's own types feature this is a must have.
- The `lib` folder has most of project files. Let's talk about a few keys details that are important to me.
  - The `app` directory contains most of my project logic. Under this directory I like to keep UI components, enums, services modules, Svelte stores and any action modules.
  - Next up I like to have directories for various assets such as `css` and `images`.
  - Since I'm using TypeScript I always like to organize all of my type definitions in a `types` directory.
  - Finally, for helper methods I need across my codebase placing those in a `utils` directory helps a ton.
- I always include .env.* files so I can keep track of any important configuration details.

That's all the details so far! I like to keep this simple and only add to here what I feel works across multiple projects. 