/**
 * Created by Stoyan on 7.6.2017 г..
 */
function findVar (text) {
    let vars = text.match(/_[A-Za-z0-9]+/g);

   for (let i = 0; i < vars.length; i++) {
       vars[i] = vars[i].split('');
       for (let e = 0; e < vars[i].length; e++) {
           if (vars[i][e] == '_') {
               vars[i][e] = '';
           }
       }
       vars[i] = vars[i].join('');
   }

   return vars.join(',');
}

console.log(findVar('The _id and _age variables are both integers.'));
