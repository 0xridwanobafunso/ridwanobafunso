<template>
  <div class="leading-7">
    <div class="flex flex-wrap">
      <div class="w-full hidden lg:block lg:w-1/6 h-screen overflow-y-auto p-5">
        <h1 class="mt-3 tracking-widest font-bold">
          <span class="text-gray-900">SUYA</span>
          <span class="text-purple-800">DOCS</span>
          <small class="text-gray-900"> <small>V1.0.3</small></small>
        </h1>
        <ul class="mt-5">
          <li class="text-black font-bold">#</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Introduction</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Features</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to=""
                >Special Thanks</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Repository</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Changelog</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Versioning</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Share</nuxt-link>
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Getting Started</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Installation</nuxt-link>
            </li>
            <ul class="ml-1">
              <li class="mt-2">
                <nuxt-link class="text-purple-800" to="">npm</nuxt-link>
              </li>
              <li class="mt-2">
                <nuxt-link class="text-purple-800" to="">yarn</nuxt-link>
              </li>
              <li class="mt-2">
                <nuxt-link class="text-purple-800" to="">manual</nuxt-link>
              </li>
            </ul>

            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Why Suya?</nuxt-link>
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">API</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to=""
                >new Suya([options])</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">#forever()</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to=""
                >#duration([n])</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to=""
                >#resetOnMutation([options])</nuxt-link
              >
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">#close()</nuxt-link>
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Usage</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Node.js</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Redis</nuxt-link>
            </li>
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Memcached</nuxt-link>
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Error Handling</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Express.js</nuxt-link>
            </li>
          </ul>

          <li class="mt-5 text-black font-bold">Tests</li>
          <ul class="ml-1">
            <li class="mt-2">
              <nuxt-link class="text-purple-800" to="">Benchmark</nuxt-link>
              <ul class="ml-1">
                <li class="mt-2">
                  <nuxt-link class="text-purple-800" to="">Node.js</nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link class="text-purple-800" to="">Redis</nuxt-link>
                </li>
                <li class="mt-2">
                  <nuxt-link class="text-purple-800" to="">Memcached</nuxt-link>
                </li>
              </ul>
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
              <div class="w-1/2 sm:w-1/3">#</div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/suya/docs/getting-started"
                  >Getting Started</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/suya/docs/usage"
                  >Usage</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/suya/docs/api"
                  >API</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/suya/docs/error-handling"
                  >Error Handling</nuxt-link
                >
              </div>
              <div class="w-1/2 sm:w-1/3">
                #
                <nuxt-link
                  class="text-purple-800 font-bold"
                  to="/oss/suya/docs/tests"
                  >Tests</nuxt-link
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
                  placeholder="Search Suya Docs v1.0.3"
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
                    src="/SUYA.gif"
                    style="height: 380px; width: 400px"
                    alt=""
                  />
                </div>
              </div>

              <div class="mt-10" id="introduction">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Introduction 👋
                </h3>
                <p class="mt-2 text-gray-800">
                  Suya is a simple, fast middleware(s) that adds caching layer
                  on top of your Express.js API response to reduce
                  <span class="font-bold">latency</span> and increase
                  <span class="font-bold">performance</span>.
                </p>
              </div>

              <div class="mt-10" id="feature">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Features 💪
                </h3>
                <ul class="mt-2 text-gray-800 list-disc ml-5">
                  <li>Lightweight Library.</li>
                  <li>Simple API.</li>
                  <li>Typescript Support.</li>
                  <li>Many Cache Engines Support.</li>
                  <li>Nice Terminal Logging.</li>
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
                    href="https://github.com/0xridwanobafunso/suya"
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
                    v1.0.3 - Improve documentation and remove dependencies that
                    has it own types built-in i.e @types/colors and
                    @types/node-cache. Created new release with v1.0.3 tag.
                  </li>
                  <li>
                    v1.0.2 - Fix bugs of throwing SuyaError in middleware(s)
                    instead of passing the error to the next middleware in the
                    cycle. Created new release with v1.0.2 tag.
                  </li>
                  <li>
                    v1.0.1 - Created new release with v1.0.1 tag which triggered
                    Github Actions workflows to format, lint, build and
                    re-publish the library. v1.0.1 is the initial release.
                  </li>
                  <li>
                    v1.0.0 - Unpublished v1.0.0 from npm due to some errors, and
                    remove v1.0.0 releases and tags from this repo.
                  </li>
                  <li>
                    v1.0.0 - Commit all source codes, then I release v1.0.0 tag
                    which triggered Github Actions workflows to format, lint,
                    build and publish the library.
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

              <div class="mt-10" id="package-thanks">
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
                      to="/oss/suya/docs/getting-started"
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
                # Introduction to Suya
              </h1>
              <p class="mt-3 text-gray-900">
                Suya is a simple, fast middleware(s) that adds caching layer on
                top of your Express.js API response to reduce latency and
                increase performance.
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
    title: 'Suya - a Simple, Fast Cache Middleware(s) for Express.js',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'A blazing-fast and strongly-typed express middleware(s) that adds caching layer on top of your express API response to improve performance',
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
        content: 'Suya - a Simple, Fast Cache Middleware(s) for Express.js',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'A blazing-fast and strongly-typed express middleware(s) that adds caching layer on top of your express API response to improve performance',
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
