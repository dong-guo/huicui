<template>
  <div class="tips">
    <div class="tick" v-show="tipsPic"></div>
    <div class="warn" v-show="!tipsPic"></div>
    <p>{{ tipsText }}</p>
  </div>
</template>

<script>
export default {
  props: ['tipsText', 'tipsPic'],
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.tips {
  width: 50vw;
  height: 50vw;
  margin: 0 auto;
  margin-top: 50vw;
  background:rgba(239,239,244,1);
  border-radius: 2.13vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .tick {
    background: url(../assets/images/tick.png) no-repeat center;
    background-size: 100% 100%;
    width: 20vw;
    height: 20vw;
  }
  .warn {
    background: url(../assets/images/warn.png) no-repeat center;
    background-size: 100% 100%;
    width: 20vw;
    height: 20vw;
  }
  p {
    font-size: 4.8vw;
    font-weight: bold;
    color: #333;
    margin-top: 5vw;
    text-align: center;
    // padding: 0 1vw;
  }
}
</style>
