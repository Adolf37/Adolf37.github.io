
//-------------------------------------------------------------------------------------------------------------------
/*
// 1)
//Longest Substring Without Repeating Characters
//print Solution().lengthOfLongestSubstring('abrkaabcdefghijjxxx')
//# 10

const hossz = (str)=>{
    let db = 0;
    let  betuk = [];
    let leghoszabb = -1;

   [...str].forEach(elem => {
       if(betuk.includes(elem)){
           db = 1;
           betuk = [elem]
       }else{
           betuk.push(elem);
           db++;
           if(db > leghoszabb){
               leghoszabb = db;
           }
           
       }
   });
   console.log(leghoszabb)
}

hossz('abrkaabcddefghijjxxx');
*/


//-------------------------------------------------------------------------------------------------------------------
// 2)
//Longest Palindromic Substring
/*Input: "banana"
Output: "anana"

Input: "million"
Output: "illi"
*/
/*
function palidrom(str){
    let i;
    let lehetseges=[];
    let opcio=[];
    for(i =0;i<str.length-2;i++){
        let i2=i;
        let j=str.length-1;
        while(i2<=j){
            if( (i2==j) && (opcio.length == 0)){
                break;
            }
            if(str[i2] == str[j]){
                opcio.push(str[i2]);
                i2++;
                j--;
            }else{
                if(opcio.length>0){
                    lehetseges.push(opcio);
                    opcio = [];
                }
                i2 = i;
                j--;
               
            }
        }
        
       
    }
    
    lehetseges = lehetseges.sort(function(a,b){
        return b.length - a.length
    });
    let leghoszabb = lehetseges[0];
    console.log(leghoszabb);
    let result = leghoszabb.join('');
    if(leghoszabb.length % 2 ==1){
        leghoszabb.pop();
    };
    result = result + leghoszabb.reverse().join('');
    console.log('Valasz:',result)
}

palidrom("banana");
palidrom("million");*/


//-------------------------------------------------------------------------------------------------------------------
// 3)
/*Input: A = [1,3,3,5,7,8,9,9,9,15], target = 9
Output: [6,8]

Input: A = [100, 150, 150, 153], target = 150
Output: [1,2]

Input: A = [1,2,3,4,5,6,10], target = 9
Output: [-1, -1]*/
/*
function keres(tomb,cel){
    let [e,m] = [tomb.indexOf(cel),tomb.lastIndexOf(cel)];
    if(e==-1 && m == -1){
        return [-1,-1]
    }
    if(e==m){
        return e;
    }
    if(e>=0 && m>=0){
        return [e,m]
    }
    
}

console.log(keres([1,3,3,5,7,8,9,9,9,15],9))
console.log(keres([100, 150, 150, 153],150))
console.log(keres([1,2,3,4,5,6,10],9))
*/


//-------------------------------------------------------------------------------------------------------------------
//4)
/*Input: "((()))"
Output: True

Input: "[()]{}"
Output: True

Input: "({[)]"
Output: False*/
/*
function vizsgal(str){
    let nyit = '[({';
    let zar = '])}';
    let i;
    let tomb=[]
    for(i=0;i<str.length;i++){
        if(str[i]=='[' || str[i]=='{' || str[i]=='('){
            tomb.push(str[i])
        }
        if(str[i] == ']'){
            if(tomb[tomb.length-1]=='['){
                tomb.pop()
            }
            else{return false};
        }
        if(str[i] == ')'){
            if(tomb[tomb.length-1]=='('){
                tomb.pop()
            }
            else{return false};
        }
        if(str[i] == '}'){
            if(tomb[tomb.length-1]=='{'){
                tomb.pop()
            }
            else{return false};
        }
    }
    if(tomb.length == 0){
        return true;
    }
}

console.log(vizsgal('((()))'));
console.log(vizsgal('[()]{}'));
console.log(vizsgal('({[)]'));
*/


