let majesty = require('majesty')

function exec (describe, it, beforeEach, afterEach, expect, should, assert) {
  afterEach(function () {
    // Função a ser executada antes de cada teste
  })

  beforeEach(function () {
    // Função a ser executada após cada teste
  })

  describe('Caso de teste 1', function () {
    describe('Caso de teste 1.1', function () {
      it('Executando algum teste', function () {
        expect(true).to.equal(true)
      })
    })
  })
}

let res = majesty.run(exec)

print(res.success.length, ' scenarios executed with success and')
print(res.failure.length, ' scenarios executed with failure.\n')

res.failure.forEach(function (fail) {
  print('[' + fail.scenario + '] =>', fail.execption)
})
