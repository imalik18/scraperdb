$.ajax({
    method: "GET",
    url: "/articles/saved/" 
})
.then(function (data) {
   
    for (var i = 0; i < data.length; i++) {
        console.log(data[i])
        // Display the apropos information on the page
        $("#saved").append();
    }
})

