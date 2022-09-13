const get=document.querySelector('#get');
const table=document.querySelector('#table');

    get.addEventListener('click',()=>{
        fetch('http://localhost/bootstrap-frontend/displaymessages.php').then((response) => {
        console.log('age',response); 
        return response.json(); //return the json form
        }).then(data =>{
        for (let i=0;i<data.length;i++){
            table.style.display='block';
            let template=`
            <tr>
                <td>${data[i].message}</td>
            </tr>`;
            console.log(data[i].message);
            table.innerHTML+=template;
        }    
        console.log(data);
        }).catch((error)=> {
        console.log('rejected',err);
        })
    })
        