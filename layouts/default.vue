<template>
  <div>
    <Header />
    <Nuxt />
    <Footer :scrolledToBottom="scrolledToBottom" />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  mounted: function () {
    this.scroll
  },
  data: function () {
    return {
      scrolledToBottom: false,
    }
  },
  components: {
    Header,
    Footer,
  },
  computed: {
    scroll: function () {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight

        if (bottomOfWindow) {
          this.scrolledToBottom = true
        } else {
          this.scrolledToBottom = false
        }
      }
    },
  },
}
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: 'Quantico', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

pre {
  background-color: #e5e7eb;
  border-radius: 10px;
}

code[class*='language-'] {
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  margin: -30px 0px;
}

img.emoji {
  height: 25px;
  width: 25px;
  margin: 0px 12px;
  vertical-align: -1px;
}
</style>
