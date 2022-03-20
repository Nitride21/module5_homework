let map = new Map ([
    ['banana','yellow'],
    ['pomegranate','red'],
    ['kiwi','green']
])

for (let [name, color] of map){
    console.log('Ключ - ' + name + ', значение - ' + color);
}