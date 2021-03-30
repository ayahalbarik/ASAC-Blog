'use strict';

const div =document.getElementById('form');


function ayah(name,article,subject,content){
    this.name=name;
    this.article=article;
    this.subject=subject;
    this.content=content;
    Push.all.ayah(this);
}
let ayah.all=[];

ayah.prototype.tolowercase =function(){
 this.ayahArticle=this.ayahArticle.tolowercase();

}

getdatafromlocal();
ayah.prototype.tolowercase=function(){
    this.ayahSubject=this.ayahSubject.tolowercase();

}
getdatafromlocal();
 function handler(event) {
   event.addEventListener();
   var submit = document.createElement('submit');
   submit.type = "button"
   submit.addEventListener('click', function(){
       
   });
   
 
}



    function submit() {
      const div =document.getElementById('sumbit',click);
      div submit.appendc
    }  
getdatafromlocal();

    function getdatafromlocal(){
        let localStorage=localStorage.getItem('ayahdata');
        if (localStorage){
            ayah.all=JSON.parse(localStorage);

        }
    }