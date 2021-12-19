function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

class Node{
	constructor(stateObj){
		this.state = stateObj; //State Object
		this.edges = {}; //Array of Node Objects
	}
	addDirectedEdge(throwNum,nextNode){
		this.edges[throwNum] = nextNode;
	}
	genNextNode(throwNum){
		return new Node(this.state.genNextState(throwNum));
	}
	getStateString(){
		return this.state.getStateString();
	}
	getStateArray(){
		return this.state.getStateArray();
	}
	hasEdge(edge){
		return this.edges.hasOwnProperty(edge);
	}
	equals(node){
		return this.state.equals(node.state);
	}
}

class Queue{
	constructor() { 
		this.items = [];
	}
	enqueue(ele){
		this.items.push(ele);
	}
	dequeue(){
		if(this.isEmpty()){
			return False;
		}
		return this.items.shift();
	}
	isEmpty(){
		return this.items.length == 0;
	}
	printQueue() { 
		var str = ""; 
		for(var i = 0; i < this.items.length; i++) 
			str += this.items[i] +" "; 
		return str; 
	}
}