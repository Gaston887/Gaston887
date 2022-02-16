let message = prompt('entrez la taille du tableau :');
let table1 =document.getElementById("tab1");
let table2 =document.getElementById("tab2");
let moyenne =document.getElementById("AVG");
let number =document.getElementById("nbr");
let tab =[X];

function table_remplissage()
{
    let S = 0;
    let nubtab = 0 ;
   for ( let i=0 ; i<X;i++){
       
       tab[i]=prompt('entrez la  note : ');
       if(tab[i]<0 || tab[i]>20)
       {alert('Essayez de nouveau');}
       
    }
    
   for(let i=0;i<X;i++){
    table1.innerHTML += "<table border='3'>"+"<td>"+tab[i]+"</td>" ;
        
    }
    for (let i=0;i<n;i++){
        if(tab[i]>=10){ nubtab += 1 ;} ;
    }
    nbr.innerHTML += "<strong>"+nubtab+"</strong>";
    
    let somme = 0;
    
    tab.forEach(nombre);

    document.getElementById("moy").innerHTML += somme;

    function nombre(elem) {
    sum += elem;
    sum = sum / n ;
    }
    
    function trie(tab2) {
        var length = tab2.length;  
        for (var i = 0; i < length; i++) { 
              for (var j = 0; j < (length - i - 1); j++) { 
                       if(tab2[j] > tab2[j+1]) {
                               var tmp = tab2[j]; 
                               tab2[j] = tab2[j+1]; 
                               tab2[j+1] = tmp; 
                }
            }        
        }
    }
    
    
    trie(tab);
    table2.innerHTML += "<table border='3'>"+"<td>"+tab+"</td>"; 
    
}