//-------------------------------------------------------------------------------------------------------------------
//5)
/*Given a list of numbers with only 3 unique numbers (1, 2, 3), sort the list in O(n) time.

Example 1:
Input: [3, 3, 2, 1, 3, 2, 1]
Output: [1, 1, 2, 2, 3, 3, 3]*/
/*
function optRendezes(tomb){
    let m = 0,e=0;
    let i;
    let result = [];
    for(i=0;i<tomb.length;i++){
        if(tomb[i]==2){
            m++;
        }
        if(tomb[i]==1){
            e++;
        }
    }
  
    for(i=0;i<e;i++){
        result.push(1);
    }
    for(i=e;i<e+m;i++){
        result.push(2);
    }
    for(i=e+m;i<tomb.length;i++){
        result.push(3)
    }

    return result;

}
console.log(optRendezes([3, 3, 2, 1, 3, 2, 1]));

const opt2 = (tomb)=>{
    let e = 0;
    let ve = tomb.length - 1;
    let i;
    let result=[];
    for(i=0;i<tomb.length;i++){
        switch(tomb[i]){
            case 1:
                result[e]=1;
                e++;
                break;
            case 3:
                result[ve]=3;
                ve--;
                break;
        }
    }
    for(i=e;i<=ve;i++){
        result[i]=2;
    }
    return result;
}
console.log(opt2([3, 3, 2, 1, 3, 2, 1]));*/


//-------------------------------------------------------------------------------------------------------------------
//6)
/*You are given a list of numbers, and a target number k. Return whether or not there are two numbers in the list that add up to k.

Example:
Given [4, 7, 1 , -3, 2] and k = 5,
return true since 4 + 1 = 5.*/
/*
function par(tomb,k){
    let has = {}
    let i;
    let jok =[]
    for(i=0;i<tomb.length;i++){
      if(has[k-tomb[i]] == undefined){
          has[tomb[i]]=k-tomb[i];
      } else {
          has[tomb[i]]=k-tomb[i];
          jok.push([has[tomb[i]],has[k-tomb[i]]]) 
      }
    }
    return jok
}


console.log(par([4, 7,-2, 1 , -3, 2],5))
*/


//-------------------------------------------------------------------------------------------------------------------
//7)
/*Given a list of numbers, where every number shows up twice except for one number, find that one number.

Example:
Input: [4, 3, 2, 4, 1, 3, 2]
Output: 1*/
/*
function egyedi(tomb){
    let result = [];
    tomb.forEach(elem => {
      if(tomb.indexOf(elem) == tomb.lastIndexOf(elem)){
           result.push(elem);
      }
    })
    return result;
}

function maskepp(tomb){
   tomb.sort();
   for(i = 0;i<tomb.length-1;i+=2){
    if(tomb[i]!==tomb[i+1] && tomb[i]!== tomb[i-1]){
        return tomb[i];
    }
   }
}
console.log(maskepp([4, 3, 2, 4, 1, 3, 2]));
console.log(egyedi([4, 3, 2, 4, 1, 3, 2]));

*/


//-------------------------------------------------------------------------------------------------------------------
//8)
/*You are given an array of integers in an arbitrary order. Return whether or not it is possible to make the array non-decreasing by modifying at most 1 element to any value.

We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

Example:

[13, 4, 7] should return true, since we can modify 13 to any value 4 or less, to make it non-decreasing.

[13, 4, 1] however, should return false, since there is no way to modify just one element to make the array non-decreasing.*/
/*
function alakithatoE(tomb){
    let i;
    let db=0;
    for(i=0;i<tomb.length-1;i++){
        if(tomb[i]>tomb[i+1]){
            db++;
            if(db>1){
                return false;
            }
        }
    }
    if(db<2){
        return true;
    }
}

console.log(alakithatoE([13, 4, 7]));
console.log(alakithatoE([13, 4, 1]));*/


//-------------------------------------------------------------------------------------------------------------------
/*For example, "biting" and "sitting" have an edit distance of 2 (substitute b for s, and insert a t).*/



//-------------------------------------------------------------------------------------------------------------------
//9)
/*You are given a positive integer N which represents the number of steps in a staircase.
 You can either climb 1 or 2 steps at a time. Write a function that returns the number of unique ways to climb the stairs.
 print staircase(4)
# 5
print staircase(5)
# 8
*/
/*
 function lehetsege(db){
     //console.log(db);
     if(db==0){
         return 1;
     }
     if(db < 0){
         return 0;
     }
 
    return lehetsege(db-1) + lehetsege(db-2);
    
 }
console.log(lehetsege(5));
*/

