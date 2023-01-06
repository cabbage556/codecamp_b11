// 이 파일은 수정하시면 안됩니다


const axios = require('axios')
const student = require('./student.json')
const colors = require('colors')

class MyCustomReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig
    this._options = options
  }

  onRunStart() {
    const isEmpty = Object.values(student).some((val) => !val)
    const courseArr = ["ON_F", "ON_B", "OFF_F", "OFF_B"]

    if (isEmpty)
      throw new Error('\x1b[33m ⚠️  student.json 파일을 채워주세요!⚠️\x1b[0m')

    if (student.generation <= 0) {
      throw new Error('\x1b[33m ⚠️  기수를 제대로 기입해주세요!⚠️\x1b[0m')
    }

    if (!courseArr.includes(student.course)) {
      throw new Error(
        '\x1b[33m ⚠️  프론트/백엔드 코스를 제대로 기입해주세요!⚠️\x1b[0m'
      )
    }

    if (student.name === '홍길동') {
      throw new Error('\x1b[33m ⚠️  이름을 제대로 기입해주세요!⚠️\x1b[0m')
    }
  }

  onRunComplete(_, results) {
    console.log()
    console.log('------ 테스트 결과 ------'.rainbow)
    console.log(
      `통과한 테스트 : ${results.numPassedTestSuites}개 / ${results.numTotalTestSuites}개`
        .magenta
    )
    console.log(`-------------------------`.rainbow)

    let data = {
      ...student,
      passed: results.numPassedTestSuites,
      failed: results.numFailedTestSuites,
      success: [],
      testFolder: ''
    }

    try {
      const splitStr = results.testResults[0].testFilePath.includes('/')
        ? '/'
        : '\\'
      data.testFolder = results.testResults[0].testFilePath
        .split('__test__' + splitStr)[1]
        .split(splitStr)[0]
      results.testResults.forEach((ele, i) => {
        if (ele.numFailingTests === 0) {
          data.success.push(ele.testResults[0].ancestorTitles[0])
        }
      })

      axios
        .post('http://algorithm.codebootcamp.co.kr:3000/jep', data)
        .then(() => {
          console.log('👏👏👏 ', '제출이 완료되었습니다.'.rainbow, '👏👏👏')
        })
        .catch((error) => {
          if (error.response) {
            console.log(
              '🚨 서버에서 오류 응답 : '.bgRed,
              error.response.data.message
            )
          } else if (error.request) {
            console.log('🚨 서버에서 응답받지 못함'.bgRed, error.request)
          } else {
            console.log('🚨', error.message)
          }
          console.log(
            '🚨🚨🚨 제출이 되지 않았습니다. 다시 시도해주세요. 🚨🚨🚨'.bgRed
          )
        })
    } catch (error) {
      console.log(error)
      console.log(
        '🚨 테스트가 제대로 진행되지 않아 제출을 할 수 없습니다!!'.bgRed
      )
    }
  }
}

module.exports = MyCustomReporter
