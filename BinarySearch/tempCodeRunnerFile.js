//Binary Seach

class BinarySearch{
    constructor(OriginalArray,value){
        this.OriginalArray =  OriginalArray;
        this.ValueToSearch = value;
        this.fleetingArray = OriginalArray;
        this.indexOfValue = undefined;
        this.mid= (OriginalArray.length-1)/2;
        this.first= 0;
        this.last= OriginalArray.length -1;
    }
    get IndexOfValue(){
        this.indexOfValue = this.FindIndexOfValue();
        return this.FindIndexOfValue();
    }
    FindIndexOfValue(){
        let i = 0;
        while(this.indexOfValue===undefined || i<3){
            console.log('hola: #'+i)
        }
    }
}

const xd = new BinarySearch([1,2,3,4,5,6,7,8,9],5);
console.log(xd.FindIndexOfValue())