//-------------------------------------------------------------------------------------------------------------------
//10)
 /*Given a list of numbers, find if there exists a pythagorean triplet in that list.
  A pythagorean triplet is 3 variables a, b, c where a^2 + b^2 = c^2
  Input: [3, 5, 12, 5, 13]
    Output: True
    Here, 5^2 + 12^2 = 13^2.
    25+144 = 169 = 13*13
*/
/*
function pyt(tomb){

    console.log('input: ',tomb)
    let negyzetek = tomb.map((elem)=>{
       return  elem*elem;
    });
    let i,j;
    for(i = 0;i<tomb.length--;i++){
        for(j=i+1;j<tomb.length;j++){
            if(negyzetek.includes(tomb[i]*tomb[i] + tomb[j]*tomb[j])){
                console.log(tomb[i] + '^2 +',tomb[j]+'^2 =',tomb[i]*tomb[i] + tomb[j]*tomb[j] + '  ('+Math.sqrt(tomb[i]*tomb[i] + tomb[j]*tomb[j])+')');
                return true;
            }
        }
    }
    return false;
}
pyt([3, 5, 12, 5, 13]);
*/


//-------------------------------------------------------------------------------------------------------------------
//11)
/*You are given a 2D array of characters, and a target string. Return whether or not the word target word exists in the matrix.
 Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

Example:

[['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']]
 */
/*
 function szokereso(matrix,szo){
    let sor = matrix.length;
    let oszlop = matrix[0].length;
    let tempI,tempJ;
    let szoI=0;
    let cnt;
  for( let i =0 ;i<sor;i++){
      for(let j=0;j<oszlop;j++){
        tempI=i;
        tempJ=j;

        szoI=0;
        cnt=0;
        while(matrix[i][tempJ]==szo[szoI]){
           
            cnt++;
            szoI++;
            
            tempJ++;

            if(cnt==szo.length){
                return true;
            }
            if(tempJ==oszlop) break;

           
        }

        szoI=0;
        cnt=0;
        while(matrix[tempI][j]==szo[szoI]){
           
            cnt++;

            szoI++;
            tempI++;

            if(cnt==szo.length){
                return true;
            }
            if(tempI ==sor ) break;
            
        }
      }
  }
  return false;
 }

 let matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']];

console.log(szokereso(matrix,'MASS'));
console.log(szokereso(matrix,'QOS'));
console.log(szokereso(matrix,'AOB'));



*/

//-------------------------------------------------------------------------------------------------------------------
//12)
/*Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s.
 If there isn't one, return 0 instead.

Example:
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.*/
/*
function minDeNagyobb(tomb,ertek){
  
    let opciok = [];
    let egyLehetoseg = [];
    let masolat = ertek;
    let i2;
  for(let i = 0; i<tomb.length ;i++){
      i2 = i;
      masolat = ertek;
    while(masolat > 0){
        masolat = masolat - tomb[i2];
        egyLehetoseg.push(tomb[i2]);
        i2++;
        if(i2 == tomb.length){
            break;
        }   
    }
    if(masolat > 0){continue;}
    opciok.push(egyLehetoseg);
    egyLehetoseg = [];
  }
   //console.log(opciok)
  opciok = opciok.sort((a,b)=>{
      return a.length - b.length
  })


  console.log(opciok[0])
  return opciok[0]
}

minDeNagyobb([2,3,1,2,4,3],7)
*/

//-------------------------------------------------------------------------------------------------------------------
//13)
/*You 2 integers n and m representing an n by m grid, determine the number of ways you can get from the top-left to the bottom-right of the matrix y going only right or down.

Example:
n = 2, m = 2

This should return 2, since the only possible routes are:
Right, down
Down, right.*/
/*
function lehetseges(n,m){
   
   
    let matrix=[];
    for(let i=0;i<n;i++){
        matrix[i]=[];
    }

    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            matrix[i][j]=1;
        }
    }

    console.log(matrix)
    

    let i = 0;
    let j = 0;
    function keres(i,j,n,m){
        if(i === n || j === m){
            return 0;
        }
        if(i === n-1 && j === m-1){
            return 1;
        }

        return keres(i+1,j,n,m) + keres(i,j+1,n,m);
    }
    console.log('lehetseges opciok szama = ',keres(i,j,n,m));
}

lehetseges(3,3)
*/

//--------------------------------------------------------------------------------------------
//14)
/*Given a string with the initial condition of dominoes, where:

. represents that the domino is standing still
L represents that the domino is falling to the left side
R represents that the domino is falling to the right side

Figure out the final position of the dominoes. If there are dominoes that get pushed on both ends, the force cancels out and that domino remains upright.

Example:
Input:  ..R...L..R.
Output: ..RR.LL..RR*/

