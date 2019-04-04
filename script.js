new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      {id: 0, title: 'Design todo app', isCompleted: false},
      {id: 1, title: 'Create GitHub repository', isCompleted: true},
      {id: 2, title: 'Clone project to local machine', isCompleted: false}],
    nextId: 3
  },
  methods: {
    addTask: function () {
      this.tasks.push({
        id: this.nextId,
        title: this.newTask,
        isCompleted: false
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