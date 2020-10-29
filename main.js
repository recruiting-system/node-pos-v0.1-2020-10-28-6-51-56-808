module.exports = function main() {
var r;
var Name=new Array();
var Price=new Array();
var Unit=new Array();
var count=new Array();
export function arr_choose(inputs){
    
    Name[0]=inputs[0].Name;
    Price[0]=inputs[0].Price;
    Unit[0]=inputs[0].Unit;
    count[0]=1;
    var nameArray=new Array();
for (let i=0; i<inputs.length;i++)
{
    nameArray[i]=inputs[i].Name;
};


var query=nameArray.reduce((r,v)=>{
    return r.set(v,(r.get(v)||0)+1);
},new Map());
var k=0;
for (let [key, value] of query.entries()) {
    Name[k]=key;
    count[k]=value;
    k++;
  }

var requestString='***<store earning no money>Receipt ***\n';
for (let j=0;j<Name.length;j++)
{
    requestSubstring='Name:'+Name[k],'Quantity:'+count, 'Unit'
}
return Name;
}
};