/*
function domino(hatasok){
    console.log('input: ',hatasok);
    let pontosan = hatasok.split('');
    
    let r,l;
    while(true){
        r=0;l=0;
        let masolat = pontosan;
        for(let i =0;i<pontosan.length;i++){
            
            switch(pontosan[i]){
                case '.':
                    if(pontosan[i-1]==='R' && pontosan[i+1]==='R'){
                        pontosan[i] ='R'
                    }
                    if(pontosan[i-1]==='L' && pontosan[i+1]==='L'){
                        pontosan[i]='L'
                    }
                break;
                
                case 'R':
                    if(pontosan[i+1] ==='.' && pontosan[i+2]==='.' && r===0){
                        pontosan[i+1]= 'R';
                        r++;
                    }
                    if(pontosan[i+1]==='.' && i+2 === pontosan.length){
                        pontosan[i+1] = 'R'
                    }
                break;
                case 'L':
                    if(pontosan[i-1] ==='.' && pontosan[i-2]==='.' && l===0){
                        pontosan[i-1]= 'L';
                        l++;
                    }
                    if(pontosan[i-1] ==='.' && i-1 === 0){
                        pontosan[i-1] ='L'
                    }
                break;
            }
        }
        if(masolat === pontosan){
            console.log('output: ',masolat.join(''));
            break;
        }
        
    }
}

domino('..R...L..R.')

*/
//--------------------------------------------------------------------------------------------
//15)
//Letters reverse The cat in the hat => ehT tac ni eht tah,  the=eth
/*
const betuForditas = (str) =>{

    let szavak = str.split(' ');

    for(let i = 0;i< szavak.length; i++){
       
       let betuk = szavak[i].split('');
       let forditva = betuk.reverse().join('')
       szavak[i] = forditva
        
    }

    console.log(szavak.join(' '))
   
}

betuForditas('The cat in the hat')
*/

//--------------------------------------------------------------------------------------------
//16)
//common part of arrays
/*
const kozosResz =(tomb1,tomb2)=>{


    let kozosResz=[];
    let kozosReszP=0;

    let megoldas = [];

    for(let i =0;i<tomb1.length;i++){

        if(megoldas[tomb1[i]] !== 1){
            megoldas[tomb1[i]] = 1;
        }  
    }

    for(let i=0;i<tomb2.length;i++){
        if(megoldas[tomb2[i]] === 1){
            kozosResz[kozosReszP]=tomb2[i];
            kozosReszP++;
            megoldas[tomb2[i]]=0;
        }
    }
    
    console.log(kozosResz)


}

kozosResz([4,9,5],[9,4,9,8,4])*/
//--------------------------------------------------------------------------------------------
//17)
//Most common words
/*
function maxSzo(tomb,k){
    let kulcs = {}
    let maxIsmetlodes = 0
    let vegso = []
    

    //elemek bejarasa
    tomb.forEach((elem) =>{ 
      // console.log(elem,index)

      //megszamolom hogy egy szo hanyszor ismetlodik
      if(kulcs[elem] == undefined){
          kulcs[elem] = 1
      } else {
          kulcs[elem] = kulcs[elem] + 1
      }
    })
    
    //console.log(kulcs)
    console.log('Eredeti: ',kulcs)
    let kor = 0
    while(k > 0){
        kor++
        maxIsmetlodes = 0
        for(ertek in kulcs){
            //console.log(kulcs[ertek])
            if(kulcs[ertek] > maxIsmetlodes){
                maxIsmetlodes = kulcs[ertek]
            }
        }

        for(ertek in kulcs){
            //console.log(kulcs[ertek])
            if(kulcs[ertek] === maxIsmetlodes && !vegso.includes(ertek)){
                vegso[vegso.length] = ertek
                kulcs[ertek]= -1
                //vegso.sort()
            }
        }
        console.log(`${kor}.vegigmenes: `,kulcs)
        k--

    }
    
    console.log('eredmeny: ',vegso)
    
}
maxSzo(["daily", "interview", "pro", "for", "daily", "pro","pro", "problems"],2)



 */

//--------------------------------------------------------------------------------------------
//18)
//Given a positive integer n, find all primes less than n.
/*
const prims = (n)=>{
    const e = [];
    let t=2;
    while(t<=n){
        if(primT(t)){
            e.push(t);
        }
        t++;
    }
    return e;
}

const primT=(n)=>{
    if(n==2){
        return true;
    }
    let i;
    let b=true;
    for(i=2;i<=n/2;i++){
        if(n%i==0){
            b=false;
        } 
    }
    return b;
}

console.log(prims(50))
*/

//--------------------------------------------------------------------------------------------
//19)

