const spawner = require('child_process').spawn;

let path_py = 'py_process.py';

/*
// STRING

const data = 'Hello Py';
const python_process = spawner('python', [path_py, data]);

python_process.stdout.on('data' , (res)=> {
    console.log("From py process : "  + res.toString());
})

*/



//ARRAY
/*
const data = ['Hello Py'];

const python_process = spawner('python', [path_py, JSON.stringify(data)]);

python_process.stdout.on('data' , (res)=> {
    console.log("From py process : " + (res.toString()));
})
*/

// OBJECT
const data = {
    js_data: "Hello Py",
    py_data : undefined // must be undefined not null
}


const python_process = spawner('python', [path_py, JSON.stringify(data)]);

python_process.stdout.on('data' , (res) => {
    console.log("From py process : " + (res.toString()));
})
