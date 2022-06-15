<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import DevicePixelRatio from "./devicePixelRatio.js";
export default {
  name: "app",
  components: {},
  created() {
    new DevicePixelRatio().init();
    console.log('App created',DevicePixelRatio)
  },
  mounted() {
    // new DevicePixelRatio().init();
    console.log('App mounted',DevicePixelRatio)
    var widths = window.screen.width * window.devicePixelRatio;
    //页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
    if(widths==1920 || widths < 1920) {
        console.log('widths:'+widths)
        document.getElementsByTagName('body')[0].style.zoom = 1 / window.devicePixelRatio;
        
    } else if(widths==2560 || widths < 2560) {
        console.log('widths:'+widths)
        document.getElementsByTagName('body')[0].style.zoom = 1;
    }  else {
        console.log('widths:'+widths)
        document.getElementsByTagName('body')[0].style.zoom = 0.7;

    }
    window.onresize = () => {
        return (() => {
          var widths = window.screen.width * window.devicePixelRatio;
            //页面devicePixelRatio（设备像素比例）变化后，计算页面body标签zoom修改其大小，来抵消devicePixelRatio带来的变化。
            if(widths==1920 || widths < 1920) {
                console.log('widths:'+widths)
                document.getElementsByTagName('body')[0].style.zoom = 1 / window.devicePixelRatio;
                
            } else if(widths==2560 || widths < 2560) {
                console.log('widths:'+widths)
                document.getElementsByTagName('body')[0].style.zoom = 1;
            }  else {
                console.log('widths:'+widths)
                document.getElementsByTagName('body')[0].style.zoom = 0.7;
                // document.getElementsByTagName('body')[0].style.transform = 'scale(1)';
                // document.getElementsByTagName('body')[0].style.transform = 'none';
                // document.getElementsByTagName('body')[0].style['transform-origin']= 'center';
                // document.getElementsByTagName('body')[0].style['position']= 'absolute';
                // document.getElementsByTagName('body')[0].style['width']= '100%';
                // document.getElementsByTagName('body')[0].style['color']= '100%';

            }
        })()
      }

  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: #2c3e50;
}
</style>