//Given a non-negative integer n, convert the integer to hexadecimal and return the result as a string.
//Hexadecimal is a base 16 representation of a number, where the digits are 0123456789ABCDEF.
// Do not use any builtin base conversion functions like hex.
// 123=7B
/*
const toHex=(n)=>{
    let r='';
    let p;
    while(n>0){
        p=n%16;
        if(p<10){
            r=r+p.toString();
        }else{
            switch(p){
                case 10:
                    r=r+'A';
                    break;
                case 11:
                    r=r+'B';
                    break;
                case 12:
                    r=r+'C';
                    break;
                case 13:
                    r=r+'D';
                    break;
                case 14:
                    r=r+'E';
                    break;
                case 15:
                    r=r+'F';
                    break;
            }
        }
        n=Math.floor(n / 16);
    }
    let rr=r.split('');
    r=rr.reverse().join('');
    return r;
}

console.log(toHex(123))
*/

//--------------------------------------------------------------------------------------------
//20)
//Given two strings which represent non-negative integers, multiply the two numbers and return the product as a string as well.
// You should assume that the numbers may be sufficiently large such that the built-in integer type will not be able to store the input
/*
const bigN = (str1,str2) =>{
    
    let r = BigInt(str1)*BigInt(str2);
    return r;
}

console.log(bigN('21721937913123123122','73179213223112179'));
*/

//--------------------------------------------------------------------------------------------
//21)
//Given a string, we want to remove 2 adjacent characters that are the same,
// and repeat the process with the new string until we can no longer perform the operation.
/*
const rA=(str1)=>{
    let i;
    let a=str1.split('');

    while(37){
        s=false;
        for(i=0;i<a.length-1;i++){
            if(a[i]===a[i+1]){
                s=true;
                a.splice(i,2);
            }
        }
        if(!s) break;
    }
    return a.join('');

    }
    
    


console.log(rA('cabba'))
*/


//--------------------------------------------------------------------------------------------
//22)
//Given a list of strings, find the list of characters that appear in all strings.

//print(common_characters(['google', 'facebook', 'youtube']))
//['e', 'o']
/*
const common_characters = (stringArr)=>{
    let words = stringArr[0].split('');
    let nwords= [];
    let digit,word;
    let i;
    for(i=1;i<stringArr.length;i++){
        word=stringArr[i];
        for(j=0;j<word.length;j++){
            //console.log(stringArr[i][j])
            digit = stringArr[i][j];
            if(words.includes(digit)){
                nwords.push(digit);
            }
        }
        words=nwords;
        nwords=[];
    }
    return words
}

console.log(common_characters(['google', 'facebook', 'youtube']));
*/

//--------------------------------------------------------------------------------------------
//23)
//Given a list of meetings that will happen during a day, find the minimum number of meeting rooms that can fit all meetings.

//Each meeting will be represented by a tuple of (start_time, end_time), where both start_time and end_time will be represented by an integer
// to indicate the time. start_time will be inclusive, and end_time will be exclusive,
// meaning a meeting of (0, 10) and (10, 20) will only require 1 meeting room.

/*print(meeting_rooms([(0, 10), (10, 20)]))
# 1

print(meeting_rooms([(20, 30), (10, 21), (0, 50)]))
# 3 (all meetings overlap at time 20)*/
/*
const roomN = (t) =>{
   let newS,newF;
   let change;
    while(t.length>0){
        change=-1;
        for(i=0;i<t.length-1;i++){
            if(t[i]==null){
                continue;
            }
             [s,f]=t[i];

             let i2=i
             while(35){
                if(i2+1==t.length) break;
                if(t[i2+1]!=null){
                    [s2,f2]=t[i2+1];
                    break;
                }
                i2++;
             }
             
            if(f<=s2){
                newS=s;
                newF=f2;
                t[i+1]=null;
                t[i][0]=newS;
                t[i][1]=newF;
                change=1;
            }
            if(f2<=s){
                newS=s2;
                newF=f;
                t[i+1]=null;
                t[i][0]=newS;
                t[i][1]=newF;
                change=1;
            }
        }
        
        if(change==-1) break;
        
    }
    let numberOfRooms=0;
    for(i=0;i<t.length;i++){
        if(t[i]!=null) numberOfRooms++;
    } 
    console.log(t)
    return numberOfRooms;
    
}



console.log(roomN( [[20, 30],[10, 21],[0, 50]]))

console.log(roomN( [[20, 30],[31, 37],[0, 50]]))
*/

//--------------------------------------------------------------------------------------------
//24)

//Given a numerator and a denominator, find what the equivalent decimal representation is as a string.
// If the decimal representation has recurring digits, then put those digits in brackets
// (ie 4/3 should be represented by 1.(3) to represent 1.333...). Do not use any built in evaluator functions like python's eval.
// You can also assume that the denominator will be nonzero.

