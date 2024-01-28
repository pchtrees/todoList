document.querySelector('#newTask input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        document.querySelector('#push').click();
    }
});

document.querySelector('#push').onclick = function () {
    if (document.querySelector('#newTask input').value.length == 0) {
        alert("Please Enter a Task");
    } else {
        document.querySelector('#tasks').innerHTML +=
            `
            <div class="task"> 
                <span id="taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                    <i class="fa-solid fa-trash"></i>   
                </button>   
            </div>
        `;
        var btn = document.querySelector('.delete');
        btn.addEventListener('click', function () {
            let keyEvent = new KeyboardEvent('keydown', { key: 'Enter', shiftKey: true });
            document.body.dispatchEvent(keyEvent);
        });

        var current_tasks = document.querySelectorAll(".delete");
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function () {
                this.parentNode.remove();
            };
        }

        var tasks = document.querySelectorAll(".task");
        for (var i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function () {
                this.classList.toggle('completed');
            };
        }

        document.querySelector("#newTask input").value = "";
    }
};
