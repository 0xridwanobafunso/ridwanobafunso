<template>
  <div id="index">
    <ParticlesBg
      :type="particle.type"
      :color="particle.color"
      :num="particle.num"
      :bg="true"
    />

    <!-- {{ particle.type }}
    {{ particle.color }}
    {{ particle.num }} -->
    <Hero />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import { ParticlesBg } from 'particles-bg-vue'

export default {
  data: function () {
    return {
      particles: [
        {
          type: 'cobweb',
          color: '#553c9a',
          num: 20,
        },
        {
          type: 'polygon',
          color: '#553c9a',
          num: 1,
        },
        {
          type: 'tadpole',
          color: '#553c9a',
          num: 4,
        },
        {
          type: 'square',
          color: 'white',
          num: 3,
        },
      ],
    }
  },
  components: {
    Hero,
    ParticlesBg,
  },
  computed: {
    particle: function () {
      return this.particles[Math.floor(Math.random() * this.particles.length)]
    },
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