/*print(frac_to_dec(-3, 2))
# -1.5

print(frac_to_dec(4, 3))
# 1.(3)*/
/*
const frac_to_dec = (a,b)=>{
    let n = String(a/b);
    let result = n.replace(/.[0-9]+$/,''); //before .
   
    let after=n.replace(/^\+?\-?[0-9]+./,'') //after .
   
    
    let t='.';
   for(i=0;i<after.length;i++){
       
       if(after[i]==after[i+1] && after[i]==after[after.length-1]){
        t+=`(${after[i]})`;
        break;
       }else{
        t+=`${after[i]}`;
       }
   }


    result+=t;
    
    return result;
}

console.log(frac_to_dec(4, 3))  // 1.33333333333
console.log(frac_to_dec(-3, 2));  //-1.5
console.log(frac_to_dec(1, 6))   //0.16666666666
*/

//--------------------------------------------------------------------------------------------
//25)

//Given a list of numbers and a target number n, find 3 numbers in the list that sums closest to the target number n.
// There may be multiple ways of creating the sum closest to the target number, you can return any combination in any order.

/*
print(closest_3sum([2, 1, -5, 4], -1))
# Closest sum is -5+1+2 = -2 OR -5+1+4 = 0
# print [-5, 1, 2]
*/
/*
const threeNumb = (t,n)=>{
    
    if(t.length<3) return null;

    let n1,n2,n3;
    let test = t[0]+t[1]+t[2]
    let ok = [];
    let i,j;
    for(i=0;i<t.length-2;i++){
        n1=t[i];
        for(j=i+1;j<t.length-1;j++){
        n2=t[j];
        n3=t[j+1];
        if(Math.abs((n1+n2+n3-n))<=Math.abs((test-n))){
            ok=[];
            ok.push(n1);
            ok.push(n2);
            ok.push(n3);
            test = n1+n2+n3;
        }
        }
    }
    return ok;
}

console.log(threeNumb([2, 1, -5, 4], -1));
*/

//--------------------------------------------------------------------------------------------
//26)

//Given a string s and a character c, find the distance for all characters in the string to the character c in the string s.
// You can assume that the character c will appear at least once in the string.

/*print(shortest_dist('helloworld', 'l'))
# [2, 1, 0, 0, 1, 2, 2, 1, 0, 1]
*/
/*
const charDist = (s,c)=>{
    let charachters = s.split('');
    let distA = [];
    for(let i=0;i<charachters.length;i++){
        if(charachters[i]===c){
            distA[i]=0;
        }
    }

    let up,down,count1,count2;
    let i2;
    for(let i=0;i<charachters.length;i++){
        
        if(charachters[i]!==c){
            count1=0;
            i2=i;
            while(i2>0){
                count1++;
                i2--;
                if(distA[i2]===0) break;
            }
            count2=0;
            i2=i;
            while(i2!==charachters.length && i2!==charachters.length-1){
                count2++;
                i2++;
                if(distA[i2]===0) break;
            }
            if(count1<count2){
                distA[i]=count1;
            }else{
                distA[i]=count2;
            }
            if(i===0) distA[i]=count2;
            if(i===charachters.length-1) distA[i]=count1;
        }
    }
    console.log(distA)

}

charDist('helloworld','l');
*/


//--------------------------------------------------------------------------------------------
//27)

//You are only allowed to perform 2 operations, multiply a number by 2, or subtract a number by 1. Given a number x and a number y,
// find the minimum number of operations needed to go from x to y.

/*
const mind_operations=(x,y) =>{
  
    const test = (n1,n2,cnt)=>{
        if(n1===n2) return cnt;
        if(cnt>5) return 6; //i go 5 move deep in every variation ex: 6 -1 -1 -1 -1 -1 = 1 or 6 -1 -1 -1 -1 *2 = 4, ...
        if(test(n1-1,n2,cnt+1)<test(n1*2,n2,cnt+1)){
            //console.log(n1,cnt);
            return test(n1-1,n2,cnt+1)
        }else{
            //console.log(n1,cnt);
            return test(n1*2,n2,cnt+1)
        }

    }
    let e= test(x,y,0);
    
    return e;

}

console.log(mind_operations(6,20))
*/

/*
print(min_operations(6, 20))
# (((6 - 1) * 2) * 2) = 20 : 3 operations needed only
# print 3
*/


