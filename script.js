var btn = document.querySelector(".reg a")
var flex = 0;
btn.addEventListener("click", function(){
    if(flex == 0){
        btn.style.backgroundColor = "green"
        flex = 1; 
    }
    else{
        btn.style.backgroundColor = "rgb(231, 21, 63)"
        flex = 0; 
    }   
})

fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
.then(response => response.json())
.then(data => {
    const packageList = document.getElementById('package-list');
    
    data.forEach(post => {
        const listItem = document.createElement('li');
        listItem.textContent = `${post.title}`;
        packageList.appendChild(listItem);
    });
})
.catch(error => console.error('Error fetching data:', error));
