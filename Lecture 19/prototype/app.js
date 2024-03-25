let todo = {
    title : 'buy flowers',
    desc : function(){
        return `you have to ${this.title}`;
    }
};
console.log(todo.title);
console.log(todo.desc());

// this is prototype
console.log(todo.toString());

// 
let a = "Divyanshu"