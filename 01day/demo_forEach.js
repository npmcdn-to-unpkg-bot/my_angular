/*var arr = [1, 2, 5, 3, 6];

function testForEach() {
  arr.forEach(function(item, index) {
    console.log(item);
    return false;
    
  });

  // return false;
  console.log('我是后面的');
}

testForEach();
*/


/*
function test1(){
  console.log(this);  // window
  var obj = {};
  obj.test2 = function(){
    console.log(this);   // obj
    function test3(){
      console.log(this);    // window
    }
    test3();
  }
  obj.test2();
}

test1();
*/

var obj = {
  a: function (){
    console.log(this);
  }
};
function a(){
  console.log(this);
}

a();
obj.a();