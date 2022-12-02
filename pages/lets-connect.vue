<template>
  <div id="lets-connect" class="mb-10">
    <div class="text-gray-900 max-w-screen-xl mx-auto px-4 leading-7">
      <!-- Breadcrumb -->
      <div class="flex text-black">
        <span class="text-md mt-4"><nuxt-link to="/">Home</nuxt-link></span>
        <span class="text-md mt-4 mx-2">></span>
        <h1 class="text-xl font-bold underline mt-4">Let's Connect</h1>
      </div>
      <!-- Breadcrumb -->

      <div class="mt-5">
        <h1 class="flex text-2xl font-bold leading-7 text-black">
          Connect With Me 🚀
        </h1>
        <p class="mt-5">
          I love to network with people around the world. Shoot me an email via
          any of my email addresses or send a DM via any of my social media
          handles or any of the Messaging Apps. Don't forget to follow and like.
        </p>

        <div class="-mx-4 flex flex-wrap">
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div
              class="flex flex-col flex-1 px-6 py-5 bg-white border border-gray-300 rounded-md"
            >
              <div class="flex-1">
                <a href="/" class="text-lg font-bold leading-7 text-black"
                  >Social(s)</a
                >
                <p class="mt-2 text-gray-700">
                  GitHub:
                  <a
                    href="https://github.com/ridwanobafunso"
                    target="_blank"
                    class="text-purple-800 font-bold"
                    >@ridwanobafunso</a
                  >
                </p>
                <p class="mt-1 text-gray-700">
                  Twitter:
                  <a
                    href="https://twitter.com/ridwanobafunso"
                    target="_blank"
                    class="text-purple-800 font-bold"
                    >@ridwanobafunso</a
                  >
                </p>
                <p class="mt-1 text-gray-700">
                  Instagram:
                  <a
                    href="https://instagram.com/ridwanobafunso"
                    target="_blank"
                    class="text-purple-800 font-bold"
                    >@ridwanobafunso</a
                  >
                </p>
                <p class="mt-1 text-gray-700">
                  Facebook:
                  <a
                    href="https://facebook.com/dev.ridwanobafunso"
                    target="_blank"
                    class="text-purple-800 font-bold"
                    >@dev.ridwanobafunso</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div
              class="flex flex-col flex-1 px-6 py-5 bg-white border border-gray-300 rounded-md"
            >
              <div class="flex-1">
                <a href="/" class="text-lg font-bold leading-7 text-black"
                  >Phone(s)</a
                >
                <p class="mt-2 text-gray-700">
                  Hotline:
                  <a class="text-purple-800 font-bold" href=""
                    >+2348063203337</a
                  >
                </p>
                <p class="mt-1 text-gray-700">
                  WhatsApp:
                  <a class="text-purple-800 font-bold" href=""
                    >+2349028705800</a
                  >
                </p>
                <p class="mt-1 text-gray-700">
                  Telegram:
                  <a class="text-purple-800 font-bold" href=""
                    >+2349028705800</a
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/3">
            <div
              class="flex flex-col flex-1 px-6 py-5 bg-white border border-gray-300 rounded-md"
            >
              <div class="flex-1">
                <a href="/" class="text-lg font-bold leading-7 text-black"
                  >Email(s)</a
                >
                <p class="mt-2 text-gray-700">
                  GMail:
                  <a class="text-purple-800 font-bold" href=""
                    >Obafunsoadebayo17@gmail.com</a
                  >
                </p>
                <p class="mt-2 text-gray-700">
                  YMail:
                  <a class="text-purple-800 font-bold" href=""
                    >Obafunsoridwan2017@yahoo.com</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Obafunso Ridwan A. - Let's Connect",
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'I love to newtwork with people around the world. Ridwan is always eager to learn new technology stack to improve his knowledge and career.',
      },
    ],
  },
  mounted: function () {
    twemoji.parse(document.body, {
      folder: 'svg',
      ext: '.svg',
    })
  },
}
</script>

<style></style>
