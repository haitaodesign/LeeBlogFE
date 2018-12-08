const qiniu = require('qiniu')
const fs = require('fs')
const path = require('path')
const ACMClient = require('acm-client').ACMClient

const AcmConfig = require('../app.config.js')
const acmConfig = AcmConfig.acm
class UploadQN {
  constructor (bucket, ak, sk) {
    this.bucket = bucket
    this.ak = ak
    this.sk = sk
  }
  doSigleFileUpload (key, file) {
    const mac = new qiniu.auth.digest.Mac(this.ak, this.sk)
    const config = new qiniu.conf.Config()
    config.zone = qiniu.zone.Zone_z2
    const options = {
      scope: this.bucket + ':' + key
    }
    const fromUploader = new qiniu.form_up.FormUploader(config)
    const putExtra = new qiniu.form_up.PutExtra()
    const putPolicy = new qiniu.rs.PutPolicy(options)
    const uploadToken = putPolicy.uploadToken(mac)
    return new Promise((resolve, reject) => {
      fromUploader.putFile(uploadToken, key, file, putExtra, (err, body, info) => {
        if (err) {
          return reject(err)
        }
        if (info.statusCode === 200) {
          resolve(body)
        } else {
          reject(body)
        }
      })
    })
  }
  doAllFileUpload (dir, prefix) {
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      const filePath = path.join(dir, file)
      const key = prefix ? `${prefix}/${file}` : file
      if (fs.lstatSync(filePath).isDirectory()) {
        return this.doAllFileUpload(filePath, key)
      }
      this.doSigleFileUpload(key, filePath)
        .then(resp => { console.log(resp) })
        .catch(error => { console.log(error) })
    })
  }
}
const publicPath = path.join(__dirname, '../public')
const acm = new ACMClient(acmConfig)
const initAcm = async () => {
  const content = await acm.getConfig('test-acm', 'DEFAULT_GROUP')
  const { qiniu } = JSON.parse(content)
  const upload = new UploadQN(qiniu.bucket, qiniu.ak, qiniu.sk)
  upload.doAllFileUpload(publicPath)
  acm.close()
}
initAcm()
