new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [],
    nextId: 0
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        id: this.nextId,
        title: this.newTask,
        isComplete: false
      });
      this.nextId++;
      this.newTask='';
    }
  }
})