const app = new Vue({
    el: "#app",

    data: {
        logo: ".assets/img/logo.png",
        newTask: "",
        tasks: [
            "learn CSS",
            "learn HTML",
            "learn JavaScript"],
        completedTasks: [],
    }
    ,
    methods: {
        addTask() {
            this.tasks.push(this.newTask);
            this.newTask = "";
        },
        removeTask(index) {
            this.tasks.splice(index, 1)
        },
        completeTask(index) {
            app.completedTasks.push(app.tasks[index]);
            app.tasks.splice(index, 1);
            
        }
    }
}
)