//--------------------------------------------------------------------------------------------
//28)
/*
Pascal's Triangle is a triangle where all numbers are the sum of the two numbers above it. Here's an example of the Pascal's Triangle of size 5.
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1
Given an integer n, generate the n-th row of the Pascal's Triangle.

print(pascal_triangle_row(6))
# [1, 5, 10, 10, 5, 1]
*/
/*
const pascal_triangle = (n) =>{
    const res = []
    while (res.length <= n) {
       res.unshift(1);
       for(let i = 1; i < res.length - 1; i++) {
          res[i] += res[i + 1];
       };
    };
    return res

}
console.log(pascal_triangle(6));
*/

//--------------------------------------------------------------------------------------------
//29)

/*
Given 3 sorted lists, find the intersection of those 3 lists.
print(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]))
# [4]

*/
/*
const intersection = (a1,a2,a3)=>{
    let ints = [];
    let intsF = [];
    for(let i=0;i<a1.length;i++){
        if(a2.includes(a1[i])){
            ints.push(a1[i]);
        }
    }
    for(let i=0;i<ints.length;i++){
        if(a3.includes(ints[i])){
            intsF.push(ints[i]);
        }
    }
    return intsF;
}

console.log(intersection([1, 2, 3, 4], [2, 4, 6, 8], [3, 4, 5]));
*/

//--------------------------------------------------------------------------------------------
//30)

/*
Given a matrix, transpose it. Transposing a matrix means the rows are now the column and vice-versa.
mat = [
    [1, 2, 3],
    [4, 5, 6],
]

print(transpose(mat))
# [[1, 4],
#  [2, 5], 
#  [3, 6]]
*/
/*
const transpose = (mat) =>{
    let s = mat[0].length;
    let o = mat.length;
    console.log(s,o);
    let trans=[];
    while(s>0){
        let newRow=[];
        o = mat.length;
        while(o>0){
            newRow.push(0);
            o--;
        }
        trans.push(newRow);
        s--;
    }
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<mat[0].length;j++){
            trans[j][i]=mat[i][j];
        }
    }
    console.log(trans);
}

mat = [
    [1, 2, 3],
    [4, 5, 6]
]

transpose(mat);
*/

//--------------------------------------------------------------------------------------------
//31) ??
/*
Given two binary numbers represented as strings, return the sum of the two binary numbers as a new binary represented as a string. Do this without converting the whole binary string into an integer.

Here's an example and some starter code.

def sum_binary(bin1, bin2):
  # Fill this in.
  
print(sum_binary("11101", "1011"))
# 101000
*/
/*
const sum_binary = (bn1,bn2)=>{
    let a1,a2;
    a1=bn1.split('').reverse();
    a2=bn2.split('').reverse();

}   

sum_binary("11101", "1011")*/

//--------------------------------------------------------------------------------------------
//32)
/*
Find all words that are concatenations of a list.

Input:
["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]

Output:
['techlead', 'catsdog']

    
input = ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"]

*/
/*
const findAllConcatenatedWordsInADict = (list)=>{
    let i,j;
    let first,second;
    let correct = [];
    for(i=0;i<list.length-1;i++){
        first=list[i];
        for(j=i+1;j<list.length;j++){
            second = list[j];
            if(list.includes(first+second)){
                correct.push(first+second);
            }

        }
    }
    console.log(correct);
}
let input = ["tech", "lead", "techlead", "cat", "cats", "dog", "catsdog"];
findAllConcatenatedWordsInADict(input);*/

//--------------------------------------------------------------------------------------------
//33)
/*
Given a list of unique numbers, generate all possible subsets without duplicates. This includes the empty set as well.

Here's an example and some starter code.

def generateAllSubsets(nums):
  # Fill this in.

print(generateAllSubsets([1, 2, 3]))
# [[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]
*/
/*
const generateAllSubsets = (nums)=>{
    const subts = (n,depth = 0, subset = [], results=[])=>{
        if(depth === n.length){
            results.push(subset);
        }else{
            subts(n,depth + 1,subset,results);
            subts(n , depth + 1,[...subset,n[depth]],results);
        }
        return results;
        
    }

    return subts(nums);

}

console.log(generateAllSubsets([1, 2, 3]))
*/

