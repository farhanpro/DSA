one = [54,22,55,67,43,25];

for(i=0;i<=one.length;i++) 
{
    for(j=0;j<=one.length;j++)
    {
        if (one[i] > one[i+j])
        {
            temp = one[i];
            one[i] = one[i+j];
            one[i+j]  = temp;
        }
    }
}
console.log(one);
