<template>
  <div class="mb-10">
    <!-- Blog Content -->
    <div class="text-gray-900 max-w-screen-xl mx-auto px-4 leading-6">
      <!-- Breadcrumb -->
      <div class="flex text-black">
        <span class="text-md mt-4"><nuxt-link to="/">Home</nuxt-link></span>
        <span class="text-md mt-4 mx-2">></span>
        <h1 class="text-xl font-bold underline mt-4">OSS</h1>
      </div>
      <!-- Breadcrumb -->
      <div class="mt-5">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div
              class="flex flex-col flex-1 px-6 py-5 bg-white border border-gray-300 rounded-md"
            >
              <div class="flex-1">
                <a
                  href="/oss/suya/docs"
                  class="text-lg font-bold leading-7 text-black"
                  >Suya</a
                >
                <p class="mt-2 text-gray-700">
                  Suya is a blazing-fast and strongly-typed express
                  middleware(s) that adds caching layer on top of your express
                  API response to improve performance.
                </p>
              </div>
              <nuxt-link
                to="/oss/suya/docs"
                class="mt-5 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-800 rounded shadow-md hover:bg-purple-900 focus:shadow-outline focus:outline-none"
              >
                View Documentation
              </nuxt-link>
            </div>
          </div>

          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div
              class="flex flex-col flex-1 px-6 py-5 bg-white border border-gray-300 rounded-md"
            >
              <div class="flex-1">
                <a
                  href="/oss/telegraf-cli/docs"
                  class="text-lg font-bold leading-7 text-black"
                  >Telegraf-CLI</a
                >
                <p class="mt-2 text-gray-700">
                  Telegraf-CLI is a command-line interface tool designed to
                  simplify the development process for developers who are
                  working with the Telegraf library.
                </p>
              </div>
              <nuxt-link
                to="/oss/telegraf-cli/docs"
                class="mt-5 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-800 rounded shadow-md hover:bg-purple-900 focus:shadow-outline focus:outline-none"
              >
                View Documentation
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- OSS Pagination-->
    <nav
      role="navigation"
      aria-label="Pagination Navigation"
      class="flex items-center justify-between max-w-screen-xl mx-auto px-4"
    >
      <div class="flex justify-between flex-1 sm:hidden">
        <span
          class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md"
        >
          &laquo; Previous
        </span>

        <span
          class="relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 rounded-md hover:text-gray-500 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 transition ease-in-out duration-150"
        >
          Next &raquo;
        </span>
      </div>

      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-gray-700 leading-5">
            Showing
            <span class="font-medium">1</span>
            to
            <span class="font-medium">1</span>
            of
            <span class="font-medium">1</span>
            results
          </p>
        </div>

        <div>
          <span class="relative z-0 inline-flex shadow-sm rounded-md">
            <span aria-disabled="true" aria-label="&amp;laquo; Previous">
              <span
                class="relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default rounded-l-md leading-5"
                aria-hidden="true"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </span>
            </span>

            <span aria-current="page">
              <span
                class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5"
                >1</span
              >
            </span>
            <a
              class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-700 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150"
              aria-label="Go to page 2"
            >
              ...
            </a>
            <a
              class="relative inline-flex items-center px-4 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 leading-5 hover:text-gray-500 focus:z-10 focus:outline-none focus:ring ring-gray-300 focus:border-blue-300 transition ease-in-out duration-150"
              aria-label="Go to page 3"
            >
              1
            </a>

            <a
              rel="next"
              class="relative inline-flex items-center px-2 py-2 -ml-px text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md leading-5 hover:text-gray-400 focus:z-10 focus:outline-none focus:ring ring-gray-300 transition ease-in-out duration-150"
              aria-label="Next &amp;raquo;"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
