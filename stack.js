class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count]=element;
        let push_res = `${element}`;
        console.log(`${element} added to ${this.count}`);
        this.count += 1;
        let count =this.count -1;
        return [push_res, count];
    }

    pop () {
        if(this.count == 0) return undefined;
        let deleteItem = this.items[this.count - 1];
        this.count -= 1;
        console.log(`${deleteItem} removed`);
        return deleteItem;
    }

    peek () {
        let peek_data = this.items[this.count -1];
        console.log(`Top element is ${this.items[this.count -1]}`);
        return this.items[this.count - 1], peek_data;
    }

    isEmpty() {
        console.log(this.count == 0 ? 'Stack is empty' : 'Stack is NOT empty');
        return this.count==0;
    }

    size () {
        console.log(`${this.count} element/s in Stack`);
        return this.count;
    }

    print () {
        let str = '';
        for (let i = 0; i < this.count; i++) {
            str += this.items[i] + ' ';
        }
        return str;
    }
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared..')
        return this.items;
    }
}

const stack =  new Stack ();

    // stack.isEmpty();
    // stack.push(100);
    // stack.push(200);
    // stack.peek();
    // stack.push(300);
    // console.log(stack.print());
    // stack.pop();
    // stack.pop();
    // stack.clear();
    // console.log(stack.print());
    // stack.size();
    // stack.isEmpty();

$(document).ready(function () {
    empty = stack.isEmpty();
    if (empty == true) {
        $("#renderDiv").append(`
        <div>Stack is Empty</div>
    `);
    }
    else {
        $("#renderDiv").append(`
        <div>Stack not Empty</div>
    `);
    }
    push_data = stack.push(100);
    $("#renderDiv").append(`
        <div>${push_data[0]} is added to ${push_data[1]}</div>
    `);
    push_data = stack.push(200);
    $("#renderDiv").append(`
        <div>${push_data[0]} is added to ${push_data[1]}</div>
    `);
    peek_data = stack.peek();
    $("#renderDiv").append(`
        <div>Top element is ${peek_data}</div>
    `);
    push_data = stack.push(300);
    $("#renderDiv").append(`
        <div>${push_data[0]} is added to ${push_data[1]}</div>
    `);
    print_data = console.log(stack.print());
    $("#renderDiv").append(`
        <div>${print_data}</div>
    `);
    deleteItem = stack.pop();
    $("#renderDiv").append(`
        <div>${deleteItem} removed</div>
    `);
    deleteItem = stack.pop();
    $("#renderDiv").append(`
        <div>${deleteItem} removed</div>
    `);
    clear = stack.clear();
    $("#renderDiv").append(`
        <div>Stack cleared..</div>
    `);
    size = stack.size();
    $("#renderDiv").append(`
        <div>${size} element/s in Stack</div>
    `);
    empty = stack.isEmpty();
    if (empty == true) {
        $("#renderDiv").append(`
        <div>Stack is Empty</div>
    `);
    }
    else {
        $("#renderDiv").append(`
        <div>Stack not Empty</div>
    `);
    }
});
    
