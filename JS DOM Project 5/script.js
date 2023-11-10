
//arr is storing the objects where each contain dp i.e profile and story images link
var arr = [
    {dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1vZGVsfGVufDB8fDB8fHww"},
    {dp:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"},
    {dp:"https://images.unsplash.com/photo-1604681630513-69474a4e253f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1vZGVsfGVufDB8fDB8fHww", story:"https://images.unsplash.com/photo-1604681742095-dd1ccc5e4900?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1604514649606-2fdd0399de88?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D", story:"https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},
    {dp:"https://images.unsplash.com/photo-1604674170775-4121de69ef01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8", story:"https://images.unsplash.com/photo-1604674085341-7d586a4483c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D"},

]

var storiyan = document.querySelector("#storiyan")
// clutter is empty so we add above arr in which it iterates a/c to the size of array
var clutter = ""

arr.forEach(function(elem, idx){
    // ${} - are template literals which access the objects, they are stored inside back-ticks (``)
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter
storiyan.addEventListener("click", function(dets){
    //this is to make the property of the full-screen to block, so that it covers whole card
    document.querySelector("#full-screen").style.display = "block"
    // here we are displaying story on fullscreen in which we are targeting id in which story is present
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    
    setTimeout(function(){
        // after sometime we want the story to disappear so changing the display property block ---> none
        document.querySelector("#full-screen").style.display = "none"
    }, 3000)

})