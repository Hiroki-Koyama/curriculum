var app = new Vue({
  el: '#app',
  data: {
    counter: 0,
    unrelated: 0
  },
  computed: {
    lessThanThree: function() {
      console.log('算出プロパティのlessThanThree起動');
      return this.counter > 3 ? '3以上' : '3以下'
    }
  },
  methods: {
    counterBtn: function() {
      this.counter++;
    },
    lessThanThreeMethod: function() {
      console.log('メソッドのlessThanThreeMethod起動');
      return this.counter > 3 ? '3以上' : '3以下';
    },
    unrelatedBtn: function() {
      this.unrelated++;
    }
  }
});