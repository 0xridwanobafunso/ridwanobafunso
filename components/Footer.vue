<template>
  <footer class="text-gray-600 body-font mb-8">
    <div class="">
      <div
        class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
      >
        <p class="text-gray-700 text-sm text-center sm:text-left">
          © {{ copyrightYear }} Designed & Built with
          <a href="" class="text-purple-800 font-bold">Nuxt.js</a>,
          <a href="" class="text-purple-800 font-bold">Tailwind.css</a>, and
          many more.
        </p>
        <span
          class="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-700 text-sm"
        >
          <span
            class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
          >
            <a
              href="https://github.com/ridwanobafunso"
              target="_blank"
              class="cursor-pointer"
            >
              <svg
                class="w-5 h-5 fill-current text-gray-700 hover:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://twitter.com/ridwanobafunso"
              target="_blank"
              class="ml-3 cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 hover:text-gray-600"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a
              href="https://facebook.com/dev.ridwanobafunso"
              target="_blank"
              class="ml-3 cursor-pointer"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 hover:text-gray-600"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a
              href="https://instagram.com/ridwanobafunso"
              target="_blank"
              class="ml-3 cursor-pointer"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5 hover:text-gray-600"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
          </span>
        </span>
      </div>
    </div>
    <div
      class="bg-purple-800 p-2 shadow-lg rounded-full fixed bottom-0 right-0 mr-1 mb-5 cursor-pointer animate__animated animate__jackInTheBox"
      @click="backToTop"
      v-show="scrolledToBottom"
      appear
    >
      <span class="text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 fill-current text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </span>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['scrolledToBottom'],
  data: function () {
    return {
      effects: [
        {
          mainAudio: '/whoosh.mp3',
          duration: 1000,
        },
        {
          mainAudio: '/gun.mp3',
          duration: 900,
        },
        {
          mainAudio: '/fart.mp3',
          duration: 4000,
        },
      ],
    }
  },
  methods: {
    backToTop: function () {
      let { mainAudio, duration } = this.effects[
        Math.floor(Math.random() * this.effects.length)
      ]

      let elevator = new Elevator({
        mainAudio,
        duration,
      })

      elevator.elevate()
    },
  },
  computed: {
    copyrightYear: function () {
      if (new Date().getFullYear() == '2021') {
        return '2021'
      } else return `2021-${new Date().getFullYear()}`
    },
  },
}
</script>

<style></style>
