window.onload = function(){
	(function(){
		var qd= document.getElementById("queding");
		qd.addEventListener("click",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else
				textt();
		});
		var st = document.getElementById("inppt"),
		teams = document.getElementById("team");
		st.onkeyup=function(e){
			if(/[,，.。;；\n\s、]+/.test(st.value) || e.keyCode ==13)
			{
				var str = st.value.split(/[,，.。；;、\t\n]+/);
				if(st.value!=" ")
				{
					var flag = 0;
					var list  = teams.childNodes;
					if(list.length<10)
					{
						for(var i = 0;i<list.length;i++)
						{
							if(list[i].innerHTML === str[0])
							{
								flag = 1;
							}
						}
						if(flag == 0)
						{
							Creat(str[0]);
							st.value="";
						}
						else
							st.value="";
					}
					else
					{
						teams.removeChild(list[0])
						Creat(str[0]);
						st.value="";
					}
				}
			}
		}
	})();
	function Creat(s){
		var queue = document.getElementById("team");
		var rows = document.createElement("li");
		rows.style.height = "80px";
		rows.style.backgroundColor = "#FF4747";
		rows.innerHTML = s;
		rows.addEventListener("click",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else{
				deletes(e.target);
			}
		});
		queue.appendChild(rows);
	rows.addEventListener("mouseover",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else
			{
				addt(e.target);
			}
		});
	rows.addEventListener("mouseout",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else
			{
				e.target.innerHTML =s;
			}
		});
	}
	function Creats(s){
		var queue = document.getElementById("teams");
		var rows = document.createElement("li");
		rows.style.height = "80px";
		rows.style.backgroundColor = "#FF4747";
		rows.innerHTML = s;
		rows.addEventListener("click",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else{
				deletes(e.target);
			}
		});
		queue.appendChild(rows);
	rows.addEventListener("mouseover",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else
			{
				addt(e.target);
			}
		});
	rows.addEventListener("mouseout",function(e){
			if(e.readystate == "complete")
			{
				return;
			}
			else
			{
				e.target.innerHTML =s;
			}
		});
	}
	function addt(trage){
		console.log(trage.innerHTML);
		trage.innerHTML ="删除";
	}
	function deletes(trage){
		trage.remove();
	}

	function textt(){
		var texts = document.getElementById("indextext");
		var ttst = texts.value.split(/[,，.。;；、\s\t\n]+/);
		for(var i = 0;i<ttst.length;i++){
			var list = document.getElementById("teams").childNodes;
			var flag = 0;
			if(list.length<10)
			{
				for(var j = 0;j<list.length;j++)
				{
					if(list[j].innerHTML === ttst[i])
					{
						flag = 1;
					}
				}
				if(flag == 0)
				{
					Creats(ttst[i]);
					texts.value="";
				}
				else
					texts.value="";
			}
			else
			{
				teams.removeChild(list[0])
				Creats(ttst[i]);
				texts.value="";
			}
		}
		texts.value="";
	}
}
