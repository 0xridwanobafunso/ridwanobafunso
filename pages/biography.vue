<template>
  <div id="biography" class="mb-10">
    <div class="text-gray-900 max-w-screen-xl mx-auto px-4 leading-7">
      <!-- Breadcrumb -->
      <div class="flex text-black">
        <span class="text-md mt-4"><nuxt-link to="/">Home</nuxt-link></span>
        <span class="text-md mt-4 mx-2">></span>
        <h1 class="text-xl font-bold underline mt-4">Biography</h1>
      </div>
      <!-- Breadcrumb -->

      <div class="mt-5">
        <div id="background">
          <h1 class="flex text-2xl font-bold leading-7 text-black">
            Background 📌
          </h1>
          <p class="mt-5">
            <b>Obafunso Ridwan Adebayo</b> (born 19th December) is a Nigerian
            Software Engineer, Researcher, and Entreprenuer. He is passionate
            about technology. His passion drives him to start learning
            programming at a very tender age when he was still in high school.
            He started with QBasic in 2014, where he later moved on to
            HTML/CSS/JavaScript to further his programming journey.
          </p>
          <p class="mt-5">
            Nigeria being one of the hardest countries to survive in. He faced
            many challenges during his journey. Challenges like electricity,
            programming gadget, expensive data plans from ISP(s), and many more
            BUT nothing stop him from pursuing his programming path.
          </p>
        </div>

        <div class="mt-10" id="profession">
          <h1 class="flex text-2xl font-bold leading-7 text-black">
            Profession 🥑
          </h1>
          <p class="mt-5">
            He chose Software Engineer as his programming career and he happens
            to be one of talented Software Engineer in Nigeria. He has
            experience in PHP, JavaScript and TypeScript as his core programming
            languages. He has worked with tons of databases, frameworks, and
            libraries over the past years.
          </p>

          <p class="mt-5">
            He is currently working on
            <nuxt-link class="text-purple-800 font-bold" to="/oss/suya/docs"
              >Suya</nuxt-link
            >, a library created for
            <nuxt-link class="text-purple-800 font-bold" to=""
              >Express.js</nuxt-link
            >
            to improve REST API performance. His works have been published on
            popular package managers like
            <nuxt-link class="text-purple-800 font-bold" to="">npm</nuxt-link>
            and
            <nuxt-link class="text-purple-800 font-bold" to="">yarn</nuxt-link>.
          </p>

          <p class="mt-5">
            He loves Open Source, so he massively contributes to Open Source
            communities.
          </p>
        </div>

        <div class="mt-10" id="background">
          <h1 class="flex text-2xl font-bold leading-7 text-black">
            Education 🧑‍🎓
          </h1>
          <p class="mt-5">
            Ridwan bagged National Diploma in Computer Science at Federal
            Polytechnic, Ilaro which is located in Ogun, Nigeria.
          </p>
        </div>

        <div class="mt-10" id="background">
          <h1 class="flex text-2xl font-bold leading-7 text-black">
            Awards 👏
          </h1>
          <div class="mt-5">
            <h2 class="text-xl underline">Career</h2>
            <p>He has no career award yet.</p>
          </div>
          <div class="mt-5">
            <h2 class="text-xl underline">Education</h2>
            <p>
              He was honored with one of best graduating student award (Computer
              Science) at Federal Polytechnic, Ilaro in 2022/23 with a CGPA of
              3.61/4.00 after his Higher National Diploma Programme at the
              Polytechnic.
            </p>
            <p>
              He was honored with an overall best graduating student award
              (Computer Science) at Federal Polytechnic, Ilaro in 2019 with a
              CGPA of 3.71/4.00 after his National Diploma Programme at the
              Polytechnic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Obafunso Ridwan A. - Biography',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'Biography about Obafunso Ridwan Adebayo. Ridwan is always eager to learn new technology stack to improve his knowledge and career.',
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
