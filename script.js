new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      {id: 0, title: 'Design todo app', isCompleted: false},
      {id: 1, title: 'Create GitHub repository', isCompleted: true},
      {id: 2, title: 'Clone project to local machine', isCompleted: false}],
    nextId: 3,
    filter: 'all'
  },
  methods: {
    addTask: function () {
      if(this.newTask.trim() !== ''){
        this.tasks.push({
          id: this.nextId,
          title: this.newTask,
          isCompleted: false
        });
        this.nextId++;
        this.newTask='';
      }
    },
    getDate: function () {
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let d = new Date();
      return `${weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
    },
    deleteTodo: function (id) {
      let index = this.tasks.findIndex(x => x.id === id);
      this.tasks.splice(index, 1);
    },
    getTaskCount: function () {
      return this.tasks.length;
    }
  },
  computed: {
    filteredTasks: function () {
      if (this.filter === 'active') return this.tasks.filter(x => !x.isCompleted);
      else if (this.filter === 'completed') return this.tasks.filter(x => x.isCompleted);
      return this.tasks;
    }
  }
})