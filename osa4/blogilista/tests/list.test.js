// const { test, describe } = require('node:test')
const { test, describe } = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')

test('dummy palauttaa yhden', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  assert.strictEqual(result, 1)
})

describe('kokonaistykkäykset', () => {
  test('tyhjän listan tykkäykset on nolla', () => {
    const blogs = []
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 0)
  })

  test('kun listalla on vain yksi blogi, sen tykkäykset ovat yhtä suuret kuin blogin tykkäykset', () => {
    const blogs = [
      {
        title: 'Testi 1',
        author: 'Testaaja 1',
        url: 'http://testi1.com',
        likes: 1
      }
    ]
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 1)
  })

  test('suuremman listan tykkäykset lasketaan oikein', () => {
    const blogs = [
      {
        title: 'Testi 1',
        author: 'Testaaja 1',
        url: 'http://testi1.com',
        likes: 1
      },
      {
        title: 'Testi 2',
        author: 'Testaaja 2',
        url: 'http://testi2.com',
        likes: 2
      },
      {
        title: 'Testi 3',
        author: 'Testaaja 3',
        url: 'http://testi3.com',
        likes: 3
      }
    ]
    const result = listHelper.totalLikes(blogs)
    assert.strictEqual(result, 6)
  })
})

describe('suosituin blogi', () => {
  test('tyhjä lista palauttaa tyhjän', () => {
    const blogs = []
    const result = listHelper.favoriteBlog(blogs)
    assert.strictEqual(result, null)
  })

  test('yksi blogi palauttaa sen', () => {
    const blogs = [
      {
        title: 'Testi 1',
        author: 'Testaaja 1',
        url: 'http://testi1.com',
        likes: 1
      }
    ]
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Testi 1',
      author: 'Testaaja 1',
      likes: 1
    })
  })

  test('useammasta blogista suosituin palautetaan', () => {
    const blogs = [
      {
        title: 'Testi 1',
        author: 'Testaaja 1',
        url: 'http://testi1.com',
        likes: 1
      },
      {
        title: 'Testi 2',
        author: 'Testaaja 2',
        url: 'http://testi2.com',
        likes: 2
      },
      {
        title: 'Testi 3',
        author: 'Testaaja 3',
        url: 'http://testi3.com',
        likes: 3
      }
    ]
    const result = listHelper.favoriteBlog(blogs)
    assert.deepStrictEqual(result, {
      title: 'Testi 3',
      author: 'Testaaja 3',
      likes: 3
    })
  })
})