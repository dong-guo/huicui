<template>
  <div class="btnComp">
    <div class="wrapper">
      <div class="text">
        {{ text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'text' ],
  data() {
    return {

    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
.btnComp {
  box-sizing: border-box;
  width: 22.66vw;
  height: 8vw;
  background:linear-gradient(rgba(255,255,255,1),rgba(114,184,255,1));
  border:1px solid #fff;
  box-shadow:0px 0.53vw 0px 0px rgba(11,86,158,0.28);
  border-radius: 2.8vw;
  color: #255680;
  font-weight: bold;
  font-size: 3.73vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 21.22vw; 
    height: 6.4vw; 
    box-sizing:border-box; 
    padding: 1px; 
    border-radius:2.13vw; 
    background-image: linear-gradient(29deg,rgba(137,227,250,1)0%,rgba(137,227,250,0.6) 30%,rgba(42,86,128,0.6) 50%,rgba(137,227,250,1) 70%,rgba(42,86,128,0.6) 100%) ;
    .text {
      box-sizing:border-box; 
      width:100%; 
      height:100%; 
      border-radius: 1.8vw; 
      background: linear-gradient(rgba(255,255,255,1),rgba(114,184,255,1));;
    }
  }
}
</style>
