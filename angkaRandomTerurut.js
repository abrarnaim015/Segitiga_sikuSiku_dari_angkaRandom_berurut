let numPar = nilaiRandomArr(5)
let strPar = numPar[0]

function urutAngka(str, arr)
{
    let parStr = str.toLowerCase()
    let parArr = arr.length
    for(let i=0; i<parArr; i++)
    {
        for(let x=i+1; x<parArr; x++)
        {
            if(parStr==='b')
            {
                if(arr[i]<arr[x])
                {
                    let tamp = arr[i]
                    arr[i] = arr[x]
                    arr[x] = tamp
                }
            }
            else if(parStr==='k')
            {
                if(arr[i]>arr[x])
                {
                    let tamp = arr[i]
                    arr[i] = arr[x]
                    arr[x] = tamp
                }
            }
        }
    }
    return arr
}

function nilaiRandomArr(angka)
{
    let output = []
    let acuan = Math.floor(Math.random()*10)+1
    if(acuan%2===0)
    {
        output.push('B')
    }
    else
    {
        output.push('K')
    }
    for(let i=0; i<angka; i++)
    {
        output.push(Math.floor(Math.random()*10)+1)
    } 
    return output
}
console.log(urutAngka(strPar, numPar))


function piramid(num)
{
    let x = 'x'
    let o = 'o'
    let parameter = 0
    let box = ''
    for(let i=0; i<num; i++)
    {
        let output = ''
        parameter++
        for(let j=0; j<parameter; j++)
        {
            if(j%2===0)
            {
                output+=o
            }
            else
            {
                output+=x
            }
        }
        console.log(output)
    }
}
piramid(numPar[1])