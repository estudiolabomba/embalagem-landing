/* eslint-disable no-sequences */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable promise/param-names */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-expressions */
export const Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      ;(a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = 'Send')
      const t = JSON.stringify(a)
      Email.ajaxPost('https://smtpjs.com/v3/smtpjs.aspx?', t, function (e) {
        n(e)
      })
    })
  },
  ajaxPost: function (e, n, t) {
    const a = Email.createCORSRequest('POST', e)
    a.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
      (a.onload = function () {
        const e = a.responseText
        t != null && t(e)
      }),
      a.send(n)
  },
  ajax: function (e, n) {
    const t = Email.createCORSRequest('GET', e)
    ;(t.onload = function () {
      const e = t.responseText
      n != null && n(e)
    }),
      t.send()
  },
  createCORSRequest: function (e, n) {
    let t = new XMLHttpRequest()
    return (
      'withCredentials' in t
        ? t.open(e, n, !0)
        : typeof XDomainRequest !== 'undefined'
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    )
  }
}
