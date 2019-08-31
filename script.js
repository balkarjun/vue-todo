new Vue({
  el: '#app',
  data: {
    newTask: '',
    tasks: [
      {id: 0, title: 'Design todo app', done: false},
      {id: 1, title: 'Create GitHub repository', done: true},
      {id: 2, title: 'Clone project to local machine', done: false}
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
          done: false
        });
        this.nextId++;
      }
      this.newTask = '';
    },
    removeTask(id) {
      const index = this.tasks.findIndex(x => x.id === id);
      this.tasks.splice(index, 1);
    },
    toggle(id) {
      const index = this.tasks.findIndex(x => x.id === id);
      this.tasks[index].done = !this.tasks[index].done;
    }
  },
  computed: {
    filteredTasks() {
      if (this.chosenFilter === 'Active') {
        return this.tasks.filter(x => !x.done);
      } else if (this.chosenFilter === 'Completed') {
        return this.tasks.filter(x => x.done);
      }
      return this.tasks;
    },
    today() {
      const options = { weekday: 'short', day: 'numeric', month: 'short' };
      return new Date().toLocaleDateString('en-GB', options);
    }
  }
});