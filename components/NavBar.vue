<template>
  <nav class="bg-white dark:bg-gray-800 border-b border-gray-200">
    <div class="container px-6 py-3 mx-auto">
      <div class="md:flex md:items-center md:justify-between">
        <div class="flex items-center justify-between">
          <div class="text-xl font-semibold text-gray-700">
            <nuxt-link
              to="/"
              class="text-xl font-bold text-gray-900 dark:text-white md:text-2xl hover:text-gray-700 hover:text-gray-800"
            >
              ridwanobafunso
            </nuxt-link>
          </div>

          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button
              type="button"
              class="animate__animated animate__heartBeat animate__delay-3s text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
              @click="toggleHumburger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:svgjs="http://svgjs.com/svgjs"
                version="1.1"
                width="512"
                height="512"
                x="0"
                y="0"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
                class="w-6 h-6 fill-current"
              >
                <g>
                  <g xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="m174 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                      fill="#838383"
                      data-original="#000000"
                      style=""
                      class=""
                    />
                    <path
                      d="m446 240h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                      fill="#838383"
                      data-original="#000000"
                      style=""
                      class=""
                    />
                    <path
                      d="m392 512c-66.168 0-120-53.832-120-120s53.832-120 120-120 120 53.832 120 120-53.832 120-120 120zm0-208c-48.523 0-88 39.477-88 88s39.477 88 88 88 88-39.477 88-88-39.477-88-88-88z"
                      fill="#838383"
                      data-original="#000000"
                      style=""
                      class=""
                    />
                    <path
                      d="m174 512h-108c-36.393 0-66-29.607-66-66v-108c0-36.393 29.607-66 66-66h108c36.393 0 66 29.607 66 66v108c0 36.393-29.607 66-66 66zm-108-208c-18.748 0-34 15.252-34 34v108c0 18.748 15.252 34 34 34h108c18.748 0 34-15.252 34-34v-108c0-18.748-15.252-34-34-34z"
                      fill="#838383"
                      data-original="#000000"
                      style=""
                      class=""
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <div
          class="flex-1 md:flex md:items-center md:justify-between block"
          :class="d_class"
        >
          <div class="flex flex-col -mx-4 md:flex-row md:items-center md:mx-4">
            <nuxt-link
              to="/biography"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Biography</nuxt-link
            >
            <nuxt-link
              to="/skills"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Skills</nuxt-link
            >
            <nuxt-link
              to="/lets-connect"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Let's Connect</nuxt-link
            >
            <nuxt-link
              to="/portfolio"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Portfolio</nuxt-link
            >
            <nuxt-link
              to="/oss"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >OSS</nuxt-link
            >
            <a
              href="https://blog.ridwanobafunso.xyz"
              target="_blank"
              @click.native="hideMenu"
              class="flex px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Blog
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <nuxt-link
              to="/products"
              @click.native="hideMenu"
              class="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700"
              >Products</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function () {
    return {
      humburger: false,
      d_class: 'hidden',
    }
  },
  methods: {
    toggleHumburger: function () {
      !this.humburger ? (this.d_class = 'block') : (this.d_class = 'hidden')

      this.humburger = !this.humburger
    },
    hideMenu: function () {
      this.d_class = 'hidden'
    },
  },
}
</script>

<style></style>
