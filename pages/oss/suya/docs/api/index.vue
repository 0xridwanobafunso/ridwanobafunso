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
                  # API
                </h1>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="text-2xl text-black font-bold underline">
                  new Suya([options])
                </h3>
                <p class="mt-2 text-gray-800">
                  This Class expose suya
                  <span class="font-bold">API</span> to developers' to work with
                  many cache store like redis, and memcached out of box. Though
                  it work well with Node.js in-memory cache too.
                </p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    let Cache = new Suya({ 
      engine: { 
        name: [name], 
        configs: { [configs] }, 
        logging: [boolean] 
      } 
    })
                </code>
            </pre>

                <ul class="mt-5 text-gray-800 list-disc ml-5">
                  <li>
                    <span class="font-bold">[name]</span> - the name of the in
                    memory engine to use. e.g name: 'node-cache' | 'redis' |
                    'memcached'
                  </li>
                  <li class="mt-3">
                    <span class="font-bold">[configs]</span> - the
                    configurations for the selected engine.
                  </li>
                  <li class="mt-3">
                    <span class="font-bold">[boolean]</span> - whether suya
                    should/shouldn't log to console. This is only applicable to
                    redis and memcached. e.g logging: true | false
                  </li>
                </ul>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // node-cache full api
    let Cache = new Suya({ 
      engine: { 
        name: 'node-cache',   
      } 
    }) 
                </code>
                </pre>
                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                <span class="font-bolder bg-red-600 p-2 rounded-full"></span>
                <span class="ml-2 font-bolder bg-green-600 p-2 rounded-full"></span>
                <span class="ml-2 font-bolder bg-yellow-600 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // redis full api
    let Cache = new Suya({ 
      engine: { 
        name: 'redis', 
        configs: { 
          redis: {
            options: {
                // node-redis configurations options
                // https://github.com/NodeRedis/node-redis#options-object-properties
                host: '127.0.0.1', // Redis host
                port: 6379, // Redis port
                password: '[pass]', // Redis password
                family: 4, // 4 (IPv4) or 6 (IPv6)
                db: 0, // Redis database
            },
          }
        }, 
        logging: true
      } 
    }) 
                </code>
                </pre>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // memcached full api
    let Cache = new Suya({ 
      engine: { 
        name: 'memcached', 
        configs: {
          memcached: {
            // server string format e.g
            // single server        - user:pass@server1:11211
            // multiple servers     - user:pass@server1:11211,user:pass@server2:11211
            server: '',
            // memjs configs options - https://github.com/memcachier/memjs
            // some memjs options are overridden by suya. supported options are
            // {
            //   retries: 2,
            //   retry_delay: 0.2,
            //   failoverTime: 60,
            // }
            options: {},
          }
        }
        logging: true
      } 
    }) 
                </code>
                </pre>
              </div>

              <div class="mt-10" id="package-introduction">
                <h3 class="text-2xl text-black font-bold underline">
                  #forever()
                </h3>
                <p class="mt-2 text-gray-800">
                  This is a midddleware to cache forever. The only method
                  supported for this middleware is
                  <span class="font-bold">GET</span>
                </p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // this is a middleware to cache forever.
    let Cache = new Suya([options]).forever()
                </code>
            </pre>

                <div
                  class="mt-5 flex w-full bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div
                    class="flex items-center justify-center w-32 bg-purple-800"
                  >
                    <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                      />
                    </svg>
                  </div>
                  <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                      <span class="font-semibold text-purple-700"
                        >Useful Tip</span
                      >
                      <p class="text-sm text-gray-700">
                        .forever() middleware should be use when your data don't
                        change often and use .resetOnMutate({ indicator: {
                        [key]: [value] } }) to make it upto date on every
                        mutation (POST, PUT, PATCH, DELETE).
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-10" id="package-thanks">
                <h3 class="text-2xl text-black font-bold underline">
                  #duration([n])
                </h3>
                <p class="mt-2 text-gray-800">
                  This is a midddleware to cache for a specific duration (i.e
                  time to live in cache engine) where [n] is the duration in
                  seconds. The only method supported for this middleware is
                  <span class="font-bold">GET</span>
                </p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // this is a middleware to cache for a specific duration.
    let Cache = new Suya([options]).duration([n])
                </code>
            </pre>

                <ul class="mt-5 text-gray-800 list-disc ml-5">
                  <li>
                    <span class="font-bold">[n]</span> - time to live (TTL) in
                    cache in seconds
                  </li>
                </ul>

                <div
                  class="mt-5 flex w-full bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div
                    class="flex items-center justify-center w-32 bg-purple-800"
                  >
                    <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                      />
                    </svg>
                  </div>
                  <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                      <span class="font-semibold text-purple-700"
                        >Useful Tip</span
                      >
                      <p class="text-sm text-gray-700">
                        .duration([n]) middleware should be use when you are
                        dealing with real time data (data that change often) and
                        don't use .resetOnMutate({ indicator: { [key]: [value] }
                        }) on mutation at all because using will clear up the
                        cache on every mutation (POST, PUT, PATCH, DELETE) hence
                        no performance improvement because the data is real
                        time. .duration([n]) only would get the cache cleared
                        out as the duration elapse.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-10" id="package-thanks">
                <h3 class="text-2xl text-black font-bold underline">
                  #resetOnMutate([options])
                </h3>
                <p class="mt-2 text-gray-800">
                  This is a midddleware to reset cache on a successful mutation
                  where [key] and [value] can be any indicator on successful
                  mutation. The methods supported for this middleware are
                  <span class="font-bold">POST</span>,
                  <span class="font-bold">PUT</span>,
                  <span class="font-bold">PATCH</span>,
                  <span class="font-bold">DELETE</span>.
                </p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                    <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                    <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                    <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // this is a middleware to reset cache engine on successful mutation.
    let Cache = new Suya([options]).resetOnMutate({
      indicator: {
        [key]: [value]
      }
    })
                </code>
            </pre>

                <ul class="mt-5 text-gray-800 list-disc ml-5">
                  <li>
                    <span class="font-bold">[key]</span> - key to watch for on
                    api response(s).
                  </li>
                  <li class="mt-3">
                    <span class="font-bold">[value]</span> - value to indicate
                    the mutation was successful.
                  </li>
                </ul>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    // this is a middleware to reset cache engine on successful mutation.
    let Cache = new Suya([options]).resetOnMutate({
      indicator: { 
        success: true,
      }
    })
                </code>
                </pre>

                <div
                  class="mt-5 flex w-full bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div
                    class="flex items-center justify-center w-32 bg-purple-800"
                  >
                    <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                      />
                    </svg>
                  </div>
                  <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                      <span class="font-semibold text-purple-700"
                        >Useful Tip</span
                      >
                      <p class="text-sm text-gray-700">
                        Always use indicator key and value that's easy to read
                        and understand. Though you're free to use any key and
                        value.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-10" id="package-thanks">
                <h3 class="text-2xl text-black font-bold underline">
                  #close()
                </h3>
                <p class="mt-2 text-gray-800">
                  This is a helper method to close open connections to any
                  external resources. This is
                  <span class="font-bold">NOT</span> a middleware.
                </p>
                <!-- Code Block -->
                <pre class="mt-3 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5"> 
    let Cache = new Suya([options])

    process.on('unhandledRejection', (err, promise) => {
      console.log(`Error: ${err.message}`)

      // close the server
      server.close(async () => {
        // close connection
        await Cache.close()

        process.exit(1)
      })
    })
                </code>
            </pre>

                <div
                  class="mt-5 flex w-full bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div
                    class="flex items-center justify-center w-32 bg-purple-800"
                  >
                    <svg
                      class="w-6 h-6 text-white fill-current"
                      viewBox="0 0 40 40"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
                      />
                    </svg>
                  </div>
                  <div class="px-4 py-2 -mx-3">
                    <div class="mx-3">
                      <span class="font-semibold text-purple-700"
                        >Useful Tip</span
                      >
                      <p class="text-sm text-gray-700">
                        .close() helper method should be use when node proccess
                        crashes unexpectedly to close open connections to any
                        external resources.
                      </p>
                    </div>
                  </div>
                </div>
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
                      to="/oss/suya/docs/getting-started"
                    >
                      Getting Started</nuxt-link
                    >
                  </div>
                  <div class="mt-2 w-full md:w-1/5"></div>
                  <div class="mt-2 w-full md:w-2/5">
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
                      to="/oss/suya/docs/usage"
                    >
                      Usage
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
                # API
              </h1>
              <h2 class="mt-3 text-gray-900 text-lg font-bold underline">
                new Suya([options])
              </h2>
              <p class="text-gray-900">
                This Class expose suya API to developers' to work with many
                cache store like redis, and memcached out of box. Though it work
                well with Node.js in-memory cache too.
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
    title: 'Suya - API',
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
