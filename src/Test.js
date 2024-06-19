import { useState } from "react";

function Test() {
  const order = [100, 200, 300];
  const [counter, setCounter] = useState(() => {
    const total = order.reduce((acc, curent) => acc + curent);
    return total;
  });
  const handleClick = () => {
    setCounter((prevState) => prevState + 1);
  };

  const infos = [
    {
      name: "Ten san PushManager",
      price:12000,
      desc: 'Loremm asfjij asjf  asjdfa sdk as djfiasjf as asjdf iasd '
    },
  ];
  const [info,setInfo] = useState(infos)
  const handleUpdate = () => {
    setInfo({
      ...info,soLuong:'12'
    })
  }

  const products = [
    {
      id:1,
      name:'ten product 1',
      price:12312312,
      desc:'Lorem ipsum dolor sit amet, consectetur adip'
    },
    {
      id:2,
      name:'ten product 2',
      price:100002,
      desc:'Lorem ipsfdsfr adip'
    },
    {
      id:3,
      name:'ten product 3 assf',
      price:11112,
      desc:'Lorem ipsum dolsdfsdfsdfsdfdddddddddd sdfas  asdfasd f etur adip'
    }
  ]

  return (
    <div className="container">
      <h1>{counter}</h1>
      <button onClick={handleClick}>tang len</button>

      <div style={{ fontSize:28, fontWeight: 'bold' }}>{JSON.stringify(info)}</div>
      <button onClick={handleUpdate}>cong them so luong</button>

      <h1 style={{ fontSize:28, fontWeight: 'bold' }}>
        Phương thức map
      </h1>
      <div className="list">
          {
            products.map(product =>(
              <div className="item"key={product.id}>
                <h2 className="item-name">{product.name}</h2>
                <div className="item-price">{product.price}</div>
                <p className="item-desc">{product.desc}</p>
              </div>
            ))
          }
      </div>

    </div>
  );
}

export default Test;
