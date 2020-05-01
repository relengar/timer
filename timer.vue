<!DOCTYPE html>
<html>
  <head>
    <title>My first Vue app</title>
    <script src="https://unpkg.com/vue"></script>
  </head>
  <body>
    <div id="app">
      {{ message }} {{timeLeft}}
    </div>

    <script>
      var app = new Vue({
        el: "#app",
        computed: {
          timeLeft() {
            return new Date(
              new Date("2020-05-01T18:40:52.813Z").getTime() - this.msLeft
            ).toLocaleTimeString();
          }
        },
        methods: {
          srartTimer() {
            this.interval = setInterval(() => {
              this.msLeft = this.msLeft =
                new Date("2020-05-01T18:40:52.813Z").getTime() -
                new Date().getTime();
            }, 1000);
          }
        },
        data: {
          msLeft:
            new Date("2020-05-01T18:40:52.813Z").getTime() -
            new Date().getTime(),
          interval: null,
          message: "Time:"
        },
        mounted: function() {
          this.$nextTick(function() {
            this.srartTimer();
          });
        },
        beforeDestroy: function() {
          if (this.interval && !isNaN(this.interval)) {
            clearInterval(this.interval);
          }
        }
      });
    </script>
  </body>
</html>
