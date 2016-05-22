window.onload=function(){
	var btn = document.getElementsByTagName("input");
	var roots = document.getElementsByClassName("root")[0];
	console.log(roots);
	btn[0].addEventListener("click",function(e){
		if(e.readystate == "complete")
			return;
		else
		{
			initialization();
			First(roots);
			color();
		}
	});
	btn[1].addEventListener("click",function(e){
		if(e.readystate == "complete")
			return;
		else
		{
			initialization();
			Center(roots);
			color();
		}
	});
	btn[2].addEventListener("click",function(e){
		if(e.readystate == "complete")
			return;
		else
		{
			initialization();
			Last(roots);
			color();
		}
	})
}
var child =[];
var time;
function First(root){
	if(root !== null)
	{
		child.push(root);
		First(root.firstElementChild);
		First(root.lastElementChild);
	}
}
function Center(root){
	if(root !== null)
	{
		First(root.firstElementChild);
		child.push(root);
		First(root.lastElementChild);
	}
}
function Last(root){
	if(root !== null)
	{
		First(root.firstElementChild);
		First(root.lastElementChild);
		child.push(root);
	}
}
function initialization(){
	clearInterval(time);
	child =[];
	var divs = document.getElementsByTagName('div');
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.backgroundColor = '#fff';
	}
}
function color(){
	var i =0;
	child[0].style.backgroundColor = "#ff4747";
	time=setInterval(function(){
		i++;
		if(i<child.length){
			child[i-1].style.backgroundColor = "#fff";
			child[i].style.backgroundColor ="#ff4747";
		}
		else
		{
			child[i-1].style.backgroundColor = "#fff";
			clearInterval(time);
		}
	},500);
}