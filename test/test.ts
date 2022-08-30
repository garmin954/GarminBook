// export function sleep(sec:number = 500):Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('等待了' + sec + '秒')
//       resolve('ok')
//     }, sec * 1000)
//   })
// }
//
// export const limitPromise = (limit=5) => {
//   const queue:any[] = []
//   const that = global
//   let count = 0
//   return <T, R extends any[]>(fn: (...v:R)=>Promise<any>, ...arg: R)=>{
//     const task = function() {
//       return new Promise((resolve, reject) => {
//         fn.apply<any, R, any>(that, arg).then((res:T)=>{
//           resolve(res)
//         }).catch((err:Error)=>{
//           reject(err)
//         }).finally(()=>{
//           // 执行下一条
//           count--
//           if (count < limit){
//             queue.shift()()
//           }
//         })
//       })
//     }
//     queue.push(task)
//     // return
//     // 判断限制数量是否满足
//     if (count < limit){
//       count++
//       // 执行
//       queue.shift()()
//     }
//   }
// }

export class Events {
  private events;
  constructor() {
    this.events = new Map();
  }

  // 订阅监听
  on(key: string, fn: <T extends null>(v?: T) => void) {
    !this.events.has('key') && this.events.set(key, fn);
  }

  // 关闭
  off(key: string) {
    this.events.has('key') && this.events.delete(key);
  }

  // 发布
  emit<T>(key: string, value: T) {
    const fn = this.events.get('key');
    fn && fn(value);
  }
}

export const Instanceof = <T extends { prototype: any }>(
  ex: Object,
  pt: any,
) => {
  let proto = Object.getPrototypeOf(ex);
  const prototype = pt.prototype;

  while (proto !== null) {
    console.log(proto);
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
};

export const Call = (fn: any, context: object, ...arg: any[]) => {
  context = context ?? window;
  const key = Symbol();
  Reflect.set(context, key, fn);
  // @ts-ignore
  const result = context[key](...arg);
  Reflect.deleteProperty(context, key);
  return result;
};

export const Apply = (fn: any, context: object, argArr: any[]) => {
  context = context ?? window;
  const key = Symbol();
  Reflect.set(context, key, fn);
  // @ts-ignore
  const result = context[key](...argArr);
  Reflect.deleteProperty(context, key);
  return result;
};

export const Bind = (fn: any, context: object, ...arg: any[]) => {
  return (...newArg: any[]) => {
    return fn.apply(context, [...arg, ...newArg]);
  };
};

const o = {
  a: 1,
  fn: function() {
    function inside() {
      console.log(this.a);
    }
    inside();
  },
  fn2: function() {
    console.log(this.a);
  },
};

o.fn();
o.fn2();
