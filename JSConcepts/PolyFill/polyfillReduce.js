Array.prototype.myReduce = function(cb,initial){
	var acc = initial;

	for(let i=0;i<this.length;i++){
	acc=acc ? cb(acc,this[i],i,this):this[i]
	}
	return acc;


}
const nums=[1,2,3,4]

const s=nums.myReduce((acc,curr,i,arr)=>{
	return acc+curr
},0)

console.log(s)