//--------------------------------------------------------------------------------------------
//34)
/*
Find the k-th largest number in a sequence of unsorted numbers.

def findKthLargest(arr, k):
  # Fill this in.
  
print(findKthLargest([8, 7, 2, 3, 4, 1, 5, 6, 9, 0], 3))
# 7

*/
/*
const findKthLargest = (arr,k)=>{
    let i,j,t;
    for(i=0;i<arr.length-1;i++){
        for(j=i;j<arr.length;j++){
            if(arr[i]<arr[j]){
                t=arr[i];
                arr[i]=arr[j];
                arr[j]=t;
            }
        }
    }
    console.log(arr[k-1]); //the first largest is on the index of 0
}
findKthLargest([8, 7, 2, 3, 4, 1, 5, 6, 9, 0],3)
*/

//--------------------------------------------------------------------------------------------
//35)

/*
A criminal is constructing a ransom note. In order to disguise his handwriting, he is cutting out letters from a magazine.

Given a magazine of letters and the note he wants to write, determine whether he can construct the word.

class Solution(object):
  def canSpell(self, magazine, note):
    # Fill this in.
    
print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'bed'))
# True

print(Solution().canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'cat'))
# False
*/
/*
const canSpell = (arr,word) =>{
    let compare = word.split('');
    let i;
    let logic=true;
    for(i=0;i<compare.length;i++){
        if(!arr.includes(compare[i])){
            logic=false;
            return logic;
        }
    }
    return logic;
}

console.log(canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'bed'));
console.log(canSpell(['a', 'b', 'c', 'd', 'e', 'f'], 'cat'));
*/

//--------------------------------------------------------------------------------------------
//36)
/*
Given an integer, find the number of 1 bits it has.

Here's an example and some starting code.

def one_bits(num):
  # Fill this in.

print(one_bits(23))
# 4
# 23 = 0b10111
*/
/*
const one_bits=(num)=>{
    let cnt = 0;
    while(num/2>0){
        if(num%2!=0){
            cnt++;
        }
        num = Math.floor(num/2);
    }
    console.log(cnt);
}

one_bits(23);
*/

//--------------------------------------------------------------------------------------------
//37)
/*
Given a number like 159, add the digits repeatedly until you get a single number.

For instance, 1 + 5 + 9 = 15.
1 + 5 = 6.

So the answer is 6.

class Solution(object):
  # Fill this in.

print(Solution().addDigits(159))
# 1 + 5 + 9 = 15
# 1 + 5 = 6
# 6
*/
/*
const addDigits = (num) =>{
    let str = num.toString();
    let digits = str.split('');
    let next=0;
    let i;
    while(digits.length>1){
        next=0;
        for(i=0;i<digits.length;i++){
            next= next + parseInt(digits[i]);
        }
        str = next.toString();
        digits = str.split('');
    }
    console.log(parseInt(digits[0]));
}

addDigits(159);
*/

//--------------------------------------------------------------------------------------------
//38)
/*
Given a non-empty array where each element represents a digit of a non-negative integer, add one to the integer. The most significant digit is at the front of the array and each element in the array contains only one digit. Furthermore, the integer does not have leading zeros, except in the case of the number '0'.

Example:
Input: [2,3,4]
Output: [2,3,5]
class Solution():
  def plusOne(self, digits):
    # Fill this in.

num = [2, 9, 9]
print(Solution().plusOne(num))
# [3, 0, 0]
*/

/*
const plusOne=(array)=>{
    let num=0;
    let i;
    for(i=0;i<array.length;i++){
        num=num*10+array[i];
    }
    num++;
    //console.log("Original:" + array);
    let respone = [];
    while(num>0){
        respone.push(num%10);
        num = Math.floor(num/10);
    }
    console.log(respone.reverse())
}

plusOne([2, 9, 9]);
plusOne([2,3,4]);
*/

//--------------------------------------------------------------------------------------------
//39)
/*
A Perfect Number is a positive integer that is equal to the sum of all its positive divisors except itself.

For instance,
28 = 1 + 2 + 4 + 7 + 14

Write a function to determine if a number is a perfect number.

class Solution(object):
  def checkPerfectNumber(self, num):
    # Fill this in.

print(Solution().checkPerfectNumber(28))
# True
# 28 = 1 + 2 + 4 + 7 + 14
*/

///*
const perfectNumber = (num)=>{
    let divisors = [];
    let i = 1;
    while(i<= Math.floor(num/2)){
        if(num%i === 0){
            divisors.push(i);
        }
        i++;
    }
    let compare = 0;
    divisors.forEach(element=>{
        compare = compare + element;
    });
    
    if(compare === num){
        console.log(divisors)
        console.log(num)
        console.log(true)
    }else{
        console.log(divisors)
        console.log(num)
        console.log(false)
    }
}

perfectNumber(28)

//*/
//--------------------------------------------------------------------------------------------
//40)