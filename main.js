class ProcessManager{
    static status=0;
    constructor()
    {
        ProcessManager.status=1;
    }
}
class Manager{
    static pmanager;
   
     
    static getReference()
     {
         console.log(ProcessManager.status)
         if(ProcessManager.status==0)
         {
            Manager.pmanager=new ProcessManager();
         }
         console.log(ProcessManager.status)
         return Manager.pmanager;
     }
}
const pmi=Manager.getReference();
const pmi2=Manager.getReference();

console.log(pmi==pmi2)


Hi sai priya .....
console.log("kirans change of code")

