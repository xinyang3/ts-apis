/**
 * @description public 默认值 类的内部和外部都可以访问
 * protected 本类和子类可以访问，类外部不能访问
 * private 只有本类内部可以访问
 */
class Person {
    private address: string;
    protected name: string;
    public age: string;
    // constructor(name: string) { this.name = name; }
    // 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承
    // protectd constructor(theName: string) { this.name = theName; }
    constructor(theName: string) { this.name = theName; }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name)
        this.department = department;
    }

    public getElevatorPitch() {
        // this.address;
        this.name;
        this.age;
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let person = new Person("aa");
let howard = new Employee("Howard", "Sales");
console.log(howard.getElevatorPitch());
// howard.name; // 错误
howard.age;

/** 
 * 参数属性通过给构造函数参数前面添加一个访问限定符来声明。 使用 private限定一个参数属性会声明并初始化一个私有成员；对于 public和 protected来说也是一样
 */
class Octopus {
    // readonly name: string;
    readonly numberOfLegs: number = 8;
    
    // constructor (theheName;
    // }Name: string) {
    //     this.name = t
    constructor(readonly name: string, public age: number) { // 实例化了一个成员变量
    }
}
var octopus = new Octopus('a', 1)
octopus.name; 
octopus.age;

/**
 * @description get set
 */
let passcode = "secret passcode";
class Employee2 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
let employee = new Employee2();
employee.fullName = "Bob Smith";

/**
 * @description class静态属性
 */
class Grid {
    static origin = {x: 0, y: 0};
    calculateDistanceFromOrigin(point: {x: number; y: number;}) {
        Grid.origin;
    }
    constructor (public scale: number) { }
}
let grid1 = new Grid(1.0);  // 1x scale

/**
 * 抽象类
 */
abstract class Department {
    constructor(public name: string) {
    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; // must be implemented in derived classes
}

class AccountingDepartment extends Department {

    printMeeting(): void {

    }
    generatReports(): void {

    }
}
let department: Department, accountingDepartment: Department;
// department = new Department('') // 抽象类不能实例化
accountingDepartment = new AccountingDepartment('');
accountingDepartment.printMeeting
// accountingDepartment.generatReports; // 抽象类型里没有定义的方法