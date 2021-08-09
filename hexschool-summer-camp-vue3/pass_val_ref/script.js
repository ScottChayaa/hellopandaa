
function question1() {
    const family = [{name:'爸'}, {name:'媽'}];
    family.forEach((item, key) => {
        const newItem = {
            name: '杰倫'
        }

        family[key] = newItem;
        console.log('family[key]', family[key]);
        console.log('item', item);
    });

    console.log(family);
}


function question2() {
    var a = {
        x: '小明'
    }

    var b = a;
    
    a.y = a = {
        x: '杰倫'
    }

    console.log(b === a); // 1 一樣, 2 不一樣 

    console.log('a:', a);
    console.log('b:', b);

    console.log(b.y === a); // 1 一樣, 2 不一樣 
}

question1();
console.log('===');
question2();
