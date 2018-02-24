function printRange(x,y,z)
{

  if (y==undefined)
    {
      var temp;
      temp=x;
      x=0;
      y=temp;
    }
  if (z==undefined) z= 1;

    for (var i= x; i<y ; i+=z){
    console.log(i);
    }
}
