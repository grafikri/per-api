
const db = require('./../database/firebase');
const analytics = require('./../database/analytics')

jest.mock('./../database/firebase')

test('save data', () => {
  const obj = {
    push: jest.fn().mockReturnValue({
      set: jest.fn(),
      key: '#1234'
    })
  }

  db.ref.mockImplementation(() => obj)

  const data = {}
  const id = analytics.save(data)
  expect(db.ref.mock.calls[0][0]).toEqual('analytics')
  expect(id).toEqual('#1234')
  expect(obj.push).toBeCalledTimes(1)
  expect(obj.push().set).toBeCalledTimes(1)
})

describe('fetch request', () => {
  test('fetch data without params', async () => {
    
    const obj = {
      orderByChild: jest.fn().mockReturnThis(),
      startAt: jest.fn().mockReturnThis(),
      endAt: jest.fn().mockReturnThis(),
      once: jest.fn((param, callback) => {
        const data = {
          val() {
            return [
              'dummyContext'
            ]
          }
        }
        callback(data)
      })
    }    

    db.ref.mockImplementation(() => obj)

    expect(db.ref.mock.calls[0][0]).toEqual('analytics')
    expect(await analytics.fetch()).toEqual(['dummyContext'])
    expect(obj.orderByChild).toHaveBeenCalledTimes(1);
    expect(obj.once).toHaveBeenCalledTimes(1);
    expect(obj.once.mock.calls[0][0]).toBe('value')
    expect(obj.startAt).not.toHaveBeenCalled();
    expect(obj.endAt).not.toHaveBeenCalled();

  })


  test('fetch data with startDate param', async () => {

    const obj = {
      orderByChild: jest.fn().mockReturnThis(),
      startAt: jest.fn().mockReturnThis(),
      endAt: jest.fn().mockReturnThis(),
      once: jest.fn((param, callback) => {
        const data = {
          val() {
            return [
              'dummyContext'
            ]
          }
        }
        callback(data)
      })
    }

    

    db.ref.mockImplementation(() => obj)

    expect(db.ref.mock.calls[0][0]).toEqual('analytics')
    expect(await analytics.fetch('this is date value')).toEqual(['dummyContext'])
    expect(obj.orderByChild).toHaveBeenCalledTimes(1);
    expect(obj.once).toHaveBeenCalledTimes(1);
    expect(obj.once.mock.calls[0][0]).toBe('value')
    expect(obj.startAt).toHaveBeenCalled();
    expect(obj.endAt).not.toHaveBeenCalled();

  })

  test('fetch data with endDate param', async () => {

    const obj = {
      orderByChild: jest.fn().mockReturnThis(),
      startAt: jest.fn().mockReturnThis(),
      endAt: jest.fn().mockReturnThis(),
      once: jest.fn((param, callback) => {
        const data = {
          val() {
            return [
              'dummyContext'
            ]
          }
        }
        callback(data)
      })
    }

    db.ref.mockImplementation(() => obj)

    expect(db.ref.mock.calls[0][0]).toEqual('analytics')
    expect(await analytics.fetch(null,'this is date value')).toEqual(['dummyContext'])
    expect(obj.orderByChild).toHaveBeenCalledTimes(1);
    expect(obj.once).toHaveBeenCalledTimes(1);
    expect(obj.once.mock.calls[0][0]).toBe('value')
    expect(obj.startAt).not.toHaveBeenCalled();
    expect(obj.endAt).toHaveBeenCalled();

  })


  test('fetch data with both startDate and endDate param', async () => {

    const obj = {
      orderByChild: jest.fn().mockReturnThis(),
      startAt: jest.fn().mockReturnThis(),
      endAt: jest.fn().mockReturnThis(),
      once: jest.fn((param, callback) => {
        const data = {
          val() {
            return [
              'dummyContext'
            ]
          }
        }
        callback(data)
      })
    }

    db.ref.mockImplementation(() => obj)

    expect(db.ref.mock.calls[0][0]).toEqual('analytics')
    expect(await analytics.fetch('this is start date', 'this is end date')).toEqual(['dummyContext'])
    expect(obj.orderByChild).toHaveBeenCalledTimes(1);
    expect(obj.once).toHaveBeenCalledTimes(1);
    expect(obj.once.mock.calls[0][0]).toBe('value')
    expect(obj.startAt).toHaveBeenCalled();
    expect(obj.endAt).toHaveBeenCalled();

  })
})

