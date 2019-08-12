new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      {title: 'Design todo app', isCompleted: false},
      {title: 'Create GitHub repository', isCompleted: true},
      {title: 'Clone project to local machine', isCompleted: false}
    ],
    filters: ['All', 'Active', 'Completed'],
    chosenFilter: 'All'
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          title: this.newTask,
          isCompleted: false
        });
      }
      this.newTask = '';
    },
    toggleComplete(index) {
      this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  },
  computed: {
    filteredTasks() {
      if (this.chosenFilter === 'Active') {
        return this.tasks.filter(x => !x.isCompleted);
      } else if (this.chosenFilter === 'Completed') {
        return this.tasks.filter(x => x.isCompleted);
      }
      return this.tasks;
    },
    currentDate() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const d = new Date();
      return `${weekdays[d.getDay()]}, ${d.getDate()} ${months[d.getMonth()]}`;
    }
  }
});