var app = new Vue({
  el: '#app',
  data: {
      list: [],
      addText: '',
      message: 'Search/Filter In Table',
      users:[],
  },
  //watchでlistの変更を監視
  watch: {
      list: {
          handler: function() {
              //localStorageにデータを保存
              localStorage.setItem("list", JSON.stringify(this.list));
          },
          deep: true
      }
  },
  
  //マウントされた時にlocalStorageからデータを取得
  mounted: function() {
      this.list = JSON.parse(localStorage.getItem("list")) || [];
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => this.users = response.data)
  },
  methods: {
      addToDo: function() {
          if (this.addText !== '') {
              this.list.push({
                  text: this.addText, 
                  isChecked: false,
              });
          }
          this.addText = '';
      },
      deleteBtn: function() {
          this.list = this.list.filter(function(todo) {
              return !todo.isChecked;
          });
      }
  },

  computed: {
		remaining: function() {
			var count = 0;
			var list = this.list;
			var length = list.length;
			for(var i = 0; i < length; i++) {
				if(!list[i].done) {
					count++;
				}
			}
			return count;
		}
	}
});
