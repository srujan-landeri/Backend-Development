
`
// Call backs as async function
In JavaScript, the event loop is responsible for
handling callbacks and managing the order in whi
ch they are executed. When an event occurs, such
as a user clicking a button or a network request
completing, a callback function is added to the 
event loop. The event loop then continuously che
cks for available callbacks, executes them one a
t a time, and moves on to the next callback in t
he queue.
`
console.log('starting task one')

setTimeout(() => {
    for(let i = 0;i < 10; i++){
        console.log('Executing task one')
    }

    console.log('Task one completed')
},0)

console.log('Next Task')