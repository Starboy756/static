class MathUtil {
    static PI = 3.14159;

    static getDiameter (radius){
        return radius*2;
    }
    static getCircumference (radius){
        return 2 * this.PI * radius
    }
    static getArea (radius){
        return this.PI * radius;
    }
}

// console.log(MathUtil.PI.toFixed(2));
// console.log(MathUtil.getDiameter(4).toFixed(2));
// console.log(MathUtil.getCircumference(4).toFixed(2));
// console.log(MathUtil.getArea(4).toFixed(2));

class User {
    static userCount = 0;

    constructor (username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`Users Online ${User.userCount}`)
    } 

    sayHello(){
        console.log(`This is ${this.username}`)
    }
}

const user1 = new User("Starboy");
const user2 = new User("Sascha");
const user3 = new User("Babushka");

user1.sayHello();
user2.sayHello();
user3.sayHello();
User.getUserCount();