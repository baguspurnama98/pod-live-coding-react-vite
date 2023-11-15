# Live Coding - POD Mandiri

## Instruction

1. Buat halaman
   **Basecode : [Download here](https://github.com/baguspurnama98/pod-live-coding-react-vite)**

MockUp:
<img title="a title" alt="Alt text" src="src\assets\mockup\Home.jpg">
<img title="a title" alt="Alt text" src="src\assets\mockup\Modal.jpg">

## Challenge

```JSX
const {useState} = React

function App(){
    const [flag, toggleFlag] = useState(false)

    const handleOnClick = () => {
        toggleFlag(!flag)

        setTimeout(()=>{ toggleFlag(!flag);
        }, 2000)
    }

    return (
        <div>
            <button onClick="{handleOnClick}">{flag ? "True" : "False"}</button>
        </div>
    )
}
```

```JSX
const data = [{
  name: "Wahyu",
  age: 29,
  pet: { name: "cat", quantity: 2 }
},
{
  name: "Gamal",
  age: 27,
  pet: { name: "dog", quantity: 1 }
}]

const temp = [...data]

temp[indexSelected] = {
  ...temp[indexSelected],
  age: temp[indexSelected].age + 1,
  pet: {
    quantity: 5,
    ...temp[indexSelected].pet,
  }
}

```
