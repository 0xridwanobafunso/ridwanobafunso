<template>
  <div
    class="animate__animated animate__pulse w-full text-white bg-purple-800"
    v-show="state"
    appear
  >
    <div class="container flex items-center justify-between px-5 py-4 mx-auto">
      <div class="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>

        <p class="mx-3 text-sm font-medium">Black Lives Matter.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: true,
    }
  },
  methods: {},
}
</script>

<style></style>
