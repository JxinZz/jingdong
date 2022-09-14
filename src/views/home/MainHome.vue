<template>
  <div class="wrapper">
    <StaticPart />
    <Nearby />
  </div>
<Docker :currentIndex="0"/>
 
</template>

<script>
import StaticPart from './StaticPart.vue';
import Nearby from './Nearby.vue'
import Docker from '../../components/Docker.vue'
export default {
  name: "MainHome",
  components: { StaticPart, Nearby,Docker }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';

//上半部分样式设置
.wrapper {
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}

</style>