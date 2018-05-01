var nameArr   = [];
var passwordArr = [];
var flag= false;
function insert(){
                // get value from the input text
                var name = document.getElementById('name1').value;
                var password= document.getElementById('password1').value;             
                // append data to the array
                nameArr.push(name);
              	passwordArr.push(password);
              	return;
            }
function validate(){
	var number;
	var name = document.getElementById('name').value;
	var password=document.getElementById('password').value;
			for( var i = 0; i < nameArr.length; i++)
                {
                    if(name == nameArr[i])
                    	{
                    		flag= true;
                    		number=i;
                    	}
                }
            if(flag==true)
            {
            	if(password== passwordArr[number])
            	{
            		flag=true;
            	}
            	else{
            		flag=false;
            	}
            }
}


function getUrl()
        {
        	if(flag==true)
        	{
        		return "index.html";
        	}
           
        }