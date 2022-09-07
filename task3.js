const data = [
    { type: "A", value: "Tesla" },
    { type: "A", value: "GMC" },
    { type: "B", value: "KIA" },
    { type: "C", value: "Dodge" },
    { type: "C", value: "Ford" }
  ];
  let types = [];
  data.map((temp) => {
    types.push(temp.type);
  });
  types = Array.from(new Set(types));
  const a = [];
  for (let i = 0; i < types.length; i++) {
    let temp = [];
    for (let k = 0; k < data.length; k++) {
      if (data[k].type === types[i]) {
        temp.push(data[k].value);
      }
    }
    a.push({ type: types[i], value: [...temp] });
    temp = [];
  }
  document.getElementById('demo').innerHTML=a