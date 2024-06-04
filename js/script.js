document.querySelector('.mybtn').addEventListener('click', function(){
    // alert('ok');

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then((data) => {
        document.querySelector('.s_myspinner').remove();
        console.log(data)
        var tr = '';
        data.forEach((currentValue, index, arr) => {
            console.log(currentValue);
            tr = tr + `<tr>
                            <td>`+ currentValue.userId +`</td>
                            <td>`+ currentValue.id +`</td>
                            <td>`+ currentValue.title +`</td>
                            <td>`+ currentValue.completed +`</td>
                            <td>
                                <button class="btn btn-sm btn-success s_viewbtn" data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
                                <button class="btn btn-sm btn-warning">Edit</button>
                                <button class="btn btn-sm btn-danger s_delbtn">Delete</button>
                            </td>
                        </tr>`
        });
        console.log(tr);

        document.querySelector("table > tbody").innerHTML = tr;
    })
    .catch(function(error){

    });
})

document.addEventListener('click',function(e){
    if(e.target && e.target.classList[3] == 's_viewbtn'){

        console.log(e.target.closest('tr').querySelector('td:nth-child(3)').innerHTML);

        let t = e.target.closest('tr').querySelector('td:nth-child(3)').innerHTML;
        let status = e.target.closest('tr').querySelector('td:nth-child(4)').innerHTML;
        let id = e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML;
        let uid = e.target.closest('tr').querySelector('td:first-child').innerHTML;

        document.querySelector('.modal-body > .list-group > li:first-child').innerHTML = uid;
        document.querySelector('.modal-body > .list-group > li:nth-child(2)').innerHTML = id;
        document.querySelector('.modal-body > .list-group > li:nth-child(3)').innerHTML = t;
        document.querySelector('.modal-body > .list-group > li:last-child').innerHTML = status;
    } 
    if(e.target && e.target.classList[3] == 's_delbtn'){
        e.target.closest('tr').remove();
    }

    
})


