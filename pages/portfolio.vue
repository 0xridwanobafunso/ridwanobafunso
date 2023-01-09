<template>
  <div class="mb-10">
    <!-- Products Content-->
    <div class="text-gray-900 max-w-screen-xl mx-auto px-4 leading-6">
      <!-- Breadcrumb -->
      <div class="flex text-black">
        <span class="text-md mt-4"><nuxt-link to="/">Home</nuxt-link></span>
        <span class="text-md mt-4 mx-2">></span>
        <h1 class="text-xl font-bold underline mt-4">Portfolio</h1>
      </div>
      <!-- Breadcrumb -->

      <div class="mt-5">
        <span class="text-sm italic"
          >All data fetched from GitHub API. Thank you :)</span
        >
        <div class="-mx-4 flex flex-wrap">
          <div
            class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3"
            v-for="repo of repos"
            :key="repo.id"
          >
            <img src="/code.png" class="h-64 object-cover rounded-t" alt="" />
            <div
              class="flex flex-col flex-1 px-6 pt-3 pb-5 bg-white border border-gray-300"
            >
              <div class="flex-1">
                <a
                  :href="repo.html_url"
                  class="text-lg font-bold leading-7 text-black"
                  >{{ repo.name }}</a
                >
                <div class="mt-5 text-gray-700">
                  <p class="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                      />
                    </svg>
                    <span
                      ><a
                        class="ml-5 text-purple-800"
                        target="_blank"
                        :href="repo.html_url"
                        >{{ repo.html_url.substring(0, 20) }}...</a
                      ></span
                    >
                  </p>

                  <p class="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                      />
                    </svg>
                    <span
                      ><a
                        class="ml-5 text-purple-800"
                        target="_blank"
                        v-if="repo.language"
                        :href="repo.languages_url"
                        >{{ repo.language }}</a
                      >
                      <a
                        class="ml-5 text-purple-800"
                        target="_blank"
                        v-else
                        :href="repo.languages_url"
                        >Markdown</a
                      >
                    </span>
                  </p>
                  <p class="flex mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 mt-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      />
                    </svg>
                    <span
                      ><a class="ml-5 text-purple-800" target="_blank" href=""
                        >{{ repo.stargazers_count }} Star(s)</a
                      ></span
                    >
                  </p>
                </div>
              </div>
              <a
                :href="repo.html_url"
                class="mt-5 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white bg-purple-800 rounded shadow-md hover:bg-purple-900 focus:shadow-outline focus:outline-none"
              >
                View Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Pagination
      <div class="mt-5 mb-10 max-w-screen-xl mx-auto px-4 text-purple-800">
        <div class="flex flex-wrap w-full mx-auto items-center justify-center">
          <div
            class="w-1/8 p-3 border border-gray-400 rounded-l inline-flex items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            Prev
          </div>
          <div
            class="w-1/8 p-3 border border-gray-400 inline-flex items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            1
          </div>
          <div
            class="w-1/8 p-3 border border-gray-400 inline-flex items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            ...
          </div>
          <div
            class="w-1/8 p-3 border border-gray-400 inline-flex items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            15
          </div>
          <div
            class="w-1/8 p-3 border border-gray-400 rounded-r inline-flex items-center justify-center cursor-pointer hover:bg-gray-300"
          >
            Next
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  async beforeCreate() {
    let { data } = await this.$axios.get(
      'https://api.github.com/users/0xridwanobafunso/repos'
    )

    console.log(data)
    this.$data.repos = data
  },
  data: function () {
    return {
      repos: [],
    }
  },
  head: {
    title: 'Obafunso Ridwan A. - Portfolio',
    meta: [{ hid: 'description', name: 'description', content: '' }],
  },
}
</script>

<style></style>
