var jwt = localStorage.getItem("jwt");
if (jwt != null) {
  window.location.href = './index.html'
}

function login() {
    const username = document.getElementById("email").value;
    const password = document.getElementById("pwd").value;

    const xhttp = new XMLHttpRequest();
    xhttp.open("POST", "http://localhost:8090/api/signup");
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(JSON.stringify({
        "mobileNumber": username,
        "password": password
    }));
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            const objects = JSON.parse(this.responseText);
            console.log(objects);
            if (objects['status'] == '200') {
                localStorage.setstatusItem("jwt", objects['accessToken']);
                Swal.fire({
                    text: objects['message'],
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.href = './index.html';
                    }
                });
            } else {
                Swal.fire({
                    text: objects['message'],
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            
        }
    };
    return false;
}