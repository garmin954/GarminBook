---
title: 公用方法
nav:
  path: /basic
  title: 基础
  order: 100
group:
  path: /basic/utils
  title: 公用方法
  order: 100

---
### 日期处理
```typescript
/** 克隆 **/
const cloneDate = (data:Date):Date => {
  return new Date(data) 
}
/** 克隆 **/
const cloneDates = (data:Date | Date[]):Date|Date[] => {
  return Array.isArray(data) ? data.map(cloneDate) : cloneDate(data)
}
```
**日期偏移**
```typescript
/** 日期偏移 **/
const getDayByOffset = (data:Date, day:number):Date => {
  const d = cloneDate(data)
  return d.setDate(d.getDay() + day)
}

/** 日期的昨天 **/
const getPrevDay = (data:Date) => getDayByOffset(data, -1)

/** 日期的明天 **/
const getNextDay = (data:Date) => getDayByOffset(data, 1)

/** 获取今天 **/
const getToDay = () => {
  const today = new Date()
  today.setHours(0,0,0,0)
  return today
}
```
**获取某月的天数**
```typescript
function getMonthEndDay (year:number, month:number): number {
  return 32 - new Date(year, month - 1, 32).getDate()
}
```
