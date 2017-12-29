"use strict";

//Vue aplikacijos sukurimas
let app = new Vue({
    el: "#app",
    data: {
        title: "Mano toDo",
        tasks: [{
                name: "Išmokti Javascript",
                isChecked: false
            },
            {
                name: "Aplikuoti į praktiką",
                isChecked: false
            }
        ],
        taskInput: "",
    },
    methods: {
        addTask: function () {
            if (this.taskInput !== "") {
                app.tasks.push({name: this.taskInput, isChecked: false});
                this.taskInput = "";
            }
        },
    },
    computed: {
        doneTasks : function(){
            let array = this.tasks.filter(function(item){
                return item.isChecked;
            });
            return array.length;
        }
    }
});



