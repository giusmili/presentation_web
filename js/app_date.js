$(function(){
    let dates=[{
                creation:"1989-1992",
                developpement:1994,
                abandon:'2000-2006',
                compatibilite:'2007-2014'
                
                }];
    //boucle des dates
    const target=$('.date');
    for(i=0; i<dates.length; i++){

        target.append('<li>Création du HTML : '+dates[i].creation+'<li>Développement des outils en sémentique : '+dates[i].developpement+'<li>Abondon HTML en faveur du xhtml : '+dates[i].abandon+'<li>Compatibilité des langages : '+dates[i].compatibilite);
    }
});