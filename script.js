new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      {id: 0, title: 'Design todo app', isCompleted: false},
      {id: 1, title: 'Create GitHub repository', isCompleted: true},
      {id: 2, title: 'Clone project to local machine', isCompleted: false}
    ],
    nextId: 3,
    filters: ['All', 'Active', 'Completed'],
    chosenFilter: 'All'
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push({
          id: this.nextId,
          title: this.newTask,
          isCompleted: false
        });
        this.nextId++;
      }
      this.newTask = '';
    },
    toggleComplete(id) {
      const index = this.tasks.findIndex(x => x.id === id);
      this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
    },
    removeTask(id) {
      const index = this.tasks.findIndex(x => x.id === id);
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