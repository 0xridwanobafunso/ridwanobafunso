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
                  # Tests
                </h1>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Benchmark ⚡
                </h3>
                <p class="mt-2 text-gray-800">
                  All the benchmark test suites are written with
                  <a
                    class="text-purple-800 font-bold"
                    target="_blank"
                    href="https://jestjs.io/"
                    >Jest</a
                  >
                  and
                  <a
                    class="text-purple-800 font-bold"
                    target="_blank"
                    href="https://www.npmjs.com/package/axios"
                    >Axios</a
                  >.
                </p>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="text-xl text-black font-bold underline">Node.js</h3>
                <p class="mt-2 text-gray-800"></p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5">
    # terminal tab 1
    # clone repo
    $ git clone [repo_url]

    # install dependencies
    $ npm i

    # start benchmark server
    $ npm run start:benchmark:server:node-cache

    ## ~OUTPUT
    ## [NODECACHE] Server running at http://localhost:1000

    # terminal tab 2
    $ npm run benchmark:node-cache

    ## ~RESULT ON MY MACHINE
    #  PASS  tests/benchmarks/node-cache.test.ts (42.591 s)
    #    The performance of suya with node-cache
    #      √ if there is any performance increase when using node-cache (9106 ms)

    #  Test Suites: 1 passed, 1 total
    #  Tests:       1 passed, 1 total
    #  Snapshots:   0 total
    #  Time:        46.997 s
                </code>
            </pre>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="text-xl text-black font-bold underline">Redis</h3>
                <p class="mt-2 text-gray-800"></p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5">
    # terminal tab 1
    # clone repo
    $ git clone [repo_url]

    # install dependencies
    $ npm i

    # open tests/benchmarks/servers/redis.ts file and update your redis server credentials
    # start benchmark server
    $ npm run start:benchmark:server:redis

    ## ~OUTPUT
    ## [REDIS] Server running at http://localhost:2000
    ## -----------------------------------------------
    ## [REDIS] Suya connected to redis successfully!!!
    ## -----------------------------------------------

    # terminal tab 2
    $ npm run benchmark:redis

    ## ~RESULT ON MY MACHINE
    #  PASS  tests/benchmarks/redis.test.ts (27.956 s)
    #    The performance of suya with redis
    #      √ if there is any performance increase when using redis (13092 ms)

    #  Test Suites: 1 passed, 1 total
    #  Tests:       1 passed, 1 total
    #  Snapshots:   0 total
    #  Time:        29.912 s
                </code>
            </pre>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="text-xl text-black font-bold underline">
                  Memcached
                </h3>
                <p class="mt-2 text-gray-800"></p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-sh bg-white border border-gray-300 -mt-10 -mb-5">
    # terminal tab 1
    # clone repo
    $ git clone [repo_url]

    # install dependencies
    $ npm i

    # open tests/benchmarks/servers/memcached.ts file and update your memcached server credentials
    # start benchmark server
    $ npm run start:benchmark:server:memcached

    ## ~OUTPUT
    ## [MEMCACHED] Server running at http://localhost:3000
    ## -------------------------------------------------------
    ## [MEMCACHED] Suya connected to memcached successfully!!!
    ## -------------------------------------------------------

    # terminal tab 2
    $ npm run benchmark:memcached

    ## ~RESULT ON MY MACHINE
    #  PASS  tests/benchmarks/memcached.test.ts (27.956 s)
    #    The performance of suya with memcached
    #      √ if there is any performance increase when using memcached (12073 ms)

    #  Test Suites: 1 passed, 1 total
    #  Tests:       1 passed, 1 total
    #  Snapshots:   0 total
    #  Time:        28.715 s
                </code>
            </pre>
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
                      to="/oss/suya/docs/error-handling"
                    >
                      Error Handling</nuxt-link
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
                # Tests
              </h1>
              <h2 class="flex mt-3 text-gray-900 text-lg font-bold underline">
                Benchmark ⚡
              </h2>
              <p class="text-gray-900">
                All the benchmark test suites are written with
                <a
                  class="text-purple-800 font-bold"
                  target="_blank"
                  href="https://jestjs.io/"
                  >Jest</a
                >
                and
                <a
                  class="text-purple-800 font-bold"
                  target="_blank"
                  href="https://www.npmjs.com/package/axios"
                  >Axios</a
                >.
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
    title: 'Suya - Tests',
    meta: [{ name: 'description', content: '' }],
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
