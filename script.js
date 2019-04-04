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
    },
    getDate: function () {
      let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      let d = new Date();
      return `${weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
    }
  }
})