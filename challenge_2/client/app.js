$('#submit').on('click', (event)=>{
    event.preventDefault();
    input = $('input').val();
    console.log('input: ', input);
    app.send(input);
});


