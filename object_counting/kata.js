const getCount = (objects) => objects.filter(obj => obj.x == obj.y).length

getCount([{x:1, y:1}, {x:3,y:4}, {x:2, y:2}]) // => 2