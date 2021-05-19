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
        trashedTasks: [],
    }
    ,
    methods: {
        addTask() {
            if (app.newTask.length > 5) {
                app.tasks.push(app.newTask);
                app.newTask = "";
            } else {
                return alert("Inserisci un messaggio di almeno 5 caratteri.");
            }

        },
        removeTask(index) {
            app.trashedTasks.push(app.tasks[index]);
            app.tasks.splice(index, 1);
        },
        completeTask(index) {
            app.completedTasks.push(app.tasks[index]);
            app.tasks.splice(index, 1);

        }
    }
})