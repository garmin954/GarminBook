import { Events, Instanceof, Call, Bind } from './test';

describe('手写题测试', () => {
  it('订阅发布事件', () => {
    const events = new Events();

    const key = 'listener';
    events.on(key, value => {
      console.log('listener:', value);
      expect(value).toBe(1);
    });

    events.off(key);
    let a = 1;
    // setInterval(()=>{
    events.emit(key, a);
    //   a++
    // }, 2e3)
  });

  it('原型继承 ', function() {
    const a = new Object({ a: 1, b: 2 });
    const b = {};
    Object.setPrototypeOf(b, a);
    if (b instanceof Object) {
      console.log('success');
    }
    const whether = Instanceof(b, Object);
    console.log(whether);
    // expect(whether).toBe(true);
  });

  it('分配this之 call', () => {
    const a = 0;
    const context = { a: 2 };

    function fn(this: any, v: string) {
      return this.a + v;
    }

    const r = Call(fn, context, 2);
    expect(r).toBe(4);
  });

  it('分配this之 bind', () => {
    const a = 0;
    const context = { a: 2 };

    function fn(this: any, v: string) {
      return this.a + v;
    }

    const newFn = Bind(fn, context, 2);
    const r = newFn();
    expect(r).toBe(4);
  });
});
