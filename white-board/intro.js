let options=document.querySelectorAll(".option")
for(let i=0;i<options.length;i++)
{
  if(options[i].id=="pencil")
  {options[i].addEventListener("click",function()
  {
    console.log("pencil is clicked");
  })
  }
  if(options[i].id=="eraser")
  {options[i].addEventListener("click",function()
    {
      console.log("eraser is clicked");
    })
  }
  if(options[i].id=="sticky")
  {options[i].addEventListener("click",function()
    {
          console.log("sticky is clicked");
    })
  }
  if(options[i].id=="upload")
  {options[i].addEventListener("click",function()
    {
      console.log("upload is clicked");
    })
  }
  if(options[i].id=="download")
  {options[i].addEventListener("click",function()
      {
        console.log("download is clicked");
      })
  }
  if(options[i].id=="undo")
    {options[i].addEventListener("click",function()
      {
        console.log("undo is clicked");
      })
    }
  if(options[i].id=="redo")
  {options[i].addEventListener("click",function()
      {
        console.log("redo is clicked");
      })
  }
}
