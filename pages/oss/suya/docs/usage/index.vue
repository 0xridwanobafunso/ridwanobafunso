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
                  # Usage
                </h1>

                <p class="mt-5 text-gray-900">
                  To begin, you would need a cache/in memory store such as
                  Redis, or Memcached installed on your machine or alternatively
                  using NodeJS Internal Caching. If you want to quickly get up
                  and running without installing Redis or Memcached on your
                  machine. I highly recommend using managed cloud services like
                  <a
                    href="https://redislabs.com"
                    class="text-purple-800 font-bold"
                    target="_blank"
                    >RedisLabs</a
                  >
                  or
                  <a
                    href="https://www.memcachier.com"
                    class="text-purple-800 font-bold"
                    target="_blank"
                    >Memcachier</a
                  >. No worries, they both have free plan with 25MB storage with
                  no credit card required.
                </p>
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Node.js 💪
                </h3>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5"> 
    const express = require('express')
    const { Suya } = require('suya')

    const app = express()

    const Cache = new Suya({
      engine: {
        name: 'node-cache',
      },
    })

    // This is a middleware to cache forever.
    // Methods supported: GET
    let cacheForever = Cache.forever()

    // This is a middleware to cache for a specific seconds.
    // Methods supported: GET
    let cacheWithDuration = Cache.duration(50)

    // This is a middleware to reset cache on mutation.
    // Methods supported: POST, PUT, PATCH, DELETE
    let resetCacheOnMutate = Cache.resetOnMutate({
      indicator: {
        success: true,
      },
    })

    let mockDB = () => {
      let users = [
        {
          id: 1,
          name: 'John Smith',
          email: 'john@domain.com',
        },
        {
          id: 2,
          name: 'James Noah',
          email: 'noah@domain.com',
        },
      ]

      // mocking response time to be between 100ms - 600ms
      let randResponseTime = Math.floor(Math.random() * 6 + 1) * 100

      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(users)
        }, randResponseTime)
      })
    }

    app.get('/users/forever', cacheForever, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/forever', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.get('/users/duration', cacheWithDuration, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/duration', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    const server = app.listen(2000, () =>
      console.log('Server running at http://127.0.0.1:2000')
    )

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
                <!-- Code Block -->
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Redis 👊
                </h3>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    const express = require('express')
    const { Suya } = require('suya')

    const app = express()

    const Cache = new Suya({
      engine: {
        name: 'redis',
        configs: {
          redis: {
            // node-redis configs options.
            // https://github.com/NodeRedis/node-redis#options-object-properties
            options: {
              host: '127.0.0.1', // Redis host
              port: 6379, // Redis port
              password: '[pass]', // Redis password
              family: 4, // 4 (IPv4) or 6 (IPv6)
              db: 0, // Redis database
            },
          },
        },
        // whether suya should/shouldn't log to console
        logging: true,
      },
    })

    // This is a middleware to cache forever.
    // Methods supported: GET
    let cacheForever = Cache.forever()

    // This is a middleware to cache for a specific seconds.
    // Methods supported: GET
    let cacheWithDuration = Cache.duration(50)

    // This is a middleware to reset cache on mutation.
    // Methods supported: POST, PUT, PATCH, DELETE
    let resetCacheOnMutate = Cache.resetOnMutate({
      indicator: {
        success: true,
      },
    })

    let mockDB = () => {
      let users = [
        {
          id: 1,
          name: 'John Smith',
          email: 'john@domain.com',
        },
        {
          id: 2,
          name: 'James Noah',
          email: 'noah@domain.com',
        },
      ]

      // mocking response time to be between 100ms - 600ms
      let randResponseTime = Math.floor(Math.random() * 6 + 1) * 100

      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(users)
        }, randResponseTime)
      })
    }

    app.get('/users/forever', cacheForever, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/forever', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.get('/users/duration', cacheWithDuration, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/duration', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    const server = app.listen(2000, () =>
      console.log('Server running at http://127.0.0.1:2000')
    )

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
              </div>

              <div class="mt-10" id="nodejs-usage">
                <h3 class="flex text-2xl text-black font-bold underline">
                  Memcached 👌
                </h3>

                <!-- Code Block -->
                <pre class="mt-5 bg-gray-300 rounded-lg">
                <div class="ml-3 flex -mt-3">
                  <span class="font-bolder bg-red-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-green-500 p-2 rounded-full"></span>
                  <span class="ml-2 font-bolder bg-yellow-500 p-2 rounded-full"></span>
                </div>
                <code class="language-js bg-white border border-gray-300 -mt-10 -mb-5">
    const express = require('express')
    const { Suya } = require('suya')

    const app = express()

    const Cache = new Suya({
      engine: {
        name: 'memcached',
        configs: {
          memcached: {
            // server string format e.g
            // single server        - user:pass@server1:11211
            // multiple servers     - user:pass@server1:11211,user:pass@server2:11211
            server: 'johndoe:1Mx4rGj0r@127.0.0.1:11211', // local memcached server
            // memjs configs options - https://github.com/memcachier/memjs
            // some memjs options are overridden by suya. supported options are
            // {
            //   retries: 2,
            //   retry_delay: 0.2,
            //   failoverTime: 60,
            // }
            options: {
              retries: 2,
              retry_delay: 0.2,
              failoverTime: 60,
            },
          },
        },
        // whether suya should/shouldn't log to console
        logging: true,
      },
    })

    // This is a middleware to cache forever.
    // Methods supported: GET
    let cacheForever = Cache.forever()

    // This is a middleware to cache for a specific seconds.
    // Methods supported: GET
    let cacheWithDuration = Cache.duration(50)

    // This is a middleware to reset cache on mutation.
    // Methods supported: POST, PUT, PATCH, DELETE
    let resetCacheOnMutate = Cache.resetOnMutate({
      indicator: {
        success: true,
      },
    })

    let mockDB = () => {
      let users = [
        {
          id: 1,
          name: 'John Smith',
          email: 'john@domain.com',
        },
        {
          id: 2,
          name: 'James Noah',
          email: 'noah@domain.com',
        },
      ]

      // mocking response time to be between 100ms - 600ms
      let randResponseTime = Math.floor(Math.random() * 6 + 1) * 100

      return new Promise((resolve, reject) => {
        return setTimeout(() => {
          resolve(users)
        }, randResponseTime)
      })
    }

    app.get('/users/forever', cacheForever, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/forever', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.get('/users/duration', cacheWithDuration, async (req, res, next) => {
      let users = await mockDB()

      res.status(200).json({
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    app.put('/users/duration', resetCacheOnMutate, async (req, res, next) => {
      let users = await mockDB()

      // res.status(400).json({
      //   // once the indicator set on .resetOnMutate({}) middleware doesn't match
      //   // like so, the data remain cached.
      //   success: false,
      //   error: {
      //     message: 'Email address is required!',
      //   },
      //   code: 400,
      // })

      res.status(200).json({
        // once the indicator set on .resetOnMutate({}) middleware match like so,
        // the cached data would get cleared it out.
        success: true,
        data: {
          users,
        },
        code: 200,
      })
    })

    const server = app.listen(2000, () =>
      console.log('Server running at http://127.0.0.1:2000')
    )

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
                      to="/oss/suya/docs/api"
                    >
                      API</nuxt-link
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
                      to="/oss/suya/docs/error-handling"
                    >
                      Error Handling
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
                # Usage
              </h1>
              <p class="mt-3 text-gray-900">
                To begin, you would need a cache/in memory store such as Redis,
                or Memcached installed on your machine or alternatively using
                NodeJS Internal Caching.
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
    title: 'Suya - Usage',
    meta: [
      {
        name: 'description',
        content:
          'An effective way to use suya library in your Express.js application',
      },
    ],
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
