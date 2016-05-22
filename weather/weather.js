function showCustomer(s)
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    {
	    	var Data=JSON.parse(xmlhttp.responseText);
	    	if(Data["HeWeather data service 3.0"][0].status == 'ok')
	    		Exhibition(Data);
	    	else
	    	{
	    		alert("输入有误,请重新输入");
	    		document.getElementById("inputt").value = "";
	    	}
	    }
	  }
	xmlhttp.open("GET","http://apis.baidu.com/heweather/weather/free?city="+s,true);
	xmlhttp.setRequestHeader("apikey","191eba41c3947d05adb21dedecc5d157");
	xmlhttp.send();
}
(function(x){
	showCustomer(x);
})("西安");
function seach(){
	var st = document.getElementById("inputt");
	document.getElementById("cityes").innerHTML = st.value;
	var trs = document.getElementById("tables");
	for(var j =0;j<6;j++)
	{
		while(trs.cells[j].hasChildNodes())
		{
			trs.cells[j].removeChild(trs.cells[j].firstChild);
		}

	}
    showCustomer(st.value);
	document.getElementById("inputt").value = "";
}
function DataDay(dates){
	var datas = dates.split(/[-\s]+/);
	var datas=new Date(datas[0],parseInt(datas[1]-1),datas[2]);
	var str = null;
	switch(datas.getDay())
	{
		case 0: str =  dates + "  星期日";break;
		case 1: str =  dates + "  星期一";break;
		case 2: str =  dates + "  星期二";break;
		case 3: str =  dates + "  星期三";break;
		case 4: str =  dates + "  星期四";break;
		case 5: str =  dates + "  星期五";break;
		case 6: str =  dates + "  星期六";break;
	}
	return str;
}
function Exhibition(Data){
	var date = Data["HeWeather data service 3.0"][0].basic.update.loc;
	var datas=DataDay(date);
	var datd = document.getElementById("dataed");
	datd.innerHTML = datas;
	var pic = document.getElementById("imgs");
	pic.src = "http://files.heweather.com/cond_icon/"+Data["HeWeather data service 3.0"][0].now.cond.code+".png";
	var days = document.getElementById("day");
	days.innerHTML ="天气: "+ Data["HeWeather data service 3.0"][0].now.cond.txt;
	var temperatures = document.getElementById("temperature");
	temperatures.innerHTML = Data["HeWeather data service 3.0"][0].now.tmp;
	var cilcir = document.getElementById("circul");
	cilcir.style.display = "block";
	var pcpp = document.getElementById("pcpp");
	pcpp.src = "5.png";
	var pcpp = document.getElementById("humm");
	pcpp.src = "4.png";
	var pcpns = document.getElementById("pcpn");
	pcpns.innerHTML =Data["HeWeather data service 3.0"][0].now.pcpn+"%";
	var hums = document.getElementById("hum");
	hums.innerHTML = Data["HeWeather data service 3.0"][0].now.hum+"%";
	var winds= document.getElementById("wind");
	winds.innerHTML = "风向: "+Data["HeWeather data service 3.0"][0].now.wind.dir;
	var scs= document.getElementById("sc");
	scs.innerHTML = "风力: "+Data["HeWeather data service 3.0"][0].now.wind.sc+"级";
	var table = document.getElementById("tables");
	for(var i = 1;i<7;i++){
		var day_data = document.createElement("label");
		day_data.innerHTML = DataDay(Data["HeWeather data service 3.0"][0].daily_forecast[i].date);
		var day_pic = document.createElement("img");
		day_pic.src="http://files.heweather.com/cond_icon/"+Data["HeWeather data service 3.0"][0].daily_forecast[i].cond.code_d+".png";
		var dayss = document.createElement("label");
		dayss.innerHTML ="天气:"+ Data["HeWeather data service 3.0"][0].daily_forecast[i].cond.txt_d+"</br>";
		var temps = document.createElement("label");
		temps.innerHTML = Data["HeWeather data service 3.0"][0].daily_forecast[i].tmp.max+"~"+Data["HeWeather data service 3.0"][0].daily_forecast[i].tmp.min+"</br>";
		var feng = document.createElement("label");
		feng.innerHTML ="风力: " +Data["HeWeather data service 3.0"][0].daily_forecast[i].wind.sc;	
		table.cells[i-1].appendChild(day_data);
		table.cells[i-1].appendChild(day_pic);
		table.cells[i-1].appendChild(dayss);
		table.cells[i-1].appendChild(temps);
		table.cells[i-1].appendChild(feng);
	}

}