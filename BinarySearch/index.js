//Binary Seach

class BinarySearch{
    constructor(OriginalArray,value){
        this.OriginalArray =  OriginalArray;
        this.ValueToSearch = value;
        this.fleetingArray = OriginalArray;
        this.indexOfValue = undefined;
        this.first= 0;
        this.last= OriginalArray.length -1;
        this.mid= Math.round((OriginalArray.length-1)/2);
    }
    ValueReference(){
        return {
            index: this.indexOfValue,
            value: this.ValueToSearch
        };
    }
    FindIndexOfValue(){
        /* let i = 0; */
        while(this.indexOfValue===undefined /* && i>3 */ ){
            if(this.OriginalArray[this.first]===this.ValueToSearch) {
                this.indexOfValue = this.first;
            };
            if(this.OriginalArray[this.last]===this.ValueToSearch) {
                this.indexOfValue =  this.last;
            };
            if(this.OriginalArray[this.mid]===this.ValueToSearch){
                this.indexOfValue = this.mid;
            }
            if(this.OriginalArray[this.mid]<this.ValueToSearch){
                const originalMid= this.mid;
                this.first = this.mid;
                this.mid = Math.round((originalMid+this.last)/2)
            }else{
                console.log({mid:this.mid,first:this.first,last:this.last});
                this.last = this.mid;
                this.fleetingArray = this.fleetingArray.filter((value,index)=>index<=this.last);
                this.mid = Math.round(Math.round((this.fleetingArray.length-1)/2));
            }
            /* i++; */
        }
    }
}

const xd = new BinarySearch([1,2,3,4,5,6,7,8,9],7);

xd.FindIndexOfValue()
console.log(xd.FindIndexOfValue())
/* console.log(xd) */
/* console.log(xd.FindIndexOfValue()); */
console.log(xd.ValueReference())
