import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { serializeState } from '../../../src/utils/state'

test('serializeState', () => {
  // Simple case.
  assert.is(serializeState({}), `'{}'`)

  // Expect JSON double quotes not to be needlessly escaped.
  assert.is(serializeState({ hello: 'world' }), `'{"hello":"world"}'`)

  // Expect inner double quotes to be escaped
  assert.is(
    serializeState({ hello: 'inner " quote' }),
    `'{"hello":"inner \\\\" quote"}'`
  )

  // Expect single quotes to be escaped.
  assert.is(serializeState({ quote: `'` }), `'{"quote":"\\'"}'`)

  // Expect angle brackets to be escaped.
  assert.is(
    serializeState({ brackets: `< >` }),
    `'{"brackets":"\\u003C \\u003E"}'`
  )
})

test.run()
