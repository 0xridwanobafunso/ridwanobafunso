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
                  placeholder="Search Telegraf-CLI Docs v1.0.0"
                />
              </form>
            </div>

            <div id="package-documentation">
              <div id="package-heading">
                <h1
                  class="mt-10 text-2xl md:text-3xl lg:text-4xl text-black font-bold underline"
                >
                  #
                </h1>
                <div class="mt-5 container max-w-screen-lg mx-auto">
                  <img
                    class="mx-auto object-cover"
                    src="/tcli-logo.png"
                    style="height: 380px; width: 400px"
                    alt="Telegraf-CLI"
                  />
                </div>
              </div>

              <div class="mt-10" id="introduction">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Introduction 👋
                </h3>
                <p class="mt-2 text-gray-800">
                  Telegraf-CLI is a command-line interface tool designed to
                  simplify the development process for developers who are
                  working with the Telegraf library. The Telegraf library is a
                  popular framework for building Telegram bots, and Telegraf-CLI
                  provides developers with a streamlined way to generate
                  boilerplate code for their projects and to generate bot
                  commands.
                </p>
                <p class="mt-2 text-gray-800">
                  With Telegraf-CLI, developers can save time and effort by
                  automating the creation of basic project structures and
                  boilerplate code. This means they can focus more on the
                  development of their Telegram bots, rather than spending time
                  setting up their development environment.
                </p>
              </div>

              <div class="mt-10" id="features">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Features 💪
                </h3>
                <ul class="mt-2 text-gray-800 list-disc ml-5">
                  <li>Generate Basic Project Structures</li>
                  <li>
                    JavaScript Template/Boilerplate (TypeScript coming soon)
                  </li>
                  <li>
                    Work out of box with different Node.js server (Express, Koa,
                    Fastify)
                  </li>
                  <li>Development and Production Ready</li>
                  <li>More Coming...</li>
                </ul>
              </div>

              <div class="mt-10" id="special-thanks">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Special Thanks 👏
                </h3>
                <p class="my-2 text-gray-800">
                  Thanks to all the amazing contributors.
                </p>
                <ul class="text-gray-800 list-disc ml-5">
                  <li>
                    <a
                      class="text-purple-800"
                      href="https://github.com/0xridwanobafunso"
                      >Obafunso Ridwan A.</a
                    >
                  </li>
                </ul>
              </div>

              <div class="mt-10" id="repository">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Repository 😎
                </h3>
                <p class="my-2 text-gray-800">
                  Source code(s), license and other document(s) related to this
                  project can be found on
                  <a
                    class="text-purple-800 font-bold"
                    target="_blank"
                    href="https://github.com/0xridwanobafunso/telegraf-cli"
                    >GitHub</a
                  >. A <span class="font-bold">star</span> on the repository
                  means alot to me.
                </p>
              </div>

              <div class="mt-10" id="changelog">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Changelog 🚴‍♂️
                </h3>
                <ul class="mt-2 text-gray-800 list-disc ml-5">
                  <li>
                    v1.0.1 - patched some bugs, and also move documentation out of
                    github
                  </li>
                  <li>
                    v1.0.0 - Commit all source codes, release tags and published
                    to NPM using GitHub Action.
                  </li>
                </ul>
              </div>

              <div class="mt-10" id="versioning">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Versioning 🎯
                </h3>
                <p class="my-2 text-gray-800">
                  I use <b>SemVer</b> for versioning.
                </p>
              </div>

              <div class="mt-10" id="share">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Share 🙏
                </h3>
                <p class="my-2 text-gray-800">
                  Don't forget to share with your colleagues at your workplace.
                </p>
              </div>

              <div class="mt-10 flex text-gray-700 items-center justify-center">
                <span class="text-5xl">🎊</span>
                <span class="text-xl font-bold">So, Let's Dive In.</span>
              </div>

              <div class="mt-5" id="package-pagination">
                <div class="flex flex-wrap w-full">
                  <div class="w-full md:w-2/5"></div>
                  <div class="w-full md:w-1/5"></div>
                  <div class="w-full md:w-2/5">
                    <span class="flex text-black text-xs float-right"
                      >Next
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="mt-2 ml-2 h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        /></svg
                    ></span>
                    <nuxt-link
                      class="inline-flex items-center justify-center w-full h-12 px-6 mt-2 font-medium tracking-wide text-gray-800 border border-purple-500 rounded shadow-lg hover:border-purple-700 focus:shadow-outline focus:outline-none"
                      to="/oss/telegraf-cli/docs/getting-started"
                    >
                      Getting Started
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full hidden lg:block lg:w-1/3">
            <div class="sticky top-0 p-5">
              <h1
                class="text-gray-900 text-xl tracking-wider font-bold underline"
              >
                # Introduction to Telegraf-CLI
              </h1>
              <p class="mt-3 text-gray-900">
                Telegraf-CLI is a command-line interface tool designed to
                simplify the development process for developers who are working
                with the Telegraf library.
              </p>
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
    title:
      'Telegraf-CLI - Command line interface tool designed to simplify the development process for Telegraf developer',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Telegraf-CLI is a command-line interface tool designed to simplify the development process for developers who are working with the Telegraf library.',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        content: 'open.source.software',
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'ridwanobafunso',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content:
          'Telegraf-CLI - Command line interface tool designed to simplify the development process for Telegraf developer',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Telegraf-CLI is a command-line interface tool designed to simplify the development process for developers who are working with the Telegraf library.',
      },
      {
        hid: 'og:host',
        name: 'og:host',
        content: 'https://oss.ridwanobafunso.com',
      },
    ],
  },
  mounted: function () {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg',
    })
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
