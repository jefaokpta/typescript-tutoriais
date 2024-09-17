

interface Todo {
    readonly title: string;
    text: string;
    done: boolean;
}

const todo = {
    title: 'Assistir Dark de novo',
    text: 'Relembrar os detalhes',
    done: false
}
//tutorial de Partial
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { title: 'Assistir GOT de novo' })

console.log(todo2)

//tutorial de Omit
type TodoPreview = Omit<Todo, 'done'>

const todo3: TodoPreview = {
    title: 'Fechar Ghost of Tsushima',
    text: 'Jogo muito bom',
}

console.log(todo3)
