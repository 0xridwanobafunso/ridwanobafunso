<template>
  <div class="leading-7">
    <div class="flex flex-wrap">
      <div class="w-full hidden lg:block lg:w-1/6 h-screen overflow-y-auto p-5">
        <h1 class="mt-3 tracking-widest font-bold">
          <span class="text-gray-900">Telegraf-CLI</span>
          <span class="text-purple-800">DOCS</span>
          <small class="text-gray-900"> <small>V1.0.0</small></small>
        </h1>
        <ul class="mt-5">
          <li class="text-black font-bold">#</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#introduction"
                >Introduction</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#features"
                >Features</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#special-thanks"
                >Special Thanks</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#repository"
                >Repository</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#changelog"
                >Changelog</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#versioning"
                >Versioning</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs#share"
                >Share</nuxt-link
              >
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Getting Started</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/getting-started#installation"
                >Installation</nuxt-link
              >
            </li>
            <ul class="ml-1">
              <li class="mt-2">
                <nuxt-link
                  class="text-purple-800"
                  to="/oss/telegraf-cli/docs/getting-started#npm"
                  >npm</nuxt-link
                >
              </li>
              <li class="mt-2">
                <nuxt-link
                  class="text-purple-800"
                  to="/oss/telegraf-cli/docs/getting-started#yarn"
                  >yarn</nuxt-link
                >
              </li>
              <li class="mt-2">
                <nuxt-link
                  class="text-purple-800"
                  to="/oss/telegraf-cli/docs/getting-started#manual"
                  >manual</nuxt-link
                >
              </li>
              <li class="mt-2">
                <nuxt-link
                  class="text-purple-800"
                  to="/oss/telegraf-cli/docs/getting-started#configuration"
                  >Configuration</nuxt-link
                >
              </li>
            </ul>
          </ul>

          <li class="mt-5 text-black font-bold">Usage</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/usage#available-commands"
                >Available commands</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/usage#usage-1"
                >Usage 1</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/usage#usage-2"
                >Usage 2</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/usage#usage-3"
                >Usage 3</nuxt-link
              >
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Bot Command</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/bot-command#create-command"
                >Create Command</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/bot-command#register-command"
                >Register Command</nuxt-link
              >
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Start Bot</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/start-bot#development"
                >Development</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/start-bot#production"
                >Production</nuxt-link
              >
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Deployment</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/deployment#digitalocean"
                >Digitalocean</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/deployment#aws"
                >AWS</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link
                class="text-purple-800"
                to="/oss/telegraf-cli/docs/deployment#glitch"
                >Glitch.com</nuxt-link
              >
            </li>
          </ul>
        </ul>
      </div>
      <div
        class="w-full lg:w-5/6 h-screen overflow-y-auto px-5 lg:px-10 pt-5 pb-10"
      >
        <!-- Mobile menu -->
        <div class="mb-5 text-gray-900 lg:hidden">
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
            class="w-6 h-6 cursor-pointer fill-current"
            @click="toggleMenu"
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

          <div class="mt-3" v-show="state">
            <div class="flex flex-wrap">
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs"
                  >Home</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs/getting-started"
                  >Getting Started</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs/usage"
                  >Usage</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs/bot-command"
                  >Bot Command</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs/start-bot"
                  >Start Bot</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/telegraf-cli/docs/deployment"
                  >Deployment</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-2/3">
            <div class="bg-white shadow sticky top-0">
              <form action="">
                <input
                  type="text"
                  class="w-full py-2 pl-3 bg-gray-100 text-gray-900 focus:outline-none focus:bg-white border border-purple-300 rounded"
                  name=""
                  id=""
                  placeholder="Search Telegraf-CLI Docs v1.0.3"
                />
              </form>
            </div>

            <div id="package-documentation">
              <div id="package-heading">
                <h1
                  class="mt-10 text-2xl md:text-3xl lg:text-4xl text-black font-bold underline"
                >
                  # Deployment
                </h1>

                <p class="mt-5 text-gray-900"></p>
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Digitalocean
                </h3>
                <p class="mt-2 text-black">Coming soon...</p>

                <!-- Code Block -->
                <!-- <pre class="mt-5 bg-gray-300 rounded-lg">
                      <div class="ml-3 flex -mt-3">
                        <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                      </div>
                      <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5"> 
      # for development
      npm run dev:bot
                      </code>
                  </pre> -->
                <!-- Code Block -->
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  AWS
                </h3>
                <p class="mt-2 text-black">Coming soon...</p>

                <!-- Code Block -->
                <!-- <pre class="mt-5 bg-gray-300 rounded-lg">
                      <div class="ml-3 flex -mt-3">
                        <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                      </div>
                      <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5">
      # for production
      npm run prod:bot
                      </code>
                  </pre> -->
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Glitch.com
                </h3>
                <p class="mt-2 text-black">Coming soon...</p>

                <!-- Code Block -->
                <!-- <pre class="mt-5 bg-gray-300 rounded-lg">
                      <div class="ml-3 flex -mt-3">
                        <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                        <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                      </div>
                      <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5">
      # for production
      npm run prod:bot
                      </code>
                  </pre> -->
              </div>

              <div class="mt-5" id="package-pagination">
                <div class="flex flex-wrap w-full">
                  <div class="mt-2 w-full md:w-2/5">
                    <span class="flex text-black text-xs float-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mt-2 mr-2 h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      Prev
                    </span>
                    <nuxt-link
                      class="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-gray-800 border border-purple-500 rounded shadow-lg hover:border-purple-700 focus:shadow-outline focus:outline-none"
                      to="/oss/telegraf-cli/docs/start-bot"
                    >
                      Start Bot</nuxt-link
                    >
                  </div>
                  <div class="mt-2 w-full md:w-1/5"></div>
                  <div class="mt-2 w-full md:w-2/5"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full hidden lg:block lg:w-1/3">
            <div class="sticky top-0 p-5">
              <h1
                class="text-gray-900 text-xl tracking-wider font-bold underline"
              >
                # Deployment
              </h1>
              <p class="mt-3 text-gray-900"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'oss',
  head: {
    title: 'Telegraf-CLI - Bot Command',
    meta: [],
  },
  mounted: function () {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg',
    })

    hljs.highlightAll()
  },
  data: function () {
    return {
      state: false,
    }
  },
  methods: {
    toggleMenu: function () {
      this.state = !this.state
    },
  },
}
</script>

<style></style>
