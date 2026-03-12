function createTodoList() {
    const todos = [
        {
            task: "Buy groceries",
            isCompleted: false
        }
    ]
    
    // add task
    const addNewTask = (task) => {
        const newTask = {
            task,
            isCompleted: false
        };
        todos.push(newTask);
        return todos;
    }
    // remove task
    const removeTask = (task) => {
        const removeIdx = todos.findIndex((todo) => todo.task === task);
    
        if(removeIdx === -1) {
            console.log("It is already removed");
            return;
        }
    
        todos.splice(removeIdx, 1);
        return todos;
    }
    // mark complete
    const markAsComplete = (task) => {
        const removeIdx = todos.findIndex((todo) => todo.task === task);
    
        if(removeIdx === -1) {
            console.log("It is not there");
            return;
        }
    
        todos[removeIdx] = {
            ...todos[removeIdx],
            isCompleted: true
        }
        return todos;
    }
    // list tasks
    const listTasks = () => {
        return todos;
    }

    return {
        addNewTask,
        removeTask,
        markAsComplete,
        listTasks
    }
}

const td = createTodoList();

console.log(td.listTasks());
td.addNewTask("Complete class");
console.log(td.listTasks());
td.markAsComplete("Complete class");
console.log(td.listTasks());
td.removeTask("Complete class");
console.log(td.listTasks());